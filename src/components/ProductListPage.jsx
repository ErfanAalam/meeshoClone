import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import Header from "./Header";
import BottomNav from "./BottomNav";

const categoryHeadings = {
  Kurtis: "KURTIS",
  "Kurtis Combo Pack": "KURTIS 2 COMBO PACK",
  "Kurti 3 Combo Pack": "KURTI 3 COMBO PACK",
};

function ProductListPage() {
  const { category } = useParams();
  const heading = categoryHeadings[category] || category;
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px 0",
          borderBottom: "1px solid #eee",
          background: "#fff",
        }}
      >
        <span
          style={{ fontSize: "1.3rem", fontWeight: "bold", marginLeft: 16 }}
        >
          {heading}
        </span>
      </div>
      <ProductList category={category} />
      <BottomNav />
    </div>
  );
}

export default ProductListPage;
