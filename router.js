import LogInPage from "./pages/LogIn.page.js";
import HomePage from "./pages/Home.page.js";
import PricesPage from "./pages/Prices.page.js";
import BookingPage from "./pages/Booking.page.js";
import TreatmentsPage from "./pages/Treatments.page.js";
import RightsPage from "./pages/Rights.page.js";
import ContactPage from "./pages/Contact.page.js";
import EmployeesPage from "./pages/Employees.page.js";

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
  }
});

export default router;
