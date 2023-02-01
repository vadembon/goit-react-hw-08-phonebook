import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 90px;
`;

export const TextUser = styled.p`
  font-size: 18px;
`;

export const SpanUser = styled.span`
  font-size: 18px;
  color: red;
  margin-right: 16px;
`;

export const Btn = styled.button`
  display: block;
  font-size: 22px;
  font-weight: 700;

  border: none;
  background-color: inherit;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  &:hover {
    color: red;
    transform: scale(1.15);
  }
`;
