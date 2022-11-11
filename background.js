chrome.runtime.onMessage.addListener(function (msg, sender, senResponse) {
  if (msg.icon == true) {
    chrome.browserAction.setIcon({ path: 'bb.png', tabId: sender.tab.id });
    chrome.browserAction.setPopup({ popup: 'hello.html' });
  }
});
