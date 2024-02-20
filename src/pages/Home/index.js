import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <a href="/" aria-label="Novo contato">Novo Contato</a>
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
          <a href="/" alt="Edit">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

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
          <a href="/" alt="Edit">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

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
          <a href="/" alt="Edit">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
