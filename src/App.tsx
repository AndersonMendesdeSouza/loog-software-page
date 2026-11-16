import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import andersonPortrait from './assets/anderson/Retrato Masculino Recortado em Fundo Transparente.png'
import imobiliariaPreview from './assets/imobiliaria/image.png'
import construtoraPreview from './construtora/image.png'
import joiasPreview from './assets/joias/image.png'
import oticaPreview from './assets/otica/image.png'
import odontoPreview from './assets/odonto/image.png'
import essenciaPreview from './assets/essencia/image.png'
import burguerPreview from './assets/amburgueria/image.png'
import loogSystemPreview from './loogsystem/image.png'
import './App.css'

const instagramUrl = 'https://www.instagram.com/loog_software/'

type IconName = 'arrow' | 'code' | 'window' | 'phone' | 'check' | 'instagram'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />,
    window: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4m-3 14h2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="m62 10-25 15a15 15 0 0 0-7 9L10 91c-3 8 2 15 10 15h69a15 15 0 0 0 13-8l11-22H43L62 10Z" fill="currentColor" />
      <path d="m13 100 30-24h70l-11 22a15 15 0 0 1-13 8H20c-3 0-6-2-7-6Z" fill="white" fillOpacity=".17" />
    </svg>
  )
}

function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="Loog Software — início">
      <BrandMark className="brand-mark" />
      <span>loog<span className="brand-software">software</span></span>
    </a>
  )
}

type Project = {
  id: string
  category: string
  title: string
  image: string
  imageAlt: string
  url: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 'loog-system',
    category: 'SISTEMA',
    title: 'LoogSystem',
    image: loogSystemPreview,
    imageAlt: 'Identidade visual do LoogSystem, sistema de gerenciamento de negócios.',
    url: 'https://admin.loogsystem.com.br/login',
    description: 'Um sistema para gerenciar seu negócio, com acesso seguro ao painel administrativo.',
    tags: ['Gestão de negócios', 'Painel administrativo'],
  },
  {
    id: 'burguer',
    category: 'SISTEMA',
    title: 'Burguer',
    image: burguerPreview,
    imageAlt: 'Sistema da Burguer apresentado em um notebook e um celular, com cardápio e pedidos online.',
    url: 'https://burguer-pedidos-un2i.vercel.app/main',
    description: 'Um sistema para hamburgueria com cardápio digital e experiência prática para realizar pedidos online.',
    tags: ['Cardápio e pedidos online', 'Experiência mobile'],
  },
  {
    id: 'imobiliaria',
    category: 'SITE IMOBILIÁRIO',
    title: 'Imobiliária',
    image: imobiliariaPreview,
    imageAlt: 'Site imobiliário apresentado em um notebook e um celular.',
    url: 'https://imobiliaria-im.vercel.app/',
    description: 'Um site para apresentar imóveis e facilitar o contato com o corretor.',
    tags: ['Catálogo de imóveis', 'Contato com corretor'],
  },
  {
    id: 'construtora',
    category: 'SITE INSTITUCIONAL',
    title: 'Construtora',
    image: construtoraPreview,
    imageAlt: 'Site da Construtora apresentado em um notebook e um celular, com projetos e obras em destaque.',
    url: 'https://construtora-projeto.vercel.app/',
    description: 'Um site institucional para apresentar projetos, obras e serviços de construção, com contato para solicitar orçamento.',
    tags: ['Projetos e obras', 'Solicitação de orçamento'],
  },
  {
    id: 'anas-intimafit',
    category: 'CATÁLOGO DIGITAL',
    title: 'Ana’s IntimaFit',
    image: '/projetos/anas-intimafit.png',
    imageAlt: 'Site da Ana’s IntimaFit apresentado em um notebook e um celular, com identidade em tons rosados.',
    url: 'https://ana-intima-fit.vercel.app/',
    description: 'Uma vitrine digital para apresentar coleções de moda íntima e fitness com a identidade da marca.',
    tags: ['Moda íntima e fitness', 'Design responsivo'],
  },
  {
    id: 'buriti-arena',
    category: 'CARDÁPIO DIGITAL',
    title: 'Buriti Arena',
    image: '/projetos/buriti-arena.png',
    imageAlt: 'Cardápio digital do Buriti Arena em um notebook e um celular, com bebidas, categorias e pratos em destaque.',
    url: 'https://buriti-arena-cardapio.pages.dev/',
    description: 'Um cardápio digital que apresenta pratos e bebidas, com busca, categorias e produtos em destaque.',
    tags: ['Cardápio online', 'Experiência mobile'],
  },
  {
    id: 'vitrine-joias',
    category: 'CATÁLOGO DIGITAL',
    title: 'Vitrine Joias',
    image: joiasPreview,
    imageAlt: 'Site da Vitrine Joias apresentado em um notebook e um celular, com coleções de joias em destaque.',
    url: 'https://vitrine-joias-page.vercel.app/',
    description: 'Uma vitrine digital de demonstração para apresentar coleções de joias, explorar categorias e selecionar peças favoritas.',
    tags: ['Catálogo de joias', 'Filtros por categoria'],
  },
  {
    id: 'otica',
    category: 'SITE PROFISSIONAL',
    title: 'Ótica',
    image: oticaPreview,
    imageAlt: 'Site Ótica apresentado em um notebook e um celular, com coleções de óculos em destaque.',
    url: 'https://otica-page.vercel.app/',
    description: 'Um site para apresentar coleções de óculos, detalhar modelos e facilitar o contato com a Ótica.',
    tags: ['Catálogo de óculos', 'Contato com a loja'],
  },
  {
    id: 'lucas-silva-odonto',
    category: 'SITE PROFISSIONAL',
    title: 'Lucas Silva — Odontologia',
    image: odontoPreview,
    imageAlt: 'Site de Lucas Silva, Odontologia e Estética, apresentado em um notebook e um celular.',
    url: 'https://lucas-odonto.vercel.app/',
    description: 'Um site para apresentar Lucas Silva, seus serviços de odontologia e estética e facilitar o contato para avaliações em Uberlândia (MG).',
    tags: ['Odontologia e estética', 'Apresentação profissional'],
  },
  {
    id: 'essencia-estetica',
    category: 'SITE PROFISSIONAL',
    title: 'Essência Estética',
    image: essenciaPreview,
    imageAlt: 'Site da Essência Estética apresentado em um notebook e um celular, com serviços de estética e bem-estar.',
    url: 'https://essencia-estetica-page.vercel.app/',
    description: 'Um site para apresentar a Essência Estética, organizar seus procedimentos e compartilhar informações sobre estética e bem-estar.',
    tags: ['Estética e bem-estar', 'Apresentação de serviços'],
  },
]

const projectGroups = [
  {
    id: 'sistemas',
    title: 'Sistemas',
    categories: ['SISTEMA'],
  },
  {
    id: 'sites-profissionais',
    title: 'Sites profissionais',
    categories: ['SITE IMOBILIÁRIO', 'SITE INSTITUCIONAL', 'SITE PROFISSIONAL'],
  },
  {
    id: 'catalogos-digitais',
    title: 'Catálogos digitais',
    categories: ['CATÁLOGO DIGITAL'],
  },
  {
    id: 'cardapios-digitais',
    title: 'Cardápios digitais',
    categories: ['CARDÁPIO DIGITAL'],
  },
]

const steps = [
  { number: '01', title: 'A gente conversa', text: 'Você conta a ideia. A gente entende o contexto, as necessidades e o que faz seu negócio ser único.' },
  { number: '02', title: 'A ideia ganha forma', text: 'Planejamos a experiência e construímos a solução, com você acompanhando o caminho.' },
  { number: '03', title: 'Seu projeto no mundo', text: 'Revisamos os detalhes e preparamos tudo para sua solução começar a fazer parte do dia a dia.' },
]

type ProjectCarouselProps = {
  id: string
  title: string
  projects: Project[]
  onOpenProject: (project: Project) => void
}

function ProjectCarousel({ id, title, projects, onOpenProject }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollBack, setCanScrollBack] = useState(false)
  const [canScrollForward, setCanScrollForward] = useState(false)
  const hasOverflow = canScrollBack || canScrollForward
  const trackId = id + '-track'

  useEffect(() => {
    const track = trackRef.current

    if (!track) {
      return
    }

    const updateScrollButtons = () => {
      setCanScrollBack(track.scrollLeft > 1)
      setCanScrollForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 1)
    }

    updateScrollButtons()
    track.addEventListener('scroll', updateScrollButtons, { passive: true })
    window.addEventListener('resize', updateScrollButtons)

    return () => {
      track.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [projects.length])

  function scrollProjects(direction: 'previous' | 'next') {
    const track = trackRef.current
    const firstCard = track?.querySelector<HTMLElement>('.project-card')

    if (!track || !firstCard) {
      return
    }

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0
    const distance = firstCard.getBoundingClientRect().width + gap

    track.scrollBy({ left: direction === 'next' ? distance : -distance, behavior: 'auto' })
  }

  return (
    <section className="project-group" aria-labelledby={id + '-title'} data-reveal>
      <div className="project-group-heading">
        <div className="project-group-label">
          <h3 className="project-group-title" id={id + '-title'}>{title}</h3>
          <span className="project-group-count">{projects.length} {projects.length === 1 ? 'projeto' : 'projetos'}</span>
        </div>
        {hasOverflow && (
          <div className="carousel-controls">
            <button type="button" className="carousel-button" aria-label={'Mostrar projetos anteriores de ' + title}
              aria-controls={trackId} disabled={!canScrollBack} onClick={() => scrollProjects('previous')}>
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" className="carousel-button" aria-label={'Mostrar próximos projetos de ' + title}
              aria-controls={trackId} disabled={!canScrollForward} onClick={() => scrollProjects('next')}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
      <div className="projects-track" id={trackId} ref={trackRef} role="group"
        aria-label={'Projetos da categoria ' + title} tabIndex={hasOverflow ? 0 : undefined}>
        {projects.map((project, index) => (
          <article className={'project-card project-' + project.id} key={project.id}>
            <button className="project-preview-button" onClick={() => onOpenProject(project)} aria-label={'Ampliar imagem do projeto ' + project.title}>
              <div className="project-preview-frame">
                <img src={project.image} alt={project.imageAlt} width="1672" height="941" loading="lazy" decoding="async" />
              </div>
              <span className="project-open"><Icon name="arrow" /></span>
            </button>
            <div className="project-info">
              <div className="project-category"><span>{project.category}</span><span>/{String(index + 1).padStart(2, '0')}</span></div>
              <a className="project-title" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={'Visitar o site de ' + project.title + ' (abre em nova aba)'}>{project.title}<Icon name="arrow" /></a>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="text-link project-visit" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={'Visitar o projeto ' + project.title + ' (abre em nova aba)'}>Visitar projeto <Icon name="arrow" /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollHint, setShowScrollHint] = useState(true)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const projectDialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      return
    }

    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' })

    for (const element of revealElements) {
      element.classList.add('reveal-ready')
      observer.observe(element)
    }

    return () => {
      observer.disconnect()

      for (const element of revealElements) {
        element.classList.remove('reveal-ready', 'is-visible')
      }
    }
  }, [])

  useEffect(() => {
    const hideScrollHint = () => {
      if (window.scrollY > 24) {
        setShowScrollHint(false)
      }
    }

    hideScrollHint()
    window.addEventListener('scroll', hideScrollHint, { passive: true })

    return () => window.removeEventListener('scroll', hideScrollHint)
  }, [])

  function openProject(project: Project) {
    setSelectedProject(project)
    projectDialog.current?.showModal()
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav id="main-navigation" aria-label="Menu principal" className={menuOpen ? 'navigation is-open' : 'navigation'}>
            <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
            <a href="#servicos" onClick={() => setMenuOpen(false)}>O que fazemos</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre a Loog</a>
            <a href="#contato" className="mobile-contact" onClick={() => setMenuOpen(false)}>Vamos conversar <Icon name="arrow" /></a>
          </nav>
          <a href="#contato" className="header-contact">Vamos conversar <Icon name="arrow" /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
        </div>
      </header>

      {showScrollHint && !menuOpen && (
        <div className="scroll-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      )}

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> DA SUA IDEIA PARA O MUNDO</div>
              <h1>Grandes ideias.<br />Soluções reais.<br /><span>Do seu jeito.</span></h1>
              <p>Criamos sites e sistemas personalizados que conectam sua marca às pessoas e simplificam o seu negócio.</p>
              <div className="hero-actions">
                <a href="#projetos" className="button button-primary">Ver projetos <Icon name="arrow" /></a>
                <a href="#contato" className="text-link">Falar com a Loog <Icon name="arrow" /></a>
              </div>
              <div className="hero-note"><span>↳</span><p>Tecnologia com propósito.<br /><strong>Do primeiro conceito ao último detalhe.</strong></p></div>
            </div>
            <div className="hero-art">
              <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
              <div className="art-caption"><i /> PENSADO PARA O SEU PRÓXIMO PASSO</div>
              <div className="hero-portrait">
                <img src={andersonPortrait} alt="Anderson, da Loog Software" width="1254" height="1254" fetchPriority="high" decoding="async" />
              </div>
              <div className="floating-label">
                <span><Icon name="code" /></span><div>Uma boa ideia merece<br /><strong>uma solução bem feita.</strong></div><Icon name="arrow" />
              </div>
              <div className="art-bottom-caption"><span>DESIGN + CÓDIGO + PROPÓSITO</span><span>01 — ∞</span></div>
            </div>
          </div>
          <div className="container hero-bottom">
            <p>Seu negócio tem potencial.<br /><strong>A gente transforma em digital.</strong></p>
            <div><span>Sites que conectam</span><i /><span>Sistemas que simplificam</span><i /><span>Experiências que ficam</span></div>
            <a href="#projetos" aria-label="Conhecer os projetos">↓</a>
          </div>
        </section>

        <section id="projetos" className="projects-section">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div><span className="eyebrow section-label">01 / PROJETOS EM DESTAQUE</span><h2>Ideias que ganharam<br /><span>forma e função.</span></h2></div>
              <a href="#contato" className="text-link">O próximo pode ser o seu <Icon name="arrow" /></a>
            </div>
            <div className="project-groups">
              {projectGroups.map((group) => {
                const groupProjects = projects.filter((project) => group.categories.includes(project.category))

                if (groupProjects.length === 0) {
                  return null
                }

                return <ProjectCarousel key={group.id} id={group.id} title={group.title}
                  projects={groupProjects} onOpenProject={openProject} />
              })}
            </div>
          </div>
        </section>

        <section id="servicos" className="services-section">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div><span className="eyebrow section-label">02 / O QUE FAZEMOS</span><h2>Seu desafio.<br /><span>Nossa próxima solução.</span></h2></div>
              <p>Não existe um negócio igual ao seu.<br />A sua solução digital também não precisa ser.</p>
            </div>
            <div className="services-grid">
              <article className="service" data-reveal>
                <span className="service-icon"><Icon name="window" /></span><span className="service-number">01</span>
                <h3>Sites & landing pages</h3>
                <p>Uma presença digital que traduz sua marca, apresenta seu trabalho e abre portas para novas oportunidades.</p>
                <div className="service-footer"><span>SUA MARCA, BEM REPRESENTADA</span><Icon name="arrow" /></div>
              </article>
              <article className="service" data-reveal>
                <span className="service-icon"><Icon name="code" /></span><span className="service-number">02</span>
                <h3>Sistemas sob medida</h3>
                <p>Ferramentas pensadas para a sua rotina. Organize processos e dê mais espaço para o seu negócio crescer.</p>
                <div className="service-footer"><span>MAIS CONTROLE, MENOS COMPLICAÇÃO</span><Icon name="arrow" /></div>
              </article>
              <article className="service" data-reveal>
                <span className="service-icon"><Icon name="phone" /></span><span className="service-number">03</span>
                <h3>Cardápios digitais</h3>
                <p>Seu cardápio na palma da mão. Uma forma prática e visual de apresentar seus produtos aos clientes.</p>
                <div className="service-footer"><span>O PRÓXIMO PEDIDO COMEÇA AQUI</span><Icon name="arrow" /></div>
              </article>
            </div>
          </div>
        </section>

        <section id="sobre" className="about-section">
          <div className="container about-layout">
            <div className="about-copy" data-reveal>
              <span className="eyebrow section-label">03 / MUITO PRAZER, SOMOS A LOOG</span>
              <h2>Gente que entende<br />de tecnologia.<br /><span>E escuta você.</span></h2>
              <p>Acreditamos que uma boa solução começa com uma boa conversa. Queremos entender o seu negócio para criar algo que faça sentido para você e para quem vai usar.</p>
              <p>Da primeira ideia à entrega, design e desenvolvimento caminham juntos. Com atenção aos detalhes e sem complicar o que pode ser simples.</p>
              <a href="#contato" className="text-link">Conheça quem vai construir com você <Icon name="arrow" /></a>
            </div>
            <div className="process" data-reveal>
              <div className="process-heading">
                <span>DO PRIMEIRO OLÁ À ENTREGA</span>
                <span aria-hidden="true">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 5 5 19M5 5v14h14" />
                  </svg>
                </span>
              </div>
              {steps.map((step) => (
                <div className="process-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>
              ))}
              <div className="process-note"><Icon name="check" /> Próximos em cada etapa. Cuidadosos em cada entrega.</div>
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div className="container contact-layout" data-reveal>
            <div>
              <span className="eyebrow"><span className="status-dot" /> O PRÓXIMO PASSO É UMA CONVERSA</span>
              <h2>Sua ideia merece<br /><span>sair do papel.</span><svg className="hand-arrow" viewBox="0 0 120 80" fill="none" aria-hidden="true"><path d="M5 8c8 40 45 60 100 39M86 30l25 14-11 27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></h2>
              <p>Conta pra gente o que você está imaginando.<br />Vamos descobrir juntos como fazer acontecer.</p>
            </div>
            <div className="contact-action">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="button button-white">Vamos construir algo juntos <Icon name="arrow" /></a>
              <a className="instagram-link" href={instagramUrl} target="_blank" rel="noopener noreferrer"><Icon name="instagram" /> @loog_software <Icon name="arrow" /></a>
              <span>Uma conversa simples. Um mundo de possibilidades.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top" data-reveal>
          <div><Brand /><p>Ideias em movimento. Soluções que conectam.</p></div>
          <div className="footer-links"><a href="#projetos">Projetos</a><a href="#servicos">Serviços</a><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <Icon name="arrow" /></a></div>
          <a href="#inicio" className="back-top">De volta ao topo ↑</a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Loog Software. Todos os direitos reservados.</span><span>Feito com propósito<span className="footer-dot">.</span></span></div>
      </footer>

      <dialog ref={projectDialog} className="project-dialog" aria-labelledby="project-dialog-title">
        <div className="dialog-header"><span>PRÉVIA DO PROJETO · LOOG SOFTWARE</span><button onClick={() => projectDialog.current?.close()} aria-label="Fechar prévia" className="dialog-close">×</button></div>
        {selectedProject && (
          <>
            <div className={'dialog-preview project-' + selectedProject.id}>
              <img src={selectedProject.image} alt={selectedProject.imageAlt} width="1672" height="941" />
            </div>
            <div className="dialog-copy">
              <span className="eyebrow section-label">{selectedProject.category}</span><h2 id="project-dialog-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <a href={selectedProject.url} className="button button-primary" target="_blank" rel="noopener noreferrer">Visitar projeto <Icon name="arrow" /></a>
            </div>
          </>
        )}
      </dialog>
    </>
  )
}

export default App
