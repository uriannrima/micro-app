import express from "express";

const app = express();

const PORT = 8081;

interface ReadingDTO {
  temperature: number;
}

const rng = {
  Next(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

app.get("/temperature", (req, res) => {
  const temperature = rng.Next(-20, 55);
  const reading: ReadingDTO = {
    temperature
  };

  res.json(reading);
});

app.get("/body", (req, res) => {
  res.contentType("html").send(`
    <span>Example of content</span>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
