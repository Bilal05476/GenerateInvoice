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
  return (
    <div ref={ref}>
      <Container
        orderID={props.orderID}
        cName={props.cName}
        cAddress={props.cAddress}
        cPhone={props.cPhone}
        orderDate={props.orderDate}
        orderQuantity={props.orderQuantity}
        cAmount={props.cAmount}
      />
      <div className="cutter"></div>
      <Container
        orderID={props.orderID}
        cName={props.cName}
        cAddress={props.cAddress}
        cPhone={props.cPhone}
        orderDate={props.orderDate}
        orderQuantity={props.orderQuantity}
        cAmount={props.cAmount}
      />
      <div className="cutter"></div>
      <Container
        orderID={props.orderID}
        cName={props.cName}
        cAddress={props.cAddress}
        cPhone={props.cPhone}
        orderDate={props.orderDate}
        orderQuantity={props.orderQuantity}
        cAmount={props.cAmount}
      />
    </div>
  );
});

const Invoice = ({
  orderID,
  cName,
  cAddress,
  cPhone,
  orderQuantity,
  orderDate,
  cAmount,
}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Invoices
        orderID={orderID}
        cName={cName}
        cAddress={cAddress}
        cPhone={cPhone}
        orderQuantity={orderQuantity}
        orderDate={orderDate}
        cAmount={cAmount}
        ref={componentRef}
      />
      <div className="generate-invoice">
        <NavLink to="/" className="button" style={{ margin: "1rem" }}>
          Back to Home
        </NavLink>
        {orderID === "" ||
        cName === "" ||
        cAddress === "" ||
        cPhone === "" ||
        orderDate === "" ||
        orderQuantity === "" ||
        cAmount === "" ? (
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
