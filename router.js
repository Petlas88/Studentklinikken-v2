import HomePage from "./pages/Home.page.js";
import PricesPage from "./pages/Prices.page.js";
import BookingPage from "./pages/Booking.page.js";
import TreatmentsPage from "./pages/Treatments.page.js";

const router = new VueRouter({
  routes: [
    {
      path: "/",
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
    }
  ]
});

export default router;
