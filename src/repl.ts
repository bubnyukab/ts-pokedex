import { createInterface } from "node:readline";
import { getCommands } from "./command_registry.js";

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on("line", async (input) => {
    const cmds = cleanInput(input);
    if (cmds.length === 0) {
      rl.prompt();
      return;
    }

    const cmdRegistry = getCommands();
    const cmd = cmdRegistry[cmds[0]];
    if (cmd) {
      cmd.callback(cmdRegistry);
    }
    console.log();

    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/).filter(Boolean);
}
