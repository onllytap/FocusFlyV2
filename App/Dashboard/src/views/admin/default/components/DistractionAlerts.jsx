import Card from "components/card";
import { MdWarning, MdTipsAndUpdates } from "react-icons/md";

const DistractionAlerts = () => {
  const alerts = [
    {
      type: "warning",
      icon: <MdWarning className="h-5 w-5" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      message: "Tu as ouvert Discord 14 fois aujourd'hui 😅",
      suggestion: "Essaie le mode Focus pour limiter les distractions"
    },
    {
      type: "tip",
      icon: <MdTipsAndUpdates className="h-5 w-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      message: "Tu es plus productif entre 14h et 16h",
      suggestion: "Planifie tes tâches importantes dans cette tranche"
    },
    {
      type: "warning",
      icon: <MdWarning className="h-5 w-5" />,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      message: "YouTube: 1h30 non-stop 🎥",
      suggestion: "Prends une pause ou active le minuteur"
    },
  ];

  return (
    <Card extra={"w-full h-full p-[20px]"}>
      {/* Header */}
      <div className="flex items-center mb-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10">
          <MdTipsAndUpdates className="h-6 w-6 text-brand-500" />
        </div>
        <h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">
          Coach Focus
        </h4>
      </div>

      {/* Alerts */}
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 dark:border-white/10 p-4 hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-3">
              <div className={`mt-1 rounded-lg ${alert.bgColor} p-2 ${alert.color}`}>
                {alert.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-navy-700 dark:text-white mb-1">
                  {alert.message}
                </p>
                <p className="text-xs text-gray-600">
                  💡 {alert.suggestion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-gray-200 dark:border-white/10">
        <p className="text-xs text-gray-600 text-center">
          Le coach analyse tes habitudes pour t'aider à progresser 🚀
        </p>
      </div>
    </Card>
  );
};

export default DistractionAlerts;
