import { Box } from "@mui/material";
import admin from "../../assets/images/admin.png";
import "./Loader.scss";

const Loader = () => (
  <Box className="loader">
    <Box component="img" alt="loader" src={admin} height="50px" width="50px" />
  </Box>
);

export default Loader;
