import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import { MdComputer, MdHistory } from "react-icons/md";
import {
  SiVisualstudiocode,
  SiDiscord,
  SiGooglechrome,
  SiSpotify,
  SiNotion,
  SiFigma,
  SiSlack,
  SiYoutube,
} from "react-icons/si";

const DetailedAppsHistory = () => {
  const appsHistory = [
    {
      name: "VSCode",
      icon: <SiVisualstudiocode className="h-6 w-6" />,
      category: "Travail",
      color: "text-blue-500",
      todayTime: "2h 45min",
      weekTime: "18h 30min",
      trend: "+12%",
      trendPositive: true,
      sessions: 23,
      avgSession: "48min",
      history: [2.5, 3.2, 2.8, 3.5, 2.9, 2.4, 2.75], // Last 7 days
    },
    {
      name: "Discord",
      icon: <SiDiscord className="h-6 w-6" />,
      category: "Social",
      color: "text-indigo-500",
      todayTime: "1h 32min",
      weekTime: "12h 15min",
      trend: "-8%",
      trendPositive: false,
      sessions: 18,
      avgSession: "41min",
      history: [1.8, 2.1, 1.5, 1.9, 1.6, 1.4, 1.53],
    },
    {
      name: "Chrome",
      icon: <SiGooglechrome className="h-6 w-6" />,
      category: "Navigation",
      color: "text-yellow-500",
      todayTime: "1h 15min",
      weekTime: "9h 45min",
      trend: "+5%",
      trendPositive: true,
      sessions: 32,
      avgSession: "18min",
      history: [1.2, 1.5, 1.3, 1.6, 1.4, 1.1, 1.25],
    },
    {
      name: "Spotify",
      icon: <SiSpotify className="h-6 w-6" />,
      category: "Musique",
      color: "text-green-500",
      todayTime: "45min",
      weekTime: "6h 20min",
      trend: "+15%",
      trendPositive: true,
      sessions: 14,
      avgSession: "27min",
      history: [0.7, 0.9, 0.8, 1.1, 0.9, 0.7, 0.75],
    },
    {
      name: "Notion",
      icon: <SiNotion className="h-6 w-6" />,
      category: "Productivité",
      color: "text-gray-700 dark:text-gray-300",
      todayTime: "38min",
      weekTime: "5h 15min",
      trend: "+22%",
      trendPositive: true,
      sessions: 11,
      avgSession: "29min",
      history: [0.5, 0.7, 0.6, 0.8, 0.7, 0.6, 0.63],
    },
    {
      name: "Figma",
      icon: <SiFigma className="h-6 w-6" />,
      category: "Design",
      color: "text-purple-500",
      todayTime: "1h 20min",
      weekTime: "8h 40min",
      trend: "+18%",
      trendPositive: true,
      sessions: 9,
      avgSession: "58min",
      history: [1.1, 1.3, 1.2, 1.5, 1.3, 1.1, 1.33],
    },
    {
      name: "Slack",
      icon: <SiSlack className="h-6 w-6" />,
      category: "Communication",
      color: "text-pink-500",
      todayTime: "52min",
      weekTime: "7h 10min",
      trend: "+3%",
      trendPositive: true,
      sessions: 26,
      avgSession: "17min",
      history: [0.8, 1.0, 0.9, 1.1, 1.0, 0.8, 0.87],
    },
    {
      name: "YouTube",
      icon: <SiYoutube className="h-6 w-6" />,
      category: "Divertissement",
      color: "text-red-500",
      todayTime: "1h 05min",
      weekTime: "8h 30min",
      trend: "-15%",
      trendPositive: false,
      sessions: 15,
      avgSession: "34min",
      history: [1.3, 1.5, 1.2, 1.4, 1.1, 0.9, 1.08],
    },
  ];

  // Mini sparkline component
  const Sparkline = ({ data, color }) => {
    const max = Math.max(...data);
    const points = data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * 60;
        const y = 20 - (value / max) * 18;
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <svg width="60" height="20" className="opacity-70">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points={points}
          className={color}
        />
      </svg>
    );
  };

  return (
    <Card extra="w-full h-full p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 dark:bg-white/5">
            <MdComputer className="h-6 w-6 text-brand-500 dark:text-white" />
          </div>
          <div className="ml-4">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              Top Apps - Historique Détaillé
            </h4>
            <p className="text-sm text-gray-600">8 applications les plus utilisées</p>
          </div>
        </div>
        <CardMenu />
      </div>

      {/* Apps Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200 dark:border-white/10">
              <th className="pb-3 text-left text-xs font-bold uppercase text-gray-600">
                Application
              </th>
              <th className="pb-3 text-center text-xs font-bold uppercase text-gray-600">
                Aujourd'hui
              </th>
              <th className="pb-3 text-center text-xs font-bold uppercase text-gray-600">
                Cette Semaine
              </th>
              <th className="pb-3 text-center text-xs font-bold uppercase text-gray-600">
                Sessions
              </th>
              <th className="pb-3 text-center text-xs font-bold uppercase text-gray-600">
                Moy. Session
              </th>
              <th className="pb-3 text-center text-xs font-bold uppercase text-gray-600">
                Tendance
              </th>
              <th className="pb-3 text-center text-xs font-bold uppercase text-gray-600">
                Historique
              </th>
            </tr>
          </thead>
          <tbody>
            {appsHistory.map((app, index) => (
              <tr
                key={index}
                className="group border-b border-gray-100 transition-all hover:bg-gray-50 dark:border-white/5 dark:hover:bg-white/5"
              >
                {/* App Name & Icon */}
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-lg bg-white p-2 shadow-sm transition-all group-hover:scale-110 dark:bg-navy-900 ${app.color}`}
                    >
                      {app.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {app.name}
                      </p>
                      <p className="text-xs text-gray-500">{app.category}</p>
                    </div>
                  </div>
                </td>

                {/* Today Time */}
                <td className="py-4 text-center">
                  <p className="text-sm font-semibold text-navy-700 dark:text-white">
                    {app.todayTime}
                  </p>
                </td>

                {/* Week Time */}
                <td className="py-4 text-center">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    {app.weekTime}
                  </p>
                </td>

                {/* Sessions */}
                <td className="py-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <MdHistory className="h-4 w-4 text-gray-400" />
                    <p className="text-sm font-medium text-gray-600">
                      {app.sessions}
                    </p>
                  </div>
                </td>

                {/* Avg Session */}
                <td className="py-4 text-center">
                  <p className="text-sm font-medium text-gray-600">
                    {app.avgSession}
                  </p>
                </td>

                {/* Trend */}
                <td className="py-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold ${
                      app.trendPositive
                        ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {app.trendPositive ? "↑" : "↓"} {app.trend}
                  </span>
                </td>

                {/* Sparkline */}
                <td className="py-4 text-center">
                  <div className="flex justify-center">
                    <Sparkline data={app.history} color={app.color} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4 dark:from-blue-900/20 dark:to-blue-800/20">
          <p className="text-sm font-medium text-gray-600">Total Apps Actives</p>
          <p className="mt-2 text-2xl font-bold text-navy-700 dark:text-white">
            8 apps
          </p>
          <p className="mt-1 text-xs text-gray-500">Cette semaine</p>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-4 dark:from-green-900/20 dark:to-green-800/20">
          <p className="text-sm font-medium text-gray-600">Sessions Totales</p>
          <p className="mt-2 text-2xl font-bold text-navy-700 dark:text-white">
            148 sessions
          </p>
          <p className="mt-1 text-xs text-gray-500">Moyenne: 21 par jour</p>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 p-4 dark:from-purple-900/20 dark:to-purple-800/20">
          <p className="text-sm font-medium text-gray-600">App la Plus Utilisée</p>
          <p className="mt-2 text-2xl font-bold text-navy-700 dark:text-white">
            VSCode
          </p>
          <p className="mt-1 text-xs text-gray-500">18h 30min cette semaine</p>
        </div>
      </div>
    </Card>
  );
};

export default DetailedAppsHistory;
