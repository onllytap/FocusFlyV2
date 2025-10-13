import { IoTrophy } from "react-icons/io5";
import { FaFire, FaStar } from "react-icons/fa";
import Card from "components/card";
import React from "react";

const LevelProgress = () => {
  const currentLevel = 8;
  const currentXP = 420;
  const nextLevelXP = 500;
  const xpProgress = (currentXP / nextLevelXP) * 100;

  return (
    <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      {/* Left Section - Level Display */}
      <div className="col-span-5 h-full w-full rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 dark:from-brand-400 dark:to-brand-500 2xl:col-span-6">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-xl py-6">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <IoTrophy className="text-[50px] text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 shadow-lg">
              <span className="text-lg font-bold text-navy-900">{currentLevel}</span>
            </div>
          </div>
          <h4 className="mt-4 text-2xl font-bold text-white">
            Niveau {currentLevel}
          </h4>
          <p className="mt-2 text-sm font-medium text-white/80">
            {currentXP} / {nextLevelXP} XP
          </p>
          
          {/* XP Progress Bar */}
          <div className="mt-4 w-full px-6">
            <div className="h-2 w-full rounded-full bg-white/20">
              <div
                className="h-2 rounded-full bg-white transition-all duration-500"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
          </div>
          
          <p className="mt-2 text-xs text-white/70">
            Plus que {nextLevelXP - currentXP} XP pour le niveau suivant
          </p>
        </div>
      </div>

      {/* Right Section - Quick Stats */}
      <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
        <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
          Vos Performances
        </h5>
        <p className="leading-1 mt-2 text-sm font-normal text-gray-600">
          Statistiques de cette semaine
        </p>

        {/* Stats Grid */}
        <div className="mt-4 space-y-3">
          {/* Streak */}
          <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
                <FaFire className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Streak actuel</p>
                <p className="text-lg font-bold text-navy-700 dark:text-white">15 jours</p>
              </div>
            </div>
          </div>

          {/* Habitudes complétées */}
          <div className="flex items-center justify-between rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                <FaStar className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Habitudes</p>
                <p className="text-lg font-bold text-navy-700 dark:text-white">127 complétées</p>
              </div>
            </div>
          </div>

          {/* XP gagné */}
          <div className="flex items-center justify-between rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500">
                <IoTrophy className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">XP cette semaine</p>
                <p className="text-lg font-bold text-navy-700 dark:text-white">+180 XP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LevelProgress;
