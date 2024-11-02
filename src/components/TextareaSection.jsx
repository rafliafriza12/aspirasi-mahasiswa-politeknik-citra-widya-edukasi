const TextareaSection = ({ props }) => {
  return (
    <div class=" w-full mb-5 group">
        <label
        htmlFor={props.id}
        className=" text-base text-accent font-semibold"
      >
        {props.title}
      </label>
      <textarea
      rows={7}
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
        className="block mt-4 py-2.5 px-2 w-full text-sm text-accent bg-transparent rounded-md border-[1px] border-accent appearance-none focus:outline-none focus:ring-0  peer"
        placeholder=" "
        autocomplete="off"
        required
      />
      <p className="pt-1 text-xs text-gray-500">Aspirasi / Isi tentang kategori pokok bahasan</p>
    </div>
  );
};

export default TextareaSection;
