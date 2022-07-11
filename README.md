
<p align="center"> <img src="https://imgur.com/BASzVop.png" alt="HTML e CSS: praticando HTML e CSS"> </p>

<hr>

<p align="center"> <img src="https://github.com/MonicaHillman/aluraplus/blob/aula04/img/Logo.png?raw=true" alt="Logo da alura plus"> </p>
<p align="center">Um site para divulgação da Alura Plus, uma plataforma de streaming com os conteúdos educacionais da Alura.</p>

Status do Projeto: Concluído.
Objetivo: Colocar em prática conteúdos aprendidos sobre HTML5 e CSS3:
* Variáveis CSS
* Inserindo imagens
* Definindo Botão ou âncora
* Grid
* FlexBox
* Inline-Block
* Posicionamento de Elementos: Margin, Paddings, Alinhamentos
* Pseudo-Classes


## Tecnologias
* HTML
* CSS

## Screenshots
![image](https://user-images.githubusercontent.com/105179112/178277952-7d30e8d7-b843-45f3-b580-1043e7af86c2.png)
![image](https://user-images.githubusercontent.com/105179112/178278051-076e7910-022e-4e97-a6bf-5149cf0e4d7d.png)
![image](https://user-images.githubusercontent.com/105179112/178278095-df7c8d67-d677-4bdc-a551-cc3bb16d8c62.png)




# Guia de estilos

Toda a estilização que será usada no projeto dentro do figma.

[Link do projeto no figma](https://www.figma.com/file/ibWktwVpnog76rMYOdVhks/Dispondo-elementos-com-flexbox-e-grid?node-id=54%3A2358)

## Fonte

```html
Open Sans:
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap">
```

## Cores

corpo: `#1D232A`

cabeçalho: `#1D232A`

cabeçalho mobile: `#15191C`

menu lateral: `#15191C`

cartão: `#2C343A`

fonte: `#FFFFFF`

fonte alternativa: `#95999C`

links: `#0480DC`

botão: `#0480DC`

sombras: `0px 4px 4px rgba(0, 0, 0, 0.16)`

## Ícones

Estão dentro do arquivo de fonte `icones.ttf`. Para usar, primeiro importe a fonte no projeto usando `@font-face` e depois utilize os códigos abaixo para exibir o ícone.

```css
@font-face {
    font-family: 'icones';
    src: url(../font/icones.ttf);
}
```

> Cuidado com a localização do arquivo `icones.ttf`

Camisas = `\e900`

Carrinho = `\e901`

Inicio = `\e902`

Integrantes = `\e903`

Menu = `\e904`

Moeda = `\e905`

Notificação = `\e906`

Pico = `\e908`

Picos = `\e909`

Pinturas = `\e90a`

Play = `\e90b`

Relogio = `\e90c`

Seta-baixo = `\e90d`

Videos = `\e90e`

Visualizacao = `\e90f`

## Espaçamentos

Espaço interno botão: `8px`

Espaço entre elementos do botão: `8px`

Espaço entre elementos: `16px/8px`

Espaçamento interno do corpo: `16px`

Espaçamento entre o título do cartão de recentes e seus itens: `24px`

## Tamanhos

Tamanho do dispositivo mobile: `360px`

Tamanho do dispositivo desktop: `1440px`

Largura máxima do conteúdo principal: `1120px`

Largura máxima de um cartão desktop: `256px`

Altura mínima de um cartão: `320px`
