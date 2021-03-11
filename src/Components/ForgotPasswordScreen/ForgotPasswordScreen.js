import React from "react";
import BigLogoHeader from "../Common/BigLogoHeader/BigLogoHeader";
import ResetPasswordCard from "./ResetPasswordCard/ResetPasswordCard";
function ForgotPasswordScreen() {
  return (
    <div className="wrapper centered">
      <BigLogoHeader></BigLogoHeader>
      <ResetPasswordCard></ResetPasswordCard>
    </div>
  );
}

export default ForgotPasswordScreen;
