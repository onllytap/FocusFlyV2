import CardMenu from "components/card/CardMenu";
import React from "react";
import Checkbox from "components/checkbox";
import { MdDragIndicator, MdCheckCircle } from "react-icons/md";
import Card from "components/card";

const TaskCard = () => {
  return (
    <Card extra="pb-7 p-[20px]">
      {/* task header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
            <MdCheckCircle className="h-6 w-6 text-brand-500 dark:text-white" />
          </div>
          <h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">
            Habitudes du jour
          </h4>
        </div>
        <CardMenu />
      </div>

      {/* task content */}

      <div className="h-full w-full">
        <div className="mt-5 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Boire un verre d'eau 💧
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-green-500">+10 XP</span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Session focus 25min ⏱️
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-green-500">+30 XP</span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Fermer Discord à 22h 🔕
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-green-500">+20 XP</span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Lire 10 pages 📖
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-green-500">+15 XP</span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Coucher avant minuit 🌙
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-green-500">+25 XP</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
