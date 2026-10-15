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
- A primeira dobra combina movimento lento de câmera com dois carros atravessando a cena em camadas. A animação pausa para quem usa a preferência de movimento reduzido.
- `dist/assets/hero-road.webp`, `food-editorial.webp` e `moving-suv.webp`: imagens de ambientação geradas com a ferramenta imagegen integrada ao Codex. São ilustrativas, não representam o estabelecimento real.
- `dist/assets/conveniencia-real.webp`, `buffet-real.webp` e `buffet-detail-real.webp`: imagens públicas dos perfis de Instagram do cliente, obtidas pelo navegador do Codex.

As imagens geradas foram criadas com prompts de fotografia editorial de posto rodoviário ao entardecer, almoço caseiro brasileiro e recorte transparente de SUV para a animação, sem marcas ou nomes. Substituir por ensaio fotográfico do local antes de uma publicação pública definitiva.

Os horários e telefones não foram incluídos porque aguardam confirmação. O botão de rota usa a busca do Google Maps pelo nome e endereço publicados pelo posto.
