export const partial = true;

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactFormEmail = ({
  name,
  email,
  subject,
  message,
}: ContactFormEmailProps) => {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>
          {subject} — from {name}
        </Preview>
        <Body className="bg-neutral-950 p-6 font-sans">
          <Container className="bg-neutral-900 rounded-xl p-8 max-w-xl mx-auto border border-neutral-800">
            <Heading className="text-2xl font-bold text-white mb-1">
              New Message
            </Heading>
            <Text className="text-neutral-400 text-sm mt-0 mb-6">
              via jnalewajk.me contact form
            </Text>

            <Hr className="border-neutral-800 my-4" />

            <Section className="mb-6">
              <table cellPadding={0} cellSpacing={0} style={{ width: "100%" }}>
                <tr>
                  <td style={{ padding: "6px 0" }}>
                    <Text className="text-neutral-500 text-xs uppercase tracking-wider m-0">
                      From
                    </Text>
                    <Text className="text-white text-sm m-0 mt-1">
                      {name} ({email})
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0" }}>
                    <Text className="text-neutral-500 text-xs uppercase tracking-wider m-0">
                      Subject
                    </Text>
                    <Text className="text-white text-sm m-0 mt-1">
                      {subject}
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            <Hr className="border-neutral-800 my-4" />

            <Section>
              <Text className="text-neutral-500 text-xs uppercase tracking-wider mb-2">
                Message
              </Text>
              <Text className="text-neutral-300 text-sm leading-relaxed whitespace-pre-wrap">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default ContactFormEmail;
