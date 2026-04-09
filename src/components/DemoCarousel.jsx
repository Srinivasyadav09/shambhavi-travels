import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image:
      "https://media.istockphoto.com/id/1526986072/photo/airplane-flying-over-tropical-sea-at-sunset.jpg?s=612x612&w=0&k=20&c=Ccvg3BqlqsWTT0Mt0CvHlbwCuRjPAIWaCLMKSl3PCks=",
    title: "Your Journey, Our Commitment",
    sub: "Punctual, professional, and prepared for your every need.",
    btn: "Book Your Ride",
  },
  {
    image: "https://statics.vinpearl.com/international-travel-0_1684823087.jpg",
    title: "Comfort for the Whole Family",
    sub: "Spacious vehicles and sanitized interiors for a safe trip.",
    btn: "View Our Fleet",
  },
  {
    image:
      "https://static8.depositphotos.com/1008648/1033/i/450/depositphotos_10337269-stock-photo-travel-the-world-clouds-plane.jpg",
    title: "Never Miss a Flight Again",
    sub: "Reliable 24/7 airport transfers at prices that make sense.",
    btn: "Schedule Pickup",
  },
];

function DemoCarousel(props) {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {slides.map((slide, index) => (
        // Add these classNames to your existing component structure
        <div className="carousel-slide-container" key={index} id={props.id}>
          <img src={slide.image} alt={slide.title} className="carousel-image" />

          <div className="carousel-overlay" height="100%" width="100%">
            <div className="carousel-content">
              <h1 className="carousel-title">{slide.title}</h1>
              <p className="carousel-subtitle">{slide.sub}</p>
              <div className="button-group">
                <button className="btn-primary">{slide.btn}</button>
                <button className="btn-secondary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default DemoCarousel;
