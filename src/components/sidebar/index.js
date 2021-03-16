import React from "react";
import styled from "styled-components";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import SideBarOption from "./SideBarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

const SideBar = () => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>E-Developers </h2>
          <h3>
            <FiberManualRecord />
            Deepak Pandey
          </h3>
        </SideBarInfo>
        <Create />
      </SideBarHeader>

      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption Icon={Inbox} title="Mentions & reactions" />
      <SideBarOption Icon={Drafts} title="Saved Items" />
      <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
      <SideBarOption Icon={PeopleAlt} title="People & user groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File browser" />
      <SideBarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMore} title="Channels" />

      <hr />
      <SideBarOption Icon={Add} addChannelOption title="Add Channel" />

      {channels?.docs?.map((doc) => (
        <SideBarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    color: #49274b;
    padding: 8px;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
    cursor: pointer;
  }
  > .MuiSvgIcon-root > :hover {
    opacity: 0.9px;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;