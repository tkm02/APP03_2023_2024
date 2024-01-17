import React from "react";
import CoopProduits from "../CoopProduits/CoopProduits";

const PlusInfo = () => {
  return (
    <div
      style={{
        width: "100%",
        margin: "10px 0",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CoopProduits />
    </div>
  );
};

export default PlusInfo;
