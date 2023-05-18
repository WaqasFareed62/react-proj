import image from "../assets/hero-img.png";
import "./hero.css";
function Hero() {
  return (
    <div className="row container-fluid  d-flex align-items-center hero">
      <div className="col left">
        <h1>Welcome to Geeks UI Learning Application</h1>
        <p>
          Hand-picked Instructor and expertly crafted courses, designed for the
          modern students and entrepreneur.
        </p>
        <button className="btn btn-dark">Browse Course</button>
        <button className="btn btn-light">Are You Instructor</button>
      </div>
      <div className="left col">
        <img className="img-fluid" src={image} alt />
      </div>
    </div>
  );
}

export default Hero;
