import React from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import Progress from "components/progress";
import { useToast } from "components/toast/ToastContext";
import {
  MdCheckCircle,
  MdEdit,
  MdArchive,
  MdDelete,
  MdFitnessCenter,
  MdWork,
  MdPerson,
  MdHealthAndSafety,
  MdSchool
} from "react-icons/md";
import { FaFire } from "react-icons/fa";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export default function ActiveHabitsTable() {
  const [sorting, setSorting] = React.useState([]);
  const toast = useToast();

  // Mock data - habitudes actives
  const tableData = [
    {
      id: 1,
      habit: "Boire de l'eau",
      category: "Santé",
      categoryIcon: "health",
      frequency: "Quotidien",
      streak: 15,
      successRate: 87,
      xpPerDay: 10,
      status: "active"
    },
    {
      id: 2,
      habit: "Session focus 25min",
      category: "Travail",
      categoryIcon: "work",
      frequency: "Quotidien",
      streak: 12,
      successRate: 75,
      xpPerDay: 30,
      status: "active"
    },
    {
      id: 3,
      habit: "Fermer Discord à 22h",
      category: "Productivité",
      categoryIcon: "productivity",
      frequency: "Quotidien",
      streak: 8,
      successRate: 65,
      xpPerDay: 20,
      status: "active"
    },
    {
      id: 4,
      habit: "Lire 10 pages",
      category: "Personnel",
      categoryIcon: "personal",
      frequency: "Quotidien",
      streak: 5,
      successRate: 60,
      xpPerDay: 15,
      status: "active"
    },
    {
      id: 5,
      habit: "Exercice 20min",
      category: "Santé",
      categoryIcon: "health",
      frequency: "3x/semaine",
      streak: 4,
      successRate: 80,
      xpPerDay: 40,
      status: "active"
    },
    {
      id: 6,
      habit: "Méditation 10min",
      category: "Santé",
      categoryIcon: "health",
      frequency: "Quotidien",
      streak: 22,
      successRate: 92,
      xpPerDay: 25,
      status: "active"
    },
    {
      id: 7,
      habit: "Révision code",
      category: "Travail",
      categoryIcon: "work",
      frequency: "5x/semaine",
      streak: 3,
      successRate: 55,
      xpPerDay: 35,
      status: "at-risk"
    },
  ];

  const getCategoryIcon = (iconType) => {
    const iconClass = "h-5 w-5";
    switch(iconType) {
      case "health": return <MdHealthAndSafety className={iconClass} />;
      case "work": return <MdWork className={iconClass} />;
      case "personal": return <MdPerson className={iconClass} />;
      case "productivity": return <MdFitnessCenter className={iconClass} />;
      case "learning": return <MdSchool className={iconClass} />;
      default: return <MdCheckCircle className={iconClass} />;
    }
  };

  const getCategoryColor = (iconType) => {
    switch(iconType) {
      case "health": return "text-green-500 bg-green-50 dark:bg-green-900/20";
      case "work": return "text-blue-500 bg-blue-50 dark:bg-blue-900/20";
      case "personal": return "text-purple-500 bg-purple-50 dark:bg-purple-900/20";
      case "productivity": return "text-orange-500 bg-orange-50 dark:bg-orange-900/20";
      case "learning": return "text-pink-500 bg-pink-50 dark:bg-pink-900/20";
      default: return "text-gray-500 bg-gray-50 dark:bg-gray-900/20";
    }
  };

  const handleEdit = (habitId) => {
    toast.info("Mode édition activé ✏️");
    // TODO: Open edit modal
  };

  const handleArchive = (habitId) => {
    toast.warning("Habitude archivée 📦");
    // TODO: Archive habit logic
  };

  const handleDelete = (habitId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette habitude ?")) {
      toast.error("Habitude supprimée 🗑️");
      // TODO: Delete habit logic
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
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${getCategoryColor(row.categoryIcon)}`}>
              {getCategoryIcon(row.categoryIcon)}
            </div>
            <div>
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {info.getValue()}
              </p>
              <p className="text-xs text-gray-500">{row.category}</p>
            </div>
          </div>
        );
      },
    }),
    columnHelper.accessor("frequency", {
      id: "frequency",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">FRÉQUENCE</p>
      ),
      cell: (info) => (
        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-white/10 dark:text-gray-300">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("streak", {
      id: "streak",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">STREAK</p>
      ),
      cell: (info) => (
        <div className="flex items-center gap-2">
          <FaFire className="h-5 w-5 text-orange-500" />
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()} jours
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("successRate", {
      id: "successRate",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">TAUX RÉUSSITE</p>
      ),
      cell: (info) => (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Progress width="w-20" value={info.getValue()} />
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {info.getValue()}%
            </p>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("xpPerDay", {
      id: "xpPerDay",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">XP/JOUR</p>
      ),
      cell: (info) => (
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/10 px-3 py-1 text-sm font-bold text-brand-500 dark:bg-brand-400/10 dark:text-brand-400">
          +{info.getValue()} XP
        </span>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">STATUT</p>
      ),
      cell: (info) => {
        const row = info.row.original;
        const isAtRisk = row.successRate < 60 || row.streak < 5;
        return (
          <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
            isAtRisk
              ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
              : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
          }`}>
            <MdCheckCircle className="h-4 w-4" />
            {isAtRisk ? "À risque" : "Actif"}
          </span>
        );
      },
    }),
    columnHelper.accessor("id", {
      id: "actions",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">ACTIONS</p>
      ),
      cell: (info) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleEdit(info.getValue())}
            className="rounded-lg p-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-blue-500 hover:scale-110 dark:text-gray-400 dark:hover:bg-white/10"
            title="Éditer"
          >
            <MdEdit className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleArchive(info.getValue())}
            className="rounded-lg p-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-orange-500 hover:scale-110 dark:text-gray-400 dark:hover:bg-white/10"
            title="Archiver"
          >
            <MdArchive className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleDelete(info.getValue())}
            className="rounded-lg p-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-red-500 hover:scale-110 dark:text-gray-400 dark:hover:bg-white/10"
            title="Supprimer"
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
            Habitudes Actives
          </h4>
          <p className="mt-1 text-sm text-gray-600">
            {tableData.length} habitudes en cours
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
