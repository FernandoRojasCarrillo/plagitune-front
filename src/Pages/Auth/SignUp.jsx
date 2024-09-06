import { SignUp } from "@clerk/clerk-react";
import AuthLayout from "../../layout/auth/AuthLayout";

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUp
        signInUrl="/sign-in"
        forceRedirectUrl="/home"
        redirectUrl="/sign-up" // Sometimes the (forceRedirectUrl) doesn't work properly, this is a fallback
      />
    </AuthLayout>
  );
};

export default SignUpPage;
