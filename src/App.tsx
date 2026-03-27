/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Star, Lock, Check, Clock, MapPin, MapPinOff, Activity, ShieldCheck, ChevronRight, HeartPulse, AlertCircle, Stethoscope, MessageCircle, Home, ClipboardList, CheckCircle, Lightbulb, UserCheck, BriefcaseMedical, Heart, Instagram, Facebook, BadgeCheck, Microscope } from 'lucide-react';
import { AccordionComponent } from './components/ui/faq-accordion';
import { Footer } from './components/ui/modem-animated-footer';

const servicesList = [
  { title: "Pé Diabético", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop" },
  { title: "Escara (Lesão por Pressão)", img: "https://images.unsplash.com/photo-1576091160550-2173ff9e594b?q=80&w=800&auto=format&fit=crop" },
  { title: "Úlcera Venosa", img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" },
  { title: "Ferida Pós-Cirúrgica", img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop" },
  { title: "Pé Diabético", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop" },
  { title: "Escara (Lesão por Pressão)", img: "https://images.unsplash.com/photo-1576091160550-2173ff9e594b?q=80&w=800&auto=format&fit=crop" },
  { title: "Úlcera Venosa", img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" },
  { title: "Ferida Pós-Cirúrgica", img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 relative pb-24">
      {/* 1. Navigation Bar (Floating) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl bg-white/95 backdrop-blur-md rounded-full px-4 md:px-6 py-3 flex justify-between items-center z-50 shadow-sm border border-slate-200/50">
        <div className="flex items-center">
          <img 
            src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/doutorFeridas/logoDoutorFeridas.png" 
            alt="Doutor Feridas" 
            className="h-8 md:h-10 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
          <a href="#inicio" className="hover:text-brand-500 transition-colors">Início</a>
          <a href="#tratamentos" className="hover:text-brand-500 transition-colors">Tratamentos</a>
          <a href="#diferenciais" className="hover:text-brand-500 transition-colors">Diferenciais</a>
          <a href="#faq" className="hover:text-brand-500 transition-colors">FAQ</a>
        </div>

        <button className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white rounded-full px-5 md:px-6 py-2.5 flex items-center gap-2 font-bold text-sm transition-all duration-300 active:scale-95 shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] border border-[#25D366]/50">
          <Phone className="w-4 h-4" />
          <span className="hidden md:inline">Agendar visita</span>
          <span className="md:hidden">Agendar</span>
        </button>
      </nav>

      {/* 2. Hero Section */}
      <section id="inicio" className="h-[calc(90vh+100px)] min-h-[700px] rounded-[2rem] mx-2 md:mx-4 mt-4 relative overflow-hidden flex flex-col justify-center items-center pb-16 px-6 md:px-10 shadow-sm">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/doutorFeridas/van_doutor_feridas.png")' }}
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-brand-900/60" />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            Plantão 24h Disponível
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6 font-display">
            TRATAMENTO ESPECIALIZADO DE <span className="text-accent-400">FERIDAS CRÔNICAS</span> NA SUA CASA.
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-white/90 text-base md:text-xl mb-10 font-medium leading-relaxed">
            Sem sair de casa. Sem fila. Sem hospital. Nosso <strong>enfermeiro especialista em feridas</strong> vai até você com <strong>tecnologia laser</strong>, curativos avançados e o protocolo validado pelo Dr. Evandro Reis.
          </p>

          {/* CTA Button */}
          <button className="relative overflow-hidden group bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white rounded-full px-10 md:px-16 py-4 md:py-6 flex items-center justify-center gap-4 font-bold text-xl md:text-2xl transition-all duration-300 active:scale-95 shadow-[0_0_40px_-10px_rgba(37,211,102,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,211,102,0.7)] w-full sm:w-auto min-w-[320px] md:min-w-[420px] mb-14 border border-[#25D366]/50">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
            <Phone className="w-6 h-6 md:w-7 md:h-7 relative z-10 animate-pulse" />
            <span className="relative z-10 tracking-wide">Agendar visita</span>
          </button>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {['Curativo domiciliar', 'Laserterapia', 'Avaliação gratuita'].map((pill, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md text-white rounded-full px-5 py-2.5 text-sm border border-white/20 flex items-center gap-2 font-medium">
                <Check className="w-4 h-4 text-accent-400" />
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="relative w-full py-24 lg:py-32 px-6 md:px-10 overflow-hidden" style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: '#f8fafc',
        backgroundImage: 'radial-gradient(circle at top left, rgba(200, 230, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at bottom right, rgba(43, 189, 186, 0.05) 0%, transparent 40%)'
      }}>
        <div className="max-w-5xl mx-auto w-full relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.2em] text-[#2BBDBA] uppercase mb-4">
              VOCÊ SE IDENTIFICA?
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0C3A6B] mb-6 leading-tight max-w-4xl mx-auto tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              A ferida não cicatriza mesmo com curativo caseiro?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Milhares de brasileiros convivem com <strong className="font-bold text-[#0C3A6B]">feridas crônicas</strong> sem saber que existe um <strong className="font-bold text-[#0C3A6B]">tratamento especializado</strong> que vai até a sua casa.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card 1 */}
            <article className="bg-white rounded-2xl p-8 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2BBDBA]/30" style={{
              border: '1px solid rgba(12, 58, 107, 0.08)',
              boxShadow: '0 10px 25px -5px rgba(12, 58, 107, 0.05), 0 8px 10px -6px rgba(12, 58, 107, 0.05)'
            }}>
              <div className="flex-shrink-0 bg-[#2BBDBA]/10 p-3 rounded-xl">
                <Clock className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0C3A6B] text-lg leading-snug mb-2 line-clamp-2 min-h-[3rem]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  A ferida está aberta há semanas ou meses sem melhora...
                </h3>
                <p className="text-slate-500 text-[15px] font-medium line-clamp-1 min-h-[1.5rem]">
                  ...mesmo com pomada e curativo de farmácia.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-2xl p-8 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2BBDBA]/30" style={{
              border: '1px solid rgba(12, 58, 107, 0.08)',
              boxShadow: '0 10px 25px -5px rgba(12, 58, 107, 0.05), 0 8px 10px -6px rgba(12, 58, 107, 0.05)'
            }}>
              <div className="flex-shrink-0 bg-[#2BBDBA]/10 p-3 rounded-xl">
                <Activity className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0C3A6B] text-lg leading-snug mb-2 line-clamp-2 min-h-[3rem]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Tem diabetes e percebeu uma ferida no pé ou perna...
                </h3>
                <p className="text-slate-500 text-[15px] font-medium line-clamp-1 min-h-[1.5rem]">
                  ...que não demonstra sinais de cicatrização.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-2xl p-8 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2BBDBA]/30" style={{
              border: '1px solid rgba(12, 58, 107, 0.08)',
              boxShadow: '0 10px 25px -5px rgba(12, 58, 107, 0.05), 0 8px 10px -6px rgba(12, 58, 107, 0.05)'
            }}>
              <div className="flex-shrink-0 bg-[#2BBDBA]/10 p-3 rounded-xl">
                <Home className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0C3A6B] text-lg leading-snug mb-2 line-clamp-2 min-h-[3rem]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Seu familiar está acamado e com escara de pressão...
                </h3>
                <p className="text-slate-500 text-[15px] font-medium line-clamp-1 min-h-[1.5rem]">
                  ...e sair de casa para consultas é um desafio.
                </p>
              </div>
            </article>

            {/* Card 4 */}
            <article className="bg-white rounded-2xl p-8 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2BBDBA]/30" style={{
              border: '1px solid rgba(12, 58, 107, 0.08)',
              boxShadow: '0 10px 25px -5px rgba(12, 58, 107, 0.05), 0 8px 10px -6px rgba(12, 58, 107, 0.05)'
            }}>
              <div className="flex-shrink-0 bg-[#2BBDBA]/10 p-3 rounded-xl">
                <MapPinOff className="w-7 h-7 text-[#2BBDBA]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0C3A6B] text-lg leading-snug mb-2 line-clamp-2 min-h-[3rem]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Já buscou UPAs e postos de saúde diversas vezes...
                </h3>
                <p className="text-slate-500 text-[15px] font-medium line-clamp-1 min-h-[1.5rem]">
                  ...e ninguém resolveu definitivamente o problema.
                </p>
              </div>
            </article>
          </div>

          {/* Call to Action Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-[#0C3A6B] py-16 px-8 md:px-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 mt-8 max-w-7xl mx-auto">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2BBDBA] via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Se você se identificou com qualquer uma dessas situações, o <span className="text-[#2BBDBA] font-bold">Doutor Feridas Home Care</span> foi criado para você. O especialista vai até a sua casa, com toda a tecnologia necessária para tratar o que outros não conseguiram.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <button className="bg-[#2BBDBA] text-[#0C3A6B] font-bold py-5 px-10 rounded-2xl hover:bg-[#74f6f3] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-black/20 flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solution/Method Section */}
      <section className="relative px-6 md:px-10 py-32 lg:py-40 w-full overflow-hidden">
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
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-brand-900/85 z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight mb-4">
              Como <span className="text-accent-400 underline decoration-4 underline-offset-8">funciona?</span>
            </h2>
            <p className="text-brand-100 max-w-2xl mx-auto">
              Nosso método em 3 passos para garantir a sua cicatrização com conforto e segurança.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal Connecting line (Desktop) */}
            <div className="hidden lg:block absolute top-[138px] left-[16%] right-[16%] h-0.5 bg-brand-600 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
              {[
                { 
                  title: "Você entra em contato", 
                  desc: "Preenche o formulário abaixo ou manda mensagem no WhatsApp. Nossa equipe retorna em até 1 hora para entender sua situação e agendar a visita.",
                  icon: Phone,
                  borderColor: "border-brand-600",
                  bgColor: "bg-brand-500",
                  textColor: "text-white",
                  borderTopColor: "border-t-brand-600"
                },
                { 
                  title: "O especialista vai até a sua casa", 
                  desc: "Nosso enfermeiro especialista em feridas chega no dia e horário combinados com a mala completa, curativos avançados, equipamento de laserterapia e todos os insumos necessários. Você só abre a porta.",
                  icon: MapPin,
                  borderColor: "border-brand-500",
                  bgColor: "bg-brand-400",
                  textColor: "text-white",
                  borderTopColor: "border-t-brand-500"
                },
                { 
                  title: "Tratamento até a cicatrização completa", 
                  desc: "Avaliação, protocolo personalizado e acompanhamento contínuo, do primeiro curativo domiciliar até a alta. Tudo no conforto da sua casa, sem você precisar sair.",
                  icon: ShieldCheck,
                  borderColor: "border-brand-400",
                  bgColor: "bg-brand-300",
                  textColor: "text-white",
                  borderTopColor: "border-t-brand-400"
                }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-row lg:flex-col items-center lg:items-center gap-6 lg:gap-0 group">
                  
                  {/* Mobile Vertical Line */}
                  {i !== 2 && (
                    <div className="absolute left-[47px] top-[100px] bottom-[-48px] w-0.5 bg-brand-600 lg:hidden z-0"></div>
                  )}

                  {/* Pin Container */}
                  <div className="relative flex flex-col items-center shrink-0">
                    {/* Outer Circle */}
                    <div className={`w-24 h-24 rounded-full border-[6px] ${step.borderColor} bg-brand-800 flex items-center justify-center relative z-10 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {/* Inner Circle */}
                      <div className={`w-14 h-14 rounded-full ${step.bgColor} flex items-center justify-center shadow-inner`}>
                        <step.icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    {/* Triangle (Pointer) */}
                    <div className={`w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] ${step.borderTopColor} -mt-1 relative z-10 group-hover:translate-y-1 transition-transform duration-300`} />
                    
                    {/* Space between pointer and dot (Desktop only) */}
                    <div className="hidden lg:block h-6 w-px bg-transparent" />
                    
                    {/* Dot on the timeline (Desktop only) */}
                    <div className={`hidden lg:block w-4 h-4 rounded-full ${step.bgColor} relative z-10 ring-4 ring-brand-700`} />
                  </div>
                  
                  {/* Text */}
                  <div className="lg:mt-6 lg:text-center flex-1 lg:flex-none">
                    <h4 className={`font-bold text-xl mb-2 ${step.textColor}`}>{step.title}</h4>
                    <p className="text-sm text-brand-100 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. Por que somos diferentes */}
      <section id="diferenciais" className="px-6 md:px-10 py-24 lg:py-32 w-full bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2BBDBA]/10 text-[#2BBDBA] rounded-full text-sm font-bold mb-6">
              <BadgeCheck className="w-4 h-4" />
              EXCELÊNCIA CLÍNICA
            </div>
            <h2 className="font-extrabold text-[#0C3A6B] text-3xl md:text-4xl mb-6 tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Tecnologia avançada no conforto do seu lar
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Nossa equipe utiliza curativos biotecnológicos, laserterapia e terapia por pressão negativa para acelerar o processo de cicatrização, reduzindo a dor e o risco de infecções graves sem que você precise sair de casa.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#2BBDBA]" />
                <span className="font-bold text-[#0C3A6B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Protocolos de Enfermagem Rigorosos</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <Microscope className="w-6 h-6 text-[#2BBDBA]" />
                <span className="font-bold text-[#0C3A6B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Insumos de Alta Performance</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img alt="Clinical excellence at home" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6AAkqTgGJcuVRJA3F--orHhK31PSnKx2tGA8FG64LvphYuSeJ6ldfJkFu52czecANMQlQGxT1HW3Jso8_sJotgr5N-S304KYPjC2Quhc3g4HQ76b2BmBhK08WWKyVoi9FnqQ5AJ4-AyWY94RQHhI_Em2y_0X75_17AYThi8Lm0X8hHlIadLU81dYZ-l9kitOHUjO2TGYmQR7j3fc_KfIXc7IhbN35jGQXCoO-dycb2QWb3celxWp3W2zdKg8hZSJgQelPv7mQDd5u" referrerPolicy="no-referrer" />
            </div>
            {/* Float card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 max-w-[200px]">
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm font-bold text-[#0C3A6B] italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>"Mudou a vida da minha mãe após meses de sofrimento."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Carousel Section */}
      <section id="tratamentos" className="bg-slate-50 py-32 lg:py-40 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-2">Indicações</div>
              <h2 className="text-slate-900 uppercase font-bold text-[5.5vw] sm:text-3xl md:text-4xl leading-tight max-w-xl whitespace-nowrap tracking-tight">
                FERIDAS QUE TRATAMOS EM CASA
              </h2>
            </div>
            <p className="text-slate-600 max-w-md md:text-right">
              Evite o risco de infecções hospitalares. Levamos a estrutura de um consultório especializado até o conforto do seu lar.
            </p>
          </div>
        </div>

        {/* Infinite Marquee Carousel */}
        <div className="flex group w-full">
          <div className="flex gap-6 pr-6 animate-marquee min-w-max">
            {servicesList.map((service, i) => (
              <div key={`a-${i}`} className="w-[280px] md:w-[320px] h-[340px] rounded-[2rem] relative overflow-hidden group/card cursor-pointer shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110"
                  style={{ backgroundImage: `url(${service.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-xl leading-tight">{service.title}</h3>
                  <div className="w-8 h-1 bg-brand-500 mt-3 rounded-full transition-all duration-300 group-hover/card:w-16" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 pr-6 animate-marquee min-w-max" aria-hidden="true">
            {servicesList.map((service, i) => (
              <div key={`b-${i}`} className="w-[280px] md:w-[320px] h-[340px] rounded-[2rem] relative overflow-hidden group/card cursor-pointer shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110"
                  style={{ backgroundImage: `url(${service.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-xl leading-tight">{service.title}</h3>
                  <div className="w-8 h-1 bg-brand-500 mt-3 rounded-full transition-all duration-300 group-hover/card:w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Stats Section (New Design) */}
      <section className="px-6 md:px-10 py-32 lg:py-40 bg-slate-900 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column (Text & CTA) */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-accent-400 font-bold tracking-wider uppercase text-sm mb-4">
              Nossos Números <ChevronRight className="w-4 h-4" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              A REFERÊNCIA EM <span className="text-accent-400">CICATRIZAÇÃO</span> NO BRASIL.
            </h2>
            <button className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white rounded-full px-8 py-4 font-bold transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] border border-[#25D366]/50 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Agendar visita
            </button>
          </div>

          {/* Right Column (Floating Circles) */}
          <div className="relative h-[500px] w-full hidden md:block">
            {/* Top Left Circle */}
            <div className="absolute top-4 left-12 w-48 h-48 bg-slate-800 rounded-full shadow-[0_0_60px_rgba(45,212,191,0.6)] flex flex-col items-center justify-center p-6 z-10 hover:-translate-y-2 transition-transform duration-300 border border-accent-400/50">
              <div className="text-4xl font-bold text-white mb-2">+20</div>
              <div className="text-xs text-slate-300 text-center uppercase tracking-wider font-semibold">Anos de<br/>Experiência</div>
            </div>

            {/* Bottom Left Circle */}
            <div className="absolute bottom-4 left-24 w-48 h-48 bg-slate-800 rounded-full shadow-[0_0_60px_rgba(45,212,191,0.6)] flex flex-col items-center justify-center p-6 z-10 hover:-translate-y-2 transition-transform duration-300 border border-accent-400/50">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-xs text-slate-300 text-center uppercase tracking-wider font-semibold">Atendimento<br/>Domiciliar</div>
            </div>

            {/* Big Right Circle */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 w-72 h-72 bg-slate-800 rounded-full shadow-[0_0_80px_rgba(45,212,191,0.8)] flex flex-col items-center justify-center p-8 z-20 hover:-translate-y-2 transition-transform duration-300 border border-accent-400/60">
              <div className="text-6xl font-bold text-white mb-3">+8M</div>
              <div className="text-sm text-slate-300 text-center uppercase tracking-wider font-semibold">Casos tratados<br/>no Brasil</div>
            </div>
          </div>

          {/* Mobile Stats (Fallback for small screens) */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            <div className="bg-slate-800 rounded-3xl shadow-[0_0_60px_rgba(45,212,191,0.6)] p-8 flex flex-col items-center justify-center text-center border border-accent-400/50">
              <div className="text-5xl font-bold text-white mb-2">+8M</div>
              <div className="text-sm text-slate-300 uppercase tracking-wider font-semibold">Casos tratados no Brasil</div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-3xl shadow-[0_0_50px_rgba(45,212,191,0.5)] p-6 flex flex-col items-center justify-center text-center border border-accent-400/40">
                <div className="text-3xl font-bold text-white mb-2">+20</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Anos de Experiência</div>
              </div>
              <div className="bg-slate-800 rounded-3xl shadow-[0_0_50px_rgba(45,212,191,0.5)] p-6 flex flex-col items-center justify-center text-center border border-accent-400/40">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Atendimento Domiciliar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5. Indicado para você */}
      <section className="px-6 md:px-10 py-32 lg:py-40 bg-white w-full">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">
              Indicado para você
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
              O Doutor Feridas Home Care é para você se...
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              O <strong>curativo domiciliar especializado</strong> é indicado para qualquer pessoa que precise de cuidados contínuos com feridas sem se deslocar até uma clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              <>Você tem uma <strong>ferida que não cicatriza</strong> há mais de 2 semanas mesmo com curativo convencional</>,
              <>Você tem <strong>diabetes e percebeu uma ferida</strong> nos pés ou pernas</>,
              <>Você tem <strong>dificuldade de locomoção</strong> ou mobilidade reduzida</>,
              <>Você cuida de um <strong>idoso ou familiar acamado</strong> com ferida em casa</>,
              <>Você quer evitar <strong>idas frequentes ao hospital</strong> ou clínica para curativos</>,
              <>Você já fez <strong>tratamento em outros lugares</strong> e não teve resultado satisfatório</>
            ].map((text, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-500 mt-2 shrink-0"></div>
                <p className="text-slate-700 leading-relaxed text-base">{text}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-2xl p-6 md:p-8 mb-8">
            <p className="text-slate-800 text-lg leading-relaxed">
              Se você se identificou, seu próximo passo é simples: entre em contato e a nossa equipe cuida do resto. <strong>A primeira avaliação é gratuita.</strong>
            </p>
          </div>

          <button className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-bold text-lg py-5 rounded-2xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] border border-[#25D366]/50">
            <Phone className="w-6 h-6" />
            Agendar visita
          </button>
        </div>
      </section>

      {/* 6.6. CTA Banner */}
      <section className="px-6 md:px-10 py-32 lg:py-40 bg-brand-700 w-full text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-accent-200 font-bold tracking-wider uppercase text-sm mb-4">
            A GENTE VAI ATÉ VOCÊ
          </div>
          <h2 className="text-[4.5vw] sm:text-2xl md:text-4xl lg:text-[2.8rem] font-bold text-white leading-tight mb-6 tracking-tight font-display whitespace-nowrap">
            Não espera a ferida piorar para buscar ajuda
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Feridas crônicas pioram com o tempo. O <strong>tratamento precoce domiciliar</strong> muda completamente o prognóstico, e é mais simples do que você imagina. Nossa equipe está a uma mensagem de distância.
          </p>
          <button className="w-full md:w-auto bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 mx-auto shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:shadow-[0_0_40px_rgba(37,211,102,0.7)] border border-[#25D366]/50">
            <Phone className="w-5 h-5" />
            Quero agendar agora
          </button>
        </div>
      </section>

      {/* 6.7. FAQ Section */}
      <AccordionComponent />

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
        brandIcon={<img src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/doutorFeridas/logo_so_logo_quadrada_fundo_branco.png" alt="Doutor Feridas" className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 object-contain invert grayscale brightness-[4] mix-blend-screen" referrerPolicy="no-referrer" />}
      />

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
