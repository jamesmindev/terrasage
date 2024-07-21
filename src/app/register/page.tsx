"use client";
import { useState } from "react";

const Register = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-register">
      <div className="wrapper">
        <div className="layout">
          <div className="customer-notice">
            <h1>Thank you for your interest</h1>
            <h2>Registration is temporarily closed</h2>
            <p>
              Due to the high demand for our unique investment opportunities, we
              have reached our current capacity and are temporarily closing new
              registrations.
            </p>
          </div>

          <div className="stay-informed">
            <h2>Stay Informed</h2>
            <p>
              Stay updated on when registration reopens and receive the latest
              news on our investment products.
            </p>

            {!formSubmitted && (
              <form className="form-notify-me" onSubmit={handleSubmit}>
                <label>
                  <p>Your Name</p>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    required
                  />
                </label>

                <label htmlFor="">
                  <p>Your Email</p>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                </label>

                <input type="submit" value="Notify Me" />
              </form>
            )}

            {formSubmitted && (
              <div className="success-message">
                <p>Thank you for your submission.</p>
                <p>
                  Terrasage is a concept project and this website is the concept
                  prototype. It is not affiliated with any real business. Your
                  submitted data is not stored in any capacity.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;