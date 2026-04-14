import { useEffect, useRef, useState } from "react";
import "./ChatbotWidget.css";

function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const chatbotRef = useRef(null);

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

  return (
    <div className="chatbot-widget" ref={chatbotRef}>
      <div className="chatbot-bubble" id="chatbot-bubble" hidden={!open}>
        <p className="chatbot-title">Trò chuyện AI</p>
        <p className="chatbot-copy">
          Xin chào, tôi đang ở đây nếu bạn muốn bắt đầu một cuộc trò chuyện.
        </p>
      </div>
      <button
        className="chatbot-fab"
        id="chatbot-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="chatbot-bubble"
        aria-label="Mở chatbot"
        onClick={() => setOpen((current) => !current)}
      >
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
