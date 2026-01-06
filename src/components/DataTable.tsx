"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Column<T> {
  header: string;
  accessorKey: keyof T;
  cell?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  selectable?: boolean;
  onSelectionChange?: (selectedItems: T[]) => void;
  className?: string;
}

export function DataTable<T extends { id?: string | number }>({
  columns,
  data,
  selectable,
  onSelectionChange,
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn("rounded-xl border border-white/5 overflow-hidden glass", className)}>
      <Table>
        <TableHeader className="bg-white/5">
          <TableRow className="border-white/5 hover:bg-transparent">
            {selectable && (
              <TableHead className="w-12">
                <Checkbox className="border-zinc-500" />
              </TableHead>
            )}
            {columns.map((column, index) => (
              <TableHead key={index} className="text-zinc-400 font-medium">
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((item, rowIndex) => (
              <TableRow key={item.id || rowIndex} className="border-white/5 hover:bg-white/5 transition-colors">
                {selectable && (
                  <TableCell>
                    <Checkbox className="border-zinc-500" />
                  </TableCell>
                )}
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} className="text-zinc-300">
                    {column.cell ? column.cell(item) : (item[column.accessorKey] as React.ReactNode)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + (selectable ? 1 : 0)} className="h-32 text-center text-zinc-500">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
