

export const createFakeStore = (fakeData) => ({
  getState() {
    return fakeData
  }
});

const store = createFakeStore({});

export const dispatchWithMiddlewareAndStore = (middleware, store=store, action) => {
  let dispatched = null;
  const dispatch = middleware(store)(
    actionAttempt => dispatched = actionAttempt
  );
  dispatch(action);
  return dispatched;
};