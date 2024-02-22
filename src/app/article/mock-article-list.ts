import { Article } from "../article/article";

export const ARTICLES: Article[] = [
    {
      id: 1,
      urlImg: "../assets/img/chocolat-epicerie-sucree.jpg",
      textAltImg: "Wowo du chocolat",
      name: "Chocolat",
      categories: ["Epicerie sucrée"],
      brand: "La chocolaterie beaugeolaise",
      price: 3,
      description: "Le type de chocolat est consectetur adipiscing elit. Justo at ligula varius pharetra vel ac orci.",
      available: false,
      created: new Date()
    },
    {
      id: 2,
      urlImg: "../assets/img/pomme-rouge-fruit.jpg",
      textAltImg: "Wowo une Pomme",
      name: "Pomme",
      categories: ["Fruit", "Produit de la ferme"],
      brand: "GAEC Décrenisse",
      price: 6,
      description: "La variété de la Banane est consectetur adipiscing elit. Justo at ligula varius pharetra vel ac orci.",
      available: true,
      created: new Date()
    },
    {
      id: 3,
      urlImg: "../assets/img/oeuf-produit-de-la-ferme.jpg",
      textAltImg: "Oeuf",
      name: "Oeuf",
      categories: ["Produit de la ferme"],
      brand: "La ferme du coin",
      price: 8,
      description: "La variété de l'oeuf est consectetur adipiscing elit. Justo at ligula varius pharetra vel ac orci.",
      available: true,
      created: new Date()
    },
    {
      id: 4,
      urlImg: "../assets/img/biere-boisson-alcoolisee.jpg",
      textAltImg: "Bière - Le domaine du manchot",
      name: "Bière",
      categories: ["Boisson alcoolisée"],
      brand: "Le domaine du manchot",
      price: 8,
      description: "BLISS (« état de plénitude, bonheur » en anglais) est une bière blonde qui se distingue par sa.",
      available: false,
      created: new Date()
    },
    {
      id: 5,
      urlImg: "../assets/img/salade-legume.jpg",
      textAltImg: "Salade",
      name: "Salade",
      categories: ["Légume", "Produit de la ferme"],
      brand: "La ferme du coin",
      price: 1,
      description: "C'est une variété de laitue caractéristique car elle peut être de couleur rouge ou blonde.",
      available: true,
      created: new Date()
    },
    {
      id: 6,
      urlImg: "../assets/img/flocon-de-mais-cereale.jpg",
      textAltImg: "Flocon de maïs - Céréale",
      name: "Flocon de maïs",
      categories: ["Epicerie sucrée", "Céréale"],
      brand: "Hecosfair",
      price: 3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas dolor.",
      available: true,
      created: new Date()      
    },
    {
      id: 7,
      urlImg: "../assets/img/limonade-boisson-produit-de-la-ferme.jpg",
      textAltImg: "Limonade artisanale",
      name: "Limonade",
      categories: ["Produit de la ferme", "Boisson"],
      brand: "La ferme du coin",
      price: 5,
      description: "L’emmental ou emmentaler est un fromage d'origine suisse à pâte dure dont le nom provient de.",
      available: false,
      created: new Date()
    },
    {
      id: 8,
      urlImg: "../assets/img/pate-epicerie-salee.jpg",
      textAltImg: "Pâte",
      name: "Pâte",
      categories: ["Epicerie salée"],
      brand: "La ferme du coin",
      price: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas dolor.",
      available: false,
      created: new Date()
    },
    {
      id: 9,
      urlImg: "../assets/img/fraise-fruit.jpg",
      textAltImg: "Fraise - fruit",
      name: "Fraise",
      categories: ["Fruit", "Produit de la ferme"],
      brand: "La ferme du coin",
      price: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas dolor.",
      available: false,
      created: new Date()      
    },
    {
      id: 10,
      urlImg: "../assets/img/frootloops-cereale.jpg",
      textAltImg: "Frootloops - Céréale",
      name: "Frootloops",
      categories: ["Epicerie sucrée", "Céréale"],
      brand: "Hecosfair",
      price: 3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas dolor.",
      available: true,
      created: new Date()
    },
    {
      id: 11,
      urlImg: "../assets/img/emmental-fromage-produit-de-la-ferme.jpg",
      textAltImg: "Fromage",
      name: "Fromage",
      categories: ["Fromage", "Produit de la ferme"],
      brand: "La ferme du coin",
      price: 5,
      description: "L’emmental ou emmentaler est un fromage d'origine suisse à pâte dure dont le nom provient de",
      available: false,
      created: new Date()
    },
    {
      id: 12,
      urlImg: "../assets/img/lessive-liquide-maison.jpg",
      textAltImg: "Lessive liquide",
      name: "Lessive liquide",
      categories: ["Maison"],
      brand: "Biocoop",
      price: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas dolor.",
      available: true,
      created: new Date()
    },
    {
      id: 13,
      urlImg: "../assets/img/kiwi-fruit.jpg",
      textAltImg: "Kiwi - fruit",
      name: "Kiwi",
      categories: ["Fruit", "Produit de la ferme"],
      brand: "La ferme du coin",
      price: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas dolor.",
      available: true,
      created: new Date()
    },
    {
      id: 14,
      urlImg: "../assets/img/confiture-epicerie-sucree.jpg",
      textAltImg: "Confiture - Epicerie sucrée",
      name: "Confiture",
      categories: ["Epicerie sucrée"],
      brand: "La ferme du coin",
      price: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas dolor.",
      available: true,
      created: new Date()
    },
    {
      id: 15,
      urlImg: "../assets/img/huile-essentielle-maison.jpg",
      textAltImg: "Huile essentielle eucalyptus",
      name: "Huile essentielle",
      categories: ["Maison"],
      brand: "Onatera",
      price: 8,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet egestas dolor.",
      available: false,
      created: new Date()
    } 
    
  ]