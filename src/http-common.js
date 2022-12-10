import axios from "axios";

// baseURL deployed: https://fierce-oasis-10325.herokuapp.com/contacts
// baseURL development: http://localhost:3000/contacts

export default axios.create({
  baseURL: "https://fierce-oasis-10325.herokuapp.com/contacts",
  headers: {
    "Content-type": "application/json"
  }
});