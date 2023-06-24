import express  from "express";
import { createOrder } from "../controllers/workerOrders.js";

const router = express.Router();

router.post('/',createOrder);

export default router;