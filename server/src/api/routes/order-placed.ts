import { Router } from "express";
import { cancelRecovery } from "../controllers/order-placed";

const router = Router();

router.post("/cancel-recovery", cancelRecovery);

export default router;
