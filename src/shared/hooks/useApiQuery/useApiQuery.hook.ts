import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  FieldValidationError,
  TagsApiError,
} from "../../services/api/tags/tags.errors";

export const useApiQuery = <
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
) => {
  const useQueryResult = useQuery<TQueryFnData, TError, TData, TQueryKey>(
    options
  );

  const customError = useMemo(() => {
    if (useQueryResult.error !== null) {
      if (useQueryResult.error instanceof TagsApiError) {
        return useQueryResult.error;
      }

      if (useQueryResult.error instanceof FieldValidationError) {
        return useQueryResult.error;
      }
    }

    return undefined;
  }, [useQueryResult.error]);

  return {
    ...useQueryResult,
    customError,
  };
};
