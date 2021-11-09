import React from 'react';
import { Heading, Button, useDisclosure } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { CreateDev } from '../CreateDev';

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <Heading display="flex" flexDir="column" top="0">
        Devs CRUD
      </Heading>

      <Button
        leftIcon={<FiPlus />}
        marginTop="2.5rem"
        padding="5"
        onClick={onOpen}
      >
        Cadastrar novo dev
      </Button>
      <CreateDev isOpen={isOpen} onClose={onClose} />
    </header>
  );
};
