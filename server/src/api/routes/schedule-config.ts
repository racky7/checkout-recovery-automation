import { Router } from "express";
import { updateConfig } from "../controllers/schedule-config";

const router = Router();

router.patch("/update-config", updateConfig);

export default router;
