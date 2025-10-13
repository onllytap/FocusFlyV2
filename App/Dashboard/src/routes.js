import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import AdvancedStatistics from "views/admin/statistics";
import HabitsManagement from "views/admin/habits";
import Profile from "views/admin/profile";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdCheckCircle,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Statistiques Avancées",
    layout: "/admin",
    path: "statistics",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <AdvancedStatistics />,
    secondary: true,
  },
  {
    name: "Gestion des Habitudes",
    layout: "/admin",
    icon: <MdCheckCircle className="h-6 w-6" />,
    path: "habits",
    component: <HabitsManagement />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];
export default routes;
