import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Modal as ModalPage } from "@mui/material";
import { ModalProps } from "../types";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

function Modal({ handleClose, isOpen }: ModalProps) {
  const postCardStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: 400 },
    height: 250,
    bgcolor: "background.default",
    color: "text.primary",
    borderRadius: 5,
    boxShadow: 24,
    p: 3,
  };

  return (
    <ModalPage
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={postCardStyle}>
        <Typography variant="h6" color="gray" textAlign="center">
          Create Post
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Travis Howard"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <Typography fontWeight={500}>Travis Howard</Typography>
        </Box>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="What's your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} my={3}>
          <EmojiEmotions color="primary" />
          <Image color="secondary" />
          <VideoCameraBack color="warning" />
          <PersonAdd color="error" />
        </Stack>
        <ButtonGroup
          fullWidth
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleClose}>Post</Button>
          <Button>
            <DateRange />
          </Button>
        </ButtonGroup>
      </Box>
    </ModalPage>
  );
}

export default Modal;
