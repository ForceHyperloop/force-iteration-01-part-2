"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { StarsBackground } from "../components/ui/StarsBackground";
import { ShootingStars } from "../components/ui/ShootingStars";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });

    try {
      const response = await fetch("https://forcehyperloop-server.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({ submitted: true, submitting: false, error: null });

      setTimeout(() => {
        setStatus({ submitted: false, submitting: false, error: null });
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        error: error.message,
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-900 ">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Contact content */}
      <div className="relative z-10 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl w-full text-center mb-12">
          <h2
            className={`${styles.libreBarcode} text-4xl text-white sm:text-5xl mb-4`}
          >
            Join the revolution IN
            <br />
            high-speed transportation
            <br />
            with Force Hyperloop!
          </h2>
          <p className="text-gray-200 text-lg mb-2">
            We are pushing the boundaries of innovation to redefine the future
            of mobility.
          </p>
          <p className="text-gray-300 text-lg">
            Whether you're an engineer, a tech enthusiast, or an industry
            expert, we'd love to connect and collaborate.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-3xl bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-2xl overflow-hidden"
        >
          {/* Optional star background inside form */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
            <StarsBackground starDensity={0.00008} allStarsTwinkle={false} />
          </div>

          {/* Form status messages */}
          {status.error && (
            <div className="mb-4 p-4 bg-red-300/20 border border-red-400 text-red-100 rounded shadow-lg z-10 relative">
              {status.error}
            </div>
          )}
          {status.submitted && (
            <div className="mb-4 p-4 bg-green-300/20 border border-green-400 text-green-100 rounded shadow-lg z-10 relative">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 z-10 relative">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.submitting}
                className="glow-input mt-1 block w-full rounded-md border border-gray-500 bg-white/10 text-white placeholder-white/60 shadow-sm focus:ring-2 focus:ring-blue-500 sm:text-sm px-3 py-2"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.submitting}
                className="glow-input mt-1 block w-full rounded-md border border-gray-500 bg-white/10 text-white placeholder-white/60 shadow-sm focus:ring-2 focus:ring-blue-500 sm:text-sm px-3 py-2"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.submitting}
                rows={4}
                className="glow-input mt-1 block w-full rounded-md border border-gray-500 bg-white/10 text-white placeholder-white/60 shadow-sm focus:ring-2 focus:ring-blue-500 sm:text-sm px-3 py-2"
                placeholder="Your message..."
              />
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.submitting}
                className={`glow-button w-full flex justify-center py-3 px-4 border bg-white/5 border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  status.submitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "hover:bg-opacity-90"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {status.submitting
                  ? "Sending..."
                  : status.submitted
                  ? "Message Sent!"
                  : "Send Message"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
