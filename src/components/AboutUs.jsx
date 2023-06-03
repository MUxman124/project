import "../styles/AboutUs.scss";
import img1 from "../images/discoverimg3.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__title">
        <h2>About Us</h2>
      </div>
      <div className="about-us__content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          sunt provident perspiciatis odit numquam sapiente repudiandae est
          similique voluptatem porro quod qui maxime delectus iste, eligendi
          mollitia ducimus hic cum! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aspernatur omnis officiis, laboriosam consequatur
          sint nesciunt temporibus dignissimos obcaecati. Minus eum illo
          quisquam eveniet. Officiis cumque, libero quaerat beatae facilis
          velit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          sunt provident perspiciatis odit numquam sapiente repudiandae est
          similique voluptatem porro quod qui maxime delectus iste, eligendi
          mollitia ducimus hic cum! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aspernatur omnis officiis, laboriosam consequatur
          sint nesciunt temporibus dignissimos obcaecati. Minus eum illo
          quisquam eveniet. Officiis cumque, libero quaerat beatae facilis
          velit!
        </p>

        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
