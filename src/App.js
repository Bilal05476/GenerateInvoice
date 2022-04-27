import Invoice from "./components/Invoice";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import {  useState } from "react";

function App() {
  const [orderID, setOrderID] = useState("");
  const [cName, setCName] = useState("");
  const [cAddress, setCAddress] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderQuantity, setOrderQuantity] = useState("");
  const [cAmount, setCAmount] = useState("");

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Main
            orderID={orderID}
            setOrderID={setOrderID}
            cName={cName}
            setCName={setCName}
            cPhone={cPhone}
            setCPhone={setCPhone}
            cAddress={cAddress}
            setCAddress={setCAddress}
            orderDate={orderDate}
            setOrderDate={setOrderDate}
            orderQuantity={orderQuantity}
            setOrderQuantity={setOrderQuantity}
            cAmount={cAmount}
            setCAmount={setCAmount}
          />
        }
      />
      <Route
        exact
        path="/invoice"
        element={
          <Invoice
            orderID={orderID}
            cName={cName}
            cAddress={cAddress}
            cPhone={cPhone}
            orderDate={orderDate}
            orderQuantity={orderQuantity}
            cAmount={cAmount}
          />
        }
      />
    </Routes>
  );
}

export default App;
