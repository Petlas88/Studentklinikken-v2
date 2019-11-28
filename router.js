import LogInPage from "./pages/LogIn.page.js";
import HomePage from "./pages/Home.page.js";
import PricesPage from "./pages/Prices.page.js";
import BookingPage from "./pages/Booking.page.js";
import TreatmentsPage from "./pages/Treatments.page.js";
import RightsPage from "./pages/Rights.page.js";
import ContactPage from "./pages/Contact.page.js";
import EmployeesPage from "./pages/Employees.page.js";
import OrdersPage from "./pages/Orders.page.js";
import CallendarPage from "./pages/Callendar.page.js";
import AkuCalendarPage from "./pages/AkuCalendar.page.js";
import OstCalendarPage from "./pages/OstCalendar.page.js";
import KostCalendarPage from "./pages/KostCalendar.page.js";
import FysCalendarPage from "./pages/FysCalendar.page.js";
import InformationPage from "./pages/Information.page.js";
import app from "./app.js"

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: LogInPage
    },
    {
      path: "/home",
      component: HomePage
    },
    {
      path: "/prices",
      component: PricesPage
    },
    {
      path: "/booking",
      component: BookingPage
    },
    {
      path: "/treatments",
      component: TreatmentsPage
    },
    {
      path: "/rights",
      component: RightsPage
    },
    {
      path: "/contact",
      component: ContactPage
    },
    {
    path: "/employees",
    component: EmployeesPage
    },
    {
      path: "/orders",
      component: OrdersPage
    },
    {
      path: "/callendar",
      component: CallendarPage
    },
    {
      path: "/akucalendar",
      component: AkuCalendarPage
    },
    {
      path: "/ostcalendar",
      component: OstCalendarPage
    },
    {
      path: "/kostcalendar",
      component: KostCalendarPage
    },
    {
      path: "/fyscalendar",
      component: FysCalendarPage
    },
    {
      path: "/information",
      component: InformationPage
    },
  ]
});

export default router;
