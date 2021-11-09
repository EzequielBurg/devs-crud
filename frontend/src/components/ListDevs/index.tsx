import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ButtonGroup,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { useDev } from '../../hooks/devs';
import { DeleteDev } from '../DeleteDev';
import { UpdateDev } from '../UpdateDev';

export const ListDevs: React.FC = () => {
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const { devs, findDev, singleDev } = useDev();

  const [devToDelete, setDevToDelete] = useState<string>('');

  const handleOpenDeleteModal = (id: string | undefined) => {
    if (id) {
      setDevToDelete(id);
      onOpenDelete();
    }
  };

  const handleOpenEditModal = async (id: string | undefined) => {
    if (id) {
      await findDev(id);
      onOpenEdit();
    }
  };

  const getFormattedDate = (date: string) =>
    format(parseISO(date), 'dd/MM/yyyy');

  return (
    <>
      <Table variant="simple" margin="5rem auto" maxWidth="900px">
        <Thead>
          <Tr>
            <Th>nome</Th>
            <Th>sexo</Th>
            <Th>idade</Th>
            <Th>hobby</Th>
            <Th>data de nascimento</Th>
            <Th>ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {devs.map(dev => (
            <Tr key={dev.id}>
              <Td>{dev.nome}</Td>
              <Td>{dev.sexo}</Td>
              <Td>{dev.idade}</Td>
              <Td>{dev.hobby}</Td>
              <Td>{getFormattedDate(dev.datanascimento)}</Td>
              <Td>
                <ButtonGroup variant="outline" spacing="3">
                  <Button
                    colorScheme="blue"
                    onClick={() => handleOpenEditModal(dev.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => handleOpenDeleteModal(dev.id)}
                  >
                    Excluir
                  </Button>
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <DeleteDev
        devToDelete={devToDelete}
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
      />
      <UpdateDev
        devToUpdate={singleDev}
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
      />
    </>
  );
};
