import styled from "styled-components";

export const Nav = styled.nav`
background: #fff;
color: #1d1f22;
  height: 80px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding: 0px 101px 0px 117px;
  @media (max-width: 1024px) {
    padding: 0px 10px 15px;
  }
`;
export const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  column-gap: 20px;
`;
export const Lia = styled.li`
list-style: none;,
  column-gap: 20px;
`;
export const Img = styled.img`
  width: ${(props) => (props.width ? props.width : "33px")};
  height: ${(props) => (props.height ? props.height : "31px")};
  cursor: pointer;
`;
export const CurrencyWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;
  position: relative;
`;
export const Currencies = styled.div`
  font-size: 18px;
  line-height: 160%;
  font-weight: 500;
  position: relative;
`;
export const PokerContain = styled.div`
  position: absolute;
  z-index: -1;
  left: 85%;
  bottom: 70%;
  border-radius: 50%;
  background-color: #1d1f22;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const P = styled.div`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;
