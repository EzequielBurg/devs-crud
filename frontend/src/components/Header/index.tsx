import React from 'react';
import { Heading, Button, useDisclosure } from '@chakra-ui/react';
import { CreateDev } from '../CreateDev';

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <Heading display="flex" flexDir="column" top="0">
        Devs CRUD
      </Heading>

      <Button marginTop="2.5rem" width="100%" maxWidth="60" onClick={onOpen}>
        Cadastrar novo dev
      </Button>
      <CreateDev isOpen={isOpen} onClose={onClose} />
    </header>
  );
};
