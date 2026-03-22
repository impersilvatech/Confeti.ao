// CONFETI — catalogo.js v2.0 — Gerado em: 22/03/2026, 16:45:23
// IMPERSILVA TECH
// Imagens em: pasta imgs/ do repositório

const LOJA_DEFAULT = {
  "nome": "Emílio Doces 🍰🎂🍬",
  "tagline": "Doces para cada momento especial",
  "slogan": "Criamos sabores que ficam na memória. Do casamento à festa de natal, cada detalhe conta.",
  "whatsapp": "244954288128",
  "logo": "",
  "morada": "Huambo, Angola",
  "instagram": "",
  "badge": "🎊 Confeitaria Artesanal · Luanda",
  "heroTitulo": "Doces que fazem\na festa!",
  "fraseDia": "🎉 Encomendas para o Natal já abertas — garanta a sua mesa de doces!",
  "bannerDestaque": "🎄 Encomendas para o Natal já abertas — garanta a sua mesa de doces!",
  "bannerActivo": true,
  "anos": "5",
  "clientesSatisfeitos": "500+",
  "eventosRealizados": "200+",
  "catsBadge": "🍰 O que fazemos",
  "catsTitulo": "Tudo para o\nseu evento",
  "catsSub": "Cada produto feito com amor, qualidade e atenção ao detalhe",
  "ctaEmoji": "🎊",
  "ctaTitulo": "Tem um evento\na caminho?",
  "ctaSub": "Não deixe para a última hora!\nFaça já a sua encomenda e garanta o melhor para o seu evento.",
  "ctaBotao": "Fazer Encomenda Agora →",
  "entregaActiva": true,
  "levantamentoActivo": true,
  "pedidoPersActivo": true,
  "pedidoPersTexto": "✨ Encomenda Especial",
  "corPrincipal": "#ff00ff",
  "corGrad1": "#ff6b9d",
  "corGrad2": "#b14ae8",
  "corFundo": "#0d0d1a",
  "facebook": "",
  "tiktok": "",
  "secStatsActiva": true,
  "secComoFuncionaActiva": true,
  "secFeaturesActiva": true,
  "secEventosActiva": true,
  "secDepoimentosActiva": true,
  "secCtaActiva": true,
  "campoDataActivo": true,
  "campoLocalActivo": true
};
const DEPOIMENTOS_DEFAULT = [
  {
    "id": 1,
    "stars": 5,
    "texto": "O bolo do casamento foi simplesmente perfeito! Cada detalhe foi feito com cuidado e o sabor... incrível. Toda a gente perguntou de onde era o bolo!",
    "nome": "Ana Cristina",
    "evento": "Casamento — Junho 2024",
    "avatar": "👰"
  },
  {
    "id": 2,
    "stars": 5,
    "texto": "Encomendei o Kit Natal Familiar e ficou maravilhoso. Os salgados acabaram em minutos na festa! Vou encomendar de novo este ano com certeza.",
    "nome": "Carlos Mendes",
    "evento": "Kit Natal — Dezembro 2023",
    "avatar": "🎄"
  },
  {
    "id": 3,
    "stars": 5,
    "texto": "A mesa de doces do baptizado do meu filho ficou linda! As pessoas ainda hoje falam. Muito obrigada pela dedicação e atenção aos detalhes.",
    "nome": "Joana Fernandes",
    "evento": "Baptizado — Março 2024",
    "avatar": "👶"
  }
];
const FEATURES_DEFAULT = [
  {
    "id": 1,
    "emoji": "🎂",
    "titulo": "Artesanal",
    "descricao": "Cada produto feito à mão com ingredientes seleccionados"
  },
  {
    "id": 2,
    "emoji": "⏱️",
    "titulo": "Pontual",
    "descricao": "Entrega no dia e hora combinados, sem surpresas"
  },
  {
    "id": 3,
    "emoji": "✨",
    "titulo": "Personalizado",
    "descricao": "Cada encomenda adaptada ao seu tema e estilo"
  },
  {
    "id": 4,
    "emoji": "💬",
    "titulo": "Atendimento",
    "descricao": "Suporte directo via WhatsApp antes e após a entrega"
  }
];
const EVENTOS_DEFAULT = [
  {
    "id": 1,
    "emoji": "💒",
    "nome": "Casamentos",
    "sub": "Bolos & mesas luxo",
    "cat": "bolos"
  },
  {
    "id": 2,
    "emoji": "🎂",
    "nome": "Aniversários",
    "sub": "Temas personalizados",
    "cat": "bolos"
  },
  {
    "id": 3,
    "emoji": "🎄",
    "nome": "Natal",
    "sub": "Kits & bolos temáticos",
    "cat": "kits"
  },
  {
    "id": 4,
    "emoji": "🎆",
    "nome": "Ano Novo",
    "sub": "Celebração completa",
    "cat": "kits"
  },
  {
    "id": 5,
    "emoji": "👶",
    "nome": "Baptizados",
    "sub": "Delicado & especial",
    "cat": "bolos"
  },
  {
    "id": 6,
    "emoji": "🎓",
    "nome": "Formaturas",
    "sub": "Conquistas a festejar",
    "cat": ""
  },
  {
    "id": 7,
    "emoji": "💼",
    "nome": "Corporativos",
    "sub": "Eventos de empresa",
    "cat": ""
  },
  {
    "id": 8,
    "emoji": "🎠",
    "nome": "Festas Infantis",
    "sub": "Magia & diversão",
    "cat": "kits"
  }
];
const CATEGORIAS_DEFAULT = [
  {
    "id": "bolos",
    "label": "Bolos",
    "emoji": "🎂",
    "cor": "#ff6b9d"
  },
  {
    "id": "salgados",
    "label": "Salgados",
    "emoji": "🥟",
    "cor": "#ffd166"
  },
  {
    "id": "kits",
    "label": "Kits de Eventos",
    "emoji": "🎁",
    "cor": "#06d6a0"
  },
  {
    "id": "mesas",
    "label": "Mesas de Doces",
    "emoji": "✨",
    "cor": "#b14ae8"
  },
  {
    "id": "especial",
    "label": "Encomenda Especial",
    "emoji": "💌",
    "cor": "#ff9f43"
  }
];
const PRODUTOS_DEFAULT = [
  {
    "id": 101,
    "nome": "Bolo de Casamento Clássico",
    "preco": 45000,
    "preco_orig": 0,
    "categoria": "bolos",
    "etiqueta": "destaque",
    "emoji": "💍",
    "imagem": "imagens/bolo-de-casamento-classico-stuy.webp",
    "descricao": "Bolo de casamento em andares com cobertura de fondant personalizada. Decoração floral à escolha.",
    "disponivel": true,
    "specs": {
      "Andares": "2 a 5 (a combinar)",
      "Sabores": "Baunilha / Chocolate / Red Velvet / Limão",
      "Cobertura": "Fondant ou Chantilly",
      "Prazo mínimo": "15 dias",
      "Porções": "A partir de 50 pessoas"
    },
    "destaques": [
      "Personalização total",
      "Entrega no local"
    ]
  },
  {
    "id": 102,
    "nome": "Bolo Temático Festa",
    "preco": 18000,
    "preco_orig": 22000,
    "categoria": "bolos",
    "etiqueta": "promo",
    "emoji": "🎂",
    "imagem": "imagens/bolo-tematico-festa-pcp1.webp",
    "descricao": "Bolo temático personalizado para festas de aniversário, baptizados ou qualquer celebração.",
    "disponivel": true,
    "specs": {
      "Tamanhos": "20, 25 ou 30 cm",
      "Sabores": "Chocolate / Baunilha / Morango / Coco",
      "Cobertura": "Chantilly ou Fondant",
      "Prazo mínimo": "5 dias",
      "Porções": "15 a 40 pessoas"
    },
    "destaques": [
      "Tema personalizado",
      "Fotos para referência aceites"
    ]
  },
  {
    "id": 103,
    "nome": "Bolo de Baptizado",
    "preco": 22000,
    "preco_orig": 0,
    "categoria": "bolos",
    "etiqueta": "novo",
    "emoji": "👶",
    "imagem": "imagens/bolo-de-baptizado-zm67.webp",
    "descricao": "Bolo delicado para baptizados, com decoração em tons suaves. Laços, flores e detalhes em fondant.",
    "disponivel": true,
    "specs": {
      "Tamanhos": "20 ou 25 cm",
      "Sabores": "Baunilha / Leite de Coco / Morango",
      "Cobertura": "Chantilly suave ou Fondant",
      "Prazo mínimo": "7 dias",
      "Porções": "20 a 30 pessoas"
    },
    "destaques": [
      "Paleta de cores personalizável",
      "Entrega incluída em Luanda"
    ]
  },
  {
    "id": 104,
    "nome": "Bolo Naked Cake",
    "preco": 15000,
    "preco_orig": 18000,
    "categoria": "bolos",
    "etiqueta": "promo",
    "emoji": "🍰",
    "imagem": "imagens/bolo-naked-cake-ecb8.webp",
    "descricao": "Estilo rústico e elegante. Camadas visíveis com recheio generoso, decorado com flores naturais.",
    "disponivel": true,
    "specs": {
      "Tamanhos": "20 ou 25 cm",
      "Sabores": "Red Velvet / Chocolate Belga / Cenoura com Nata",
      "Decoração": "Flores naturais / Frutas frescas",
      "Prazo mínimo": "4 dias",
      "Porções": "15 a 25 pessoas"
    },
    "destaques": [
      "Estilo minimalista moderno",
      "Flores naturais incluídas"
    ]
  },
  {
    "id": 105,
    "nome": "Bolo de Natal Especial",
    "preco": 20000,
    "preco_orig": 0,
    "categoria": "bolos",
    "etiqueta": "novo",
    "emoji": "🎄",
    "imagem": "imagens/bolo-de-natal-especial-e2r3.webp",
    "descricao": "Bolo temático de Natal com decoração em vermelho, verde e dourado. Perfeito para a ceia.",
    "disponivel": true,
    "specs": {
      "Tamanhos": "25 ou 30 cm",
      "Sabores": "Chocolate com Nozes / Panetone / Baunilha",
      "Cobertura": "Fondant temático natalício",
      "Prazo mínimo": "5 dias",
      "Porções": "20 a 35 pessoas"
    },
    "destaques": [
      "Edição limitada de Natal",
      "Decoração personalizada"
    ]
  },
  {
    "id": 201,
    "nome": "Coxinhas (50 unidades)",
    "preco": 8500,
    "preco_orig": 10000,
    "categoria": "salgados",
    "etiqueta": "promo",
    "emoji": "🍗",
    "imagem": "imagens/coxinhas-50-unidades-v95b.webp",
    "descricao": "Coxinhas de frango crocantes por fora, recheadas com frango desfiado temperado e requeijão.",
    "disponivel": true,
    "specs": {
      "Quantidade": "50 unidades",
      "Recheio": "Frango com requeijão",
      "Tamanho": "Médio (40g cada)",
      "Prazo mínimo": "2 dias"
    },
    "destaques": [
      "Massa crocante",
      "Recheio generoso",
      "Entrega quentes disponível"
    ]
  },
  {
    "id": 202,
    "nome": "Rissóis (50 unidades)",
    "preco": 8000,
    "preco_orig": 0,
    "categoria": "salgados",
    "etiqueta": "",
    "emoji": "🥟",
    "imagem": "imagens/rissois-50-unidades-9vh4.webp",
    "descricao": "Rissóis clássicos recheados com camarão ou carne. Massa macia, fritos na hora.",
    "disponivel": true,
    "specs": {
      "Quantidade": "50 unidades",
      "Recheio": "Camarão ou Carne (à escolha)",
      "Tamanho": "Médio (35g cada)",
      "Prazo mínimo": "2 dias"
    },
    "destaques": [
      "Receita tradicional",
      "Recheio à escolha"
    ]
  },
  {
    "id": 204,
    "nome": "Mix de Salgados (100 un.)",
    "preco": 18000,
    "preco_orig": 24000,
    "categoria": "salgados",
    "etiqueta": "promo",
    "emoji": "🎊",
    "imagem": "imagens/mix-de-salgados-100-un-993a.webp",
    "descricao": "Combinação perfeita: 35 coxinhas + 35 rissóis + 30 pastéis. Ideal para festas.",
    "disponivel": true,
    "specs": {
      "Quantidade": "100 unidades",
      "Composição": "35 Coxinhas + 35 Rissóis + 30 Pastéis",
      "Prazo mínimo": "3 dias",
      "Servir": "Para 20 a 30 pessoas"
    },
    "destaques": [
      "Variedade garantida",
      "Melhor custo-benefício"
    ]
  },
  {
    "id": 205,
    "nome": "Mini Salgados Finos (80 un.)",
    "preco": 16000,
    "preco_orig": 0,
    "categoria": "salgados",
    "etiqueta": "novo",
    "emoji": "✨",
    "imagem": "imagens/mini-salgados-finos-80-un-no6c.webp",
    "descricao": "Salgados em formato mini para mesas de finger food. Apresentação elegante, ideais para eventos formais.",
    "disponivel": true,
    "specs": {
      "Quantidade": "80 unidades",
      "Variedades": "Mini coxinhas + Bruschettas + Wraps",
      "Prazo mínimo": "3 dias",
      "Apresentação": "Bandeja decorada incluída"
    },
    "destaques": [
      "Apresentação elegante",
      "Bandeja decorada incluída"
    ]
  },
  {
    "id": 301,
    "nome": "Kit Natal Familiar",
    "preco": 35000,
    "preco_orig": 42000,
    "categoria": "kits",
    "etiqueta": "promo",
    "emoji": "🎄",
    "imagem": "imagens/kit-natal-familiar-44nn.webp",
    "descricao": "Kit completo para a ceia de Natal: bolo temático + 50 salgados + mesa de doces para 10 pessoas.",
    "disponivel": true,
    "specs": {
      "Inclui": "Bolo Natal + 50 Salgados + Mesa Doces",
      "Para": "8 a 12 pessoas",
      "Prazo mínimo": "7 dias"
    },
    "destaques": [
      "Tudo incluído",
      "Decoração natalícia",
      "Poupança de 7.000 Kz"
    ]
  },
  {
    "id": 302,
    "nome": "Kit Ano Novo Celebração",
    "preco": 38000,
    "preco_orig": 46000,
    "categoria": "kits",
    "etiqueta": "promo",
    "emoji": "🎆",
    "imagem": "imagens/kit-ano-novo-celebracao-2fni.webp",
    "descricao": "Bolo de passagem de ano + 60 salgados + doces finos + decoração dourada.",
    "disponivel": true,
    "specs": {
      "Inclui": "Bolo + 60 Salgados + Doces Finos",
      "Para": "10 a 15 pessoas",
      "Decoração": "Dourado & Champagne",
      "Prazo mínimo": "7 dias"
    },
    "destaques": [
      "Decoração premium",
      "Confettis e balões incluídos"
    ]
  },
  {
    "id": 303,
    "nome": "Kit Festa Infantil",
    "preco": 28000,
    "preco_orig": 34000,
    "categoria": "kits",
    "etiqueta": "promo",
    "emoji": "🎠",
    "imagem": "imagens/kit-festa-infantil-um9v.webp",
    "descricao": "Bolo temático + 40 salgados + mesa de doces colorida. Tema à escolha.",
    "disponivel": true,
    "specs": {
      "Inclui": "Bolo Temático + 40 Salgados + Mesa Doces",
      "Para": "15 a 25 crianças",
      "Tema": "À escolha",
      "Prazo mínimo": "7 dias"
    },
    "destaques": [
      "Tema totalmente personalizável",
      "Lembranças incluídas"
    ]
  },
  {
    "id": 304,
    "nome": "Kit Casamento Completo",
    "preco": 120000,
    "preco_orig": 150000,
    "categoria": "kits",
    "etiqueta": "destaque",
    "emoji": "💒",
    "imagem": "imagens/kit-casamento-completo-kypo.webp",
    "descricao": "Pacote completo: bolo de casamento + 200 salgados + mesa de doces + candy bar. Consultoria incluída.",
    "disponivel": true,
    "specs": {
      "Inclui": "Bolo + 200 Salgados + Mesa + Candy Bar",
      "Para": "50 a 100 convidados",
      "Consultoria": "Reunião prévia incluída",
      "Prazo mínimo": "30 dias"
    },
    "destaques": [
      "Consultoria personalizada",
      "Montagem no local",
      "Tudo coordenado"
    ]
  },
  {
    "id": 401,
    "nome": "Mesa de Doces Simples",
    "preco": 25000,
    "preco_orig": 0,
    "categoria": "mesas",
    "etiqueta": "",
    "emoji": "🍬",
    "imagem": "imagens/mesa-de-doces-simples-pysu.webp",
    "descricao": "Mesa de doces elegante para eventos até 30 convidados. Inclui brigadeiros, trufas e mini bolos.",
    "disponivel": true,
    "specs": {
      "Doces": "8 tipos de doces finos",
      "Convidados": "Até 30 pessoas",
      "Decoração": "Básica incluída",
      "Prazo mínimo": "5 dias"
    },
    "destaques": [
      "Montagem incluída",
      "8 tipos de doces"
    ]
  },
  {
    "id": 501,
    "nome": "Encomenda Especial Personalizada",
    "preco": 0,
    "preco_orig": 0,
    "categoria": "especial",
    "etiqueta": "especial",
    "emoji": "💌",
    "imagem": "imagens/encomenda-especial-personalizada-uote.webp",
    "descricao": "Tem uma ideia especial? Criamos qualquer produto personalizado para o seu evento — do conceito à execução.",
    "disponivel": true,
    "specs": {
      "Eventos": "Casamentos, Festas, Corporativos, Baptizados, Formaturas",
      "Como funciona": "Descreva → Orçamento → Confirmação → Entrega",
      "Consultoria": "Gratuita"
    },
    "destaques": [
      "Qualquer ideia é possível",
      "Consultoria gratuita",
      "Orçamento sem compromisso"
    ]
  }
];

function getLoja(){try{return Object.assign({},LOJA_DEFAULT,JSON.parse(localStorage.getItem('cf_loja')||'{}'));}catch(_){return LOJA_DEFAULT;}}
function getProdutos(){try{return JSON.parse(localStorage.getItem('cf_produtos'))||PRODUTOS_DEFAULT;}catch(_){return PRODUTOS_DEFAULT;}}
function getCategorias(){try{const s=localStorage.getItem('cf_categorias');return s?JSON.parse(s):CATEGORIAS_DEFAULT;}catch(_){return CATEGORIAS_DEFAULT;}}
function getDepoimentos(){try{const s=localStorage.getItem('cf_depoimentos');return s?JSON.parse(s):DEPOIMENTOS_DEFAULT;}catch(_){return DEPOIMENTOS_DEFAULT;}}
function getFeatures(){try{const s=localStorage.getItem('cf_features');return s?JSON.parse(s):FEATURES_DEFAULT;}catch(_){return FEATURES_DEFAULT;}}
function getEventos(){try{const s=localStorage.getItem('cf_eventos');return s?JSON.parse(s):EVENTOS_DEFAULT;}catch(_){return EVENTOS_DEFAULT;}}
function getCarrinho(){try{return JSON.parse(localStorage.getItem('cf_carrinho'))||[];}catch(_){return[];}}
function getWishlist(){try{return JSON.parse(localStorage.getItem('cf_wishlist'))||[];}catch(_){return[];}}
function salvarCarrinho(c){localStorage.setItem('cf_carrinho',JSON.stringify(c));}
function salvarWishlist(w){localStorage.setItem('cf_wishlist',JSON.stringify(w));}
function toggleWishlist(id){const w=getWishlist();const i=w.indexOf(id);if(i>-1)w.splice(i,1);else w.push(id);salvarWishlist(w);return w.includes(id);}
function isWishlisted(id){return getWishlist().includes(id);}
function kz(n){return n>0?n.toLocaleString('pt-AO')+' Kz':'Orçamento';}
function getTheme(){return localStorage.getItem('cf_theme')||'dark';}
function setTheme(t){localStorage.setItem('cf_theme',t);document.documentElement.setAttribute('data-theme',t);}
function toggleTheme(){setTheme(getTheme()==='dark'?'light':'dark');_syncThemeIcons();}
function initTheme(){document.documentElement.setAttribute('data-theme',getTheme());}
function _syncThemeIcons(){document.querySelectorAll('[data-theme-ico]').forEach(el=>{el.textContent=getTheme()==='dark'?'☀️':'🌙';});}
function applyThemeColors(){const l=getLoja(),r=document.documentElement.style;if(l.corPrincipal)r.setProperty('--pink',l.corPrincipal);if(l.corGrad1&&l.corGrad2)r.setProperty('--grad','linear-gradient(135deg,'+l.corGrad1+','+l.corGrad2+')');if(l.corFundo)r.setProperty('--bg',l.corFundo);}
function cfHash(s){let h=5381;for(let i=0;i<s.length;i++){h=((h<<5)+h)^s.charCodeAt(i);h|=0;}return(h>>>0).toString(16);}
function getAdminHash(){const local=localStorage.getItem('cf_admin_hash');if(local)return local;if(typeof _ADMIN_PIN_HASH!=='undefined'&&_ADMIN_PIN_HASH&&_ADMIN_PIN_HASH!=='cf_default')return _ADMIN_PIN_HASH;return cfHash('1793');}
function checkPin(pin){return cfHash(String(pin))===getAdminHash();}
function savePin(pin){localStorage.setItem('cf_admin_hash',cfHash(String(pin)));}
