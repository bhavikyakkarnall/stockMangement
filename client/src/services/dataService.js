export default class DataService {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getProducts(){
        try {
            const response = await fetch(this.baseUrl + "products/");
            const products = await response.json();
            return products;
        } catch (error) {
            throw new Error(`Failed to fetch products: ${error.message}`);
        }
    }

    async getProductsByID(productID){
        try {
            const response = await fetch(`${this.baseUrl}products/${productID}`);
            const products = await response.json();
            return products;
        } catch (error) {
            throw new Error(`Failed to fetch products: ${error.message}`);
        }
    }

}