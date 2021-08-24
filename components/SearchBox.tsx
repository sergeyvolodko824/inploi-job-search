import React,{useState} from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import styled from 'styled-components';

//styled components
const Input = styled.input`
  outline:none;
  width:75%;
  font-size:1.6rem;
  border:none;
  font-weight:700;
  padding:20px;
  color:grey;  
`;

const Button = styled.span`
  background-color: #0045FF;
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

const FormContainer = styled.div`
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
  // const [searchAsYouType, setSearchAsYouType] = useState(false);

  const EraseButton = styled.span`
    font-size: 2rem;
    color:lightpink;
    &:hover{
      cursor:pointer;
      color: #6464f5;
    }
  `;
  const handleChange = (e) => {
    setText(e.target.value); //update for text for searching
    if(e.target.value.length <= 1)
    {
      refine('');
    }
    else if(e.target.value.length > 1)
    {
      refine(text);
    }
  }
  const handleSubmit = () => {
    refine(text); //search text
  }
  const handleErase = () => {
    setText('');
    refine('');
  }
  const handleKeyDown = (e) => {
    if(e.key=='Enter')
    {
      refine(text);
    }
  }
  return (
    <FormContainer>
      <Input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder="Search for anything..."
        onKeyDown={handleKeyDown}
      >
      </Input>
      <EraseButton onClick={handleErase}>{ text.length > 0 ? 'X' : ''}</EraseButton>
      <Button onClick={handleSubmit}>Search</Button>
    </FormContainer>
  );
};

export const CustomSearchBox = connectSearchBox(SearchBox);