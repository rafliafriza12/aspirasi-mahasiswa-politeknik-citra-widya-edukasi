const Responden = () => {
  return (
    <div>
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
            <tr className="odd:bg-white even:bg-gray-100 border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                2208107010028
              </th>
              <td className="px-6 py-4">Rafli Afriza Nugraha</td>
              <td className="px-6 py-4">Informatika</td>
              <td className="px-6 py-4">rafliafriza90@gmail.com</td>
              <td className="px-6 py-4">
                <a
                  href="/admin/dashboard/responden/1"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Detail
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                2208107010028
              </th>
              <td className="px-6 py-4">Rafli Afriza Nugraha</td>
              <td className="px-6 py-4">Informatika</td>
              <td className="px-6 py-4">rafliafriza90@gmail.com</td>
              <td className="px-6 py-4">
                <a
                  href="/admin/dashboard/responden/1"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Detail
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                2208107010028
              </th>
              <td className="px-6 py-4">Rafli Afriza Nugraha</td>
              <td className="px-6 py-4">Informatika</td>
              <td className="px-6 py-4">rafliafriza90@gmail.com</td>
              <td className="px-6 py-4">
                <a
                  href="/admin/dashboard/responden/1"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Detail
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Responden;
