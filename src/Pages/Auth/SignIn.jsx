import { SignIn } from "@clerk/clerk-react";
import React from "react";
import AuthLayout from "../../layout/auth/AuthLayout";

const SignInPage = () => {
  return (
    <AuthLayout>
      <SignIn
        signUpUrl="/sign-up"
        forceRedirectUrl="/sign-in"
        redirectUrl="/sign-in" // Sometimes the (forceRedirectUrl) doesn't work properly, this is a fallback
      />
    </AuthLayout>
  );
};

export default SignInPage;
