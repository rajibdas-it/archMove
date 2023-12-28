import img from "../assets/images/homeImg.svg";
const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center md:px-32 px-5 p-4 m-2">
      <div className="border border-red-500 md:w-3/5">
        <h1>
          Build Your <span>Dream House</span>
        </h1>
      </div>
      <div>
        <div>
          <p>
            100% guaranteed build safe, comfortable and transparent with a
            project management for the best result
          </p>
        </div>
        <div>
          <img src={img} alt="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
