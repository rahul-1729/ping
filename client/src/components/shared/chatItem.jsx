import React from 'react';
import { Link } from '../styles/StyledComponents';
import { Typography, Stack, Box } from '@mui/material';

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen
}) => {
  return (
    <Link 
    sx={{
         padding:"0",
    }}
    to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}>
      <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: sameSender ? "#f0f0f0" : "white",
        color: sameSender ? "black" : "unset",
        position: "relative",
        borderBottom: "1px solid #f0f0f0",
        justifyContent: "space-between",
      }}>
        {/* Avatar Card */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#ddd",
            backgroundImage: `url(${avatar})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>
        {isOnline && <Box sx={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "green",
          position: "absolute",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)",
        }} />}
      </div>
    </Link>
  );
};

export default ChatItem;
