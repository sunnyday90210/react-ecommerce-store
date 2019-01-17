import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
  grid-column: 8 /10;
  grid-row: 2 /3;
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(10, 10%);
`;

const SearchInput = styled.input`
  grid-column: 3 / -1;
  grid-row: 1 / 2;
  padding: 0.3rem 0.4rem;
  font-size: 1.3rem;
  border: none;
  border-bottom: 0.1rem solid #12376e;
  outline: none;
`;

const SearchBtn = styled.button`
  grid-column: 10 / -1;
  grid-row: 1 / 2;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const SearchBar = () => {
  return (
    <Search>
      <SearchForm>
        <SearchInput type="text" placeholder="Search" />
        <SearchBtn>
          <i className="fas fa-search" />
        </SearchBtn>
      </SearchForm>
    </Search>
  );
};
export default SearchBar;
