import { useState } from "react";
import { Formik, Form } from "formik";

import Container from "./components/Container";
import Section from "./components/Section";
import Input from "./components/Input";
import Button from "./components/Button";
import Balance from "./components/Balance";

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit

  for (let i = 0; i < years; i++) {
    total = (deposit + contribution) * (rate + 1)
  }

  return Math.round(total)
}

const formatter = new Intl.NumberFormat('es-US',{
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
const App = () => {
  const [balance, setBalance] = useState('')

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    const valFormatter = formatter.format(val)
    setBalance(valFormatter)
    
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
        {
          (balance != '')
          && <Balance>balance final: {balance}</Balance>
        }
      </Section>
    </Container>
  )
}

export default App