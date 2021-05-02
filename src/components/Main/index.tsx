import * as S from '../Main/styles'
const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Img atomo e React Avançado escrito ao ladoa"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Img de alguem enfrente ao pc"
    />
  </S.Wrapper>
)
export default Main
