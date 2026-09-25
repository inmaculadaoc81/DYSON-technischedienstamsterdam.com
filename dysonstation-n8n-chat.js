import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

const SESSION_KEY = 'sessionId';
const INACTIVITY_MS = 5 * 60 * 1000;
const webhookUrl = 'https://sswebhookss.affirmatechnology.com/webhook/be1293ae-db62-4ab3-8204-d2ae42505d63/chat';
const target = document.querySelector('#n8n-chat');

// El botón se crea como respaldo visible aunque el módulo remoto de n8n tarde o falle.
const fallbackToggle = document.createElement('button');
fallbackToggle.type = 'button';
fallbackToggle.className = 'dysonstation-chat-fallback';
fallbackToggle.setAttribute('aria-label', 'Chatbot van DysonStation openen');
fallbackToggle.innerHTML = '<span aria-hidden="true">💬</span><span>Chat</span>';
document.body.appendChild(fallbackToggle);

const hideFallbackWhenReady = () => {
  const realToggle = target?.querySelector('.chat-window-toggle, [class*="chat-window-toggle"]');
  if (realToggle) fallbackToggle.classList.add('is-hidden');
};
const readyObserver = new MutationObserver(hideFallbackWhenReady);
if (target) readyObserver.observe(target, { childList: true, subtree: true });

if (target && !target.dataset.dysonstationChatInitialized) {
  target.dataset.dysonstationChatInitialized = 'true';

  fallbackToggle.addEventListener('click', () => {
    const realToggle = target.querySelector('.chat-window-toggle, [class*="chat-window-toggle"]');
    if (realToggle) realToggle.click();
  });

  createChat({
    webhookUrl,
    webhookConfig: { method: 'POST', headers: {} },
    target: '#n8n-chat',
    mode: 'window',
    chatInputKey: 'chatInput',
    chatSessionKey: SESSION_KEY,
    metadata: {},
    showWelcomeScreen: true,
    defaultLanguage: 'nl',
    initialMessages: [
      'Hallo 👋 Wat is er mis met je Dyson? Vertel ons het model en het probleem, dan helpen we je verder.'
    ],
    i18n: {
      nl: {
        title: 'DysonStation',
        subtitle: 'Assistent van de reparatieservice',
        footer: '',
        getStarted: 'START GESPREK',
        inputPlaceholder: 'Typ je bericht...'
      }
    }
  });

  setTimeout(hideFallbackWhenReady, 250);
  setTimeout(hideFallbackWhenReady, 1000);

  let lastActivity = Date.now();
  let expired = false;
  const markActivity = () => {
    if (Date.now() - lastActivity >= INACTIVITY_MS) expired = true;
    lastActivity = Date.now();
  };

  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(event =>
    window.addEventListener(event, markActivity, { passive: true })
  );

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && Date.now() - lastActivity >= INACTIVITY_MS) expired = true;
  });

  target.addEventListener('click', event => {
    if (!expired || !event.target.closest('.chat-window-toggle')) return;
    try { localStorage.removeItem(SESSION_KEY); } catch (_) {}
    expired = false;
    window.location.reload();
  }, true);
}