//contains the logic for fetching.
// adding ,sorting,searching,
//deletion,updation
import Product from "../models/product.js";
import makeNetworkCall from "./api_client.js";

const productOperations={
    products:[], // Key:value
    search(pizzaId){
        console.log('checkur :',this.products);
        const product = this.products.
        find(currentProduct=>currentProduct.id==pizzaId);
        console.log('Product Found ', product);
        product.isAddedInCart = true;
        console.log('Array ', this.products);
    },
    getProductsInCart(){
        const productInBasket = this.products.filter(product=>product.isAddedInCart);
        return productInBasket;
    },
    async loadProducts(){
        const pizza =await makeNetworkCall;
        const pizzaArray =pizza['Vegetarian'];
        
        const productsArray=pizzaArray.map(pizza=>{
            const currentPizza=new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url);

            return currentPizza;
        })
        console.log("******Product Array",productsArray);
       this.products=productsArray;
        // console.log("this.pro",this.products)
        return productsArray;
    },
    sortProducts(){

    },
    searchProducts(){
        // console.log('search pizza :',this.pizzas.length,'Id ',id);
        // const searched=this.pizzas.filter(pizza=>pizza['id']===id);
        // return searched;
    }


}

export default productOperations;