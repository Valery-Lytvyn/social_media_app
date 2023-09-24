import {
  Box,
  Typography,
  Badge,
  Avatar,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ServiceButtonsProps } from "../../types";
import { ROUTES } from "../../routing/routes";
import { Link } from "react-router-dom";

function ServiceButtons({
  handleClick,
  open,
  toggleTheme,
  modeTheme,
}: ServiceButtonsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "1rem",
        width: { xs: "100%", sm: "fit-content" },
      }}
    >
      <ListItemIcon onClick={toggleTheme}>
        {modeTheme === "light" ? <ModeNightIcon /> : <LightModeIcon />}
      </ListItemIcon>
      <Link to={ROUTES.mail}>
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </Link>
      <Link to={ROUTES.notification}>
        <Badge badgeContent={2} color="error">
          <NotificationsIcon />
        </Badge>
      </Link>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar
          src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          sx={{ width: 30, height: 30 }}
        />
        <Box
          sx={{
            maxWidth: "100px",
            textOverflow: "ellipsis",
            mx: 2,
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={100}
            fontSize={"0.7rem"}
            color="white"
          >
            Name
          </Typography>
        </Box>
      </IconButton>
    </Box>
  );
}

export default ServiceButtons;
