import { Button, Input, Label, Textarea } from "@components/atoms";

const ContactForm = () => {
  return (
    <form className="space-y-6 max-w-lg w-full">
      <Label>
        Name
        <Input name="name" type="text" placeholder="ex. John Doe" />
      </Label>

      <Label>
        Email
        <Input name="email" type="email" placeholder="ex john@doe.com" />
      </Label>

      <Label htmlFor="message">
        Message
        <Textarea
          name="message"
          placeholder="Hello, i would like to know more about your services."
          rows={5}
        />
      </Label>

      <Button className="w-full" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
