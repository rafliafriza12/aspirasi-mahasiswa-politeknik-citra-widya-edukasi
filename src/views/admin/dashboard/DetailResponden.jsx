import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../../../utils/API";
import Loading from "../../../components/partials/Loading";
const DetailResponden = () => {
    const [respondent, setRespondent] = useState({});
    const location = useLocation();
    const [isLoading, setIsloading] = useState(false);

    const getRespondent = () => {
        setIsloading(true);
        API.get(`/respondents/${location.pathname.split("/").pop()}`,{
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`
            }
        }).then((res) => {
            setIsloading(false);
            // console.log(res.data.data);
           setRespondent(res.data.data);
        }).catch((err) => {
           setIsloading(false);
            // showToast(
            //     err.response.data.message,
            //     err.response.data.status
            //   );
            // console.log(err);
        })
    }

    useEffect(() => {
        getRespondent();
    },[])

    if(isLoading) {return (
        <div className=" w-full h-full relative">
            <Loading/>
        </div>
    )}else{
        return(
        <div className=" w-full flex flex-col items-start gap-10">
            <div className=" flex flex-col items-start gap-3">
                <h1 className=" font-bold">Nama</h1>
                <h1 className=" text-gray-500">{respondent.fullName}</h1>
            </div>
            <div className=" flex flex-col items-start gap-3">
                <h1 className=" font-bold">Prodi</h1>
                <h1 className=" text-gray-500">{respondent.majority}</h1>
            </div>
            <div className=" flex flex-col items-start gap-3">
                <h1 className=" font-bold">NIM</h1>
                <h1 className=" text-gray-500">{respondent.NIM}</h1>
            </div>
            <div className=" flex flex-col items-start gap-3">
                <h1 className=" font-bold">Nomor</h1>
                <h1 className=" text-gray-500">{respondent.phoneNumber}</h1>
            </div>
            <div className=" flex flex-col items-start gap-3">
                <h1 className=" font-bold">Email</h1>
                <h1 className=" text-gray-500">{respondent.email}</h1>
            </div>
            <div className=" flex flex-col items-start gap-3">
                <h1 className=" font-bold">Kategori</h1>
                <h1 className=" text-gray-500">{respondent.category}</h1>
            </div>
            <div className=" flex flex-col items-start gap-3">
                <h1 className=" font-bold">Isi Laporan</h1>
                <p className=" w-[40vw] text-gray-500">{respondent.report}</p>
            </div>
            <div className=" flex flex-col items-start gap-3">
                <h1 className=" font-bold">Dosen</h1>
                <h1 className=" text-gray-500">{respondent.lecturer}</h1>
            </div>
            <div className=" flex flex-col items-start gap-3">
                <h1 className=" font-bold">Foto atau Vidio Bukti</h1>
                <img src={respondent.proof} alt="Foto Bukti" className=" w-[500px]" />
            </div>
            <div className=" flex flex-col items-start gap-3">
                <h1 className=" font-bold">Tanda Tangan</h1>
                <img src={respondent.signature} alt="Foto Bukti" className=" w-[250px]" />
            </div>
        </div>
    );
    }
}

export default DetailResponden