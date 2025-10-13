import Card from "components/card";
import LineChart from "components/charts/LineChart";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";

const WeeklyComparison = () => {
  // Données de comparaison des 4 dernières semaines
  const weeks = ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4"];

  const weeklyStats = [
    { label: "Total heures", data: [38, 42, 35, 41], unit: "h", color: "#4318FF" },
    { label: "Temps productif", data: [22, 28, 20, 27], unit: "h", color: "#39B8FF" },
    { label: "Distractions", data: [16, 14, 15, 14], unit: "h", color: "#FF6B6B" },
  ];

  // Configuration du line chart
  const lineChartData = weeklyStats.map((stat) => ({
    name: stat.label,
    data: stat.data,
    color: stat.color,
  }));

  const lineChartOptions = {
    chart: {
      toolbar: { show: false },
      dropShadow: {
        enabled: true,
        top: 13,
        left: 0,
        blur: 10,
        opacity: 0.1,
        color: "#4318FF",
      },
    },
    colors: weeklyStats.map(stat => stat.color),
    markers: {
      size: 5,
      strokeColors: "#fff",
      strokeWidth: 3,
      hover: { size: 7 },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      y: {
        formatter: (val) => `${val}h`,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: weeks,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
        formatter: (val) => `${val}h`,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      labels: {
        colors: "#A3AED0",
      },
    },
    grid: {
      borderColor: "rgba(163, 174, 208, 0.3)",
      strokeDashArray: 5,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
    },
  };

  // Calcul des tendances
  const getTrend = (data) => {
    const lastWeek = data[data.length - 1];
    const previousWeek = data[data.length - 2];
    const change = lastWeek - previousWeek;
    const percentage = ((change / previousWeek) * 100).toFixed(1);
    return { change, percentage, isPositive: change > 0 };
  };

  return (
    <Card extra="w-full h-full p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            Comparaison des Dernières Semaines
          </h4>
          <p className="mt-1 text-sm text-gray-600">Évolution sur 4 semaines</p>
        </div>
      </div>

      {/* Line Chart */}
      <div className="mt-6 h-[280px]">
        <LineChart chartData={lineChartData} chartOptions={lineChartOptions} />
      </div>

      {/* Weekly Stats Cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {weeklyStats.map((stat, index) => {
          const trend = getTrend(stat.data);
          const currentValue = stat.data[stat.data.length - 1];

          return (
            <div
              key={index}
              className="rounded-lg bg-gray-50 p-4 transition-all hover:shadow-md dark:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <div
                  className={`flex items-center gap-1 text-xs font-semibold ${
                    trend.isPositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {trend.isPositive ? (
                    <MdTrendingUp className="h-4 w-4" />
                  ) : (
                    <MdTrendingDown className="h-4 w-4" />
                  )}
                  {Math.abs(trend.percentage)}%
                </div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <p className="text-2xl font-bold text-navy-700 dark:text-white">
                  {currentValue}
                  <span className="text-sm font-normal">{stat.unit}</span>
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {trend.isPositive ? "+" : ""}
                {trend.change}h vs semaine précédente
              </p>
            </div>
          );
        })}
      </div>

      {/* Detailed Table */}
      <div className="mt-6">
        <h5 className="mb-3 text-lg font-bold text-navy-700 dark:text-white">
          Détails par Semaine
        </h5>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10">
                <th className="pb-3 text-left text-xs font-bold text-gray-600">
                  Période
                </th>
                {weeklyStats.map((stat, index) => (
                  <th
                    key={index}
                    className="pb-3 text-right text-xs font-bold text-gray-600"
                  >
                    {stat.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, weekIndex) => (
                <tr
                  key={weekIndex}
                  className="border-b border-gray-100 transition-colors hover:bg-gray-50 dark:border-white/5 dark:hover:bg-white/5"
                >
                  <td className="py-3 text-sm font-medium text-navy-700 dark:text-white">
                    {week}
                  </td>
                  {weeklyStats.map((stat, statIndex) => (
                    <td
                      key={statIndex}
                      className="py-3 text-right text-sm font-semibold text-navy-700 dark:text-white"
                    >
                      {stat.data[weekIndex]}
                      <span className="text-xs text-gray-500">{stat.unit}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-white p-2 dark:bg-navy-800">
            <MdTrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              Excellente progression ! 📈
            </p>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              Votre temps productif a augmenté de 35% depuis la semaine 1. Continuez comme ça !
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeeklyComparison;
