import { Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FallbackProps } from 'react-error-boundary';

export const ErrorBoundary = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Text>{`${t('errors.crashed')}: ${error?.message ?? ''}`}</Text>
      <Button onClick={resetErrorBoundary}>{t('errors.tryAgain')}</Button>
    </>
  );
};
