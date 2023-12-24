import { useField } from "formik";
import styled from "@emotion/styled";

const Control = styled.div`
  margin-bottom: 20px;
`
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #000;
  text-transform: capitalize;
`
const MyInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #b1b3b5;
  border-radius: 4px;
  margin-bottom: 5px;
  outline: none;
`

const ErrorMessage = styled.div`
  background-color: #ce3838;
  padding: 6px 0;
  text-align: center;
  border-radius: 5px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
`

const Input = ({ label, ...props }) => {

  const [field, meta] = useField(props)

  return (
    <Control>
      <Label>{label}</Label>
      <MyInput {...field} {...props} />
      {(meta.touched && meta.error) && (
        <ErrorMessage>{meta.error}</ErrorMessage>
      )}
    </Control>
  )
}

export default Input