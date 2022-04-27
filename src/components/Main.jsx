import "../css/main.css";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";


const Main = ({
  orderID,
  setOrderID,
  cName,
  setCName,
  cAddress,
  setCAddress,
  cPhone,
  setCPhone,
  orderQuantity,
  setOrderQuantity,
  orderDate,
  setOrderDate,
  cAmount,
  setCAmount,
}) => {
  const onReset = () => {
    setCName("")
    setCAddress("")
    setCPhone("")
    setOrderDate("")
    setOrderID("")
    setCAmount("")
    setOrderQuantity("")
  }
  return (
    <>
      {/* logo */}
      <div className="main-logo">
        <img src={logo} alt="logo" />
      </div>
      {/* First Step (Customer Information) */}
      <div className="customer-info">
        <div className="top-bar">
          <div className="heading">
            <h2>Enter Customer and Invoice Information</h2>
          </div>
          <div className="pointer">
            <div className="step">Step 1 of 2</div>
            <div className="point">
              <div className="one"></div>
              <div className="two"></div>
            </div>
          </div>
        </div>
        <div className="item-details">
          <form className="item-form">
            <input
              type="text"
              name="order"
              id="orderNumber"
              placeholder="Order number"
              required
              value={orderID}
              onChange={(e) => setOrderID(e.target.value)}
            />
            <input
              type="text"
              name="name"
              id="customerName"
              placeholder="Customer's name"
              required
              value={cName}
              onChange={(e) => setCName(e.target.value)}
            />
            <input
              type="text"
              name="phone"
              id="customerPhone"
              placeholder="Customer's phone"
              required
              value={cPhone}
              onChange={(e) => setCPhone(e.target.value)}
            />

            <input
              type="text"
              name="address"
              id="cAddress"
              placeholder="Customer's address"
              required
              value={cAddress}
              onChange={(e) => setCAddress(e.target.value)}
            />
            <br />
            <input
              type="datetime-local"
              name="date"
              id="invoiceDate"
              placeholder="Invoice date"
              required
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
            />
            <input
              type="text"
              name="city"
              id="iCity"
              placeholder="Customer's city"
              readOnly={true}
              value="Karachi"
            />
            <input
              type="text"
              name="country"
              id="iCountry"
              readOnly={true}
              value="Pakistan"
            />
          </form>
        </div>
      </div>

      {/* Second Step (Enter Items) */}
      <div className="customer-info">
        <div className="top-bar">
          <div className="heading">
            <h2>Enter the Items to Bill</h2>
          </div>
          <div className="pointer">
            <div className="step">Step 2 of 2</div>
            <div className="point">
              <div className="one"></div>
              <div className="one"></div>
            </div>
          </div>
        </div>
        <div className="item-details">
          <form className="item-form">
            <input
              type="number"
              min="1"
              max="100"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={orderQuantity}
              onChange={(e) => setOrderQuantity(e.target.value)}
            />
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price(Rs)"
              value={cAmount}
              onChange={(e) => setCAmount(e.target.value)}
            />
          </form>
          <div className="generate-invoice">
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
                <button onClick={onReset} className="button reset">
                  Reset
                </button>
                <NavLink to="/invoice" className="button">
                  Next
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;