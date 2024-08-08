import { Stack } from '@mui/material'
import React from 'react'

const ChatItem = ({w="100%",chats=[],chatId,onlineUsers=[],newMessagesAlert=[{
    chatId:"1",
    count:0,
   },
   ],
   handleDeleteChat,
}) => {
  return (
      <Stack width={w}dirrection={"column"}></Stack>
  )
}

export default ChatItem