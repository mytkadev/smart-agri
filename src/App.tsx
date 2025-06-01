import { useEffect, useState } from "react";
import firstCard from './assets/first-card.png';
import scrollRight from './assets/scroll-right.png';
import scrollLeft from './assets/scroll-left.png';

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

function App() {
  const width = useWindowWidth();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

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

  return (
    <>
<div className=" bg-white text-black">
      {/* Navbar */}
      <header className="bg-transparent shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-full mx-auto px-6 md:px-20 h-16 flex items-center justify-between">
          <img src="src\assets\logo-navbar.png" alt="Logo SmartAgri" className="h-10 mr-2" />
          <nav className="hidden md:flex items-center gap-8 text-md font-medium text-white">
            <span><a href="#" className="hover:text-green-600">Quem Somos</a></span>
            <span><a href="#" className="hover:text-green-600">Soluções</a></span>
            <span><a href="#" className="hover:text-green-600">SmartPlatform</a></span>
            <span><a href="#" className="hover:text-green-600">Segmentos</a></span>
            <span><a href="#" className="hover:text-green-600">Produtos</a></span>
            <span><a href="#" className="hover:text-green-600">Parcerias</a></span>
            <span><a href="#" className="hover:text-green-600">Cases</a></span>
            <span><a href="#" className="hover:text-green-600">Contato</a></span>
          </nav>
          <button className="hidden md:block bg-white text-black px-4 py-2 rounded-sm text-md font-semibold hover:bg-green-600 transition">
            Ir para a SmartPlatform
          </button>
        </div>
      </header>

      <div className="relative"> 

       <section className="relative h-[1500px] flex justify-center text-white overflow-hidden">

  <img
    src="src/assets/bg-img.png"
    alt=""
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />
  

  <div className="relative z-10 text-center mt-32">
    <h1 className="text-4xl md:text-6xl md:max-w-2xl font-bold mx-4">
      Soluções inovadoras para o agronegócio
    </h1>
    <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <button className=" flex items-center gap-3 border-[1px] border-white mt-4 md:mt-6 bg-transparent text-white px-4 py-2 rounded-lg text-md font-medium hover:bg-green-600 transition">
            Conheça nossas soluções
            <img src="src\assets\arrow-down-hero.png" alt="" />
          </button>
          <button className="flex items-center gap-3 md:mt-6 bg-white text-black px-4 py-2 rounded-lg text-md font-semibold hover:bg-green-600 transition">
            Visitar a SmartPlatform
            <img src="src\assets\arrow-up-hero.png" alt="" />
          </button>
    </div>

    <div className="absolute bottom-[-150px] w-full flex justify-center">
      <img src="/path/to/laptop-mockup.png" alt="Laptop" className="w-[800px] max-w-full" />
    </div>
  </div>

</section>
      <section className="px-6 md:px-20 py-20">
        <div className="flex flex-col lg:flex-row justify-between"> 
              <div className="max-w-[800px]">        
                <h2 className="uppercase text-sm roboto-condensed text-green-600 max-w-700px">Sobre a SmartAgri</h2>
                <h2 className="text-3xl md:text-6xl font-bold mb-4">Onde a tecnologia <br />encontra o agro</h2>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pharetra magna, nec aliquet mi. Proin dictum ipsum sit amet mi tempor, non fermentum mauris ultrices. Sed lacinia accumsan enim, eu placerat lectus pellentesque eget. Fusce vel rhoncus tortor, et bibendum sapien. Aenean nec urna commodo, iaculis tortor ac, egestas quam. Praesent leo dui, convallis vitae dapibus et, euismod nec nibh. Vivamus porttitor, erat ac scelerisque consectetur, nulla tellus luctus dolor, et imperdiet nulla lectus at ante.
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
<section className="px-6 md:px-20 py-20">
  <div>
    <h2 className="uppercase text-sm roboto-condensed text-green-600 max-w-700px">
      Conheça nossas soluções
    </h2>
    <h2 className="text-3xl md:text-6xl font-bold mb-4">
      Tecnologia para plantar resultados.
    </h2>
  </div>

<div className="relative mt-10">
  {visibleCount === 1 ? (
    <div className="flex flex-col gap-6">
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

      <div className="flex gap-6 overflow-hidden justify-center">
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






      {/* Para cada campo, uma solução */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Para cada campo,<br />uma solução</h2>
        <p className="text-gray-700 max-w-2xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
          {['Alcool e açúcar', 'Irrigação', 'Madeira', 'Arroz', 'Leite e derivados', 'Soja', 'Eucalipto'].map((segment, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
              {segment}
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section className="bg-green-600 px-6 md:px-20 py-20 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Transformações que cultivamos juntos.</h2>
        <div className="bg-white text-black p-6 rounded-md shadow-md">
          <h3 className="font-bold mb-2">Título</h3>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-black inline-block"></span>
              <div>
                <p className="text-sm font-medium">Nome da pessoa</p>
                <p className="text-xs">Cargo da pessoa</p>
              </div>
            </div>
            <p className="text-4xl font-bold text-gray-300">99</p>
          </div>
        </div>
      </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-10">
        <img src="/path/to/logo.png" alt="Logo" className="mx-auto mb-4 w-12" />
        <p className="text-xl font-bold">Entre em contato</p>
        <p className="mt-2 text-sm">contato@smartagri.com.br<br />+55 11 98604-9004</p>
      </footer>
    </div>
    </>
  )
}

export default App
