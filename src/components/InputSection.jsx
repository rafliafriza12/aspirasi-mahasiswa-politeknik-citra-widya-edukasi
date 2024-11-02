const InputSection = ({ props }) => {
  return (
    <div class="relative z-0 w-full mb-5 group">
      <input
        type={props.type === "email" ? "email" : "text"}
        name="floating_email"
        id={props.id}
        value={props.getter}
        onChange={(e) => {
          const inputValue = e.target.value;
          if (props.type === "number") {
            const validate = inputValue.replace(/[^0-9.]/g, "");
            props.setter(validate);
          } else {
            props.setter(inputValue);
          }
        }}
        className="block py-2.5 px-0 w-full text-sm text-accent bg-transparent border-0 border-b-[1px] border-accent appearance-none focus:outline-none focus:ring-0  peer"
        placeholder=" "
        autoComplete="off"
        required
      />
      <label
        htmlFor={props.id}
        className="absolute text-sm text-accent font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {props.title}
      </label>
    </div>
  );
};

export default InputSection;
