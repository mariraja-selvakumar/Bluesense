import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import admin from "../../assets/images/admin.png";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => navigate(path);

  return (
    <Box className="navbar">
      <Box
        component="img"
        className="navbar-img"
        alt="logo"
        src={admin}
        onClick={() => handleClick("/")}
      />
    </Box>
  );
};

export default Navbar;
