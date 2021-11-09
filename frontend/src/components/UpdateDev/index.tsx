import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { IDevs, initialDev, useDev } from '../../hooks/devs';
import { CrudFeedback } from '../CrudFeedback';
import { BaseForm } from '../BaseForm';

interface IUpdateDevProps {
  isOpen: boolean;
  onClose: () => void;
  devToUpdate: IDevs | undefined;
}

export const UpdateDev: React.FC<IUpdateDevProps> = ({
  isOpen,
  onClose,
  devToUpdate,
}) => {
  const { updateDev, loading, feedbackMessage, showForm, setShowForm } =
    useDev();

  const [form, setForm] = useState<IDevs | undefined>();

  useEffect(() => {
    if (devToUpdate?.datanascimento) {
      setForm({
        id: devToUpdate.id,
        nome: devToUpdate.nome,
        idade: devToUpdate.idade,
        sexo: devToUpdate.sexo,
        hobby: devToUpdate.hobby,
        datanascimento: format(
          parseISO(devToUpdate.datanascimento),
          'yyyy-MM-dd',
        ),
      });
    }
  }, [devToUpdate]);

  const handleClose = () => {
    setForm(initialDev);
    setShowForm(true);
    onClose();
  };

  return (
    <Modal isCentered size="lg" isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Atualizar dev</ModalHeader>
        <ModalCloseButton />

        {showForm ? (
          <form onSubmit={() => updateDev(form || initialDev)}>
            <BaseForm
              onClose={onClose}
              form={form || initialDev}
              setForm={setForm}
            />
          </form>
        ) : (
          <CrudFeedback loading={loading} feedbackMessage={feedbackMessage} />
        )}
      </ModalContent>
    </Modal>
  );
};
