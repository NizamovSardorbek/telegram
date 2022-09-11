import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  /* height: 100vh; */
  /* justify-content: space-between; */
  .icons {
    margin-right: 20px;
  }
`;

export const Sidebar = styled.div`
  background: whitesmoke;
  width: ${({ open }) => (open ? "80px" : "400px")};
  transition: all 0.5s ease;

  ul {
    list-style: none;
  }

  ul li {
    margin: 20px 0;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  background-color: #078bcd;
  padding-bottom: 50px;
  cursor: pointer;
  h2 {
    margin-left: 30px;
    margin-top: 40px;
  }
  h4 {
    margin-left: 30px;
    margin-top: 20px;
  }
  img {
    width: ${({ open }) => (open ? "40px" : "100px")};
    margin-left: ${({ open }) => (open ? "20px" : "20px")};
    transition: all 0.5s ease;
    margin-top: 30px;
  }
`;

export const UL = styled.ul`
  margin-left: ${({ open }) => (open ? "100px" : "20px")};
`;

export const Content = styled.div`
  width: 100%;
  background-color: #ebe5da;
`;
export const Chats = styled.div`
  background-color: #f0e2e2;
  width: 100%;
  background-color: #00a2ff;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableWrap = styled.div`
  display: flex;
`;

export const Stickers = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  letter-spacing: 9px;
  font-size: 40px;
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
  :hover {
    color: red;
  }
  :active {
    transform: scale(0.3);
    height: 50px;
    width: 80px;
    transition: all 0.3s ease-in;
  }
`;

export const SpanIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  :hover {
    color: red;
  }
  :active {
    font-size: 20px;
    transition: 0.3s all ease-in;
  }
  margin-left: 200px;
`;
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px;
`;
export const Table = styled.table`
  width: 100%;
  h3 {
    padding: 20px;
    border: 4px;
    border-color: red;
    margin: 25px 15px;
  }
`;

export const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const ImageAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  border-bottom: 1px solid gray;
  padding: 10px 0;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
  }
  h5 {
    color: white;
  }
  .Father {
    border-radius: 50%;
    background-color: #0d75dd;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 130px;
  }
  b {
    font-size: 26px;
  }
`;

export const IconWrap = styled.i`
  font-size: 26px;
  color: white;
  margin: 0 10px;
`;
