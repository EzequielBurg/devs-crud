import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Button,
} from '@chakra-ui/react';
import { FiTrash } from 'react-icons/fi';
import { useDev } from '../../hooks/devs';
import { CrudFeedback } from '../CrudFeedback';

interface IDeleteDevProps {
  devToDelete: string;
  isOpen: boolean;
  onClose: () => void;
}

export const DeleteDev: React.FC<IDeleteDevProps> = ({
  isOpen,
  onClose,
  devToDelete,
}) => {
  const { showForm, setShowForm, loading, deleteDev, feedbackMessage } =
    useDev();

  const handleClose = () => {
    setShowForm(true);
    onClose();
  };

  return (
    <Modal isCentered size="lg" isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Excluir dev</ModalHeader>
        <ModalCloseButton />

        {showForm ? (
          <>
            <ModalBody>
              <Text fontSize="medium">
                Tem certeza que deseja excluir este dev?
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                leftIcon={<FiTrash />}
                colorScheme="red"
                onClick={() => deleteDev(devToDelete)}
              >
                Excluir
              </Button>
            </ModalFooter>
          </>
        ) : (
          <CrudFeedback loading={loading} feedbackMessage={feedbackMessage} />
        )}
      </ModalContent>
    </Modal>
  );
};
