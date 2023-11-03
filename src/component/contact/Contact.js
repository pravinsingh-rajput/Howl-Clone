import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactpage">
      <h2 className="contact_headline">
        Ready to accelerate your business?{" "}
        <span className="talk_option"> Let's talk.</span>
      </h2>
      <div className="contact_container">
        <h2>
          Keep track of the wolves
          <p className="arrow">&rarr; </p>
        </h2>
        <div className="contact_image">
          <img src="./Assets/contactimg1.png" alt="contactimg" />
          <img src="./Assets/contactimg2.png" alt="contactimg" />
          <img src="./Assets/contactimg3.png" alt="contactimg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
