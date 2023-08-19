import * as Style from './styles'

const cutrrentYear = new Date().getFullYear()
const Footer = () => (
  <Style.Container>
    <div className="container">
      <Style.FooterSection>
        <Style.SectionTitle>Categorias</Style.SectionTitle>
        <Style.Links>
          <li>
            <Style.Link
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </Style.Link>
          </li>
          <li>
            <Style.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </Style.Link>
          </li>
          <li>
            <Style.Link
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </Style.Link>
          </li>
          <li>
            <Style.Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </Style.Link>
          </li>
          <li>
            <Style.Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </Style.Link>
          </li>
        </Style.Links>
      </Style.FooterSection>
      <Style.FooterSection>
        <Style.SectionTitle>Acesso rápido</Style.SectionTitle>
        <Style.Links>
          <li>
            <Style.Link
              title="Clique aqui para acessar a seção de Promoções"
              to="/#on-sale"
            >
              Promoções
            </Style.Link>
          </li>
          <li>
            <Style.Link
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em Breve
            </Style.Link>
          </li>
        </Style.Links>
      </Style.FooterSection>
      <p>{cutrrentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Style.Container>
)

export default Footer
