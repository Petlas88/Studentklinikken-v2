import HomePage from "./pages/Home.page.js";
import PricesPage from "./pages/Prices.page.js";
import BookingPage from "./pages/Booking.page.js";

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
    }
  ]
});

export default router;
