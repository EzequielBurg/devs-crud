import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  HStack,
  NumberInput,
  NumberInputField,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { FiSave } from 'react-icons/fi';
import { IDevs } from '../../hooks/devs';

interface IBaseFormProps {
  setForm: (form: Omit<IDevs, 'id'>) => void;
  form: Omit<IDevs, 'id'>;
  onClose: () => void;
}

export const BaseForm: React.FC<IBaseFormProps> = ({
  form,
  setForm,
  onClose,
}) => (
  <>
    <ModalBody>
      <FormControl id="name" isRequired>
        <FormLabel>Nome</FormLabel>
        <Input
          value={form.nome}
          placeholder="Digite seu nome"
          onChange={({ target: { value } }) =>
            setForm({ ...form, nome: value })
          }
        />
      </FormControl>

      <FormControl id="sex" isRequired marginTop="1rem">
        <FormLabel>Sexo</FormLabel>
        <RadioGroup
          value={form.sexo}
          onChange={e => setForm({ ...form, sexo: e })}
        >
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
          value={form.idade}
          onChange={e => setForm({ ...form, idade: +e })}
        >
          <NumberInputField />
        </NumberInput>
      </FormControl>

      <FormControl id="hobby" isRequired marginTop="1rem">
        <FormLabel>Hobby</FormLabel>
        <Input
          placeholder="Digite seu hobby favorito"
          value={form.hobby}
          onChange={({ target: { value } }) =>
            setForm({ ...form, hobby: value })
          }
        />
      </FormControl>

      <FormControl id="birth" isRequired marginTop="1rem">
        <FormLabel>Data de nascimento</FormLabel>
        <Input
          type="date"
          value={form.datanascimento}
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
      <Button leftIcon={<FiSave />} colorScheme="green" type="submit">
        Salvar
      </Button>
    </ModalFooter>
  </>
);
