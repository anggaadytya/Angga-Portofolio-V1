import emailjs from "emailjs-com";
import { Input, Textarea, Button } from "@material-tailwind/react";
import Swal from "sweetalert2";

export function Email() {
  function sendEmail(e) {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs
          .sendForm(
            "service_kjxef31",
            "template_aaqj1ze",
            e.target,
            "M4Y6va-AgVOD0MGUT"
          )
          .then(
            (result) => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your message has been sent",
                showConfirmButton: false,
                timer: 1500,
              });
              console.log(result.text);
            },
            (error) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 1500,
              });
              console.log(error.text);
            }
          );
      }
    });
  }
  return (
    <div className="">
      <form className="grid gap-2 md:gap-4 " onSubmit={sendEmail}>
        <div className="col-span-2 md:col-span-1">
          <label>Name</label>
          <Input type="text" name="name" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label>Email</label>
          <Input type="email" name="email" />
        </div>
        <div className="col-span-2 md:col-span-2">
          <label>Message</label>
          <Textarea name="message" />
        </div>
        <Button type="submit" value="Send" className="col-span-2">
          Send
        </Button>
      </form>
    </div>
  );
}
