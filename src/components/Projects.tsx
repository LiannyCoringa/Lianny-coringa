function Projects() {
  return (
    <div id="projects">
      <h1>Projetos</h1>
      <div>
        <h2>Front-end</h2>
        <div>
          <div>
            <h3>Password Manager</h3>
            <p>Tecnologias utilizadas: TypeScript e React</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Saiba mais</button>
            <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <h1>Password Manager</h1>
                  <p>Este projeto foi desenvolvido com o intuito de gerenciar senhas, podendo adicionar, editar e deletar.</p>
                  <p>Tecnologias utilizadas: TypeScript e React</p>
                  <a href="https://github.com/LiannyCoringa/Project-Password-Manager" target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3>TrybeTunes</h3>
            <p>Tecnologias utilizadas: TypeScript, React e React Router</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Saiba mais</button>
          </div>
          <div>
            <h3>Front-end Online Store</h3>
            <p>Tecnologias utilizadas: TypeScript, React e React Router</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Saiba mais</button>
          </div>
          <div>
            <h3>TrybeWallet</h3>
            <p>Tecnologias utilizadas: TypeScript, React e Redux</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Saiba mais</button>
          </div>
          <div>
            <h3>StarWars</h3>
            <p>Tecnologias utilizadas: TypeScript, React e Context API</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Saiba mais</button>
          </div>
          <div>
            <h3>App de Receitas</h3>
            <p>Tecnologias utilizadas: TypeScript, React e Context API</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Saiba mais</button>
          </div>
        </div>
      </div>
      <div>
        <h2>Back-end</h2>
        <div>
          <div>
            <h3>Store Manager</h3>
            <p>Tecnologias utilizadas: JavaScript, Docker, MySQL, Express</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Saiba mais</button>
          </div>
          <div>
            <h3>Blogs API</h3>
            <p>Tecnologias utilizadas: JavaScript, Docker, MySQL, Express</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Saiba mais</button>
          </div>
          <div>
            <h3>Trybe Smith</h3>
            <p>Tecnologias utilizadas: TypeScript, Docker, MySQL, Express</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Saiba mais</button>
          </div>
          <div>
            <h3>Trybe Futebol Clube</h3>
            <p>Tecnologias utilizadas: TypeScript, React, Docker, MySQL, Express</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Saiba mais</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
