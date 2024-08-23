import { Router } from "express";
import abandonedCheckout from "./abandoned-checkout";

const router = Router();

router.use("/abandoned-checkout", abandonedCheckout);

export default router;
