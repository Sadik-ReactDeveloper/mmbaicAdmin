// InvoiceGenerator.js
import React, { useEffect, useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import InvoiceTemplate from "./InvoiceTemplate";
import ReactPDF from "@react-pdf/renderer";
import POInVoice from "./PaymentPOinvoice";
// import POInVoice from "./POInVoice";
import axiosConfig from "../../../../axiosConfig";
const InvoiceGenerator = (props) => {
  console.log(props);
  const [Printview, setPrintview] = useState({});
  const [AllCharges, setAllCharges] = useState({});
  const [details, setDetails] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      {/* {/ Use PDFViewer to preview the generated PDF /} */}
      <PDFViewer width="1000" height="800">
        <POInVoice
          CurrectReceipt={props?.CurrectReceipt}
          fileName="invoice.pdf"
        />
      </PDFViewer>
      <PDFDownloadLink
        document={
          <POInVoice
            CurrectReceipt={props?.CurrectReceipt}
            fileName="invoice.pdf"
          />
        }
        fileName="sample.pdf"
      >
        {({ blob, url, loading, error }) => {
          debugger;
          {
            /* loading ? "Loading document..." : "Download now!" */
          }
        }}
      </PDFDownloadLink>
    </div>
  );
};

export default InvoiceGenerator;
