import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;

  @media (min-width: 768px) {
    #services {
      .grid-template-rows-1 {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;

export const ServiceIcon = styled.div`
  width: 100%;

  > img {
    width: 100px !important;
  }
`;

export const ServiceSubTitle = styled.div`
  font-size: 20px;
`;

export const ServiceSubTitleText = styled.h2`
  font-size: 35px !important;
`;

export const ServiceDescription = styled.div`
  font-size: 20px;

  > h3 {
    font-size: 19px;
    text-decoration: overline;
  }

  > ul {
    align-content: center;
    /* margin-left: 18px; */
    list-style: none;

    > li {
      margin-left: 5px;
    }
  }
`;

export const CouseUpService = styled.div`
  padding: 5px;

  margin-top: 10px;
  margin-left: 3px;
  transition: 0.3s;

  > div {
    padding: 5px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }

  @media (max-width: 720px) {
    margin-right: 2px;
  }
`;

export const InfantilService = styled.div`
  margin-left: 10px;
  margin-right: 5px;
  margin-top: 10px;
  transition: 0.3s;

  > div {
    padding: 10px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }
`;
