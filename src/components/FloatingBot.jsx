// src/components/FloatingBot.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "🌾 Namaste! I’m your Aroma Kisan Bot. How can I help?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "🐃 I heard you say: " + input },
      ]);
    }, 800);
    setInput("");
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{ left: 0, right: window.innerWidth, top: 0, bottom: window.innerHeight }}
      className="fixed z-50"
      style={{ bottom: "20px", right: "20px" }}
    >
      {/* Bot Icon */}
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <img
          src="/bot.gif"
          alt="Buffalo Bot"
          className="w-20 h-20 object-contain rounded-full shadow-md border-2 border-green-600"
        />
      </div>

      {/* Chat Window */}
      {open && (
        <div className="bg-white w-72 h-96 rounded-xl shadow-lg flex flex-col mt-2 overflow-hidden">
          <div className="bg-green-700 text-white p-2">🐃 Aroma Kisan Bot</div>
          <div className="flex-1 p-2 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-xs ${
                  msg.from === "bot"
                    ? "bg-green-100 text-green-900 self-start"
                    : "bg-blue-100 text-blue-900 self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex p-2 border-t">
            <input
              className="flex-1 border rounded px-2 py-1"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type here..."
            />
            <button onClick={sendMessage} className="ml-2 bg-green-700 text-white px-3 py-1 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
