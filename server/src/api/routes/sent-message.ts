import { Router } from "express";
import { getAllMessages } from "../controllers/sent-message";

const router = Router();

router.get("/get-all", getAllMessages);

export default router;
