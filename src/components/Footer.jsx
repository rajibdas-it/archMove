import logo from "../assets/images/logo-arch.svg";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 px-5 md:px-32">
      <div>
        <nav className="flex flex-col gap-10 md:flex-row">
          <a className="text-xl hover:text-brightRed font-semibold" href="">
            About Us
          </a>
          <a className="text-xl hover:text-brightRed font-semibold" href="">
            How it Works
          </a>
          <a className="text-xl hover:text-brightRed font-semibold" href="">
            FAQ
          </a>
          <a className="text-xl hover:text-brightRed font-semibold" href="">
            Contact Us
          </a>
          <a className="text-xl hover:text-brightRed font-semibold" href="">
            Privacy Policy
          </a>
        </nav>
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
