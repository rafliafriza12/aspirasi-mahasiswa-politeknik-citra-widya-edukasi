import { useState, useEffect } from "react";
import InputSection from "../../components/InputSection";
import SelectInputSection from "../../components/SelectInputSection";
import TextareaSection from "../../components/TextareaSection";
import FileInputSection from "../../components/FIleInputSection";
import SignatureInputSection from "../../components/SignatureInputSection";
import API from "../../utils/API";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
const AspirationForm = () => {
  const [fullName, setFullName] = useState("");
  const [majority, setMajority] = useState("");
  const [NIM, setNIM] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [categoryType, setCategoryType] = useState([]);
  const [report, setReport] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [lecturerType, setLecturerType] = useState([]);
  const [proof, setProof] = useState(null);
  const [signature, setSignature] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const body = {
    fullName: fullName,
    majority: majority,
    NIM: NIM,
    phoneNumber: phoneNumber,
    email: email,
    category: category,
    report: report,
    lecturer: lecturer,
    proof: proof,
    signature: signature,
  };
//   body.append("fullName", fullName);
//   body.append("majority", majority);
//   body.append("NIM", NIM);
//   body.append("phoneNumber", phoneNumber);
//   body.append("email", email);
//   body.append("category", category);
//   body.append("report", report);
//   body.append("lecturer", lecturer);
//   body.append("proof", proof); // proof adalah file yang dipilih (File object)
//   body.append("signature", signature); // signature adalah file yang dipilih (File object)

  const getCategories = () => {
    API.get("/categories")
      .then((res) => {
        // console.log(res.data.data);
        setCategoryType(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLecturers = () => {
    API.get("/lecturers")
      .then((res) => {
        // console.log(res.data.data);
        setLecturerType(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dataURLToFile = (dataurl, filename) => {
    // console.log(filename);
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    API.post("/respondents/create-respondent", body)
      .then((res) => {
        // console.log(res.data);
        setIsLoading(false);
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
        setFullName("");
        setMajority("");
        setNIM("");
        setPhoneNumber("");
        setEmail("");
        setCategory("");
        setReport("");
        setLecturer("");
        setProof(null);
        setSignature(null);
      })
      .catch((err) => {
        // console.log(err);
        setIsLoading(false);
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
    getLecturers();
    // console.log(signature);
    // console.log(proof);

  }, []);

  const questions = [
    {
      id: "1",
      title: "Nama Lengkap",
      type: "text",
      getter: fullName,
      setter: setFullName,
    },
    {
      id: "2",
      title: "Prodi",
      type: "text",
      getter: majority,
      setter: setMajority,
    },
    {
      id: "3",
      title: "NIM",
      type: "number",
      getter: NIM,
      setter: setNIM,
    },
    {
      id: "4",
      title: "Nomor HP",
      type: "number",
      getter: phoneNumber,
      setter: setPhoneNumber,
    },
    {
      id: "5",
      title: "Email",
      type: "email",
      getter: email,
      setter: setEmail,
    },
    {
      id: "6",
      title: "Kategori",
      type: "select",
      getter: category,
      setter: setCategory,
      selectType: categoryType,
    },
    {
      id: "7",
      title: "Isi Laporan",
      type: "textarea",
      getter: report,
      setter: setReport,
    },
    {
      id: "8",
      title: "Pilih Dosen",
      type: "select",
      getter: lecturer,
      setter: setLecturer,
      selectType: lecturerType,
    },
    {
      id: "9",
      title: "Foto atau Vidio Bukti",
      type: "file",
      getter: proof,
      setter: setProof,
      fileName: fileName,
      setFileName: setFileName,
    },
    {
      id: "10",
      title: "Tanda Tangan",
      type: "canvas",
      getter: signature,
      setter: setSignature,
      helper: dataURLToFile,
    },
    {
      id: "11",
      title: "Kode Keamanan",
      type: "captcha",
    },
  ];

  return (
    <div className=" w-full flex justify-center">
      <div className=" w-[85%] lg:w-[50%] p-5 sm:p-8 bg-primary rounded-md flex flex-col shadow-[0px_6px_10px_gray]">
        <div className=" w-full text-accent pb-4 border-b-[1px] border-accent">
          <h1 className=" font-bold text-lg">
            Aspirasi Mahasiswa Terkait Dosen yang Mengajar
          </h1>
          <p className=" text-sm pt-2">
            Sampaikan aspirasi anda ke pada BAAK dengan mengisi formulir ini
          </p>
        </div>

        <div className=" w-full flex flex-col gap-8 pt-7">
          {questions.map((question, i) => {
            if (
              question.type === "text" ||
              question.type === "number" ||
              question.type === "email"
            )
              return <InputSection props={question} key={i} />;
            if (question.type === "select")
              return <SelectInputSection props={question} key={i} />;
            if (question.type === "textarea")
              return <TextareaSection props={question} key={i} />;
            if (question.type === "file")
              return <FileInputSection props={question} key={i} />;
            if (question.type === "canvas")
              return <SignatureInputSection props={question} key={i} />;
          })}
        </div>
        <div className=" w-full px-10 mt-10">
          <button
          disabled={isLoading}
            onClick={(e) => handleSubmit(e)}
            className=" flex items-center gap-3 justify-center w-full py-2 bg-secondary text-primary rounded-lg font-semibold shadow-[0px_6px_10px_gray]"
          >
            <h1>Submit</h1>
            {isLoading && (
                <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AspirationForm;
