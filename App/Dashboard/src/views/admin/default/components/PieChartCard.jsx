import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import Card from "components/card";

const PieChartCard = () => {
  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Catégories d'activité
          </h4>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
            <option value="today">Aujourd'hui</option>
            <option value="weekly">Cette semaine</option>
            <option value="monthly">Ce mois</option>
          </select>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        <PieChart options={pieChartOptions} series={pieChartData} />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">Travail</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700  dark:text-white">
            59%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">Distraction</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            28%
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PieChartCard;
