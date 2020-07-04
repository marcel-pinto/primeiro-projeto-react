import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore Repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/46410965?s=460&u=a4612df5445069a8a2df2efce9183d822d78e18f&v=4"
          alt="Avatar"
        />
        <div>
          <strong>password-checker</strong>
          <p> A simple python script that uses a pwnedpassword api to check if a password has been leaked.</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/46410965?s=460&u=a4612df5445069a8a2df2efce9183d822d78e18f&v=4"
          alt="Avatar"
        />
        <div>
          <strong>password-checker</strong>
          <p> A simple python script that uses a pwnedpassword api to check if a password has been leaked.</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/46410965?s=460&u=a4612df5445069a8a2df2efce9183d822d78e18f&v=4"
          alt="Avatar"
        />
        <div>
          <strong>password-checker</strong>
          <p> A simple python script that uses a pwnedpassword api to check if a password has been leaked.</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
