import React, { useState } from "react";

const ContactUs = (props) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceType, setServiceType] = useState("Book A Vehicle");
  const [message, setMessage] = useState("");

  const ownerWhatsAppNumber = "917995267449";

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = `Hello, I would like to make an inquiry.\n\n*Full Name:* ${fullName}\n*Phone Number:* ${phoneNumber}\n*Service Type:* ${serviceType}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-5 bg-white" id={props.id}>
      <div className="container py-lg-5">
        <div className="row g-5">
          {/* Left Side: Contact Information */}
          <div className="col-lg-5">
            <h6 className="text-warning fw-bold text-uppercase mb-2">
              Get in Touch
            </h6>
            <h2 className="display-6 fw-bold mb-4">
              Ready to Book Your Next Journey?
            </h2>
            <p className="text-muted mb-5">
              Have questions about our fleet or special requirements? Reach out
              to us and we'll get back to you within 30 minutes.
            </p>

            <div className="contact-info-box">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-light p-3 rounded-circle me-3">📍</div>
                <div>
                  <h6 className="mb-0 fw-bold">Our Office</h6>
                  <p className="mb-0 text-muted">
                    Ramanthapur, [Hyderabad], India
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-light p-3 rounded-circle me-3">📞</div>
                <div>
                  <h6 className="mb-0 fw-bold">Call Us</h6>
                  <p className="mb-0 text-muted">+917995267449</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-light p-3 rounded-circle me-3">✉️</div>
                <div>
                  <h6 className="mb-0 fw-bold">Email</h6>
                  <p className="mb-0 text-muted">
                    booking@shambhavitravels.com
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="bg-success bg-opacity-10 p-4 rounded-4 border border-success border-opacity-25">
              <h6 className="fw-bold text-success mb-2">
                Quick Booking via WhatsApp
              </h6>
              <p className="small mb-3">
                Send "Hi" to get an instant quote and car availability.
              </p>
              <a
                href="https://wa.me/+917995267449"
                className="btn btn-success rounded-pill px-4"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0 p-3"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control bg-light border-0 p-3"
                      placeholder="+91 7995267449"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Service Type
                    </label>
                    <select
                      className="form-select bg-light border-0 p-3"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                    >
                      <option>Book A Vehicle</option>
                      <option>Self Driving Cars</option>
                      <option>Packages</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Your Message
                    </label>
                    <textarea
                      className="form-control bg-light border-0 p-3"
                      rows="4"
                      placeholder="Tell us your destination and travel dates..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-warning w-100 btn-lg fw-bold rounded-pill p-3"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
