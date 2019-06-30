import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../../components/search";
import Results from "../../components/results";
import { fetchItemsIfNeeded } from "../../actions/items";
import PropTypes from "prop-types";

class SearchPage extends Component {
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

  render() {
    const { searchStr, items, isFetching } = this.props;
    return (
      <div className="container">
        <header className="header">
          <Search value={searchStr} onChange={this.handleChange} />
        </header>
        <section className="content">
          {!isFetching && items.length === 0 && <h2>No Results</h2>}
          {items.length > 0 && <Results items={items} />}
        </section>
      </div>
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
