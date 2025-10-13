import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import { MdComputer } from "react-icons/md";
import { SiVisualstudiocode, SiDiscord, SiGooglechrome, SiSpotify, SiNotion } from "react-icons/si";

const TopApps = () => {
  const apps = [
    { name: "VSCode", time: "2h 45min", icon: <SiVisualstudiocode className="h-6 w-6" />, category: "Travail", color: "text-blue-500" },
    { name: "Discord", time: "1h 32min", icon: <SiDiscord className="h-6 w-6" />, category: "Social", color: "text-indigo-500" },
    { name: "Chrome", time: "1h 15min", icon: <SiGooglechrome className="h-6 w-6" />, category: "Navigation", color: "text-yellow-500" },
    { name: "Spotify", time: "45min", icon: <SiSpotify className="h-6 w-6" />, category: "Musique", color: "text-green-500" },
    { name: "Notion", time: "38min", icon: <SiNotion className="h-6 w-6" />, category: "Productivité", color: "text-gray-700 dark:text-gray-300" },
  ];

  return (
    <Card extra={"w-full h-full p-[20px]"}>
      {/* Header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10 dark:bg-white/5">
            <MdComputer className="h-6 w-6 text-brand-500 dark:text-white" />
          </div>
          <h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">
            Top 5 Applications
          </h4>
        </div>
        <CardMenu />
      </div>

      {/* Apps List */}
      <div className="mt-5 h-full w-full">
        {apps.map((app, index) => (
          <div
            key={index}
            className="mt-3 flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className={`${app.color}`}>
                {app.icon}
              </div>
              <div>
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  {app.name}
                </p>
                <p className="text-sm text-gray-600">
                  {app.category}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-navy-700 dark:text-white">
                {app.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-600">
            Total des 5 apps
          </p>
          <p className="text-base font-bold text-navy-700 dark:text-white">
            6h 55min
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TopApps;
