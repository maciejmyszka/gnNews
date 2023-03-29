import { ErrorBoundary } from 'react-error-boundary';
import { ChildrenProps } from 'types/ChildrenProps';
import { ErrorBoundary as Boundary } from 'layouts/components/ErrorBoundary';

export const ErrorBoundaryProvider = ({ children }: ChildrenProps) => (
  <ErrorBoundary FallbackComponent={Boundary}>{children}</ErrorBoundary>
);
