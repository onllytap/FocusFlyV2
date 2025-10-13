import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useToast } from "components/toast/ToastContext";
import {
  MdHealthAndSafety,
  MdWork,
  MdPerson,
  MdFitnessCenter,
  MdSchool,
} from "react-icons/md";

export default function EditModal({ isOpen, onClose, item, onSave }) {
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    frequency: "",
    xp: 10,
    status: "active",
  });

  // Pré-remplir le formulaire quand item change
  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || item.habit || "",
        category: item.category || "",
        frequency: item.frequency || "Quotidien",
        xp: item.xp || item.xpPerDay || 10,
        status: item.status || "active",
      });
    }
  }, [item]);

  const categories = [
    {
      id: "santé",
      name: "Santé",
      icon: <MdHealthAndSafety className="h-5 w-5" />,
      color: "text-green-500 bg-green-50 dark:bg-green-900/20",
    },
    {
      id: "travail",
      name: "Travail",
      icon: <MdWork className="h-5 w-5" />,
      color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "personnel",
      name: "Personnel",
      icon: <MdPerson className="h-5 w-5" />,
      color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
    },
    {
      id: "productivité",
      name: "Productivité",
      icon: <MdFitnessCenter className="h-5 w-5" />,
      color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20",
    },
    {
      id: "apprentissage",
      name: "Apprentissage",
      icon: <MdSchool className="h-5 w-5" />,
      color: "text-pink-500 bg-pink-50 dark:bg-pink-900/20",
    },
  ];

  const frequencies = [
    { value: "Quotidien", label: "Quotidien" },
    { value: "3x/semaine", label: "3 fois par semaine" },
    { value: "5x/semaine", label: "5 fois par semaine" },
    { value: "Hebdomadaire", label: "Hebdomadaire" },
  ];

  const xpLevels = [
    { value: 10, label: "10 XP - Facile" },
    { value: 20, label: "20 XP - Moyen" },
    { value: 30, label: "30 XP - Difficile" },
    { value: 50, label: "50 XP - Expert" },
  ];

  const statuses = [
    { value: "active", label: "Actif", color: "text-green-600 bg-green-50 dark:bg-green-900/20" },
    { value: "paused", label: "En pause", color: "text-orange-600 bg-orange-50 dark:bg-orange-900/20" },
    { value: "archived", label: "Archivé", color: "text-gray-600 bg-gray-50 dark:bg-gray-900/20" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Le nom de l'habitude est requis");
      return;
    }

    if (!formData.category) {
      toast.error("Veuillez sélectionner une catégorie");
      return;
    }

    // Appeler la fonction onSave si fournie
    if (onSave) {
      onSave({ ...item, ...formData });
    }

    toast.success("Modifications enregistrées avec succès ! 🎉");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Modifier l'habitude"
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nom de l'habitude */}
        <div>
          <label className="mb-2 block text-sm font-bold text-navy-700 dark:text-white">
            Nom de l'habitude
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: Boire de l'eau"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-700 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-navy-800 dark:text-white dark:focus:border-brand-400"
          />
        </div>

        {/* Catégorie */}
        <div>
          <label className="mb-2 block text-sm font-bold text-navy-700 dark:text-white">
            Catégorie
          </label>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFormData({ ...formData, category: cat.name })}
                className={`flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all ${
                  formData.category === cat.name
                    ? "border-brand-500 bg-brand-50 dark:border-brand-400 dark:bg-brand-900/20"
                    : "border-gray-200 bg-white hover:border-gray-300 dark:border-white/10 dark:bg-navy-800 dark:hover:border-white/20"
                }`}
              >
                <div className={`rounded-lg p-2 ${cat.color}`}>{cat.icon}</div>
                <span className="text-xs font-semibold text-navy-700 dark:text-white">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Fréquence */}
        <div>
          <label className="mb-2 block text-sm font-bold text-navy-700 dark:text-white">
            Fréquence
          </label>
          <select
            value={formData.frequency}
            onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-700 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-navy-800 dark:text-white dark:focus:border-brand-400"
          >
            {frequencies.map((freq) => (
              <option key={freq.value} value={freq.value}>
                {freq.label}
              </option>
            ))}
          </select>
        </div>

        {/* XP par jour */}
        <div>
          <label className="mb-2 block text-sm font-bold text-navy-700 dark:text-white">
            XP par jour
          </label>
          <div className="grid grid-cols-2 gap-3">
            {xpLevels.map((level) => (
              <button
                key={level.value}
                type="button"
                onClick={() => setFormData({ ...formData, xp: level.value })}
                className={`rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-all ${
                  formData.xp === level.value
                    ? "border-brand-500 bg-brand-50 text-brand-600 dark:border-brand-400 dark:bg-brand-900/20 dark:text-brand-400"
                    : "border-gray-200 bg-white text-navy-700 hover:border-gray-300 dark:border-white/10 dark:bg-navy-800 dark:text-white dark:hover:border-white/20"
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        {/* Statut */}
        <div>
          <label className="mb-2 block text-sm font-bold text-navy-700 dark:text-white">
            Statut
          </label>
          <div className="grid grid-cols-3 gap-3">
            {statuses.map((status) => (
              <button
                key={status.value}
                type="button"
                onClick={() => setFormData({ ...formData, status: status.value })}
                className={`rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-all ${
                  formData.status === status.value
                    ? `border-current ${status.color}`
                    : "border-gray-200 bg-white text-navy-700 hover:border-gray-300 dark:border-white/10 dark:bg-navy-800 dark:text-white dark:hover:border-white/20"
                }`}
              >
                {status.label}
              </button>
            ))}
          </div>
        </div>

        {/* Boutons */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="flex-1 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-600"
          >
            Enregistrer les modifications
          </button>
        </div>
      </form>
    </Modal>
  );
}
