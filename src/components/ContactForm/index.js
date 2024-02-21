import PropTypes from 'prop-types';
import { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';

import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import { Form, ButtonContainer } from './styles';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prev) => [
        ...prev, { field: 'name', message: 'Nome é obrigatório' },
      ]);
    } else {
      setErrors((prev) => prev.filter((error) => error.field !== 'name'));
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      const errorAlreadyExists = errors.find((error) => error.field === 'email');
      if (errorAlreadyExists) {
        return;
      }

      setErrors((prev) => [
        ...prev, { field: 'email', message: 'Email não é válido' },
      ]);
    } else {
      setErrors((prev) => prev.filter((error) => error.field !== 'email'));
    }
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name, email, phone, category,
    });
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <Input
          value={name}
          placeholder="Nome"
          onChange={(e) => handleNameChange(e)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={email}
          placeholder="Email"
          onChange={(e) => handleEmailChange(e)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          placeholder="Telefone"
          onChange={(e) => handlePhoneChange(e)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(e) => handleCategoryChange(e)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
