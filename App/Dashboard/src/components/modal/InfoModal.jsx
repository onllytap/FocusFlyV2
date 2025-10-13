import React from "react";
import Modal from "./Modal";
import { MdInfo, MdHelp, MdStar } from "react-icons/md";

export default function InfoModal({ isOpen, onClose, title, content, type = "info" }) {
  const getIcon = () => {
    switch (type) {
      case "help":
        return (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
            <MdHelp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
        );
      case "feature":
        return (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
            <MdStar className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
          </div>
        );
      case "info":
      default:
        return (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
            <MdInfo className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        );
    }
  };

  const getColorClasses = () => {
    switch (type) {
      case "help":
        return {
          border: "border-purple-200 dark:border-purple-900/50",
          bg: "bg-purple-50 dark:bg-purple-900/20",
          text: "text-purple-700 dark:text-purple-400",
        };
      case "feature":
        return {
          border: "border-yellow-200 dark:border-yellow-900/50",
          bg: "bg-yellow-50 dark:bg-yellow-900/20",
          text: "text-yellow-700 dark:text-yellow-400",
        };
      case "info":
      default:
        return {
          border: "border-blue-200 dark:border-blue-900/50",
          bg: "bg-blue-50 dark:bg-blue-900/20",
          text: "text-blue-700 dark:text-blue-400",
        };
    }
  };

  const colors = getColorClasses();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="" size="md">
      <div className="space-y-5">
        {/* Icône */}
        <div className="flex justify-center">{getIcon()}</div>

        {/* Titre */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-navy-700 dark:text-white">{title}</h3>
        </div>

        {/* Contenu */}
        <div
          className={`rounded-lg border ${colors.border} ${colors.bg} p-5`}
        >
          <div className={`text-sm ${colors.text}`}>
            {typeof content === "string" ? (
              <p className="leading-relaxed">{content}</p>
            ) : (
              content
            )}
          </div>
        </div>

        {/* Bouton */}
        <button
          onClick={onClose}
          className="w-full rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-600"
        >
          J'ai compris
        </button>
      </div>
    </Modal>
  );
}
