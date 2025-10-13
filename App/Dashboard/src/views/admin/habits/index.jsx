import React, { useState } from "react";
import Widget from "components/widget/Widget";
import ActiveHabitsTable from "./components/ActiveHabitsTable";
import ArchivedHabitsTable from "./components/ArchivedHabitsTable";
import {
  MdCheckCircle,
  MdTrendingUp,
  MdAdd,
  MdSearch,
  MdFilterList,
} from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const HabitsManagement = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = [
    { id: "all", label: "Toutes", count: 7 },
    { id: "daily", label: "Quotidien", count: 5 },
    { id: "weekly", label: "Hebdo", count: 2 },
    { id: "active", label: "En cours", count: 6 },
    { id: "at-risk", label: "À risque", count: 1 },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="mb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600">
            <MdCheckCircle className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-navy-700 dark:text-white">
              Gestion des Habitudes
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Suivez et gérez toutes vos habitudes quotidiennes
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Widget
          icon={<MdCheckCircle className="h-6 w-6" />}
          title={"Habitudes Actives"}
          subtitle={"7 habitudes"}
        />
        <Widget
          icon={<IoMdTime className="h-7 w-7" />}
          title={"Complétées Aujourd'hui"}
          subtitle={"5/7"}
        />
        <Widget
          icon={<FaFire className="h-6 w-6" />}
          title={"Streak Moyen"}
          subtitle={"11 jours"}
        />
        <Widget
          icon={<MdTrendingUp className="h-6 w-6" />}
          title={"XP Cette Semaine"}
          subtitle={"+875 XP"}
        />
      </div>

      {/* Filters & Search Bar */}
      <div className="mt-6 flex flex-col gap-4 rounded-[20px] bg-white p-5 shadow-3xl shadow-shadow-500 dark:bg-navy-800 dark:shadow-none md:flex-row md:items-center md:justify-between">
        {/* Search Bar */}
        <div className="flex w-full items-center gap-2 rounded-lg bg-gray-50 px-4 py-3 dark:bg-white/5 md:w-1/3">
          <MdSearch className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une habitude..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm text-navy-700 outline-none placeholder:text-gray-400 dark:text-white"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <MdFilterList className="h-5 w-5 text-gray-400" />
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                activeFilter === filter.id
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10"
              }`}
            >
              {filter.label}
              <span
                className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                  activeFilter === filter.id
                    ? "bg-white/20"
                    : "bg-gray-200 dark:bg-white/10"
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Add Habit Button */}
        <button
          onClick={() => console.log("Add new habit")}
          className="flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/40"
        >
          <MdAdd className="h-5 w-5" />
          Ajouter une habitude
        </button>
      </div>

      {/* Active Habits Table */}
      <div className="mt-5">
        <ActiveHabitsTable />
      </div>

      {/* Archived Habits Table */}
      <div className="mt-5">
        <ArchivedHabitsTable />
      </div>

      {/* Bottom Stats / Motivation Card */}
      <div className="mt-5 rounded-[20px] bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-white/20 p-3">
            <FaFire className="h-8 w-8" />
          </div>
          <div>
            <h5 className="text-xl font-bold">Continue comme ça ! 🔥</h5>
            <p className="mt-2 text-sm opacity-90">
              Tu as complété 5 habitudes aujourd'hui. Ton streak moyen est de 11 jours et tu as
              gagné 875 XP cette semaine. Excellent travail !
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="rounded-lg bg-white/10 px-4 py-2">
                <p className="text-xs opacity-75">Meilleure habitude</p>
                <p className="mt-1 font-bold">Méditation (92% réussite)</p>
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2">
                <p className="text-xs opacity-75">Plus long streak</p>
                <p className="mt-1 font-bold">Méditation (22 jours)</p>
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2">
                <p className="text-xs opacity-75">Objectif de la semaine</p>
                <p className="mt-1 font-bold">85% complété</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitsManagement;
