import React, { useState } from 'react';
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { initialDev, useDev } from '../../hooks/devs';
import { CrudFeedback } from '../CrudFeedback';
import { BaseForm } from '../BaseForm';

interface ICreateDevProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateDev: React.FC<ICreateDevProps> = ({ isOpen, onClose }) => {
  const { registerDev, loading, feedbackMessage, showForm, setShowForm } =
    useDev();

  const [form, setForm] = useState(initialDev);

  const handleClose = () => {
    setForm(initialDev);
    setShowForm(true);
    onClose();
  };

  return (
    <Modal isCentered size="lg" isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar dev</ModalHeader>
        <ModalCloseButton />

        {showForm ? (
          <form onSubmit={() => registerDev(form)}>
            <BaseForm onClose={onClose} form={form} setForm={setForm} />
          </form>
        ) : (
          <CrudFeedback loading={loading} feedbackMessage={feedbackMessage} />
        )}
      </ModalContent>
    </Modal>
  );
};
