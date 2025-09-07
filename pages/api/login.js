login.gs
import bcrypt from "bcryptjs"; // Optional if you want hashing later

let users = []; // Same temporary storage (or share with register)

export default function handler(req, res) {
  if (req.method === "POST") {
    const { phone, password } = req.body;

    const user = users.find((u) => u.phone === phone);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    return res.status(200).json({ message: "Login successful" });
  }

  res.status(405).json({ error: "Method not allowed" });
  }
