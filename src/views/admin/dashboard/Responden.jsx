import { useState, useEffect } from "react";
import API from "../../../utils/API";
import Loading from "../../../components/partials/Loading";
const Responden = () => {
  const [respondents, setRespondents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllRespondents = () => {
    setIsLoading(true);
    API.get("/respondents", {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        setIsLoading(false);
        setRespondents(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(err);
      });
  };

  useEffect(() => {
    getAllRespondents();
  }, []);

  return (
    <div className="w-full h-full relative">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className=" w-full text-center pb-14 font-bold text-2xl">
            Responden
          </h1>
          <div className="relative overflow-x-hidden shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    NIM
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Prodi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {respondents.map((respondent, i) => {
                  return (
                    <tr className="odd:bg-white even:bg-gray-100 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {respondent.NIM}
                      </th>
                      <td className="px-6 py-4">{respondent.fullName}</td>
                      <td className="px-6 py-4">{respondent.majority}</td>
                      <td className="px-6 py-4">{respondent.email}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`/admin/dashboard/responden/${respondent._id}`}
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Detail
                        </a>
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

export default Responden;
