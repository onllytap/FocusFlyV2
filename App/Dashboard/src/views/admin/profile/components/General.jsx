import Card from "components/card";
import React from "react";

const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Informations Générales
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
          FocusFly vous aide à capturer rapidement vos pensées grâce à la commande vocale.
          Parfait pour les personnes atteintes de TDAH, notre application vous permet de
          transformer vos idées en notes organisées sans effort.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Type de compte</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Gratuit
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Langue</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Français
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Habitudes créées</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            127 habitudes
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Streak actuel</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            15 jours
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Raccourci vocal</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Ctrl+Shift+V
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Membre depuis</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            12 Janvier 2025
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
