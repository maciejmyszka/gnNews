import { SettingsIcon } from '@chakra-ui/icons';
import { MobileSettingsModal } from 'layouts/components/MobileSettingsModal';
import { useState } from 'react';

export const MobileNavBar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  return (
    <>
      <SettingsIcon
        onClick={() => setIsSettingsOpen((prevState) => !prevState)}
        color='main'
        fontSize='25px'
        cursor='pointer'
        mr='1rem'
      />

      {isSettingsOpen && (
        <MobileSettingsModal
          isSettingsOpen={isSettingsOpen}
          setIsSettingsOpen={setIsSettingsOpen}
        />
      )}
    </>
  );
};
