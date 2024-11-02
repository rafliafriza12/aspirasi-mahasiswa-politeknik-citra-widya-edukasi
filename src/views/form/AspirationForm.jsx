import { useState, useEffect } from "react";
import InputSection from "../../components/InputSection";
import SelectInputSection from "../../components/SelectInputSection";
import TextareaSection from "../../components/TextareaSection";
import FileInputSection from "../../components/FIleInputSection";
import SignatureInputSection from "../../components/SignatureInputSection";
const AspirationForm = () => {
  const [fullName, setFullName] = useState("");
  const [majority, setMajority] = useState("");
  const [NIM, setNIM] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const categoryType = ["Saya", "adalah", "dosen"];
  const [report, setReport] = useState("");
  const [lecturer, setLecturer] = useState("");
  const lecturerType = ["Saya", "adalah", "dosen"];
  const [proof, setProof] = useState(null);
  const [signature, setSignature] = useState(null);

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
    },
    {
      id: "10",
      title: "Tanda Tangan",
      type: "canvas",
      getter: signature,
      setter: setSignature,
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
          <button className=" w-full py-2 bg-secondary text-primary rounded-lg font-semibold shadow-[0px_6px_10px_gray]">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AspirationForm;
