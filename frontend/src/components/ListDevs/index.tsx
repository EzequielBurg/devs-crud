import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { useFetch } from 'use-http';
import { format, parseISO } from 'date-fns';

interface IDevs {
  id: string;
  nome: string;
  sexo: string;
  idade: number;
  hobby: string;
  datanascimento: string;
}

export const ListDevs: React.FC = () => {
  const { data: devs = [] } = useFetch<IDevs[]>('/developers', {}, []);

  const getFormattedDate = (date: string) =>
    format(parseISO(date), 'dd/MM/yyyy');

  return (
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
                <Button colorScheme="blue">Editar</Button>
                <Button colorScheme="red">Excluir</Button>
              </ButtonGroup>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
