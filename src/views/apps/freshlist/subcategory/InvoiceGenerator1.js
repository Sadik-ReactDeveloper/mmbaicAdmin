// InvoiceGenerator.js
import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import InvoiceTemplate from "./InvoiceTemplate";
import ReactPDF from "@react-pdf/renderer";
import POInVoice from "./POInVoice";
// import POInVoice from "./POInVoice";
import axiosConfig from "../../../../AxiosnewConfig";
const InvoiceGenerator = (props) => {
  const [Printview, setPrintview] = useState({});
  const [details, setDetails] = useState([]);

  useEffect(() => {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
    formdata.append("order_id", props?.PrintData?.id);
    axiosConfig
      .post(`/order_detail`, formdata)
      .then((response) => {
        console.log(response.data.data);
        setDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    if (props?.PrintData) {
      console.log(props?.PrintData);
      setPrintview(props?.PrintData);
    }
  }, []);

  return (
    <div>
      {/* {/ Use PDFViewer to preview the generated PDF /} */}
      <PDFViewer width="1000" height="800">
        <InvoiceTemplate
          invoiceData={Printview}
          CurrentWords={props.wordsNumber}
          BilData={props}
          tableList={details}
          fileName="invoice.pdf"
        />
      </PDFViewer>
    </div>
  );
};

export default InvoiceGenerator;
