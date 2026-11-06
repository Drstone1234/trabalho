// ============================================================
// LOCAIS DO MAPA DA SOLIDARIEDADE – PARAÍBA
// Para adicionar um local, copie um bloco e preencha os campos.
//
// categoria: "banco" | "cozinha" | "restaurante" | "instituicao" | "projeto"
// endereco:  preencha só se o endereço completo foi confirmado
// lat/lng:   posição inicial (aproximada quando não há endereço)
// geocode:   texto usado para refinar a posição pelo OpenStreetMap
// ============================================================

const LOCAIS = [
  // ---------- COZINHAS COMUNITÁRIAS DE JOÃO PESSOA (Prefeitura) ----------
  {
    nome: "Cozinha Comunitária do Timbó",
    categoria: "cozinha",
    cidade: "João Pessoa",
    bairro: "Bancários",
    endereco: null,
    lat: -7.145,
    lng: -34.842,
    geocode: "Timbó, Bancários, João Pessoa, PB",
    descricao:
      "Uma das seis cozinhas comunitárias municipais. Serve almoço e jantar gratuitos a famílias em vulnerabilidade cadastradas (programa Bora Comer).",
    comoAjudar:
      "Quem precisa: o cadastro é feito na própria cozinha, no CRAS ou no PSF do bairro, com visita social. Quem quer ajudar: procure a Secretaria de Desenvolvimento Social (Sedes) de João Pessoa.",
    fonte: {
      titulo: "Jornal da Paraíba (2023)",
      url: "https://jornaldaparaiba.com.br/comunidade/cozinhas-comunitarias-de-joao-pessoa-onde-ficam-e-quem-pode-usar",
    },
  },
  {
    nome: "Cozinha Comunitária do Jardim Veneza",
    categoria: "cozinha",
    cidade: "João Pessoa",
    bairro: "Jardim Veneza",
    endereco: null,
    lat: -7.195,
    lng: -34.86,
    geocode: "Jardim Veneza, João Pessoa, PB",
    descricao:
      "Cozinha comunitária municipal com refeições gratuitas para famílias cadastradas.",
    comoAjudar:
      "Cadastro na cozinha, no CRAS ou no PSF do bairro. Doações: consulte a Sedes de João Pessoa.",
    fonte: {
      titulo: "Jornal da Paraíba (2023)",
      url: "https://jornaldaparaiba.com.br/comunidade/cozinhas-comunitarias-de-joao-pessoa-onde-ficam-e-quem-pode-usar",
    },
  },
  {
    nome: "Cozinha Solidária do Gervásio Maia",
    categoria: "cozinha",
    cidade: "João Pessoa",
    bairro: "Gervásio Maia (Gramame)",
    endereco: null,
    lat: -7.205,
    lng: -34.89,
    geocode: "Gervásio Maia, João Pessoa, PB",
    descricao:
      "Cozinha da Associação de Cidadania e Inclusão Social, que transforma doações em refeições. Atende diretamente 167 famílias no bairro e a associação beneficia cerca de 800 famílias na Paraíba (dados de 2025).",
    comoAjudar:
      "Aceita doações de alimentos e trabalho voluntário. Confirme o contato com a associação antes de ir.",
    fonte: {
      titulo: "A União (2025)",
      url: "https://auniao.pb.gov.br/noticias/caderno_paraiba/voluntarios-ajudam-a-matar-a-fome",
    },
  },
  {
    nome: "Cozinha Comunitária da Bela Vista",
    categoria: "cozinha",
    cidade: "João Pessoa",
    bairro: "Bela Vista (Cristo)",
    endereco: null,
    lat: -7.138,
    lng: -34.88,
    geocode: "Bela Vista, Cristo Redentor, João Pessoa, PB",
    descricao:
      "Cozinha comunitária municipal com refeições gratuitas para famílias cadastradas.",
    comoAjudar:
      "Cadastro na cozinha, no CRAS ou no PSF do bairro.",
    fonte: {
      titulo: "Jornal da Paraíba (2023)",
      url: "https://jornaldaparaiba.com.br/comunidade/cozinhas-comunitarias-de-joao-pessoa-onde-ficam-e-quem-pode-usar",
    },
  },
  {
    nome: "Cozinha Comunitária da Taipa",
    categoria: "cozinha",
    cidade: "João Pessoa",
    bairro: "Taipa (Costa e Silva)",
    endereco: null,
    lat: -7.115,
    lng: -34.885,
    geocode: "Taipa, Costa e Silva, João Pessoa, PB",
    descricao:
      "Cozinha comunitária municipal com refeições gratuitas para famílias cadastradas.",
    comoAjudar:
      "Cadastro na cozinha, no CRAS ou no PSF do bairro.",
    fonte: {
      titulo: "Jornal da Paraíba (2023)",
      url: "https://jornaldaparaiba.com.br/comunidade/cozinhas-comunitarias-de-joao-pessoa-onde-ficam-e-quem-pode-usar",
    },
  },
  {
    nome: "Cozinha Comunitária de Novais",
    categoria: "cozinha",
    cidade: "João Pessoa",
    bairro: "Novais",
    endereco: null,
    lat: -7.17,
    lng: -34.86,
    geocode: "Novais, João Pessoa, PB",
    descricao:
      "Cozinha comunitária municipal com refeições gratuitas para famílias cadastradas.",
    comoAjudar:
      "Cadastro na cozinha, no CRAS ou no PSF do bairro.",
    fonte: {
      titulo: "Jornal da Paraíba (2023)",
      url: "https://jornaldaparaiba.com.br/comunidade/cozinhas-comunitarias-de-joao-pessoa-onde-ficam-e-quem-pode-usar",
    },
  },

  // ---------- COZINHAS SOLIDÁRIAS POPULARES (JOÃO PESSOA) ----------
  {
    nome: "Cozinha Comunitária Restaurando Vidas",
    categoria: "cozinha",
    cidade: "João Pessoa",
    bairro: "Mangabeira",
    endereco: null,
    lat: -7.17,
    lng: -34.83,
    geocode: "Mangabeira, João Pessoa, PB",
    descricao:
      "Cozinha ocupada por voluntários ligados à igreja e a movimentos populares, que a reabriram. Atendia mais de mil famílias de quatro comunidades (2023).",
    comoAjudar:
      "Depende de doações para manter as atividades. Entre em contato com a cozinha para saber o que está precisando.",
    fonte: {
      titulo: "Brasil de Fato (2023)",
      url: "https://brasildefato.com.br/2023/05/10/combate-a-fome-cozinhas-organizadas-por-movimentos-populares-estimulam-organizacao-comunitaria/",
    },
  },
  {
    nome: "Cozinha Popular Solidária Josué de Castro",
    categoria: "cozinha",
    cidade: "João Pessoa",
    bairro: "São Rafael (Castelo Branco)",
    endereco: null,
    lat: -7.139,
    lng: -34.845,
    geocode: "Comunidade São Rafael, Castelo Branco, João Pessoa, PB",
    descricao:
      "Inaugurada em out/2025 pelo Mãos Solidárias com o Instituto Voz Popular e a Associação de Moradores da comunidade São Rafael. Une alimentação, cultura e educação popular.",
    comoAjudar:
      "O Mãos Solidárias faz campanhas de arrecadação de alimentos e chave PIX. Acompanhe o perfil @maossolidariasparaiba.",
    fonte: {
      titulo: "Brasil de Fato (2025)",
      url: "https://www.brasildefato.com.br/2025/10/17/cozinha-popular-solidaria-josue-de-castro-e-inaugurada-em-joao-pessoa-no-bairro-sao-rafael/",
    },
  },
  {
    nome: "Cozinha Comunitária Solidária Marilene Dantas de Melo (Armazém do Campo)",
    categoria: "cozinha",
    cidade: "João Pessoa",
    bairro: "Castelo Branco",
    endereco: "Rua José Batista de Melo, 89 – Castelo Branco",
    lat: -7.1365,
    lng: -34.847,
    geocode: "Rua José Batista de Melo, 89, Castelo Branco, João Pessoa, PB",
    descricao:
      "Cozinha inaugurada em mar/2026 no Armazém do Campo (MST), em parceria com o governo da Paraíba e organizações sociais, para ampliar a segurança alimentar na capital.",
    comoAjudar:
      "Procure o Armazém do Campo para saber como doar alimentos ou voluntariar.",
    fonte: {
      titulo: "Brasil de Fato (2026)",
      url: "https://www.brasildefato.com.br/2026/03/13/armazem-do-campo-inaugura-cozinha-solidaria-para-ampliar-acoes-de-seguranca-alimentar-na-capital-paraibana/",
    },
  },

  // ---------- BANCOS DE ALIMENTOS ----------
  {
    nome: "Banco de Alimentos Sesc Mesa Brasil – João Pessoa",
    categoria: "banco",
    cidade: "João Pessoa",
    bairro: "Centro",
    endereco: null,
    lat: -7.118,
    lng: -34.883,
    geocode: "Sesc Centro, João Pessoa, PB",
    descricao:
      "Rede do Sesc que recebe alimentos de empresas, supermercados e produtores e os distribui a instituições sociais cadastradas. Atua em João Pessoa, Campina Grande e Patos.",
    comoAjudar:
      "Empresas e produtores podem ser doadores. Instituições sociais podem se cadastrar para receber. Procure o Sesc Paraíba para o contato atual.",
    fonte: {
      titulo: "Jornal da Paraíba",
      url: "https://jornaldaparaiba.com.br/_/113763",
    },
  },
  {
    nome: "Banco de Alimentos Sesc Mesa Brasil – Campina Grande",
    categoria: "banco",
    cidade: "Campina Grande",
    bairro: "Centro",
    endereco: null,
    lat: -7.223,
    lng: -35.88,
    geocode: "Sesc Campina Grande, PB",
    descricao:
      "Unidade do banco de alimentos do Sesc em Campina Grande, que distribui alimentos a instituições sociais cadastradas.",
    comoAjudar:
      "Empresas e produtores podem doar; instituições podem se cadastrar. Procure o Sesc Paraíba.",
    fonte: {
      titulo: "Jornal da Paraíba",
      url: "https://jornaldaparaiba.com.br/_/113763",
    },
  },
  {
    nome: "Banco de Alimentos Sesc Mesa Brasil – Patos",
    categoria: "banco",
    cidade: "Patos",
    bairro: "Centro",
    endereco: null,
    lat: -7.0247,
    lng: -37.28,
    geocode: "Sesc Patos, PB",
    descricao:
      "Unidade do banco de alimentos do Sesc em Patos, no sertão paraibano.",
    comoAjudar:
      "Empresas e produtores podem doar; instituições podem se cadastrar. Procure o Sesc Paraíba.",
    fonte: {
      titulo: "Jornal da Paraíba",
      url: "https://jornaldaparaiba.com.br/_/113763",
    },
  },

  // ---------- RESTAURANTES POPULARES ----------
  {
    nome: "Restaurante Popular de Campina Grande",
    categoria: "restaurante",
    cidade: "Campina Grande",
    bairro: "Centro",
    endereco: null,
    lat: -7.226,
    lng: -35.883,
    geocode: "Restaurante Popular, Campina Grande, PB",
    descricao:
      "Restaurante popular do Governo do Estado, com refeições para a população em situação de vulnerabilidade.",
    comoAjudar:
      "Confirme horários e valores com a Secretaria de Desenvolvimento Humano da Paraíba.",
    fonte: {
      titulo: "Câmara Municipal de Campina Grande",
      url: "https://www.camaracg.pb.gov.br/olimpio-cobra-a-descentralizacao-da-entrega-das-refeicoes-do-restaurante-popular-de-campina/",
    },
  },
  {
    nome: "Restaurante Popular de Tibiri",
    categoria: "restaurante",
    cidade: "Santa Rita",
    bairro: "Tibiri",
    endereco: null,
    lat: -7.15,
    lng: -34.97,
    geocode: "Tibiri, Santa Rita, PB",
    descricao:
      "Restaurante popular em Santa Rita, na Grande João Pessoa, que recebeu moção de aplausos da Assembleia Legislativa em 2022.",
    comoAjudar:
      "Confirme funcionamento e valores com a Secretaria de Desenvolvimento Humano da Paraíba.",
    fonte: {
      titulo: "Assembleia Legislativa da PB (2022)",
      url: "https://sapl3.al.pb.leg.br/media/sapl/public/materialegislativa/2022/94726/94726_texto_integral.pdf",
    },
  },

  // ---------- CAMPINA GRANDE: COZINHA SOLIDÁRIA ----------
  {
    nome: "Cozinha Solidária do Jeremias",
    categoria: "cozinha",
    cidade: "Campina Grande",
    bairro: "Jeremias",
    endereco: null,
    lat: -7.245,
    lng: -35.905,
    geocode: "Jeremias, Campina Grande, PB",
    descricao:
      "Cozinha comunitária reaberta em 2021 por movimentos sociais, sindicatos e moradores. Na reabertura servia cerca de 800 refeições por dia, com trabalho voluntário da comunidade.",
    comoAjudar:
      "Funciona com doações e voluntários. Procure o Comitê Sindical e Popular Contra a Fome para saber como ajudar.",
    fonte: {
      titulo: "Brasil de Fato (2021)",
      url: "https://www.brasildefato.com.br/2021/08/26/cozinha-comunitaria-e-reaberta-em-campina-grande-pb-e-distribui-800-refeicoes-por-dia",
    },
  },

  // ---------- INSTITUIÇÕES QUE RECEBEM DOAÇÕES ----------
  {
    nome: "ASPAN – Associação Promocional do Ancião",
    categoria: "instituicao",
    cidade: "João Pessoa",
    bairro: "—",
    endereco: null,
    lat: -7.112,
    lng: -34.87,
    geocode: "ASPAN Associação Promocional do Ancião, João Pessoa, PB",
    descricao:
      "Instituição de acolhimento de idosos que já foi beneficiada por campanhas de doação de alimentos não perecíveis.",
    comoAjudar:
      "Doação de alimentos não perecíveis. Ligue antes para combinar a entrega.",
    fonte: {
      titulo: "Jornal da Paraíba (2021)",
      url: "https://jornaldaparaiba.com.br/_/136467",
    },
  },
  {
    nome: "Rede Feminina de Combate ao Câncer (casa de apoio)",
    categoria: "instituicao",
    cidade: "João Pessoa",
    bairro: "Jaguaribe",
    endereco: null,
    lat: -7.126,
    lng: -34.87,
    geocode: "Rede Feminina de Combate ao Câncer, Jaguaribe, João Pessoa, PB",
    descricao:
      "Casa que abriga pacientes oncológicos, muitos vindos do interior (cerca de 40 na época da reportagem). Recebeu parte de alimentos arrecadados em campanha do governo.",
    comoAjudar:
      "Doações de alimentos. Ligue antes para combinar a entrega.",
    fonte: {
      titulo: "A União",
      url: "https://auniao.pb.gov.br/noticias/caderno_diversidade/governo-entrega-alimentos-arrecadados-no-show-de-paralamas-a-17-instituicoes",
    },
  },
  {
    nome: "Casa do Menino",
    categoria: "instituicao",
    cidade: "Campina Grande",
    bairro: "—",
    endereco: null,
    lat: -7.22,
    lng: -35.89,
    geocode: "Casa do Menino, Campina Grande, PB",
    descricao:
      "Instituição de Campina Grande que já recebeu doações de alimentos de ações solidárias.",
    comoAjudar:
      "Doação de alimentos. Ligue antes para combinar a entrega.",
    fonte: {
      titulo: "Jornal da Paraíba",
      url: "https://jornaldaparaiba.com.br/_/164685",
    },
  },

  // ---------- PROJETOS SOCIAIS E CAMPANHAS ----------
  {
    nome: "Natal Sem Fome / Ação da Cidadania PB",
    categoria: "projeto",
    cidade: "João Pessoa",
    bairro: "Centro (Lagoa)",
    endereco: null,
    lat: -7.12,
    lng: -34.879,
    geocode: "Parque Sólon de Lucena, João Pessoa, PB",
    descricao:
      "Campanha anual (nov–dez) que arrecada alimentos em pontos de coleta, como tendas na Lagoa e supermercados de João Pessoa e Campina Grande. Em 2022 foram mais de 173 toneladas para 17 mil famílias em mais de 35 municípios.",
    comoAjudar:
      "Contato da campanha: (83) 99849-1500. Os pontos de coleta mudam a cada ano.",
    fonte: {
      titulo: "Jornal da Paraíba (2023)",
      url: "https://jornaldaparaiba.com.br/_/169893",
    },
  },
  {
    nome: "Mãos Solidárias Paraíba",
    categoria: "projeto",
    cidade: "João Pessoa",
    bairro: "Grande João Pessoa",
    endereco: null,
    lat: -7.14,
    lng: -34.86,
    geocode: null,
    descricao:
      "Rede de organização popular que atua em bairros da Grande João Pessoa com ações de cidadania, alfabetização e cozinhas solidárias, como a Josué de Castro.",
    comoAjudar:
      "Campanhas de arrecadação de alimentos e PIX. Acompanhe @maossolidariasparaiba.",
    fonte: {
      titulo: "Brasil de Fato",
      url: "https://www.brasildefato.com.br/?p=607003",
    },
  },
];
