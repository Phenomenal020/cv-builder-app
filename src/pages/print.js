import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import TemplateOne from "../ccomponents/templates/templateOne/templateOne";

const Print = () => {
  const componentRef = useRef();

  return (
    <div>
      {/* <ReactToPrint
            trigger={() => <button>Print your cv!</button>}
            content={() => componentRef.current}
        />
        <TemplateOne ref={componentRef} /> */}
      <div>Print</div>
    </div>
  );
};

export default Print;
