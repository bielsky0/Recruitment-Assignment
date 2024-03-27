import { Dispatch, createContext, useReducer } from "react";
import { INITIAL_STATE, reducer } from "./tagsFilter.reducer";
import { TagsFiltersState } from "./tagsFilter.types";

interface AuthReducer {
  state: TagsFiltersState;
  dispatch: Dispatch<any>;
}

export interface TagsFilterProviderProps {
  children: React.ReactNode;
}

export const TagsFilterContext = createContext<AuthReducer | undefined>(
  undefined
);

export const TagsFilterProvider = ({ children }: TagsFilterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <TagsFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </TagsFilterContext.Provider>
  );
};
