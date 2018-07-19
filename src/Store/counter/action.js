import counter from './action-type';
export const add = () => ({ type: counter.ADD });
export const subtract = () => ({ type: counter.SUBTRACT });
export const changeVisibility = visible => ({
  type: counter.CHANGE_VISIBILITY,
  visible
});
