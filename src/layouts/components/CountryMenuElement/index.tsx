import { Flex, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ForwardRefExoticComponent, memo, RefAttributes } from 'react';

interface Props {
  Icon: ForwardRefExoticComponent<RefAttributes<SVGSVGElement | null>>;
  to: string;
  navigateTo: (to: string) => void;
  name: string;
}

export const CountryMenuElement = memo(
  ({ Icon, to, navigateTo, name }: Props) => {
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
      <Flex gap='0.5rem'>
        <Icon />
        <Text
          onClick={() => navigateTo(to)}
          style={{ cursor: 'pointer', fontSize: '1.3rem' }}
          borderBottom='1px solid'
          width='80%'
          color={pathname === to ? 'rgba(242, 103, 0, 0.8)' : '#fff'}
          borderColor={
            pathname === to ? 'rgba(242, 103, 0, 0.8)' : 'transparent'
          }
        >
          {t(`menu.${name}`)}
        </Text>
      </Flex>
    );
  }
);
