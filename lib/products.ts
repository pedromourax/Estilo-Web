import { Product } from "./types";

export const products: Product[] = [
  // Roupas Femininas - Básicos
  {
    id: "1",
    name: "Camiseta Básica Branca",
    description: "Camiseta essencial de algodão para o dia a dia",
    price: 29.99,
    category: "womens",
    subCategory: "basics",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    name: "Calça Jeans Skinny",
    description: "Calça jeans com ajuste perfeito",
    price: 79.99,
    category: "womens",
    subCategory: "basics",
    imageUrl:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    name: "Regata Essential",
    description: "Regata básica em algodão premium",
    price: 24.99,
    category: "womens",
    subCategory: "basics",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "19",
    name: "Body Básico",
    description: "Body versátil para diversas ocasiões",
    price: 39.99,
    category: "womens",
    subCategory: "basics",
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "20",
    name: "Calça Legging Preta",
    description: "Legging de alta compressão para maior conforto",
    price: 49.99,
    category: "womens",
    subCategory: "basics",
    imageUrl:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&auto=format&fit=crop&q=60",
  },
  // Roupas Femininas - Casual
  {
    id: "4",
    name: "Vestido Floral",
    description: "Vestido leve com estampa floral",
    price: 89.99,
    category: "womens",
    subCategory: "casual",
    imageUrl:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "5",
    name: "Saia Midi Plissada",
    description: "Saia midi elegante com pregas",
    price: 69.99,
    category: "womens",
    subCategory: "casual",
    imageUrl:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "6",
    name: "Conjunto Cropped e Saia",
    description: "Conjunto moderno e versátil",
    price: 119.99,
    category: "womens",
    subCategory: "casual",
    imageUrl:
      "https://img.freepik.com/fotos-gratis/elegante-jovem-bonita-em-forma-de-mulher-loira-magra-com-top-azul-verao-e-saia-curta_343596-3069.jpg?t=st=1732672369~exp=1732675969~hmac=0f0fe489afb3a873b691502e604d1e3e4b6d1a2f48028467271b04a0a6881c5f&w=740",
  },
  {
    id: "21",
    name: "Blusa com Babados",
    description: "Blusa delicada com detalhes em babados",
    price: 59.99,
    category: "womens",
    subCategory: "casual",
    imageUrl:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "22",
    name: "Vestido Midi Listrado",
    description: "Vestido elegante com listras verticais",
    price: 129.99,
    category: "womens",
    subCategory: "casual",
    imageUrl:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=60",
  },
  // Roupas Femininas - Inverno
  {
    id: "7",
    name: "Casaco de Lã",
    description: "Casaco quente e elegante para o inverno",
    price: 199.99,
    category: "womens",
    subCategory: "winter",
    imageUrl:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "8",
    name: "Suéter Tricot",
    description: "Suéter em tricot macio e confortável",
    price: 149.99,
    category: "womens",
    subCategory: "winter",
    imageUrl:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "23",
    name: "Cachecol de Cashmere",
    description: "Cachecol luxuoso e quentinho",
    price: 89.99,
    category: "womens",
    subCategory: "winter",
    imageUrl:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "24",
    name: "Cardigan Oversized",
    description: "Cardigan soltinho e confortável",
    price: 159.99,
    category: "womens",
    subCategory: "winter",
    imageUrl:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=60",
  },
  // Roupas Masculinas - Básicos
  {
    id: "9",
    name: "Camiseta Polo",
    description: "Camiseta polo clássica masculina",
    price: 49.99,
    category: "mens",
    subCategory: "basics",
    imageUrl:
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "10",
    name: "Calça Chino",
    description: "Calça chino em algodão premium",
    price: 89.99,
    category: "mens",
    subCategory: "basics",
    imageUrl:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "25",
    name: "Camiseta Básica Preta",
    description: "Camiseta essencial em algodão",
    price: 34.99,
    category: "mens",
    subCategory: "basics",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "26",
    name: "Bermuda Cargo",
    description: "Bermuda cargo com bolsos funcionais",
    price: 79.99,
    category: "mens",
    subCategory: "basics",
    imageUrl:
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&auto=format&fit=crop&q=60",
  },
  // Roupas Masculinas - Casual
  {
    id: "11",
    name: "Camisa Social Slim",
    description: "Camisa social com corte moderno",
    price: 79.99,
    category: "mens",
    subCategory: "casual",
    imageUrl:
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "12",
    name: "Blazer Casual",
    description: "Blazer versátil para ocasiões diversas",
    price: 199.99,
    category: "mens",
    subCategory: "casual",
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "27",
    name: "Camisa Xadrez",
    description: "Camisa xadrez em flanela",
    price: 89.99,
    category: "mens",
    subCategory: "casual",
    imageUrl:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=60",
  },
  // Roupas Masculinas - Inverno
  {
    id: "13",
    name: "Jaqueta Corta-Vento",
    description: "Jaqueta leve e resistente",
    price: 159.99,
    category: "mens",
    subCategory: "winter",
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "28",
    name: "Casaco de Lã Masculino",
    description: "Casaco elegante para o inverno",
    price: 249.99,
    category: "mens",
    subCategory: "winter",
    imageUrl:
      "https://images.unsplash.com/photo-1512353087810-25dfcd100962?w=800&auto=format&fit=crop&q=60",
  },
  // Roupas Infantis - Conjuntos
  {
    id: "14",
    name: "Conjunto Infantil",
    description: "Conjunto confortável para crianças",
    price: 59.99,
    category: "kids",
    subCategory: "sets",
    imageUrl:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "15",
    name: "Conjunto Esportivo",
    description: "Conjunto esportivo infantil",
    price: 69.99,
    category: "kids",
    subCategory: "sets",
    imageUrl:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "29",
    name: "Conjunto Festa",
    description: "Conjunto elegante para ocasiões especiais",
    price: 89.99,
    category: "kids",
    subCategory: "sets",
    imageUrl:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=60",
  },
  // Roupas Infantis - Vestidos
  {
    id: "16",
    name: "Vestido Infantil Floral",
    description: "Vestido delicado com estampa floral",
    price: 49.99,
    category: "kids",
    subCategory: "dresses",
    imageUrl:
      "https://img.freepik.com/fotos-gratis/retrato-de-um-mulher-feliz-exterior-cafe-decorado-com-flores_1303-9927.jpg?t=st=1732672039~exp=1732675639~hmac=7c782519fe47989269302366404b48b5b7d26b43e29d0b89783f1578bc30dda6&w=1380",
  },
  {
    id: "30",
    name: "Vestido de Festa Infantil",
    description: "Vestido elegante para ocasiões especiais",
    price: 79.99,
    category: "kids",
    subCategory: "dresses",
    imageUrl:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=60",
  },
  // Roupas Infantis - Pijamas
  {
    id: "17",
    name: "Pijama Infantil",
    description: "Pijama confortável com estampa divertida",
    price: 39.99,
    category: "kids",
    subCategory: "sleepwear",
    imageUrl:
      "https://images.unsplash.com/photo-1578178344914-ad1ad89043b4?q=80&w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "31",
    name: "Pijama de Unicórnio",
    description: "Pijama temático super fofo",
    price: 44.99,
    category: "kids",
    subCategory: "sleepwear",
    imageUrl:
      "https://img.freepik.com/fotos-gratis/mulheres-fascinantes-em-kigurumi-relaxando-juntas_197531-12878.jpg?t=st=1732672124~exp=1732675724~hmac=4104367c7ff7c225048b6eea9ae58bf5233c852c7dc67e56d56b7327063afbd1&w=1380",
  },
  // Roupas Infantis - Temáticas
  {
    id: "18",
    name: "Camiseta Super-Heróis",
    description: "Camiseta com estampa de super-heróis",
    price: 34.99,
    category: "kids",
    subCategory: "themed",
    imageUrl:
      "https://img.freepik.com/fotos-gratis/super-homem-sucesso-posando-gesto_1368-2031.jpg?t=st=1732672307~exp=1732675907~hmac=764ac1e83d711ab90bffd970f4ff6b85b7323256c8ef319aff7d71d6a16738ba&w=740",
  },
  {
    id: "32",
    name: "Fantasia de Princesa",
    description: "Fantasia encantadora para pequenas princesas",
    price: 69.99,
    category: "kids",
    subCategory: "themed",
    imageUrl:
      "https://img.freepik.com/fotos-gratis/retrato-de-menina-sorridente-ficar-frente-vermelho-cortina_23-2147883121.jpg?t=st=1732672207~exp=1732675807~hmac=07a356ae5fe777a271e7018175ead8e5f06b2f2a92e608845f8bfe0170bdfaf2&w=740",
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getProductsBySubCategory = (
  category: string,
  subCategory: string
) => {
  return products.filter(
    (product) =>
      product.category === category && product.subCategory === subCategory
  );
};
