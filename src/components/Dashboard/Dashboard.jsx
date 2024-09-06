import Sidebar from "../Sidebar/Sidebar";
import { Box, Paper, Typography } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "../Profile/Profile";
import HistoricAnalysis from "./HistoricAnalysis/HistoricAnalysis";
import Clock from "./components/Clock/Clock";

const Dashboard = () => {
  const location = useLocation();

  const isDashboardBase = location.pathname === "/dashboard";

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: {
            xs: 8,
            sm: 10,
          },
          px: {
            xs: 2,
            sm: 10,
          },
          maxWidth: {
            xs: "100vh",
            sm: "100%",
          },
        }}
      >
        {isDashboardBase && (
          <>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "space-between",
              }}
            >
              <Profile />
              <Clock />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: {
                    xs: 1,
                    sm: 3,
                  },
                  width: {
                    xs: "100%",
                    sm: "43%",
                  },
                  height: "fit-content",
                }}
              >
                <Paper
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                    marginBottom: 2,
                    textAlign: "center",
                    backgroundColor: "#f5f5f5",
                    height: "fit-content",
                  }}
                >
                  <Typography variant="h7">Empezar Análisis</Typography>
                </Paper>
                <Paper
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                    marginBottom: 2,
                    textAlign: "center",
                    backgroundColor: "#f5f5f5",
                    height: "fit-content",
                  }}
                >
                  <Typography variant="h7">Comparar Canciónes</Typography>
                </Paper>
              </Box>
              <HistoricAnalysis />
            </Box>
          </>
        )}
        <Outlet />
      </Box>
    </div>
  );
};

export default Dashboard;
