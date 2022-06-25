import Home from "../components/Home";
import ClassComponent from "../components/ClassComponent";
import FunctionalComponent from "../components/FunctionalComponent";

export const AppRoutes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Functional Component",
    path: "/functional",
    component: FunctionalComponent,
  },
  {
    name: "Class Component",
    path: "/class",
    component: ClassComponent,
  },
];
