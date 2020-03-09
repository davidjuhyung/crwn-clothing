import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../hoc/with-spinner/with-spinner.component';
import collectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsFetching
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(collectionOverview);

export default CollectionsOverviewContainer;
