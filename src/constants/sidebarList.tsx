import { ROUTES } from "../routing/routes";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { SidebarItems } from "../types";

export const sidebarList: SidebarItems[] = [
  { id: 1, title: "Home", icon: <HomeIcon />, link: ROUTES.index },
  { id: 2, title: "Friends", icon: <PersonIcon />, link: ROUTES.friends },
  { id: 3, title: "Settings", icon: <SettingsIcon />, link: ROUTES.settings },
  { id: 4, title: "Profile", icon: <AccountBoxIcon />, link: ROUTES.profile },
];
