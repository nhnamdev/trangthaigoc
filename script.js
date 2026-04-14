const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector("#search-panel");
const chatbotToggle = document.querySelector("#chatbot-toggle");
const chatbotBubble = document.querySelector("#chatbot-bubble");

function setExpanded(button, value) {
  if (button) {
    button.setAttribute("aria-expanded", String(value));
  }
}

function closeChatbot() {
  if (!chatbotBubble) return;
  chatbotBubble.hidden = true;
  setExpanded(chatbotToggle, false);
}

function openChatbot() {
  if (!chatbotBubble) return;
  chatbotBubble.hidden = false;
  setExpanded(chatbotToggle, true);
}

function closeSearch() {
  if (!searchPanel) return;
  searchPanel.hidden = true;
  searchPanel.classList.remove("active");
  document.body.classList.remove("search-open");
  setExpanded(searchToggle, false);
}

function openSearch() {
  if (!searchPanel) return;
  searchPanel.hidden = false;
  searchPanel.classList.add("active");
  document.body.classList.add("search-open");
  setExpanded(searchToggle, true);
}

function closeMenu() {
  if (!mobileMenu) return;
  mobileMenu.hidden = true;
  mobileMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
  setExpanded(menuToggle, false);
}

function openMenu() {
  if (!mobileMenu) return;
  mobileMenu.hidden = false;
  mobileMenu.classList.add("active");
  document.body.classList.add("menu-open");
  setExpanded(menuToggle, true);
}

if (searchToggle) {
  searchToggle.addEventListener("click", () => {
    const active = searchPanel && !searchPanel.hidden;
    if (active) {
      closeSearch();
    } else {
      closeMenu();
      openSearch();
    }
  });
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const active = mobileMenu && !mobileMenu.hidden;
    if (active) {
      closeMenu();
    } else {
      closeSearch();
      openMenu();
    }
  });
}

if (chatbotToggle) {
  chatbotToggle.addEventListener("click", () => {
    const active = chatbotBubble && !chatbotBubble.hidden;
    if (active) {
      closeChatbot();
    } else {
      openChatbot();
    }
  });
}

document.querySelectorAll('.mobile-menu a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!chatbotToggle || !chatbotBubble) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (chatbotBubble.hidden) return;
  if (chatbotBubble.contains(target) || chatbotToggle.contains(target)) return;
  closeChatbot();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeSearch();
    closeChatbot();
  }
});
