import React from "react";
import Modal from "./Modal";
import {
  MdHealthAndSafety,
  MdWork,
  MdPerson,
  MdFitnessCenter,
  MdSchool,
  MdCheckCircle,
} from "react-icons/md";
import { FaFire } from "react-icons/fa";

export default function DetailsModal({ isOpen, onClose, item, onEdit }) {
  if (!item) return null;

  const getCategoryIcon = (category) => {
    const iconClass = "h-6 w-6";
    switch (category?.toLowerCase()) {
      case "santé":
        return <MdHealthAndSafety className={iconClass} />;
      case "travail":
        return <MdWork className={iconClass} />;
      case "personnel":
        return <MdPerson className={iconClass} />;
      case "productivité":
        return <MdFitnessCenter className={iconClass} />;
      case "apprentissage":
        return <MdSchool className={iconClass} />;
      default:
        return <MdCheckCircle className={iconClass} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category?.toLowerCase()) {
      case "santé":
        return "text-green-500 bg-green-50 dark:bg-green-900/20";
      case "travail":
        return "text-blue-500 bg-blue-50 dark:bg-blue-900/20";
      case "personnel":
        return "text-purple-500 bg-purple-50 dark:bg-purple-900/20";
      case "productivité":
        return "text-orange-500 bg-orange-50 dark:bg-orange-900/20";
      case "apprentissage":
        return "text-pink-500 bg-pink-50 dark:bg-pink-900/20";
      default:
        return "text-gray-500 bg-gray-50 dark:bg-gray-900/20";
    }
  };

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-900/30 dark:text-green-400">
            <MdCheckCircle className="h-4 w-4" />
            Actif
          </span>
        );
      case "paused":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
            En pause
          </span>
        );
      case "archived":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-900/30 dark:text-gray-400">
            Archivé
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-900/30 dark:text-green-400">
            <MdCheckCircle className="h-4 w-4" />
            Actif
          </span>
        );
    }
  };

  // Mock data pour l'historique des 7 derniers jours
  const last7Days = [
    { day: "Lun", completed: true },
    { day: "Mar", completed: true },
    { day: "Mer", completed: false },
    { day: "Jeu", completed: true },
    { day: "Ven", completed: true },
    { day: "Sam", completed: false },
    { day: "Dim", completed: true },
  ];

  const completedCount = item.completedCount || 0;
  const totalXP = completedCount * (item.xp || item.xpPerDay || 10);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Détails de l'habitude"
      size="lg"
      footer={
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
          >
            Fermer
          </button>
          {onEdit && (
            <button
              onClick={() => {
                onClose();
                onEdit();
              }}
              className="flex-1 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-600"
            >
              Modifier
            </button>
          )}
        </div>
      }
    >
      <div className="space-y-6">
        {/* Section 1 - Informations principales */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-navy-800">
          <h3 className="mb-4 text-sm font-bold uppercase text-gray-500 dark:text-gray-400">
            Informations principales
          </h3>

          <div className="space-y-4">
            {/* Nom */}
            <div className="flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${getCategoryColor(
                  item.category
                )}`}
              >
                {getCategoryIcon(item.category)}
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">Nom</p>
                <p className="text-lg font-bold text-navy-700 dark:text-white">
                  {item.name || item.habit}
                </p>
              </div>
            </div>

            {/* Catégorie et Statut */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Catégorie</p>
                <p className="mt-1 text-sm font-semibold text-navy-700 dark:text-white">
                  {item.category}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Statut</p>
                <div className="mt-1">{getStatusBadge(item.status)}</div>
              </div>
            </div>

            {/* Date de création */}
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Date de création</p>
              <p className="mt-1 text-sm font-medium text-navy-700 dark:text-white">
                {item.createdAt || "15 septembre 2024"}
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 - Statistiques */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-navy-800">
          <h3 className="mb-4 text-sm font-bold uppercase text-gray-500 dark:text-gray-400">
            Statistiques
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {/* Streak */}
            <div className="rounded-lg bg-gradient-to-br from-orange-50 to-red-50 p-4 dark:from-orange-900/20 dark:to-red-900/20">
              <div className="flex items-center gap-2">
                <FaFire className="h-5 w-5 text-orange-500" />
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  Streak actuel
                </p>
              </div>
              <p className="mt-2 text-2xl font-bold text-navy-700 dark:text-white">
                {item.streak || 0} jours
              </p>
            </div>

            {/* Complétions */}
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-4 dark:from-green-900/20 dark:to-emerald-900/20">
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Complétions totales
              </p>
              <p className="mt-2 text-2xl font-bold text-navy-700 dark:text-white">
                {completedCount}
              </p>
            </div>

            {/* XP Total */}
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-4 dark:from-blue-900/20 dark:to-indigo-900/20">
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                XP gagné total
              </p>
              <p className="mt-2 text-2xl font-bold text-brand-500 dark:text-brand-400">
                {totalXP} XP
              </p>
            </div>

            {/* Fréquence */}
            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-4 dark:from-purple-900/20 dark:to-pink-900/20">
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Fréquence
              </p>
              <p className="mt-2 text-lg font-bold text-navy-700 dark:text-white">
                {item.frequency || "Quotidien"}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 - Historique des 7 derniers jours */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-navy-800">
          <h3 className="mb-4 text-sm font-bold uppercase text-gray-500 dark:text-gray-400">
            Historique (7 derniers jours)
          </h3>

          <div className="flex justify-between gap-2">
            {last7Days.map((day, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={`flex h-12 w-full items-center justify-center rounded-lg text-2xl transition-all ${
                    day.completed
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
                  }`}
                >
                  {day.completed ? "✓" : "✗"}
                </div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {day.day}
                </p>
              </div>
            ))}
          </div>

          {/* Barre de progression */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Taux de réussite</span>
              <span className="font-bold">
                {Math.round((last7Days.filter((d) => d.completed).length / 7) * 100)}%
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500"
                style={{
                  width: `${(last7Days.filter((d) => d.completed).length / 7) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
