import React from "../../node_modules/react";
import { Router, Route } from "../../node_modules/react-router-dom";
import { connect } from "../../node_modules/react-redux";

import { history } from "../helpers";
import { alertActions } from "../actions";
import { PrivateRoute } from "../components";
import { RegisterPage } from "../containers/RegisterPage";
import { SearchPage } from "../containers/SearchPage";
import { LoginPage } from "../containers/LoginPage";
import { InformationPage } from "../containers/InformationPage";

import * as sccs from "./styles/app-styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <React.Fragment>
        {/* <div className="pull-right glyphicon glyphicon-log-out app-font-color pager-cursor logout-position">
          Logout
        </div> */}
        <div className="jumbotron app-font-color">
          <div className="container">
            <div className="col-sm-8 col-sm-offset-2">
              {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              )}
              <Router history={history}>
                <div>
                  <PrivateRoute exact path="/" component={SearchPage} />
                  <PrivateRoute
                    exact
                    path="/info"
                    component={InformationPage}
                  />
                  <Route path="/register" component={RegisterPage} />
                  <Route path="/login" component={LoginPage} />
                </div>
              </Router>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
