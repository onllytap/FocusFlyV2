import Card from "components/card";
import { MdCalendarToday } from "react-icons/md";

const ProductivityHeatmap = () => {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const hours = ["8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h"];

  // Heatmap data (0-5 scale: 0 = no activity, 5 = very high productivity)
  const heatmapData = [
    [2, 3, 4, 5, 4, 3, 1], // 8h
    [3, 4, 5, 5, 4, 2, 0], // 10h
    [2, 2, 3, 4, 3, 1, 0], // 12h
    [4, 5, 5, 5, 4, 2, 1], // 14h (peak)
    [3, 4, 5, 4, 5, 3, 2], // 16h
    [2, 3, 3, 3, 2, 4, 3], // 18h
    [1, 2, 2, 1, 1, 5, 4], // 20h
    [0, 1, 1, 0, 0, 3, 5], // 22h
  ];

  // Color intensity based on productivity level
  const getColorClass = (value) => {
    if (value === 0) return "bg-gray-100 dark:bg-white/5";
    if (value === 1) return "bg-green-100 dark:bg-green-900/20";
    if (value === 2) return "bg-green-200 dark:bg-green-800/30";
    if (value === 3) return "bg-green-300 dark:bg-green-700/40";
    if (value === 4) return "bg-green-400 dark:bg-green-600/60";
    if (value === 5) return "bg-green-500 dark:bg-green-500/80";
    return "bg-gray-100 dark:bg-white/5";
  };

  const getTooltipText = (value) => {
    if (value === 0) return "Aucune activité";
    if (value === 1) return "Très faible";
    if (value === 2) return "Faible";
    if (value === 3) return "Moyen";
    if (value === 4) return "Élevé";
    if (value === 5) return "Très élevé";
    return "Aucune donnée";
  };

  return (
    <Card extra="w-full h-full p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 dark:bg-white/5">
            <MdCalendarToday className="h-6 w-6 text-brand-500 dark:text-white" />
          </div>
          <div className="ml-4">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              Heatmap des Heures Productives
            </h4>
            <p className="text-sm text-gray-600">Analyse hebdomadaire de productivité</p>
          </div>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[500px]">
          {/* Days header */}
          <div className="mb-2 flex gap-2 pl-12">
            {days.map((day, index) => (
              <div
                key={index}
                className="flex h-8 w-full items-center justify-center text-xs font-bold text-gray-600"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Heatmap rows */}
          {heatmapData.map((row, hourIndex) => (
            <div key={hourIndex} className="mb-2 flex items-center gap-2">
              {/* Hour label */}
              <div className="w-10 text-right text-xs font-medium text-gray-600">
                {hours[hourIndex]}
              </div>

              {/* Heatmap cells */}
              <div className="flex w-full gap-2">
                {row.map((value, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`group relative h-10 w-full cursor-pointer rounded-md transition-all hover:scale-110 hover:shadow-lg ${getColorClass(
                      value
                    )}`}
                    title={`${days[dayIndex]} ${hours[hourIndex]} - ${getTooltipText(value)}`}
                  >
                    {/* Tooltip on hover */}
                    <div className="pointer-events-none absolute -top-12 left-1/2 z-10 hidden -translate-x-1/2 rounded-lg bg-navy-900 px-3 py-2 text-xs text-white shadow-xl group-hover:block dark:bg-white dark:text-navy-900">
                      <p className="whitespace-nowrap font-semibold">
                        {days[dayIndex]} {hours[hourIndex]}
                      </p>
                      <p className="whitespace-nowrap">{getTooltipText(value)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        <p className="text-sm font-medium text-gray-600">Niveau de productivité:</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Faible</span>
          {[0, 1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`h-4 w-4 rounded ${getColorClass(level)}`}
            />
          ))}
          <span className="text-xs text-gray-500">Élevé</span>
        </div>
      </div>

      {/* Insights */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            🔥 Période la plus productive
          </p>
          <p className="text-sm font-bold text-green-600 dark:text-green-400">
            Mer-Jeu 14h-16h
          </p>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            ⏰ Meilleur créneau focus
          </p>
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
            Après-midi (14h-18h)
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProductivityHeatmap;
