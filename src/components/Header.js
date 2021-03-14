import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { AccessTime, Search } from "@material-ui/icons";

const Header = () => {
  return (
    <HeaderContainer>
        {/* header left */}
      <HeaderLeft>
        <HeaderAvatar />

        <AccessTime />
      </HeaderLeft>
      {/* header-search */}
      <HeaderSearch>
          <Search />
      </HeaderSearch>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`

`;
