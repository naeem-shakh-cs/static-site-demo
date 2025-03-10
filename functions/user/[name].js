export default function handler(request, response) {
  console.log(`Running on Node.js version: ${process.version}`);

  const name = request.query.name || "Guest"; // Use query parameter or default
  response.status(200).send(`Hello ${name}`);
}
