import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { dropDownItems } from "../data/dropdown";
import { SubDropDownItems, SubSubDropDownItems } from "../types";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subCategory, setSubCategory] = useState<SubDropDownItems | null>(null);
  const [subSubCategory, setSubSubCategory] =
    useState<SubSubDropDownItems | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category: SubDropDownItems) => {
    setSubCategory(category === subCategory ? null : category);
    setSubSubCategory(null);
  };

  const handleSubCategoryClick = (subCategory: SubSubDropDownItems) => {
    setSubSubCategory(subCategory === subSubCategory ? null : subCategory);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-[#212325] px-2 py-1.5 flex items-center gap-1 border border-[#212325] rounded-lg hover:scale-105 transition"
      >
        <Bars3Icon className="w-5" />
        All Categories
      </button>
      {isOpen && (
        <div className="absolute top-14 left-0 bg-white shadow-lg w-[885px] rounded-lg text-[#0d3450] font-bold text-[13px]">
          <div className="grid grid-cols-3">
            <div className="col-span-1 border-r-2 py-4 pl-2 border-r-[#2177b3]/10">
              <ul>
                {dropDownItems.map((dropdown, index) => (
                  <li
                    key={index}
                    onClick={() => handleCategoryClick(dropdown.subDropdown)}
                  >
                    <div className="flex items-center justify-between rounded-l-lg gap-2 w-full px-2 py-1 cursor-pointer hover:bg-[#2177b3]/10">
                      <div className="flex items-center gap-2">
                        <img src={dropdown.logoSrc} alt="services icon" />
                        <h4>{dropdown.name}</h4>
                      </div>
                      <ChevronRightIcon className="w-4" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
              <div className="col-span-1 border-r-2 py-4 border-r-[#2177b3]/10 font-semibold">
                <ul>
                  {subCategory &&
                    subCategory?.map((sub, index) => (
                      <li
                        key={index}
                        onClick={() => handleSubCategoryClick(sub.subSubDrop)}
                      >
                        <div className="flex items-center justify-between gap-2 w-full px-2 py-1 cursor-pointer hover:bg-[#2177b3]/10">
                          <h4>{sub.name}</h4>
                          <ChevronRightIcon className="w-4" />
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            <div className="col-span-1 py-4">
              <ul>
                {subSubCategory &&
                  subSubCategory?.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>
                        <div className="w-full px-2 py-1 cursor-pointer hover:bg-[#2177b3]/10">
                          <h4>{item.name}</h4>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

