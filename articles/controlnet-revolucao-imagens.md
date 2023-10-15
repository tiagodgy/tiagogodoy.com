---
title: ControlNet - Uma Revolução na Geração de Imagens por IA com Controle de Condições
description: ControlNet é uma estrutura de rede neural projetada para controlar modelos de difusão, adicionando condições extras, representando um divisor de águas para a geração de imagens por IA. Ele traz níveis incomparáveis de controle para o Stable Diffusion.
image: /static/img/posts/astronauta-sd.jpg
date: "2023-07-23"
---

ControlNet é uma estrutura de rede neural projetada para controlar modelos de difusão, adicionando condições extras, representando um divisor de águas para a geração de imagens por IA. Ele traz níveis incomparáveis de controle para o Stable Diffusion.

O que torna o ControlNet revolucionário é a sua solução para o problema da consistência espacial. Enquanto anteriormente não havia uma maneira eficiente de dizer a um modelo de IA quais partes de uma imagem de entrada manter, o ControlNet muda isso ao introduzir um método que permite aos modelos Stable Diffusion utilizar condições adicionais de entrada para indicar exatamente o que fazer.

Através do ControlNet, é possível ditar ao modelo de IA quais características desejamos enfatizar ou quais elementos queremos alterar nas imagens geradas. Isso significa que agora podemos obter resultados mais precisos e controlados, personalizando ainda mais a geração de imagens de acordo com nossas necessidades e preferências.

A instalação do ControlNet em sua Stable Diffusion WebUI é simples e rápida. Com apenas alguns passos, você estará pronto para aproveitar todo o potencial dessa inovação:

## Instruções de Instalação do ControlNet no Stable Diffusion UI

Antes de seguir esse tutorial é necessário que você já possua o Stable Diffusion instalado de acordo com esse tutorial: 
[Stable Diffusion: Desvendando o Poder da Inteligência Artificial na Criação de Imagens](https://ezboard.tech/?p=94)

Caso já tenha sido instalado basta seguir os passos abaixo.
 
- Abra a guia “Extensions” na WebUI.
- Acesse a guia “Install from URL”.
- Insira o seguinte URL para o repositório Git da extensão ControlNet: https://github.com/Mikubill/sd-webui-controlnet.git
- Clique no botão “Install”.
- Aguarde alguns segundos até ver a mensagem “Installed into stable-diffusion-webui\extensions\sd-webui-controlnet. Use Installed tab to restart”.
- Vá para a guia “Installed”, clique em “Check for updates”, e depois em “Apply and restart UI” (Você também pode usar esses botões para atualizar o ControlNet posteriormente).

<figure>
  <img src="/static/img/posts/controlnet_stable_diffusion_1.png" alt="Tutorial ControlNet">
</figure>

<figure>
  <img src="/static/img/posts/controlnet_stable_diffusion_2.png" alt="Tutorial ControlNet">
</figure>

Uma vez instalado, o ControlNet permitirá que você acesse todo o potencial de controle sobre os modelos de difusão, tornando a experiência de geração de imagens por IA mais empolgante e precisa.

Além disso, a versatilidade do ControlNet é aprimorada com a disponibilidade de modelos de teste beta do ControleNet 1.1. Você pode baixá-los a partir do seguinte link: [ControlNet 1.1](https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main) Models (Não é necessário baixar todos os modelos, apenas aqueles que você deseja utilizar, para outros tutorias do ezboard.tech vamos utilizar o modelo brightness que pode ser encontrado [aqui](https://huggingface.co/ioclab/ioc-controlnet/tree/main/models)).

Garanta que você faça o download dos arquivos de modelo com a extensão “.pth” e coloque-os na pasta “stable-diffusion-webui\extensions\sd-webui-controlnet\models” para que estejam prontos para uso.

<figure>
  <img src="/static/img/posts/controlnet_stable_diffusion_3.png" alt="Tutorial ControlNet">
</figure>

<figure>
  <img src="/static/img/posts/controlnet_stable_diffusion_4.png" alt="Tutorial ControlNet">
</figure>

Com o ControlNet e seus modelos, você estará no comando da geração de imagens por IA como nunca antes. Explore suas possibilidades e compartilhe suas criações conosco!

ControlNet está transformando a geração de imagens e proporcionando uma experiência incrível de controle para todos os entusiastas de IA e artistas digitais. Dê asas à sua criatividade e veja a magia acontecer!