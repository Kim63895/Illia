import { Box, Button } from "@mui/material";
import Icon from "../Icons/Icon";
import { useNavigate } from "react-router-dom";


export const Header = () => {
const navigate = useNavigate();
  return (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 10px",
    }}
  >
    <Box sx={{ pl: "8px", pt: "8px", color: "white", bgcolor: "primary.main" }}>
      <Icon />
    </Box>
    <Button
      sx={{ color: "primary.main", bgcolor: "white", height: "20px" }}
      onClick={() => navigate("/login")}
    >
      Login
    </Button>
  </Box>
  )
};
export default Header;
