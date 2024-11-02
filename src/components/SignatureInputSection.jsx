import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignatureInputSection = ({ props }) => {
  const sigCanvas = useRef(null);

  const clearSignature = () => {
    sigCanvas.current.clear();
    props.setter(null);
  };

  const saveSignature = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    props.setter(dataURL);
    // console.log("Signature saved:", props.getter);
  };

  return (
    <div className=" w-full">
      <h1
        className=" text-base text-accent font-semibold"
      >
        {props.title}
      </h1>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        onEnd={() => saveSignature()}
        canvasProps={{
          width: 500,
          height: 300,
          className: "border border-accent rounded-lg w-full sm:w-auto mt-3",
        }}
      />
      <button
        onClick={() => clearSignature()}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded shadow-[0px_3px_7px_gray]"
      >
        Clear
      </button>
      {/* <button onClick={saveSignature} className="ml-2 mt-4 px-4 py-2 bg-secondary text-white rounded">
                Save
            </button> */}
    </div>
  );
};

export default SignatureInputSection;
