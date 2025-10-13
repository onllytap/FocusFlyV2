import React, { useState } from "react";
import Modal from "./Modal";
import Switch from "components/switch";
import { useToast } from "components/toast/ToastContext";
import { MdSettings, MdNotifications, MdPalette, MdStorage } from "react-icons/md";

export default function SettingsModal({ isOpen, onClose }) {
  const toast = useToast();
  const [activeTab, setActiveTab] = useState("general");

  const [settings, setSettings] = useState({
    // Général
    language: "fr",
    shortcut: "Ctrl+Shift+V",
    launchOnStartup: false,
    minimizeToTray: true,

    // Notifications
    dailyReminders: false,
    successNotifications: true,
    streakAlerts: true,
    categoryTips: false,
    newsletter: false,

    // Apparence
    theme: "dark",
    primaryColor: "#9600FF",
    textSize: "medium",
  });

  const tabs = [
    { id: "general", label: "Général", icon: <MdSettings className="h-5 w-5" /> },
    { id: "notifications", label: "Notifications", icon: <MdNotifications className="h-5 w-5" /> },
    { id: "appearance", label: "Apparence", icon: <MdPalette className="h-5 w-5" /> },
    { id: "data", label: "Données", icon: <MdStorage className="h-5 w-5" /> },
  ];

  const handleSwitchChange = (key, label) => {
    const newValue = !settings[key];
    setSettings({ ...settings, [key]: newValue });
    if (newValue) {
      toast.success(`${label} activé 🔔`);
    } else {
      toast.info(`${label} désactivé 🔕`);
    }
  };

  const handleSave = () => {
    toast.success("Paramètres enregistrés avec succès ! 🎉");
    onClose();
  };

  const handleExportData = () => {
    toast.info("Export des données en cours... 📦");
    // TODO: Implement export logic
  };

  const handleImportData = () => {
    toast.info("Import des données... 📥");
    // TODO: Implement import logic
  };

  const handleResetData = () => {
    if (
      window.confirm(
        "⚠️ Êtes-vous sûr de vouloir réinitialiser TOUTES les données ? Cette action est irréversible !"
      )
    ) {
      toast.warning("Réinitialisation des données... 🗑️");
      // TODO: Implement reset logic
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Paramètres FocusFly" size="xl">
      <div className="flex gap-6">
        {/* Sidebar avec tabs */}
        <div className="w-48 flex-shrink-0">
          <div className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-brand-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu des tabs */}
        <div className="flex-1">
          {/* TAB 1: GÉNÉRAL */}
          {activeTab === "general" && (
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-navy-700 dark:text-white">
                  Langue
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-700 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-navy-800 dark:text-white"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-navy-700 dark:text-white">
                  Raccourci clavier global
                </label>
                <input
                  type="text"
                  value={settings.shortcut}
                  onChange={(e) => setSettings({ ...settings, shortcut: e.target.value })}
                  placeholder="Ctrl+Shift+V"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-700 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-navy-800 dark:text-white"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Utilisé pour ouvrir rapidement FocusFly
                </p>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-navy-800">
                <div>
                  <p className="text-sm font-semibold text-navy-700 dark:text-white">
                    Lancer au démarrage
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Démarre FocusFly automatiquement avec Windows
                  </p>
                </div>
                <Switch
                  id="launchOnStartup"
                  checked={settings.launchOnStartup}
                  onChange={() =>
                    handleSwitchChange("launchOnStartup", "Lancement automatique")
                  }
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-navy-800">
                <div>
                  <p className="text-sm font-semibold text-navy-700 dark:text-white">
                    Minimiser dans la barre système
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    FocusFly reste accessible via l'icône système
                  </p>
                </div>
                <Switch
                  id="minimizeToTray"
                  checked={settings.minimizeToTray}
                  onChange={() => handleSwitchChange("minimizeToTray", "Minimiser dans la barre")}
                />
              </div>
            </div>
          )}

          {/* TAB 2: NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-navy-800">
                <div>
                  <p className="text-sm font-semibold text-navy-700 dark:text-white">
                    Rappels quotidiens
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Recevoir des rappels pour compléter vos habitudes
                  </p>
                </div>
                <Switch
                  id="dailyReminders"
                  checked={settings.dailyReminders}
                  onChange={() => handleSwitchChange("dailyReminders", "Rappels quotidiens")}
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-navy-800">
                <div>
                  <p className="text-sm font-semibold text-navy-700 dark:text-white">
                    Notifications de succès
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Célébrer vos accomplissements et streaks
                  </p>
                </div>
                <Switch
                  id="successNotifications"
                  checked={settings.successNotifications}
                  onChange={() =>
                    handleSwitchChange("successNotifications", "Notifications de succès")
                  }
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-navy-800">
                <div>
                  <p className="text-sm font-semibold text-navy-700 dark:text-white">
                    Alertes de streak en danger
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Prévenir quand un streak risque d'être rompu
                  </p>
                </div>
                <Switch
                  id="streakAlerts"
                  checked={settings.streakAlerts}
                  onChange={() => handleSwitchChange("streakAlerts", "Alertes de streak")}
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-navy-800">
                <div>
                  <p className="text-sm font-semibold text-navy-700 dark:text-white">
                    Suggestions de catégories
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Recevoir des suggestions d'habitudes personnalisées
                  </p>
                </div>
                <Switch
                  id="categoryTips"
                  checked={settings.categoryTips}
                  onChange={() => handleSwitchChange("categoryTips", "Suggestions de catégories")}
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-navy-800">
                <div>
                  <p className="text-sm font-semibold text-navy-700 dark:text-white">
                    Newsletter FocusFly
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Actualités, conseils et nouveautés
                  </p>
                </div>
                <Switch
                  id="newsletter"
                  checked={settings.newsletter}
                  onChange={() => handleSwitchChange("newsletter", "Newsletter")}
                />
              </div>
            </div>
          )}

          {/* TAB 3: APPARENCE */}
          {activeTab === "appearance" && (
            <div className="space-y-5">
              <div>
                <label className="mb-3 block text-sm font-bold text-navy-700 dark:text-white">
                  Thème
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "light", label: "Clair", emoji: "☀️" },
                    { value: "dark", label: "Sombre", emoji: "🌙" },
                    { value: "auto", label: "Automatique", emoji: "🔄" },
                  ].map((theme) => (
                    <button
                      key={theme.value}
                      onClick={() => setSettings({ ...settings, theme: theme.value })}
                      className={`flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all ${
                        settings.theme === theme.value
                          ? "border-brand-500 bg-brand-50 dark:border-brand-400 dark:bg-brand-900/20"
                          : "border-gray-200 bg-white hover:border-gray-300 dark:border-white/10 dark:bg-navy-800"
                      }`}
                    >
                      <span className="text-2xl">{theme.emoji}</span>
                      <span className="text-sm font-semibold text-navy-700 dark:text-white">
                        {theme.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-navy-700 dark:text-white">
                  Couleur principale
                </label>
                <div className="flex gap-3">
                  {["#9600FF", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSettings({ ...settings, primaryColor: color })}
                      className={`h-12 w-12 rounded-lg transition-all ${
                        settings.primaryColor === color
                          ? "ring-4 ring-offset-2 ring-offset-white dark:ring-offset-navy-900"
                          : "hover:scale-110"
                      }`}
                      style={{ backgroundColor: color, ringColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-navy-700 dark:text-white">
                  Taille du texte
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "small", label: "Petit" },
                    { value: "medium", label: "Moyen" },
                    { value: "large", label: "Grand" },
                  ].map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setSettings({ ...settings, textSize: size.value })}
                      className={`rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-all ${
                        settings.textSize === size.value
                          ? "border-brand-500 bg-brand-50 text-brand-600 dark:border-brand-400 dark:bg-brand-900/20 dark:text-brand-400"
                          : "border-gray-200 bg-white text-navy-700 hover:border-gray-300 dark:border-white/10 dark:bg-navy-800 dark:text-white"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DONNÉES */}
          {activeTab === "data" && (
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-navy-800">
                <h4 className="mb-2 text-sm font-bold text-navy-700 dark:text-white">
                  Exporter les données
                </h4>
                <p className="mb-4 text-xs text-gray-500">
                  Téléchargez toutes vos habitudes et statistiques au format CSV
                </p>
                <button
                  onClick={handleExportData}
                  className="w-full rounded-lg border-2 border-brand-500 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-600 transition-all hover:bg-brand-100 dark:border-brand-400 dark:bg-brand-900/20 dark:text-brand-400 dark:hover:bg-brand-900/30"
                >
                  📦 Exporter en CSV
                </button>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-navy-800">
                <h4 className="mb-2 text-sm font-bold text-navy-700 dark:text-white">
                  Importer les données
                </h4>
                <p className="mb-4 text-xs text-gray-500">
                  Restaurez vos données depuis un fichier de sauvegarde
                </p>
                <button
                  onClick={handleImportData}
                  className="w-full rounded-lg border-2 border-blue-500 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-100 dark:border-blue-400 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
                >
                  📥 Importer un fichier
                </button>
              </div>

              <div className="rounded-lg border-2 border-red-200 bg-red-50 p-5 dark:border-red-900/50 dark:bg-red-900/20">
                <h4 className="mb-2 text-sm font-bold text-red-700 dark:text-red-400">
                  ⚠️ Zone dangereuse
                </h4>
                <p className="mb-4 text-xs text-red-600 dark:text-red-400">
                  Cette action supprimera TOUTES vos données de manière irréversible
                </p>
                <button
                  onClick={handleResetData}
                  className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-red-700"
                >
                  🗑️ Réinitialiser toutes les données
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer avec boutons */}
      <div className="mt-6 flex gap-3 border-t border-gray-200 pt-6 dark:border-white/10">
        <button
          onClick={onClose}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
        >
          Annuler
        </button>
        <button
          onClick={handleSave}
          className="flex-1 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-600"
        >
          Enregistrer les paramètres
        </button>
      </div>
    </Modal>
  );
}
