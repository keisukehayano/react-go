import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { State } from '../../reducers';
import { GoJsonServerActions } from '../../actions/goServer';

import { SerchResult } from './SearchResult';

export const GoServerRes: FC = () => {
  // 画面で使用するState
  const [values, setValues] = useState({ countryName: '', cityName: '', language: '' });

  const { gojsonVolumeList } = useSelector((state: State) => ({
    gojsonVolumeList: state.goServer.gojsonVolumeList,
  }));

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Body>
        <SearchForm>
          <Input placeholder='Countory Name' onChange={event => setValues({ ...values, countryName: event.target.value })} />
          <Input placeholder='City Name' onChange={event => setValues({ ...values, cityName: event.target.value })} />
          <Input placeholder='Language' onChange={event => setValues({ ...values, language: event.target.value })} />
          <SearchButton
            onClick={event => {
              event.preventDefault();
              dispatch(GoJsonServerActions.getGoVolumes(values));
            }}>
            検索
          </SearchButton>
        </SearchForm>
        {gojsonVolumeList.items.includes && <SerchResult gojsonVolumeList={gojsonVolumeList} />}
      </Body>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Body = styled.div`
  max-width: 600px;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 250px;
  font-size: 18px;
  padding: 10px;
  outline: none;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const SearchButton = styled.button`
  color: #fff;
  background-color: #09d3ac;
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  transition: 0.4s;
  cursor: pointer;
  &:disabled {
    background-color: #bfbfbf;
    cursor: not-allowed;
  }
`;
