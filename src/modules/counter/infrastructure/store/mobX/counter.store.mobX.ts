import { observable, observe } from "mobx"

export const mobXStore = observable({
  count: 0
});

export { observe };
