"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600">
            Nous sommes là pour répondre à vos questions et vous accompagner
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 flex items-center justify-center gap-2 transition-all"
              >
                <Send size={18} />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-light rounded-lg shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Adresse
                    </h4>
                    <p className="text-gray-600">
                      République du Congo
                      <br />
                      Brazzaville
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-light rounded-lg shrink-0">
                    <Mail size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:contact@handimobilitecongo.cg"
                      className="text-primary hover:underline"
                    >
                      contact@handimobilitecongo.cg
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-light rounded-lg shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Téléphone
                    </h4>
                    <a
                      href="tel:+242XXXXXXXXX"
                      className="text-gray-600 hover:text-primary"
                    >
                      +242 XX XXX XXXX
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="h-64 w-full relative">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=15.25%2C-4.30%2C15.35%2C-4.20&layer=mapnik&marker=-4.25,15.30"
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation HandiMobilité Congo - Brazzaville"
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  <MapPin size={14} className="inline mr-1 text-primary" />
                  Brazzaville, République du Congo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
