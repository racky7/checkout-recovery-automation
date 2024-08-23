import { Router } from "express";
import { scheduleRecovery } from "../controllers/abandoned-checkout";

const router = Router();

router.post("/schedule-recovery", scheduleRecovery);

export default router;
