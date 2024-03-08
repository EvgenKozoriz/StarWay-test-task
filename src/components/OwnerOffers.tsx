import { offers } from "../data/ownersOffers";

const OwnerOffers = () => {
  return (
    <div className=" max-w-[1194px] mx-auto flex justify-between gap-2 py-5">
      {offers.map((offer, index) => (
        <img
          key={index}
          className="cursor-pointer hover:scale-105 transition"
          src={offer.src}
          alt={offer.alt}
        />
      ))}
    </div>
  );
};

export default OwnerOffers;
