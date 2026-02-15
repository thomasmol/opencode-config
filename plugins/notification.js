export const NotificationPlugin = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await $`osascript -e 'display notification "Session completed" with title "OpenCode" sound name "Hero"'`;
      }
      if (event.type === "permission.asked") {
        await $`osascript -e 'display notification "Permission requested" with title "OpenCode" sound name "Morse"'`;
      }
    },
  };
};
