import React from "react";
import styled from "styled-components";

//Styled Components
const ResultContainer = styled.div`
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
  transition: all .8s;
  &:hover{
    background-color: #000000;
    color:white;
    cursor:pointer
  }
`;

//Interfaces
interface Data {
  hit: {
    data_company: {
      company_name: string;
      company_logo: string;
      company_industry: string;
      company_type: string;
    };
    data_job: {
      job_description: string;
      job_type: string;
      job_title: string;
      job_wage_currency: string;
      job_wage: string;
      job_wage_type: string;
      job_views: string;
    };
    data_location: {
      location_address_1: string;
      location_country: string;
    }
  }
}

const Product = (props : Data ) => {
  // console.log(props.hit);
  return (
    <ResultContainer>
      <Divs>
      <Logo src={props.hit.data_company.company_logo} />
      <CompanyName>{props.hit.data_company.company_name}</CompanyName>
      </Divs>
      <Divs>
        <Paragraph>{props.hit.data_company.company_industry}</Paragraph>
        <Paragraph>{props.hit.data_company.company_type}</Paragraph>
      </Divs>
      <Divs>
        <Paragraph>{props.hit.data_job.job_description}</Paragraph>
        <Paragraph><ColoredText>Type:</ColoredText>{props.hit.data_job.job_type} <ColoredText>Title:</ColoredText>{props.hit.data_job.job_title} <ColoredText>Wage:</ColoredText>{ props.hit.data_job.job_wage_currency}{ props.hit.data_job.job_wage}/{props.hit.data_job.job_wage_type} <ColoredText>Views:</ColoredText>{props.hit.data_job.job_views} <ColoredText>Location:</ColoredText>{props.hit.data_location.location_address_1},{props.hit.data_location.location_country} </Paragraph>
      </Divs>
      <Divs><ApplyButton>Apply</ApplyButton></Divs>
    </ResultContainer>
  );
}

export default Product;