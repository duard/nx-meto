export default class MenuState {
  Menus: Array<any>;
  MenuErrors: Error;
}

export const initializeState = (): MenuState => {
  return { Menus: Array<any>(), MenuErrors: null };
};
