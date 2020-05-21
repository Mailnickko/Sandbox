import { connect } from "react-redux";
import { compose } from "redux";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = (state) => ({
  isLoading: state.shop.isFetching,
});

// compose curries from right to left args
// same as writing: connect(mapStateToProps)(WithSpinner(CollectionsOverview))
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
