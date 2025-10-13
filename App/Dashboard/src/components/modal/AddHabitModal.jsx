import React, { useState } from 'react';
import Modal from './Modal';
import { useToast } from '../toast/ToastContext';
import {
  MdHealthAndSafety,
  MdWork,
  MdPerson,
  MdFitnessCenter,
  MdSchool,
} from 'react-icons/md';

const AddHabitModal = ({ isOpen, onClose }) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    category: 'health',
    frequency: 'daily',
    xp: 10,
  });

  const categories = [
    { id: 'health', label: 'Santé', icon: <MdHealthAndSafety />, color: 'text-green-500' },
    { id: 'work', label: 'Travail', icon: <MdWork />, color: 'text-blue-500' },
    { id: 'personal', label: 'Personnel', icon: <MdPerson />, color: 'text-purple-500' },
    { id: 'productivity', label: 'Productivité', icon: <MdFitnessCenter />, color: 'text-orange-500' },
    { id: 'learning', label: 'Apprentissage', icon: <MdSchool />, color: 'text-pink-500' },
  ];

  const frequencies = [
    { id: 'daily', label: 'Quotidien' },
    { id: '3week', label: '3x/semaine' },
    { id: '5week', label: '5x/semaine' },
    { id: 'weekly', label: 'Hebdomadaire' },
  ];

  const xpOptions = [
    { value: 10, label: '10 XP (Facile)' },
    { value: 20, label: '20 XP (Moyen)' },
    { value: 30, label: '30 XP (Difficile)' },
    { value: 50, label: '50 XP (Expert)' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Veuillez entrer un nom d\'habitude');
      return;
    }

    toast.success(`Habitude "${formData.name}" créée avec succès ! +${formData.xp} XP`);

    // Reset form
    setFormData({
      name: '',
      category: 'health',
      frequency: 'daily',
      xp: 10,
    });

    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Créer une Nouvelle Habitude"
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom de l'habitude */}
        <div>
          <label className="mb-2 block text-sm font-bold text-navy-700 dark:text-white">
            Nom de l'habitude *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: Boire de l'eau, Méditer 10min..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-700 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-navy-900 dark:text-white"
          />
        </div>

        {/* Catégorie */}
        <div>
          <label className="mb-3 block text-sm font-bold text-navy-700 dark:text-white">
            Catégorie
          </label>
          <div className="grid grid-cols-5 gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFormData({ ...formData, category: cat.id })}
                className={`flex flex-col items-center gap-2 rounded-lg border-2 p-3 transition-all ${
                  formData.category === cat.id
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20'
                    : 'border-gray-200 hover:border-brand-300 dark:border-white/10'
                }`}
              >
                <span className={`text-2xl ${cat.color}`}>{cat.icon}</span>
                <span className="text-xs font-medium text-navy-700 dark:text-white">
                  {cat.label}
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
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-700 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-navy-900 dark:text-white"
          >
            {frequencies.map((freq) => (
              <option key={freq.id} value={freq.id}>
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
            {xpOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setFormData({ ...formData, xp: option.value })}
                className={`rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                  formData.xp === option.value
                    ? 'border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400'
                    : 'border-gray-200 text-gray-600 hover:border-brand-300 dark:border-white/10 dark:text-gray-400'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-4 dark:border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-6 py-2 font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="rounded-lg bg-brand-500 px-8 py-3 font-bold text-white shadow-md shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-lg"
          >
            Créer l'habitude
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddHabitModal;
