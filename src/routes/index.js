import AspirationForm from "../views/form/AspirationForm";
import Login from "../views/auth/Login";
import Responden from "../views/admin/dashboard/Responden";
import AddCategory from "../views/admin/dashboard/AddCategory";
import AddLecturer from "../views/admin/dashboard/AddLecturer";
import DetailResponden from "../views/admin/dashboard/DetailResponden";
const routes = [
  {
    path: "/",
    name: "Aspiration Form",
    component: AspirationForm,
    layout: "/",
  },
  {
    path: "/login",
    name: "Login Page",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/responden",
    name: "Respondend",
    component: Responden,
    layout: "/admin/dashboard",
  },
  {
    path: "/responden/:slug",
    name: "Respondend",
    component: DetailResponden,
    layout: "/admin/dashboard",
  },
  {
    path: "/add-category",
    name: "Category",
    component: AddCategory,
    layout: "/admin/dashboard",
  },
  {
    path: "/add-lecturer",
    name: "Lecturer",
    component: AddLecturer,
    layout: "/admin/dashboard",
  },
];


export default routes;