import React from "react";
import OwnerDetailComponent from "../_components/OwnerDetailComponent";

interface OwnerParams {
  params: any;
}
const ownerId: React.FC<OwnerParams> = ({ params }) => {
  return (
    <>
      <OwnerDetailComponent params={params} />
    </>
  );
};

export default ownerId;
