import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  content: string;
  type: 'text' | 'image';
  timestamp?: number;
  sender?: 'user' | 'ai';
}

interface Chatroom {
  id: string;
  title: string;
  createdAt: number;
}

interface ChatState {
  chatrooms: Chatroom[];
  messages: Record<string, Message[]>;
}

const initialState: ChatState = {
  chatrooms: [],
  messages: {},
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    createChatroom: (state, action: PayloadAction<string>) => {
      const newRoom: Chatroom = {
        id: nanoid(),
        title: action.payload,
        createdAt: Date.now(),
      };
      state.chatrooms.push(newRoom);
      state.messages[newRoom.id] = [];
    },
    deleteChatroom: (state, action: PayloadAction<string>) => {
      state.chatrooms = state.chatrooms.filter((room) => room.id !== action.payload);
      delete state.messages[action.payload];
    },
    sendMessage: (
      state,
      action: PayloadAction<{ roomId: string; message: Message }>
    ) => {
      const { roomId, message } = action.payload;
      state.messages[roomId].push({
        ...message,
        timestamp: Date.now(),
        sender: 'user',
      });
    },
    receiveAIMessage: (
      state,
      action: PayloadAction<{ roomId: string; message: Message }>
    ) => {
      const { roomId, message } = action.payload;
      state.messages[roomId].push({
        ...message,
        timestamp: Date.now(),
        sender: 'ai',
      });
    },
  },
});

export const { createChatroom, deleteChatroom, sendMessage, receiveAIMessage } = chatSlice.actions;
export default chatSlice.reducer;
