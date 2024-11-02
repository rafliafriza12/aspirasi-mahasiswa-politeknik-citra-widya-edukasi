import routes from "../routes";
import { Route, Routes } from "react-router-dom";
import Logo from "../assets/Logo.png";

const UserLayout = () => {
  const getRoutes = () => {
    return routes.map((route, i) => {
      if (route.layout === "/") {
        return (
          <Route
            path={route.path}
            element={<route.component />}
            key={i}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className=" w-screen h-screen flex flex-col items-center overflow-x-hidden py-10 gap-10 bg-primary scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-primary">
      <div className=" w-full flex justify-center">
        <div className=" aspect-video w-36 sm:w-52 lg:w-64">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <Routes>{getRoutes()}</Routes>
    </div>
  );
};

export default UserLayout;
