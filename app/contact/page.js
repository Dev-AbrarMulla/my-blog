async function sendMessage(formData) {
  "use server";
  const name = formData.get("name");
  const message = formData.get("message");
  console.log("Contact form:", name, message);
}

export default function Contact() {
  return (
    <main>
      <h1>Contact</h1>
      <form action={sendMessage} style={{ display: "grid", gap: 8, maxWidth: 360 }}>
        <input name="name" placeholder="Your name" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}