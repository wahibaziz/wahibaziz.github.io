import React from 'react';

function Contactus() {
  return (
    <div>
      <div className="inner-heading">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="inner-wrap">
        <div className="container">
          <div className="contact-info">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="contactWrp">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <h5>Our Location</h5>
                  <p>8500 lorem, New Ispum, Dolor amet sit 12301</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="contactWrp">
                  <div className="contact-icon">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <h5>Call Us</h5>
                  <p>
                    Phone: +12 345 67 09 <br />
                    Fax: +12 345 67 09
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="contactWrp">
                  <div className="contact-icon">
                    <i className="fa fa-laptop" aria-hidden="true"></i>
                  </div>
                  <h5>Connect Online</h5>
                  <p>
                    Email: info@yoursite.com <br />
                    Email: info@yoursite.com
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="contactWrp">
                  <div className="contact-icon">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </div>
                  <h5>Visit Us</h5>
                  <p>
                    Website: www.yoursite.com<br />
                    Website: www.yoursite.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="form-control"
                      />
                      <div className="form-icon">
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        className="form-control"
                      />
                      <div className="form-icon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-wrap">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                  />
                  <div className="form-icon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="input-wrap">
                  <textarea
                    className="form-control"
                    placeholder="Type Your Message here.."
                  ></textarea>
                  <div className="form-icon">
                    <i className="fa fa-comment" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="contact-btn">
                  <button
                    className="sub"
                    type="submit"
                    value="submit"
                    name="submitted"
                  >
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="mapWrp">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439665.415133291!2d-85.42187768895461!3d32.658159955276645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f136c51d5f8157%3A0x6684bc10ec4f10e7!2sGeorgia!5e0!3m2!1sen!2sus!4v1505905563776"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen
                  title="Google Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
