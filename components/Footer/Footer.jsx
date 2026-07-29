import '../Footer/Footer.css'

function Footer(){
    return (
      <footer className="rodape">
        <div class="coluna">
          <h4>
            <strong>Clarim Diário</strong>
          </h4>
          <p>Alta Credibilidade, Dirigo J. Jonah Jameson</p>
        </div>
        <div class="coluna">
          <ul>
          <li><h4>Editoriais</h4></li>
          <li><a href="">Cidade</a></li>
          <li><a href="">Ameaças Urbanas</a></li>
          <li><a href="">Opinião do Editor</a></li>
          <li><a href="">Esportes</a></li>
          <li><a href="">Classificados</a></li>
          </ul>
        </div>
        <div class="coluna">
          <h4>Institucional</h4>
          <a href="#">Termos de Uso</a>
          <a href="#">Privacidade</a>
          <a href="#">Quem Somos</a>
          <a href="#">Contato</a>
        </div>
      </footer>
    );
}

export default Footer