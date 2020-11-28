import React, { FC } from 'react';
import styled from 'styled-components';

import { GojsonVolumeList } from '../../models/Volume';


export const SerchResult: FC<{ gojsonVolumeList: GojsonVolumeList }> = ({ gojsonVolumeList }) => {
  
  return (
    <ResultContent>
      {gojsonVolumeList.items.map(item => {
        const {
          code,
          name,
          continent,
          region,
          surfaceArea,
          indepYear,
          population,
          lifeExpectancy,
          gnp,
          gnpOld,
          localName,
          governmentForm,
          headOfState,
          capital,
          code2,
          id,
          cityName,
          district,
          cityPopulation,
          language,
          isOfficial,
          percentage,
        } = item;
        return (
          <Wrapper>
            <Code>{code}</Code>
            <Name>{name}</Name>
        <Continent>{continent}</Continent>
        <Region>{region}</Region>
        <SurfaceArea>{surfaceArea}</SurfaceArea>
        <IndepYear>{indepYear}</IndepYear>
        <Population>{population}</Population>
        <LifeExpectancy>{lifeExpectancy}</LifeExpectancy>
        <GNP>{gnp}</GNP>
        <GNPOld>{gnpOld}</GNPOld>
        <LocalName>{localName}</LocalName>
        <GovernmentForm>{governmentForm}</GovernmentForm>
        <HeadOfState>{headOfState}</HeadOfState>
        <Capital>{capital}</Capital>
        <Code2>{code2}</Code2>
        <Id>{id}</Id>
        <CityName>{cityName}</CityName>
        <District>{district}</District>
        <CityPopulation>{cityPopulation}</CityPopulation>
        <Language>{language}</Language>
        <IsOfficial>{isOfficial}</IsOfficial>
        <Percentage>{percentage}</Percentage>
          </Wrapper>
        
        )
      })}
      
    </ResultContent>
  );
};

const ResultContent = styled.div`
  margin-top: 40px;
`;

const Wrapper = styled.div`
  text-align: left;
  margin-bottom: 50px;
`;

const Code = styled.p``;

const Name = styled.p``;

const Continent = styled.p``;

const Region = styled.p``;

const SurfaceArea = styled.p``;

const IndepYear = styled.p``;

const Population = styled.p``;

const LifeExpectancy = styled.p``;

const GNP = styled.p``;

const GNPOld = styled.p``;

const LocalName = styled.p``;

const GovernmentForm = styled.p``;

const HeadOfState = styled.p``;

const Capital = styled.p``;

const Code2 = styled.p``;

const Id = styled.p``;

const CityName = styled.p``;

const District = styled.p``;

const CityPopulation = styled.p``;

const Language = styled.p``;

const IsOfficial = styled.p``;

const Percentage = styled.p``;