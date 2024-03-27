import { AxiosError } from "axios";
import { removeFields } from "src/shared/utils";
import { axiosClient } from "src/shared/services/httpService";
import {
  FieldValidationError,
  FieldValidationErrorCodes,
  TagsApiError,
  TagsApiErrorCodes,
} from "./tags.errors";
import { UncheckedTag, Tag, TagsParams } from "./types";

export class TagsService {
  public async getTags(
    params: TagsParams
  ): Promise<{ items: Tag[]; hasMore: boolean }> {
    try {
      removeFields(params);
      const response = await axiosClient.get<{
        items: Tag[];
        has_more: boolean;
      }>(`tags?site=stackoverflow&key=rzL)B9GRLKBp8vQsT4vmag((`, {
        ...params,
      });

      const requiredFields = ["count", "name"];

      response.items.forEach((uncheckedTag: UncheckedTag) => {
        requiredFields.forEach((field) => {
          if (uncheckedTag[field] === undefined)
            throw new FieldValidationError(
              `No ${field} field`,
              FieldValidationErrorCodes.SomethingWentWrong
            );
        });
      });

      return {
        items: response.items.map((tag) => ({
          has_synonyms: tag.has_synonyms,
          is_moderator_only: tag.is_moderator_only,
          is_required: tag.is_required,
          count: tag.count,
          name: tag.name,
        })),
        hasMore: response.has_more,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data;
        if (data.error_name === "bad_parameter" && data.error_message)
          throw new TagsApiError(
            `Bad Parameter for ${data.error_message}`,
            TagsApiErrorCodes.BadParameter
          );

        if (data.error_name === "throttle_violation" && data.error_message)
          throw new TagsApiError(
            data.error_message,
            TagsApiErrorCodes.ThrottleViolation
          );
      }

      throw new TagsApiError(
        `Error while fetching tags ${error}`,
        TagsApiErrorCodes.Generic
      );
    }
  }
}
