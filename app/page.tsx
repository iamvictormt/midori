'use client';

import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 100; // Account for fixed header height
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="overflow-x-hidden min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex flex-col justify-between bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/floresta-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="relative z-10 flex-1 flex items-center">
          <div className="container mx-auto px-4 md:px-20 max-w-full mt-12 md:mt-22">
            <h1
              className="font-anton text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[100px] leading-[1.08] font-normal text-[#EFF3CE] max-w-5xl break-words hyphens-auto"
              style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              CO-CRIAMOS
              <br />
              NEGÓCIOS
              <br /> CONSCIENTES E<br /> REGENERATIVOS.
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 right-2 sm:right-4 md:right-8 max-w-[85vw] sm:max-w-[70vw] md:max-w-none">
          <div className="bg-[#005233] p-3 sm:p-4 md:p-6 lg:p-20 shadow-lg flex justify-center">
            {/* Imagem para telas médias e maiores */}
            <Image
              src="/logo.svg"
              alt="Midori coLAB"
              width={450} // tamanho natural maior para boa qualidade
              height={180} // manter proporção aproximada
              className="hidden md:block w-full max-w-[300px] lg:max-w-[450px] h-auto"
            />

            {/* Imagem para telas pequenas */}
            <Image
              src="/logo.svg"
              alt="Midori coLAB"
              width={150}
              height={100}
              className="block md:hidden max-w-[150px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="bg-[#BFDD50] py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-20 max-w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-24">
            <p className="font-noto-condensed text-[20px] md:text-[28px] lg:text-[30px] leading-[1.17] font-normal text-[#005233]">
              Transformamos ideias em resultados sustentáveis,
              <br className="hidden md:inline" />
              do conceito ao lançamento, da fazenda ao varejo.
            </p>
            <div className="flex-shrink-0">
              <button
                className="bg-[#005233] text-[#EFF3CE] font-noto-condensed font-extrabold text-[20px] md:text-[28px] lg:text-[30px] leading-[1.1] px-8 py-6 rounded-[22px] hover:bg-[#004028] transition-colors duration-200 whitespace-nowrap cursor-pointer"
                onClick={(e) => handleSmoothScroll(e, `#servicos`)}
              >
                CONHEÇA NOSSOS SERVIÇOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="bg-[#A9CE42] py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-20 max-w-full text-center">
          <h2 className="font-anton text-[50px] md:text-[80px] lg:text-[100px] leading-[1.08] font-normal text-[#005233]">
            SOMOS UM COLETIVO DE <br />
            PROFISSIONAIS APAIXONADOS <br />
            POR{' '}
            <span className="text-[#7CA800]">
              INOVAÇÃO E <br />
              SUSTENTABILIDADE.
            </span>
          </h2>

          <div className="flex justify-center items-center w-full">
            <hr className="border-0 h-[10px] w-[50%] bg-[#BFDD50] rounded-full m-6" />
          </div>

          <p className="font-noto-condensed text-[40px] md:text-[45px] lg:text-[50px] leading-[0.98] font-normal text-[#005233] max-w-4xl mx-auto">
            Unimos expertise para transformar
            <br />
            negócios, da <span className="font-[800]">ideia ao mercado.</span>
          </p>
        </div>
      </section>

      {/* From Idea to Launch */}
      <section
        className="relative min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat py-16 lg:py-24"
        style={{
          backgroundImage: "url('/lampada-bg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center text-center mb-16">
            <div>
              <h2 className="font-anton text-[60px] md:text-[80px] lg:text-[100px] leading-[1.08] font-normal text-[#EFF3CE]">
                FROM IDEA
                <br />
                TO LAUNCH
              </h2>
            </div>
            <div>
              <h2 className="font-anton text-[60px] md:text-[80px] lg:text-[100px] leading-[1.08] font-normal text-[#EFF3CE]">
                FROM FARM
                <br />
                TO RETAIL
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <button
              className="bg-[#005233] text-[#EFF3CE] font-noto-condensed font-extrabold text-[20px] md:text-[28px] lg:text-[30px] leading-[1.1] px-8 py-6 rounded-[22px] hover:bg-[#004028] transition-colors duration-200 whitespace-nowrap cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, `#servicos`)}
            >
              NOSSOS SERVIÇOS
            </button>
            <button
              className="bg-[#005233] text-[#EFF3CE] font-noto-condensed font-extrabold text-[20px] md:text-[28px] lg:text-[30px] leading-[1.1] px-8 py-6 rounded-[22px] hover:bg-[#004028] transition-colors duration-200 whitespace-nowrap cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, `#sobre`)}
            >
              SOBRE NÓS
            </button>
            <button
              className="bg-[#005233] text-[#EFF3CE] font-noto-condensed font-extrabold text-[20px] md:text-[28px] lg:text-[30px] leading-[1.1] px-8 py-6 rounded-[22px] hover:bg-[#004028] transition-colors duration-200 whitespace-nowrap cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, `#contato`)}
            >
              ENTRE EM CONTATO
            </button>
          </div>
        </div>
      </section>

      {/* Projetos Premiados Section */}
      <section className="bg-[#005233] py-16 lg:py-30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-20 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_minmax(0,65%)] gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="font-anton text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[1.08] font-normal text-[#EFF3CE] break-words">
                PROJETOS PREMIADOS
              </h2>
              <p className="font-noto-condensed text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[1.17] font-normal text-[#EFF3CE] mt-6 max-w-2xl">
                Reconhecidos por projetos premiados
                <br className="hidden md:inline" />e soluções inovadoras para negócios
                <br className="hidden md:inline" />
                sustentáveis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full">
              {[
                { src: '/premio1.png', alt: 'Prêmio Award 2024 - 2º Lugar' },
                { src: '/premio2.png', alt: 'Innovation Awards 23 - Produto Mais Inovador' },
                { src: '/premio3.png', alt: 'Troféus dourados em vitrine' },
              ].map((img, i) => (
                <div
                  key={i}
                  className={`w-full overflow-hidden rounded-lg flex justify-center items-center ${
                    i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <Image
                    src={img.src || '/placeholder.svg'}
                    alt={img.alt}
                    width={300}
                    height={300}
                    className="w-full max-w-full h-auto max-h-[30vh] sm:max-h-[35vh] lg:max-h-[40vh] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="sobre" className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#7CA800]">
            <div className="p-12 px-4 md:px-20">
              <h2 className="font-anton text-[50px] md:text-[80px] lg:text-[80px] leading-[1.08] font-normal text-[#EFF3CE] mt-8">
                SOBRE NÓS
              </h2>
            </div>
            <div className="h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/placa-midori.png"
                alt="Placa suspensa Midori coLAB"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-[#EFF3CE] p-12">
            <h3 className="font-anton text-[50px] md:text-[80px] lg:text-[80px] leading-[1.08] font-normal text-[#005233] mt-8">
              CO-CRIAMOS
              <br />
              NEGÓCIOS
              <br />
              <span className="text-[#7CA800]">
                CONSCIENTES
                <br />E REGENERATIVOS
              </span>
            </h3>
            <p className="font-noto-condensed text-[20px] md:text-[28px] lg:text-[30px] leading-[1.17] text-[#005233] mt-12">
              Unindo profissionais{' '}
              <span className="font-bold">
                apaixonados
                <br />
                por sustentabilidade e inovação.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#005233] py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-20 max-w-full text-center">
          <h2 className="font-anton text-[50px] md:text-[80px] lg:text-[100px] leading-[1.08] font-normal text-[#EFF3CE] mb-8">
            SOMOS UM
            <br />
            <span className="text-[#BFDD50]">
              COLETIVO DE
              <br />
              ESPECIALISTAS
            </span>
          </h2>

          <p className="font-noto-condensed text-[20px] md:text-[28px] lg:text-[30px] leading-[1.17] font-normal text-[#EFF3CE] max-w-3xl mx-auto">
            Trabalhando juntos para transformar <br /> <span className="font-[700]">ideias em realidade.</span>
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] min-h-[60vh]">
          <div className="bg-[#EFF3CE] flex items-center px-4 md:px-20">
            <h2 className="font-anton text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px] leading-[1.08] font-normal text-[#005233] text-center lg:text-left">
              NOSSOS
              <br />
              VALORES
            </h2>
          </div>
          <div className="flex flex-col">
            <div className="bg-[#7CA800] p-6 sm:p-8 lg:p-12 flex items-center justify-center flex-1">
              <p className="font-noto-condensed text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[0.8] font-bold text-[#EFF3CE] text-center break-words">
                Regeneração na prática.
              </p>
            </div>
            <div className="bg-[#BFDD50] p-6 sm:p-8 lg:p-12 flex items-center justify-center flex-1">
              <p className="font-noto-condensed text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[0.8] font-bold text-[#005233] text-center break-words">
                Mentalidade ágil e liderança.
              </p>
            </div>
            <div className="bg-[#005233] p-6 sm:p-8 lg:p-12 flex items-center justify-center flex-1">
              <p className="font-noto-condensed text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[0.8] font-bold text-[#EFF3CE] text-center break-words">
                Soluções orientadas à inovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#BFDD50] py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-20 text-center">
          <h2 className="font-anton text-[50px] md:text-[80px] lg:text-[100px] leading-[1.08] font-normal text-[#005233] mb-12">
            COMO PODEMOS
            <br />
            TRANSFORMAR
            <br />O SEU NEGÓCIO?
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <button
              className="bg-[#005233] text-[#EFF3CE] font-noto-condensed font-extrabold text-[20px] md:text-[28px] lg:text-[30px] leading-[1.1] px-8 py-6 rounded-[22px] hover:bg-[#004028] transition-colors duration-200 whitespace-nowrap cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, `#servicos`)}
            >
              NOSSOS SERVIÇOS
            </button>
            <button
              className="bg-[#005233] text-[#EFF3CE] font-noto-condensed font-extrabold text-[20px] md:text-[28px] lg:text-[30px] leading-[1.1] px-8 py-6 rounded-[22px] hover:bg-[#004028] transition-colors duration-200 whitespace-nowrap cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, `#contato`)}
            >
              ENTRE EM CONTATO
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="bg-[#EFF3CE] py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-20">
          <div className="text-center mb-16 max-w-6xl mx-auto">
            <p className="font-noto-condensed text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[45px] leading-[1.04] font-normal text-[#005233] mb-8 text-center max-w-4xl mx-auto break-words">
              Do <span className="font-bold">diagnóstico estratégico</span> ao
              <br className="hidden sm:block" />
              <span className="font-bold">lançamento de novos negócios,</span>
            </p>

            <h2 className="font-anton text-[40px] sm:text-[50px] md:text-[70px] lg:text-[85px] xl:text-[100px] leading-[1.08] font-normal text-center mb-16 max-w-6xl mx-auto break-words">
              <span className="text-[#005233]">OFERECEMOS </span>
              <span className="text-[#7CA800]">
                SOLUÇÕES
                <br />
                COMPLETAS{' '}
              </span>
              <span className="text-[#005233]">
                PARA O<br />
                SUCESSO SUSTENTÁVEL:
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {/* Card 1 - Diagnóstico e Execução Estratégica */}
            <div className="bg-[#005233] p-10 sm:p-p-12 rounded-3xl md:col-span-2">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                <h3 className="font-anton text-[32px] sm:text-[38px] md:text-[42px] lg:text-[50px] leading-[1] font-normal text-[#EFF3CE] break-words">
                  Diagnóstico e<br />
                  Execução Estratégica
                </h3>
                <span className="font-anton text-[40px] sm:text-[48px] font-normal text-[#EFF3CE] flex-shrink-0">
                  01
                </span>
              </div>
              <p className="font-noto-condensed text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-[1.07] font-normal text-[#EFF3CE] break-words">
                Otimizamos processos e criamos estratégias para
                <br />
                maximizar resultados sustentáveis.
              </p>
            </div>

            {/* Card 2 - Desenvolvimento de Produto */}
            <div className="bg-[#7CA800] p-10 sm:p-p-12 rounded-3xl">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                <h3 className="font-anton text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1] font-normal text-[#EFF3CE] break-words">
                  Desenvolvimento
                  <br />
                  de Produto e<br />
                  Responsabilidade Técnica
                </h3>
                <span className="font-anton text-[40px] sm:text-[48px] font-normal text-[#EFF3CE] flex-shrink-0">
                  02
                </span>
              </div>
              <p className="font-noto-condensed text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] leading-[1.07] font-normal text-[#EFF3CE] break-words">
                Criamos produtos inovadores com
                <br />
                responsabilidade técnica e suporte
                <br />
                em projetos.
              </p>
            </div>

            {/* Card 3 - Treinamentos */}
            <div className="bg-[#BFDD50] p-10 sm:p-p-12 rounded-3xl">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                <h3 className="font-anton text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1] font-normal text-[#005233] break-words">
                  Treinamentos e<br />
                  Materiais
                  <br />
                  técnicos
                </h3>
                <span className="font-anton text-[40px] sm:text-[48px] font-normal text-[#005233] flex-shrink-0">
                  03
                </span>
              </div>
              <p className="font-noto-condensed text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] leading-[1.07] font-normal text-[#005233] break-words">
                Capacitamos equipes com treinamentos
                <br />
                personalizados e conteúdos técnicos de
                <br />
                alto impacto.
              </p>
            </div>

            {/* Card 4 - Novos negócios */}
            <div className="bg-[#9AD000] p-10 sm:p-p-12 rounded-3xl">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                <h3 className="font-anton text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1] font-normal text-[#005233] break-words">
                  Novos negócios
                  <br />e Branding
                </h3>
                <span className="font-anton text-[40px] sm:text-[48px] font-normal text-[#005233] flex-shrink-0">
                  04
                </span>
              </div>
              <p className="font-noto-condensed text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] leading-[1.07] font-normal text-[#005233] break-words">
                Construímos marcas e negócios que
                <br />
                conectam com o futuro sustentável.
              </p>
            </div>

            {/* Card 5 - Comunicação */}
            <div className="bg-[#B6DB2C] p-10 sm:p-p-12 rounded-3xl">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                <h3 className="font-anton text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1] font-normal text-[#005233] break-words">
                  Comunicação integrada
                  <br />e Produção de eventos
                </h3>
                <span className="font-anton text-[40px] sm:text-[48px] font-normal text-[#005233] flex-shrink-0">
                  05
                </span>
              </div>
              <p className="font-noto-condensed text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] leading-[1.07] font-normal text-[#005233] break-words">
                Gerenciamos projetos com precisão,
                <br />
                do planejamento à entrega final que
                <br />
                conectam marcas, pessoas e valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="bg-[#BFDD50] py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div>
              <h2 className="font-noto-condensed text-[40px] md:text-[45px] lg:text-[50px] leading-[0.7] font-normal text-[#005233] text-center md:text-left">
                Vamos{' '}
                <span className="font-bold">
                  coLABorar
                  <br />
                  no seu projeto?
                </span>
              </h2>
            </div>
            <div>
              <button
                className="bg-[#005233] text-[#EFF3CE] font-noto-condensed font-extrabold text-[20px] md:text-[28px] lg:text-[30px] leading-[1.1] px-8 py-6 rounded-[22px] hover:bg-[#004028] transition-colors duration-200 whitespace-nowrap cursor-pointer"
                onClick={(e) => handleSmoothScroll(e, `#contato`)}
              >
                ENTRE EM CONTATO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="bg-[#005233] py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-20 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6 lg:space-y-8">
              <h2 className="font-anton text-[35px] sm:text-[45px] md:text-[55px] lg:text-[65px] xl:text-[75px] leading-[1.12] font-normal text-[#EFF3CE] max-w-2xl break-words">
                COMO PODEMOS
                <br />
                COLABORAR COM A <br />
                TRANSFORMAÇÃO <br />
                DO SEU NEGÓCIO?
              </h2>

              <p className="font-noto-condensed text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[0.96] font-normal text-[#EFF3CE] break-words">
                O sucesso é coletivo.
                <br />
                <span className="text-[#BFDD50] font-bold">Vamos começar?</span>
              </p>

              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.svg"
                  alt="Midori coLAB Logo"
                  width={120}
                  height={40}
                  className="h-16 sm:h-20 w-auto"
                />
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="max-w-full">
              <form className="space-y-6">
                <div>
                  <label className="block font-noto-condensed text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-[1.17] font-bold text-[#EFF3CE] mb-3">
                    Seu nome:
                  </label>
                  <input
                    type="text"
                    className="w-full h-[70px] sm:h-[80px] md:h-[90px] lg:h-[98px] px-4 sm:px-6 rounded-[13px] bg-[#EFF3CE] border-none text-[#005233] font-noto-condensed text-[16px] sm:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#BFDD50]"
                  />
                </div>

                <div>
                  <label className="block font-noto-condensed text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-[1.17] font-bold text-[#EFF3CE] mb-3">
                    Empresa:
                  </label>
                  <input
                    type="text"
                    className="w-full h-[70px] sm:h-[80px] md:h-[90px] lg:h-[98px] px-4 sm:px-6 rounded-[13px] bg-[#EFF3CE] border-none text-[#005233] font-noto-condensed text-[16px] sm:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#BFDD50]"
                  />
                </div>

                <div>
                  <label className="block font-noto-condensed text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-[1.17] font-bold text-[#EFF3CE] mb-3">
                    Mensagem:
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 sm:px-6 py-4 rounded-[13px] bg-[#EFF3CE] border-none text-[#005233] font-noto-condensed text-[16px] sm:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#BFDD50] resize-none"
                  ></textarea>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-[#BFDD50] text-[#005233] font-noto-condensed font-extrabold text-[24px] sm:text-[28px] lg:text-[30px] px-8 sm:px-12 py-4 sm:py-6 rounded-[22px] hover:bg-[#A9CE42] transition-colors duration-300 w-full sm:w-auto"
                  >
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#BFDD50] py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-24">
            {/* Logo */}
            <div className="flex-shrink-0 order-1 lg:order-1">
              <Image
                src="/logo-verde.svg"
                alt="Midori coLAB"
                width={400}
                height={120}
                className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] h-auto"
              />
            </div>

            <div className="flex flex-col items-center lg:items-start gap-4 order-2 lg:order-2">
              <div className="text-center lg:text-right">
                <p className="font-noto-condensed text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[30px] leading-[1.17] font-bold text-[#005233] break-all">
                  contato@midoricollab.com.br
                </p>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#EFF3CE] rounded-full flex items-center justify-center cursor-pointer
                transition-shadow duration-300 hover:shadow-lg hover:brightness-110"
                >
                  <Image
                    src="/linkedin-icon.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  />
                </div>
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#EFF3CE] rounded-full flex items-center justify-center cursor-pointer
                transition-shadow duration-300 hover:shadow-lg hover:brightness-110"
                >
                  <Image
                    src="/instagram-icon.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
