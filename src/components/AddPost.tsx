import { useState } from "react";
import { AddButton, Modal } from ".";

function AddPost() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AddButton handleOpen={handleOpen} />
      <Modal handleClose={handleClose} isOpen={isOpen} />
    </>
  );
}

export default AddPost;
