import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [countryName, setCountryName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };

  const onSubmit = () => {
    console.log(navigate(`/country/${countryName}`));
    //  navigate(`/country/${countryName}`);
  };
  return (
    <Container>
      <Title>Welcome To Weather Application</Title>
      <InputBox>
        <Input
          placeholder="Enter country"
          value={countryName}
          onChange={handleInputChange}
        />
        <Button onClick={onSubmit}>Submit</Button>
      </InputBox>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  ${tw`

    `}
`;

const Title = styled.div`
  ${tw`
        bg-green-200

    `}
`;

const Input = styled.input`
  ${tw`
        h-10
        bg-gray-200
        my-2
        rounded-sm
        p-2
        outline-none
        border-none

    `}
`;

const InputBox = styled.div`
  ${tw`
        flex
        flex-col
        items-center

    `}
`;

const Button = styled.div`
  ${tw`
      h-10
      bg-black
      text-white
      text-2xl
      flex
      items-center
      justify-center
      cursor-pointer
      px-4
      rounded-lg
    `}
`;
