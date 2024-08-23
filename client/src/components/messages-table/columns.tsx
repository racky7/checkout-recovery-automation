import { ColumnDef } from "@tanstack/react-table";

export type Message = {
  customerId: number;
  messageSentAt: Date;
  messageContent: string;
  orderCompletedAfterMessage: boolean;
  completedOrderId: number;
};

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "customerId",
    header: "Customer ID",
  },
  {
    accessorKey: "messageSentAt",
    header: "Message Sent At",
  },
  {
    accessorKey: "messageContent",
    header: "Message Content",
  },
  {
    accessorKey: "orderCompletedAfterMessage",
    header: "Order Completed",
  },
  {
    accessorKey: "completedOrderId",
    header: "Completed Order ID",
  },
];
