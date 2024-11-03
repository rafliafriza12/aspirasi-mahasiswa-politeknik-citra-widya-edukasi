import { useState } from "react";
const SelectInputSection = ({ props }) => {
  const [isShow, setIsShow] = useState(false);

  const handleSelect = (select) => {
    props.setter(select);
    setIsShow(!isShow);
  };

  return (
    <div className=" w-full relative">
      <h1 className="text-accent font-semibold pb-3">{props.title}</h1>
      <button
        onClick={() => setIsShow(!isShow)}
        data-dropdown-toggle="dropdown"
        className="w-full flex justify-between text-accent focus:outline-none border-[1px] border-accent font-semibold rounded-lg text-sm px-5 py-2.5 text-center items-center"
        type="button"
      >
        {props.getter !== "" ? props.getter : "Pilih"}{" "}
        <svg
          class="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        className={`z-10 ${
          isShow ? "absolute" : "hidden"
        } mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow-[0px_6px_10px_gray] w-full `}
      >
        <ul
          className="py-2 text-sm text-accent font-semibold w-full"
          aria-labelledby="dropdownDefaultButton"
        >
          {props.title === "Kategori"
            ? props.selectType.map((type, i) => {
                return (
                  <li className="w-full" key={i}>
                    <p
                      onClick={() => handleSelect(type.category)}
                      className="block w-full px-4 py-2 hover:bg-gray-100 "
                    >
                      {type.category}
                    </p>
                  </li>
                );
              })
            : props.selectType.map((type, i) => {
                return (
                  <li className="w-full" key={i}>
                    <p
                      onClick={() => handleSelect(type.lecture)}
                      className="block w-full px-4 py-2 hover:bg-gray-100 "
                    >
                      {type.lecture}
                    </p>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default SelectInputSection;
