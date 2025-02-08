import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: apiUrl,
});
const api = {
    getProducts() {
        return instance.get('products')
    },
    addProductApi(product) {
        return instance.post('products', product)
    },
    updateProduct(id, product) {
        return instance.put(`products/${id}`, product )
    },
    deleteProduct(id) {
        return instance.delete(`products/${id}`)
    }
}
export default api
