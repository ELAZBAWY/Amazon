import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoBlack } from "../../assets/index";
import { resetBuyNowProduct } from "../../Redux/amazonSlice";
import { useAddress } from "../../context/userAddressContext";
import AddressForm from "./addressForm";
import UserAddresses from "./userAddresses";
import PaymentMethod from "./paymentMethod";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  const dispatch = useDispatch();

  // Get the list of user addresses from the context
  const { userAddress } = useAddress();

  // Set the initial visibility of the address form
  const [showAddressForm, setShowAddressForm] = useState(
    userAddress.length === 0
  );

  useEffect(() => {
    // Update the form visibility if userAddress changes
    setShowAddressForm(userAddress.length === 0);
  }, [userAddress]);

  return (
    <div className="w-full h-full  bg-white ">
      {/* header */}
      <div className="relative flex flex-row justify-around items-center pt-[18px] pb-2 mx-5 border-b-[1px] shadow-inner-bottom">
        <Link to="/">
          <div
            onClick={() => dispatch(resetBuyNowProduct())}
            className="cursor-pointer px-2 h-12 flex items-center"
          >
            <img className="w-36 mt-2" src={logoBlack} alt="logo" />
          </div>
        </Link>
        <div className="">
          <h1 className="text-3xl font-semibold">Checkout</h1>
        </div>
      </div>

      {/* addresssForm or userAddress and PaymentMethod */}
      <div className="flex flex-col mdl:flex-row mx-5 gap-6 mt-3 justify-center ">
        <div className="mdl:w-[61%] ">
          {showAddressForm || userAddress.length === 0 ? (
            <AddressForm setShowAddressForm={setShowAddressForm} />
          ) : (
            <UserAddresses setShowAddressForm={setShowAddressForm} />
          )}
          <div className="mt-3 border-b border-gray-500"></div>

          <PaymentMethod />
          <div className="mt-3 border-b border-gray-500"></div>
        </div>

        {/* OrderSummary */}
        <div className="mdl:w-[22%] h-full sticky top-3">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;