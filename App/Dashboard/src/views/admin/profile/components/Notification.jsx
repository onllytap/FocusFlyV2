import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import Switch from "components/switch";
import React from "react";

function Notification() {
  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="relative mb-3 flex items-center justify-between pt-1">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Notifications
        </h4>
        <CardMenu />
      </div>
      <div className="flex flex-col">
        {/* Notifications FocusFly */}
        <div className="mt-3 flex items-center gap-3">
          <Switch id="switch1" />
          <label
            for="checkbox1"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Rappels de capture quotidiens
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch2" />
          <label
            for="checkbox2"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Notifications de réussites
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch3" />
          <label
            for="checkbox3"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Alertes de streak en danger
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch4" />
          <label
            for="checkbox4"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Suggestions de catégories
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch5" />
          <label
            for="checkbox5"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Nouveautés FocusFly
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch6" />
          <label
            for="checkbox6"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Conseils TDAH personnalisés
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch7" />
          <label
            for="checkbox7"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Résumé hebdomadaire d'activité
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            for="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Newsletter FocusFly
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch9" />
          <label
            for="checkbox9"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Offres Premium exclusives
          </label>
        </div>
      </div>
    </Card>
  );
}

export default Notification;
