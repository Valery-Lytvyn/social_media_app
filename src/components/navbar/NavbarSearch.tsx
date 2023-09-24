import { useState } from "react";
import { Box, InputBase } from "@mui/material";

function NavbarSearch() {
  const [searchText, setSearchText] = useState("");

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "40%" },
        order: { xs: 4, sm: 0 },
        p: 1,
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchText("");
        }}
      >
        <InputBase
          type="text"
          placeholder="Search…"
          inputProps={{ "aria-label": "text" }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{
            borderRadius: 1,
            bgcolor: "white",
            color: "black",
            fontWeight: 400,
            px: 1,
            width: "100%",
          }}
        />
      </form>
    </Box>
  );
}

export default NavbarSearch;
