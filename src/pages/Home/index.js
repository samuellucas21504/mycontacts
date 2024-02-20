import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import RouteKeys from '../../RouteKeys';
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <Modal danger />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to={RouteKeys.NEW} aria-label="Novo contato">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Samuel Lucas</strong>
            <small>instagram</small>
          </div>
          <span>samuellucasrdg@gmail.com</span>
          <span>(34) 996978987</span>
        </div>

        <div className="actions">
          <Link to={RouteKeys.EDIT} alt="Edit">
            <img src={edit} alt="Edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

    </Container>
  );
}
