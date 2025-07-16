import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createChatroom, deleteChatroom } from "../redux/chatSlice";
import { RootState } from "../redux/store";
import { toast } from "react-toastify";
import debounce from "lodash.debounce";
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(chatrooms);

  useEffect(() => {
    const debounced = debounce((query: string) => {
      const lower = query.toLowerCase();
      setFilteredRooms(
        chatrooms.filter((room: { title: string }) =>
    room.title.toLowerCase().includes(lower)
  )
      );
    }, 300);
    debounced(search);
    return () => debounced.cancel();
  }, [search, chatrooms]);

  const handleCreate = () => {
    if (title.trim()) {
      dispatch(createChatroom(title));
      toast.success("Chatroom created");
      setTitle("");
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deleteChatroom(id));
    toast.info("Chatroom deleted");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input w-full"
          placeholder="Enter chatroom title"
        />
        <button onClick={handleCreate} className="btn">
          Create
        </button>
      </div>

      <ul className="space-y-2">
        {chatrooms.map((room: any) => (
          <li
            key={room.id}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded"
          >
            {/* <span>{room.title}</span> */}
            <Link to={`/chatroom/${room.id}`} className="text-blue-600 underline">
                {room.title}
            </Link>

            <button
              onClick={() => handleDelete(room.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
