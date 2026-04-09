import React from 'react';

const AboutUs = (props) => {
  return (
    <section className="py-5 bg-light" id={props.id}>
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          
          {/* Left Side: Image with Experience Badge */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Driver" 
                className="img-fluid rounded-4 shadow-lg"
              />
              <div className="position-absolute bottom-0 start-0 bg-warning p-4 rounded-3 shadow m-4 d-none d-md-block">
                <h2 className="fw-bold mb-0">10+</h2>
                <p className="mb-0 fw-semibold">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6">
            <h6 className="text-warning fw-bold text-uppercase tracking-wider mb-2">Since 2014</h6>
            <h2 className="display-5 fw-bold mb-4">Your Trusted Travel Partner in Hyderabad</h2>
            
            <p className="lead text-muted mb-4">
              Shambhavi Travels was founded on a simple principle: Providing safe, 
              luxurious, and reliable transportation at a price that everyone can afford.
            </p>
            
            <p className="mb-4">
              We specialize in corporate rentals, family outstation trips, and airport 
              transfers. Our fleet is meticulously maintained, and our drivers are 
              professionally trained to ensure your safety and comfort are never compromised.
            </p>

            {/* Icon List */}
            <div className="row g-3 mb-5">
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="bg-white p-2 rounded-circle shadow-sm me-3">
                    🛡️
                  </div>
                  <span className="fw-bold">Fully Insured Fleet</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="bg-white p-2 rounded-circle shadow-sm me-3">
                    👨‍✈️
                  </div>
                  <span className="fw-bold">Expert Chauffeurs</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="bg-white p-2 rounded-circle shadow-sm me-3">
                    ⭐
                  </div>
                  <span className="fw-bold">5-Star Service</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="bg-white p-2 rounded-circle shadow-sm me-3">
                    🕒
                  </div>
                  <span className="fw-bold">24/7 Support</span>
                </div>
              </div>
            </div>

            <button className="btn btn-dark btn-lg rounded-pill px-5">
              Learn More About Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;