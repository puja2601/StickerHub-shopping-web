import React, { useEffect, useRef } from "react";
import {
  Form,
  useActionData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { toast } from "react-toastify";
import apiClent from "../api/apiClient";

const Contact = () => {
  const actiondata = useActionData();
  const formRef = useRef(null);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const submit = useSubmit();

  useEffect(() => {
    if (actiondata?.success) {
      formRef.current?.reset();
      toast.success("Message sent successfully.!");
    }
  }, [actiondata]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const toConfirm = window.confirm(
      "Are you sure you want to send this message?",
    );
    if (toConfirm) {
      const formData = new FormData(formRef.current);
      submit(formData, { method: "POST" });
    } else {
      toast.error("Message sending cancelled!");
    }
  };
  return (
    <div className="min-h-screen px-6 py-20 bg-white dark:bg-gray-700 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-pink-500">StickerHub</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Have a question, suggestion, or need help with your order? We'd love
            to hear from you!
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <div className="bg-gray-100 dark:bg-gray-600 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

            <p className="text-gray-600 dark:text-gray-300 leading-7 mb-8">
              Whether you have a question about our stickers, your order, or
              simply want to share some feedback, feel free to contact us.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-2xl">
                  📧
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    support@stickerhub.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">
                  🕒
                </div>

                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Saturday, 10 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 dark:bg-gray-600 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <Form
              ref={formRef}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="block font-medium mb-2">Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Mobile Number</label>

                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Enter Mobile number"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Message</label>

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold transition duration-300"
              >
                {isSubmitting ? "wait" : "send Message"}
              </button>
            </Form>
          </div>
        </div>

        {/* FAQ / Help Section */}
        <div className="mt-16 text-center bg-gray-100 dark:bg-gray-600 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-4">Need Help? 💬</h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-7">
            For questions about products, pricing, orders, or anything related
            to StickerHub, send us a message and we'll be happy to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export async function getContactedInfo({ request, param }) {
  const data = await request.formData();

  const contactedData = {
    name: data.get("name"),
    email: data.get("email"),
    mobileNumber: data.get("mobileNumber"),
    message: data.get("message"),
  };
  try {
    await apiClent.post("/contact", contactedData);
    return { success: "true" };
  } catch (error) {
    throw new Response(error.message || "Failed to submit Message", {
      status: error.status || 500,
    });
  }
}
