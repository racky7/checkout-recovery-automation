import { Router } from "express";
import abandonedCheckoutRoutes from "./abandoned-checkout";
import orderPlacedRoutes from "./order-placed";
import scheduleConfigRoutes from "./schedule-config";

const router = Router();

router.use("/abandoned-checkout", abandonedCheckoutRoutes);
router.use("/order-placed", orderPlacedRoutes);
router.use("/schedule-config", scheduleConfigRoutes);

export default router;
