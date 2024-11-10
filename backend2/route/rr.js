import express from "express";
const router = express.Router();
import { srv } from "../controller/reservation.js";

router.post("/send", srv);
export default router;
