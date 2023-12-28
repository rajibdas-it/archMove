import icon from "../assets/images/logo-arch.svg";
import Button from "../layout/Button";
import { FiXSquare, FiAlignJustify } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-4 px-5 m-2 lg:px-32">
      <div className="flex flex-row items-center gap-12 p-2 text-lightText">
        {/* logo  */}
        <div>
          <img src={icon} alt="" />
        </div>

        {/* menu items  */}

        <nav className="hidden md:flex gap-4">
          <a className="hover:text-brightRed transition-all" href="/works">
            How it Works
          </a>
          <a className="hover:text-brightRed transition-all" href="/gallery">
            Design Gallery
          </a>
          <a className="hover:text-brightRed transition-all" href="/architect">
            Architects
          </a>
          <a className="hover:text-brightRed transition-all" href="/article">
            Articles
          </a>
        </nav>
      </div>
      {/* credential button  */}
      <div className="flex flex-row items-center  gap-4">
        <a href="/signIn">Sign In</a>
        <Button title="Sign Up" />
      </div>
      <div className="md:hidden">
        <FiXSquare size={25} />
        <FiAlignJustify size={25} />
      </div>
    </div>
  );
};

export default Navbar;
