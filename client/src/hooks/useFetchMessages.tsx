import { z } from "zod";
import { useEffect, useState } from "react";
import { QueryStatus } from "@/lib/query";
import { API_BASE_URL } from "@/lib/constants";
import {
  messageConfig,
  MessageType,
} from "@/components/messages-table/columns";

export default function useFetchMessages() {
  const [data, setData] = useState<MessageType[]>([]);
  const [queryStatus, setQueryStatus] = useState<QueryStatus>(undefined);

  const fetchMessages = async () => {
    try {
      setQueryStatus("loading");
      const response = await fetch(`${API_BASE_URL}/sent-message/get-all`);
      const result = await response.json();
      console.log(result);
      if (result.success) {
        const messagesData = z.array(messageConfig).parse(result.sentMessages);
        setData(messagesData);
      }
      setQueryStatus("success");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setQueryStatus("error");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return { data, queryStatus, refetch: fetchMessages };
}
