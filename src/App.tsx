import { CheckCircle, CreditCard, Truck, ShieldCheck, ChevronDown, ChevronUp, Star, Zap, Info, ShieldPlus } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const kits = [
    {
      id: 1,
      title: '1 Pote (EXPERIÊNCIA)',
      image: 'https://i.postimg.cc/1RB5WFrS/Preto-01.png',
      oldPrice: '297,00',
      price: '197,00',
      installments: '19,78',
      popular: false,
    },
    {
      id: 2,
      title: '3 Potes (TRATAMENTO)',
      image: 'https://i.postimg.cc/d35sLMVC/5-potes.png',
      oldPrice: '891,00',
      price: '347,00',
      installments: '34,84',
      popular: false,
    },
    {
      id: 3,
      title: '5 Potes (MÁXIMO ALÍVIO)',
      image: 'https://i.postimg.cc/d35sLMVC/5-potes.png',
      oldPrice: '1485,00',
      price: '497,00',
      installments: '49,90',
      popular: true,
      badge: 'MAIS VENDIDO - 67% OFF'
    }
  ];

  const faq = [
    {
      question: "O Colágeno Tipo II Pró é natural?",
      answer: "Sim! Nosso tratamento é 100% natural e totalmente livre de corticoides. Proporcionando uma vida sem dores de forma rápida e segura."
    },
    {
      question: "Qual a diferença para o colágeno de farmácia?",
      answer: "O Maximum Alívio possui tecnologia Americana de extração abaixo de 0°. Isso preserva 100% das propriedades da proteína, garantindo máxima concentração e ação restauradora que você não encontra em produtos comuns."
    },
    {
      question: "Como funciona o tratamento nas 2 etapas?",
      answer: "Na 1ª Etapa, ele atua reduzindo quase instantaneamente as dores. Na 2ª Etapa, ele trabalha restaurando as cartilagens desgastadas, agindo diretamente na causa raiz."
    },
    {
      question: "É aprovado pela ANVISA?",
      answer: "Sim, possui liberação total da Anvisa pela RDC 240/2018, o que garante a segurança no uso e sua eficácia comprovada."
    }
  ];

  const conditions = [
    "Artrite e Artrose", "Reumatismo", "Lombalgia", "Dores nas Articulações", 
    "Dores no Ciático", "Inchaço no Joelho", "Bursite", "Dores Diárias"
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-white font-sans selection:bg-gold-light selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-3/5 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-gold-light/10 border border-gold-light/20 px-4 py-2 rounded-full text-gold-light font-black text-sm mb-8 tracking-widest uppercase"
              >
                <Zap size={14} className="fill-gold-light" /> Tecnologia Americana Abaixo de 0°
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-display text-4xl md:text-7xl font-extrabold leading-[1.05] mb-8"
              >
                Fim das <span className="gold-text-gradient">Dores em Horas</span> sem Corticoides
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                A poderosa junção de <strong>Colágeno Tipo 2 Americano, Sucupira e Canela de Velho</strong> que atua na causa raiz das dores.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
              >
                <a href="#ofertas" className="gold-gradient text-black font-black px-12 py-6 rounded-xl text-xl shadow-[0_0_50px_rgba(204,191,139,0.3)] hover:scale-105 active:scale-95 transition-all text-center uppercase tracking-tighter">
                  Ver Ofertas Exclusivas
                </a>
              </motion.div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                <div className="flex gap-1 text-gold-light">
                  <Star className="fill-gold-light" size={16} />
                  <Star className="fill-gold-light" size={16} />
                  <Star className="fill-gold-light" size={16} />
                  <Star className="fill-gold-light" size={16} />
                  <Star className="fill-gold-light" size={16} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Liberado ANVISA RDC 240/2018</span>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:w-2/5"
            >
              <img 
                src="https://i.postimg.cc/1RB5WFrS/Preto-01.png" 
                alt="Colágeno Tipo II Pró Original" 
                className="w-full max-w-md mx-auto drop-shadow-[0_0_80px_rgba(204,191,139,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-blue-bar py-6 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8">
            <div className="flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-[0.1em]">
              <ShieldPlus size={20} className="text-gold-light" /> 100% Natural e Livre de Corticoides
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-[0.1em]">
              <Zap size={20} className="text-gold-light" /> Resultados nos Primeiros 3 Dias
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-[0.1em]">
              <Truck size={20} className="text-gold-light" /> Entrega Rápida e Segura
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - O que ele trata */}
      <section className="py-24 bg-bg-accent relative overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase gold-text-gradient tracking-tighter">EFICÁCIA COMPROVADA CONTRA:</h2>
        </div>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {conditions.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-black/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-4 text-center"
              >
                <div className="bg-gold-light/10 p-3 rounded-full">
                  <CheckCircle className="text-gold-light" size={24} />
                </div>
                <span className="font-bold text-sm md:text-base tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-24 bg-bg-dark border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <img 
                src="https://i.postimg.cc/VsgL7tWN/Preto-02.png" 
                alt="Mecanismo de Ação" 
                className="w-full rounded-[2.5rem] shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 gold-text-gradient uppercase tracking-tighter">COMO ELE FUNCIONA?</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gold-light text-black flex items-center justify-center font-black">1</div>
                    <div className="w-0.5 grow bg-white/10 my-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-3 text-gold-light">ETAPA 1: ALÍVIO INSTANTÂNEO</h3>
                    <p className="text-gray-400 text-lg">O suplemento atua reduzindo quase de imediato as dores, fazendo com que os sintomas cessem por completo logo no início.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gold-light text-black flex items-center justify-center font-black">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-3 text-gold-light">ETAPA 2: RESTAURAÇÃO DA CAUSA RAIZ</h3>
                    <p className="text-gray-400 text-lg">Diferente de farmácias com extração comum, nossa tecnologia preserva todos os nutrientes para restaurar as cartilagens desgastadas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comp Section - Diferencial */}
      <section className="py-24 bg-bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <img 
                src="https://i.postimg.cc/dQ6tWCj1/Preto-03.png" 
                alt="Tecnologia Americana" 
                className="w-full rounded-[2.5rem] shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">O SEGREDO DA <br/><span className="gold-text-gradient">EXTRAÇÃO ABAIXO DE 0°</span></h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
                Enquanto o colágeno comum perde força no processamento, nós preservamos o <strong>Colágeno Tipo 2 Pró</strong> em temperaturas negativas. Desta forma, conseguimos a máxima concentração, restaurando suas juntas de forma 100% segura.
              </p>
              <div className="flex items-center gap-4 bg-gold-light/5 p-6 rounded-2xl border border-gold-light/10">
                <Info className="text-gold-light shrink-0" size={32} />
                <span className="text-gray-400 font-medium">A junção poderosa da Curcumina com Sucupira e Canela de Velho cria um escudo protetor contra inflamações.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="ofertas" className="py-24 bg-bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tighter">ESCOLHA O SEU <span className="gold-text-gradient">KIT</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {kits.map((kit) => (
              <motion.div
                key={kit.id}
                whileHover={{ y: -10 }}
                className={`relative bg-bg-accent p-8 rounded-[3rem] border-2 flex flex-col items-center transition-all duration-300 ${
                  kit.popular ? 'border-gold-light scale-105 shadow-[0_0_50px_rgba(167,145,90,0.2)] z-10' : 'border-white/5 opacity-80'
                }`}
              >
                {kit.popular && (
                  <div className="absolute top-8 gold-gradient px-8 py-2 rounded-full text-black text-sm font-black tracking-widest uppercase ring-8 ring-bg-accent">
                    {kit.badge}
                  </div>
                )}
                
                <div className={`mt-12 mb-10 ${kit.popular ? 'scale-110' : 'scale-90'}`}>
                  <img 
                    src={kit.image} 
                    alt={kit.title} 
                    className="max-w-full h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]" 
                  />
                </div>

                <h3 className="text-2xl font-black mb-2">{kit.title}</h3>
                <p className="text-gray-600 line-through text-lg">De R$ {kit.oldPrice}</p>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-2xl font-black mb-2 opacity-60">R$</span>
                  <span className="text-6xl font-black tracking-tighter">{kit.price}</span>
                </div>
                
                <p className="bg-white/5 px-6 py-2 rounded-xl text-gold-light font-black text-xl mb-12 w-full">ou 12x de R$ {kit.installments}</p>

                <button className={`w-full font-black py-6 rounded-2xl text-xl uppercase transition-all shadow-xl active:scale-95 ${
                  kit.popular ? 'gold-gradient text-black hover:brightness-110' : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  APROVEITAR AGORA
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee & Anvisa Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-gradient-to-br from-bg-accent to-black p-10 rounded-[2.5rem] border border-white/5 text-center flex flex-col items-center">
              <ShieldCheck className="text-gold-light mb-6" size={80} />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">GARANTIA DE 30 DIAS</h3>
              <p className="text-gray-400">Teste o tratamento por 30 dias. Se os resultados não superarem suas expectativas, devolvemos seu investimento por completo.</p>
            </div>
            <div className="flex-1 bg-gradient-to-br from-bg-accent to-black p-10 rounded-[2.5rem] border border-white/5 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <span className="font-black text-xs text-white">ANVISA</span>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">SEGURANÇA GARANTIDA</h3>
              <p className="text-gray-400">Produto devidamente liberado e autorizado pela ANVISA conforme a RDC 240/2018, garantindo segurança e eficácia máxima.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-bg-dark">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase gold-text-gradient tracking-tighter">DÚVIDAS FREQUENTES</h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-lg md:text-xl"
                >
                  {item.question}
                  <div className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="p-6 pt-0 text-gray-400 text-lg leading-relaxed border-t border-white/5">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="font-display text-2xl font-black text-gold-light mb-8">MAXIMUM ALÍVIO</div>
          <p className="text-gray-700 text-[10px] uppercase font-bold tracking-widest max-w-2xl mx-auto mb-12">
            Este site não faz parte do Facebook ou do Google. Além disso, este site não é endossado pelo Facebook ou pelo Google de forma alguma. FACEBOOK é uma marca registrada da FACEBOOK, Inc. GOOGLE é uma marca registrada da Alphabet Inc.
          </p>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
            <span>© 2026 Maximum Alívio - Todos os direitos reservados.</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
