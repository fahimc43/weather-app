import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import tw from "twin.macro";

interface InitCountry {
  capital: string[];
  population: number;
  latlng: number[];
  flags: {
    svg: string;
  };
}

interface InitCountryInfo {
  temperature: number;
  weather_icons: string[];
  wind_speed: number;
  precip: number;
}

const CountryInfo: React.FC = () => {
  const { name } = useParams<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<InitCountry>();
  const [weatherLoading, setWeatherLoading] = useState<boolean>(false);
  const [weatherInfo, setWeatherInfo] = useState<InitCountryInfo>();
  console.log(country);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      setLoading(true);

      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      setCountry(data[0]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getWeatherInfo = async () => {
    try {
      setWeatherLoading(true);
      const res = await fetch(
        `http://api.weatherstack.com/current?access_key=ba9de385df8c5f0930b38727951f2a62&query=${country?.capital[0]}`
      );
      const data = await res.json();
      setWeatherInfo(data.current);
      setWeatherLoading(false);
    } catch (error) {
      setWeatherLoading(false);
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Country Info</h1>
      {loading ? (
        <p>Loading...</p>
      ) : country ? (
        <CountryContent>
          <LeftContent>
            <p>Capital: {country.capital[0]}</p>
            <p>Population: {country.population}</p>
            <p>
              Latitude: {country.latlng[0]}
              <sup>o</sup>
            </p>
            <p>
              Longitude: {country.latlng[1]}
              <sup>o</sup>
            </p>
          </LeftContent>
          <RightContent>
            <FlagImage src={country.flags.svg} />
          </RightContent>
        </CountryContent>
      ) : (
        <p>Country not found by name: {name}</p>
      )}
      {country && <Button onClick={getWeatherInfo}>Capital Weather</Button>}

      {weatherLoading ? (
        <p>Loading...</p>
      ) : (
        weatherInfo && (
          <WeatherInfo>
            <h3>{country?.capital[0]} Weather Info</h3>
            <WeatherContent>
              <WeatherIcons src={weatherInfo.weather_icons[0]} />
              <p>
                Temperature: {weatherInfo.temperature}
                <sup>o</sup>
              </p>
              <p>Wind speed: {weatherInfo.wind_speed}</p>
              <p>Precip: {weatherInfo.precip}</p>
            </WeatherContent>
          </WeatherInfo>
        )
      )}
    </Container>
  );
};

export default CountryInfo;

const Container = styled.div`
  ${tw`
    mx-52
    flex
    flex-col
    justify-center
    items-center
  `}
`;

const CountryContent = styled.div`
  ${tw`
    flex
    justify-between
    border
    border-gray-200
    // drop-shadow-lg
    w-1/2
    m-2
    py-2
    rounded-md
    bg-gray-400
  `}
`;

const LeftContent = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    flex-1
  `}
`;

const RightContent = styled.div`
  ${tw`
    flex
    flex-1
  `}
`;

const FlagImage = styled.img`
  ${tw`
    w-48
  `}
`;

const Button = styled.div`
  ${tw`
      h-10
      bg-gray-400
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

const WeatherInfo = styled.div`
  ${tw`
    
  `}
`;

const WeatherContent = styled.div`
  ${tw`
    
  `}
`;

const WeatherIcons = styled.img`
  ${tw`
    
  `}
`;
