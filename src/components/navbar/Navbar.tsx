import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routing/routes";
import { ServiceButtons } from "..";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";
import useNavbar from "../../hooks/useNavbar";
import { NavbarProps } from "../../types";

function Navbar({ toggleTheme, modeTheme }: NavbarProps) {
  const { anchorEl, open, handleClick, handleClose } = useNavbar();

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: ".5rem",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          py: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: "center", width: { xs: "100%", sm: "fit-content" } }}
        >
          <Link to={ROUTES.index}>LOGO</Link>
        </Typography>
        <NavbarSearch />
        <ServiceButtons
          open={open}
          handleClick={handleClick}
          toggleTheme={toggleTheme}
          modeTheme={modeTheme}
        />
        <NavbarMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
