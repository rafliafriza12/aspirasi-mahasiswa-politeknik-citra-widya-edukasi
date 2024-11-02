import routes from "../routes";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const getRoutes = () => {
    return routes.map((route, i) => {
      if (route.layout === "/admin/dashboard") {
        return (
        <>
          <Route path={route.path} element={<route.component />} key={i} />
        </>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className=" w-screen h-screen  overflow-x-hidden gap-10 bg-primary scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-primary">
      <div className="bg-gray-100 h-full flex justify-between">
        <div
          className={` w-[22%] px-3 bg-white transition-transform duration-300 ease-in-out sm:translate-x-0 shadow-[2px_0px_10px_gray]`}
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold text-accent">
            Politeknik Citra Widya Edukasi
            </h2>
          </div>
          <nav className="px-4">
            <ul>
              <li className="mb-4">
                <div
                onClick={() => navigation('/admin/dashboard/responden')}
                  className="text-accent hover:underline cursor-pointer"
                >
                  Responden
                </div>
              </li>
              <li className="mb-4">
                <div
                onClick={() => navigation('/admin/dashboard/add-category')}
                  className="text-accent hover:underline cursor-pointer"
                >
                  Tambah Ketegori
                </div>
              </li>
              <li className="mb-4">
                <div
                onClick={() => navigation('/admin/dashboard/add-lecturer')}
                  className="text-accent hover:underline cursor-pointer"
                >
                  Tambah Dosen
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" w-[78%]  p-10 h-screen overflow-x-hidden">

          <Routes>{getRoutes()}</Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
