import { useState } from "react";

const AddButton = ({props}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if(props.getter === ""){
            setIsOpen(!isOpen);
        }else{
            props.addMethod();
            props.setter("");
        }
    }

    return(
        <div className=" w-full flex gap-5 justify-end py-5">
            {isOpen && (
                <input value={props.getter} onChange={(e) => props.setter(e.target.value)} type="text" name="" id="" placeholder={props.type === "category" ? "Kategori" : "Nama Dosen"}  className=" focus:outline-none bg-transparent border-b-[1px] border-accent w-[22%]"/>
            )}
            <button onClick={() => handleClick()} className=" px-3 py-2 bg-secondary text-primary rounded-md shadow-md">Tambah</button>
        </div>
    );
}

export default AddButton;