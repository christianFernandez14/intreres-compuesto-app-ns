import styled from "@emotion/styled"

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  background-color: #eee;
  border-top: 2px solid palevioletred;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0 2px 3px rgb(0,0,0,.3);
  border-radius: 5px;
`

const App = () => {
  return (
    <Container>
      <Section>Desde App</Section>
    </Container>
  )
}

export default App