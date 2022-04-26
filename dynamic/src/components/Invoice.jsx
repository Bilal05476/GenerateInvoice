import "../css/invoice.css";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

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
            <Detail h4="Payment Method" p="COD" />
            <Detail h4="Collection Amount" p={cAmount} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Invoice = ({
  orderID,
  cName,
  cAddress,
  cPhone,
  orderQuantity,
  orderDate,
  cAmount,
}) => {
  return (
    <>
      <Container
        orderID={orderID}
        cName={cName}
        cAddress={cAddress}
        cPhone={cPhone}
        orderDate={orderDate}
        orderQuantity={orderQuantity}
        cAmount={cAmount}
      />
      <div class="cutter"></div>
      <Container
        orderID={orderID}
        cName={cName}
        cAddress={cAddress}
        cPhone={cPhone}
        orderDate={orderDate}
        orderQuantity={orderQuantity}
        cAmount={cAmount}
      />
      <div class="cutter"></div>
      <Container
        orderID={orderID}
        cName={cName}
        cAddress={cAddress}
        cPhone={cPhone}
        orderDate={orderDate}
        orderQuantity={orderQuantity}
        cAmount={cAmount}
      />
      <div class="cutter"></div>
      <div className="generate-invoice">
        <NavLink to="/" className="button">
          Back to Home
        </NavLink>
      </div>
    </>
  );
};
export default Invoice;
