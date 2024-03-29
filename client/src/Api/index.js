import axios from 'axios';

const url1 = 'http://localhost:5000/products';
const url2 = 'http://localhost:5000/customers';
const url11 = 'http://localhost:5000/customers/login';
const url5 = 'http://localhost:5000/customers/usernames';
const url3 = 'http://localhost:5000/workers';
const url4 = 'http://localhost:5000/workers/usernames';
const url6 = 'http://localhost:5000/workers/login';
const url7 = 'http://localhost:5000/productdealers';
const url8 = 'http://localhost:5000/productdealers/usernames';
const url9 = 'http://localhost:5000/ProductDealers/login';
const url10 = 'http://localhost:5000/workerOrders';
const url12 = 'http://localhost:5000/productorders';

export const createProduct = (newUser) => axios.post(url1, newUser);

export const createProductOrder = (newOrder) => axios.post(url12, newOrder);

export const createOrderForWorker = (newOrder) => axios.post(url10, newOrder);

export const createUser = (newUser) => axios.post(url2, newUser);

export const fetchCustomer = (fullName, password) => axios.post(url11, { fullName, password });

export const fetchUser = (fullName, password) => axios.post(url2, { fullName, password });

export const fetchCustomerUsernames = () => axios.get(url5);

export const createWorker = (newUser) => axios.post(url3, newUser);

export const fetchWorker = (userName, password) => axios.post(url6, { userName, password });

export const fetchWorkerUsernames = () => axios.get(url4); // Fetch worker usernames

export const createProductDealer = (newUser) => axios.post(url7, newUser);

export const fetchProductDealerUsernames = () => axios.get(url8);

export const fetchDealer = (userName, password) => axios.post(url9, { userName, password });