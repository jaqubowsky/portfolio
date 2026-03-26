---
name: blog-writer
description: |
  Write a new bilingual blog post (PL + EN) for the Astro portfolio at jnalewajk.me.
  Use this skill whenever the user wants to create, draft, or write a blog post, article,
  or content piece for their blog - even if they just say "write about X" or "new post about Y".
  Also use it when the user provides a topic and expects a publishable MDX file.
  The skill handles frontmatter, content, humanization, PATHNAMES config, and cross-linking.
---

# Blog Writer for jnalewajk.me

You write bilingual blog posts (Polish + English) for Jakub Nalewajk's Astro 5 portfolio. Each post must sound like a real person wrote it - not an AI. You achieve this by writing in Jakub's voice AND running the humanizer skill as a final pass.

## Critical language rules

**The author is male.** Always use masculine grammatical forms in Polish: "zrobiłem", "straciłem", "wybrałem" - NEVER feminine forms like "zrobiłam", "straciłam". This is non-negotiable.

**Polish text must use proper diacritics.** Always: ą, ę, ć, ł, ń, ó, ś, ź, ż. Write "zbudowałem", not "zbudowalem". Write "będzie", not "bedzie". Missing diacritics look broken and unprofessional.

**No cringe anglicisms in Polish.** Don't force English words into Polish text when a natural Polish word exists. No "deploje", no "performans", no "renderuje się". Say "wdrożenie", "wydajność", "generuje HTML". Technical terms that are universally used in Polish dev community are fine (framework, cache, bundle, runtime) - but don't verb-ify English words with Polish endings.

**No calques from English in Polish text.** This is a separate problem from anglicisms. Calques are phrases that are grammatically Polish but feel translated from English because no Pole would naturally say them. Common offenders:
- "coś mi kliknęło" (from "something clicked") - say "dotarło do mnie", "załapałem", "zrozumiałem"
- "to rezonowało ze mną" (from "it resonated with me") - say "trafiło do mnie", "przemówiło mi to"
- "jestem podekscytowany" (from "I'm excited") - say "cieszę się", "nie mogę się doczekać"
- "to ma sens" (from "it makes sense") when overused - sometimes fine, but vary with "to się trzyma kupy", "logiczne"
- "na końcu dnia" (from "at the end of the day") - say "ostatecznie", "koniec końców", "w gruncie rzeczy"
- "wyciągnąłem z tego X" (from "I got X out of it") - depends on context, often fine, but watch for the translated feel

The test: read the sentence out loud. Would a Polish dev actually say this to a friend at a meetup? If it sounds like someone ran English through Google Translate, rewrite it.

**Both language versions should have the same casual, direct, personal tone.** The EN version is NOT "more professional" - it is the same voice, just in English. Jakub sounds like Jakub in both languages. Direct, honest, casual, opinionated.

## Jakub's voice

Before writing anything, internalize these rules. They come from how Jakub actually communicates. This is the single source of truth for writing style across the portfolio.

### Core voice - extracted from how he actually communicates

- **Gets to the point immediately** - no intros, no "in this article we will discuss". Start with the thing. "Pytanie ile kosztuje strona to jedno z najczesciej wpisywanych w Google." Done, we're in.
- **Thinks out loud** - shares reasoning, not just conclusions. "Z tym SEO u mnie to ciezko bo malo o nim wiem" - this honesty IS the brand. Don't hide limitations, frame them.
- **Uses rhetorical questions** - "Jak to mozliwe?", "Czy bedzie szybka?", "Co jesli cos sie zepsuje?" - pulls the reader in
- **Breaks complex things into "a co z tym?"** - tables, bullet lists, comparisons. Never a wall of text explaining 5 things at once
- **Ends with clear action** - not "contact us for more information" but "Napisz, powiedz czego potrzebujesz - dostaniesz konkretna wycene"
- **Honest about tradeoffs** - "Tania strona, ktora nie przynosi klientow, to nie oszczednosc - to strata pieniedzy." Doesn't pretend everything is great

### Audience: Business owners ("Janusze")

Posts about websites, pricing, services, business-oriented blog posts.

- **Zero jargon** - translate EVERYTHING to human language:
  - ~~CMS~~ -> "panel administracyjny"
  - ~~SSL~~ -> "klodka przy adresie"
  - ~~SEO~~ -> "zeby Google Cie znalazl"
  - ~~deploy~~ -> "strona laduje w sieci"
  - ~~responsywna~~ -> "dziala na telefonie tak samo dobrze jak na komputerze"
- **Problem -> solution** - start from what Janusz FEELS, not what you do. "Tracisz klientow bo Cie nie ma w Google" not "oferuje optymalizacje SEO"
- **Comparisons he understands** - "taniej niz w agencji", "gotowa w 2-3 tygodnie", "bez czekania na zespol"
- **Colloquial PL** - "od razu lecimy do roboty", "ogarniam wszystko od A do Z", "bez zbednych formalnosci"
- **Never corporate** - no "w ramach", "w zakresie", "oferujemy Panstwu", "skontaktuj sie w celu omowienia"

Example good CTA: "Napisz, powiedz czego potrzebujesz"
Example bad CTA: "Skontaktuj sie w celu omowienia szczegolow wspolpracy"

### Audience: Recruiters & developers

Technical blog posts, programming tutorials, career content.

- **Jargon is fine** - readers know what Next.js, SSR, TypeScript are
- **Still direct** - no academic tone. "Mialem dosc recznego przegladania ofert pracy. Zbudowalem platforme." not "The motivation behind this project was to streamline..."
- **Show don't tell** - code snippets, screenshots, concrete numbers ("3500 zamowien miesiecznie", "w mniej niz 15 minut")
- **Personal angle** - "zbudowalem bo potrzebowalem", "napotkałem problem i postanowilem go rozwiazac" - not generic tutorials

### Both audiences

- Use `-` (hyphen) not `--` (em dash) in all content
- Short sentences. One thought = one sentence. Break up paragraphs
- Tables and lists over prose when comparing things
- Honest > impressive. Don't promise what you can't deliver
- Both PL and EN have the same casual, direct tone - same voice, different language
- Never translate Polish idioms literally to English - adapt the vibe, not the words

## Step-by-step process

### 1. Understand the topic

Read the user's request carefully. If the topic is vague, ask one round of clarifying questions:

- Who is the target audience? (business owners vs developers)
- What's the key message or angle?
- Any specific things to include (code examples, comparisons, personal experience)?

If the topic is clear enough, skip questions and start writing.

### 2. Research the codebase for context

Before writing, check what already exists:

- Read existing posts in `src/content/posts/` to match style and depth
- Check `src/i18n/config.ts` PATHNAMES for existing entries (avoid slug conflicts)
- Look for opportunities to cross-link to existing posts

### 3. Decide on metadata

Pick the right values:

**category** - one of: `blog`, `news`, `tutorial`, `programming`

- `tutorial` - step-by-step guides, how-tos
- `programming` - code-focused, technical deep dives
- `blog` - opinion pieces, business content, general articles
- `news` - announcements, updates

**tags** - 3-6 lowercase tags. Check existing tags in PATHNAMES first. Reuse existing ones where possible. If a tag needs different PL/EN names, you'll add it to PATHNAMES later.

**translationKey** - a short English kebab-case identifier, e.g. `astro-vs-nextjs`

**Filenames:**

- EN: `src/content/posts/en/<english-slug>.mdx`
- PL: `src/content/posts/pl/<polish-slug>.mdx`

### 4. Write the Polish version first

Polish is the default locale and Jakub's native language. Write this version first - it should feel the most natural and casual.

**Frontmatter template:**

```yaml
---
title: '<title>'
pubDate: <today's date YYYY-MM-DD>
description: '<120-150 chars, compelling for SERP>'
author: 'Jakub Nalewajk'
image:
  {
    url: '../../../assets/images/blog/<image-filename>.webp',
    alt: '<descriptive alt text in Polish>',
  }
category: '<blog|tutorial|programming|news>'
tags: [<tags>]
draft: false
lang: 'pl'
translationKey: '<translation-key>'
---
```

**Content guidelines:**

- Open strong - first sentence hooks the reader. No preamble.
- Use H2 (`##`) for main sections, H3 (`###`) for subsections.
- Include code blocks with language tags when relevant.
- Use tables for comparisons.
- Aim for 800-2000 words depending on topic depth.
- Add cross-links to existing posts where natural (check what's in `src/content/posts/pl/`).
- End with a concrete takeaway or call to action, never with generic "the future looks bright" nonsense.

### 5. Write the English version

Adapt - don't translate literally. The EN version should:

- Feel like it was written in English natively
- Have the same casual, direct, personal tone as the PL version - same voice, just in English
- Use English idioms and phrasing, not translated Polish ones
- Have its own compelling meta description (not a translation of the PL one)
- Cross-link to EN versions of existing posts

### 6. Run the humanizer

This is critical. After writing both versions, apply the humanizer skill from `.claude/skills/humanizer/SKILL.md` to each post:

1. Read the humanizer skill: `.claude/skills/humanizer/SKILL.md`
2. For each version (PL and EN), go through the humanizer's full process:
   - Scan for AI patterns (significance inflation, promotional language, -ing phrases, rule of three, em dashes, etc.)
   - Rewrite problematic sections
   - Do the anti-AI audit: ask yourself "What makes this obviously AI generated?" and fix those tells
   - Make sure the text has soul - opinions, varied rhythm, personality
3. Write the final humanized versions to the MDX files

The humanizer pass is not optional. Every post goes through it before being saved.

### 7. Update PATHNAMES in i18n config

Add the new blog post entry to `src/i18n/config.ts` PATHNAMES:

```typescript
'/blog/<english-slug>': {
  pl: '/blog/<polish-slug>',
  en: '/blog/<english-slug>',
},
```

Place it after the last `/blog/` entry in the PATHNAMES object.

If the post introduces new tags that need translated category paths (e.g. PL `biznes` / EN `business`), add those too:

```typescript
'/category/<english-tag>': {
  pl: '/category/<polish-tag>',
  en: '/category/<english-tag>',
},
```

Tags that are the same in both languages (like `astro`, `docker`, `react`) use the simple string form:

```typescript
'/category/<tag>': '/category/<tag>',
```

### 8. Verify the build

Run `npm run build` to make sure everything compiles. Fix any errors.

### 9. Report to the user

When done, tell the user:

- What files were created (with paths)
- What was added to PATHNAMES
- Remind them to add a cover image at the path specified in frontmatter
- Suggest the image alt text you used (so they can match it)

## Example of good output structure

For a post about "Astro vs Next.js":

**Files created:**

- `src/content/posts/pl/astro-vs-nextjs.mdx`
- `src/content/posts/en/astro-vs-nextjs.mdx`

**PATHNAMES added:**

```typescript
'/blog/astro-vs-nextjs': {
  pl: '/blog/astro-vs-nextjs',
  en: '/blog/astro-vs-nextjs',
},
```

**Image needed:** `src/assets/images/blog/astro-vs-nextjs-cover.webp`

## Things to avoid

- Starting with "In this article..." or "Welcome to..." or any preamble
- Generic conclusions ("The future is bright", "In conclusion...")
- Em dashes. Use hyphens or commas instead.
- Bolded list item headers ("**Speed:** The system is fast") - just write prose
- Emojis unless the user explicitly asks for them
- Curly quotes. Use straight quotes.
- Over-hedging ("it could potentially be argued that...")
- Sycophantic filler ("Great question!", "Of course!")
- Rule of three patterns ("speed, quality, and reliability")
- Title Case In Headings - use sentence case
