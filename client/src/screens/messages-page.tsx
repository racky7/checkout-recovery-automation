import { columns } from "@/components/messages-table/columns";
import { DataTable } from "@/components/messages-table/data-table";
import { Button } from "@/components/ui/button";
import useFetchMessages from "@/hooks/useFetchMessages";

export default function MessagesPage() {
  const { data, queryStatus, refetch } = useFetchMessages();

  return (
    <div className="container space-y-10 mx-auto py-10">
      <div className="w-full flex justify-between items-center">
        <h1>All Sent Messages</h1>
        <Button onClick={refetch} disabled={queryStatus === "loading"}>
          Refresh Data
        </Button>
      </div>
      {queryStatus === "loading" && <p>Loading table data...</p>}
      {queryStatus === "error" && (
        <p className="text-red-500">Error loading table data</p>
      )}
      {queryStatus === "success" && <DataTable columns={columns} data={data} />}
    </div>
  );
}
