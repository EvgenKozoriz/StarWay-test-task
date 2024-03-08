import { StarIcon } from "@heroicons/react/16/solid";
import srcTenpPhoto from "../assets/profilePhoto.png";
import { Link, useLocation } from "react-router-dom";
import {
  Cog6ToothIcon,
  HeartIcon,
  LifebuoyIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const ProfileInfo = () => {
  const location = useLocation();

  return (
    <div className="w-full max-w-[392px] p-5">
      <div className="flex items-center gap-10 mb-5">
        <img className="rounded-full" src={srcTenpPhoto} alt="profile photo" />
        <div>
          <h3 className="font-bold text-xl text-[#212325]">Helen Wilson</h3>
          <span className="text-[#212325] font-semibold text-sm">
            82 Reviews
          </span>
          <div className=" flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon key={index} color="#e6c83c" className="w-4" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to={"/orders"}
          className="flex gap-5 items-center font-semibold rounded-lg py-2 px-4 hover:bg-[#2177B3]/10"
        >
          <ShoppingBagIcon className="w-4" /> Orders
        </Link>
        <Link
          to={"/favourite"}
          className="flex gap-5 items-center font-semibold rounded-lg py-2 px-4 hover:bg-[#2177B3]/10"
        >
          <HeartIcon className="w-4" /> Favourite
        </Link>
        <Link
          to={"/help"}
          className="flex gap-5 items-center font-semibold rounded-lg py-2 px-4 hover:bg-[#2177B3]/10"
        >
          <LifebuoyIcon className="w-4" /> Help
        </Link>
        <Link
          to={"/profile"}
          className={
            location.pathname === "/profile"
              ? "flex gap-5 items-center font-semibold rounded-lg py-2 px-4 bg-[#2177B3]/10"
              : "flex gap-5 items-center font-semibold rounded-lg py-2 px-4 hover:bg-[#2177B3]/10"
          }
        >
          <Cog6ToothIcon className="w-4" /> Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileInfo;
