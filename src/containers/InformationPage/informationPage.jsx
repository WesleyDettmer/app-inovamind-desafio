import React, { Component } from "react";
import { connect } from "react-redux";

import { informationActions } from "../../actions";
import InformationResults from "../../components/information/index";

class InformationPage extends Component {
  componentDidMount() {
    this.props.dispatch(informationActions.getInfo());
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    return (
      <div className="container">
        <section className="content">
          {<InformationResults items={location.state.item} />}
        </section>
      </div>
    );
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
