import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { sendMessage, receiveAIMessage } from '../redux/chatSlice';
import { toast } from 'react-toastify';

export const Chatroom = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const chat = useSelector((state: RootState) => state.chat);
  const messages = (chat.messages as Record<string, any[]>)[id!] || [];
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!id || !input.trim()) return;

    const userMessage = { content: input, type: 'text' as const };
    dispatch(sendMessage({ roomId: id, message: userMessage }));
    setInput('');
    toast.success('Message sent');

    setIsTyping(true);
    setTimeout(() => {
      dispatch(
        receiveAIMessage({
          roomId: id,
          message: { content: 'This is a fake AI response.', type: 'text' as const },
        })
      );
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="h-[500px] overflow-y-auto bg-gray-100 dark:bg-gray-800 rounded p-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`my-2 p-2 rounded max-w-xs ${
              msg.sender === 'user' ? 'bg-blue-200 dark:bg-blue-500 ml-auto' : 'bg-gray-300 dark:bg-gray-600 mr-auto'
            }`}
            title={new Date(msg.timestamp).toLocaleTimeString()}
          >
            <p>{msg.content}</p>
          </div>
        ))}
        {isTyping && <p className="italic text-sm text-gray-600">Gemini is typing...</p>}
        <div ref={chatEndRef} />
      </div>

      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input w-full"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="btn">
          Send
        </button>
      </div>
    </div>
  );
};
