import React from "react";
import { withRouter } from "react-router-dom"; // HOC so child component has access to history data

// import "./menu-item.styles.scss";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item.styles";

const MenuItem = (props) => {
  const { title, imageUrl, size } = props;
  const { history, match, linkUrl } = props; // included because of withRouter
  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className="background-image"
      ></BackgroundImageContainer>
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
