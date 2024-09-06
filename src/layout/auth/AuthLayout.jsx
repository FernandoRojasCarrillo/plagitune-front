import {
  SignedIn,
  SignedOut,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import style from "./AuthLayout.module.css";
import { useEffect } from "react";
import { OrganizationSwitcher } from "@clerk/clerk-react";
import AuthLoader from "../../components/AuthLoader/AuthLoader";

function AuthLayout({ children }) {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      // Check if the user was created recently (for example, in the last 5 minutes)
      const userCreatedRecently =
        new Date() - new Date(user.createdAt) < 5 * 60 * 1000;

      if (userCreatedRecently) {
        console.log("El usuario se acaba de registrar");
      }
      // else {
      //   navigate("/home");
      // }
    }
  }, [isLoaded]);

  return (
    <>
      <SignedOut>
        <div className={style.container}>
          <div className={style.form}>{children}</div>

          <div className={style.cover}></div>
        </div>
      </SignedOut>

      <SignedIn>
        <UserButton />
        <OrganizationSwitcher />
        {/* <AuthLoader /> */}
      </SignedIn>
    </>
  );
}

export default AuthLayout;
