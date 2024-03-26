import { useEffect } from "react";
import { tagsService } from "../shared/services/api";

export const App = () => {
  useEffect(() => {
    tagsService
      .getTags()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <>Mediporta</>;
};
