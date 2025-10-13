import React from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import { useToast } from "components/toast/ToastContext";
import { MdRestore, MdDelete, MdCheckCircle, MdCancel } from "react-icons/md";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export default function ArchivedHabitsTable() {
  const [sorting, setSorting] = React.useState([]);
  const toast = useToast();

  // Mock data - habitudes archivées
  const tableData = [
    {
      id: 1,
      habit: "Courir 30min",
      category: "Santé",
      archivedDate: "15.Sep.2024",
      reason: "Complété",
      totalDays: 90,
      finalSuccessRate: 85,
      status: "completed"
    },
    {
      id: 2,
      habit: "Apprendre espagnol",
      category: "Apprentissage",
      archivedDate: "10.Sep.2024",
      reason: "Abandonné",
      totalDays: 23,
      finalSuccessRate: 45,
      status: "abandoned"
    },
    {
      id: 3,
      habit: "Cuisine maison",
      category: "Personnel",
      archivedDate: "05.Sep.2024",
      reason: "Complété",
      totalDays: 60,
      finalSuccessRate: 78,
      status: "completed"
    },
    {
      id: 4,
      habit: "Yoga matin",
      category: "Santé",
      archivedDate: "01.Sep.2024",
      reason: "Abandonné",
      totalDays: 14,
      finalSuccessRate: 30,
      status: "abandoned"
    },
  ];

  const handleRestore = (habitId) => {
    toast.success("Habitude restaurée avec succès ! 🎉");
    // TODO: Restore habit logic
  };

  const handleDeletePermanently = (habitId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer définitivement cette habitude ? Cette action est irréversible.")) {
      toast.error("Habitude supprimée définitivement 🗑️");
      // TODO: Delete habit permanently logic
    }
  };

  const columns = [
    columnHelper.accessor("habit", {
      id: "habit",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">HABITUDE</p>
      ),
      cell: (info) => {
        const row = info.row.original;
        return (
          <div>
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {info.getValue()}
            </p>
            <p className="text-xs text-gray-500">{row.category}</p>
          </div>
        );
      },
    }),
    columnHelper.accessor("archivedDate", {
      id: "archivedDate",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE ARCHIVAGE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-medium text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("reason", {
      id: "reason",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">RAISON</p>
      ),
      cell: (info) => {
        const row = info.row.original;
        return (
          <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
            row.status === "completed"
              ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
              : "bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400"
          }`}>
            {row.status === "completed" ? (
              <MdCheckCircle className="h-4 w-4" />
            ) : (
              <MdCancel className="h-4 w-4" />
            )}
            {info.getValue()}
          </span>
        );
      },
    }),
    columnHelper.accessor("totalDays", {
      id: "totalDays",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DURÉE TOTALE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-medium text-navy-700 dark:text-white">
          {info.getValue()} jours
        </p>
      ),
    }),
    columnHelper.accessor("finalSuccessRate", {
      id: "finalSuccessRate",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">TAUX FINAL</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}%
        </p>
      ),
    }),
    columnHelper.accessor("id", {
      id: "actions",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">ACTIONS</p>
      ),
      cell: (info) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleRestore(info.getValue())}
            className="rounded-lg p-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-green-500 hover:scale-110 dark:text-gray-400 dark:hover:bg-white/10"
            title="Restaurer"
          >
            <MdRestore className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleDeletePermanently(info.getValue())}
            className="rounded-lg p-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-red-500 hover:scale-110 dark:text-gray-400 dark:hover:bg-white/10"
            title="Supprimer définitivement"
          >
            <MdDelete className="h-5 w-5" />
          </button>
        </div>
      ),
    }),
  ];

  const [data, setData] = React.useState(() => [...tableData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div>
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            Habitudes Archivées
          </h4>
          <p className="mt-1 text-sm text-gray-600">
            {tableData.length} habitudes archivées
          </p>
        </div>
        <CardMenu />
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start dark:border-white/10"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.map((row) => {
                return (
                  <tr
                    key={row.id}
                    className="transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3 pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
