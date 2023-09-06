import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenPayload";

const store = configureStore({
    //   reducer: counterSlice.reducer,
    reducer: {
        token: tokenSlice.reducer,
    },
});

export default store