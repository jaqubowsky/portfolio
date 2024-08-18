export const partial = true;

import {
  Body,
  Container,
  Head,
  Heading,
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
        <Preview>New Contact Form Submission</Preview>
        <Body className="bg-gray-100 p-4">
          <Container className="bg-white rounded-lg p-6 max-w-xl mx-auto shadow-lg">
            <Heading className="text-xl font-bold text-gray-900 mb-4">
              New Contact Form Submission
            </Heading>
            <Section className="mb-4">
              <Text className="text-gray-800">
                You have received a new message from the contact form on your
                website:
              </Text>
            </Section>
            <Section className="mb-4">
              <Text className="text-gray-600">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-gray-600">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-gray-600">
                <strong>Subject:</strong> {subject}
              </Text>
            </Section>
            <Section className="mb-4">
              <Heading className="text-lg font-semibold text-gray-800 mb-2">
                Message:
              </Heading>
              <Text className="text-gray-700 whitespace-pre-wrap">
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
