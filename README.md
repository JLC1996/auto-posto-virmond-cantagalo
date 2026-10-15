# Auto Posto Virmond + Restaurante Cantagalo

Landing page estática de conceito para reunir o posto e o restaurante em uma experiência premium na BR-277.

## Prévia local

```sh
python3 -m http.server 4173 --directory dist
```

Abra `http://localhost:4173`.

## Conteúdo e imagens

- `dist/index.html`: estrutura e texto.
- `dist/styles.css`: layout responsivo e animações.
- `dist/script.js`: revelação ao rolar, progresso e menu mobile.
- A primeira dobra usa uma foto estática real do posto, sem carros animados ou movimento de câmera.
- `dist/assets/posto-virmond-capa.webp` e `posto-virmond-capa-mobile.webp`: versões otimizadas da foto publicada pelo Auto Posto Virmond no Google Maps, recebida por link do cliente. A origem em resolução 4000 × 3000 está em `source-assets/auto-posto-virmond-google-maps-original.jpg`.
- `dist/assets/hero-road.webp` e `food-editorial.webp`: imagens editoriais geradas com a ferramenta imagegen integrada ao Codex. São ilustrativas, não representam o estabelecimento real.
- `dist/assets/conveniencia-real.webp`, `buffet-real.webp` e `buffet-detail-real.webp`: imagens públicas dos perfis de Instagram do cliente, obtidas pelo navegador do Codex.

As imagens geradas foram criadas com prompts de fotografia editorial de posto rodoviário ao entardecer e almoço caseiro brasileiro, sem marcas ou nomes. Substituir as imagens editoriais por ensaio fotográfico do local antes de uma publicação pública definitiva.

Os horários e telefones não foram incluídos porque aguardam confirmação. O botão de rota usa a busca do Google Maps pelo nome e endereço publicados pelo posto.
