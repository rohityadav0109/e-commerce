const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const products = [
  {
    name: "Men Slim Fit Cotton Blend Shirt",
    description: "Premium cotton blend shirt perfect for casual and formal wear. Offers a comfortable slim fit.",
    price: 999,
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/4/z/k/m-st1-vebnor-original-imagpw722vgbxcyg.jpeg?q=70",
    category: "Shirts",
    rating: 4.2,
    featured: true
  },
  {
    name: "Women Kurta and Pant Set",
    description: "Elegant ethnics wear for festive occasions. Features a beautiful printed kurta with matching pants.",
    price: 1299,
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/y/l/j/xl-513-v-ast-original-imahfxgzfyq4u8zf.jpeg?q=70",
    category: "Kurtas",
    rating: 4.5,
    featured: true
  },
  {
    name: "Men Regular Fit Dark Blue Jeans",
    description: "Classic five-pocket dark wash jeans built for everyday durability and style.",
    price: 1499,
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/o/l/v/32-fmjen01230-flying-machine-original-imags328hm5zuzbg.jpeg?q=70",
    category: "Jeans",
    rating: 4.1,
    featured: true
  },
  {
    name: "Men Solid Cotton Blend Round Neck T-Shirt",
    description: "Comfortable and breathable round neck t-shirt for daily workouts or casual lounging.",
    price: 499,
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/j/t/e/s-kbs24-pksdptss-kb-team-original-imagzyzbbzmyzh22.jpeg?q=70",
    category: "T-Shirts",
    rating: 4.0,
    featured: true
  },
  {
    name: "Women Flared Pink Plazo",
    description: "Flowy, comfortable wide-leg palazzo pants suitable for traditional tops or casual tees.",
    price: 699,
    image: "https://rukminim2.flixcart.com/image/832/832/l0vbukw0/trouser/y/a/4/32-pzp1016-fashor-original-imagcjdffhyxgqq7.jpeg?q=70",
    category: "Plazos",
    rating: 4.3,
    featured: true
  },
  {
    name: "Men Floral Print Sherwani Set",
    description: "Exquisite sherwani ensemble designed for weddings and grand festivities. Rich golden thread work.",
    price: 4999,
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sherwani/p/o/3/xl-sh1001-sanwara-original-imagqhyb6ztx8mmy.jpeg?q=70",
    category: "Sherwani",
    rating: 4.7,
    featured: true
  }
];

async function main() {
  console.log(`Start seeding clothing data...`)
  
  // Clear existing products
  await prisma.product.deleteMany()
  
  for (const p of products) {
    const product = await prisma.product.create({
      data: p,
    })
    console.log(`Created product with id: ${product.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
