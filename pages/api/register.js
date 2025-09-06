let users = []; // Temporary storage (will reset on redeploy, replace with DB later)

export default function handler(req, res) {
  if (req.method === "POST") {
    const { phone, password, referCode } = req.body;

    // Basic validation
    if (!phone || !password) {
      return res.status(400).json({ error: "Phone and password required" });
    }

    // Check if user already exists
    const exists = users.find((user) => user.phone === phone);
    if (exists) {
      return res.status(400).json({ error: "Phone already registered" });
    }

    // Save user
    users.push({ phone, password, referCode });
    return res.status(200).json({ message: "User registered successfully" });
  }

  res.status(405).json({ error: "Method not allowed" });
}
