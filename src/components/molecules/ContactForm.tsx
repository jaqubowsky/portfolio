import { Button, Input, Label, Textarea } from "@components/atoms";

const ContactForm = () => {
  return (
    <form className="space-y-6 max-w-lg w-full">
      <div>
        <Label>Name</Label>
        <Input type="text" placeholder="Name" />
      </div>

      <div>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
      </div>

      <div>
        <Label>Message</Label>
        <Textarea placeholder="Message" rows={5} />
      </div>

      <Button className="w-full" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
