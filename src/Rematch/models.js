export const channels = {
  state: ['general'], // initial state
  reducers: {
    // handle state changes with pure functions
    addChannel(state, payload) {
      return state.push(payload);
    },
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async fetchChannels() {
      const response = await AxiosFetch();
      return response;
    }
  }
};
