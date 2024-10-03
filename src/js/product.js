import {
  getLocalStorage,
  setLocalStorage,
  getParam,
  loadHeaderFooter,
} from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const productId = getParam("product"); //added this variable to hold product IDs.

const product = new ProductDetails(productId, dataSource); //added this too.
product.init();

/*
//first load the element into dom
document.addEventListener("DOMContentLoaded", () => {
  //clear the cart when the page loads (for testing or new sessions)
  //setLocalStorage("so-cart", []);

  // Initialize the cart count when page loads
  const initialCart = getLocalStorage("so-cart");
  updateCartCount(Array.isArray(initialCart) ? initialCart : []);

  function addProductToCart(product) {
    //retrieve the existing product to the cart
    let StoredCart = getLocalStorage("so-cart");
  
    //if cart is not array, initialise it as an empty array
    if (!Array.isArray(StoredCart)) {
      StoredCart = [];
    }
    //check if the product is already in the cart
    const existingProduct = StoredCart.find((item) => String(item.Id) === String(product.Id));
    if (existingProduct) {
      //if the product is already in the cart, increase its quantity
      existingProduct.quantity += 1;
    } else {
      //if not, add the new product to the cart with an initial quantity of 1
      product.quantity = 1;
      StoredCart.push(product);
    }
    //save the updated cart back to local storage
    setLocalStorage("so-cart", StoredCart);
  
    //update the cart count in the UI
    updateCartCount(StoredCart);
  }
  // Function to update the cart count displayed in the UI
  function updateCartCount(cartItems) {
    // Calculate the total quantity of items in the cart
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    //console.log("Cart items:", cartItems); //used these to test this function and it works proper.
    //console.log("Total items in cart:", totalItems);
  
    // Update the cart count display (assuming there is an element with id "cart-count")
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) { 
      cartCountElement.textContent = totalItems;
    }
  }
  // add to cart button event handler
  async function addToCartHandler(e) {
    const product = await dataSource.findProductById(e.target.dataset.id);
    addProductToCart(product);
  }
  
  // add listener to Add to Cart button
  const addToCartButton =  document.getElementById("addToCart");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", addToCartHandler);
  }

});
*/
