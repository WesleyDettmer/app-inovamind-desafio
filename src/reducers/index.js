import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import items from "./items.reducer";
import { registration } from "./registration.reducer";
import { loadLiterals } from "./literals.reducer";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  items,
  registration,
  loadLiterals
});

export default rootReducer;
