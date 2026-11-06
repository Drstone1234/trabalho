# Mapa da Solidariedade – Paraíba

Mapa online com cozinhas solidárias, bancos de alimentos, restaurantes populares,
instituições e projetos sociais da Paraíba. Ao clicar em um local aparecem
descrição, como participar, rota e a fonte da informação.

## Como rodar no CodeSandbox

1. Crie um Devbox **Python** (ou importe esta pasta).
2. No terminal: `pip install -r requirements.txt`
3. Rode: `python main.py` (porta 5000) e abra o preview.

## Estrutura

- `main.py` – servidor Flask
- `templates/index.html` – página
- `static/style.css` – estilos
- `static/locais.js` – **lista dos locais (edite aqui)**
- `static/script.js` – lógica do mapa

## Como adicionar um local

Copie um bloco em `static/locais.js` e preencha. Se souber o endereço completo,
preencha `endereco` e use `geocode` com ele; o mapa ajusta o pin pelo OpenStreetMap.

## QR Code

Depois de publicar, gere um QR Code com o link do projeto (ex.: qr-code-generator.com)
para imprimir no evento.

## Aviso

Os dados vêm de reportagens e fontes públicas (pesquisa em out/2026). Locais sem
endereço confirmado aparecem com pin aproximado pelo bairro. Confirme por telefone
ou redes sociais antes de ir.
