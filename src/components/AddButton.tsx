import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AddButtonProps } from "../types";

function AddButton({ handleOpen }: AddButtonProps) {
  return (
    <Tooltip
      title="Add"
      sx={{
        position: "fixed",
        bottom: 20,
        left: { xs: "50%", md: 30 },
        transform: { xs: "translate(-50%, 0)", md: "none" },
      }}
    >
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
}

export default AddButton;
