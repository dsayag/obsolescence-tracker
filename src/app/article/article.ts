export class Article {
    id: number;
    urlImg: string;
    textAltImg: string;
    model: string;
    categories: string[];
    brand: string;
    urlImgBrand: string;
    price: number;
    date: string;
    description: string;

    constructor(
        urlImg: string = "../assets/img/img-blank.jpg",
        textAltImg: string = "Renseigner la description de l'image",
        model: string = "Renseigner le nom de l'article",
        categories: string[] = ["Sans catégorie"],
        brand: string = "Renseigner la marque de l'article" ,
        urlImgBrand: string = "../assets/img/img-blank.jpg",
        date: string = "1946",
        price: number = 0,
        description: string = "Renseigner la description de l'article"
    ){
        this.urlImg = urlImg;
        this.textAltImg = textAltImg
        this.model = model;
        this.categories = categories;
        this.brand = brand;
        this.urlImgBrand = urlImgBrand;
        this.date = date;
        this.price = price;
        this.description = description;           
    }       
}