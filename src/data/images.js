// Mapa de imagens estáticas presentes em src/data
// Importa cada arquivo para que o bundler (Vite) resolva suas URLs em build

const images = {
  'hetohoky.webp': new URL('./hetohoky.webp', import.meta.url).href,
  'ritxoko.webp': new URL('./ritxoko.webp', import.meta.url).href,
  'pintura-omarura.webp': new URL('./pintura-omarura.webp', import.meta.url).href,
  'rio-araguaia.jpg': new URL('./rio-araguaia.jpg', import.meta.url).href,
  'aldeia-karaja.jpg': new URL('./aldeia-karaja.jpg', import.meta.url).href,
  'cocar-plumario.jpg': new URL('./cocar-plumario.jpg', import.meta.url).href,
  'ceramica-karaja.jpg': new URL('./ceramica-karaja.jpg', import.meta.url).href,
  'mascara-aruana.jpeg': new URL('./mascara-aruana.jpeg', import.meta.url).href,
  'cestaria-karaja.webp': new URL('./cestaria-karaja.webp', import.meta.url).href,
  'pescaria.webp': new URL('./pescaria.webp', import.meta.url).href
}

export default images
