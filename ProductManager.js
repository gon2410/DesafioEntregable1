class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    getNewId() {
        return this.products.length + 1;
    }

    addProduct(title, description, price, thumbnail, stock) {
        let newProduct = {
            id: this.getNewId(),
            title,
            description,
            price,
            thumbnail,
            stock
        }

        this.products.push(newProduct);
    }

    getProductById(id) {
        let result = this.products.find(elem => elem.id == id);
        if (result != undefined) {
            return result;
        } else {
            return "Not found";
        }
    }
}


let product = new ProductManager();
product.addProduct("Manzana", "Manzana Roja", 100, "../images/manzana.png", 500);
product.addProduct("Banana", "Banana Verde", 150, "../images/banana.png", 300);


console.log(product.getProducts());
console.log("-----------------------------------------------------")
console.log(product.getProductById(2));
