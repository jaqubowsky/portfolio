export const partial = true

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

type ContactFormEmailProps = {
  name: string
  email: string
  subject: string
  message: string
}

const colors = {
  background: '#f5f2ed',
  card: '#ffffff',
  foreground: '#1a1b2e',
  mutedForeground: '#6b6878',
  primary: '#c47a3a',
  border: '#e8e4dd',
}

const ContactFormEmail = ({ name, email, subject, message }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        {subject} - from {name}
      </Preview>
      <Body
        style={{
          backgroundColor: colors.background,
          padding: '40px 16px',
          fontFamily: "'Outfit', 'Segoe UI', system-ui, sans-serif",
          margin: 0,
        }}
      >
        <Container
          style={{
            backgroundColor: colors.card,
            borderRadius: '12px',
            padding: '0',
            maxWidth: '520px',
            margin: '0 auto',
            border: `1px solid ${colors.border}`,
            overflow: 'hidden',
          }}
        >
          <Section
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, #d4924e)`,
              padding: '28px 32px',
            }}
          >
            <Heading
              style={{
                color: '#fff',
                fontSize: '22px',
                fontWeight: '700',
                margin: '0 0 4px 0',
                letterSpacing: '-0.02em',
              }}
            >
              New Message
            </Heading>
            <Text
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '13px',
                margin: 0,
              }}
            >
              via jnalewajk.me contact form
            </Text>
          </Section>

          <Section style={{ padding: '28px 32px' }}>
            <table cellPadding={0} cellSpacing={0} style={{ width: '100%' }}>
              <tr>
                <td style={{ padding: '0 0 16px 0' }}>
                  <Text
                    style={{
                      color: colors.mutedForeground,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      margin: '0 0 4px 0',
                    }}
                  >
                    From
                  </Text>
                  <Text
                    style={{
                      color: colors.foreground,
                      fontSize: '14px',
                      margin: 0,
                    }}
                  >
                    {name}
                  </Text>
                  <Link
                    href={`mailto:${email}`}
                    style={{
                      color: colors.primary,
                      fontSize: '13px',
                      textDecoration: 'none',
                    }}
                  >
                    {email}
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0 0 16px 0' }}>
                  <Text
                    style={{
                      color: colors.mutedForeground,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      margin: '0 0 4px 0',
                    }}
                  >
                    Subject
                  </Text>
                  <Text
                    style={{
                      color: colors.foreground,
                      fontSize: '14px',
                      margin: 0,
                    }}
                  >
                    {subject}
                  </Text>
                </td>
              </tr>
            </table>

            <Hr style={{ borderColor: colors.border, margin: '8px 0 20px 0' }} />

            <Text
              style={{
                color: colors.mutedForeground,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                margin: '0 0 8px 0',
              }}
            >
              Message
            </Text>
            <Text
              style={{
                color: colors.foreground,
                fontSize: '14px',
                lineHeight: '1.7',
                whiteSpace: 'pre-wrap',
                margin: 0,
              }}
            >
              {message}
            </Text>
          </Section>

          <Section
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: '16px 32px',
              textAlign: 'center' as const,
            }}
          >
            <Text
              style={{
                color: colors.mutedForeground,
                fontSize: '11px',
                margin: 0,
              }}
            >
              Jakub Nalewajk -{' '}
              <Link
                href="https://jnalewajk.me"
                style={{ color: colors.primary, textDecoration: 'none' }}
              >
                jnalewajk.me
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ContactFormEmail
