import HomePage from "../views/HomePage.vue";
import MenuPage from "../views/MenuPage.vue";
import AboutPage from "../views/AboutPage.vue";
import QuranMetaList from "../views/QuranMetaList.vue";
import QuranPageList from "../views/QuranPageList.vue";
import QuranJuzList from "../views/QuranJuzList.vue";
import QuranManzilList from "../views/QuranManzilList.vue";
import QuranSajdaList from "../views/QuranSajdaList.vue";
import QuranRukukList from "../views/QuranRukukList.vue";
import QuranAyatDetail from "../views/QuranAyatDetail.vue";
import QuranPagesList from "../views/QuranPagesList.vue";
import QuranAyatBacaanku from "../views/QuranAyatBacaanku.vue";
import QuranAyatFavorit from "../views/QuranAyatFavorit.vue";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/menu",
    name: "MenuPage",
    component: MenuPage,
  },
  {
    path: "/surah-page",
    name: "SurahPage",
    component: QuranMetaList,
  },
  {
    path: "/page-page",
    name: "PagePage",
    component: QuranPagesList,
  },
  {
    path: "/quran-page",
    name: "QuranPage",
    component: QuranPageList,
  },
  {
    path: "/juz-page",
    name: "JuzPage",
    component: QuranJuzList,
  },
  {
    path: "/manzil-page",
    name: "ManzilPage",
    component: QuranManzilList,
  },
  {
    path: "/sajda-page",
    name: "SajdaPage",
    component: QuranSajdaList,
  },
  {
    path: "/rukuk-page",
    name: "RukukPage",
    component: QuranRukukList,
  },
  {
    path: "/quran-ayat-detail",
    name: "QuranAyatDetail",
    component: QuranAyatDetail,
  },
  {
    path: "/bacaanku-page",
    name: "BacaankuPage",
    component: QuranAyatBacaanku,
  },
  {
    path: "/favorit-page",
    name: "FavoritPage",
    component: QuranAyatFavorit,
  },
];

export { routes };
