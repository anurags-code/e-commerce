import React, { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    if (Object.values(paymentDetails).some((value) => value === "")) {
      alert("Please fill out all the required fields!");
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        alert(`Payment successful via ${paymentMethod}`);
        setIsProcessing(false);
      }, 2000);
    }
  };

  const handleInputChange = (field, value) => {
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Payment Options</h2>
      <div className="mt-4">
        <label className="form-check-label">
          <input
            type="radio"
            name="paymentMethod"
            value="UPI"
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              setPaymentDetails({ username: "", upiId: "" });
            }}
            className="form-check-input"
          />
          UPI
        </label>
        <br />
        <label className="form-check-label">
          <input
            type="radio"
            name="paymentMethod"
            value="Credit Card"
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              setPaymentDetails({
                cardHolderName: "",
                cardNumber: "",
                expiryDate: "",
                cvv: "",
              });
            }}
            className="form-check-input"
          />
          Credit Card
        </label>
        <br />
        <label className="form-check-label">
          <input
            type="radio"
            name="paymentMethod"
            value="Debit Card"
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              setPaymentDetails({
                cardHolderName: "",
                cardNumber: "",
                expiryDate: "",
                cvv: "",
              });
            }}
            className="form-check-input"
          />
          Debit Card
        </label>
      </div>

      {/* Render UPI Payment Form */}
      {paymentMethod === "UPI" && (
        <div className="mt-5">
          <h4>UPI Payment Details</h4>
          <input
            type="text"
            className="form-control my-3"
            placeholder="Enter Username"
            value={paymentDetails.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="Enter UPI ID"
            value={paymentDetails.upiId}
            onChange={(e) => handleInputChange("upiId", e.target.value)}
          />
        </div>
      )}

      {/* Render Credit Card Payment Form */}
      {paymentMethod === "Credit Card" && (
        <div className="mt-5">
          <h4>Credit Card Payment Details</h4>
          <input
            type="text"
            className="form-control my-3"
            placeholder="Card Holder Name"
            value={paymentDetails.cardHolderName}
            onChange={(e) =>
              handleInputChange("cardHolderName", e.target.value)
            }
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="Card Number"
            value={paymentDetails.cardNumber}
            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="Expiry Date (MM/YY)"
            value={paymentDetails.expiryDate}
            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
          />
          <input
            type="password"
            className="form-control my-3"
            placeholder="CVV"
            value={paymentDetails.cvv}
            onChange={(e) => handleInputChange("cvv", e.target.value)}
          />
        </div>
      )}

      {/* Render Debit Card Payment Form */}
      {paymentMethod === "Debit Card" && (
        <div className="mt-5">
          <h4>Debit Card Payment Details</h4>
          <input
            type="text"
            className="form-control my-3"
            placeholder="Card Holder Name"
            value={paymentDetails.cardHolderName}
            onChange={(e) =>
              handleInputChange("cardHolderName", e.target.value)
            }
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="Card Number"
            value={paymentDetails.cardNumber}
            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="Expiry Date (MM/YY)"
            value={paymentDetails.expiryDate}
            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
          />
          <input
            type="password"
            className="form-control my-3"
            placeholder="CVV"
            value={paymentDetails.cvv}
            onChange={(e) => handleInputChange("cvv", e.target.value)}
          />
        </div>
      )}

      {/* Payment Processing Button */}
      {paymentMethod && (
        <div className="text-center my-4">
          <button
            onClick={handlePayment}
            className="btn btn-success"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
