import { Elysia } from "elysia";

const app = new Elysia().get("/", async () => {
  let text: string;

  // Use Bun API if available, otherwise use Node.js
  if (typeof Bun !== "undefined") {
    const file = Bun.file("index.txt");
    text = await file.text();
  } else {
    const { readFileSync } = await import("fs");
    const { join } = await import("path");
    const filePath = join(process.cwd(), "index.txt");
    text = readFileSync(filePath, "utf-8");
  }

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
});

export default app;
