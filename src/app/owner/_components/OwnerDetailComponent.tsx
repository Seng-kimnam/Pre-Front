import React, { FC } from "react";
import owners from "@/data";
import DrawerQRComponent from "@/components/DrawerQRComponent";
import Link from "next/link";

interface OwnerParams {
  params: any;
}
const OwnerDetailComponent: React.FC<OwnerParams> = ({ params }) => {
  const specifiedOwner = owners.find(
    (own) => own.id === Number(params.ownerId)
  );

  if (!specifiedOwner) {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold">Owner Detail</h2>
        <p className="my-10 text-red-700 text-xl">Owner not found.</p>
      </div>
    );
  }
  const { id, name, bankAccount } = specifiedOwner;

  return (
    <>
      <button className="px-6 py-2 border-2 m-6 rounded-3xl border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
        <Link href={"/"}>Back</Link>
      </button>
      <div className="text-center content-center h-screen">
        <h2 className="text-3xl font-bold">Owner Detail</h2>
        {specifiedOwner ? (
          <div>
            <p className="py-4 text-xl">ID: {id}</p>
            <p className="text-xl pb-2">Name: {name}</p>
            {/* Add more fields as needed */}
            <DrawerQRComponent bankAccount={bankAccount} />
          </div>
        ) : (
          <p className="my-10 text-red-700 text-xl">Owner not found.</p>
        )}
      </div>
    </>
  );
};

export default OwnerDetailComponent;
