import Card from "components/card";
import BarChart from "components/charts/BarChart";
import { MdCategory } from "react-icons/md";

const CategoryBreakdown = () => {
  // Données de breakdown par catégorie
  const categoryData = [
    { name: "Travail", hours: 18.5, percentage: 45, color: "bg-green-500", apps: ["VSCode", "Notion", "Figma"] },
    { name: "Social", hours: 8.2, percentage: 20, color: "bg-blue-500", apps: ["Discord", "WhatsApp", "Teams"] },
    { name: "Jeux", hours: 4.1, percentage: 10, color: "bg-purple-500", apps: ["Steam", "Epic Games"] },
    { name: "Productivité", hours: 6.15, percentage: 15, color: "bg-orange-500", apps: ["Trello", "Asana", "Todoist"] },
    { name: "Divertissement", hours: 4.1, percentage: 10, color: "bg-pink-500", apps: ["YouTube", "Netflix", "Spotify"] },
  ];

  // Configuration du graphique bar
  const barChartData = [
    {
      name: "Heures d'utilisation",
      data: categoryData.map(cat => cat.hours),
    },
  ];

  const barChartOptions = {
    chart: {
      toolbar: { show: false },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: { show: false },
    },
    xaxis: {
      categories: categoryData.map(cat => cat.name),
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
    },
    grid: {
      borderColor: "rgba(163, 174, 208, 0.3)",
      strokeDashArray: 5,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          { offset: 0, color: "#4318FF", opacity: 1 },
          { offset: 100, color: "#39B8FF", opacity: 0.28 },
        ],
      },
    },
    dataLabels: { enabled: false },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "40px",
      },
    },
  };

  return (
    <Card extra="w-full h-full p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 dark:bg-white/5">
            <MdCategory className="h-6 w-6 text-brand-500 dark:text-white" />
          </div>
          <div className="ml-4">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              Breakdown par Catégorie
            </h4>
            <p className="text-sm text-gray-600">Cette semaine • 41h totales</p>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="mt-6 h-[300px]">
        <BarChart chartData={barChartData} chartOptions={barChartOptions} />
      </div>

      {/* Categories List with Progress Bars */}
      <div className="mt-6 space-y-4">
        {categoryData.map((category, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${category.color}`} />
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {category.name}
                </p>
                <p className="text-xs text-gray-500">
                  ({category.apps.join(", ")})
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-sm font-semibold text-navy-700 dark:text-white">
                  {category.hours}h
                </p>
                <p className="text-sm text-gray-600">
                  {category.percentage}%
                </p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-white/5">
              <div
                className={`h-2 rounded-full ${category.color} transition-all duration-500`}
                style={{ width: `${category.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 rounded-lg bg-gray-50 p-4 dark:bg-white/5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-600">
            Catégorie la plus utilisée
          </p>
          <p className="text-base font-bold text-green-500">
            Travail (45%)
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CategoryBreakdown;
