import { useState } from "react";
import { sendMessage } from "../services/api";

export default function ChatBox() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    if (!msg) return;

    const res = await sendMessage(msg);

    setChat([...chat, { user: msg, bot: res.reply }]);
    setMsg("");
  };

  return (
    <div>
      <div>
        {chat.map((c, i) => (
          <div key={i}>
            <p><b>You:</b> {c.user}</p>
            <p><b>AI:</b> {c.bot}</p>
          </div>
        ))}
      </div>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Ask AI..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}