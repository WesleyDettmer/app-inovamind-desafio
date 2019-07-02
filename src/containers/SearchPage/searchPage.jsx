import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../../components/search";
import Results from "../../components/results";
import { fetchItemsIfNeeded } from "../../actions/items.actions";
import Pagination from "../../components/pagination-component/pagination";
import { paginate } from "../../components/pagination-component/paginate";
import PropTypes from "prop-types";

class SearchPage extends Component {
  state = {
    pageSize: 4,
    currentPage: 1
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, searchStr } = this.props;
    dispatch(fetchItemsIfNeeded(searchStr));
  }

  handleChange(searchStr) {
    this.props.dispatch(fetchItemsIfNeeded(searchStr));
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { searchStr, items, isFetching } = this.props;
    const { pageSize, currentPage } = this.state;

    const cards = paginate(items, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="container">
          <header className="header">
            <Search value={searchStr} onChange={this.handleChange} />
          </header>
          <section className="content">
            {!isFetching && items.length === 0 && <h2>No Results</h2>}
            {items.length > 0 && <Results items={cards} />}
          </section>
        </div>
        <Pagination
          itemsCount={items.length + 1}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

SearchPage.propTypes = {
  searchStr: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  const { searchStr, itemsBySearchString } = state.items;
  const { isFetching, items } = itemsBySearchString[searchStr] || {
    searchStr,
    isFetching: true,
    items: []
  };
  return {
    searchStr,
    items,
    isFetching
  };
}

const connectedSearchPage = connect(mapStateToProps)(SearchPage);
export { connectedSearchPage as SearchPage };
