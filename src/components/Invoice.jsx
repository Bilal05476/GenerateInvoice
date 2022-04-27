import "../css/invoice.css";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Detail = (props) => {
  return (
    <div className="detail">
      <h4>{props.h4}</h4>
      <p>{props.p}</p>
    </div>
  );
};

const Container = ({
  orderID,
  cName,
  cAddress,
  cPhone,
  orderQuantity,
  orderDate,
  cAmount,
}) => {
  return (
    <div className="container">
      <div className="left">
        <small>ORDER ID: {orderID}</small>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="right">
        <div className="customer-details">
          <div className="heading">
            <h4>Customer</h4>
          </div>
          <div className="details">
            <Detail h4="Name" p={cName} />
            <Detail h4="Address" p={cAddress} />
            <Detail h4="Phone Number" p={cPhone} />
            <Detail h4="Date and Time" p={orderDate} />
            <Detail h4="Quantity" p={orderQuantity} />
            <Detail h4="City" p="Karachi" />
          </div>
          <div className="subtotal">
            <div className="heading">
              <h4>Subtotal</h4>
            </div>
            <div className="payment-detail">
              <div className="detail">
                <h4>Payment Method</h4>
                <p>COD</p>
              </div>
              <div className="detail">
                <h4>Collection Amount</h4>
                <p>{cAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Invoices = React.forwardRef((props, ref) => {
  const { invoiceItem } = props;
  return (
    <div ref={ref}>
      {invoiceItem.map((item) => (
        <div key={item.orderID}>
          <Container
            orderID={item.orderID}
            cName={item.cName}
            cAddress={item.cAddress}
            cPhone={item.cPhone}
            orderDate={item.orderDate}
            orderQuantity={item.orderQuantity}
            cAmount={item.cAmount}
          />
          <div className="cutter"></div>
        </div>
      ))}
    </div>
  );
});

const Invoice = ({ invoiceItem }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Invoices ref={componentRef} invoiceItem={invoiceItem} />
      <div className="generate-invoice">
        <NavLink to="/" className="button" style={{ margin: "1rem" }}>
          Back to Home
        </NavLink>
        {invoiceItem.length <= 0 ? (
          ""
        ) : (
          <>
            <button onClick={handlePrint} className="button">
              Generate Invoice
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default Invoice;
