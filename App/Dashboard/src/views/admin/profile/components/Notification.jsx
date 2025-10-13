import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import Switch from "components/switch";
import { useToast } from "components/toast/ToastContext";
import React, { useState } from "react";

function Notification() {
  const toast = useToast();
  const [switches, setSwitches] = useState({
    switch1: false,
    switch2: false,
    switch3: false,
    switch4: false,
    switch5: false,
    switch6: false,
    switch7: false,
    switch8: false,
    switch9: false,
  });

  const handleSwitchChange = (switchId, label) => {
    const newValue = !switches[switchId];
    setSwitches({ ...switches, [switchId]: newValue });
    if (newValue) {
      toast.success(`${label} activé 🔔`);
    } else {
      toast.info(`${label} désactivé 🔕`);
    }
  };

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
          <Switch
            id="switch1"
            checked={switches.switch1}
            onChange={() => handleSwitchChange('switch1', 'Rappels de capture quotidiens')}
          />
          <label
            htmlFor="switch1"
            className="text-base font-medium text-navy-700 dark:text-white cursor-pointer"
            onClick={() => handleSwitchChange('switch1', 'Rappels de capture quotidiens')}
          >
            Rappels de capture quotidiens
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch
            id="switch2"
            checked={switches.switch2}
            onChange={() => handleSwitchChange('switch2', 'Notifications de réussites')}
          />
          <label
            htmlFor="switch2"
            className="text-base font-medium text-navy-700 dark:text-white cursor-pointer"
            onClick={() => handleSwitchChange('switch2', 'Notifications de réussites')}
          >
            Notifications de réussites
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch
            id="switch3"
            checked={switches.switch3}
            onChange={() => handleSwitchChange('switch3', 'Alertes de streak en danger')}
          />
          <label
            htmlFor="switch3"
            className="text-base font-medium text-navy-700 dark:text-white cursor-pointer"
            onClick={() => handleSwitchChange('switch3', 'Alertes de streak en danger')}
          >
            Alertes de streak en danger
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch
            id="switch4"
            checked={switches.switch4}
            onChange={() => handleSwitchChange('switch4', 'Suggestions de catégories')}
          />
          <label
            htmlFor="switch4"
            className="text-base font-medium text-navy-700 dark:text-white cursor-pointer"
            onClick={() => handleSwitchChange('switch4', 'Suggestions de catégories')}
          >
            Suggestions de catégories
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch
            id="switch5"
            checked={switches.switch5}
            onChange={() => handleSwitchChange('switch5', 'Nouveautés FocusFly')}
          />
          <label
            htmlFor="switch5"
            className="text-base font-medium text-navy-700 dark:text-white cursor-pointer"
            onClick={() => handleSwitchChange('switch5', 'Nouveautés FocusFly')}
          >
            Nouveautés FocusFly
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch
            id="switch6"
            checked={switches.switch6}
            onChange={() => handleSwitchChange('switch6', 'Conseils TDAH personnalisés')}
          />
          <label
            htmlFor="switch6"
            className="text-base font-medium text-navy-700 dark:text-white cursor-pointer"
            onClick={() => handleSwitchChange('switch6', 'Conseils TDAH personnalisés')}
          >
            Conseils TDAH personnalisés
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch
            id="switch7"
            checked={switches.switch7}
            onChange={() => handleSwitchChange('switch7', "Résumé hebdomadaire d'activité")}
          />
          <label
            htmlFor="switch7"
            className="text-base font-medium text-navy-700 dark:text-white cursor-pointer"
            onClick={() => handleSwitchChange('switch7', "Résumé hebdomadaire d'activité")}
          >
            Résumé hebdomadaire d'activité
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch
            id="switch8"
            checked={switches.switch8}
            onChange={() => handleSwitchChange('switch8', 'Newsletter FocusFly')}
          />
          <label
            htmlFor="switch8"
            className="text-base font-medium text-navy-700 dark:text-white cursor-pointer"
            onClick={() => handleSwitchChange('switch8', 'Newsletter FocusFly')}
          >
            Newsletter FocusFly
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch
            id="switch9"
            checked={switches.switch9}
            onChange={() => handleSwitchChange('switch9', 'Offres Premium exclusives')}
          />
          <label
            htmlFor="switch9"
            className="text-base font-medium text-navy-700 dark:text-white cursor-pointer"
            onClick={() => handleSwitchChange('switch9', 'Offres Premium exclusives')}
          >
            Offres Premium exclusives
          </label>
        </div>
      </div>
    </Card>
  );
}

export default Notification;
