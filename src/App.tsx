function App() {

  return (
    <>
<div className=" bg-white text-black">
      {/* Navbar */}
      <header className="bg-transparent shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-full mx-auto px-6 md:px-20 h-16 flex items-center justify-between">
          <img src="src\assets\logo-navbar.png" alt="Logo SmartAgri" className="h-10" />
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
        <div>
          <h2 className="uppercase roboto-condensed text-green-600">Conheça nossas soluções</h2>
          <h2 className="text-3xl md:text-6xl font-bold mb-4">Tecnologia para plantar resultados.</h2></div>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { title: 'SmartPlatform', desc: 'Gestão centralizada e intuitiva.', color: 'bg-gray-300' },
            { title: 'Gestão do agronegócio', desc: 'Visão ampla e gestão eficiente.', color: 'bg-gray-300' },
            { title: 'Projetos customizados', desc: 'Tecnologia sob medida.', color: 'bg-gray-300' }
          ].map((item, i) => (
            <div key={i} className="bg-gray-100 rounded-xl overflow-hidden">
              <div className={`h-48 ${item.color}`} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ferramentas que transformam a agricultura */}
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Ferramentas que transformam a agricultura</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 h-96 w-full" />
          <div>
            <p className="uppercase text-sm text-green-600 font-semibold mb-1">SmartPlatform</p>
            <h3 className="text-2xl font-bold mb-2">Tenha controle de tudo em <span className="italic font-medium text-green-600">uma única plataforma</span></h3>
            <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-white">
              {['Smarttalents', 'Smartbi', 'Smarttools', 'Smartmaps', 'Smartprocess', 'Smartmetrics'].map((tool, i) => (
                <span key={i} className="bg-black px-3 py-1 rounded">{tool}</span>
              ))}
            </div>
          </div>
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
