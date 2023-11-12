import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email.trim() || !emailRegex.test(email)) {
      alert("that email address is not valid");
      return;
    }

    if(!email.trim() || !message.trum()) {
      alert("please fillout both the email and mesage portions, thank you");
      return ;
    }
    const formData = { email, message };

    fetch("https://getform.io/f/6388ce58-e971-4876-a25c-693527db2114", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response failed");
        }
        return res.text();
      })
      .then((data) => {
        console.log(data);
        alert("Thanks for reaching out! I will get back to you shortly!");

        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        alert("an error occured at the last checkpoint if only you could contact me to fix it...")
      })
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
export default Contact;
