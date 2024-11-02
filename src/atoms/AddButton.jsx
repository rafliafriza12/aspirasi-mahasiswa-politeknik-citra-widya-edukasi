import { useState } from "react";
const AddButton = ({props}) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className=" w-full flex gap-5 justify-end py-5">
            {isOpen && (
                <input type="text" name="" id="" placeholder="Nama Dosen"  className=" focus:outline-none bg-transparent border-b-[1px] border-accent w-[22%]"/>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className=" px-3 py-2 bg-secondary text-primary rounded-md shadow-md">Tambah</button>
        </div>
    );
}

export default AddButton;