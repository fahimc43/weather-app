import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import bg from "../../../src/images/weatherBg.png";

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
    <Container style={{ backgroundImage: `url(${bg})` }}>
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
  h-screen
  bg-contain
    `}
`;

const Title = styled.div`
  ${tw`
        bg-green-200
        p-6
        text-xl
        font-bold
        uppercase
    `}
`;

const Input = styled.input`
  ${tw`
        h-10
        bg-gray-200
        w-64
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
        mt-10

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
