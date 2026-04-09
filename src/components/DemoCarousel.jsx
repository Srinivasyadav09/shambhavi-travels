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
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      swipeable={false}
      emulateTouch={true}
    >
      {slides.map((slide, index) => (
        <div
          className="carousel-slide-container"
          key={index}
          id={props.id}
          style={{ position: "relative" }}
        >
          <img src={slide.image} alt={slide.title} className="carousel-image" />
          {/* Transparent overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.3)",
              zIndex: 1,
            }}
          />
          <div
            className="carousel-overlay"
            height="100%"
            width="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="carousel-content"
              style={{ position: "relative", zIndex: 3 }}
            >
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
