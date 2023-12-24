import { Formik, Form } from "formik";

import Container from "./components/Container";
import Section from "./components/Section";
import Input from "./components/Input";
import Button from "./components/Button";

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit

  for (let i = 0; i < years; i++) {
    total = (deposit + contribution) * (rate + 1)
  }

  return Math.round(total)
}
const App = () => {

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    console.log(val)
  }

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: ''
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name='deposit' label='deposito inicial' />
            <Input name='contribution' label='contribución anual' />
            <Input name='years' label='años' />
            <Input name='rate' label='interés estimado' />
            <Button type="submit">calcular</Button>
          </Form>

        </Formik>
      </Section>
    </Container>
  )
}

export default App