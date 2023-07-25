import { EmailIcon, UserIcon, MailToIcon } from "constants/icons";
import "./contact.scss";

export const ContactComponent = () => {
  return (
    <div className="contact_form flex col">
      <h2 className="flex items-center">
        <EmailIcon />
        <span>Lets get in touch</span>
      </h2>
      <p>
        Get notified when I publish something new, and unsubscribe at any time.
      </p>

      <form className="flex col">
        <div className="form_holder relative">
          <div className="icon absolute">
            <UserIcon />
          </div>
          <input type="text" placeholder="Full name" required />
        </div>
        <div className="form_holder relative">
          <div className="icon absolute">
            <MailToIcon />
          </div>
          <input type="email" placeholder="Email address" required />
        </div>
        <div className="form_holder relative">
          <textarea type="text" placeholder="Message body" required />
        </div>
        <div className="form_holder relative">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
