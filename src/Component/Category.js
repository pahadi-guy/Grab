import React from "react";
import pizza from "../images/pizza.jpg";

function Category() {
  return (
    <>
      <div className="item-container">
        <div className="item">
          <img src={pizza} alt="Pizza banner" />
          <div>Pizza</div>
        </div>
        <div className="item">
          <img src={pizza} alt="Pizza banner" />
          <div>Pizza</div>
        </div>
        <div className="item">
          <img src={pizza} alt="Pizza banner" />
          <div>Pizza</div>
        </div>
        <div className="item">
          <img src={pizza} alt="Pizza banner" />
          <div>Pizza</div>
        </div>
        <div className="item">
          <img src={pizza} alt="Pizza banner" />
          <div>Pizza</div>
        </div>
        <div className="item">
          <img src={pizza} alt="Pizza banner" />
          <div>Pizza</div>
        </div>
      </div>
    </>
  );
}

export default Category;
