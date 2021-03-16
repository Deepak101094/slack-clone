import React from 'react'
import styled from 'styled-components';

const Message = ({ message, timestamp, user, userImage }) => {
    return (
        <MessageContainer>
            <img src={userImage} alt="" />
            <MessageInfo>

            </MessageInfo>
        </MessageContainer>
    )
}

export default Message;

const MessageContainer = styled.div``;

const MessageInfo = styled.div``;