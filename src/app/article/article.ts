export class Article {
    id: number;
    urlImg: string;
    textAltImg: string;
    name: string;
    categories: string[];
    brand: string;
    price: number;
    description: string;
    available: boolean;
    created: Date;

    constructor(
        urlImg: string = "../assets/img/img-blank.jpg",
        textAltImg: string = "Renseigner la description de l'image",
        name: string = "Renseigner le nom de l'article",
        categories: string[] = ["Sans catégorie"],
        brand: string = "Renseigner la marque de l'article" ,
        price: number = 0,
        description: string = "Renseigner la description de l'article",
        available: boolean = true,
        created: Date = new Date()
    ){
        this.urlImg = urlImg;
        this.textAltImg = textAltImg
        this.name = name;
        this.categories = categories;
        this.brand = brand;
        this.price = price;
        this.description = description;   
        this.available = available;
        this.created = created;           
    }       
}