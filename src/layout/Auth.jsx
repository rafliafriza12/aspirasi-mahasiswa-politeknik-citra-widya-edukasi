import routes from "../routes";
import { Route, Routes } from "react-router-dom";

const AuthLayout = () => {
  const getRoutes = () => {
    return routes.map((route, i) => {
      if (route.layout === "/auth") {
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
      <Routes>{getRoutes()}</Routes>
      
    </div>
  );
};

export default AuthLayout;
