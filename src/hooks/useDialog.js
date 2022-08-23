import { useState } from "react";

const useDialog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOpen = (e) => {
    setIsModalOpen(true);
  };

  const handleClose = (e) => {
    setIsModalOpen(false);
  };
  return [isModalOpen, handleClickOpen, handleClose];
};

export default useDialog;
