import {
  Actions,
  Order,
  ReducerActions,
  Sort,
  TagsFiltersState,
} from "./tagsFilter.types";

export const INITIAL_STATE: TagsFiltersState = {
  search: "",
  page: 1,
  pageSize: 8,
  sort: Sort.popular,
  order: Order.descending,
};

export const reducer = (
  state: TagsFiltersState,
  action: Actions
): TagsFiltersState => {
  switch (action.type) {
    case ReducerActions.updateSearch:
      const { newSearch } = action.payload;

      return { ...state, search: newSearch };
    case ReducerActions.updateOrder:
      const { newOrder } = action.payload;

      return { ...state, order: newOrder };
    case ReducerActions.updateSort:
      const { newSort } = action.payload;

      return { ...state, sort: newSort };
    case ReducerActions.updatePage:
      const { newPage } = action.payload;

      return { ...state, page: newPage };
    case ReducerActions.updatePageSize:
      const { newPageSize } = action.payload;

      return { ...state, pageSize: newPageSize };
    default:
      throw Error("Cannot resolve TagsFilter Reducer Action");
  }
};
