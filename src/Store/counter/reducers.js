import counterType from "./action-type";
const initialState = {
  value: 0,
  visible: true
};
export const counter = (state = initialState,action = {}) =>{
  console.log(action);
  switch (action.type) {
    case counterType.ADD:
      return { ...state, ...{value: state.value + 1}};
    case counterType.SUBTRACT:
      return { ...state, ...{ value: state.value - 1 }};
    case counterType.CHANGE_VISIBILITY:
      return { ...state,...{visible:action.visible}}
    default:
      return state;
  }
}