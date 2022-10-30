import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "100%")};
  //height: 40px;
  border-radius: 10px;
  margin: 5px;
  margin-bottom: ${(props) => (props.last ? "30px" : "5px")};
  background: ${(props) => (props.primary ? "black" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  border: ${(props) => (props.primary ? "none" : "1px solid  #000")};
  padding: 12px 24px;
  position:${(props) => (props.width ? 'absolute' : 'innitial')};
  right: 30px;
  bottom: -15px;
  line-height: 16px;
  font-weight: 700;
  cursor: pointer;
`;
