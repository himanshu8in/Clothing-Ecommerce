const padIndex = (index) => String(index + 1).padStart(2, "0");

const createCategoryItems = (
  count,
  {
    startId,
    category,
    namePrefix,
    basePrice,
    priceStep,
    imagePrefix,
    descriptionBuilder,
    extraBuilder,
    nameBuilder,
  }
) =>
  Array.from({ length: count }, (_, index) => ({
    id: `${startId + index}`,
    name: nameBuilder
      ? nameBuilder(index)
      : `${namePrefix ?? "Collection Item"} ${index + 1}`,
    price: basePrice + index * priceStep,
    category,
    image: `${imagePrefix}${padIndex(index)}.jpg`,
    description: descriptionBuilder(index),
    ...(extraBuilder ? extraBuilder(index) : {}),
  }));

const menCollection = createCategoryItems(20, {
  startId: 5,
  category: "men",
  basePrice: 1999,
  priceStep: 70,
  imagePrefix: "/images/men-placeholder-",
  nameBuilder: (index) => {
    const names = [
      "Atlas Tailored Shirt",
      "Harbor Selvedge Denim",
      "Pulse Active Polo",
      "Monarch Wool Blazer",
      "Nomad Stretch Chinos",
      "AeroMotion Training Tee",
      "Legacy Oxford Shirt",
      "Summit Cargo Shorts",
      "Midnight Merino Crew",
      "Vanguard Fleece Hoodie",
    ];
    return names[index % names.length];
  },
  descriptionBuilder: (index) => {
    const descriptions = [
      "Premium cotton blend shirt with modern fit and breathable fabric. Perfect for both casual and formal occasions.",
      "Stylish denim jeans with stretch comfort and classic five-pocket styling. Durable construction for everyday wear.",
      "Lightweight polo shirt with moisture-wicking technology. Ideal for active lifestyle and sports activities.",
      "Sophisticated blazer with tailored fit and premium wool blend. Essential piece for professional wardrobe.",
      "Comfortable chinos with wrinkle-resistant fabric and adjustable waist. Versatile for business and casual settings.",
      "Performance t-shirt with anti-odor treatment and UV protection. Great for outdoor activities and workouts.",
      "Classic dress shirt with spread collar and french cuffs. Machine washable with easy iron technology.",
      "Modern cargo shorts with multiple pockets and quick-dry fabric. Perfect for summer adventures and travel.",
      "Elegant sweater with merino wool blend and ribbed detailing. Luxurious comfort for cooler weather.",
      "Athletic hoodie with kangaroo pocket and adjustable drawstring. Cozy fleece lining for maximum comfort."
    ];
    return descriptions[index % descriptions.length];
  },
});

const womenCollection = createCategoryItems(30, {
  startId: 25,
  category: "women",
  basePrice: 2199,
  priceStep: 80,
  imagePrefix: "/images/women-placeholder-",
  nameBuilder: (index) => {
    const names = [
      "Aurora Satin Midi",
      "Verve High-Rise Trousers",
      "Luna Silk Blouse",
      "Flow Studio Leggings",
      "Haven Knit Cardigan",
      "Opal Pleated Skirt",
      "Iris Silk Camisole",
      "Pulse Balance Bra",
      "Muse Pencil Skirt",
      "Cocoon Cable Sweater",
    ];
    return names[index % names.length];
  },
  descriptionBuilder: (index) => {
    const descriptions = [
      "Elegant floral dress with flowing silhouette and delicate lace details. Perfect for special occasions and summer events.",
      "Stylish high-waisted trousers with tailored fit and premium stretch fabric. Professional yet comfortable for all-day wear.",
      "Chic blouse with silk-like texture and subtle pearl buttons. Versatile piece that transitions from office to evening.",
      "Comfortable yoga leggings with high-performance fabric and four-way stretch. Moisture-wicking for active lifestyle.",
      "Classic cardigan with soft knit blend and open-front design. Layering essential for seasonal transitions.",
      "Trendy midi skirt with A-line cut and adjustable waist. Flattering fit for various body types and occasions.",
      "Luxury silk camisole with delicate spaghetti straps and lace trim. Elegant layering piece for sophisticated looks.",
      "Performance sports bra with medium support and breathable mesh panels. Essential for workout and training sessions.",
      "Sophisticated pencil skirt with back slit and hidden zipper. Professional piece with modern comfort features.",
      "Cozy oversized sweater with chunky knit and turtleneck design. Perfect for cold weather and casual elegance."
    ];
    return descriptions[index % descriptions.length];
  },
});

const kidsAgeGroups = ["0-2 yrs", "3-5 yrs", "6-8 yrs", "9-11 yrs", "12-14 yrs"];

const kidsCollection = createCategoryItems(50, {
  startId: 55,
  category: "kids",
  basePrice: 1299,
  priceStep: 40,
  imagePrefix: "/images/kids-placeholder-",
  nameBuilder: (index) => {
    const names = [
      "Galaxy Graphic Tee",
      "Trailblazer Denim Shorts",
      "SnuggleCloud Hoodie",
      "Dreamscape PJ Set",
      "PuddleGuard Raincoat",
      "Sunburst Twirl Dress",
      "PlaySwift Active Set",
      "Sprout Denim Overalls",
      "FrostPeak Puffer",
      "BrightStart Uniform Shirt",
    ];
    return names[index % names.length];
  },
  descriptionBuilder: (index) => {
    const descriptions = [
      "Soft cotton t-shirt with fun graphic print and tag-free label. Gentle on sensitive skin and easy to wash.",
      "Stretchy denim shorts with adjustable waistband and reinforced knees. Perfect for playground adventures.",
      "Cozy fleece hoodie with kangaroo pocket and warm lining. Ideal for layering in cooler weather.",
      "Colorful pajama set with flame-resistant fabric and comfortable fit. Safe and snug for peaceful sleep.",
      "Durable rain jacket with waterproof coating and reflective details. Keeps little ones dry and visible.",
      "Breathable summer dress with twirl-worthy skirt and sun protection. Cute and practical for warm days.",
      "Active wear set with moisture-wicking fabric and athletic cut. Supports movement and play activities.",
      "Classic overalls with adjustable straps and multiple pockets. Timeless style for everyday adventures.",
      "Warm winter coat with insulated lining and detachable hood. Provides comfort and protection in cold weather.",
      "School uniform shirt with stain-resistant fabric and easy-care features. Professional yet comfortable for learning."
    ];
    return descriptions[index % descriptions.length];
  },
  extraBuilder: (index) => ({
    ageGroup: kidsAgeGroups[index % kidsAgeGroups.length],
  }),
});

const saleCollection = createCategoryItems(30, {
  startId: 105,
  category: "sale",
  basePrice: 1499,
  priceStep: 60,
  imagePrefix: "/images/sale-placeholder-",
  nameBuilder: (index) => {
    const names = [
      "Finale Luxe Trench",
      "Twilight Velvet Dress",
      "Tempo Knit Joggers",
      "Sculpt Seamless Set",
      "Verona Wrap Coat",
      "Peak Trail Jacket",
      "Prism Colorblock Hoodie",
      "Studio Rib Set",
      "Harbor Relaxed Shirt",
      "Glowline Lounge Set",
    ];
    return names[index % names.length];
  },
  descriptionBuilder: (index) => {
    const descriptions = [
      "Limited-time offer on premium quality apparel. Don't miss this exclusive deal with up to 50% off retail price.",
      "Seasonal clearance item with excellent condition and original quality. Perfect opportunity to upgrade your wardrobe.",
      "Flash sale special with high-demand style and comfortable fit. Popular item selling fast at unbeatable price.",
      "End-of-season discount on versatile piece that works for multiple occasions. Great value for money purchase.",
      "Inventory reduction sale on customer-favorite item. Same quality you love at a fraction of the original price.",
      "Special promotion item with premium materials and craftsmanship. Luxury experience without the luxury price tag.",
      "Clearance deal on trendy piece with modern design. Stay fashionable while saving big on this must-have item.",
      "Member-exclusive discount on high-quality essential. Reward for loyal shoppers with exceptional savings.",
      "Weekend special on versatile wardrobe staple. Limited stock available - grab it before it's gone forever.",
      "Warehouse sale item with premium features and comfort. Direct savings passed on to you from manufacturer."
    ];
    return descriptions[index % descriptions.length];
  },
});

export const products = [
  {
    id: "1",
    name: "Men T-Shirt",
    price: 999,
    category: "men",
    image: "/images/men-tshirt.jpg",
    description: "Comfortable cotton t-shirt for men",
  },
  {
    id: "2",
    name: "Women Dress",
    price: 1999,
    category: "women",
    image: "/images/women-dress.jpg",
    description: "Stylish evening dress for women",
  },
  {
    id: "3",
    name: "Kids Hoodie",
    price: 1299,
    category: "kids",
    image: "/images/kids-hoodie.jpg",
    description: "Warm hoodie for kids",
  },
  {
    id: "4",
    name: "Sale Jacket",
    price: 2499,
    category: "sale",
    image: "/images/sale-jacket.jpg",
    description: "Discounted winter jacket",
  },
  ...menCollection,
  ...womenCollection,
  ...kidsCollection,
  ...saleCollection,
];
