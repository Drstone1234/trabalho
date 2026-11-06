// ============================================================
// Mapa da Solidariedade – Paraíba
// Depende de: Leaflet (CDN) e static/locais.js (array LOCAIS)
// ============================================================

const CATEGORIAS = {
  cozinha: { nome: "Cozinhas solidárias", cor: "#c0392b", emoji: "🍲" },
  banco: { nome: "Bancos de alimentos", cor: "#e67e22", emoji: "📦" },
  restaurante: { nome: "Restaurantes populares", cor: "#2980b9", emoji: "🍽️" },
  instituicao: { nome: "Instituições que recebem", cor: "#8e44ad", emoji: "🏠" },
  projeto: { nome: "Projetos e campanhas", cor: "#27ae60", emoji: "🤝" },
};

// Caixa aproximada do estado da Paraíba (sul, oeste, norte, leste)
const PB_BBOX = { sul: -8.35, oeste: -38.8, norte: -6.0, leste: -34.7 };

// ---------- Mapa ----------
const map = L.map("mapa").setView([-7.15, -36.7], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; Contribuidores do OpenStreetMap",
}).addTo(map);

const userIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
let userMarker = null;
let userPos = null;

// ---------- Estado ----------
const ativas = new Set(Object.keys(CATEGORIAS));
const registros = []; // { local, marker, dist }

// ---------- Utilidades ----------
function esc(texto) {
  return String(texto ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function distanciaKm(a, b) {
  const R = 6371;
  const rad = (g) => (g * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

function formatarDist(km) {
  return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;
}

function linkRota(l) {
  const destino = l.endereco
    ? `${l.endereco}, ${l.cidade}, PB`
    : `${l.lat},${l.lng}`;
  return (
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(destino)
  );
}

// ---------- Marcadores ----------
function criarIcone(cat) {
  const c = CATEGORIAS[cat];
  return L.divIcon({
    className: "",
    html: `<div class="pin" style="--cor:${c.cor}"><span>${c.emoji}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -32],
  });
}

function htmlPopup(l) {
  const c = CATEGORIAS[l.categoria];
  const local = l.endereco
    ? esc(l.endereco)
    : `${esc(l.bairro)} – ${esc(l.cidade)}`;
  const aviso = l.endereco
    ? ""
    : `<p class="aprox">📌 Localização aproximada pelo bairro. Confirme o endereço antes de ir.</p>`;
  return `
    <div class="popup" style="--cor:${c.cor}">
      <h3>${esc(l.nome)}</h3>
      <span class="tag">${c.emoji} ${esc(c.nome)}</span>
      <p><b>Onde:</b> ${local}</p>
      ${aviso}
      <p>${esc(l.descricao)}</p>
      <p><b>Como participar:</b> ${esc(l.comoAjudar)}</p>
      <div class="acoes">
        <a href="${linkRota(l)}" target="_blank" rel="noopener">🧭 Como chegar</a>
        <a href="${esc(l.fonte.url)}" target="_blank" rel="noopener">📰 Fonte: ${esc(l.fonte.titulo)}</a>
      </div>
    </div>`;
}

function criarMarcadores() {
  LOCAIS.forEach((l) => {
    const marker = L.marker([l.lat, l.lng], { icon: criarIcone(l.categoria) })
      .bindPopup(htmlPopup(l), { maxWidth: 300 })
      .addTo(map);
    registros.push({ local: l, marker, dist: null });
  });
}

// ---------- Filtros e lista ----------
function criarFiltros() {
  const box = document.getElementById("filtros");
  Object.entries(CATEGORIAS).forEach(([chave, c]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip ativo";
    b.style.setProperty("--cor", c.cor);
    b.textContent = `${c.emoji} ${c.nome}`;
    b.onclick = () => {
      if (ativas.has(chave)) {
        ativas.delete(chave);
        b.classList.remove("ativo");
      } else {
        ativas.add(chave);
        b.classList.add("ativo");
      }
      atualizar();
    };
    box.appendChild(b);
  });
}

function atualizar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  const visiveis = registros.filter((r) => ativas.has(r.local.categoria));

  registros.forEach((r) => {
    const mostrar = ativas.has(r.local.categoria);
    if (mostrar && !map.hasLayer(r.marker)) r.marker.addTo(map);
    if (!mostrar && map.hasLayer(r.marker)) map.removeLayer(r.marker);
    r.dist = userPos ? distanciaKm(userPos, r.local) : null;
  });

  if (userPos) visiveis.sort((a, b) => a.dist - b.dist);

  document.getElementById("contagem").textContent =
    `${visiveis.length} local(is) exibido(s)` +
    (userPos ? " — ordenados do mais perto para o mais longe" : "");

  visiveis.forEach((r) => {
    const l = r.local;
    const c = CATEGORIAS[l.categoria];
    const li = document.createElement("li");
    li.className = "card";
    li.style.setProperty("--cor", c.cor);
    li.innerHTML = `
      <h3>${c.emoji} ${esc(l.nome)}</h3>
      <div class="meta">${esc(l.bairro)} · ${esc(l.cidade)}</div>
      ${r.dist !== null ? `<div class="dist">a ${formatarDist(r.dist)} de você</div>` : ""}`;
    li.onclick = () => {
      map.setView(r.marker.getLatLng(), 16);
      r.marker.openPopup();
    };
    lista.appendChild(li);
  });
}

function enquadrarTudo() {
  const pontos = registros.map((r) => [r.local.lat, r.local.lng]);
  if (pontos.length) map.fitBounds(pontos, { padding: [40, 40] });
}

// ---------- Localização do usuário ----------
function localizarUsuario() {
  if (!("geolocation" in navigator)) {
    alert("Geolocalização não suportada no seu navegador.");
    return;
  }
  const botao = document.getElementById("perto-btn");
  botao.textContent = "Localizando...";

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      botao.textContent = "📍 Mostrar o mais perto de mim";
      userPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };

      if (userMarker) {
        userMarker.setLatLng([userPos.lat, userPos.lng]);
      } else {
        userMarker = L.marker([userPos.lat, userPos.lng], { icon: userIcon })
          .addTo(map)
          .bindPopup("Você está aqui");
      }

      atualizar();

      // Enquadra o usuário e os 3 locais mais próximos
      const proximos = registros
        .filter((r) => ativas.has(r.local.categoria))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 3);
      const pontos = [[userPos.lat, userPos.lng]].concat(
        proximos.map((r) => [r.local.lat, r.local.lng])
      );
      map.fitBounds(pontos, { padding: [50, 50], maxZoom: 15 });
    },
    () => {
      botao.textContent = "📍 Mostrar o mais perto de mim";
      alert(
        "Não foi possível obter sua localização. Permita o acesso ou use a busca por bairro."
      );
    },
    { enableHighAccuracy: true, timeout: 15000 }
  );
}

// ---------- Busca por endereço (Nominatim, limitada à Paraíba) ----------
function buscarEndereco() {
  const consulta = document.getElementById("search").value.trim();
  if (!consulta) {
    alert("Digite uma cidade, bairro ou rua!");
    return;
  }

  const viewbox = `${PB_BBOX.oeste},${PB_BBOX.norte},${PB_BBOX.leste},${PB_BBOX.sul}`;
  const url =
    "https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br" +
    `&viewbox=${viewbox}&bounded=1&accept-language=pt-BR&q=` +
    encodeURIComponent(consulta);

  fetch(url)
    .then((r) => r.json())
    .then((dados) => {
      if (!dados.length) {
        alert("Local não encontrado na Paraíba. Tente incluir a cidade.");
        return;
      }
      userPos = { lat: parseFloat(dados[0].lat), lng: parseFloat(dados[0].lon) };

      if (window.buscaMarker) map.removeLayer(window.buscaMarker);
      window.buscaMarker = L.marker([userPos.lat, userPos.lng])
        .addTo(map)
        .bindPopup(`<b>${esc(dados[0].display_name)}</b>`)
        .openPopup();

      map.setView([userPos.lat, userPos.lng], 14);
      atualizar(); // reordena a lista a partir do ponto buscado
    })
    .catch((erro) => {
      console.error("Erro na busca:", erro);
      alert("Erro ao buscar localização.");
    });
}

// ---------- Refina as posições com o OpenStreetMap ----------
// Roda em segundo plano, 1 consulta por segundo (limite do Nominatim),
// e guarda o resultado no navegador para não repetir.
function refinarPosicoes() {
  const fila = registros.filter((r) => r.local.geocode);
  const viewbox = `${PB_BBOX.oeste},${PB_BBOX.norte},${PB_BBOX.leste},${PB_BBOX.sul}`;

  function aplicar(r, lat, lng) {
    r.local.lat = lat;
    r.local.lng = lng;
    r.marker.setLatLng([lat, lng]);
  }

  function proximo() {
    const r = fila.shift();
    if (!r) {
      atualizar();
      return;
    }
    const chave = "geo2:" + r.local.geocode;
    let guardado = null;
    try {
      guardado = JSON.parse(localStorage.getItem(chave));
    } catch (e) {}

    if (guardado) {
      aplicar(r, guardado.lat, guardado.lng);
      proximo();
      return;
    }

    const url =
      "https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br" +
      `&viewbox=${viewbox}&bounded=1&q=` +
      encodeURIComponent(r.local.geocode);

    fetch(url)
      .then((resp) => resp.json())
      .then((dados) => {
        if (dados.length) {
          const lat = parseFloat(dados[0].lat);
          const lng = parseFloat(dados[0].lon);
          aplicar(r, lat, lng);
          try {
            localStorage.setItem(chave, JSON.stringify({ lat, lng }));
          } catch (e) {}
        }
      })
      .catch(() => {})
      .finally(() => setTimeout(proximo, 1100));
  }

  proximo();
}

// ---------- Início ----------
document.getElementById("search-btn").onclick = buscarEndereco;
document.getElementById("search").addEventListener("keydown", (e) => {
  if (e.key === "Enter") buscarEndereco();
});
document.getElementById("perto-btn").onclick = localizarUsuario;

criarMarcadores();
criarFiltros();
atualizar();
enquadrarTudo();
refinarPosicoes();
