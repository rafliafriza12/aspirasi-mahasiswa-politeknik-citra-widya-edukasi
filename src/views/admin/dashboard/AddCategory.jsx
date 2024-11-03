import AddButton from "../../../atoms/AddButton";
import { useState, useEffect } from "react";
import API from "../../../utils/API";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import Loading from "../../../components/partials/Loading";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCategories = () => {
    setIsLoading(true);
    API.get("/categories")
      .then((res) => {
        // console.log(res.data.data);
        setIsLoading(false);
        setCategoryTypes(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const deleteCategory = (id) => {
    // console.log(id);
    API.post(`/categories/delete-category/${id}`, null, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        // console.log(res.data.data);
        // setCategoryTypes(res.data.data);
        toast.success(`${res.data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        getCategories();
      })
      .catch((err) => {
        // console.log(err);
        toast.error(`${err.response.data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const addCategory = () => {
    API.post(
      `/categories/add-category`,
      { category: category },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        // console.log(res.data.data);
        // setCategoryTypes(res.data.data);
        toast.success(`${res.data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        getCategories();
      })
      .catch((err) => {
        // console.log(err);
        toast.error(`${err.response.data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className=" w-full h-full relative">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className=" w-full text-center pb-14 font-bold text-2xl">
            Tambah Kategori
          </h1>
          <AddButton
            props={{
              getter: category,
              setter: setCategory,
              type: "category",
              addMethod: addCategory,
            }}
          />
          <div className="relative overflow-x-hidden shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Kategori
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {categoryTypes.map((categoryType, i) => {
                  return (
                    <tr
                      key={i}
                      className="odd:bg-white even:bg-gray-100 border-b"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {categoryType.category}
                      </th>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteCategory(categoryType._id)}
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AddCategory;
