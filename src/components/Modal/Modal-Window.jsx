import { Modal, Box } from "@mui/material";
import sprite from "../../images/sprite.svg";
import {
  ButtonClose,
  CarDescription,
  CarTitle,
  ImgWrap,
} from "./Modal-Window.styled";
const MyModal = ({ open, onClose, product }) => {
  const { image, _id, description, name } = product;

  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(18, 20, 23, 0.50)",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          borderRadius: "24px",
          padding: "40px",
          width: "540px",

          maxHeight: "90vh",
          overflowY: "scroll",
        }}
      >
        <ButtonClose type="button" onClick={onClose}>
          <svg width="24px" height="24px" stroke="#121417">
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </ButtonClose>
        <Box>
          <ImgWrap>
            <img src={image} alt="products" />
          </ImgWrap>

          <CarTitle>{name}</CarTitle>
          <CarDescription>{description}</CarDescription>
        </Box>
      </Box>
    </Modal>
  );
};

export default MyModal;
