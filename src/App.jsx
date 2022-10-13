import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { AiTwotoneContacts } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import Img from "./mock/user.svg";
import { Data } from "./Data.js";
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

export default function App() {
  const [data, setData] = useState(Data);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  const [openInput, setOpenInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchval, setSearchval] = useState("");
  const [select, setSelect] = useState(null);
  const [title, setTitle] = useState("");
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
  const onSearch = () => {
    let res = data.filter((val) =>
      val.name.toLowerCase().includes(searchval.toLowerCase())
    );
    setData(res);
  };
  const onEdit = (vals) => {
    setSelect(vals.id);
    setTitle(vals.name);
  };
  const onSave = () => {
    const newData = data.map((vale) =>
      Number(select) === vale.id ? { ...vale, name: title } : vale
    );
    setData(newData);
    setSelect(null);
  };
  const onCancel = () => {
    setSelect("");
  };
  return (
    <Container>
      <Sidebar open={open}>
        <ImageDiv open={open} onClick={Close}>
          <img src={Img} alt="aa" />
          <div>
            <h2>Sardorbek</h2>
            <h4>+9999999999</h4>
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
            <InputAdd
              type="text"
              placeholder="Search users"
              onChange={({ target: { value } }) => setSearchval(value)}
            />
            <IconWrap>
              <i>
                <BsSearch onClick={onSearch} />
              </i>
            </IconWrap>
          </SpanIcons>
        </Chats>
        {openInput ? (
          <InputAdd
            widthh="700px"
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
                        <b>
                          {select === value.id ? (
                            <InputAdd
                              margin="10px"
                              onChange={(e) => setTitle(e.target.value)}
                              type={"text"}
                              value={title}
                            />
                          ) : (
                            value.name
                          )}
                        </b>
                        <br />
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
                    <div className="buttonwrap">
                      <Button onClick={() => onDelete(value.id)}>delete</Button>{" "}
                      <br />
                      {select === value.id ? (
                        <>
                          <Button onClick={onSave}>save</Button>
                          <Button onClick={onCancel}>cancel</Button>
                        </>
                      ) : (
                        <Button onClick={() => onEdit(value)}>Edit</Button>
                      )}
                    </div>
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
