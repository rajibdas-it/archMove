import img1 from "../assets/images/img1.svg";
import img2 from "../assets/images/img2.svg";
import img3 from "../assets/images/img3.svg";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col  justify-center md:px-32 px-5 p-4 m-2">
      <div className="py-5 md:w-2/6">
        <p className="text-4xl font-playFair font-medium ">
          Build professional valuable room
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-16 overflow-hidden">
        <div>
          <img
            className="rounded-md hover:cursor-pointer hover:scale-125 transition-all duration-300"
            src={img1}
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-md  hover:cursor-pointer hover:scale-125 transition-all duration-300"
            src={img2}
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-md hover:cursor-pointer hover:scale-125 transition-all duration-300"
            src={img3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
