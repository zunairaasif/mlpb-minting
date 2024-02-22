import React from "react";
import add from "../../assets/checkout/add.png";
import arrow from "../../assets/checkout/arrow.png";
import balance from "../../assets/checkout/balance.png";
import masterCard from "../../assets/checkout/masterCard.png";

const method = [
  { id: 0, name: "Account Balance", value: "$25.50 Available", icon: balance },
  { id: 1, name: "Master Card", value: "ending in 4567", icon: masterCard },
];

const Checkout = () => {
  return (
    <div className="flex flex-col mt-3 gap-3">
      <p>Payment Method</p>

      {method.map((data) => (
        <button
          key={data.id}
          className={`flex text-xs justify-between p-3 border border-[#393734] ${
            data.id === 1 && "bg-[#3D00B7]"
          }`}
        >
          <div className="flex gap-4 items-center">
            <img src={data.icon} alt={data.name} width={20} />
            <p>{data.name}</p>
          </div>

          <p>{data.value}</p>
        </button>
      ))}

      <button className="flex text-xs justify-between items-center p-3 border border-[#393734]">
        <div className="flex gap-4 items-center">
          <img src={add} alt="add" width={20} />
          <p>Add New Payment Method</p>
        </div>

        <img src={arrow} alt="arrow" width={20} />
      </button>

      <div className="flex flex-col self-center text-center">
        <p className="text-xs text-[#8E8D8B]">
          Payments by <b>Stripe</b>
        </p>

        <p className="text-xs text-[#8E8D8B]">
          By continuing you agree to the <u>Terms</u> and <u>Privacy</u>
        </p>
      </div>

      <div className="flex text-sm justify-between mt-10 pt-3 border-t border-[#6D7580]">
        <p>Upfront Cost</p>
        <p>$</p>
      </div>
    </div>
  );
};

export default Checkout;
