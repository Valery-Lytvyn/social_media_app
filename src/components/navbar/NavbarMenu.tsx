import { Link } from "react-router-dom";
import { Avatar, Menu, MenuItem, Divider, ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { ROUTES } from "../../routing/routes";
import { NavbarMenuProps } from "../../types";

const iconStyle = {
  mr: 2,
  width: 24,
  height: 24,
};

function NavbarMenu({ anchorEl, open, handleClose }: NavbarMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClick={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Link to={ROUTES.profile}>
        <MenuItem onClick={handleClose}>
          <Avatar sx={iconStyle} /> Profile
        </MenuItem>
      </Link>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Logout sx={iconStyle} />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}

export default NavbarMenu;
