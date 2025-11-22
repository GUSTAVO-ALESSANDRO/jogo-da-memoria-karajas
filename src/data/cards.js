// ========================================================
// BANCO DE DADOS DAS CARTAS (cards.js)
// ========================================================
// Este arquivo contém toda a base de dados do jogo.
// Inclui informações sobre a cultura Karajá em formato de cartas.
// Cada carta tem:
// - id: identificador único
// - type: 'text' (descrição em texto) ou 'image' (imagem)
// - title: título da carta
// - description: descrição textual (para type='text') ou caminho da imagem (para type='image')

// Array com todas as cartas do jogo
const CARDS = [
  // ===== CARTAS DE TEXTO SOBRE RITUAIS E CULTURA =====
  // ID 1-12: Informações sobre rituais, mitos e organização social
  {
    "id": 1,
    "type": "text",
    "title": "Hetohoky - A Iniciação Masculina",
    "description": "O Hetohoky, também chamado de Casa Grande, é o principal ritual de iniciação dos meninos Karajá. Eles passam dias isolados, pintados com jenipapo, recebem novos nomes e entram simbolicamente na vida adulta."
  },
  {
    "id": 2,
    "type": "text",
    "title": "Pinturas Corporais Sagradas",
    "description": "As pinturas feitas com jenipapo, carvão e urucum representam categorias de idade, identidade e conexão espiritual. Os dois círculos nas faces são uma marca cultural importante."
  },
  {
    "id": 3,
    "type": "text",
    "title": "O Rio Araguaia como Eixo de Vida",
    "description": "O povo Karajá organiza suas aldeias, pesca, rituais e história em torno do rio Araguaia, considerado eixo mítico e territorial do grupo."
  },
  {
    "id": 4,
    "type": "text",
    "title": "A Ilha do Bananal",
    "description": "A Ilha do Bananal, maior ilha fluvial do mundo, é o coração do território Karajá, abrigando aldeias, espaços rituais, roças e cemitérios tradicionais."
  },
  {
    "id": 5,
    "type": "text",
    "title": "Bonecas Karajá - Riqueza Cultural",
    "description": "As bonecas de cerâmica (ritxòkò) são feitas pelas mulheres e representam mitos, animais, cotidiano e rituais. Tornaram-se importante fonte de renda e identidade cultural."
  },
  {
    "id": 6,
    "type": "text",
    "title": "Língua dos Iny",
    "description": "Os Karajá se autodenominam Iny, 'nós'. Sua língua pertence ao tronco Macro-Jê e apresenta variações de fala entre homens e mulheres."
  },
  {
    "id": 7,
    "type": "text",
    "title": "Papéis dos Homens",
    "description": "Aos homens cabem a defesa do território, pescarias, rituais, construção das casas e decisões políticas na Casa de Aruanã."
  },
  {
    "id": 8,
    "type": "text",
    "title": "Papéis das Mulheres",
    "description": "As mulheres educam as crianças, cuidam da roça, produzem cerâmica, cestaria, enfeites e realizam pinturas corporais para rituais e festas."
  },
  {
    "id": 9,
    "type": "text",
    "title": "Festa de Aruanã",
    "description": "Celebrada anualmente, a Festa de Aruanã envolve cantos, danças, máscaras e rituais que reúnem diferentes aldeias para fortalecer laços sociais e espirituais."
  },
  {
    "id": 10,
    "type": "text",
    "title": "Iniciação das Meninas",
    "description": "A primeira menstruação marca a reclusão e cuidado especial das meninas, conduzida pelas avós. Sua reaparição pública é celebrada com enfeites e danças."
  },
  {
    "id": 11,
    "type": "text",
    "title": "Mitologia do Povo do Fundo das Águas",
    "description": "Segundo o mito de origem, os Karajá vieram de uma aldeia no fundo do rio, guiados pelo jovem que encontrou a passagem para a superfície."
  },
  {
    "id": 12,
    "type": "text",
    "title": "Kynyxiwe - O Herói",
    "description": "Kynyxiwe viveu entre os Karajá, ensinou práticas de pesca, roça e ajudou a moldar aspectos da cultura. Ele liga o mundo humano ao mundo mítico."
  },
  
  // ===== CARTAS DE TEXTO SOBRE ARTESANATO E TRADIÇÕES =====
  // ID 13-30: Informações sobre artes, artesanato e tradições culturais
  {
    "id": 13,
    "type": "text",
    "title": "Artesanato em Madeira",
    "description": "Os Karajá criam remos, esculturas e peças rituais em madeira, preservando símbolos animais e elementos mitológicos."
  },
  {
    "id": 14,
    "type": "text",
    "title": "Enfeites Plumários",
    "description": "Adornos feitos com penas de araras e outras aves são utilizados em rituais de iniciação e em danças sagradas, sendo parte essencial da cosmologia Karajá."
  },
  {
    "id": 15,
    "type": "text",
    "title": "Cestaria Tradicional",
    "description": "Feita por homens e mulheres, a cestaria traz padrões inspirados em animais, trilhas, marcas e elementos da natureza."
  },
  {
    "id": 16,
    "type": "text",
    "title": "Mobilidade Sazonal",
    "description": "Durante a seca, famílias acampam nas praias e lagos do Araguaia para pescar; nas chuvas, retornam às aldeias nos barrancos mais altos."
  },
  {
    "id": 17,
    "type": "text",
    "title": "Rituais do Peixe e do Mel",
    "description": "Pescarias coletivas e festas ligados ao peixe e ao mel marcam o calendário ritual anual e integram diferentes famílias."
  },
  {
    "id": 18,
    "type": "text",
    "title": "Organização da Aldeia",
    "description": "As casas formam duas linhas paralelas, refletindo a simbologia de 'cima', 'meio' e 'baixo' presente também nos mitos e rituais."
  },
  {
    "id": 19,
    "type": "text",
    "title": "O Capitão da Aldeia",
    "description": "Com o contato, a figura do 'capitão' passou a representar a aldeia perante órgãos oficiais, como Funai, governos e ONGs."
  },
  {
    "id": 20,
    "type": "text",
    "title": "O Xamanismo Karajá",
    "description": "Homens mais velhos tornam-se referências espirituais, responsáveis por rezas, curas e comunicação com entidades míticas."
  },
  {
    "id": 21,
    "type": "text",
    "title": "Pintura Omarura",
    "description": "A tradicional pintura dos dois círculos no rosto, que antes era tatuada com jenipapo e carvão, hoje é desenhada durante rituais."
  },
  {
    "id": 22,
    "type": "text",
    "title": "Cerâmica como Herança",
    "description": "Ceramistas transmitem técnicas às meninas desde cedo, moldando figuras que contam histórias e reforçam a identidade cultural."
  },
  {
    "id": 23,
    "type": "text",
    "title": "Jogos e Brincadeiras",
    "description": "As crianças brincam com bonecas, miniaturas de remos, arcos e fazem dramatizações de rituais que aprenderão a participar um dia."
  },
  {
    "id": 24,
    "type": "text",
    "title": "Relação com a Natureza",
    "description": "O cerrado, o Araguaia e seus afluentes fornecem alimentos, ervas medicinais, tintas, fibras e elementos simbólicos para rituais."
  },
  {
    "id": 25,
    "type": "text",
    "title": "O Valor da Família Extensa",
    "description": "Casais recém-casados vivem próximos da família da esposa, seguindo tradição matrilocal, fortalecendo redes de cuidado."
  },
  {
    "id": 26,
    "type": "text",
    "title": "Hierarquia dos Homens",
    "description": "Homens se organizam por categorias de idade, cada uma com direitos, deveres e papéis específicos dentro da vida ritual."
  },
  {
    "id": 27,
    "type": "text",
    "title": "Agraicultura Karajá": "O cultivo de milho, mandioca, batata e banana faz parte da transmissão cultural entre gerações."
  },
  {
    "id": 28,
    "type": "text",
    "title": "Influência do Contato",
    "description": "Apesar de terem adotado elementos da sociedade nacional, os Karajá mantêm língua, rituais e forte identidade territorial."
  },
  {
    "id": 29,
    "type": "text",
    "title": "Arte Corporal como Memória",
    "description": "Pinturas e marcas corporais comunicam histórias, pertencimento e reforçam a memória coletiva da aldeia."
  },
  {
    "id": 30,
    "type": "text",
    "title": "Cosmologia dos Três Povos",
    "description": "A divisão simbólica dos Karajá em Povo de Cima, Povo do Meio e Povo de Baixo reflete a organização territorial e ritual do grupo."
  },
  
  // ===== CARTAS COM IMAGENS =====
  // ID 31-40: Cartas que contêm imagens em vez de textos
  // A propriedade 'description' contém o caminho da imagem
  {
    "id": 31,
    "type": "image",
    "title": "Hetohoky - Casa Grande",
    "description": "hetohoky.webp"
  },
  {
    "id": 32,
    "type": "image",
    "title": "Boneca Ritxoko/Karajá",
    "description": "ritxoko.webp"
  },
  {
    "id": 33,
    "type": "image",
    "title": "Pintura Facial Omarura",
    "description": "pintura-omarura.webp"
  },
  {
    "id": 34,
    "type": "image",
    "title": "Rio Araguaia",
    "description": "rio-araguaia.jpg"
  },
  {
    "id": 35,
    "type": "image",
    "title": "Aldeia Karajá",
    "description": "aldeia-karaja.jpg"
  },
  {
    "id": 36,
    "type": "image",
    "title": "Cocar Plumário",
    "description": "cocar-plumario.jpg"
  },
  {
    "id": 37,
    "type": "image",
    "title": "Cerâmica Karajá",
    "description": "ceramica-karaja.jpg"
  },
  {
    "id": 38,
    "type": "image",
    "title": "Máscara Aruanã",
    "description": "mascara-aruana.jpeg"
  },
  {
    "id": 39,
    "type": "image",
    "title": "Cestaria Tradicional",
    "description": "cestaria-karaja.webp"
  },
  {
    "id": 40,
    "type": "image",
    "title": "Pescaria Tradicional",
    "description": "pescaria.webp"
  }
]

// Exporta as cartas para serem utilizadas no resto da aplicação
export default CARDS