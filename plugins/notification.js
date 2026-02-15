export const NotificationPlugin = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await $`osascript -e 'display notification "Session completed" with title "OpenCode" sound name "Hero"'`;
      }
      if (event.type === "permission.asked") {
        const tool = event.properties?.tool ?? "unknown";
        const command = event.properties?.args?.command ?? event.properties?.command ?? "";
        const body = command ? `${tool}: ${command}` : tool;
        const safe = body.replace(/[\\"]/g, " ").replace(/'/g, " ").slice(0, 200);
        const script = `display notification "${safe}" with title "OpenCode: Permission requested" sound name "Morse"`;
        await $`osascript -e ${script}`;
      }
    },
  };
};
