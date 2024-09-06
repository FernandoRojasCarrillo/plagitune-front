import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ViewDetailsSlug = ({ slug }) => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          color: "var(--text-color-primary)",
          backgroundColor: "var(--primary-color)",
          "&:hover": {
            backgroundColor: "var(--blue-violet-color)",
            color: "var(--text-color-primary)",
          },
        }}
      >
        <Link
          to={`/dashboard/historic-analysis/${slug}`}
          style={{ textDecoration: "none", color: "var(--text-color-primary)" }}
        >
          Ver Detalle
        </Link>
      </Button>
    </div>
  );
};

export default ViewDetailsSlug;
