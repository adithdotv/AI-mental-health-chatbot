import { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/chat", {
          headers: { Authorization: token },
        });
        setMessages(res.data.messages || []);
      } catch (error) {
        console.error("Error fetching chat:", error);
      }
    };
    fetchChat();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/chat",
        { text: input },
        { headers: { Authorization: token } }
      );

      setMessages(res.data.messages);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Chat</h2>
        
        <div className="border border-gray-300 rounded-lg p-4 h-80 overflow-y-auto bg-gray-50">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center">No messages yet.</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 max-w-xs ${
                  msg.sender === "user"
                    ? "bg-purple-500 text-white rounded-l-lg self-end ml-auto"
                    : "bg-gray-200 text-gray-800 rounded-r-lg self-start"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
        </div>

        <div className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
