import { ReactElement } from "react";
import { render } from "@testing-library/react";

import { ReactQueryProvider } from "src/app/providers";
import { TagsFilterProvider } from "src/contexts";

interface ProvidersWrapperProps {
  children: React.ReactNode;
}

export const ProviderWrapper = ({ children }: ProvidersWrapperProps) => {
  return (
    <ReactQueryProvider>
      <TagsFilterProvider>{children}</TagsFilterProvider>
    </ReactQueryProvider>
  );
};

export const makeContextRenderer = <T extends unknown>(
  component: (props: T | Record<string, never>) => ReactElement
) => {
  return (props?: T) => {
    return render(component(props ?? {}), {
      wrapper: ({ children }: ProvidersWrapperProps) => (
        <ProviderWrapper>{children}</ProviderWrapper>
      ),
    });
  };
};
