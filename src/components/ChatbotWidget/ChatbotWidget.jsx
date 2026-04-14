import { useEffect, useRef, useState } from "react";
import "./ChatbotWidget.css";

const quickReplies = [
  "BlindSpot AI TTG là gì?",
  "5 điểm mù lớn nhất của ngành AI là gì?",
  "Kiến trúc QSI → Signal Extraction → Scoring hoạt động ra sao?",
];

function buildBotReply(message) {
  const normalized = message.toLowerCase();

  if (
    normalized.includes("blindspot") ||
    normalized.includes("ttg là gì") ||
    normalized.includes("là gì")
  ) {
    return "BlindSpot AI TTG là hệ AI được xây dựng từ chuẩn Trạng Thái Gốc, tập trung soi ra điểm mù nhận thức thay vì chỉ trả lời theo dữ liệu số đông.";
  }

  if (
    normalized.includes("điểm mù") ||
    normalized.includes("ngành ai") ||
    normalized.includes("toàn cầu")
  ) {
    return "Theo dữ liệu của web, 5 điểm mù lớn là: thiên lệch dữ liệu, vòng phản hồi ngầm, hộp đen quyết định, thiếu chuẩn gốc và mục tiêu thương mại.";
  }

  if (
    normalized.includes("qsi") ||
    normalized.includes("signal") ||
    normalized.includes("scoring") ||
    normalized.includes("kiến trúc")
  ) {
    return "Kiến trúc lõi gồm 3 lớp: QSI Engine với 20 câu hỏi chuẩn, Signal Extraction chuyển dữ liệu thành 5 tín hiệu và Scoring Engine đo độ lệch trên TIME, FINANCE, REFLEX.";
  }

  if (
    normalized.includes("tài liệu") ||
    normalized.includes("pdf") ||
    normalized.includes("docx")
  ) {
    return "Trang hiện đã gắn trực tiếp các tài liệu trong thư mục data, gồm giới thiệu nền tảng, BlindSpot AI TTG V1, bài phân tích điểm mù và các PDF dự án.";
  }

  return "Tôi có thể hỗ trợ bạn tìm hiểu BlindSpot AI TTG, chuẩn Trạng Thái Gốc, 5 điểm mù của ngành AI, hoặc kiến trúc QSI → Signal Extraction → Scoring.";
}

function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      text: "Xin chào, tôi là AI Chat của BlindSpot AI TTG. Bạn có thể chọn một câu hỏi mẫu hoặc nhắn trực tiếp để tìm hiểu dữ liệu trên website.",
    },
  ]);
  const chatbotRef = useRef(null);
  const messagesRef = useRef(null);
  const skipOutsideCloseRef = useRef(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    function handleClickOutside(event) {
      if (!open || !chatbotRef.current) return;
      if (skipOutsideCloseRef.current) {
        skipOutsideCloseRef.current = false;
        return;
      }
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
    setShowQuickReplies(false);

    window.setTimeout(() => {
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: buildBotReply(trimmed),
      };
      setMessages((current) => [...current, botMessage]);
    }, 500);
  }

  function handleQuickReplyClick(reply) {
    skipOutsideCloseRef.current = true;
    sendMessage(reply);
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

        {showQuickReplies && (
          <div className="chatbot-quick-actions">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                className="chatbot-chip"
                type="button"
                onClick={() => handleQuickReplyClick(reply)}
              >
                {reply}
              </button>
            ))}
          </div>
        )}

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
