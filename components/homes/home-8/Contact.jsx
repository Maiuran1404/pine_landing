"use client";
import React, { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-sm-60">
          <div className="section-descr black">
            <p>
              We're here to help your brand thrive through expert tailoring and craftsmanship. Whether you need alterations for your existing collection, custom-made pieces, or a complete wardrobe transformation, our skilled artisans are ready to bring your vision to life.
            </p>

          </div>
        </div>
        <div className="col-md-7 offset-md-1">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="form contact-form"
            id="contact_form"
          >
            <div className="row mb-30">
              <div className="col-lg-6 mb-md-30">
                {/* Name */}
                <label htmlFor="name" className="visually-hidden">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-lg input-circle form-control"
                  placeholder="Full Name"
                  pattern=".{3,100}"
                  required
                  aria-required="true"
                />
                {/* End Name */}
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <label htmlFor="email" className="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-lg input-circle form-control"
                  placeholder="Email Address"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
                {/* End Email */}
              </div>
            </div>
            {/* Message */}
            <div className="form-group mb-30">
              <label htmlFor="message" className="visually-hidden">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="input-lg input-circle form-control"
                style={{ height: 120 }}
                placeholder="Your Message"
                required
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="submit_btn btn btn-mod btn-large btn-circle btn-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
              className="mt-20"
            >
              {status === 'success' && (
                <div className="alert alert-success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="alert alert-danger">
                  Sorry, there was an error sending your message. Please try again later.
                </div>
              )}
            </div>
          </form>
          {/* End Contact Form */}
        </div>
      </div>{" "}
    </>
  );
}
