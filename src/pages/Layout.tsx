import { Outlet } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { AddPost, Navbar, Rightbar, Sidebar } from "../components";
import { sidebarList } from "../constants/sidebarList";
import useTheme from "../hooks/useTheme";

function Layout() {
  const { modeTheme, appTheme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{ minHeight: "100%" }}
      >
        <Navbar toggleTheme={toggleTheme} modeTheme={modeTheme} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar sidebarList={sidebarList} />
          <Box flex={4}>
            <Outlet />
          </Box>
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
