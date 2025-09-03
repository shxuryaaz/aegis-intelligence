import * as React from "react";
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export type Alert = {
  id: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  source: string;
  entity: string;
  date: string;
};

function toCSV(rows: Alert[]): string {
  const header = ["ID", "Severity", "Source", "Entity", "Date"].join(",");
  const body = rows
    .map((r) => [r.id, r.severity, r.source, r.entity, r.date].map((v) => `"${String(v).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  return `${header}\n${body}`;
}

export function AlertsTable({ data }: { data: Alert[] }) {
  const columns = React.useMemo<ColumnDef<Alert>[]>(
    () => [
      { header: "ID", accessorKey: "id" },
      { header: "Severity", accessorKey: "severity" },
      { header: "Source", accessorKey: "source" },
      { header: "Entity", accessorKey: "entity" },
      { header: "Date", accessorKey: "date" },
    ],
    [],
  );

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel() });

  const handleExport = () => {
    const csv = toCSV(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `alerts_export_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-lg border bg-card">
      <div className="flex items-center justify-between p-3">
        <h3 className="text-sm font-medium">Recent Alerts</h3>
        <Button variant="outline" size="sm" onClick={handleExport}>
          Export CSV
        </Button>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead key={header.id} className="whitespace-nowrap">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="cursor-pointer hover:bg-muted/30">
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between p-3 text-xs text-muted-foreground">
        <div>
          Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}–
          {Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, data.length)} of {data.length}
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Prev
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
