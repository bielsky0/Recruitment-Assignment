import { useCallback, useContext } from "react";
import { TagsFilterContext } from "../../../contexts";
import {
  Order,
  ReducerActions,
  Sort,
} from "../../../contexts/tagsFilter/tagsFilter.types";

export const useTagsFilter = () => {
  const context = useContext(TagsFilterContext);

  if (!context) throw new Error("TagsFilterContext used outside of provider");

  const {
    state: { search, sort, order, page, pageSize },
    dispatch,
  } = context;

  const updateSearch = useCallback(
    (newSearch: string) => {
      dispatch({ type: ReducerActions.updateSearch, payload: { newSearch } });
    },
    [dispatch]
  );

  const updateSort = useCallback(
    (newSort: Sort) => {
      dispatch({ type: ReducerActions.updateSort, payload: { newSort } });
    },
    [dispatch]
  );

  const updateOrder = useCallback(
    (newOrder: Order) => {
      dispatch({ type: ReducerActions.updateOrder, payload: { newOrder } });
    },
    [dispatch]
  );

  const updatePage = useCallback(
    (newPage: number) => {
      dispatch({ type: ReducerActions.updatePage, payload: { newPage } });
    },
    [dispatch]
  );

  const updatePageSize = useCallback(
    (newPageSize: number) => {
      dispatch({
        type: ReducerActions.updatePageSize,
        payload: { newPageSize },
      });
    },
    [dispatch]
  );

  return {
    search,
    sort,
    order,
    page,
    pageSize,
    updateOrder,
    updatePage,
    updatePageSize,
    updateSearch,
    updateSort,
  };
};
