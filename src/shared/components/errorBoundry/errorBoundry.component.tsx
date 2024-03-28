import { Component, ErrorInfo, ReactNode } from "react";
import { logger } from "src/shared/services";
import { Alert } from "@mui/material";

export interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <Alert severity="error">Sorry.. there was an error</Alert>;
    }

    return this.props.children;
  }
}
