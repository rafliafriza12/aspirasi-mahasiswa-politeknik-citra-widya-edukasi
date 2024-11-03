const FileInputSection = ({ props }) => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            props.setter(reader.result); // Simpan base64 ke state
        };
        reader.readAsDataURL(file); // Membaca file sebagai base64
        props.setFileName(file.name);
    }
  };
  return (
    <div>
        <label
        htmlFor={props.id}
        className=" text-base text-accent font-semibold"
      >
        {props.title}
      </label>
      <div className="flex items-center justify-center w-full mt-3">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-accent border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100 "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-accent "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-accent ">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs px-10 text-center text-accent">
                {props.fileName !== "" ? props.fileName : "Lampirkan Foto yang menggambarkan topik bahasan sebagai bukti pendukung. Format .jpg, .jpeg, .png. Ukuran maksimal 10 MB"}
            </p>
          </div>
          <input id="dropzone-file" type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default FileInputSection;
