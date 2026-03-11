import type { CollectionEntry } from 'astro:content'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { LOCALES, type Locale } from '@i18n/config'

type Post = CollectionEntry<'posts'>
type Warning = { level: 'warn' | 'error'; message: string }

const SYNCED_FIELDS = ['category', 'draft'] as const
const POSTS_DIR = join(process.cwd(), 'src/content/posts')

function getStructureFingerprint(filePath: string): string[] {
  const content = readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  const inFrontmatter = { active: false, passed: false }
  const structure: string[] = []
  let inCodeBlock = false

  for (const line of lines) {
    if (line.trim() === '---') {
      if (!inFrontmatter.passed) {
        inFrontmatter.active = !inFrontmatter.active
        if (!inFrontmatter.active) inFrontmatter.passed = true
      }
      continue
    }
    if (!inFrontmatter.passed || inFrontmatter.active) continue

    const headingMatch = line.match(/^(#{2,})\s/)
    if (headingMatch) {
      structure.push(`h${headingMatch[1].length}`)
      continue
    }

    const codeMatch = line.match(/^```(\w*)/)
    if (codeMatch) {
      if (inCodeBlock) {
        structure.push('code:end')
        inCodeBlock = false
      } else {
        structure.push(codeMatch[1] ? `code:${codeMatch[1]}` : 'code:plain')
        inCodeBlock = true
      }
    }
  }

  return structure
}

export function validateTranslations(posts: Post[]): Warning[] {
  const warnings: Warning[] = []

  const byKey = new Map<string, Map<Locale, Post>>()
  const withoutKey: Post[] = []

  for (const post of posts) {
    const key = post.data.translationKey
    if (!key) {
      withoutKey.push(post)
      continue
    }
    const group = byKey.get(key) ?? new Map<Locale, Post>()
    group.set(post.data.lang, post)
    byKey.set(key, group)
  }

  for (const post of withoutKey) {
    warnings.push({
      level: 'warn',
      message: `Post "${post.id}" has no translationKey - it won't be linked to any translation.`,
    })
  }

  for (const [key, localeMap] of byKey) {
    const missing = LOCALES.filter((l) => !localeMap.has(l))
    if (missing.length > 0) {
      const existing = [...localeMap.keys()].join(', ')
      warnings.push({
        level: 'error',
        message: `Translation "${key}" is missing locale(s): ${missing.join(', ')}. Exists in: ${existing}.`,
      })
    }

    if (localeMap.size < 2) continue

    const entries = [...localeMap.entries()]
    const [refLocale, refPost] = entries[0]

    for (const [locale, post] of entries.slice(1)) {
      for (const field of SYNCED_FIELDS) {
        const refVal = JSON.stringify(refPost.data[field])
        const val = JSON.stringify(post.data[field])
        if (refVal !== val) {
          warnings.push({
            level: 'warn',
            message: `Translation "${key}" has mismatched "${field}" between ${refLocale} and ${locale}. ${refLocale}=${refVal}, ${locale}=${val}.`,
          })
        }
      }

      const refDate = refPost.data.pubDate.toISOString()
      const postDate = post.data.pubDate.toISOString()
      if (refDate !== postDate) {
        warnings.push({
          level: 'warn',
          message: `Translation "${key}" has mismatched "pubDate" between ${refLocale} and ${locale}. ${refLocale}=${refDate}, ${locale}=${postDate}.`,
        })
      }

      const refImg = JSON.stringify(refPost.data.image.url)
      const postImg = JSON.stringify(post.data.image.url)
      if (refImg !== postImg) {
        warnings.push({
          level: 'warn',
          message: `Translation "${key}" has mismatched "image.url" between ${refLocale} and ${locale}.`,
        })
      }

      // Compare content structure (headings + code blocks)
      const refStructure = getStructureFingerprint(join(POSTS_DIR, `${refPost.id}.mdx`))
      const postStructure = getStructureFingerprint(join(POSTS_DIR, `${post.id}.mdx`))
      const refFp = refStructure.join(' → ')
      const postFp = postStructure.join(' → ')

      if (refFp !== postFp) {
        const refHeadings = refStructure.filter((s) => s.startsWith('h')).length
        const postHeadings = postStructure.filter((s) => s.startsWith('h')).length
        const refCode = refStructure.filter((s) => s.startsWith('code:') && s !== 'code:end').length
        const postCode = postStructure.filter(
          (s) => s.startsWith('code:') && s !== 'code:end'
        ).length

        warnings.push({
          level: 'error',
          message: `Translation "${key}" has different content structure between ${refLocale} and ${locale}. ${refLocale}: ${refHeadings} headings, ${refCode} code blocks. ${locale}: ${postHeadings} headings, ${postCode} code blocks.`,
        })
      }
    }
  }

  return warnings
}

export function logTranslationWarnings(warnings: Warning[]): void {
  if (warnings.length === 0) return

  console.log('\n📋 Translation validation:')
  for (const w of warnings) {
    const prefix = w.level === 'error' ? '  ❌' : '  ⚠️'
    console.log(`${prefix} ${w.message}`)
  }
  console.log()
}
