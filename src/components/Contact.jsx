import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_rz6uy3i",         // Your EmailJS service ID
      "template_lowehoo",        // Your EmailJS template ID
      {
        from_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "aaF9cgwnJW5h3HENn"        // Your EmailJS public key
    ).then(
      () => {
        toast.success("✅ Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        icon: "📩",
        style: {
          background: "rgba(13, 148, 136, 0.15)", // soft cyan tint
          color: "#ffffff",
          border: "1px solid rgba(99, 102, 241, 0.4)", // indigo border
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "12px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        },
      });

        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      },
      (error) => {
        toast.error("❌ Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        icon: "⚠️",
        style: {
          background: "rgba(244, 63, 94, 0.15)", // soft rose tint
          color: "#ffffff",
          border: "1px solid rgba(244, 63, 94, 0.4)", // rose border
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "12px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        },
      });
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="relative px-4 md:px-16 lg:px-28 py-20 text-white bg-gradient-to-br from-[#0f0b2b] via-[#1e123f] to-[#0a0923] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-[-60px] left-[-60px] w-[300px] h-[300px] bg-fuchsia-500 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-[-60px] right-[-80px] w-[400px] h-[400px] bg-indigo-400 opacity-20 blur-2xl rounded-full -z-10"></div>

      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        <span className="bg-clip-text text-transparent bg-white">
          Let’s Get In Touch
        </span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400 col-span-1"
          required
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => {
            const input = e.target.value;
            if (/^\d{0,10}$/.test(input)) {
              setFormData({ ...formData, phone: input });
            }
          }}
          placeholder="Phone Number"
          className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400 col-span-1"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400 col-span-2"
          required
        />

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400 col-span-2"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your needs..."
          rows="5"
          className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400 col-span-2"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-semibold px-6 py-3 rounded-xl col-span-2 hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
