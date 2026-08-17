import { createInterface } from "node:readline";

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

    console.log(`Your command was: ${cmds[0]}`);
    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/).filter(Boolean);
}
