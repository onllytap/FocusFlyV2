import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdTime } from "react-icons/io";
import { IoTrophy } from "react-icons/io5";
import { MdBarChart, MdComputer, MdTrendingUp } from "react-icons/md";
import { FaFire } from "react-icons/fa";

import Widget from "components/widget/Widget";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import TopApps from "views/admin/default/components/TopApps";
import DistractionAlerts from "views/admin/default/components/DistractionAlerts";

const Dashboard = () => {
  return (
    <div>
      {/* Stats FocusFly - Vue cerveau TDAH */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<IoMdTime className="h-7 w-7" />}
          title={"Temps PC aujourd'hui"}
          subtitle={"5h 24min"}
        />
        <Widget
          icon={<MdTrendingUp className="h-6 w-6" />}
          title={"Temps productif"}
          subtitle={"3h 12min"}
        />
        <Widget
          icon={<IoTrophy className="h-7 w-7" />}
          title={"Niveau actuel"}
          subtitle={"Niveau 8"}
        />
        <Widget
          icon={<FaFire className="h-6 w-6" />}
          title={"Streak actuel"}
          subtitle={"15 jours 🔥"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"XP gagné"}
          subtitle={"420 XP"}
        />
        <Widget
          icon={<MdComputer className="h-6 w-6" />}
          title={"Habitudes complétées"}
          subtitle={"7/10"}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* FocusFly Main Content */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Top 5 Applications utilisées */}
        <TopApps />

        {/* Temps d'utilisation PC + PieChart */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Coach Focus - Alertes distractions */}
        <DistractionAlerts />

        {/* Habitudes du jour + Calendrier */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
