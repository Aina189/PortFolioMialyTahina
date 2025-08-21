"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'alex.johnson@email.com',
      link: 'ramananiainamialy@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+261 34 84 129 99',
      link: 'tel:+261348412999'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Lot IVB 684 Ambohimanala Andoharanofotsy Tana 102 ',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedhttps://www.linkedin.com/in/mialytahiana/in.com', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {              "Contactez-moi"}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {"Rencontrons-nous"}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {"Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question."}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <a 
                        href={info.link} 
                        className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">{ "Suivez moi"}</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 group"
                    >
                      <social.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-blue-500 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}