import React from "react";
import styled from "styled-components";

interface ITopNavButton {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  imgSrc: string;
  disable?: boolean;
}

const TopNavButton = (props: ITopNavButton) => {
  return (
    <TopNavButtonStyled onClick={props.onClick} disable={props.disable}>
      <img src={props.imgSrc} alt="" />
    </TopNavButtonStyled>
  );
};

TopNavButton.defaultProps = {
  disable: false,
};

const TopNavButtonStyled = styled.div<{ disable?: boolean }>`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  cursor: pointer;
  opacity: ${({ disable }) => (disable ? 0.6 : 1)};
  &:hover {
    opacity: 0.9;
  }
`;

export default TopNavButton;