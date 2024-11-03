import AddButton from "../../../atoms/AddButton";
import { useState, useEffect } from "react";
import API from "../../../utils/API";
// import { showToast } from "../../../components/partials/Toast";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import Loading from "../../../components/partials/Loading";

const AddLecturer = () => {
  const [lecture, setLecture] = useState("");
  const [lecturers, setLecturers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getLecturers = () => {
    setIsLoading(true);
    API.get("/lecturers")
      .then((res) => {
        // console.log(res.data.data);
        setIsLoading(false);
        setLecturers(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const deleteLecture = (id) => {
    // console.log(id);
    API.post(`/lecturers/delete-lecture/${id}`, null, {
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
        // showToast(res.data.message, res.data.status);
        getLecturers();
      })
      .catch((err) => {
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
        // showToast(
        //     err.response.data.message,
        //     err.response.data.status
        //   );
        // console.log(err);
      });
  };

  const addLecture = () => {
    API.post(
      `/lecturers/add-lecture`,
      { lecture: lecture },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        // console.log(res.data);
        // setCategoryTypes(res.data.data);
        // showToast(res.data.message, res.data.status);
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
        getLecturers();
      })
      .catch((err) => {
        // showToast(
        //     err.response.data.message,
        //     err.response.data.status
        //   );
        console.log(err);
        console.log("haloo");
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
    getLecturers();
  }, []);

  return (
    <div className=" w-full h-full relative">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className=" w-full text-center pb-14 font-bold text-2xl">
            Tambah Dosen
          </h1>
          <AddButton
            props={{
              getter: lecture,
              setter: setLecture,
              type: "lecture",
              addMethod: addLecture,
            }}
          />
          <div className="relative overflow-x-hidden shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Dosen
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {lecturers.map((item, i) => {
                  return (
                    <tr
                      key={i}
                      className="odd:bg-white even:bg-gray-100 border-b"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {item.lecture}
                      </th>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteLecture(item._id)}
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

export default AddLecturer;
