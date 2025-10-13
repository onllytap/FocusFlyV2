import React, { useState } from "react";
import Modal from "./Modal";
import { useToast } from "components/toast/ToastContext";
import { MdWarning } from "react-icons/md";

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  itemName,
  itemType = "habitude",
  onConfirm,
}) {
  const toast = useToast();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!isConfirmed) {
      toast.warning("Veuillez confirmer la suppression en cochant la case");
      return;
    }

    setIsDeleting(true);

    // Simuler une suppression avec délai
    setTimeout(() => {
      if (onConfirm) {
        onConfirm();
      }
      toast.success(`${itemType} supprimé(e) définitivement 🗑️`);
      setIsDeleting(false);
      setIsConfirmed(false);
      onClose();
    }, 800);
  };

  const handleClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  const itemTypeLabels = {
    habitude: { singular: "l'habitude", plural: "l'habitude" },
    donnée: { singular: "la donnée", plural: "les données" },
    compte: { singular: "le compte", plural: "le compte" },
  };

  const label = itemTypeLabels[itemType] || itemTypeLabels.habitude;

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="" size="md">
      <div className="space-y-5">
        {/* Icône d'avertissement */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <MdWarning className="h-8 w-8 text-red-600 dark:text-red-400" />
          </div>
        </div>

        {/* Titre */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-navy-700 dark:text-white">
            ⚠️ Êtes-vous sûr ?
          </h3>
        </div>

        {/* Message */}
        <div className="text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Vous êtes sur le point de supprimer {label.singular} :
          </p>
          <p className="mt-2 text-lg font-bold text-navy-700 dark:text-white">
            "{itemName}"
          </p>
        </div>

        {/* Warning Box */}
        <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-900/20">
          <div className="flex gap-3">
            <MdWarning className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400" />
            <div>
              <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                Cette action est IRRÉVERSIBLE
              </p>
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                Toutes les données associées (statistiques, historique, streak) seront
                perdues définitivement.
              </p>
            </div>
          </div>
        </div>

        {/* Checkbox de confirmation */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-navy-800">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
              className="mt-1 h-5 w-5 cursor-pointer rounded border-gray-300 text-red-600 focus:ring-2 focus:ring-red-500/20 dark:border-white/10 dark:bg-navy-700"
            />
            <div>
              <p className="text-sm font-semibold text-navy-700 dark:text-white">
                Je comprends que cette action est irréversible
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Toutes mes données seront perdues et ne pourront pas être récupérées
              </p>
            </div>
          </label>
        </div>

        {/* Boutons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={handleClose}
            disabled={isDeleting}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 disabled:opacity-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
          >
            Annuler
          </button>
          <button
            onClick={handleDelete}
            disabled={!isConfirmed || isDeleting}
            className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-red-600"
          >
            {isDeleting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Suppression...
              </span>
            ) : (
              "Supprimer définitivement"
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
}
