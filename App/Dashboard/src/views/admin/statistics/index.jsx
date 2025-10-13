import CategoryBreakdown from "./components/CategoryBreakdown";
import ProductivityHeatmap from "./components/ProductivityHeatmap";
import WeeklyComparison from "./components/WeeklyComparison";
import DetailedAppsHistory from "./components/DetailedAppsHistory";
import { MdBarChart } from "react-icons/md";
import Widget from "components/widget/Widget";

const AdvancedStatistics = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600">
            <MdBarChart className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-navy-700 dark:text-white">
              Analyse Approfondie
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Vue détaillée de votre productivité et utilisation
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats Overview */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Widget
          icon={<MdBarChart className="h-6 w-6" />}
          title={"Total Semaine"}
          subtitle={"41h 05min"}
        />
        <Widget
          icon={<MdBarChart className="h-6 w-6" />}
          title={"Productivité Moyenne"}
          subtitle={"65.8%"}
        />
        <Widget
          icon={<MdBarChart className="h-6 w-6" />}
          title={"Apps Utilisées"}
          subtitle={"24 apps"}
        />
        <Widget
          icon={<MdBarChart className="h-6 w-6" />}
          title={"Meilleur Jour"}
          subtitle={"Jeudi"}
        />
      </div>

      {/* Section 1: Category Breakdown (Full Width) */}
      <div className="mt-5">
        <CategoryBreakdown />
      </div>

      {/* Section 2: Heatmap + Weekly Comparison (Side by Side) */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <ProductivityHeatmap />
        <WeeklyComparison />
      </div>

      {/* Section 3: Detailed Apps History (Full Width) */}
      <div className="mt-5">
        <DetailedAppsHistory />
      </div>

      {/* Coach Insights Section */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Insight 1 */}
        <div className="rounded-[20px] bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-white/20 p-3">
              <MdBarChart className="h-6 w-6" />
            </div>
            <div>
              <h5 className="text-lg font-bold">🎯 Objectif de la Semaine</h5>
              <p className="mt-2 text-sm opacity-90">
                Excellente semaine ! Vous avez dépassé votre objectif de temps productif de 15%.
                Continuez à utiliser VSCode entre 14h-16h, c'est votre créneau le plus efficace.
              </p>
            </div>
          </div>
        </div>

        {/* Insight 2 */}
        <div className="rounded-[20px] bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-white/20 p-3">
              <MdBarChart className="h-6 w-6" />
            </div>
            <div>
              <h5 className="text-lg font-bold">💡 Conseil de Focus</h5>
              <p className="mt-2 text-sm opacity-90">
                Vos distractions ont baissé de 15% cette semaine ! Pour aller encore plus loin,
                essayez de bloquer YouTube pendant vos sessions de travail de 14h à 18h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStatistics;
