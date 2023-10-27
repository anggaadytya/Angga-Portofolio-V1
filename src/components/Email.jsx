import emailjs, { init } from "emailjs-com";
import { Input, Textarea, Button } from "@material-tailwind/react";

export function Email() {
  init("_LI-ot8HYH44_2Jc2rC0U");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "Gmail_API",
        "__ejs-test-mail-service__",
        e.target,
        "service_33e4f0i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="flex w-[60%] flex-col gap-8">
      <form className="flex flex-col gap-2" onSubmit={sendEmail}>
        <label>Name</label>
        <Input type="text" name={name} />
        <label>Email</label>
        <Input type="email" name="email" />
        <label>Message</label>
        <Textarea name="message" />
        <Button type="submit" value="Send">
          Send
        </Button>
      </form>
    </div>
  );
}
