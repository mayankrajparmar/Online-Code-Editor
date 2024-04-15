import React, { useState } from "react";
import "./Contact.css";
import ImageZoom from "./ImageZoom";

function Contact() {
  const [isActive, setIsActive] = useState(false);

  const onClose = () => {
    setIsActive(false);
  };

  const onZoom = () => {
    setIsActive(true);
  };
  return (
    <>
      {/* <ImageZoom
        isActive={isActive}
        imageURL={
          "https://cdn.pixabay.com/photo/2019/12/30/13/10/lost-places-4729640_1280.jpg"
        }
        onZoom={onZoom}
        onClose={onClose}
      /> */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Us</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>

              <div className="icons">
                <div className="address">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Online Code Editor</div>
                  </div>
                </div>
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Bhubneswar, Odisha</div>
                  </div>
                </div>
                <div className="address">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">support@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message Us</div>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Message.."
                    required
                  ></textarea>
                </div>
                <div className="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
