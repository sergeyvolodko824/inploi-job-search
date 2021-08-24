import React, { useState } from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import styled from "styled-components";

const Input = styled.input`
  outline: none;
  width: 80%;
  font-size: 1.6rem;
  border: none;
  font-weight: 700;
  padding: 20px;
  color: grey;
`;

const Button = styled.span`
  background-color: #0045ff;
  color: white;
  font-size: 1.5rem;
  padding: 25px 10px;
  text-align: center;
  width: 13%;
  font-weight: 700;
  outline: none;
  box-shadow: none;
  border: none;
  border-radius: 20px;
  transition: all 0.8s;
  &:hover {
    cursor: pointer;
    background-color: #af4e7f;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 76%;
  height: 60px;
  padding: 20px;
  background-color: white;
  border: 1px solid white;
  border-radius: 20px;
`;

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.target.value.length <= 1) {
      refine("");
    } else if (e.target.value.length > 1) {
      refine(text);
    }
  };
  const handleSubmit = () => {
    refine(text);
  };
  const handleErase = () => {
    setText("");
    refine("");
  };
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      refine(text);
    }
  };
  return (
    <FormContainer>
      <Input
        type="search"
        onChange={handleChange}
        value={text}
        placeholder="Search for anything..."
        onKeyDown={handleKeyDown}
      ></Input>
      <Button onClick={handleSubmit}>Search</Button>
    </FormContainer>
  );
};

export const CustomSearchBox = connectSearchBox(SearchBox);
