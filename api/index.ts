import { Elysia } from "elysia";

const app = new Elysia().get("/", async () => {
  const file = Bun.file("index.txt");
  const text = await file.text();
  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
});

export default app;
