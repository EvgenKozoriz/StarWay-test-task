import srcLogo from "../assets/logo.png";
import { HeartIcon } from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#2177b3]/10">
      <div className="max-w-[1194px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8 py-4">
          <Link to={'/'}>
            <img src={srcLogo} alt="header logo" />
          </Link>
          <Dropdown />
        </div>
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-1.5 hover:scale-105 transition">
            <HeartIcon className="w-6" /> Favourite
          </button>
          <Link className="hover:scale-105 transition" to={'/profile'}>Log in</Link>
          <Link to={'/profile'} className="bg-[#0d3450] text-white  rounded-lg py-2 px-3 hover:scale-105 transition">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
