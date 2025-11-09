export async function sayHello(req, res, next) {
  res.setHeader("Content-Type", "text/html");

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Health Check</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          h1 { color: #4CAF50; }
        </style>
      </head>
      <body>
        <h1>Server Status: Healthy</h1>
        <p>The server is running smoothly (v3.0.4).</p>
      </body>
    </html>
  `);
}
