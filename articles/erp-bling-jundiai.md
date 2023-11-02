---
title: Como Resolvi a Falha de Emissão de Nota Fiscal de Serviço com Bling e Prefeitura Jundiaí
description: Recentemente a prefeitura de Jundiaí-SP alterou o seu sistema de emissão de nota fiscal. Nesse artigo detalho como encontrei a solução para conseguir emitir notas novamente. 
image: /static/img/posts/giss-online.jpg
date: "2023-11-02"
---

**Atenção:** Sempre realize alterações fiscais no ERP acompanhado de seu contador. O objetivo deste artigo não é apresentar dicas contábeis, mas sim abordar a parte técnica que eu executei para integrar o Bling com a prefeitura de Jundiaí a fim de emitir NFS-e.

## Mudança do Ginfes para o Giss

Em junho de 2023, a prefeitura de Jundiaí substituiu o sistema Ginfes pelo Giss. Desde essa alteração, não tem sido mais possível emitir notas fiscais de serviço através do Bling, o que levou muitos clientes a optar por emitir as notas diretamente pelo portal da prefeitura. Abri dois tickets no Bling buscando assistência para corrigir essa questão ou obter orientações para um cadastro correto. No entanto, em ambas as ocasiões, o problema não foi resolvido.

## Resolvendo com as próprias mãos

Diante da falta de uma resposta satisfatória da equipe de suporte do Bling, decidi buscar uma solução por conta própria.

O primeiro passo foi localizar um XML emitido pelo Bling no sistema antigo e compará-lo com um emitido no sistema novo através do portal da prefeitura. Removi a maioria dos campos do XML para ocultar os dados, mantendo apenas as tags relevantes para o problema. Aqui estão os exemplos:

```xml
    <!-- XML emitido pelo Bling no sistema ANTIGO -->
    <ns3:ItemListaServico>1401</ns3:ItemListaServico>
    <ns3:CodigoTributacaoMunicipio>14.01.01 / 465</ns3:CodigoTributacaoMunicipio>
```

<br/>

```xml
    <!-- XML obtido no portal NOVO da prefeitura -->
    <ns2:ItemListaServico>14.01.01</ns2:ItemListaServico>
    <ns2:CodigoTributacaoMunicipio>465</ns2:CodigoTributacaoMunicipio>
    
    <ns2:TomadorServico>
        <ns2:InscricaoMunicipal>00000</ns2:InscricaoMunicipal>
    </ns2:TomadorServico>
```
<br/>

Os campos relevantes para nossa análise são os mesmos que são preenchidos no Bling no menu **Todas as configurações > Serviços > Configurações de NFS-e**

<figure>
  <img src="/static/img/posts/erp-bling-jundiai-prin2.png" alt="Erp Bling">
</figure>

Como pode ser observado, os dados preenchidos nesta tela do Bling coincidem com os dados exportados para o XML. 

**"Padrão Código de serviço"** é exportado para a Tag **"ItemListaServico"**

**"Código de Tributação"** é exportado para a Tag **"CodigoTributacaoMunicipio"** 

Agora, ao analisar o XML emitido pelo novo portal da prefeitura, fica evidente que o formato dos dados exportados foi modificado. Portanto, o primeiro passo para a correção é cadastrar o novo formato no Bling.

No novo XML, extraímos o valor do campo "ItemListaServico" (no exemplo, "14.01.01") e preenchemos no campo "Código de Serviço". Em seguida, obtemos o valor do campo "CodigoTributacaoMunicipio" (no nosso exemplo, "465") e preenchemos no campo "Código de Tributação" do Bling.

O resultado pode ser visto abaixo:

<figure>
  <img src="/static/img/posts/erp-bling-jundiai-prin1.png" alt="Erp Bling">
</figure>

Após efetuar essas alterações, esperava-se que a emissão da nota fiscal fosse bem-sucedida. No entanto, isso só ocorreu no caso de tomadores de serviços pessoas físicas. Para pessoas jurídicas, a emissão continuou falhando devido a um detalhe que passou despercebido nos meses seguintes à alteração da prefeitura:

**No sistema antigo o XML era exportado sem a Inscrição Municipal do tomador.**

No sistema novo, o envio da Inscrição Municipal do tomador do serviço tornou-se obrigatório, sendo um campo OPCIONAL no Bling. Na empresa utilizada para os testes, esses campos nunca haviam sido preenchidos, portanto todas as notas continuavam a ser recusadas.  

O problema foi resolvido adicionando a Inscrição Municipal ao cadastro de todos os clientes, acessando **Cadastros > Clientes e Fornecedores**

Após essa atualização, a emissão de notas de serviço pelo ERP foi retomada. No entanto, o download dessas notas é realizado exclusivamente através do portal da prefeitura, pois requer uma correção da integração pela equipe do Bling para permitir que o download ocorra novamente pelo ERP.
