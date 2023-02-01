import styled from 'styled-components';

export const BoxForm = styled.div`
  width: 400px;
  margin: 50px auto 0px;
  padding: 30px 50px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 20px;
  height: 36px;
  border-radius: 6px;
  border: none;
  outline: rgba(0, 0, 0, 0.2);
  background-color: gainsboro;
`;

export const Btn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  width: 120px;
  background-color: gainsboro;

  cursor: pointer;
  &:hover {
    background-color: teal;
  }
`;
