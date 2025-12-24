import { useState } from "react";
import { motion } from "framer-motion";
import { botKnowledge } from "../data/botKnowledge";

export default function FloatingBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "🌾 Namaste! I’m Armo Kisan Bot. Ask me about loans, schemes or equipment.",
    },
  ]);
  const [input, setInput] = useState("");

  const findAnswer = (question) => {
    const lower = question.toLowerCase();

    for (let item of botKnowledge) {
      if (item.keywords.some((kw) => lower.includes(kw))) {
        return item.answer;
      }
    }

    return "🤔 I can help with crop loans, equipment financing, government schemes and seller registration.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: findAnswer(input) }]);
    }, 600);

    setInput("");
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="fixed z-50"
      style={{ bottom: "16px", right: "16px" }}
    >
      {/* Bot Icon (smaller) */}
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <img
          src="/bot.gif"
          alt="Bot"
          className="w-14 h-14 rounded-full shadow-md border-2 border-emerald-600"
        />
      </div>

      {/* Chat Window */}
      {open && (
        <div className="bg-white w-64 h-80 rounded-xl shadow-lg flex flex-col mt-2 overflow-hidden">
          <div className="bg-emerald-700 text-white px-3 py-2 text-xs font-semibold">
            🌾 Armo Kisan Bot
          </div>

          <div className="flex-1 p-2 overflow-y-auto space-y-2 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[85%] ${
                  msg.from === "bot"
                    ? "bg-emerald-100 text-emerald-900"
                    : "bg-blue-100 text-blue-900 ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1 p-2 border-t">
            <input
              className="flex-1 border rounded px-2 py-1 text-xs focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something…"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-emerald-600 text-white px-2 py-1 rounded text-xs"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
