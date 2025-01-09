export type Post = {
  id: string;
  title: string;
  description: string;
  photoCover: string;
};

export const dataFake: Post[] = [
  {
    "id":"1",
    "title": "Flatpak 1.16: Novidades e Melhorias na Distribuição de Apps",
    "description": "A versão Flatpak 1.16 trouxe melhorias como suporte a mais distribuições Linux, segurança aprimorada com sandboxing, melhor desempenho de aplicativos e integração com novas ferramentas de desenvolvimento, visando uma experiência mais robusta e acessível para usuários e desenvolvedores no Linux.",
    "photoCover":"https://www.edivaldobrito.com.br/wp-content/uploads/2025/01/flatpak-linux.webp"
  },
  {
    "id":"2",
    "title": "KDE Plasma 6.3: Novidades e Recursos na Versão Beta",
    "description": "KDE Plasma 6.3 oferece melhorias significativas como uma interface aprimorada, desempenho otimizado, novos recursos de personalização, melhorias na acessibilidade e melhor integração com aplicativos, proporcionando uma experiência de usuário mais fluida e intuitiva para um ambiente de desktop moderno.",
    "photoCover":"https://www.edivaldobrito.com.br/wp-content/uploads/2025/01/kde-plasma-63-novidades-e-recursos-na-versao-beta.webp"
  },
  {
    "id":"3",
    "title": "Como instalar o bonito tema OS X Mavericks no Linux",
    "description": "Se você gostava do visual do OS X 10.9 e quer experimentá-lo no sistema do pinguim, veja como instalar o bonito tema OS X Mavericks no Linux. O OS X Mavericks (versão 10.9) foi a décima versão do OS X, da Apple, um sistema operacional para desktop e servidor para computadores Macintosh.",
    "photoCover":"https://www.edivaldobrito.com.br/wp-content/uploads/2018/03/tema-os-x-mavericks-no-linux.jpg"
  }
]
