import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import DemoCarousel from "./components/DemoCarousel";
import Services from "./components/services/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container-fluid d-flex align-items-center">
          {/* Brand */}
          <img
            src="/shambhavifinal.png"
            className="navbar-brand-img me-2"
            height={60}
            width={140}
            alt="Shambhavi Travels Logo"
          />

          {/* Hamburger */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services-section">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-section">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Full width carousel */}
      <div className="carousel-full">
        <DemoCarousel id="#" />
        <div id="services-section">
          <Services id="services-section" />
        </div>
        <AboutUs id="about-section" />
        <ContactUs id="contact-section" />
        <Footer />
      </div>
    </>
  );
}

export default App;
