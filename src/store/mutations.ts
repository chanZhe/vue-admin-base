export default {
  changeLoading: (state: any, payload: any) => {
    if (payload.type === "increase") {
      state.loadingIndex++;
    } else {
      state.loadingIndex--;
    }
    return state;
  }
};
