//Projuct.js Contains the structure of a pizza object
// Pizza Object-Id,Name,Desc,Price

//models will contain object structure


class Products{
    constructor(id,name,desc,price,url){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.url=url;
        this.isAddedInCart =false;

    }
}

export default Products;