import { categories } from "../data/mainCategories";


const MainCategories = () => {
  return (
    <div className="text-[#212325]">
      <div className="max-w-[1194px] mx-auto p-5">
        <h2 className="text-center font-semibold text-2xl mb-10">Main Categories</h2>
        <div className="flex items-center justify-between">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center gap-1.5 cursor-pointer text-base hover:scale-105 transition">
              <div
                className={category.moreCss + " bg-[#eaeaea] rounded-full p-7" }
              >
                <img src={category.path} alt={`${category.name} alt`} />
              </div>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCategories;
