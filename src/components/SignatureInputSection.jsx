import { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useMediaQuery } from "react-responsive";

const SignatureInputSection = ({ props }) => {
  const sigCanvas = useRef(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 639 });

  const clearSignature = () => {
    sigCanvas.current.clear();
    props.setter(null);
  };

  const saveSignature = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    const date = new Date();
    const file = props.helper(dataURL, `signature-${date.getTime()}.png`);
    const reader = new FileReader();
    reader.onloadend = () => {
      props.setter(reader.result); // Simpan base64 ke state
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (props.getter === null) sigCanvas.current.clear();
  }, [props.getter]);

  return (
    <div className=" w-full">
      <h1 className=" text-base text-accent font-semibold">{props.title}</h1>
      {isSmallScreen ? (
          <SignatureCanvas
            ref={sigCanvas}
            penColor="black"
            onEnd={() => saveSignature()}
            canvasProps={{
              width: 280,
              height: 300,
              className: "border border-accent rounded-lg sm:w-auto mt-3",
            }}
          />
      ) : (
          <SignatureCanvas
            ref={sigCanvas}
            penColor="black"
            onEnd={() => saveSignature()}
            canvasProps={{
              width: 500,
              height: 300,
              className: "border border-accent rounded-lg sm:w-auto mt-3",
            }}
          />
      )}
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
