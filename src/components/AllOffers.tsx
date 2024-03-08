import { useEffect, useState } from "react";
import Offer from "./Offer";
import { fetchOffers } from "../store/offersSlice";
import { Toaster } from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../store";
import { IOffer, IOffersState } from "../types";

type oriental = "row" | "col";

const AllOffers = () => {
  const [oriental, setOriental] = useState<oriental>("row");
  const { offers } = useAppSelector<IOffersState>((state) => state.offers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const handleOrientalChange = () => {
    if (oriental === "row") setOriental("col");
    if (oriental === "col") setOriental("row");
  };

  return (
    <div className="mb-14">
      <div className="max-w-[1194px] mx-auto">
        <Toaster position="top-center" />
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-xl color-[#212325]">All Offers</h3>
          <button
            onClick={handleOrientalChange}
            className="bg-[#0d3450] text-white  rounded-lg py-2 px-3 hover:scale-105 transition"
          >
            Row/Column
          </button>
        </div>
        <div
          className={oriental === "row" ? "flex flex-wrap gap-2" : "flex flex-col gap-2"}
        >
          {offers?.map((offer: IOffer) => (
            <Offer key={offer.id} offer={offer} oriental={oriental} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllOffers;
