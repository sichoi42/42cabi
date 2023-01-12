import React from "react";
import ModalContainer from "@/modals/ModalContainer";
import { IModalContents } from "@/modals/ModalContainer";
import { additionalModalType, modalPropsMap } from "@/maps";
import CabinetStatus from "@/types/enum/cabinet.status.enum";
import errorIcon from "@/assets/images/errorIcon.svg";

const UnavailableModal: React.FC<{
  status: CabinetStatus | additionalModalType;
  closeModal: React.MouseEventHandler;
}> = (props) => {
  const modalContents: IModalContents = {
    type: "noBtn",
    icon: errorIcon,
    title: modalPropsMap[props.status].title,
    closeModal: props.closeModal,
  };

  return <ModalContainer modalContents={modalContents} />;
};

export default UnavailableModal;
