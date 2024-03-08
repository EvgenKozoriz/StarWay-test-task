import { HeartIcon } from "@heroicons/react/24/outline";
import offerSrc from "../assets/offerTempImage.png";
import offerSrcTwo from "../assets/offerTempImage2.png";
import offerSrcThree from "../assets/offerTempImage3.png";
import { StarIcon } from "@heroicons/react/16/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IOffer } from "../types";

type oriental = "row" | "col";

interface IOfferProps {
  oriental: oriental;
  offer: IOffer;
}

const Offer: React.FC<IOfferProps> = ({ oriental, offer }) => {
  return (
    <div
      className={
        oriental === "row"
          ? "max-w-[392px] rounded-lg border border-black/30 overflow-hidden"
          : "max-w-[772px] rounded-lg border border-black/30 overflow-hidden"
      }
    >
      <div className={oriental === "row" ? "flex flex-col" : "flex"}>
        <div className={oriental === "row" ? "relative" : "relative w-[calc(100%-392px)]"}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src={offerSrc} alt="offer image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={offerSrcTwo} alt="offer image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={offerSrcThree} alt="offer image" />
            </SwiperSlide>
          </Swiper>
          <div className="absolute z-10 top-2 left-2 bg-white color-[#0d3450] text-[11px] font-bold py-1 px-2 rounded-lg border border-black/30">
            TOP
          </div>
        </div>
        <div className="relative px-5 py-4">
          <div className="flex items-center justify-between">
            <span
              className={
                oriental === "row"
                  ? "text-sm font-medium mb-2"
                  : "text-sm font-medium mb-2"
              }
            >
              Financial
            </span>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon key={index} color="#b2b2b2" className="w-6" />
              ))}
            </div>
          </div>
          <h3
            className={oriental === "row" ? "font-bold mb-2" : "font-bold mb-2"}
          >
            {offer.title}
          </h3>
          <p
            className={
              oriental === "row"
                ? "font-medium mb-2"
                : "font-medium max-w-[442px] mb-2"
            }
          >
            Tax & Financial Associates offers affordable Tax Planning & Tax
            Preparation services.
          </p>
          {oriental === "row" && (
            <div className="bg-black/10 font-semibold text-[11px] rounded-lg px-2 py-1 max-w-16">
              investing
            </div>
          )}
          <HeartIcon
            className={
              oriental === "row"
                ? "absolute bottom-4 right-3 w-6"
                : "absolute bottom-9 right-5 w-6"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
