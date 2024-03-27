export enum Order {
  descending = "desc",
  ascending = "asc",
}

export enum Sort {
  popular = "popular",
  activity = "activity",
  name = "name",
}

export interface TagsFiltersState {
  search: string;
  pageSize: number;
  order: Order;
  sort: Sort;
  page: number;
}

export enum ReducerActions {
  updateSearch = "updateSearch",
  updatePageSize = "updatePageSize",
  updateOrder = "updateOrder",
  updateSort = "updateSort",
  updatePage = "updatePage",
}

export type UpdateSearchAction = {
  type: ReducerActions.updateSearch;
  payload: { newSearch: string };
};

export type UpdatePageSizeAction = {
  type: ReducerActions.updatePageSize;
  payload: { newPageSize: number };
};

export type UpdateOrderAction = {
  type: ReducerActions.updateOrder;
  payload: { newOrder: Order };
};

export type UpdateSortAction = {
  type: ReducerActions.updateSort;
  payload: { newSort: Sort };
};

export type UpdatePageAction = {
  type: ReducerActions.updatePage;
  payload: { newPage: number };
};

export type Actions =
  | UpdateSearchAction
  | UpdatePageSizeAction
  | UpdateOrderAction
  | UpdateSortAction
  | UpdatePageAction;
