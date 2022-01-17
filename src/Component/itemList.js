import pizza from "../images/pizza.jpg";
const ItemList = () => {
  return (
    <>
      <div class="list-container">
        <div class="Description border">Pizza</div>
        <div class="cart border">
          <div className="cart-button-container">
            <h5>Quantity</h5>
            <input type="number" min="0" />
            <button>Add to cart</button>
          </div>
        </div>
        <div class="price border">Price</div>
        <div class="image border">
          <img src={pizza} alt="" />
        </div>
      </div>
    </>
  );
};
export default ItemList;
