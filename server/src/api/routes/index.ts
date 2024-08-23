import { Router } from "express";
import abandonedCheckoutRoutes from "./abandoned-checkout";
import orderPlacedRoutes from "./order-placed";

const router = Router();

router.use("/abandoned-checkout", abandonedCheckoutRoutes);
router.use("/order-placed", orderPlacedRoutes);

export default router;
