import React from "react";
import styled from "styled-components";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, connectStateResults } from 'react-instantsearch-dom';
import { CustomSearchBox } from '../components/SearchBox';
import Product from '../components/Product';

//Api keys
const searchClient = algoliasearch(
  'RY8KA2GJPX',
  '13e751a21f2ae69d7ccb7b590a0a9b3a'
);

// Style components
const Container = styled.div`
  ul,ol,li{
      list-style:none;
  }
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Section = styled.section`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 75vw;
  height:75vh;
  background: rgb(24,70,236);
background: linear-gradient(65deg, #0045FE 0%, rgba(230,80,87,1) 100%);
`;

const Headline = styled.h1`
  position:relative;
  font-size: 46.8px;
  bottom:43px;
  font-weight: bolder;
  color:white;
`;




//Components
const Results = connectStateResults(
  ({ searchState }) =>
    searchState && searchState.query ? (
      <Hits hitComponent={Product} />
    ) : //<div>No query</div>
    null
);

const Home = () => {

  return (
    <Container>
        
        <InstantSearch
        indexName="dev_jobs_index"
        searchClient={searchClient}
        >
        <Section>
            <Headline>inploi Test Application</Headline>
            <CustomSearchBox />
          </Section>
          <Results />
      </InstantSearch>
    </Container>
  );
};

export default Home;