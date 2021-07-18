export const carousel = [
    {
        image: "img/banners/banner-tomadas.png",
        active: false,
        alt: "Tomadas"
    },
    {
        image: "img/banners/banner-mangueira.png",
        active: false,
        alt: "Mangueiras"
    },
    {
        image: "img/banners/banner-iluminacao.png",
        active: true,
        alt: "Iluminação",
        link: 'iluminacao'
    },
    {
        image: "img/banners/banner-cabos.png",
        active: false,
        alt: "Fios e Cabos",
        link: 'cabos-e-fios'
    },
    {
        image: "img/banners/banner-whatsapp.png",
        active: false,
        alt: "Whatsapp",
        target: true,
        link: "https://api.whatsapp.com/send/?phone=5562995010927&text&app_absent=0"
    },
    {
        image: "/img/gallery/ferramentas/banner-ferramentas.png",
        active: false,
        alt: "Ferramentas",
        target: false,
        link: "acessorios-e-ferramentas"
    }
]

export const benefits = [
    {
        icon: "img/icon-1.png",
        alt: "Delevery",
        title: "Delevery",
        description: "Entregamos o seu pedido em sua residência"
    },
    {
        icon: "img/icon-2.png",
        alt: "Orçamento",
        title: "Orçamento",
        description: "Enviamos rapidamente o seu orçamento"
    },
    {
        icon: "img/icon-3.png",
        alt: "Pagamento",
        title: "Pagamento",
        description: "Aceitamos várias formas de pagamento"
    }
]

export const categories = [
    {
        id: "1",
        slug: "iluminacao",
        categoryName: "Iluminação",
        icon: "/img/svg/icons/iluminacao-decorativa.svg",
        brands: [
            {
                linkLogo: "img/logos/siemens.png",
                altLogo: "siemens"
            },
            {
                linkLogo: "img/logos/intelbras.png",
                altLogo: "Intelbras"
            },
            {
                linkLogo: "img/logos/steck.png",
                altLogo: "Steck"
            },
            {
                linkLogo: "img/logos/osram.png",
                altLogo: "Osram"
            },
            {
                linkLogo: "img/logos/stella.png",
                altLogo: "Stella"
            },
            {
                linkLogo: "img/logos/tigre.png",
                altLogo: "Tigre"
            }
        ],
        banner: "img/banners/banner-iluminacao.png",
        photos: [
            {
                image:  "/img/gallery/decoracao-1.png",
                alt: "teste",
                width: 620,
                height: 400
            },
            {   
                image:  "/img/gallery/comercial-1.png",
                alt: "teste",
                width: 620,
                height: 400
            },
            {
                image:  "/img/gallery/comercial-2.png",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:  "/img/gallery/decorativa-3.png",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:  "/img/gallery/decorativa-4.png",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:  "/img/gallery/decorativa-2.png",
                alt: "teste",
                width: 620,
                height: 400
            },
            {
                image:  "/img/gallery/comercial-3.png",
                alt: "teste",
                width: 305,
                height: 400
            },
            {
                image:  "/img/gallery/comercial-4.png",
                alt: "teste",
                width: 305,
                height: 400
            }
        ]
    },
    {
        id: "2",
        slug: "cabos-e-fios",
        categoryName: "Cabos e fios",
        icon: "/img/svg/icons/fios.svg",
        brands: [
            {
                linkLogo: "img/logos/siemens.png",
                altLogo: "siemens"
            },
            {
                linkLogo: "img/logos/intelbras.png",
                altLogo: "Intelbras"
            },
            {
                linkLogo: "img/logos/steck.png",
                altLogo: "Steck"
            },
            {
                linkLogo: "img/logos/osram.png",
                altLogo: "Osram"
            },
            {
                linkLogo: "img/logos/stella.png",
                altLogo: "Stella"
            },
            {
                linkLogo: "img/logos/tigre.png",
                altLogo: "Tigre"
            }
        ],
        banner: "/img/gallery/cabos-e-fios/banner-fios-1.png",
        photos: [
            {
                image:  "/img/gallery/cabos-e-fios/cabos-1.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {   
                image:  "/img/gallery/cabos-e-fios/cabos-2.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {
                image:  "/img/gallery/cabos-e-fios/cabos-3.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:  "/img/gallery/cabos-e-fios/fios-2.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:  "/img/gallery/cabos-e-fios/fios-3.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:  "/img/gallery/cabos-e-fios/fios-4.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {
                image:  "/img/gallery/cabos-e-fios/fios-5.jpg",
                alt: "teste",
                width: 305,
                height: 400
            },
            {
                image:  "/img/gallery/cabos-e-fios/fios-6.jpg",
                alt: "teste",
                width: 305,
                height: 400
            }
        ]
    },
    {
        id: "3",
        slug: "acessorios-e-ferramentas",
        categoryName: "Acessórios e Ferramentas",
        icon: "/img/svg/icons/ferramentas.svg",
        brands: [
            {
                linkLogo: "img/logos/makita.png",
                altLogo: "Makita"
            },
            {
                linkLogo: "img/logos/bosh.png",
                altLogo: "Bosh"
            },
            {
                linkLogo: "img/logos/black.png",
                altLogo: "Black & Decker"
            },
            {
                linkLogo: "img/logos/dealt.png",
                altLogo: "DeWalt"
            },
            {
                linkLogo: "img/logos/starret.png",
                altLogo: "Starret"
            }
        ],
        banner: "/img/gallery/ferramentas/banner-ferramentas.png",
        photos: [
            {
                image:  "/img/gallery/ferramentas/ferramenta-1.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {   
                image: "/img/gallery/ferramentas/ferramenta-2.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {
                image:  "/img/gallery/ferramentas/ferramenta-3.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:  "/img/gallery/ferramentas/ferramenta-4.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image: "/img/gallery/ferramentas/furadeira.png",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:  "/img/gallery/ferramentas/furadeira-2.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {
                image:  "/img/gallery/ferramentas/maquita-1.jpg",
                alt: "teste",
                width: 305,
                height: 400
            },
            {
                image:  "/img/gallery/cabos-e-fios/fios-6.jpg",
                alt: "teste",
                width: 305,
                height: 400
            }
        ]
    },
    {
        id: "4",
        slug: "tomadas-e-interruptores",
        categoryName: "Tomadas e interruptores",
        icon: "/img/svg/icons/tomada.svg",
        brands: [
            {
                linkLogo: "img/logos/weg.png",
                altLogo: "Weg"
            },
            {
                linkLogo: "img/logos/fame.png",
                altLogo: "Weg"
            },
            {
                linkLogo: "img/logos/blux.png",
                altLogo: "Weg"
            },
            {
                linkLogo: "img/logos/alumbra-2.png",
                altLogo: "Weg"
            },
            {
                linkLogo: "img/logos/tramontina.png",
                altLogo: "Weg"
            }
        ],
        banner: "/img/gallery/tomadas/banner-tomadas.png",
        photos: [
            {
                image:  "/img/gallery/tomadas/tomada-2.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {   
                image: "/img/gallery/tomadas/tomada-3.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {
                image:  "/img/gallery/tomadas/tomada-5.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:   "/img/gallery/tomadas/tomada-6.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:  "/img/gallery/tomadas/tomada-8.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image: "/img/gallery/tomadas/tomada-4.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {
                image:  "/img/gallery/tomadas/tomada-1.jpg",
                alt: "teste",
                width: 305,
                height: 400
            },
            {
                image:  "/img/gallery/tomadas/tomada-7.png",
                alt: "teste",
                width: 305,
                height: 400
            }
        ]
    },
    {
        id: "5",
        slug: "disjuntores-e-dispositivos-de-protecao",
        categoryName: "Disjuntores e dispositivos de proteção",
        icon: "/img/svg/icons/disjuntor.svg",
        brands: [
            {
                linkLogo: "img/logos/steck.png",
                altLogo: "Steck"
            },
            {
                linkLogo: "img/logos/weg.png",
                altLogo: "Weg"
            },
            {
                linkLogo: "img/logos/schneider.png",
                altLogo: "Weg"
            }
        ],
        banner: "/img/gallery/disjuntores/banner-disjuntores.png",
        photos: [
            {
                image:  "/img/gallery/disjuntores/disjuntor-1.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {   
                image: "/img/gallery/disjuntores/disjuntor-2.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {
                image:  "/img/gallery/disjuntores/disjuntor-4.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:   "/img/gallery/disjuntores/disjuntor-8.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image:  "/img/gallery/disjuntores/disjuntor-7.jpg",
                alt: "teste",
                width: 410,
                height: 300
            },
            {
                image: "/img/gallery/disjuntores/disjuntor-3.jpg",
                alt: "teste",
                width: 620,
                height: 400
            },
            {
                image:  "/img/gallery/disjuntores/disjuntor-5.jpg",
                alt: "teste",
                width: 305,
                height: 400
            },
            {
                image:  "/img/gallery/disjuntores/disjuntor-6.jpg",
                alt: "teste",
                width: 305,
                height: 400
            }
        ]
    },
    {
        id: "6",
        slug: "eletrodutos-e-mangueiras",
        categoryName: "Eletrodutos e mangueiras",
        icon: "/img/svg/icons/mangueira.svg",
        brands: [
            {
                linkLogo: "img/logos/siemens.png",
                altLogo: "siemens"
            }
        ],
        banner: "/img/gallery/mangueiras/banner-mangueiras.png",
        photos: [
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            },
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            },
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            }
        ]
    },
    {
        id: "7",
        slug: "soquetes-e-adaptadores",
        categoryName: "Soquetes e adaptadores",
        icon: "/img/svg/icons/soquete.svg",
        brands: [
            {
                linkLogo: "img/logos/siemens.png",
                altLogo: "siemens"
            }
        ],
        banner: "",
        photos: [
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            },
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            },
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            }
        ]
    },
    {
        id: "8",
        slug: "distribuicao",
        categoryName: "Distribuição",
        icon: "/img/svg/icons/distribuicao.svg",
        brands: [
            {
                linkLogo: "img/logos/siemens.png",
                altLogo: "siemens"
            }
        ],
        banner: "",
        photos: [
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            },
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            },
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            }
        ]
    },
    {
        id: "9",
        slug: "tomadas-industriais",
        categoryName: "Tomadas industriais",
        icon: "/img/svg/icons/tomada-industrial.svg",
        brands: [
            {
                linkLogo: "img/logos/siemens.png",
                altLogo: "siemens"
            }
        ],
        banner: "",
        photos: [
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            },
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            },
            {
                image:  "/img/blog/blog-1.jpg",
                alt: "teste",
                width: 100,
                height: 100
            }
        ]
    }

]

export const menu = [
    {
        description: "Home",
        link: "/"
    },
    {
        description: "Quem somos",
        link: "/about"
    },
    {
        description: "Fale conosco",
        link: "/contact-us"
    },
    /* {
        description: "Lading Page",
        link: "https://mailchi.mp/64838505c235/contato"
    } */
]

