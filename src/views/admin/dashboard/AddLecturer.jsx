import AddButton from "../../../atoms/AddButton";
const AddLecturer = () => {
    return (
      <div>
        <h1 className=" w-full text-center pb-14 font-bold text-2xl">
          Tambah Dosen
        </h1>
        <AddButton />
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
              <tr className="odd:bg-white even:bg-gray-100 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Prof. Taufik Fuadi Abidin
                </th>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Hapus
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default AddLecturer;
  