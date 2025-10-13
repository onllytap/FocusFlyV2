import React, { useState } from "react";
import Dropdown from "components/dropdown/Dropdown";
import { useToast } from "components/toast/ToastContext";
import { MdInfo, MdEdit, MdDelete, MdSettings } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import DetailsModal from "components/modal/DetailsModal";
import EditModal from "components/modal/EditModal";
import SettingsModal from "components/modal/SettingsModal";
import DeleteConfirmModal from "components/modal/DeleteConfirmModal";

function CardMenu(props) {
  const { transparent, item, showSettings = true } = props;
  const toast = useToast();

  // States pour les modals
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Mock item si non fourni
  const mockItem = item || {
    id: 1,
    name: "Exemple d'habitude",
    habit: "Exemple d'habitude",
    category: "Santé",
    categoryIcon: "health",
    frequency: "Quotidien",
    streak: 15,
    successRate: 87,
    xp: 10,
    xpPerDay: 10,
    completedCount: 42,
    createdAt: "15 septembre 2024",
    status: "active"
  };

  const menuItems = [
    {
      label: 'Voir détails',
      icon: <MdInfo />,
      onClick: () => setShowDetailsModal(true),
    },
    {
      label: 'Modifier',
      icon: <MdEdit />,
      onClick: () => setShowEditModal(true),
    },
  ];

  if (showSettings) {
    menuItems.push({
      label: 'Paramètres',
      icon: <MdSettings />,
      onClick: () => setShowSettingsModal(true),
    });
  }

  menuItems.push({
    label: 'Supprimer',
    icon: <MdDelete />,
    danger: true,
    onClick: () => setShowDeleteModal(true),
  });

  return (
    <>
      <Dropdown
        trigger={
          <button
            className={`flex items-center text-xl hover:cursor-pointer ${
              transparent
                ? "bg-none text-white hover:bg-none active:bg-none"
                : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
            } linear justify-center rounded-lg font-bold transition duration-200`}
          >
            <BsThreeDots className="h-6 w-6" />
          </button>
        }
        items={menuItems}
        position="bottom-right"
      />

      {/* Modals */}
      <DetailsModal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        item={mockItem}
        onEdit={() => {
          setShowDetailsModal(false);
          setShowEditModal(true);
        }}
      />

      <EditModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        item={mockItem}
        onSave={(updatedItem) => {
          console.log("Habit updated:", updatedItem);
          // TODO: Update habit in state/backend
        }}
      />

      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />

      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        itemName={mockItem.name || mockItem.habit}
        itemType="habitude"
        onConfirm={() => {
          console.log("Habit deleted:", mockItem.id);
          // TODO: Delete habit from state/backend
        }}
      />
    </>
  );
}

export default CardMenu;
