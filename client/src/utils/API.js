import axios from "axios";

export default {
  // Gets all posts
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Saves an item to the database
  saveToCart: function(postData) {
    return axios.post("/api/products", postData);
  }
};