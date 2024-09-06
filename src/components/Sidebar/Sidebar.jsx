import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  CompareArrows,
  History,
  Home,
  PlayArrow,
  Settings,
} from "@mui/icons-material";

const drawerWidth = 240;
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleDrawerToogle = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    navigate("/home");
  };

  const routes = {
    Dashboard: "/dashboard",
    "Historial de análisis": "/dashboard/historic-analysis",
    "Empezar análisis": "/dashboard/start-analysis",
    "Comparar canciones": "/dashboard/compare-songs",
    Configuración: "/dashboard/settings",
  };

  const handleMenuItemClick = (route) => {
    navigate(route);
    setOpen(false); // Cierra el Drawer
  };
  const drawer = (
    <div>
      <Typography sx={{ paddingTop: 7 }}></Typography>
      <List>
        {Object.keys(routes).map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => handleMenuItemClick(routes[text])}
            component={Link}
            to={routes[text]}
            sx={{
              backgroundColor:
                location.pathname === routes[text]
                  ? "var(--silver-color)"
                  : "inherit",
            }}
          >
            <ListItemIcon>
              {index === 0 ? <Home /> : null}
              {index === 1 ? <History /> : null}
              {index === 2 ? <PlayArrow /> : null}
              {index === 3 ? <CompareArrows /> : null}
              {index === 4 ? <Settings /> : null}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />

      <Button
        variant="contained"
        onClick={handleLogOut}
        sx={{
          margin: 2,
          position: "absolute",
          bottom: 0,
          backgroundColor: "#4B0082",
          "&:hover": { backgroundColor: "#8A2BE2" },
        }}
      >
        Cerrar Sesión
      </Button>
    </div>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
      <AppBar
        position="fixed"
        style={{
          background: "var(--primary-color)",
        }}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ flexGrow: 1 }}>
          {isMobile && (
            <IconButton
              color="inherit"
              size="large"
              edge="start"
              onClick={handleDrawerToogle}
            >
              <MenuIcon sx={{ color: "#C0C0C0" }} />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            sx={{
              color: "#f0f0f0",
            }}
          >
            Bienvenido a PlagiTune
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={open}
        onClose={handleDrawerToogle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: isMobile ? "block" : "flex",
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
