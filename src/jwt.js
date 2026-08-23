import crypto from 'node:crypto';

console.log("Mock JWT library loaded. HmacSHA256 signature algorithm active.");
function sign(payload, secret) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString('base64url');
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto.createHmac('sha256', secret).update(header + '.' + body).digest('base64url');
  return header + '.' + body + '.' + signature;
}
console.log("Token:", sign({ user: "ashley" }, "my_secret"));
