import { ProjectCase, ServicePackage, WorkExperience, AcademicDegree, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'João Vitor Mizeeski',
  headline: 'Especialista UX/UI • Engenharia Comportamental',
  location: 'Palhoça / Florianópolis, Santa Catarina, Brasil',
  email: 'joaovitor.mizeeski@gmail.com',
  phone: '+55 (48) 98459-1763',
  phoneRaw: '5548984591763',
  whatsappUrl: 'https://wa.me/5548984591763',
  linkedin: 'https://www.linkedin.com/in/joao-mizeeski',
  behance: 'https://www.behance.net/joovimizuessk',
  currentSite: 'https://mizeeski.com/',
  bioSummary: `Sou UX/UI Designer especializado em Behavioral Design: uso neurociência comportamental para desenhar produtos digitais que reduzem erro, aumentam confiança e convertem mais. Atuo do discovery à entrega em código, ponte entre design e engenharia.`,
  corePillars: [
    {
      title: 'SaaS & Sistemas Complexos',
      description: 'Experiência em plataformas brasileiras e europeias (mercado DACH e Healthcare), desenhando soluções que equilibram complexidade técnica e simplicidade de uso.'
    },
    {
      title: 'Design Ops & Scalability',
      description: 'Foco em Design Systems modulares (Atomic Design) para garantir consistência visual, escalabilidade e agilidade no desenvolvimento de software.'
    },
    {
      title: 'Pesquisa Comportamental',
      description: 'Investigação ativa sobre tomadas de decisão, arquitetura de escolha e neurobiometria aplicada à tecnologia, finanças e sistemas críticos.'
    },
    {
      title: 'Desenvolvimento Web & Código',
      description: 'Ponte direta entre design e engenharia com habilidades em React, HTML5/CSS3, Webflow, WordPress e validação técnica de protótipos em código.'
    }
  ]
};

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: 'behavioral-consulting',
    title: 'Diagnóstico UX & Auditoria Comportamental',
    subtitle: 'Descubra por que seus usuários hesitam, erram ou abandonam, e o que fazer a respeito',
    description: 'Ideal para quem já tem um produto no ar e sente que "algo não converte", mas não sabe exatamente o quê.',
    iconName: 'Brain',
    features: [
      'Auditoria completa de carga cognitiva e usabilidade',
      'Mapeamento dos pontos de decisão que mais geram abandono',
      'Recomendações práticas e priorizadas de CRO (Conversion Rate Optimization)'
    ],
    deliverables: [
      'Relatório Executivo em PDF com diagnósticos visuais e de usabilidade',
      'Mapeamento detalhado dos pontos de fricção no funil',
      'Figma Board com propostas de Redesign dos fluxos críticos'
    ],
    idealFor: 'Produtos digitais e SaaS com queda de conversão em onboarding ou fluxos complexos.',
    estimatedTimeframe: '1 a 2 semanas',
    startingPriceNote: 'Solicitar Auditoria'
  },
  {
    id: 'product-design-systems',
    title: 'Product Design & Design System Completo',
    subtitle: 'Da pesquisa ao protótipo: um produto desenhado para funcionar, não só para parecer bonito',
    description: 'Ideal para quem vai lançar, redesenhar ou escalar um produto digital.',
    iconName: 'Layout',
    features: [
      'Discovery e mapeamento da jornada do usuário',
      'Wireframes e protótipos navegáveis em alta fidelidade',
      'Design System modular, documentado e pronto para o time de dev usar'
    ],
    deliverables: [
      'Figma Master File organizado e componentizado',
      'Design System em Atomic Design com tokens e documentação',
      'Especificações de UX/UI para Desenvolvedores (Handoff)'
    ],
    idealFor: 'Startups em tração, empresas reformulando plataformas legadas ou lançando novos SaaS.',
    estimatedTimeframe: '3 a 6 semanas',
    startingPriceNote: 'Solicitar Proposta'
  },
  {
    id: 'web-development-apps',
    title: 'Desenvolvimento Web de Alta Performance',
    subtitle: 'Sites e landing pages rápidos, responsivos e feitos para converter',
    description: 'Ideal para quem precisa tirar do papel com agilidade uma landing page, portal ou web app.',
    iconName: 'Code',
    features: [
      'Desenvolvimento front-end responsivo (React, Webflow ou WordPress)',
      'Landing pages otimizadas para conversão',
      'Integração com analytics, CRM e formulários'
    ],
    deliverables: [
      'Site ou Web App publicado e configurado no seu domínio',
      'Pontuação máxima em Core Web Vitals e SEO',
      'Código limpo, seguro e com suporte pós-lançamento'
    ],
    idealFor: 'Lançamentos de produtos e empresas precisando de presença digital de alto impacto.',
    estimatedTimeframe: '1 a 3 semanas',
    startingPriceNote: 'Solicitar Orçamento'
  }
];

export const PORTFOLIO_CASES: ProjectCase[] = [
  {
    id: 'essentia-healthcare',
    title: 'Essentia Technologies',
    client: 'Healthcare SaaS',
    category: 'saas-healthcare',
    role: 'UX / UI Specialist',
    period: '2026 - Presente',
    location: 'Palhoça, SC, Brasil',
    tagline: 'Healthcare SaaS & Redução de Carga Cognitiva',
    summary: 'Redesenhei fluxos críticos de prontuário e prescrição para eliminar ambiguidade operacional, aplicando neurociência e Atomic Design.',
    tags: ['Healthcare', 'Neurociência', 'DesignSystems', 'SaaS'],
    metrics: [
      { label: 'Redução de Fricção', value: '-42%' },
      { label: 'Erros de Preenchimento', value: 'Zero Críticos' },
      { label: 'Adoção Médica', value: '98%' }
    ],
    keyDeliverables: [
      'Mapeamento de rotinas médicas em ambiente clínico real',
      'Design System em Atomic Design padronizado para saúde',
      'Acessibilidade e usabilidade para prevenção de fadiga decisória'
    ],
    behavioralInsight: 'Médicos operam sob pressão e cansaço constantes. Simplificar a hierarquia visual e usar feedback de alta confirmação previne erros por desatenção.',
    challenge: 'A plataforma anterior apresentava excesso de densidade de informação em uma única tela, levando prescrevedores a hesitar ou cometer retrabalho na digitação de fórmulas e diagnósticos.',
    solution: 'Reestruturação modular em componentes atômicos com hierarquia em 3 níveis visuais, sistema de busca preditiva inteligente e validações em tempo real para campos de dosagem rigorosos.',
    featured: true
  },
  {
    id: 'multidrop-dach',
    title: 'MULTIDROP GMBH',
    client: 'Plataforma B2B, Mercado DACH',
    category: 'dach-ecommerce',
    role: 'Lead Product Designer',
    period: '2025 - 2026',
    location: 'Colônia, Alemanha (Remoto)',
    tagline: 'Plataforma B2B & Discovery para o Mercado Europeu',
    summary: 'Liderei o Product Discovery e UX/UI end-to-end de uma plataforma europeia de logística, com foco em clareza jurídica e velocidade de checkout.',
    tags: ['MercadoDACH', 'B2B', 'ProductDiscovery', 'ConversionUX'],
    metrics: [
      { label: 'Conversão Onboarding', value: '+35%' },
      { label: 'Retenção de Lojistas', value: '+28%' },
      { label: 'Países Atendidos', value: '3 Países' }
    ],
    keyDeliverables: [
      'Discovery qualitativo com usuários na Alemanha e Áustria',
      'Protótipos navegáveis e interativos de alta fidelidade',
      'Design System escalável para múltiplos touchpoints'
    ],
    behavioralInsight: 'Usuários da região DACH exigem transparência total sobre custos e prazos antes de qualquer decisão de alto valor.',
    challenge: 'O fluxo de integração de fornecedores e cálculo de frete transfronteiriço gerava altas taxas de abandono na etapa de checkout B2B.',
    solution: 'Redesenho da arquitetura de informação dividindo etapas complexas em micro-passos progressivos com prévia dinâmica de custos e garantias visuais em destaque.',
    featured: true
  },
  {
    id: 'easy-health',
    title: 'Easy Health',
    client: 'SaaS / HealthTech',
    category: 'saas-healthcare',
    role: 'Product Designer (UI/UX)',
    period: '2025 - 2026',
    location: 'Brasil',
    tagline: 'Integração Sistêmica e Automação de Workflows',
    summary: 'Redesenho da arquitetura de uma plataforma healthcare para eliminar falhas operacionais e automatizar o fluxo entre Agenda, Estoque e Financeiro.',
    tags: ['HealthTech', 'ComplexSystems', 'AtomicDesign', 'Workflows'],
    metrics: [
      { label: 'Redução Erros Manuais', value: '-90%' },
      { label: 'Integração de Setores', value: '100% Fluida' },
      { label: 'Tempo de Checkout', value: 'Drástico Drop' }
    ],
    keyDeliverables: [
      'Procedimento como Template Inteligente (Blueprint) com BOM e repasses',
      'Agendamento preditivo com validação e reserva de estoque em tempo real',
      'Agenda com Status Semânticos e Smart Scheduling de sessões fracionadas'
    ],
    behavioralInsight: 'Sistemas clínicos com módulos fragmentados geram alta carga cognitiva. Transformar o procedimento em blueprint autônomo elimina erros operacionais em cascata.',
    challenge: 'Módulos fragmentados sem comunicação entre Agenda, Estoque e Financeiro exigiam preenchimentos repetitivos, gerando erros manuais, inconsistência de insumos e gargalos fiscais.',
    solution: 'Redesenho da arquitetura criando um Fluxo de Dados Contínuo: o Procedimento virou um Template Inteligente (BOM + regras de comissão) com trava de estoque e baixa financeira automatizada.',
    featured: true
  },
  {
    id: 'funis-de-venda-checkout',
    title: 'Funis de Venda (Upsell & Downsell)',
    client: 'SaaS / Checkout',
    category: 'saas-checkout',
    role: 'UX Researcher & UI Designer',
    period: '2024 - 2025',
    location: 'Brasil',
    tagline: 'Funis de Venda: Maximizando LTV com UX Visual',
    summary: 'Transformamos a complexidade de árvores de decisão em um Editor de Fluxo Visual no Canvas Infinito, permitindo a infoprodutores aumentar LTV e ticket médio com One-Click Buy.',
    tags: ['SaaS', 'Checkout', 'UXResearch', 'FlowEditor', 'LTV'],
    metrics: [
      { label: 'Carga Cognitiva', value: 'Redução Drástica' },
      { label: 'Modelo Mental', value: 'Canvas & Nós' },
      { label: 'Conversão em Funil', value: 'One-Click Buy' }
    ],
    keyDeliverables: [
      'Editor de Flow com canvas infinito e ramificação visual (Caminhos de aceite e recusa)',
      'Cards de nó com micro-dashboards de métricas de conversão integradas',
      'Configuração contextual via Drawer lateral e integração no-code para páginas externas'
    ],
    behavioralInsight: 'Configurar condicionais em formulários lineares gera alta confusão mental. Mapear a jornada em um canvas visual com cores semânticas torna o fluxo totalmente intuitivo.',
    challenge: 'A lógica condicional de Upsell/Downsell em formulários tradicionais causava alta carga cognitiva e erros operacionais, além da necessidade de funcionar sem um Page Builder interno.',
    solution: 'Desenvolvimento de um editor de fluxo visual em estilo canvas com nós coloridos (sucesso/recusa), métricas em tempo real nos cards e integração transparente por links/snippets.',
    featured: true
  },
  {
    id: 'haky-club',
    title: 'Haky Club',
    client: 'Marca Própria, Vestuário Performance/Lifestyle',
    category: 'branding-lifestyle',
    role: 'Founder & Brand Director',
    period: '2025 - Presente',
    location: 'Florianópolis, SC, Brasil',
    tagline: 'Branding, E-commerce e Experiência de Marca',
    summary: 'Como fundador, lidero a direção criativa e estratégica da marca, unindo e-commerce, identidade visual e posicionamento de comunidade.',
    tags: ['Branding', 'E-commerce', 'DireçãoDeArte'],
    metrics: [
      { label: 'Consistência de Marca', value: '100%' },
      { label: 'Touchpoints Unificados', value: 'Total' },
      { label: 'Identidade Autoral', value: 'Lifestyle' }
    ],
    keyDeliverables: [
      'Estratégia de branding, linguagem visual e posicionamento',
      'Design da loja virtual e experiência de compra mobile-first',
      'Direção criativa de estampas, packaging e lançamentos'
    ],
    behavioralInsight: 'Marcas de lifestyle convertem pela pertença a uma comunidade, não só pelo produto.',
    challenge: 'Construir uma presença de marca do zero no mercado competitivo mantendo percepção de alta qualidade desde o primeiro ponto de contato.',
    solution: 'Desenvolvimento de uma linguagem minimalista e marcante com foco na jornada do cliente do anúncio social ao unboxing do produto.',
    featured: true
  },
  {
    id: 'partner-edtech-dach',
    title: 'Partner: Integrações B2B',
    client: 'SaaS / EdTech',
    category: 'dach-ecommerce',
    role: 'Product Designer',
    period: '2024 - 2025',
    location: 'Europa (DACH)',
    tagline: 'Partner: Escalando Educação Através de Integrações B2B',
    summary: 'Desenvolvimento do ecossistema "Partner Mode" para o mercado DACH, permitindo que plataformas externas comercializem cursos de forma nativa via API.',
    tags: ['SaaS', 'EdTech', 'MercadoDACH', 'PrimeVue', 'API', 'WhiteLabel'],
    metrics: [
      { label: 'Proposta Comercial', value: '5x Mais Alunos' },
      { label: 'Retenção Onboarding', value: 'Lock-in Flow' },
      { label: 'Arquitetura de Planos', value: '4 Tiers Scalable' }
    ],
    keyDeliverables: [
      'Estratégia comercial e precificação em 4 tiers vs Memberspot (5x mais alunos por €39/mês)',
      'Fluxo de Onboarding Lock-in (4 etapas sequenciais para retenção antes do dashboard)',
      'Central de Integrações com chaves de API, Webhooks em PrimeVue e Player White-Label embedado'
    ],
    behavioralInsight: 'Liberar a navegação antes de configurar o produto gera churn. O onboarding guiado em Lock-in garante qualificação do lead e atração técnica imediata.',
    challenge: 'Expandir a atuação no mercado europeu permitindo que plataformas externas vendessem e embedassem cursos nativamente sem múltiplos logins e superando concorrentes locais.',
    solution: 'Estratégia de preço agressiva, onboarding focado em conversão técnica (Lock-in) e interface em PrimeVue para geração de chaves API e Webhooks.',
    featured: true
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    company: 'Essentia Group',
    role: 'UX / UI Designer Specialist',
    period: 'Fevereiro 2026 - Presente',
    location: 'Palhoça, SC, Brasil',
    isCurrent: true,
    description: [
      'Desenvolvimento de soluções em Healthcare reduzindo fadiga cognitiva em sistemas complexos.',
      'Condução do ciclo completo: discovery, wireframes, protótipos e evolução do Design System atômico.'
    ],
    highlights: ['Foco em redução de erros clínicos e usabilidade de alta densidade.'],
    skills: ['Healthcare UX', 'Behavioral Design', 'Atomic Design', 'Figma']
  },
  {
    company: 'Haky Club',
    role: 'Founder & Diretor Criativo',
    period: 'Agosto 2025 - Presente',
    location: 'Florianópolis, SC, Brasil',
    isCurrent: true,
    description: [
      'Desenvolvimento estratégico e criativo da marca de vestuário lifestyle e e-commerce.',
      'Liderança de visão de marca, direção de coleções e experiência digital de ponta a ponta.'
    ],
    highlights: ['Branding e e-commerce integrados.'],
    skills: ['Branding', 'E-Commerce', 'Creative Direction']
  },
  {
    company: 'MULTIDROP GMBH',
    role: 'Lead Product Designer',
    period: 'Outubro 2025 - Fevereiro 2026',
    location: 'Colônia, Alemanha (Remoto)',
    isCurrent: false,
    description: [
      'Atuação end-to-end para o mercado europeu (Alemanha, Áustria, Suíça - DACH).',
      'Liderança de Product Discovery, pesquisas de conversão B2B e manutenção de Design System.'
    ],
    highlights: ['Ponte entre design e viabilidade técnica com times alemães.'],
    skills: ['Product Discovery', 'DACH Market', 'Design Systems']
  },
  {
    company: 'Grupo Nexxees',
    role: 'Designer Sênior',
    period: 'Fevereiro 2024 - Outubro 2025',
    location: 'Florianópolis, SC, Brasil',
    isCurrent: false,
    description: [
      'Evolução da maturidade de UX e reestruturação da Arquitetura da Informação de produtos financeiros.',
      'Implementação de processos de Design Ops integrados a times de Growth e Salesforce.'
    ],
    highlights: ['Data-driven design em funis corporativos.'],
    skills: ['Design Ops', 'FinTech UX', 'Data-Driven Design']
  },
  {
    company: 'Plataforma 3/4',
    role: 'UX / UI Designer',
    period: 'Março 2020 - Junho 2024',
    location: 'Palhoça, SC, Brasil',
    isCurrent: false,
    description: [
      'Tradução de requisitos de negócio em sites e web apps responsivos (WordPress/Webflow).',
      'Foco em Core Web Vitals e fidelidade total do protótipo ao código.'
    ],
    highlights: ['+30 projetos entregues com alta performance.'],
    skills: ['Webflow', 'WordPress', 'Core Web Vitals']
  },
  {
    company: 'American Burrs',
    role: 'Designer Pleno',
    period: 'Agosto 2023 - Fevereiro 2024',
    location: 'Brasil',
    isCurrent: false,
    description: [
      'Criação de peças visuais para e-commerce, campanhas impressas e PDV.',
      'Desenvolvimento de conteúdos digitais e união de UX com marketing de conversão.'
    ],
    highlights: ['Consistência de marca em e-commerce e ponto de venda.'],
    skills: ['Adobe Illustrator', 'Wireframes', 'UX / UI Design', 'E-commerce']
  },
  {
    company: 'Doppus',
    role: 'Web Designer',
    period: 'Março 2023 - Junho 2023',
    location: 'Palhoça, SC, Brasil',
    isCurrent: false,
    description: [
      'Desenvolvimento de landing pages, wireframes no Figma, e-mail marketing e sites responsivos.',
      'Pesquisas de UX (benchmarking, testes A/B, personas) e criação de identidades visuais.'
    ],
    highlights: ['Pesquisa de concorrência e prototipação de novos portais.'],
    skills: ['UX Research', 'Figma', 'HTML/CSS', 'UI Design', 'Hubspot']
  },
  {
    company: 'Ageon Electronic Controls',
    role: 'Designer Gráfico',
    period: 'Agosto 2022 - Março 2023',
    location: 'Palhoça, SC, Brasil',
    isCurrent: false,
    description: [
      'Desenvolvimento de layouts para websites, blogs e e-mail marketing.',
      'Criação de embalagens, folders, materiais impressos e gestão de fornecedores.'
    ],
    highlights: ['Produção gráfica e digital multiplataforma.'],
    skills: ['Adobe Illustrator', 'HTML', 'Web Layout', 'Design Gráfico']
  },
  {
    company: 'Concórdia (Grupo Fort)',
    role: 'Designer Gráfico / Marketing',
    period: 'Julho 2020 - Agosto 2022',
    location: 'Palhoça, SC, Brasil',
    isCurrent: false,
    description: [
      'Criação de layouts para e-commerce, fotografia e tratamento de produtos.',
      'Apoio em marketing de produto, cadastros de e-commerce e peças promocionais.'
    ],
    highlights: ['Gestão de e-commerce e identidade visual corporativa.'],
    skills: ['E-Commerce', 'Adobe Illustrator', 'HTML5', 'Fotografia']
  },
  {
    company: 'Mizeeski',
    role: 'Designer Gráfico Freelancer',
    period: 'Outubro 2016 - Janeiro 2020',
    location: 'Florianópolis, SC, Brasil',
    isCurrent: false,
    description: [
      'Atuação independente desenvolvendo identidades visuais, manuais de marca e materiais impressos.',
      'Criação de sites em WordPress, mídias sociais e projetos de design sob medida.'
    ],
    highlights: ['Início da trajetória em branding e web design.'],
    skills: ['Branding', 'WordPress', 'Design Gráfico', 'Web Design']
  }
];

export const ACADEMIC_DEGREES: AcademicDegree[] = [
  {
    institution: 'Estácio',
    degree: 'Pós-Graduação Lato Sensu',
    field: 'Neurociência e Comportamento Humano',
    period: 'Conclusão em 2026',
    status: 'in_progress',
    highlights: 'Investigação ativa sobre tomadas de decisão sob risco, neurobiometria aplicada à tecnologia e ergonomia cognitiva.'
  },
  {
    institution: 'Anhanguera Educacional',
    degree: 'Pós-Graduação Lato Sensu',
    field: 'Engenharia de Software',
    period: '2025 - 2026',
    status: 'in_progress',
    highlights: 'Aprofundamento na arquitetura de sistemas, padronização de código, viabilidade técnica de interfaces e integração front-end.'
  },
  {
    institution: 'PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul',
    degree: 'Pós-Graduação Lato Sensu',
    field: 'User Experience Design and Beyond',
    period: '2024 - 2025',
    status: 'concluded',
    highlights: 'Aprofundamento em metodologias avançadas de UX, Design Systems, estratégia de produto e liderança em design.'
  },
  {
    institution: 'EBAC - Escola Britânica de Artes Criativas e Tecnologia',
    degree: 'Especialização',
    field: 'Game Design e Desenvolvimento Unity',
    period: '2023 - 2024',
    status: 'concluded',
    highlights: 'Princípios de interatividade, gamificação de fluxos, mecânicas de engajamento e lógica de programação em C#.'
  },
  {
    institution: 'Universidade Unigranrio',
    degree: 'Bacharelado',
    field: 'Administração de Empresas',
    period: '2018 - 2022',
    status: 'concluded',
    highlights: 'Base sólida em visão de negócios, processos organizacionais, gestão financeira e alinhamento estratégico de produtos.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Masterclass: UX Writing para Produtos Financeiros',
    issuer: 'Clube do UX Writing',
    issueDate: 'Ago 2025'
  },
  {
    title: 'Javascript Course Certification',
    issuer: 'Estudonauta',
    issueDate: 'Jul 2024'
  },
  {
    title: 'Layout Certification Level 1 Webflow',
    issuer: 'Webflow',
    issueDate: 'Jun 2024'
  },
  {
    title: 'Lógica e Algoritmo',
    issuer: 'Curso em Vídeo',
    issueDate: 'Abr 2024'
  },
  {
    title: 'Webflow 101 Development Certificate',
    issuer: 'Webflow',
    issueDate: 'Abr 2024'
  },
  {
    title: 'UX Design Heuristics',
    issuer: 'Origamid',
    issueDate: 'Jan 2024'
  },
  {
    title: 'UI Design Avançado',
    issuer: 'Origamid',
    issueDate: 'Jan 2024'
  },
  {
    title: 'UI Design',
    issuer: 'Origamid',
    issueDate: 'Mai 2023'
  },
  {
    title: 'Flexbox in CSS',
    issuer: 'Origamid',
    issueDate: 'Abr 2023'
  },
  {
    title: 'Concept Art for Video Games',
    issuer: 'Michigan State University',
    issueDate: 'Fev 2023'
  },
  {
    title: 'Story and Narrative Development for Video Games',
    issuer: 'California Institute of the Arts',
    issueDate: 'Jan 2023'
  },
  {
    title: 'Introduction to Game Design',
    issuer: 'California Institute of the Arts',
    issueDate: 'Jan 2023'
  },
  {
    title: 'Introduction to C# Programming and Unity',
    issuer: 'University of Colorado',
    issueDate: 'Jan 2023'
  },
  {
    title: 'Pixel Art for Video Games',
    issuer: 'Michigan State University',
    issueDate: 'Jan 2023'
  },
  {
    title: 'Increase SEO Traffic with WordPress',
    issuer: 'Coursera',
    issueDate: 'Jan 2023'
  },
  {
    title: 'Build Wireframes and Low-Fidelity Prototypes',
    issuer: 'Google',
    issueDate: '2022'
  },
  {
    title: 'Start the UX Design Process: Empathize, Define, and Ideate',
    issuer: 'Google',
    issueDate: 'Jun 2022'
  },
  {
    title: 'Desenvolvimento HTML5 E CSS3',
    issuer: 'Curso em Vídeo',
    issueDate: 'Mar 2022'
  },
  {
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google',
    issueDate: 'Mai 2022'
  }
];
