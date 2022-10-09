import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { AiTwotoneContacts } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import Img from "./mock/user.svg";
import { Data } from "./Data.js";
import Boy from "./roadtomoon.jpeg";
import {
  Container,
  Sidebar,
  Content,
  ImageDiv,
  UL,
  Chats,
  Table,
  Tr,
  Navbar,
  ImageAvatar,
  SpanIcons,
  Button,
  IconWrap,
  AvatarDiv,
  TableWrap,
  Stickers,
  InputAdd,
} from "./Appstyled";
import { useEffect } from "react";

export default function App() {
  const [data, setData] = useState(Data);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  const [openInput, setOpenInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  console.log({ inputValue });

  const OpenModal = () => {
    setModal(!modal);
  };
  const OpenModal2 = () => {
    setModal2(!modal2);
  };

  const OpenModal3 = () => {
    setModal3(!modal3);
  };
  const OpenModal4 = () => {
    setModal4(!modal4);
  };
  const Close = () => {
    setOpen(!open);
  };

  const openModalInput = () => {
    setOpenInput(!openInput);
  };

  const AddValue = () => {
    if (inputValue.length > 0) {
      let Dates = [
        ...data,
        {
          id: data.length + 1,
          name: inputValue,
          parapraph:
            "lorem ipsum solid color red violince  red violincelorem ipsum solid color red violince",
          count: data.length % 2,
        },
      ];
      setData(Dates);
      setInputValue("");
    }
  };

  const onIputChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const onDelete = (ids) => {
    const newData = data.filter((val) => val.id !== ids);
    setData(newData);
  };
  return (
    <Container>
      <Sidebar open={open}>
        <ImageDiv open={open} onClick={Close}>
          <img src={Img} alt="aa" />
          <div>
            <h2>Sardorbek</h2>
            <h4>+99999999</h4>
          </div>
        </ImageDiv>
        <UL open={open}>
          <li onClick={OpenModal}>
            <span className="icons">
              <IoIosContact />
            </span>
            My Profile
          </li>
          {modal ? (
            <ul>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
            </ul>
          ) : (
            " "
          )}
          <li onClick={OpenModal2}>
            <span className="icons">
              <AiTwotoneContacts />
            </span>
            My activites
          </li>
          {modal2 ? (
            <ul>
              <li>About</li>
              <li>About</li>
              <li>House</li>
              <li>About</li>
              <li>About</li>
            </ul>
          ) : (
            ""
          )}
          <li onClick={OpenModal3}>
            <span className="icons">
              <BsBox />
            </span>
            Inventory
          </li>
          {modal3 ? (
            <ul>
              <li>about</li>
              <li>about</li>
              <li>about</li>
              <li>about</li>
            </ul>
          ) : (
            ""
          )}
          <li onClick={OpenModal4}>
            <span className="icons">
              <FaRegQuestionCircle />
            </span>
            Help
          </li>
          {modal4 ? (
            <ul>
              <li>about</li>
              <li>about</li>
              <li>about</li>
              <li>about</li>
            </ul>
          ) : (
            ""
          )}
          <li>
            <span className="icons">
              <MdOutlineAlternateEmail />
            </span>
            Support
          </li>
          <li>
            <span className="icons">
              <BsExclamationCircle />
            </span>
            Terms Contditions
          </li>
          <li>
            <span className="icons">
              <FiLogOut />
            </span>
            Logout
          </li>
        </UL>
      </Sidebar>
      <Content>
        <Chats>
          <SpanIcons>
            <div className="IconsNavbar">
              <Button>delete</Button>
            </div>
            <IconWrap>
              <RiDeleteBin5Line />
            </IconWrap>
          </SpanIcons>
          <SpanIcons>
            <h1>Chats</h1>
            <IconWrap>
              <IoChatbubblesSharp />
            </IconWrap>
          </SpanIcons>
          <SpanIcons>
            {openInput ? (
              <Button onClick={() => AddValue()}>Add</Button>
            ) : (
              <Button onClick={openModalInput}>New</Button>
            )}
            <IconWrap>
              <IoPersonAddSharp />
            </IconWrap>
          </SpanIcons>
          <SpanIcons>
            <input type="text" placeholder="Search users " />
            <IconWrap>
              <BsSearch />
            </IconWrap>
          </SpanIcons>
        </Chats>
        {openInput ? (
          <InputAdd
          value={inputValue}
            placeholder="Add user"
            type="text"
            onChange={onIputChange}
          />
        ) : (
          ""
        )}
        <Navbar>
          <h3>All</h3>
          <h3>Private</h3>
          <h3>Groups</h3>
          <h3>Channels</h3>
        </Navbar>
        <TableWrap>
          <Table>
            {data.length > 0 ? (
              data.map((value, index) => (
                <Tr key={value.id}>
                  <ImageAvatar>
                    <AvatarDiv>
                      <img src={value.image} alt="" />
                      <div>
                        <b>{value.name}</b> <br />
                        <span>{value.parapraph}</span>
                      </div>
                    </AvatarDiv>
                    <div>
                      <div>
                        {value.count > 0 ? (
                          <div className="Father">
                            <h5>{value.count}</h5>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <Button onClick={() => onDelete(value.id)}>delete</Button>
                  </ImageAvatar>
                </Tr>
              ))
            ) : (
              <h1>No Messages</h1>
            )}
          </Table>{" "}
          {data.length > 0 ? (
            <Stickers>
              🥵😶‍🌫️😱🤔🤗😓😥😰😶🤥😬🙄😯😦😧😮😮‍💨😪🤤😴🥱😲😵😵‍💫🤐🥴🤢🤮🤠🤑🤕🤒😷
              🤧😈👿👹👺🤡💩🤖👾👽☠️💀
              👻🎃😺😸😹😻😼😀😃😄😁😆😅😂🤣🥲☺️😊😇🙂🙃😉😌😍🥰😘😗😙
              😚😋🧐🤨🤪😜😝😛🤓😎🥸🤩🥳 😏🙁😕😟😔😞😒☹️😣😖😫😩 
            </Stickers>
          ) : (
            ""
          )}
        </TableWrap>
      </Content>
    </Container>
  );
}
