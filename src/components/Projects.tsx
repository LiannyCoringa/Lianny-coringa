import passwordManager from '../images/password-manager.png';
import trybeTunes from '../images/Trybe-tunes.png';
import trybeTunes2 from '../images/Trybe-tunes1.png';
import frontEndOnlineStore from '../images/online-store.png';
import frontEndOnlineStore1 from '../images/online-store1.png';
import frontEndOnlineStore2 from '../images/online-store2.png';
import trybeWallet from '../images/TrybeWallet.png';
import starwars from '../images/starwars.png';
import recipesApp from '../images/recipes-app.png';
import recipesApp1 from '../images/recipes-app1.png';
import recipesApp2 from '../images/recipes-app2.png';
import recipesApp3 from '../images/recipes-app3.png';
import recipesApp4 from '../images/recipes-app4.png';
import recipesApp5 from '../images/recipes-app5.png';



function Projects() {
  return (
    <div id="projects">
      <h1>Projetos</h1>
      <div>
        <h2 id="title-project">Front-end</h2>
        <div className="projects-container">
          <div className="projects-card">
            <h3>Password Manager</h3>
            <p>Tecnologias utilizadas: TypeScript e React</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".password-manager">Saiba mais</button>
            <div className="modal fade password-manager" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>Password Manager</h1>
                  <p>Este projeto foi desenvolvido com o intuito de gerenciar senhas, podendo adicionar, editar e deletar.</p>
                  <p>Tecnologias utilizadas: TypeScript e React</p>
                  <img src={ passwordManager } alt="forms de cadastro" />
                  <a href="https://github.com/LiannyCoringa/Project-Password-Manager" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-card">
            <h3>TrybeTunes</h3>
            <p>Tecnologias utilizadas: TypeScript, React e React Router</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".trybe-tunes">Saiba mais</button>
            <div className="modal fade trybe-tunes" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>TrybeTunes</h1>
                  <p>Neste projeto criei uma aplicação para pesquisar e listar álbuns e músicas de várias bandas e artistas. É possível também ouvir o preview de cada música e favoritar as músicas preferidas.</p>
                  <p>Tecnologias utilizadas: TypeScript, React e React Router</p>
                  <img src={ trybeTunes } alt="pesquisa" />
                  <img src={ trybeTunes2 } alt="preview das musicas" />
                  <a href="https://github.com/LiannyCoringa/Project-TrybeTunes" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-card">
            <h3>Front-end Online Store</h3>
            <p>Tecnologias utilizadas: TypeScript, React e React Router</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".online-store">Saiba mais</button>
            <div className="modal fade online-store" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>Front-end Online Store</h1>
                  <p>Projeto em grupo, onde construímos o Front-end de um e-commerce, uma loja online, alimentada por uma API do Mercado Livre. Esse projeto foi desenvolvido com a metodologia agile Kanban.</p>
                  <p>Tecnologias utilizadas: TypeScript, React e React Router</p>
                  <img src={ frontEndOnlineStore } alt="categorias" />
                  <img src={ frontEndOnlineStore1 } alt="resultado da pesquisa" />
                  <img src={ frontEndOnlineStore2 } alt="carrinho" />
                  <a href="https://github.com/LiannyCoringa/Project-FrontEnd-Online-Store" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-card">
            <h3>Trybe Wallet</h3>
            <p>Tecnologias utilizadas: TypeScript, React e Redux</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".trybe-wallet">Saiba mais</button>
            <div className="modal fade trybe-wallet" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>Trybe Wallet</h1>
                  <p>Aplicação que computa gastos em diferentes moedas e converte tudo para uma única moeda, que pode ser escolhida pelo usuário. Usei a API de Cotações de Moedas.</p>
                  <p>Tecnologias utilizadas: TypeScript, React e Redux</p>
                  <img src={ trybeWallet } alt="adicionar despesa" />
                  <a href="https://github.com/LiannyCoringa/Project-TrybeWallet" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-card">
            <h3>StarWars</h3>
            <p>Tecnologias utilizadas: TypeScript, React e Context API</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".starwars">Saiba mais</button>
            <div className="modal fade starwars" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>StarWars</h1>
                  <p>Aplicação que recupera dados retornados pela API e cria uma tabela com alguns filtros. Os planetas podem ser filtrados por suas características, como população, período orbital, diâmetro e outras.</p>
                  <p>Tecnologias utilizadas: TypeScript, React e Context API</p>
                  <img src={ starwars } alt="pagina principal" />
                  <a href="https://github.com/LiannyCoringa/StarWars" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-card">
            <h3>App de Receitas</h3>
            <p>Tecnologias utilizadas: TypeScript, React e Context API</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".app-receitas">Saiba mais</button>
            <div className="modal fade app-receitas" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>App de Receitas</h1>
                  <p>Projeto em grupo, onde desenvolvemos um aplicativo de receitas, com uma interface mobile only, em que é possível visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks. Esse projeto foi desenvolvido com a metodologia agile Kanban.</p>
                  <p>Tecnologias utilizadas: TypeScript, React e Context API</p>
                  <img src={ recipesApp } alt ="login" />
                  <img src={ recipesApp1 } alt="meals" />
                  <img src={ recipesApp2 } alt="drinks" />
                  <img src={ recipesApp3 } alt="pagina de detalhes" />
                  <img src={ recipesApp4 } alt="pagina de favoritos" />
                  <img src={ recipesApp5 } alt="perfil" />
                  <a href="https://github.com/LiannyCoringa/Project-RecipesApp" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 id="title-project">Back-end</h2>
        <div className="projects-container">
          <div className="projects-card">
            <h3>Store Manager</h3>
            <p>Tecnologias utilizadas: JavaScript, Docker, MySQL, Express</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".store-manager">Saiba mais</button>
            <div className="modal fade store-manager" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>Store Manager</h1>
                  <p>Projeto realizado visando o desenvolvimento de uma API com um banco de dados MySQL, seguindo o padrão arquitetural em camadas e com endpoints para criar, exibir, atualizar e excluir produtos e vendas.</p>
                  <p>Tecnologias utilizadas: JavaScript, Docker, MySQL, Express</p>
                  <a href="https://github.com/LiannyCoringa/Project-Store-Manager" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-card">
            <h3>Blogs API</h3>
            <p>Tecnologias utilizadas: JavaScript, Docker, MySQL, Express</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".blogs-api">Saiba mais</button>
            <div className="modal fade blogs-api" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>Blogs API</h1>
                  <p>Projeto em que desenvolvi uma API para um Blog, além de um banco de dados. Nela há um CRUD (Create, Read, Update e Delete) de postagens com uma camada de autenticação de pessoas usuárias.</p>
                  <p>Tecnologias utilizadas: JavaScript, Docker, MySQL, Express</p>
                  <a href="https://github.com/LiannyCoringa/Project-BlogsApi" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-card">
            <h3>Trybe Smith</h3>
            <p>Tecnologias utilizadas: TypeScript, Docker, Sequelize, Express</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".trybe-smith">Saiba mais</button>
            <div className="modal fade trybe-smith" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>Trybe Smith</h1>
                  <p>Projeto em que desenvolvi um CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API, utilizando TypeScript. Além disso, utilizei Sequelize para ler e escrever no banco de dados.</p>
                  <p>Tecnologias utilizadas: TypeScript, Docker, Sequelize, Express</p>
                  <a href="https://github.com/LiannyCoringa/Project-Trybe-Smith" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-card">
            <h3>Trybe Futebol Clube</h3>
            <p>Tecnologias utilizadas: TypeScript, React, Docker, MySQL, Express</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".tfc">Saiba mais</button>
            <div className="modal fade tfc" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>Trybe Futebol Clube</h1>
                  <p>Projeto realizado para integrar o front-end com o back-end. Desenvolvi uma API para um site informativo sobre partidas e classificações de futebol.</p>
                  <p>Tecnologias utilizadas: TypeScript, React, Docker, MySQL, Express</p>
                  <a href="https://github.com/LiannyCoringa/Project-Trybe-Futebol-Clube" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
