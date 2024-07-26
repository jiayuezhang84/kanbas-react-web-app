import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import account from "./Account/reducer"
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    account
  },
});
export default store;