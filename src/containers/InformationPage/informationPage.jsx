import React, { Component } from "react";
import { connect } from "react-redux";

import { informationActions } from "../../actions";

class InformationPage extends Component {
  componentDidMount() {
    this.props.dispatch(informationActions.getInfo());
  }
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="container">penis</div>;
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedInformationPage = connect(mapStateToProps)(InformationPage);
export { connectedInformationPage as InformationPage };
