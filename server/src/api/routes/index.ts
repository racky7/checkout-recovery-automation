import { Router } from "express";
import abandonedCheckoutRoutes from "./abandoned-checkout";
import orderPlacedRoutes from "./order-placed";
import scheduleConfigRoutes from "./schedule-config";
import sentMessageRoutes from "./sent-message";

const router = Router();

router.use("/abandoned-checkout", abandonedCheckoutRoutes);
router.use("/order-placed", orderPlacedRoutes);
router.use("/schedule-config", scheduleConfigRoutes);
router.use("/sent-message", sentMessageRoutes);

export default router;
