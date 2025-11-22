import { hashPassword } from "@/lib/auth";
import { PrismaClient, Product, User } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  const electronics = await prisma.category.create({
    data: {
      name: "Electronics",
      slug: "electronics",
    },
  });

  const clothing = await prisma.category.create({
    data: {
      name: "Clothing",
      slug: "clothing",
    },
  });

  const home = await prisma.category.create({
    data: {
      name: "Home",
      slug: "home",
    },
  });

  const products: Product[] = [
    {
      id: "1",
      name: "Wireless Headphones",
      description:
        "Premium noise-cancelling wireless headphones with long battery life.",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      categoryId: electronics.id,
      slug: "wireless-headphones",
      inventory: 15,
    },
    {
      id: "2",
      name: "Smart Watch",
      description:
        "Fitness tracker with heart rate monitoring and sleep analysis.",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      categoryId: electronics.id,
      slug: "smart-watch",
      inventory: 10,
    },
    {
      id: "3",
      name: "Running Shoes",
      description: "Lightweight running shoes with responsive cushioning.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      categoryId: clothing.id,
      slug: "running-shoes",
      inventory: 3,
    },
    {
      id: "4",
      name: "Ceramic Mug",
      description: "Handcrafted ceramic mug with minimalist design.",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
      categoryId: home.id,
      slug: "ceramic-mug",
      inventory: 0,
    },
    {
      id: "5",
      name: "Leather Backpack",
      description: "Durable leather backpack with multiple compartments.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7",
      categoryId: clothing.id,
      slug: "leather-backpack",
      inventory: 1,
    },
    {
      id: "6",
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      categoryId: clothing.id,
      inventory: 97,
      slug: "fjallraven-foldsack",
    },
    {
      id: "7",
      name: "Mens Casual Premium Slim Fit T-Shirts ",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      price: 22.3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      categoryId: clothing.id,
      inventory: 44,
      slug: "menscasual",
    },
    {
      id: "8",
      name: "Mens Cotton Jacket",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      categoryId: clothing.id,
      inventory: 80,
      slug: "menscotton",
    },
    {
      id: "9",
      name: "Mens Casual Slim Fit",
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      price: 15.99,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      categoryId: clothing.id,
      inventory: 86,
      slug: "menscasualfit",
    },
    {
      id: "10",
      name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      price: 695,
      image:
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
      categoryId: clothing.id,
      inventory: 37,
      slug: "johnhardy",
    },
    {
      id: "11",
      name: "Solid Gold Petite Micropave ",
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      price: 168,
      image:
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
      categoryId: clothing.id,
      inventory: 52,
      slug: "solidgold",
    },
    {
      id: "12",
      name: "White Gold Plated Princess",
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      price: 9.99,
      image:
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
      categoryId: clothing.id,
      inventory: 70,
      slug: "whitegold",
    },
    {
      id: "13",
      name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      price: 10.99,
      image:
        "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
      categoryId: clothing.id,
      inventory: 100,
      slug: "piercedowl",
    },
    {
      id: "14",
      name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      price: 64,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
      categoryId: electronics.id,
      inventory: 25,
      slug: "wd2tb",
    },
    {
      id: "15",
      name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      price: 109,
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
      categoryId: electronics.id,
      inventory: 43,
      slug: "sandiskssd",
    },
    {
      id: "16",
      name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      price: 109,
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
      categoryId: electronics.id,
      inventory: 29,
      slug: "siliconpower",
    },
    {
      id: "17",
      name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      price: 114,
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
      categoryId: electronics.id,
      inventory: 40,
      slug: "wd4tb",
    },
    {
      id: "18",
      name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      price: 599,
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
      categoryId: electronics.id,
      inventory: 25,
      slug: "acersb220q",
    },
    {
      id: "19",
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      price: 999.99,
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
      categoryId: electronics.id,
      inventory: 16,
      slug: "samsung49-inch",
    },
    {
      id: "20",
      name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      price: 56.99,
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
      categoryId: clothing.id,
      inventory: 75,
      slug: "biylaclesenwomens",
    },
    {
      id: "21",
      name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      price: 29.95,
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
      categoryId: clothing.id,
      inventory: 49,
      slug: "lockand",
    },
    {
      id: "22",
      name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      price: 39.99,
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
      categoryId: clothing.id,
      inventory: 9,
      slug: "rainjacket",
    },
    {
      id: "23",
      name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      price: 9.85,
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
      categoryId: clothing.id,
      inventory: 50,
      slug: "mbjwomens",
    },
    {
      id: "24",
      name: "Opna Women's Short Sleeve Moisture",
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      price: 7.95,
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
      categoryId: clothing.id,
      inventory: 80,
      slug: "opnawomens",
    },
    {
      id: "25",
      name: "DANVOUY Womens T Shirt Casual Cotton Short",
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      price: 12.99,
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
      categoryId: clothing.id,
      inventory: 88,
      slug: "danvouywomens",
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  const users: User[] = [
    {
      id: "1",
      email: "admin@example.com",
      password: "password123",
      name: "Admin User",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      email: "user@example.com",
      password: "password456",
      name: "Regular User",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  for (const user of users) {
    const hashedPassword = await hashPassword(user.password);
    await prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
  }

  console.log("Users created");
}

main()
  .then(async () => {
    console.log("Seeding complete!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
