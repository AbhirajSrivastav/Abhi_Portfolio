const sendContact = (req, res) => {
  const { name, email, message } = req.body;
  // Mock send email
  console.log(`Contact form: ${name} (${email}): ${message}`);
  res.json({ success: true, message: "Message sent successfully!" });
};

module.exports = { sendContact };
