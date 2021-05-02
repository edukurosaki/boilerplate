import * as S from '../Main/styles'
const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Img atomo e React Avançado escrito ao ladoa"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Img de alguem enfrente ao pc"
    />
  </S.Wrapper>
)
export default Main
