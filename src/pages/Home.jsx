import styled from 'styled-components';
export default function Home() {
  const BackImg = styled.div`
    padding-top: 100px;
    text-align: center;
  `;

  return (
    <BackImg>
      <h1>Welcome to the phonebook </h1>
    </BackImg>
  );
}
