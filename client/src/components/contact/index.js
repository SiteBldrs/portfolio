import {
  EmailIcon,
  FirstNameIcon,
  LastNameIcon,
  MailToIcon,
} from "constants/icons";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LoaderIcon, ErrorIcon, CheckmarkIcon, toast } from "react-hot-toast";

export const ContactComponent = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVER_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsSuccess(true);
          e.target.reset();
          toast.success("Message sent successfully");

          setTimeout(() => {
            setIsSuccess(null);
          }, 2000);
        },
        (error) => {
          setIsLoading(false);
          setIsError("Something went wrong");
          setIsSuccess(false);
          toast.error(isError);

          setTimeout(() => {
            setIsSuccess(null);
          }, 2000);
        }
      )
      .catch((err) => {
        toast.error(isError);
      });
  };

  return (
    <div className="contact_form flex col">
      <h2 className="flex items-center">
        <EmailIcon />
        <span>Let's talk</span>
      </h2>
      <p>
        I'd love to hear from you. Send me a message so we can discuss your idea
        or something else.
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="flex col">
        <div className="form_holder relative">
          <div className="icon absolute">
            <FirstNameIcon />
          </div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            disabled={isLoading}
            // required
          />
        </div>
        <div className="form_holder relative">
          <div className="icon absolute">
            <LastNameIcon />
          </div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            disabled={isLoading}
            // required
          />
        </div>
        <div className="form_holder relative">
          <div className="icon absolute">
            <MailToIcon />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            disabled={isLoading}
            // required
          />
        </div>
        <div className="form_holder relative">
          <textarea
            type="text"
            disabled={isLoading}
            placeholder="Message"
            name="message"
            // required
          />
        </div>
        <div className="form_holder relative">
          <button
            type="submit"
            className="flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <LoaderIcon />
            ) : isSuccess === true ? (
              <CheckmarkIcon />
            ) : isSuccess === false ? (
              <ErrorIcon />
            ) : (
              <span>Submit</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
