import { useEffect, useRef, useState } from "react";
import "./ChatbotWidget.css";

const quickReplies = [
  "Tôi muốn tư vấn dịch vụ",
  "Cho tôi xem bảng giá",
  "Liên hệ với đội ngũ",
];

function buildBotReply(message) {
  const normalized = message.toLowerCase();

  if (normalized.includes("giá") || normalized.includes("bảng giá")) {
    return "Tôi có thể gửi cho bạn thông tin gói dịch vụ và mức giá phù hợp. Bạn muốn tư vấn cho cá nhân hay doanh nghiệp?";
  }

  if (
    normalized.includes("liên hệ") ||
    normalized.includes("đội ngũ") ||
    normalized.includes("tư vấn")
  ) {
    return "Bạn có thể để lại nhu cầu ngay tại đây. Đội ngũ sẽ phản hồi nhanh để hỗ trợ bạn chi tiết hơn.";
  }

  return "Cảm ơn bạn đã nhắn tin. Tôi có thể hỗ trợ về dịch vụ, nội dung, hợp tác hoặc kết nối với đội ngũ tư vấn.";
}

function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      text: "Xin chào, tôi là AI Chat. Bạn có thể nhắn tin để được hỗ trợ ngay.",
    },
  ]);
  const chatbotRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    function handleClickOutside(event) {
      if (!open || !chatbotRef.current) return;
      if (chatbotRef.current.contains(event.target)) return;
      setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, open]);

  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");

    window.setTimeout(() => {
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: buildBotReply(trimmed),
      };
      setMessages((current) => [...current, botMessage]);
    }, 500);
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="chatbot-widget" ref={chatbotRef}>
      <div className="chatbot-panel" id="chatbot-bubble" hidden={!open}>
        <div className="chatbot-panel-header">
          <div>
            <p className="chatbot-title">AI Chat</p>
            <p className="chatbot-status">Đang trực tuyến</p>
          </div>
          <button
            className="chatbot-close"
            type="button"
            aria-label="Đóng chatbot"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="chatbot-messages" ref={messagesRef}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chatbot-message chatbot-message-${message.sender}`}
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <div className="chatbot-quick-actions">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              className="chatbot-chip"
              type="button"
              onClick={() => sendMessage(reply)}
            >
              {reply}
            </button>
          ))}
        </div>

        <form className="chatbot-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Nhập tin nhắn của bạn..."
            aria-label="Nhập tin nhắn"
          />
          <button className="chatbot-send" type="submit">
            Gửi
          </button>
        </form>
      </div>
      <button
        className="chatbot-fab"
        id="chatbot-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="chatbot-bubble"
        aria-label="Mở AI Chat"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="chatbot-fab-label">AI Chat</span>
        <span className="chatbot-face" aria-hidden="true">
          <span className="chatbot-antenna"></span>
          <span className="chatbot-head">
            <span className="chatbot-eyes"></span>
            <span className="chatbot-mouth"></span>
          </span>
        </span>
      </button>
    </div>
  );
}

export default ChatbotWidget;
