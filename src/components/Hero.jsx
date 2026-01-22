import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import HeroImage from '../assets/ferramentas.jpg';

const Hero = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const whatsappNumber = "5561998680050";
    const whatsappMessage = "Olá! Gostaria de saber mais sobre os produtos da HL Casa da Construção.";
    
    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="relative h-screen bg-[#224A59] overflow-hidden">
            {/* Animações CSS */}
            <style>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }
                
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes glow {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(37, 211, 102, 0.4), 0 0 40px rgba(37, 211, 102, 0.2);
                    }
                    50% {
                        box-shadow:  0 0 30px rgba(37, 211, 102, 0.6), 0 0 60px rgba(37, 211, 102, 0.3);
                    }
                }
                
                .animate-fadeInDown {
                    animation: fadeInDown 0.8s ease-out;
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out;
                }
                
                .animate-pulse-slow {
                    animation: pulse 2s ease-in-out infinite;
                }

                .animate-glow {
                    animation: glow 2s ease-in-out infinite;
                }
                
                .menu-item {
                    animation: slideIn 0.3s ease-out forwards;
                }
                
                .menu-item:nth-child(1) {
                    animation-delay: 0.1s;
                }
                
                .menu-item:nth-child(2) {
                    animation-delay: 0.2s;
                }
                
                .menu-item:nth-child(3) {
                    animation-delay: 0.3s;
                }

                .backdrop-blur-glass {
                    backdrop-filter: blur(12px);
                    background: rgba(255, 255, 255, 0.1);
                }
            `}</style>

            <header className="absolute inset-x-0 top-0 z-30 py-6 xl:py-10 animate-fadeInDown">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-shrink-0">
                            <a href="#" title="HL Casa da Construção" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-[#224A59] focus:ring-[#F2BC1B] transform transition-transform hover:scale-105">
                            </a>
                        </div>

                        <div className="md:hidden">
                            <button 
                                type="button" 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2.5 transition-all duration-300 rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#F2BC1B]"
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="w-6 h-6 transition-transform duration-300 rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div className="font-heading hidden md:flex md:items-center md:gap-8 lg:gap-10">
                            <a href="#servicos" className="text-base font-medium transition-all duration-300 text-white hover:text-[#F2BC1B] transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F2BC1B] rounded px-2 py-1"> 
                                Serviços 
                            </a>
                            <a href="#promocoes" className="text-base font-medium transition-all duration-300 text-white hover:text-[#F2BC1B] transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F2BC1B] rounded px-2 py-1"> 
                                Promoções 
                            </a>
                            <a href="#localizacao" className="text-base font-medium transition-all duration-300 text-white hover:text-[#F2BC1B] transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F2BC1B] rounded px-2 py-1"> 
                                Localização 
                            </a>
                        </div>
                    </div>
                </div>

                {/* Menu Mobile com Glassmorphism */}
                {isMobileMenuOpen && (
                    <div className="font-heading md:hidden mt-4 mx-4 rounded-2xl backdrop-blur-glass border border-white/20 shadow-2xl overflow-hidden">
                        <div className="px-6 py-6 space-y-1">
                            <a 
                                href="#servicos" 
                                className="menu-item block text-base font-medium text-white hover:text-[#F2BC1B] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                 Serviços
                            </a>
                            <a 
                                href="#promocoes" 
                                className="menu-item block text-base font-medium text-white hover:text-[#F2BC1B] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                 Promoções
                            </a>
                            <a 
                                href="#localizacao" 
                                className="menu-item block text-base font-medium text-white hover:text-[#F2BC1B] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                 Localização
                            </a>
                        </div>
                    </div>
                )}
            </header>

            {/* Imagem de fundo */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none"></div>
                <img className="object-cover w-full h-full" src={HeroImage} alt="Ferramentas de construção" />
            </div>

            <div className="relative h-full z-20">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl h-full">
                    <div className="max-w-4xl mx-auto text-center h-full flex flex-col justify-center">
                        <div className="flex justify-center animate-fadeInUp">
                            <img
                                src={Logo}
                                alt="HL Casa da Construção DF"
                                className="
                                w-[300px]
                                sm:w-[380px]
                                md:w-[480px]
                                lg:w-[620px]
                                xl:w-[700px]
                                drop-shadow-2xl 
                                "
                            />
                        </div>

                        <p className="mt-6 text-lg sm:text-xl font-normal text-white/90 leading-relaxed max-w-2xl mx-auto animate-fadeInUp drop-shadow-md" style={{animationDelay: '0.2s'}}>
                            Tudo o que você precisa para construir e reformar em um só lugar. 
                            Qualidade, variedade e os melhores preços para a sua obra.
                        </p>
                        
                        <div className="font-heading flex items-center justify-center mt-12 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                            <button
                                onClick={handleWhatsAppClick}
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-8
                                    py-4
                                    text-base
                                    sm:text-lg
                                    font-bold
                                    transition-all
                                    duration-300
                                    rounded-full
                                    bg-[#25D366]
                                    text-white
                                    hover:bg-[#20BA5A]
                                    hover:scale-110
                                    focus:outline-none 
                                    focus:ring-4
                                    focus:ring-[#25D366]/50
                                    shadow-2xl
                                    animate-pulse-slow
                                    animate-glow
                                "
                            >
                                <svg className="w-7 h-7 mr-3 animate-pulse-slow" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                Fale Conosco no WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;