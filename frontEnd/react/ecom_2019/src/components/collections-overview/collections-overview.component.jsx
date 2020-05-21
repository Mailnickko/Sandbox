import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// import "./collections-overview.styles.scss";

import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = (state) => {
  const collectionsArr = state.shop.collections;
  return {
    collections: collectionsArr
      ? Object.keys(collectionsArr).map((key) => collectionsArr[key])
      : [],
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
