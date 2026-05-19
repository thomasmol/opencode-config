import type { Plugin } from "@opencode-ai/plugin";

export const CurrentTimePlugin: Plugin = async ({ client }) => {
  return {
    event: async ({ event }) => {
      if (event.type !== "session.created") return;

      const now = new Date().toLocaleString("sv-SE", {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        hour12: false,
      });

      await client.session.prompt({
        path: { id: event.properties.info.id },
        body: {
          noReply: true,
          parts: [
            {
              type: "text",
              text: `Current local datetime: ${now}`,
            },
          ],
        },
      });
    },
  };
};
