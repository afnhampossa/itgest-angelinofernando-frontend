import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Stock from "@/pages/Stock.vue";
import Sales from "@/pages/Sales.vue";
import Reports from "@/pages/Reports.vue";
import Notifications from "@/pages/Notifications.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "SISTEMA DE GESTÃO DE VENDAS",
        component: Dashboard
      },
      {
        path: "user",
        name: "MINHA CONTA",
        component: UserProfile
      },
      {
        path: "estoque",
        name: "GESTÃO DE ESTOQUE",
        component: Stock
      },
      {
        path: "vendas",
        name: "VENDAS",
        component: Sales
      },
      {
        path: "relatorios",
        name: "RELATÓRIOS",
        component: Reports
      },
      {
        path: "notifications",
        name: "NOTIFICAÇÕES",
        component: Notifications
      },
      {
        path: "sair",
        name: "Encerrar",
        component: Dashboard
      }
    ]
  }
];

export default routes;
