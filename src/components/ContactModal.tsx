import React, { useState } from 'react';
import { X, Send, Mail, Phone, MapPin, Linkedin, ExternalLink, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialSubject }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject || 'Agendamento de Consultoria UX');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // open mailto
      const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
      )}`;
      window.location.href = mailto;
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = `Olá João Vitor! Meu nome é ${name || '[Seu Nome]'}, gostaria de conversar sobre: ${subject}`;
    const url = `https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-5 sm:p-8 text-white shadow-2xl space-y-5 sm:space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Atendimento Direto com João Vitor</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Vamos Iniciar o seu Projeto</h3>
          <p className="text-xs text-zinc-400">
            Preencha os dados abaixo para agendarmos uma conversa de alinhamento ou envie uma mensagem direta pelo WhatsApp.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-950 border border-emerald-800 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Solicitação Encaminhada!</h4>
            <p className="text-xs text-zinc-400 max-w-md mx-auto">
              Seu cliente de e-mail foi acionado com a mensagem formatada. Se preferir resposta imediata, utilize o botão do WhatsApp abaixo.
            </p>
            <button
              onClick={handleWhatsApp}
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-base font-mono"
            >
              Falar no WhatsApp Agora →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-zinc-300">Seu Nome / Empresa:</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos - Tech Health"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-zinc-300">Seu E-mail Corporativo:</label>
                <input
                  type="email"
                  required
                  placeholder="carlos@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-zinc-300">Assunto / Tipo de Serviço:</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-zinc-300">Mensagem / Resumo do Projeto:</label>
              <textarea
                rows={3}
                placeholder="Conte brevemente sobre seu produto, metas ou dúvidas..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base font-mono flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <Mail className="w-4 h-4" />
                Enviar Mensagem por E-mail
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base font-mono flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <MessageSquare className="w-4 h-4" />
                Conversar no WhatsApp
              </button>
            </div>
          </form>
        )}

        {/* Quick Contact Footer */}
        <div className="pt-4 border-t border-zinc-800 flex flex-wrap justify-between items-center text-xs text-zinc-400 font-mono">
          <span>📧 {PERSONAL_INFO.email}</span>
          <span>📱 {PERSONAL_INFO.phone}</span>
        </div>

      </div>
    </div>
  );
};
