export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(() => {
    browser.omnibox.onInputEntered.addListener((text, disposition) => {
      if (text === "gh") browser.tabs.update({ url: "https://github.com" });
      if (text === "x") browser.tabs.update({ url: "https://x.com" });
    });
  });
});
