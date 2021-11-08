import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  HStack,
  NumberInputField,
  NumberInput,
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface ICreateDevProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateDev: React.FC<ICreateDevProps> = ({ isOpen, onClose }) => {
  const initialForm = {
    nome: '',
    sexo: '',
    idade: NaN,
    hobby: '',
    datanascimento: '',
  };

  const [form, setForm] = useState(initialForm);

  console.log('form', form);

  const handleClose = () => {
    setForm(initialForm);
    onClose();
  };

  return (
    <Modal isCentered size="lg" isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar dev</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="name" isRequired>
            <FormLabel>Nome</FormLabel>
            <Input
              placeholder="Digite seu nome"
              onChange={({ target: { value } }) =>
                setForm({ ...form, nome: value })
              }
            />
          </FormControl>

          <FormControl id="sex" isRequired marginTop="1rem">
            <FormLabel>Sexo</FormLabel>
            <RadioGroup onChange={e => setForm({ ...form, sexo: e })}>
              <HStack spacing="24px">
                <Radio value="M">Masculino</Radio>
                <Radio value="F">Feminino</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <FormControl id="age" isRequired marginTop="1rem">
            <FormLabel>Idade</FormLabel>
            <NumberInput
              placeholder="Digite sua idade"
              onChange={e => setForm({ ...form, idade: +e })}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl id="hobby" isRequired marginTop="1rem">
            <FormLabel>Hobby</FormLabel>
            <Input
              placeholder="Digite seu hobby favorito"
              onChange={({ target: { value } }) =>
                setForm({ ...form, hobby: value })
              }
            />
          </FormControl>

          <FormControl id="birth" isRequired marginTop="1rem">
            <FormLabel>Data de nascimento</FormLabel>
            <Input
              type="date"
              onChange={({ target: { value } }) =>
                setForm({ ...form, datanascimento: value })
              }
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="green" type="submit">
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
