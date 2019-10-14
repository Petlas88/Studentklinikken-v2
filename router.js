import HomePage from "./pages/Home.page.js";
import PricesPage from "./pages/Prices.page.js";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/prices",
      component: PricesPage
    }
  ]
});

export default router;
