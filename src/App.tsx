/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Star, Lock, Check, Clock, MapPin, MapPinOff, Activity, ShieldCheck, ChevronRight, HeartPulse, AlertCircle, Stethoscope, MessageCircle, Home, ClipboardList, CheckCircle, Lightbulb, UserCheck, BriefcaseMedical, Heart, Instagram, Facebook, BadgeCheck, Microscope, FileText, HomeIcon, StethoscopeIcon, Info, Verified, HeartIcon, ClipboardCheck, Briefcase, Award, ArrowLeft, ArrowRight, Bed, Edit3, UserCheckIcon, StethoscopeIcon as StethoscopeIconAlt, Car, Plus, Shield, Zap, Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";
import { AccordionComponent } from './components/ui/faq-accordion';
import { Footer } from './components/ui/modem-animated-footer';

const treatments = [
  {
    title: "Feridas Crônicas",
    img: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem03_feridas_cronicas.webp",
    desc: "Tratamento especializado para feridas de longa duração que não fecham.",
    icon: <Clock className="w-5 h-5" />
  },
  {
    title: "Feridas em Diabéticos",
    img: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem05_feridas_diabeticos.jpeg",
    desc: "Cuidados preventivos e curativos avançados para o pé diabético.",
    icon: <Stethoscope className="w-5 h-5" />
  },
  {
    title: "Feridas por Má Circulação",
    img: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem06_feridas_macirculacao.webp",
    desc: "Úlceras venosas e arteriais tratadas com as melhores tecnologias.",
    icon: <Activity className="w-5 h-5" />
  },
  {
    title: "Feridas Pós-Cirúrgicas",
    img: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem07_feridas_p%C3%B3s_cirurgia.jpg",
    desc: "Acompanhamento seguro para uma recuperação cirúrgica sem complicações.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: "Lesões por Pressão",
    img: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem08_feridas_pressao.jpg",
    desc: "Prevenção e tratamento de escaras em pacientes com mobilidade reduzida.",
    icon: <Bed className="w-5 h-5" />
  },
  {
    title: "Feridas Infectadas",
    img: "https://docs.qozt.com.br/landing_pages/doutorFeridas/Imagem04_feridas_infectadas.jpeg",
    desc: "Controle rigoroso de infecção e biofilme para acelerar a cicatrização.",
    icon: <AlertCircle className="w-5 h-5" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 relative">
      {/* 1. Navigation Bar (Floating) */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[95%] max-w-5xl bg-white/95 backdrop-blur-md rounded-full px-4 md:px-6 py-2.5 md:py-3 flex justify-between items-center z-50 shadow-sm border border-slate-200/50">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <img 
            src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/doutorFeridas/logo_doutor_feridas_home_care.png" 
            alt="Doutor Feridas" 
            className="h-8 md:h-12 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700 uppercase tracking-tight">
          <a href="#inicio" className="hover:text-brand-500 transition-colors">Início</a>
          <a href="#tratamentos" className="hover:text-brand-500 transition-colors">Tratamentos</a>
          <a href="#diferenciais" className="hover:text-brand-500 transition-colors">Diferenciais</a>
          <a href="#faq" className="hover:text-brand-500 transition-colors">FAQ</a>
        </div>

        <button className="btn-whatsapp rounded-full px-4 md:px-6 py-2 md:py-2.5 flex items-center gap-2 font-bold text-xs md:text-sm">
          <Phone className="w-3.5 h-3.5 md:w-4 h-4" />
          <span className="hidden sm:inline">Agendar visita</span>
          <span className="sm:hidden">Agendar</span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-bold text-slate-800 uppercase tracking-wide">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Tratamentos', href: '#tratamentos' },
                { label: 'Diferenciais', href: '#diferenciais' },
                { label: 'Dúvidas (FAQ)', href: '#faq' }
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-slate-100"
                >
                  {item.label}
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </a>
              ))}
              <a 
                href="#"
                className="mt-8 btn-whatsapp rounded-2xl py-5 flex items-center justify-center gap-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                FALAR COM ESPECIALISTA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Section */}
      <section id="inicio" className="min-h-[100dvh] rounded-[2rem] mx-2 md:mx-4 mt-4 relative overflow-hidden flex flex-col justify-center items-center pb-16 px-6 md:px-10 shadow-sm group">
        {/* Background Image with subtle zoom effect */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] group-hover:scale-110"
          style={{ backgroundImage: 'url("https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/doutorFeridas/van_doutor_feridas.png")' }}
        />
        
        {/* Advanced Vignette and Dynamic Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-900/40 via-brand-900/60 to-brand-900/90" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,58,107,0.4)_100%)]" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-16"
        >
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[2.618rem] md:text-[3.5rem] lg:text-[4.236rem] font-bold text-white leading-[1.1] mb-8 font-display drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] tracking-tight"
          >
            Tratamento especializado de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-300 animate-pulse-slow">
              feridas crônicas
            </span> <br/>
            na sua casa.
          </motion.h1>

          {/* Subheadline with Glassmorphism Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative px-6 py-4 mb-12"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl -rotate-1 hidden md:block" />
            <p className="relative z-10 max-w-2xl text-white/95 text-base md:text-xl font-medium leading-relaxed drop-shadow-sm">
              Sem sair de casa. Sem fila. Sem hospital. Nosso <strong>enfermeiro especialista</strong> vai até você com <strong>tecnologia laser</strong>, curativos avançados e o protocolo validado pelo Doutor Feridas.
            </p>
          </motion.div>

          {/* CTA Button with added impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full flex flex-col items-center"
          >
            <button className="btn-whatsapp rounded-full px-8 md:px-12 py-3.5 md:py-4.5 flex items-center justify-center gap-3 md:gap-4 font-bold text-lg md:text-xl w-full sm:w-auto min-w-[300px] md:min-w-[400px] mb-12 group/btn">
              <Phone className="w-5 h-5 md:w-6 md:h-6 relative z-10 animate-shake" />
              <span className="relative z-10 tracking-wide">Agendar visita agora</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            </button>
          </motion.div>

          {/* Premium Pills Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            {[
              { text: 'Curativo domiciliar', icon: <HomeIcon className="w-5 h-5 text-accent-400" /> },
              { text: 'Laserterapia', icon: <Zap className="w-5 h-5 text-accent-400" /> },
              { text: 'Avaliação gratuita', icon: <Sparkles className="w-5 h-5 text-accent-400" /> }
            ].map((pill, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl text-white rounded-2xl px-6 py-3.5 text-base border border-white/20 flex items-center gap-3 font-semibold shadow-lg hover:bg-white/20 hover:border-white/40 transition-all cursor-default">
                {pill.icon}
                {pill.text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating background shapes for extra depth */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
      </section>

      {/* 3. Problem Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full py-24 lg:py-32 px-6 md:px-10 overflow-hidden" 
        style={{
          fontFamily: "'DM Sans', sans-serif",
          backgroundColor: '#f8fafc',
          backgroundImage: 'radial-gradient(circle at top left, rgba(200, 230, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at bottom right, rgba(43, 189, 186, 0.05) 0%, transparent 40%)'
        }}
      >
        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Header Section */}
          <motion.header 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-[#2BBDBA] uppercase mb-4">
              VOCÊ SE IDENTIFICA?
            </p>
            <h2 className="text-[1.618rem] md:text-[2.25rem] lg:text-[2.618rem] font-bold text-[#0C3A6B] mb-6 leading-tight max-w-4xl mx-auto tracking-tight font-display">
              A ferida não cicatriza mesmo com curativo caseiro?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Milhares de brasileiros convivem com <strong className="font-bold text-[#0C3A6B]">feridas crônicas</strong> sem saber que existe um <strong className="font-bold text-[#0C3A6B]">tratamento especializado</strong> que vai até a sua casa.
            </p>
          </motion.header>

          {/* Grid Section */}
          <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Card 1 */}
            <motion.article 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="card-elegant rounded-2xl p-8 flex items-start gap-5 group"
            >
              <div className="flex-shrink-0 bg-[#2BBDBA]/10 p-3 rounded-xl group-hover:bg-[#2BBDBA]/20 transition-colors">
                <Clock className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0C3A6B] text-xl leading-snug mb-2 font-display" style={{ textWrap: 'balance' }}>
                  A ferida está aberta há semanas ou meses sem melhora...
                </h3>
                <p className="text-slate-500 text-[15px] font-medium">
                  ...mesmo com pomada e curativo de farmácia.
                </p>
              </div>
            </motion.article>

            {/* Card 2 */}
            <motion.article 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="card-elegant rounded-2xl p-8 flex items-start gap-5 group"
            >
              <div className="flex-shrink-0 bg-[#2BBDBA]/10 p-3 rounded-xl group-hover:bg-[#2BBDBA]/20 transition-colors">
                <Activity className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0C3A6B] text-xl leading-snug mb-2 font-display" style={{ textWrap: 'balance' }}>
                  Tem diabetes e percebeu uma ferida no pé ou perna...
                </h3>
                <p className="text-slate-500 text-[15px] font-medium">
                  ...que não demonstra sinais de cicatrização.
                </p>
              </div>
            </motion.article>

            {/* Card 3 */}
            <motion.article 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="card-elegant rounded-2xl p-8 flex items-start gap-5 group"
            >
              <div className="flex-shrink-0 bg-[#2BBDBA]/10 p-3 rounded-xl group-hover:bg-[#2BBDBA]/20 transition-colors">
                <Home className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0C3A6B] text-xl leading-snug mb-2 font-display" style={{ textWrap: 'balance' }}>
                  Seu familiar está acamado e com escara de pressão...
                </h3>
                <p className="text-slate-500 text-[15px] font-medium">
                  ...e sair de casa para consultas é um desafio.
                </p>
              </div>
            </motion.article>

            {/* Card 4 */}
            <motion.article 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="card-elegant rounded-2xl p-8 flex items-start gap-5 group"
            >
              <div className="flex-shrink-0 bg-[#2BBDBA]/10 p-3 rounded-xl group-hover:bg-[#2BBDBA]/20 transition-colors">
                <MapPinOff className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0C3A6B] text-xl leading-snug mb-2 font-display" style={{ textWrap: 'balance' }}>
                  Já buscou UPAs e postos de saúde diversas vezes...
                </h3>
                <p className="text-slate-500 text-[15px] font-medium">
                  ...e ninguém resolveu definitivamente o problema.
                </p>
              </div>
            </motion.article>
          </motion.section>

          {/* Footer Text Block */}
          <motion.section 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="footer-bracket py-6 px-8 rounded-r-2xl">
              <p className="text-slate-700 text-lg leading-relaxed">
                Se você se identificou com essas situações, o <strong className="font-bold text-[#0C3A6B]">Doutor Feridas Home Care</strong> foi criado para você. O especialista vai até a sua casa com a tecnologia necessária para tratar o que outros não conseguiram.
              </p>
            </div>
          </motion.section>
        </div>
      </motion.section>

      {/* 4. Solution/Method Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative px-6 md:px-12 py-20 overflow-hidden"
      >
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/doutorFeridas/Generated%20Video%20March%2027%2C%202026%20-%203_55PM.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-brand-900/80 z-0"></div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2BBDBA]/5 rounded-full -mr-48 -mt-48 blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0C3A6B]/20 rounded-full -ml-48 -mb-48 blur-3xl z-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Centralizado */}
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2BBDBA]/10 text-[#2BBDBA] font-bold text-xs tracking-widest mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              FLUXO DE ATENDIMENTO
            </span>
            <h2 className="text-[1.618rem] md:text-[2.25rem] lg:text-[2.618rem] font-bold text-white mb-6 font-display">
              Como funciona o <span className="text-[#2BBDBA]">atendimento domiciliar?</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Um processo simplificado para garantir que você ou seu familiar receba o melhor cuidado sem precisar sair de casa.
            </p>
          </div>

          {/* Trilha Visual e Estágios */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            className="relative mt-20 mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

              {/* Trilha com Carrinho (Desktop) */}
              <div className="hidden md:block absolute top-12 z-0" style={{ left: '16.67%', right: '16.67%', height: '2px' }}>
                {/* Calçada base */}
                <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                {/* Linha de progresso */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#2BBDBA] via-[#2BBDBA]/60 to-[#2BBDBA]/20 rounded-full origin-left"
                ></motion.div>
                {/* Carrinho animado */}
                <div
                  className="absolute w-9 h-9 rounded-full bg-[#0C3A6B] border-2 border-[#2BBDBA] flex items-center justify-center shadow-[0_0_18px_rgba(43,189,186,0.7)] pointer-events-none"
                  style={{ top: '50%', animation: 'carDrive 6s ease-in-out infinite' }}
                >
                  <Car className="w-4 h-4 text-[#2BBDBA]" />
                </div>
              </div>

              {/* Passo 1 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 }
                }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-[#0C3A6B] border border-[#2BBDBA]/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#2BBDBA] group-hover:border-[#2BBDBA] group-hover:shadow-[0_0_30px_rgba(43,189,186,0.4)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <MessageCircle className="w-10 h-10 text-[#2BBDBA] group-hover:text-[#0C3A6B] transition-colors" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#2BBDBA] text-[#0C3A6B] font-black flex items-center justify-center text-xs shadow-[0_0_12px_rgba(43,189,186,0.5)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    01
                  </div>
                </div>
                <h3 className="text-[1.618rem] font-bold text-white mb-3 font-display">Você entra em contato</h3>
                <p className="text-white/70 leading-relaxed text-sm max-w-xs mx-auto">
                  Preenche o formulário ou manda mensagem no WhatsApp. Retornamos em até 1 hora para agendar a visita.
                </p>
              </motion.div>

              {/* Passo 2 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 }
                }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-[#0C3A6B] border border-[#2BBDBA]/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#2BBDBA] group-hover:border-[#2BBDBA] group-hover:shadow-[0_0_30px_rgba(43,189,186,0.4)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Home className="w-10 h-10 text-[#2BBDBA] group-hover:text-[#0C3A6B] transition-colors" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#2BBDBA] text-[#0C3A6B] font-black flex items-center justify-center text-xs shadow-[0_0_12px_rgba(43,189,186,0.5)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    02
                  </div>
                </div>
                <h3 className="text-[1.618rem] font-bold text-white mb-3 font-display">O especialista vai até a sua casa</h3>
                <p className="text-white/70 leading-relaxed text-sm max-w-xs mx-auto">
                  Nosso enfermeiro chega no dia combinado com curativos avançados, laserterapia e todos os insumos. Você só abre a porta.
                </p>
              </motion.div>

              {/* Passo 3 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 }
                }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-[#0C3A6B] border border-[#2BBDBA]/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#2BBDBA] group-hover:border-[#2BBDBA] group-hover:shadow-[0_0_30px_rgba(43,189,186,0.4)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <ShieldCheck className="w-10 h-10 text-[#2BBDBA] group-hover:text-[#0C3A6B] transition-colors" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#2BBDBA] text-[#0C3A6B] font-black flex items-center justify-center text-xs shadow-[0_0_12px_rgba(43,189,186,0.5)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    03
                  </div>
                </div>
                <h3 className="text-[1.618rem] font-bold text-white mb-3 font-display">Tratamento até a cicatrização completa</h3>
                <p className="text-white/70 leading-relaxed text-sm max-w-xs mx-auto">
                  Avaliação, protocolo personalizado e acompanhamento contínuo até a alta. Tudo no conforto da sua casa.
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* CTA Complementar (Bento Card Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2BBDBA]/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#2BBDBA]" />
              </div>
              <div>
                <p className="text-white font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Agendamento rápido e flexível</p>
                <p className="text-white/70 text-sm">Atendimento inclusive em fins de semana e feriados.</p>
              </div>
            </div>
            <button className="btn-whatsapp w-full md:w-auto px-8 py-4 font-bold rounded-xl flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              AGENDAR MINHA AVALIAÇÃO AGORA
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* 4.5. Por que somos diferentes */}
      <motion.section 
        id="diferenciais" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6 overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 rounded-full bg-[#2BBDBA]/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 rounded-full bg-[#0C3A6B]/5 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
          >
            <span className="text-[#2BBDBA] font-bold text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>POR QUE SOMOS DIFERENTES</span>
            <h2 className="text-[#0C3A6B] font-bold text-[1.618rem] md:text-[2.25rem] lg:text-[2.618rem] max-w-3xl mx-auto leading-tight font-display">
              Por que o Doutor Feridas Home Care é referência no Brasil
            </h2>
          </motion.div>

          {/* Differentials Grid */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
              className="group bg-white p-8 rounded-2xl card-shadow border border-slate-100 hover:border-[#2BBDBA]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[#2BBDBA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ClipboardCheck className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-xl leading-snug mb-3 font-display">
                Método Doutor Feridas
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Mais de 20 anos exclusivamente dedicados ao tratamento de feridas crônicas.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
              className="group bg-white p-8 rounded-2xl card-shadow border border-slate-100 hover:border-[#2BBDBA]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[#2BBDBA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-xl leading-snug mb-3 font-display">
                Laserterapia em domicílio
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Acesso a laserterapia para feridas crônicas diretamente na sua casa.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
              className="group bg-white p-8 rounded-2xl card-shadow border border-slate-100 hover:border-[#2BBDBA]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[#2BBDBA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-xl leading-snug mb-3 font-display">
                Enfermeiro estomaterapeuta
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Enfermeiro especialista em feridas com suporte médico contínuo.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
              className="group bg-white p-8 rounded-2xl card-shadow border border-slate-100 hover:border-[#2BBDBA]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[#2BBDBA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BriefcaseMedical className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-xl leading-snug mb-3 font-display">
                Mala completa inclusa
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Todos os curativos avançados e insumos especializados chegam com o profissional.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
              className="group bg-white p-8 rounded-2xl card-shadow border border-slate-100 hover:border-[#2BBDBA]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[#2BBDBA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-xl leading-snug mb-3 font-display">
                Acompanhamento até a alta
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Não é visita avulsa. É acompanhamento do diagnóstico até a cicatrização.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
              className="group bg-white p-8 rounded-2xl card-shadow border border-slate-100 hover:border-[#2BBDBA]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[#2BBDBA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-xl leading-snug mb-3 font-display">
                Cuidado humanizado
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Tratamos a pessoa, não só a ferida. Abordagem integral e personalizada.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. Services Carousel Section */}
      <motion.section 
        id="tratamentos" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20 px-6 md:px-12 lg:px-24 overflow-hidden relative"
      >
        {/* Abstract Background Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0C3A6B]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#2BBDBA]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Centralized Header Section */}
          <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
            <span className="text-[#2BBDBA] font-bold text-sm tracking-widest uppercase mb-4 block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Especialidades Clínicas</span>
            <h2 className="text-[#0C3A6B] font-bold text-[1.618rem] md:text-[2.25rem] lg:text-[2.618rem] leading-tight mb-6 font-display">
              Feridas que tratamos em casa
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Oferecemos tecnologia avançada e cuidados humanizados no conforto do seu lar, garantindo protocolos hospitalares com a segurança de uma equipe especializada.
            </p>
          </div>

          {/* Carousel Container with Infinite Animation */}
          <div className="relative overflow-hidden group/carousel">
            <motion.div 
              className="flex gap-6 pb-8"
              animate={{
                x: [0, -2256], // 6 cards * (350px + 24px gap) = 2244 roughly, let's adjust for exact set repeat
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
              whileHover={{ x: undefined }} // Stop animation on hover
              drag="x" // Enable manual swipe on mobile
              dragConstraints={{ left: -2256, right: 0 }}
            >
              {[...treatments, ...treatments].map((item, idx) => (
                <div key={idx} className="min-w-[300px] md:min-w-[350px] flex-shrink-0">
                  <div className="group h-full flex flex-col glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
                    <div className="relative h-60 overflow-hidden">
                      <div className="absolute inset-0 bg-[#0C3A6B]/10 group-hover:bg-[#0C3A6B]/0 transition-colors duration-500 z-10"></div>
                      <img 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        alt={item.title} 
                        src={item.img} 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute top-4 right-4 z-20">
                        <span className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#2BBDBA] shadow-sm">
                          {item.icon}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow bg-white">
                      <h3 className="text-[#0C3A6B] font-bold text-xl md:text-[1.618rem] mb-3 leading-tight font-display">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-8">
                        {item.desc}
                      </p>
                      <div className="mt-auto">
                        <span className="h-1 w-16 bg-[#2BBDBA] block rounded-full"></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Gradient Overlays for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>

        </div>
      </motion.section>

      {/* 6. Stats Section (New Design) */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative px-6 md:px-10 py-20 lg:py-32 w-full overflow-hidden" 
        style={{
          background: 'radial-gradient(circle at center, #0a2e4b 0%, #051a32 100%)',
        }}
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        
        {/* Glowing background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#2BBDBA]/10 to-transparent rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <header className="text-center mb-16">
            <p className="text-[#2BBDBA] uppercase tracking-widest text-sm font-semibold mb-3">Nossos números</p>
            <h2 className="text-[1.618rem] md:text-[2.25rem] lg:text-[2.618rem] font-bold max-w-3xl mx-auto leading-tight text-white font-display">
              A referência em cicatrização no Brasil.
            </h2>
          </header>

          {/* Stats Grid */}
          <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-8 lg:gap-16 mb-20 w-full">
            {/* Stat 1 */}
            <article className="relative w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] rounded-full flex flex-col items-center justify-center" style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
              boxShadow: 'inset 0 0 20px rgba(43, 189, 186, 0.2)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              {/* LED Ring */}
              <div className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-full led-ring pointer-events-none" />
              {/* Hot spot rotativo */}
              <div className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-full pointer-events-none" style={{ animation: 'spin 5s linear infinite' }}>
                <div className="absolute top-0 left-1/2 w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={{
                  background: 'radial-gradient(circle, white 0%, rgba(43,189,186,0.9) 35%, transparent 70%)',
                  filter: 'blur(4px)',
                  opacity: 0.95,
                }} />
              </div>
              <div className="z-20 flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(46, 196, 182, 0.3)',
                  boxShadow: '0 0 10px rgba(46, 196, 182, 0.2)',
                }}>
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#2BBDBA]" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">+20 ANOS</h3>
                <p className="text-[10px] sm:text-xs text-gray-300 uppercase tracking-widest text-center px-4">DE EXPERIÊNCIA</p>
              </div>
            </article>

            {/* Stat 2 (Middle - larger) */}
            <article className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full flex flex-col items-center justify-center" style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
              boxShadow: 'inset 0 0 20px rgba(43, 189, 186, 0.2)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              {/* LED Ring */}
              <div className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-full led-ring pointer-events-none" />
              {/* Hot spot rotativo (sentido inverso para variar) */}
              <div className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-full pointer-events-none" style={{ animation: 'spin 4s linear infinite reverse' }}>
                <div className="absolute top-0 left-1/2 w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={{
                  background: 'radial-gradient(circle, white 0%, rgba(43,189,186,0.9) 35%, transparent 70%)',
                  filter: 'blur(4px)',
                  opacity: 0.95,
                }} />
              </div>
              <div className="z-20 flex flex-col items-center sm:mt-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(46, 196, 182, 0.3)',
                  boxShadow: '0 0 10px rgba(46, 196, 182, 0.2)',
                }}>
                  <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#2BBDBA]" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">+8M CASOS</h3>
                <p className="text-[10px] sm:text-xs text-gray-300 uppercase tracking-widest text-center px-4">TRATADOS NO BRASIL</p>
              </div>
            </article>

            {/* Stat 3 */}
            <article className="relative w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] rounded-full flex flex-col items-center justify-center" style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
              boxShadow: 'inset 0 0 20px rgba(43, 189, 186, 0.2)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              {/* LED Ring */}
              <div className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-full led-ring pointer-events-none" />
              {/* Hot spot rotativo */}
              <div className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-full pointer-events-none" style={{ animation: 'spin 6s linear infinite' }}>
                <div className="absolute top-0 left-1/2 w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={{
                  background: 'radial-gradient(circle, white 0%, rgba(43,189,186,0.9) 35%, transparent 70%)',
                  filter: 'blur(4px)',
                  opacity: 0.95,
                }} />
              </div>
              <div className="z-20 flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(46, 196, 182, 0.3)',
                  boxShadow: '0 0 10px rgba(46, 196, 182, 0.2)',
                }}>
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 text-[#2BBDBA]" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">100%</h3>
                <p className="text-[10px] sm:text-xs text-gray-300 uppercase tracking-widest text-center px-4">ATENDIMENTO DOMICILIAR</p>
              </div>
            </article>
          </section>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <a className="btn-whatsapp inline-flex items-center justify-center font-bold py-4 px-8 rounded-full" href="#">
              <Phone className="w-5 h-5 mr-3" />
              AGENDAR VISITA
            </a>
          </div>
        </div>
      </motion.section>

      {/* 6.5. Indicado para você */}
      <motion.section 
        id="diferenciais"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-6 md:px-10 py-20 lg:py-24 bg-[#f2f7fa] w-full"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-[1.618rem] md:text-[2.25rem] lg:text-[2.618rem] font-bold text-[#0C3A6B] mb-4 tracking-tight font-display">
              O Doutor Feridas Home Care é para você
            </h2>
          </header>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <article className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left transition-transform hover:-translate-y-1 duration-300" style={{ borderTop: '4px solid #2BBDBA' }}>
              <div className="bg-[#2BBDBA]/10 rounded-lg p-3 mb-4">
                <Plus className="w-7 h-7 text-[#0C3A6B]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-base mb-2 font-display">Ferida que não cicatriza</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ferida aberta há mais de 2 semanas sem melhora, mesmo com curativo convencional.
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left transition-transform hover:-translate-y-1 duration-300" style={{ borderTop: '4px solid #2BBDBA' }}>
              <div className="bg-[#2BBDBA]/10 rounded-lg p-3 mb-4">
                <HeartPulse className="w-7 h-7 text-[#0C3A6B]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-base mb-2 font-display">Pé diabético</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Diabetes e uma ferida nos pés ou pernas que não demonstra sinais de cicatrização.
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left transition-transform hover:-translate-y-1 duration-300" style={{ borderTop: '4px solid #2BBDBA' }}>
              <div className="bg-[#2BBDBA]/10 rounded-lg p-3 mb-4">
                <Clock className="w-7 h-7 text-[#0C3A6B]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-base mb-2 font-display">Mobilidade reduzida</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dificuldade de locomoção que torna deslocamentos ao hospital um desafio.
              </p>
            </article>

            {/* Card 4 */}
            <article className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left transition-transform hover:-translate-y-1 duration-300" style={{ borderTop: '4px solid #2BBDBA' }}>
              <div className="bg-[#2BBDBA]/10 rounded-lg p-3 mb-4">
                <UserCheck className="w-7 h-7 text-[#0C3A6B]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-base mb-2 font-display">Cuidador familiar</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cuida de idoso ou familiar acamado com ferida em casa e precisa de suporte especializado.
              </p>
            </article>

            {/* Card 5 */}
            <article className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left transition-transform hover:-translate-y-1 duration-300" style={{ borderTop: '4px solid #2BBDBA' }}>
              <div className="bg-[#2BBDBA]/10 rounded-lg p-3 mb-4">
                <BriefcaseMedical className="w-7 h-7 text-[#0C3A6B]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-base mb-2 font-display">Evitar hospitalizações</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Quer evitar idas frequentes ao hospital ou clínica para curativos periódicos.
              </p>
            </article>

            {/* Card 6 */}
            <article className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left transition-transform hover:-translate-y-1 duration-300" style={{ borderTop: '4px solid #2BBDBA' }}>
              <div className="bg-[#2BBDBA]/10 rounded-lg p-3 mb-4">
                <AlertCircle className="w-7 h-7 text-[#0C3A6B]" />
              </div>
              <h3 className="font-bold text-[#0C3A6B] text-base mb-2 font-display">Sem resultado anterior</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Já fez tratamento em outros lugares e não obteve resultado satisfatório.
              </p>
            </article>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-8">
            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-[#85d0c6] to-[#6ec0b5] rounded-xl p-6 sm:p-8 text-center text-gray-900 w-full shadow-md">
              <p className="text-base sm:text-lg mb-1">
                Se você se identificou, seu próximo passo é simples:
              </p>
              <p className="text-base sm:text-lg mb-2">
                entre em contato e a nossa equipe cuida do resto.
              </p>
              <p className="text-lg sm:text-xl font-bold">
                A primeira avaliação é gratuita.
              </p>
            </div>

            {/* Action Button */}
            <a className="btn-whatsapp inline-flex items-center justify-center px-8 py-4 font-bold rounded-full text-lg" href="#">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.06 6.988 2.943a9.894 9.894 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar visita
            </a>
          </div>
        </div>
      </motion.section>

      {/* 6.6. CTA Banner */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-10 py-20 lg:py-28 bg-brand-700 w-full text-center"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-accent-200 font-bold tracking-wider uppercase text-sm mb-4">
            A GENTE VAI ATÉ VOCÊ
          </div>
          <h2 className="text-[1.618rem] md:text-[2.25rem] lg:text-[2.618rem] font-bold text-white leading-tight mb-6 tracking-tight font-display">
            Não espera a ferida piorar para buscar ajuda
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Feridas crônicas pioram com o tempo. O <strong>tratamento precoce domiciliar</strong> muda completamente o prognóstico, e é mais simples do que você imagina. Nossa equipe está a uma mensagem de distância.
          </p>
          <button className="btn-whatsapp w-full md:w-auto font-bold text-lg py-4 px-8 rounded-2xl flex items-center justify-center gap-3 mx-auto">
            <Phone className="w-5 h-5" />
            Agendar visita agora
          </button>
        </div>
      </motion.section>

      {/* 6.7. FAQ Section */}
      <motion.div
        id="faq"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <AccordionComponent />
      </motion.div>

      {/* 7. Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform group"
        aria-label="Falar no WhatsApp"
      >
        <Phone className="w-6 h-6 text-white fill-white" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Falar no WhatsApp
          {/* Tooltip Arrow */}
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></span>
        </span>
      </a>

      {/* 8. Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Footer
        brandName="Doutor Feridas"
        brandDescription="A referência em cicatrização no Brasil. Curativo domiciliar especializado com tecnologia laser e curativos de alta performance."
        socialLinks={[
          {
            icon: <Instagram className="w-6 h-6" />,
            href: "#",
            label: "Instagram",
          },
          {
            icon: <Facebook className="w-6 h-6" />,
            href: "#",
            label: "Facebook",
          },
          {
            icon: <Phone className="w-6 h-6" />,
            href: "#",
            label: "WhatsApp",
          },
        ]}
        navLinks={[
          { label: "Início", href: "#" },
          { label: "Tratamentos", href: "#" },
          { label: "Como Funciona", href: "#" },
          { label: "Diferenciais", href: "#" },
          { label: "Dúvidas (FAQ)", href: "#" },
          { label: "Contato", href: "#" },
        ]}
        brandIcon={<img src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/doutorFeridas/logo_doutor_feridas_home_care.png" alt="Doutor Feridas" className="w-12 sm:w-16 md:w-24 h-auto object-contain invert grayscale brightness-[4] mix-blend-screen" referrerPolicy="no-referrer" />}
      />
      </motion.div>

      {/* Add custom styles for hiding scrollbar in carousel */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
