declare type RootState = ReturnType<typeof import("./index").store.getState>;
declare type AppStore = ReturnType<typeof import("./index").setupStore>;
declare type AppDispatch = AppStore["dispatch"];
