import React, { useState } from 'react';
import Card from 'components/card';
import { useToast } from 'components/toast/ToastContext';
import Modal from 'components/modal/Modal';
import Dropdown from 'components/dropdown/Dropdown';
import Tooltip from 'components/tooltip/Tooltip';
import PremiumModal from 'components/modal/PremiumModal';
import AddHabitModal from 'components/modal/AddHabitModal';
import {
  MdEdit,
  MdDelete,
  MdMoreVert,
  MdInfo,
  MdCheckCircle,
  MdStar,
} from 'react-icons/md';

const DemoInteractions = () => {
  const toast = useToast();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showAddHabitModal, setShowAddHabitModal] = useState(false);

  // Dropdown items for 3-dots menu
  const dropdownItems = [
    {
      label: 'Voir détails',
      icon: <MdInfo />,
      onClick: () => toast.info('Détails à venir...'),
    },
    {
      label: 'Modifier',
      icon: <MdEdit />,
      onClick: () => toast.info('Mode édition activé ✏️'),
    },
    {
      label: 'Supprimer',
      icon: <MdDelete />,
      danger: true,
      onClick: () => setShowConfirmModal(true),
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="mb-5">
        <h3 className="text-3xl font-bold text-navy-700 dark:text-white">
          🎨 Démonstration des Interactions
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          Page de test pour tous les composants interactifs
        </p>
      </div>

      {/* Section 1: Toast Notifications */}
      <Card extra="w-full p-6 mb-5">
        <h4 className="mb-4 text-xl font-bold text-navy-700 dark:text-white">
          1. Toast Notifications
        </h4>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => toast.success('Opération réussie avec succès !')}
            className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-white transition-all hover:bg-green-600"
          >
            Success Toast
          </button>
          <button
            onClick={() => toast.error('Une erreur est survenue !')}
            className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition-all hover:bg-red-600"
          >
            Error Toast
          </button>
          <button
            onClick={() => toast.warning('Attention à cette action !')}
            className="rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white transition-all hover:bg-orange-600"
          >
            Warning Toast
          </button>
          <button
            onClick={() => toast.info('Information importante')}
            className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600"
          >
            Info Toast
          </button>
        </div>
      </Card>

      {/* Section 2: Modals */}
      <Card extra="w-full p-6 mb-5">
        <h4 className="mb-4 text-xl font-bold text-navy-700 dark:text-white">
          2. Modals
        </h4>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setShowPremiumModal(true)}
            className="rounded-lg bg-brand-500 px-4 py-2 font-semibold text-white transition-all hover:bg-brand-600"
          >
            Ouvrir Premium Modal
          </button>
          <button
            onClick={() => setShowAddHabitModal(true)}
            className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-white transition-all hover:bg-green-600"
          >
            Ouvrir Add Habit Modal
          </button>
          <button
            onClick={() => setShowConfirmModal(true)}
            className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition-all hover:bg-red-600"
          >
            Ouvrir Confirmation Modal
          </button>
        </div>
      </Card>

      {/* Section 3: Dropdown */}
      <Card extra="w-full p-6 mb-5">
        <h4 className="mb-4 text-xl font-bold text-navy-700 dark:text-white">
          3. Dropdown Menu (3 points)
        </h4>
        <div className="flex items-center gap-4">
          <Dropdown
            trigger={
              <button className="rounded-lg bg-lightPrimary p-2 text-brand-500 transition-colors hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/10">
                <MdMoreVert className="h-6 w-6" />
              </button>
            }
            items={dropdownItems}
          />
          <p className="text-sm text-gray-600">
            Cliquez sur les 3 points pour voir le menu
          </p>
        </div>
      </Card>

      {/* Section 4: Tooltips */}
      <Card extra="w-full p-6 mb-5">
        <h4 className="mb-4 text-xl font-bold text-navy-700 dark:text-white">
          4. Tooltips
        </h4>
        <div className="flex flex-wrap gap-6">
          <Tooltip content="Tooltip en haut" position="top">
            <button className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white">
              Hover Top
            </button>
          </Tooltip>
          <Tooltip content="Tooltip en bas" position="bottom">
            <button className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-white">
              Hover Bottom
            </button>
          </Tooltip>
          <Tooltip content="Tooltip à gauche" position="left">
            <button className="rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white">
              Hover Left
            </button>
          </Tooltip>
          <Tooltip content="Tooltip à droite" position="right">
            <button className="rounded-lg bg-purple-500 px-4 py-2 font-semibold text-white">
              Hover Right
            </button>
          </Tooltip>
        </div>
      </Card>

      {/* Section 5: Interactive Buttons */}
      <Card extra="w-full p-6 mb-5">
        <h4 className="mb-4 text-xl font-bold text-navy-700 dark:text-white">
          5. Boutons Interactifs
        </h4>
        <div className="flex flex-wrap gap-3">
          <Tooltip content="Éditer cet élément">
            <button
              onClick={() => toast.info('Mode édition activé ✏️')}
              className="group rounded-lg p-3 text-gray-600 transition-all hover:bg-blue-100 hover:text-blue-500 dark:text-gray-400 dark:hover:bg-blue-900/20"
            >
              <MdEdit className="h-6 w-6 transition-transform group-hover:rotate-12" />
            </button>
          </Tooltip>

          <Tooltip content="Supprimer cet élément">
            <button
              onClick={() => setShowConfirmModal(true)}
              className="group rounded-lg p-3 text-gray-600 transition-all hover:bg-red-100 hover:text-red-500 dark:text-gray-400 dark:hover:bg-red-900/20"
            >
              <MdDelete className="h-6 w-6 transition-transform group-hover:scale-110" />
            </button>
          </Tooltip>

          <Tooltip content="Marquer comme favori">
            <button
              onClick={() => toast.success('Ajouté aux favoris ⭐')}
              className="group rounded-lg p-3 text-gray-600 transition-all hover:bg-yellow-100 hover:text-yellow-500 dark:text-gray-400 dark:hover:bg-yellow-900/20"
            >
              <MdStar className="h-6 w-6 transition-transform group-hover:scale-125" />
            </button>
          </Tooltip>

          <Tooltip content="Valider">
            <button
              onClick={() => toast.success('Validé avec succès ✓')}
              className="group rounded-lg p-3 text-gray-600 transition-all hover:bg-green-100 hover:text-green-500 dark:text-gray-400 dark:hover:bg-green-900/20"
            >
              <MdCheckCircle className="h-6 w-6 transition-transform group-hover:rotate-[360deg]" />
            </button>
          </Tooltip>
        </div>
      </Card>

      {/* Section 6: Info Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Card extra="p-6 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
              <MdCheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Toast System</p>
              <p className="text-xl font-bold text-navy-700 dark:text-white">
                Fonctionnel ✓
              </p>
            </div>
          </div>
        </Card>

        <Card extra="p-6 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/20">
              <MdInfo className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Modals</p>
              <p className="text-xl font-bold text-navy-700 dark:text-white">
                3 types
              </p>
            </div>
          </div>
        </Card>

        <Card extra="p-6 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/20">
              <MdStar className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Interactions</p>
              <p className="text-xl font-bold text-navy-700 dark:text-white">
                100% Ready
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="Êtes-vous sûr ?"
        footer={
          <>
            <button
              onClick={() => setShowConfirmModal(false)}
              className="rounded-lg px-6 py-2 font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
            >
              Annuler
            </button>
            <button
              onClick={() => {
                toast.success('Supprimé avec succès !');
                setShowConfirmModal(false);
              }}
              className="rounded-lg bg-red-500 px-6 py-2 font-bold text-white transition-colors hover:bg-red-600"
            >
              Confirmer
            </button>
          </>
        }
      >
        <p className="text-gray-600 dark:text-gray-400">
          Cette action est irréversible. Voulez-vous vraiment continuer ?
        </p>
      </Modal>

      {/* Premium Modal */}
      <PremiumModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
      />

      {/* Add Habit Modal */}
      <AddHabitModal
        isOpen={showAddHabitModal}
        onClose={() => setShowAddHabitModal(false)}
      />
    </div>
  );
};

export default DemoInteractions;
