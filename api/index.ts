import { Elysia } from "elysia";
import { readFileSync } from "fs";
import { join } from "path";

const app = new Elysia().get("/", async () => {
  const filePath = join(process.cwd(), "index.txt");
  const text = readFileSync(filePath, "utf-8");

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
});

export default app;
