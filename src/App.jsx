import "./App.css";
import Home from "./Pages/Home/Home";
import AuthLayout from "./layout/auth/AuthLayout";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import SettingsPages from "./Pages/Dashboard/SettingsPages";
import { Route, Routes, useNavigate } from "react-router-dom";
import CompareSongsPage from "./Pages/Dashboard/CompareSongsPage";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import StartAnalysisPage from "./Pages/Dashboard/StartAnalysisPage";
import HistoricAnalysisPage from "./Pages/Dashboard/HistoricAnalysisPage";
import DetailPage from "./components/Dashboard/HistoricAnalysis/DetailPage";
import SignUpPage from "./Pages/Auth/SignUp";
import SignInPage from "./Pages/Auth/SignIn";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <ClerkProvider
          routerPush={(to) => navigate(to)}
          routerReplace={(to) => navigate(to, { replace: true })}
          publishableKey={PUBLISHABLE_KEY}
          appearance={{
            layout: {
              socialButtonsPlacement: "bottom",
            },
            variables: {
              colorPrimary: "#8A2BE2",
              colorBackground: "#F0F0F0",
              colorInputBackground: "#F0F0F0",
              colorInputText: "#000000",
            },
          }}
        >
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          {/* <Route
            path="/*"
            element={
              <AuthLayout>
                <SignIn signUpUrl="/sign-up" />
              </AuthLayout>
            }
          /> */}

          <Route path="/dashboard" element={<DashboardPage />}>
            <Route path="settings" element={<SettingsPages />} />
            <Route
              path="historic-analysis"
              element={<HistoricAnalysisPage />}
            />
            <Route
              path="/dashboard/historic-analysis/:slug"
              element={<DetailPage />}
            />
            <Route path="start-analysis" element={<StartAnalysisPage />} />
            <Route path="compare-songs" element={<CompareSongsPage />} />
          </Route>

          {/* <Routes path="/" element={<Landing />} /> */}
          <Route path="/" element={<Home />} />
        </ClerkProvider>
      </Routes>
    </>
  );
}

export default App;
