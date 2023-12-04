import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
// import logo from "../../../../assets/img/logo/paravilogo.jpeg";
import logo from "../../../../assets/img/logo/paravilogo.png";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 30,
  },
  header: {
    fontSize: 18,
    borderBottom: "1px solid black",
    marginBottom: 12,
  },
  section: {
    marginBottom: 20,
  },
  image: {
    width: 70,
    marginBottom: 10,
    backgroundColor: "black",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  invoiceInfo: {
    width: "50%",
  },
  invoicedata: { fontSize: "12px", marginTop: "3px" },
  invoiceheader: { fontSize: "15px", marginBottom: "4px" },
  additionalInfo: {
    width: "50%",
  },
  totalSection: {
    borderTop: "1px solid black",
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  totalText: {
    fontWeight: "bold",
    marginTop: "10px",
    fontSize: 14,
  },
});

const PaymentInvoice = ({ CurrectReceipt }) => {
  console.log(CurrectReceipt);
  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image style={styles.image} src={logo} />
          <View style={styles.infoContainer}>
            <View style={styles.invoiceInfo}></View>
          </View>
          <Text style={styles.header}>Payment Invoice</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.invoiceInfo}>
            <Text style={styles?.invoiceheader}>
              Order Id: {CurrectReceipt?.order_id}
            </Text>
            <Text style={styles?.invoicedata}>
              Txn Number: {CurrectReceipt?.transaction_id}
            </Text>
            <Text style={styles?.invoicedata}>
              Plan Amount: {CurrectReceipt?.plan_amount}
            </Text>
            <Text style={styles?.invoicedata}>
              Plan Name: {CurrectReceipt?.title}
            </Text>
            <Text style={styles?.invoicedata}>
              Plan Duration: {CurrectReceipt?.duration} Year
            </Text>
            <Text style={styles?.invoicedata}>
              Payment Date: {formattedDate(CurrectReceipt?.purchase_date)}
            </Text>
            <Text style={styles?.invoicedata}>
              Payment Status: {CurrectReceipt?.pay_status}
            </Text>
            <Text style={styles?.invoicedata}>
              Date: {formattedDate(new Date())}
            </Text>
          </View>

          <View style={styles.additionalInfo}>
            <Text style={styles?.invoiceheader}>Customer Information:</Text>
            <Text style={styles?.invoicedata}>
              Full Name:{" "}
              {`${CurrectReceipt?.firstname} ${CurrectReceipt?.lastname}`}
            </Text>
            <Text style={styles?.invoicedata}>
              Email: {CurrectReceipt?.email}
            </Text>
            <Text style={styles?.invoicedata}>
              Mobile No.: {CurrectReceipt?.phone}
            </Text>
            <Text style={styles?.invoicedata}>
              Address:{" "}
              {`${CurrectReceipt?.city_name}, ${CurrectReceipt?.state_name} ${CurrectReceipt?.postal_code}`}
            </Text>
          </View>
        </View>

        <View style={styles.totalSection}>
          <Text style={styles.totalText}>
            Total Amount: Rs {CurrectReceipt?.plan_amount} /-
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PaymentInvoice;
