import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../actions";

class InformationPage extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="container">penis</div>;
  }
}

function mapStateToProps(state) {
  const { searchStr, itemsBySearchString } = state.items;
  const { isFetching, items } = itemsBySearchString[searchStr] || {
    searchStr,
    isFetching: true,
    items: []
  };
  console.log(items);
}

const connectedInformationPage = connect(mapStateToProps)(InformationPage);
export { connectedInformationPage as InformationPage };
