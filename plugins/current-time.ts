import type { Plugin } from "@opencode-ai/plugin";

export const CurrentTimePlugin: Plugin = async () => {
  return {
    "experimental.chat.system.transform": async (_input, output) => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const date = new Date();
      const day = date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone,
      });
      const time = date.toLocaleTimeString("en-GB", {
        timeZone,
        hour12: false,
      });

      output.system.push(`Current local datetime: ${day} - ${time} - ${timeZone}`);
    },
  };
};
