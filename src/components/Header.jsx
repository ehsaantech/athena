import herobanner from "../assets/images/hero-image.jpg";

const Header = () => {
  return (
    <header
      id="header"
      className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
    >
      <img src={herobanner} className="hero-banner" alt=""/>
      <div className="container px-4 sm:px-8 lg:grid lg:gap-x-8">
        <div className="z-50 text-center mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
          <h1 className="h1-large mb-5">Athena</h1>
          <p className="p-large mb-8 mx-32">
            Athena partners with utilities to tackle challenges, drive innovation, and enhance operations in the power industry. Book an outbound call with us to explore how we can support your goals!
          </p>
          <a className="btn-solid-lg" href="#appointment">
            Book Your Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
