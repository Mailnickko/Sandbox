import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log("collec", collection);
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const collectionsArr = state.shop.collections;
  const urlToMatch = ownProps.match.params.collectionId;
  return {
    collection: collectionsArr ? collectionsArr[urlToMatch] : null,
  };
};

export default connect(mapStateToProps)(CollectionPage);
