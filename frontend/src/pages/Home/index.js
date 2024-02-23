import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useMemo, useState } from 'react';
import {
  Container, InputSearchContainer, Header, ListHeader, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import RouteKeys from '../../RouteKeys';
import formatPhone from '../../utils/formatPhone';

export default function Home() {
  const contactsIndexUrl = 'http://localhost:3001/contacts';
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = useMemo(
    () => contacts.filter((contact) => (
      contact.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    )),
    [contacts, searchTerm],
  );

  useEffect(() => {
    fetch(`${contactsIndexUrl}?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to={RouteKeys.NEW} aria-label="Novo contato">Novo Contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              <small>{contact.category_name}</small>
            </div>
            {contact.email && <span>{contact.email}</span>}
            {contact.phone && <span>{formatPhone(contact.phone)}</span>}
          </div>

          <div className="actions">
            <Link to={`${RouteKeys.EDIT}/${contact.id}`} alt="Edit">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}

    </Container>
  );
}
