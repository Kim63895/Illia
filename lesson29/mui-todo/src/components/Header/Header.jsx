import { Button, Typography, Divider } from "@mui/material";
function Header() {
  return (
    <>
      <Button color="inherit" href="/">
        Home
      </Button>
      <Button color="inherit" href="/todo">
        TODO
      </Button>
      <Button color="inherit" href="/swapi">
        SWAPI
      </Button>
      <Divider sx={{ my: 2 }} />
    </>
  );
}
export default Header
