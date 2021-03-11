import React from "react";
import BigLogoHeader from "../Common/BigLogoHeader/BigLogoHeader";
import LoginCard from "./LoginCard/LoginCard";
function LoginScreen() {
  return (
    <div className="wrapper centered">
      <BigLogoHeader></BigLogoHeader>
      <LoginCard></LoginCard>
    </div>
  );
}

export default LoginScreen;
