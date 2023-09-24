import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import { SidebarProps } from "../types";

function Sidebar({ sidebarList }: SidebarProps) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ position: "fixed" }}>
        <List>
          {sidebarList.map(({ id, title, icon, link }) => (
            <Link to={link} key={id}>
              <ListItem disablePadding>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
