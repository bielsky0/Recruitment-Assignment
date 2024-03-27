import { ErrorBoundary, Layout } from "../shared/components";
import { Tags } from "../views/tags";

export const App = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <Tags />
      </ErrorBoundary>
    </Layout>
  );
};
