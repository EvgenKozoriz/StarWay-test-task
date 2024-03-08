import { Link } from "react-router-dom";
import srcLogo from "../assets/logo.png";
import { footerButtons } from "../data/footer";


const Footer = () => {
  return (
    <div className="bg-[#2177b3]/10 font-semibold text-sm text-[#0d3450]">
      <div className="max-w-[1194px] mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img src={srcLogo} alt="footer logo" className="py-8" />
        </Link>
        <div className="flex items-center gap-2">
          <a href="mailto:support@dealyloop.com">support@dealyloop.com</a>
          <span>(425) 505-3804</span>
        </div>
        <div className="flex items-center gap-3">
          {footerButtons.map((button, index) => (
            <Link className="hover:scale-105 transition" key={index} to={button.link}>{button.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
