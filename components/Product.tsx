import React from "react";
import styled from "styled-components";

//Styled Components
const ResultContainer = styled.div`
  &:hover{
    transform:scale(1.1);
  }
  width: 70vw;
  display:flex;
  /* border:1px solid black; */
  border-radius: 20px;
  align-items: center;
  padding:5px;
  margin:20px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, .20);
`;

const Logo = styled.img`
  margin:5px;
  width:100px;
  height:100px;
`;

const Divs = styled.div`
  padding:4px;
`;

const CompanyName = styled.h2`
  font-size:14px;
  font-weight:700;
  color:grey;
  text-align:center;
`;

const Paragraph = styled.p`
  font-size:14px;
  padding:3px;
`;

const ColoredText = styled.span`
  font-size:16px;
  padding:3px;
  color:grey;
`;

const ApplyButton = styled.span`
  font-size:1.5rem;
  background-color: #7676d3;
  color:white;
  padding:15px;
  border-radius:20px;
  &:hover{
    background-color: #000000;
    color:white;
    cursor:pointer
  }
`;

const Product = ({ hit }) => {
  // console.log(hit);
  return (
    <ResultContainer>
      <Divs>
      <Logo src={hit.data_company.company_logo} />
      <CompanyName>{hit.data_company.company_name}</CompanyName>
      </Divs>
      <Divs>
        <Paragraph>{hit.data_company.company_industry}</Paragraph>
        <Paragraph>{hit.data_company.company_type}</Paragraph>
      </Divs>
      <Divs>
        <Paragraph>{hit.data_job.job_description}</Paragraph>
        <Paragraph><ColoredText>Type:</ColoredText>{hit.data_job.job_type} <ColoredText>Title:</ColoredText>{hit.data_job.job_title} <ColoredText>Wage:</ColoredText>{ hit.data_job.job_wage_currency}{ hit.data_job.job_wage}/{hit.data_job.job_wage_type} <ColoredText>Views:</ColoredText>{hit.data_job.job_views} <ColoredText>Location:</ColoredText>{hit.data_location.location_address_1},{hit.data_location.location_country} </Paragraph>
      </Divs>
      <Divs><ApplyButton>Apply</ApplyButton></Divs>
    </ResultContainer>
  );
}

export default Product;