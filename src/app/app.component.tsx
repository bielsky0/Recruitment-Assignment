import { ErrorBoundary, Layout } from "src/shared/components";
import { Tags } from "src/views/tags";

export const App = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <Tags />
      </ErrorBoundary>
    </Layout>
  );
};
