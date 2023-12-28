import img from "../assets/images/consultationImg.svg";
import Button from "../layout/Button";
const Consultation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center md:justify-center md:px-32 px-5 p-4 m-2 ">
      <div className="flex flex-col items-center md:flex-row mt-10 md:mt-0">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="flex flex-row items-center ">
          <div className="flex flex-col items-center text-center space-y-5">
            <h1 className="text-5xl leading-tight font-playFair mt-5 md:mt-0 md:w-2/4">
              Realize your dream porject with{" "}
              <span className="text-brightRed">ArchMove</span>
            </h1>
            <Button title="Get Consultation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
