import owners from "@/data";
import Link from "next/link";
import React from "react";

const OwnerCardComponent = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className=" text-cyan-700 py-4 text-4xl font-bold text-center">
        Select Your Booking
      </h1>
      {owners.length > 0 ? (
        owners.map(({ id, name }) => (
          <div key={id} className="p-4 border-2 w-[85%] flexs rounded">
            <p>{name}</p>
            <Link
              href={`/owner/${id}`}
              className="text-blue-500 hover:underline"
            >
              Book Now
            </Link>
          </div>
        ))
      ) : (
        <div>No owners available.</div>
      )}
    </div>
  );
};

export default OwnerCardComponent;
