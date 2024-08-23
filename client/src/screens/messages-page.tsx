import { columns, Message } from "@/components/messages-table/columns";
import { DataTable } from "@/components/messages-table/data-table";
import { useEffect, useState } from "react";
import { QueryStatus } from "@/lib/query";
import { API_BASE_URL } from "@/lib/constants";

export default function MessagesPage() {
  const [data, setData] = useState<Message[]>([]);
  const [queryStatus, setQueryStatus] = useState<QueryStatus>(undefined);

  const fetchAllMessages = async () => {
    try {
      setQueryStatus("loading");
      const response = await fetch(`${API_BASE_URL}/api/messages`);
      const messages: Message[] = await response.json();
      setData(messages);
      setQueryStatus("success");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setQueryStatus("error");
    }
  };

  useEffect(() => {
    fetchAllMessages();
    return () => {};
  }, []);

  return (
    <div className="container mx-auto py-10">
      {queryStatus === "loading" ? <p>Loading table data...</p> : null}
      {queryStatus === "error" ? <p>Error loading table data</p> : null}
      {queryStatus === "success" ? (
        <DataTable columns={columns} data={data} />
      ) : null}
    </div>
  );
}
