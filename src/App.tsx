import { useEffect, useState } from "react";
import firstCard from './assets/first-card.png';
import scrollRight from './assets/scroll-right.png';
import scrollLeft from './assets/scroll-left.png';
import smartPlatform from './assets/smartplatform-img.png'
import smartPlatformLogo from './assets/smartplatform-logo.png'
import campImg from './assets/camp-img.png'
import mailLogo from './assets/mail-icon.png'
import wppLogo from './assets/wpp-icon.png'
import smartagriLogo from './assets/logo-navbar.png'
import bgImg from './assets/bg-img.png'
import arrowupHero from './assets/arrow-up-hero.png'
import arrowdownHero from './assets/arrow-down-hero.png'

// Hook para acompanhar a largura da janela
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

const cards = [
  { title: 'SmartPlatform', desc: 'Gestão centralizada e intuitiva.', img: firstCard },
  { title: 'Gestão do agronegócio', desc: 'Visão ampla e gestão eficiente.' },
  { title: 'Projetos customizados', desc: 'Tecnologia sob medida.' },
  { title: 'IoT, Sensoriamento e Automação', desc: 'Proin eu pellentesque justo. Vestibulum dui turpis.', img: firstCard },
  { title: 'Visão computacional', desc: 'Proin eu pellentesque justo. Vestibulum dui turpis.' },
  { title: 'Geoprocessamento e Imagens', desc: 'Drone e satélite' }
];

const smartplatformCards = [
{ title: 'SmartPlants', desc: 'Monitoramento e gestão de processos', icon:firstCard},
  { title: 'SmartBI', desc: 'Monitoramento e gestão de equipamentos', icon:firstCard },
  { title: 'SmartTools', desc: 'Monitoramento do clima',icon:firstCard },
  { title: 'SmartMaps', desc: 'Gestão de águas e irrigacão', img: firstCard },
  { title: 'SmartProcess', desc: 'Gestão de energia',icon:firstCard },
  { title: 'SmartMetrics', desc: 'Gestão',icon:firstCard }
  
];

function App() {
  const width = useWindowWidth();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    if (width < 930) {
      setVisibleCount(1);
    } else if (width < 1250) {
      setVisibleCount(2);
    } else if (width < 1550) {
      setVisibleCount(3);
    } else if (width < 1900) {
      setVisibleCount(4);
    } else {
      setVisibleCount(5);
    }
  }, [width]);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const visibleCards = Array.from({ length: visibleCount }).map((_, i) => {
    const index = (startIndex + i) % cards.length;
    return cards[index];
  });

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = -80; 
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false); // fecha o menu mobile
  }
};

  return (
    <>
<div className=" bg-white text-black" id="home">
      {/* Navbar */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? " shadow-lg backdrop-blur-sm bg-black/60" : "bg-transparent"}`}>
  <div className="max-w-full mx-auto px-6 md:px-20 h-16 flex items-center justify-between">
    {/* Logo */}
    <button onClick={() => scrollToSection("home")} className="hover:text-[#58A91C] cursor-pointer">
      <img src={smartagriLogo} alt="Logo SmartAgri" className="h-10 mr-2" />
      </button>
    

    {/* Navegação desktop */}
    <nav className="hidden md:flex items-center gap-8 text-md font-medium text-white">
<button onClick={() => scrollToSection("sobre")} className="hover:text-[#58A91C] cursor-pointer">Quem Somos</button>
  <button onClick={() => scrollToSection("solucoes")} className="hover:text-[#58A91C] cursor-pointer">Soluções</button>
  <button onClick={() => scrollToSection("produtos")} className="hover:text-[#58A91C] cursor-pointer">Produtos</button>
  <button onClick={() => scrollToSection("campos")} className="hover:text-[#58A91C] cursor-pointer">Segmentos</button>
  <button onClick={() => scrollToSection("parcerias")} className="hover:text-[#58A91C] cursor-pointer">Parcerias</button>
  <button onClick={() => scrollToSection("cases")} className="hover:text-[#58A91C] cursor-pointer">Cases</button>
  <button onClick={() => scrollToSection("contato")} className="hover:text-[#58A91C] cursor-pointer">Contato</button>
    </nav>

    {/* Botão Desktop */}
    <button className="hidden md:block bg-white text-black px-4 py-2 rounded-sm text-md font-semibold hover:bg-[#58A91C] transition cursor-pointer">
      Ir para a SmartPlatform
    </button>

    {/* Botão Hamburguer Mobile */}
    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-50">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  {/* Menu Mobile */}
  {menuOpen && (
    <div className="md:hidden absolute top-16 left-0 w-full shadow-md bg-white justify-center backdrop-blur-md text-black flex flex-col items-center px-6 py-4 gap-4 text-md font-medium">
<button onClick={() => scrollToSection("sobre")} className="hover:text-[#58A91C]">Quem Somos</button>
  <button onClick={() => scrollToSection("solucoes")} className="hover:text-[#58A91C]">Soluções</button>
  <button onClick={() => scrollToSection("produtos")} className="hover:text-[#58A91C]">Produtos</button>
  <button onClick={() => scrollToSection("campos")} className="hover:text-[#58A91C]">Segmentos</button>
  <button onClick={() => scrollToSection("parcerias")} className="hover:text-[#58A91C]">Parcerias</button>
  <button onClick={() => scrollToSection("cases")} className="hover:text-[#58A91C]">Cases</button>
  <button onClick={() => scrollToSection("contato")} className="hover:text-[#58A91C]">Contato</button>
      <button className="mt-2 bg-black text-white px-4 py-2 rounded-sm text-md font-semibold hover:bg-[#58A91C] transition">
        Ir para a SmartPlatform
      </button>
    </div>
  )}
</header>


      <div className="relative"> 

       <section className="relative h-[900px] md:h-[1200px] flex justify-center text-white overflow-hidden">

  <img
    src={bgImg}
    alt=""
    className="absolute left-0 w-full h-full object-cover z-0"
  />
  

  <div className="relative z-10 text-center mt-32">
    <h1 className="text-4xl md:text-6xl md:max-w-2xl font-bold mx-4">
      Soluções inovadoras para o agronegócio
    </h1>
    <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <button onClick={() => scrollToSection("solucoes")} className="cursor-pointer flex items-center gap-3 border-[1px] border-white mt-4 md:mt-6 bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-lg text-md font-medium hover:bg-black/30 hover:backdrop-blur-md transition">
            Conheça nossas soluções
            <img src={arrowdownHero} alt="" />
          </button>
          <button className=" cursor-pointer flex items-center gap-3 md:mt-6 bg-white text-black px-4 py-2 rounded-lg text-md font-semibold hover:bg-[#d7d7d7] transition">
            Visitar a SmartPlatform
            <img src={arrowupHero} alt="" />
          </button>
    </div>

    <div className="absolute bottom-[-150px] w-full flex justify-center">
      <img src="/path/to/laptop-mockup.png" alt="Laptop" className="w-[800px] max-w-full" />
    </div>
  </div>

</section>
      <section className="px-6 xl:px-30 py-10" id="sobre">
        <div className="flex flex-col lg:flex-row justify-between gap-6"> 
              <div className="max-w-[800px]">        
                <h2 className="uppercase text-sm roboto-condensed text-[#58A91C] max-w-700px">Sobre a SmartAgri</h2>
                <h2 className="text-3xl md:text-6xl font-bold mb-4">Onde a tecnologia <br />encontra o agro</h2>
                <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pharetra magna, nec aliquet mi. Proin dictum ipsum sit amet mi tempor, non fermentum mauris ultrices. Sed lacinia accumsan enim, eu placerat lectus pellentesque eget. Fusce vel rhoncus tortor, et bibendum sapien. Aenean nec urna commodo, iaculis tortor ac, egestas quam. Praesent leo dui, convallis vitae dapibus et, euismod nec nibh. Vivamus porttitor, erat ac scelerisque consectetur, nulla tellus luctus dolor, et imperdiet nulla lectus at ante.
                <br />
                <br />
                Aenean ultricies finibus diam, ut ultrices est scelerisque ut. In tempus bibendum mi tincidunt feugiat. Maecenas id nisi congue, scelerisque ante vel, hendrerit massa. In sed laoreet ligula. Phasellus quis sagittis velit. Ut consectetur ipsum libero, sed dictum risus malesuada eget. Quisque mollis arcu odio, ac rhoncus mauris ullamcorper id. Donec pharetra urna ac vestibulum feugiat.
                <br />
                <br />
                Ut lobortis leo sit amet orci bibendum, vel sagittis ante sollicitudin. Integer ante ipsum, condimentum eget ante tempus, porttitor vulputate lorem. Quisque feugiat orci sem, ac tincidunt leo molestie et. Nunc ante nunc, efficitur vel turpis at, malesuada egestas lectus. Mauris luctus tempor nisi eget sodales.
                </p>
                </div>
                <img src="src\assets\Rectangle.png" alt="" className=""/>
                </div> 
        </section>
<section className="px-6 xl:px-15 py-10" id="solucoes">
  <div className="flex flex-col xl:flex-row justify-between xl:px-15 gap-2 xl:gap-20">
    <div className="xl:max-w-[650px] xl:min-w-[550px]">    <h2 className="uppercase text-sm roboto-condensed text-[#58A91C] max-w-700px">
      Conheça nossas soluções
    </h2>
    <h3 className="text-3xl md:text-6xl font-bold mb-4">
      Tecnologia para plantar resultados.
    </h3></div>

    <p className="xl:max-w-[500px] xl:text-right text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pharetra magna, nec aliquet mi. Proin dictum ipsum sit amet mi tempor, non fermentum mauris ultrices. Sed lacinia accumsan enim, eu placerat lectus pellentesque eget. Fusce vel rhoncus tortor, et bibendum sapien. Aenean nec urna commodo, iaculis tortor ac, egestas quam. Praesent leo dui, convallis vitae dapibus et, euismod nec nibh. </p>
  </div>

<div className="relative mt-10 ">
  {visibleCount === 1 ? (
    <div className="flex flex-col gap-6 ">
      {cards.map((item, i) => (
        <div
          key={i}
          className="relative bg-gray-100 rounded-xl overflow-hidden w-full h-[300px] "
        >
          {item.img && (
            <img src={item.img} alt="" className="w-full h-full object-cover " />
          )}
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            <p className="text-white text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <>
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-4 py-2 hidden sm:flex"

      >
        <img src={scrollLeft} alt="" className="w-5" />
      </button>

      <div className="flex gap-6 overflow-hidden justify-center ">
        {visibleCards.map((item, i) => (
          <div
            key={i}
            className="relative bg-gray-100 rounded-xl overflow-hidden w-[300px] h-[400px] flex-shrink-0"
          >
            {item.img && (
              <img src={item.img} alt="" className="w-full h-full object-cover" />
            )}
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/10 to-transparent">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-white text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-4 py-2 hidden sm:flex"

      >
        <img src={scrollRight} alt="" className="w-5" />
      </button>
    </>
  )}
</div>
</section>
<section className=" py-10" id="produtos">
        <div className=" px-6 xl:pl-30 xl:pr-0 flex flex-col justify-between max-w-[900px]">    
                <h2 className="uppercase text-sm roboto-condensed text-[#58A91C] max-w-700px">Nossos Produtos</h2>
                <h2 className="text-3xl md:text-6xl font-bold ">Ferramentas que transformam a agricultura</h2>
                </div > 
                <div className="flex flex-col xl:flex-row">
                <img src={smartPlatform} alt="" className=" w-full max-w-[900px] xl:ml-[-20px] mb-5 xl:mb-0"/>
                <div className="flex flex-col px-6 mt-5 md:mt-0 xl:pr-30 align-center justify-center gap-4">
                  <div className="flex flex-col gap-2">
                    <img src={smartPlatformLogo} alt="" className="w-[120px] md:w-[200px]"/>
                  <h4 className="text-2xl md:text-6xl font-semibold max-w-[500px]">Tenha controle de tudo em <span className=" italic font-black text-[#58A91C] ">uma única plataforma</span></h4>
                  
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pharetra magna, nec aliquet mi. Proin dictum ipsum sit amet mi tempor, non fermentum mauris ultrices. Sed lacinia accumsan enim, eu placerat lectus pellentesque eget. Fusce vel rhoncus tortor, et bibendum sapien. Aenean nec urna commodo, iaculis tortor ac, egestas quam. Praesent leo dui, convallis vitae dapibus et, euismod nec nibh. Vivamus porttitor, erat ac scelerisque consectetur, nulla tellus luctus dolor, et imperdiet nulla lectus at ante.</p>
<div className="grid grid-cols-2 gap-2 text-sm text-white">
  {smartplatformCards.map((item, i) => (
    <div key={i} className="bg-black px-3 py-2 rounded flex flex-col">
      <span className="text-md font-semibold">{item.title}</span>
      <span className="text-sm">{item.desc}</span></div>
  ))}
</div>

                </div>
                </div>
        </section>

      <section className="px-6 xl:px-30 py-10" id="campos">
                        <div className="flex bg-red flex-col xl:flex-row justify-between items-center">
        <div className="flex flex-col  justify-between xl:max-w-[900px]">    
                            <div>
                <h2 className="uppercase text-sm roboto-condensed text-[#58A91C] max-w-700px">Onde estamos presentes</h2>
                <h2 className="text-3xl md:text-6xl font-bold max-w-[600px] mb-4">Para cada campo, uma solução</h2>
                </div > 


        <p className="text-gray-700 xl:max-w-2xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pharetra magna, nec aliquet mi. Proin dictum ipsum sit amet mi tempor, non fermentum mauris ultrices. Sed lacinia accumsan enim, eu placerat lectus pellentesque eget. Fusce vel rhoncus tortor, et bibendum sapien. Aenean nec urna commodo, iaculis tortor ac, egestas quam. Praesent leo dui, convallis vitae dapibus et, euismod nec nibh. Vivamus porttitor, erat ac scelerisque consectetur, nulla tellus luctus dolor, et imperdiet nulla lectus at ante.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pharetra magna, nec aliquet mi. Proin dictum ipsum sit amet mi tempor, non fermentum mauris ultrices. Sed lacinia accumsan enim, eu placerat lectus pellentesque eget. Fusce vel rhoncus tortor, et bibendum sapien. Aenean nec urna commodo, iaculis tortor ac, egestas quam. Praesent leo dui, convallis vitae dapibus et, euismod nec nibh. Vivamus porttitor, erat ac scelerisque consectetur, nulla tellus luctus dolor, et imperdiet nulla lectus at ante.</p>
        <div className=" max-w-2xl grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
          {['Alcool e açúcar', 'Irrigação', 'Madeira', 'Arroz', 'Leite e derivados', 'Soja', 'Eucalipto'].map((segment, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#58A91C]"></span>
              {segment}
            </div>
          ))}
          
        </div>
                </div>
        <img src={campImg} alt="" className="mt-4 xl:mt-0 w-fit xl:w-[500px] md:ml-6 h-auto object-contain"/>
        </div>

      </section>

      <section className="py-10" id="cases">
        <div className=" px-6 xl:px-30 flex flex-col justify-between max-w-[900px]">    
                <h2 className="uppercase text-sm roboto-condensed text-[#58A91C] max-w-700px">Cases</h2>
                <h2 className="text-3xl md:text-6xl font-bold ">Transformações que cultivamos juntos.</h2>
                </div > 
        <div className="bg-black text-white mx-6 xl:mx-30 my-8 h-[300px] md:h-[500px] p-6 md:p-10 rounded-md shadow-md flex flex-col justify-between">
          <div>          <h3 className="font-bold mb-2">Título</h3>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p></div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white inline-block"></span>
              <div>
                <p className="text-sm font-medium">Nome da pessoa</p>
                <p className="text-xs">Cargo da pessoa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>

      {/* Footer */}
      <footer className="bg-[#58A91C] text-white text-center py-10" id="contato">
          <div className="flex justify-between h-6 px-6 md:px-30">
            <img src={smartagriLogo} alt="" className=""/>
            <div className="flex justify-center align-center gap-2">
              <img src={mailLogo} alt="" className="h-5 w-5"/>
              <img src={wppLogo} alt="" className="h-5 w-5"/>
            </div>
          </div>
          <div className="px-6 md:px-30">
          <div className="w-full h-px bg-white/40 mt-3 "></div>
          </div>
          <div className="mt-3 flex justify-between px-6 md:px-30">

            <p className="text-xs font-light">2024 Smart Agri</p>
          <div className="flex gap-2">
            <a href="" className="underline text-xs font-light">Termos de Serviço</a>
            <a href="" className="underline text-xs font-light">Política de Privacidade</a>
          </div>
          </div>
          
      </footer>
    </div>

    </>
  )
}

export default App
