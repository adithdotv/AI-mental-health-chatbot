import { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchChat = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/chat", {
        headers: { Authorization: token },
      });
      setMessages(res.data.messages || []);
    };
    fetchChat();
  }, []);

  const sendMessage = async () => {
    const token = localStorage.getItem("token");
    if (!input.trim()) return;

    const res = await axios.post(
      "http://localhost:5000/api/chat",
      { text: input },
      { headers: { Authorization: token } }
    );

    setMessages(res.data.messages);
    setInput("");
  };

  return (
    <div>
      <h2>Chat</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            {msg.text}
          </p>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
