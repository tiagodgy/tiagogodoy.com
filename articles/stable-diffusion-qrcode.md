---
title: Stable Diffusion - Explorando a Criação de QR Codes com IA
description: Os QR codes estão dominando o mundo do Stable Diffusion e hoje vamos mostrar como você pode aproveitar essa tendência com um simples workflow.
image: /static/img/posts/qrcode-sd.jpg
date: "2023-07-29"
---

Os QR codes estão dominando o mundo do Stable Diffusion e hoje vou mostrar como você pode aproveitar essa tendência com um simples workflow.

Se você ainda não está familiarizado com o Stable Diffusion e o ControlNet UI, é importante lembrar que você precisa instalá-los em sua máquina. Não se preocupe, pois tenho tutoriais detalhados para ajudá-lo nessa etapa:

[Stable Diffusion - Desvendando o Poder da Inteligência Artificial na Criação de Imagens](https://www.tiagogodoy.com/stable-diffusion-desvendando)

[ControlNet - Uma Revolução na Geração de Imagens por IA com Controle de Condições](https://www.tiagogodoy.com/controlnet-revolucao-imagens)

<figure>
  <img src="/static/img/posts/qrcode-sd.jpg" alt="God gerado com AI">
</figure>

Agora que você já tem as ferramentas essenciais instaladas, vamos explorar como os QR codes podem elevar suas criações no mundo da Inteligência Artificial.

## Passo 1. Crie um QR Code

Para começar a aproveitar todas as vantagens do QR Code no Stable Diffusion, siga o primeiro passo: criar o seu próprio QR Code personalizado. Para facilitar esse processo e garantir uma leitura suave nos dispositivos móveis, recomendamos o uso do site a seguir:

[Gerador de QR Code](https://keremerkan.net/qr-code-and-2d-code-generator/)

<figure>
  <img src="/static/img/posts/ezboard_qr_code_generate.png" alt="Qr Code gerado com AI">
</figure>

## Passo 2. Baixar e instalar os modelos para ControlNet

Para geração do QR Code precisaremos de 3 modelos para ControleNet UI

[tile.pth](https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main)

[depth.pth](https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main)

[brigthness.pth ](https://huggingface.co/ioclab/ioc-controlnet/tree/main/models)

Após baixar os modelos, basta copia-los para pasta models localizada em webui > extensions > sd-webui-controlnet > models

## Passo 3: Gere seu Primeiro QR Code com Stable Diffusion

Criar imagens com o Stable Diffusion e adicionar QR Codes únicos requer uma abordagem personalizada para cada prompt. Cada imagem demanda ajustes específicos até alcançar os resultados desejados. Mas não se preocupe! Estamos aqui para orientá-lo e fornecer um ponto de partida com algumas configurações recomendadas que podem gerar QR Codes incríveis.

Preencha os prompts positivos e negativos com as palavras-chave desejadas, escolha o Sampling Method DPM++ 2M Karras e defina o Sampling Steps para 15. O restante das opções pode não precisar ser alterado.

<figure>
  <img src="/static/img/posts/ezboard_qr_code_stable1.png" alt="Qr Code gerado com AI">
</figure>

### Configurando o ControlNet
Agora é hora de configurar o ControlNet. Abra a guia do ControlNet no canto inferior da interface e utilize as três guias do ControlNet com as seguintes sugestões:

### ControlNet Unit 0
- Selecione a opção “Enable”
- Defina o Control Weight para 0.55
- Defina o Starting Control Step para 0.45
- Defina o Ending Control Step para 0.8
- Selecione o Model “Tile”

<figure>
  <img src="/static/img/posts/ezboard_qr_code_stable2.png" alt="Qr Code gerado com AI">
</figure>

### ControlNet Unit 1

- Selecione a opção “Enable”
- Defina o Control Weight para 0.35
- Defina o Starting Control Step para 0
- Defina o Ending Control Step para 1
- Selecione o Model “Brightness”

<figure>
  <img src="/static/img/posts/ezboard_qr_code_stable3.png" alt="Qr Code gerado com AI">
</figure>

### ControlNet Unit 2

- Selecione a opção “Enable”
- Defina o Control Weight para 1
- Defina o Starting Control Step para 0
- Defina o Ending Control Step para 0.2
- Selecione o Model “Depth”

<figure>
  <img src="/static/img/posts/ezboard_qr_code_stable4.png" alt="Qr Code gerado com AI">
</figure>

Agora, clique em “Generate” e ajuste os valores até obter um resultado que lhe agrade.

<figure>
  <img src="/static/img/posts/soldado-sd.jpg" alt="Soldado gerado com AI">
</figure>

<figure>
  <img src="/static/img/posts/prometeus-sd.jpg" alt="Prometeus gerado com AI">
</figure>

<figure>
  <img src="/static/img/posts/greek-sd.jpg" alt="Greek gerado com AI">
</figure>

Com esses passos, você está pronto para criar QR Codes impressionantes e totalmente personalizados para suas criações. Divirta-se explorando todo o potencial criativo que o Stable Diffusion e o ControlNet UI têm a oferecer!

