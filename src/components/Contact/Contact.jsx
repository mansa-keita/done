import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName]= useState('');
  const [message, setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    setFirstName(" ")
    setLastName(" ")
    setMessage("")

    

    emailjs
      .sendForm(
        "service_rrvovzs",
        "template_3hjisgx",
        form.current,
        "auBXn9NNDJ-ypdvQD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

 

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="to_name" className="user"  placeholder="Name"
           onChange={event => setFirstName(event.target.value)}/>
          <input type="email" name="from_name" className="user" placeholder="Email"
           onChange={event => setLastName(event.target.value)}/>
          <textarea name="message" className="user" placeholder="Message"
           onChange={event => setMessage(event.target.value)}/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
