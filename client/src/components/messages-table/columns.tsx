import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";

export const messageConfig = z.object({
  customerId: z.number(),
  messageSentAt: z.string(),
  messageContent: z.string(),
  orderCompletedAfterMessage: z.boolean(),
  completedOrderId: z.string().nullable(),
});
export type MessageType = z.infer<typeof messageConfig>;

export const columns: ColumnDef<MessageType>[] = [
  {
    accessorKey: "customerId",
    header: "Customer ID",
  },
  {
    accessorKey: "messageSentAt",
    header: "Message Sent At",
    accessorFn: (row) => {
      return new Date(row.messageSentAt).toLocaleString();
    },
  },
  {
    accessorKey: "messageContent",
    header: "Message Content",
  },
  {
    accessorKey: "orderCompletedAfterMessage",
    header: "Order Completed",
    accessorFn: (row) => {
      if (row.orderCompletedAfterMessage) {
        return "Yes";
      } else {
        return "No";
      }
    },
  },
  {
    accessorKey: "completedOrderId",
    header: "Completed Order ID",
    accessorFn: (row) => {
      if (row.completedOrderId) {
        return row.completedOrderId;
      } else {
        return "N/A";
      }
    },
  },
];
