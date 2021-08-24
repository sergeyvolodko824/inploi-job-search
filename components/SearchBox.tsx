import React,{useState} from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import styled from 'styled-components';

//styled components
const Input = styled.input`
  outline:none;
  width:80%;
  font-size:1.6rem;
  border:none;
  font-weight:700;
  padding:20px;
  color:grey;
`;

const Button = styled.span`
  background-color: blue;
  color:white;
  font-size: 1.5rem;
  padding: 25px 10px;
  text-align:center;
  width: 13%;
  font-weight:700;
  outline: none;
  box-shadow:none;
  border:none;
  border-radius:20px;
  &:hover{
    cursor:pointer;
  }
  &:active{
    margin-top:3px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:76%;
  height:60px;
  padding: 20px;
  background-color: white;
  border: 1px solid white;
  border-radius: 20px;
`;


// Components
const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value); //update for text for searching
  }
  const handleSubmit = () => {
    console.log(text);
    refine(text); //search text
    
  }
  return (
    <FormContainer noValidate action="" role="search">
      <Input
        type="search"
        onChange={handleChange}
        placeholder="Search for anything..."
      />
      <Button onClick={handleSubmit}>Search</Button>
    </FormContainer>
  );
};

export const CustomSearchBox = connectSearchBox(SearchBox);