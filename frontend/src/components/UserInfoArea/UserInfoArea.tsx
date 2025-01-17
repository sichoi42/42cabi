import React, { useState } from "react";
import styled from "styled-components";
import ButtonContainer from "@/components/Common/Button";
import BanModal from "@/components/Modals/BanModal/BanModal";
import AdminReturnModal from "@/components/Modals/ReturnModal/AdminReturnModal";
import ChangeToHTML from "@/components/TopNav/SearchBar/SearchListItem/ChangeToHTML";
import {
  cabinetIconSrcMap,
  cabinetLabelColorMap,
  cabinetStatusColorMap,
} from "@/assets/data/maps";
import cabiLogo from "@/assets/images/logo.svg";
import CabinetStatus from "@/types/enum/cabinet.status.enum";
import CabinetType from "@/types/enum/cabinet.type.enum";

export interface ISelectedUserInfo {
  name: string;
  userId: number | null;
  isBanned: boolean;
  bannedInfo?: string;
}

const UserInfoArea: React.FC<{
  selectedUserInfo?: ISelectedUserInfo;
  closeCabinet: () => void;
  openLent: React.MouseEventHandler;
}> = (props) => {
  const { selectedUserInfo, closeCabinet, openLent } = props;
  const [showBanModal, setShowBanModal] = useState<boolean>(false);

  const handleOpenBanModal = () => {
    setShowBanModal(true);
  };
  const handleCloseBanModal = () => {
    setShowBanModal(false);
  };

  if (selectedUserInfo === undefined)
    return (
      <NotSelectedStyled>
        <CabiLogoStyled src={cabiLogo} />
        <TextStyled fontSize="1.125rem" fontColor="var(--gray-color)">
          사물함/유저를 <br />
          선택해주세요
        </TextStyled>
      </NotSelectedStyled>
    );

  return (
    <CabinetDetailAreaStyled>
      <LinkTextStyled onClick={openLent}>대여기록</LinkTextStyled>
      <TextStyled fontSize="1rem" fontColor="var(--gray-color)">
        대여 중이 아닌 사용자
      </TextStyled>
      <CabinetRectangleStyled
        cabinetStatus={
          selectedUserInfo.isBanned ? CabinetStatus.OVERDUE : CabinetStatus.FULL
        }
      >
        {selectedUserInfo.isBanned ? "!" : "-"}
      </CabinetRectangleStyled>
      <CabinetTypeIconStyled cabinetType={CabinetType.PRIVATE} />
      <TextStyled fontSize="1rem" fontColor="black">
        {selectedUserInfo.name}
      </TextStyled>

      <CabinetInfoButtonsContainerStyled>
        <ButtonContainer
          onClick={handleOpenBanModal}
          text="밴 해제"
          theme="fill"
          disabled={selectedUserInfo.isBanned === false}
        />
        <ButtonContainer onClick={closeCabinet} text="닫기" theme="grayLine" />
      </CabinetInfoButtonsContainerStyled>
      {selectedUserInfo.isBanned && (
        <CabinetLentDateInfoStyled textColor="var(--expired)">
          {selectedUserInfo.bannedInfo!}
        </CabinetLentDateInfoStyled>
      )}
      {showBanModal && (
        <BanModal
          userId={selectedUserInfo.userId}
          closeModal={handleCloseBanModal}
        />
      )}
    </CabinetDetailAreaStyled>
  );
};

const NotSelectedStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CabinetDetailAreaStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CabiLogoStyled = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 10px;
`;

const CabinetTypeIconStyled = styled.div<{ cabinetType: CabinetType }>`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  margin-bottom: 10px;
  background-image: url(${(props) => cabinetIconSrcMap[props.cabinetType]});
  background-size: contain;
  background-repeat: no-repeat;
`;

const LinkTextStyled = styled.div`
  position: absolute;
  top: 3%;
  right: 6%;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 0.875rem;
  color: var(--lightpurple-color);
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;

const TextStyled = styled.p<{ fontSize: string; fontColor: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  line-height: 28px;
  color: ${(props) => props.fontColor};
  text-align: center;
  white-space: pre-line;
  & strong {
    color: var(--main-color);
  }
`;

const CabinetRectangleStyled = styled.div<{
  cabinetStatus: CabinetStatus;
}>`
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 3vh;
  background-color: ${(props) => cabinetStatusColorMap[props.cabinetStatus]};
  font-size: 32px;
  color: ${(props) => cabinetLabelColorMap[props.cabinetStatus]};
  text-align: center;
`;

const CabinetInfoButtonsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 210px;
  margin: 3vh 0;
  width: 100%;
`;

const CabinetLentDateInfoStyled = styled.div<{ textColor: string }>`
  color: ${(props) => props.textColor};
  font-size: 1rem;
  font-weight: 700;
  line-height: 28px;
  white-space: pre-line;
  text-align: center;
`;

export default UserInfoArea;
