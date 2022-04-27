import Invoice from "./components/Invoice";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [invoiceItem, setInvoiceItem] = useState([]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Main invoiceItem={invoiceItem} setInvoiceItem={setInvoiceItem} />
        }
      />
      <Route
        exact
        path="/invoice"
        element={<Invoice invoiceItem={invoiceItem} />}
      />
    </Routes>
  );
}

export default App;
