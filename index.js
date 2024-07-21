import { products } from "./db/products.js";
import { createProductCard } from "./createProductCard.js";

const productContainer = document.getElementById("products");

let cart = [];

const findProductInCart = (cart,id) => {
    const isProductInCart = cart && cart.length > 0 && cart.find(product => product._id === id);
    return isProductInCart;
}

productContainer.addEventListener("click",(event)=>{
    const isProductInCart = findProductInCart(cart,event.target.dataset.id);
    if(!isProductInCart){
        const productToAddToCart = products.filter(({_id}) => _id === event.target.dataset.id);
        cart = [...cart,...productToAddToCart];
        localStorage.setItem("cart",JSON.stringify(cart));
        const cartButton = event.target;
        cartButton.innerHTML = "Go To Cart <span class='material-icons-outlined star'>shopping_cart</span>";
    }
    else{
        location.href = "cart.html"
    }
})

createProductCard(products,productContainer);