// import "dotenv/config";
// import { PrismaClient, Gender } from "@prisma/client";

// const prisma = new PrismaClient({
//   accelerateUrl: process.env.DATABASE_URL,
// });

// const englishFirstNamesMale = [
//   "James", "Oliver", "William", "Henry", "Thomas",
//   "Edward", "Charles", "George", "Arthur", "Frederick",
//   // "Albert", "Ernest", "Alfred", "Herbert", "Arthur",
//   "Walter", "Herbert", "Percy", "Cecil", "Reginald",
//   "Archibald", "Barnabas", "Clement", "Dominic", "Edmund",
//   "Felix", "Gerald", "Harold", "Irving", "Julian",
// ];

// const englishFirstNamesFemale = [
//   "Emma", "Olivia", "Charlotte", "Amelia", "Isla",
//   "Mia", "Luna", "Harper", "Evelyn", "Aria",
//   "Eleanor", "Elizabeth", "Victoria", "Alice", "Diana",
//   "Catherine", "Margaret", "Florence", "Grace", "Hazel",
//   "Iris", "Josephine", "Matilda", "Penelope", "Rosalind",
//   "Sophia", "Violet", "Winifred", "Beatrice", "Clara",
// ];

// const frenchFirstNamesMale = [
//   "Louis", "Henri", "Pierre", "Jacques", "François",
//   "Jean", "Antoine", "Marcel", "André", "René",
//   "Émile", "Claude", "Georges", "Maurice", "Lucien",
//   "Gaston", "Renault", "Sébastien", "Dominique", "Laurent",
//   "Philippe", "Gabriel", "Matthieu", "Nicolas", "Thierry",
//   "Vincent", "Arnaud", "Christophe", "Didier", "Olivier",
// ];

// const frenchFirstNamesFemale = [
//   "Marie", "Camille", "Juliette", "Colette", "Madeleine",
//   "Vivienne", "Renée", "Élise", "Brigitte", "Céline",
//   "Hélène", "Josette", "Madeleine", "Monique", "Nathalie",
//   "Simone", "Sylvie", "Thérèse", "Valérie", "Véronique",
//   "Adèle", "Bérénice", "Clémence", "Delphine", "Émilienne",
//   "Françoise", "Geneviève", "Isabelle", "Joséphine", "Marguerite",
// ];

// const lastNames = [
//   "Smith", "Johnson", "Williams", "Brown", "Jones",
//   "Davis", "Miller", "Wilson", "Moore", "Taylor",
//   "Anderson", "Thomas", "Jackson", "White", "Harris",
//   "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
//   "Clark", "Rodriguez", "Lewis", "Lee", "Walker",
//   "Hall", "Allen", "Young", "King", "Wright",
// ];

// const frenchLastNames = [
//   "Dupont", "Martin", "Bernard", "Dubois", "Moreau",
//   "Laurent", "Lefebvre", "Mercier", "Fournier", "Lambert",
//   "Bonnet", "François", "Martínez", "Girard", "André",
//   "Lefèvre", "David", "Bertrand", "Rousseau", "Morel",
//   "Simon", "Laurent", "Leduc", "Fontaine", "Chevalier",
//   "François", "Garnier", "Arnaud", "Perrin", "Duval",
// ];

// const cities = [
//   "New York", "London", "Paris", "Berlin", "Tokyo",
//   "Sydney", "Toronto", "Mumbai", "Cairo", "Rio de Janeiro",
//   "Amsterdam", "Vienna", "Brussels", "Zurich", "Stockholm",
//   "Oslo", "Helsinki", "Copenhagen", "Dublin", "Edinburgh",
//   "Barcelona", "Madrid", "Lisbon", "Rome", "Milan",
//   "Prague", "Warsaw", "Budapest", "Bucharest", "Athens",
// ];

// const states = [
//   "New York", "California", "Texas", "Florida", "Illinois",
//   "England", "Île-de-France", "Bavaria", "Tokyo Prefecture", "New South Wales",
//   "Ontario", "Maharashtra", "Cairo Governorate", "Rio de Janeiro", "North Holland",
//   "Vienna", "Brussels-Capital", "Zurich", "Stockholm County", "Oslo",
//   "Uusimaa", "Capital Region", "Leinster", "Edinburgh", "Catalonia",
//   "Community of Madrid", "Lisbon District", "Lazio", "Lombardy", "Prague",
// ];

// const countries = [
//   "United States", "United Kingdom", "France", "Germany", "Japan",
//   "Australia", "Canada", "India", "Egypt", "Brazil",
//   "Netherlands", "Austria", "Belgium", "Switzerland", "Sweden",
//   "Norway", "Finland", "Denmark", "Ireland", "United Kingdom",
//   "Spain", "Spain", "Portugal", "Italy", "Italy",
//   "Czech Republic", "Poland", "Hungary", "Romania", "Greece",
// ];

// const avatarUrlsMale = [
//   "https://randomuser.me/api/portraits/men/1.jpg",
//   "https://randomuser.me/api/portraits/men/2.jpg",
//   "https://randomuser.me/api/portraits/men/3.jpg",
//   "https://randomuser.me/api/portraits/men/4.jpg",
//   "https://randomuser.me/api/portraits/men/5.jpg",
//   "https://randomuser.me/api/portraits/men/6.jpg",
//   "https://randomuser.me/api/portraits/men/7.jpg",
//   "https://randomuser.me/api/portraits/men/8.jpg",
//   "https://randomuser.me/api/portraits/men/9.jpg",
//   "https://randomuser.me/api/portraits/men/10.jpg",
//   "https://randomuser.me/api/portraits/men/11.jpg",
//   "https://randomuser.me/api/portraits/men/12.jpg",
//   "https://randomuser.me/api/portraits/men/13.jpg",
//   "https://randomuser.me/api/portraits/men/14.jpg",
//   "https://randomuser.me/api/portraits/men/15.jpg",
// ];

// const avatarUrlsFemale = [
//   "https://randomuser.me/api/portraits/women/1.jpg",
//   "https://randomuser.me/api/portraits/women/2.jpg",
//   "https://randomuser.me/api/portraits/women/3.jpg",
//   "https://randomuser.me/api/portraits/women/4.jpg",
//   "https://randomuser.me/api/portraits/women/5.jpg",
//   "https://randomuser.me/api/portraits/women/6.jpg",
//   "https://randomuser.me/api/portraits/women/7.jpg",
//   "https://randomuser.me/api/portraits/women/8.jpg",
//   "https://randomuser.me/api/portraits/women/9.jpg",
//   "https://randomuser.me/api/portraits/women/10.jpg",
//   "https://randomuser.me/api/portraits/women/11.jpg",
//   "https://randomuser.me/api/portraits/women/12.jpg",
//   "https://randomuser.me/api/portraits/women/13.jpg",
//   "https://randomuser.me/api/portraits/women/14.jpg",
//   "https://randomuser.me/api/portraits/women/15.jpg",
// ];

// function randomPick<T>(arr: T[]): T {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// function randomEmail(name: string): string {
//   const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "protonmail.com"];
//   return `${name.toLowerCase().replace(/[^a-z]/g, "")}${Math.floor(Math.random() * 999)}@${randomPick(domains)}`;
// }

// async function main() {
//   console.log("Seeding database...");

//   // Clear existing data
//   await prisma.user.deleteMany();
//   await prisma.firstName.deleteMany();
//   await prisma.lastName.deleteMany();
//   await prisma.location.deleteMany();
//   await prisma.avatarPool.deleteMany();
//   await prisma.product.deleteMany();

//   // 1. Seed FirstNames — 30 male, 30 female (English + French)
//   console.log("Seeding FirstNames...");
//   const firstNameData: { name: string; gender: Gender }[] = [];

//   for (let i = 0; i < 15; i++) {
//     firstNameData.push({ name: englishFirstNamesMale[i], gender: Gender.MALE });
//   }
//   for (let i = 0; i < 15; i++) {
//     firstNameData.push({ name: frenchFirstNamesMale[i], gender: Gender.MALE });
//   }
//   for (let i = 0; i < 15; i++) {
//     firstNameData.push({ name: englishFirstNamesFemale[i], gender: Gender.FEMALE });
//   }
//   for (let i = 0; i < 15; i++) {
//     firstNameData.push({ name: frenchFirstNamesFemale[i], gender: Gender.FEMALE });
//   }

//   await prisma.firstName.createMany({ data: firstNameData });
//   console.log(`  Created ${firstNameData.length} FirstNames`);

//   // 2. Seed LastNames — 30 (English + French)
//   console.log("Seeding LastNames...");
//   const lastNameData: { name: string }[] = [];
//   for (let i = 0; i < 15; i++) {
//     lastNameData.push({ name: lastNames[i] });
//   }
//   for (let i = 0; i < 15; i++) {
//     lastNameData.push({ name: frenchLastNames[i] });
//   }

//   await prisma.lastName.createMany({ data: lastNameData });
//   console.log(`  Created ${lastNameData.length} LastNames`);

//   // 3. Seed Locations — 30
//   console.log("Seeding Locations...");
//   const locationData: { city: string; state: string; country: string }[] = [];
//   for (let i = 0; i < 30; i++) {
//     locationData.push({
//       city: cities[i],
//       state: states[i],
//       country: countries[i],
//     });
//   }

//   await prisma.location.createMany({ data: locationData });
//   console.log(`  Created ${locationData.length} Locations`);

//   // 4. Seed AvatarPool — 30 (15 male, 15 female)
//   console.log("Seeding AvatarPool...");
//   const avatarData: { gender: Gender; url: string }[] = [];
//   for (let i = 0; i < 15; i++) {
//     avatarData.push({ gender: Gender.MALE, url: avatarUrlsMale[i] });
//   }
//   for (let i = 0; i < 15; i++) {
//     avatarData.push({ gender: Gender.FEMALE, url: avatarUrlsFemale[i] });
//   }

//   await prisma.avatarPool.createMany({ data: avatarData });
//   console.log(`  Created ${avatarData.length} Avatars`);

//   // 5. Seed Products — 40
//   console.log("Seeding Products...");
//   const productData: {
//     name: string;
//     description: string;
//     price: number;
//     category: string;
//     photo: string;
//   }[] = [
//     // Electronics (8)
//     {
//       name: "Wireless Noise-Cancelling Headphones",
//       description: "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and hi-res audio support.",
//       price: 349.99,
//       category: "Electronics",
//       photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
//     },
//     {
//       name: "Mechanical Gaming Keyboard",
//       description: "RGB backlit mechanical keyboard with Cherry MX switches, programmable macros, and aluminum frame.",
//       price: 149.99,
//       category: "Electronics",
//       photo: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
//     },
//     {
//       name: "4K Ultra HD Monitor 27-inch",
//       description: "IPS panel with 4K resolution, 144Hz refresh rate, HDR10 support, and USB-C connectivity.",
//       price: 599.99,
//       category: "Electronics",
//       photo: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
//     },
//     {
//       name: "Portable Bluetooth Speaker",
//       description: "Waterproof speaker with 360-degree sound, 20-hour playtime, and built-in microphone.",
//       price: 79.99,
//       category: "Electronics",
//       photo: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
//     },
//     {
//       name: "Smart Fitness Watch",
//       description: "GPS fitness tracker with heart rate monitor, sleep tracking, and 7-day battery life.",
//       price: 199.99,
//       category: "Electronics",
//       photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
//     },
//     {
//       name: "Wireless Charging Pad",
//       description: "15W fast wireless charger compatible with all Qi-enabled devices. Slim design with LED indicator.",
//       price: 29.99,
//       category: "Electronics",
//       photo: "https://images.unsplash.com/photo-1615526675159-eab4813068ce?w=400",
//     },
//     {
//       name: "USB-C Hub Adapter 7-in-1",
//       description: "Multiport adapter with HDMI, USB-A 3.0, SD card reader, and 100W power delivery.",
//       price: 45.99,
//       category: "Electronics",
//       photo: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400",
//     },
//     {
//       name: "True Wireless Earbuds",
//       description: "Compact earbuds with active noise cancellation, transparency mode, and 8-hour battery per charge.",
//       price: 129.99,
//       category: "Electronics",
//       photo: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400",
//     },

//     // Clothing (8)
//     {
//       name: "Classic Oxford Button-Down Shirt",
//       description: "100% cotton oxford shirt with a relaxed fit. Available in multiple colors. Machine washable.",
//       price: 59.99,
//       category: "Clothing",
//       photo: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
//     },
//     {
//       name: "Slim Fit Chino Pants",
//       description: "Stretch cotton chinos with a modern slim fit. Comfortable for all-day wear.",
//       price: 49.99,
//       category: "Clothing",
//       photo: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
//     },
//     {
//       name: "Merino Wool Crewneck Sweater",
//       description: "Lightweight merino wool sweater with ribbed cuffs and hem. Perfect for layering.",
//       price: 89.99,
//       category: "Clothing",
//       photo: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a03?w=400",
//     },
//     {
//       name: "Waterproof Shell Jacket",
//       description: "Lightweight waterproof jacket with sealed seams, adjustable hood, and zippered pockets.",
//       price: 149.99,
//       category: "Clothing",
//       photo: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400",
//     },
//     {
//       name: "Relaxed Fit Denim Jeans",
//       description: "Classic straight-leg jeans made from premium denim. Comfortable rise with a relaxed fit.",
//       price: 69.99,
//       category: "Clothing",
//       photo: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
//     },
//     {
//       name: "Cotton Graphic T-Shirt",
//       description: "Soft cotton tee with a modern graphic print. Pre-shrunk fabric for a consistent fit.",
//       price: 24.99,
//       category: "Clothing",
//       photo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
//     },
//     {
//       name: "Lightweight Linen Blazer",
//       description: "Unstructured linen blazer with notch lapel. Ideal for warm-weather smart casual looks.",
//       price: 129.99,
//       category: "Clothing",
//       photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400",
//     },
//     {
//       name: "Performance Running Shorts",
//       description: "Quick-dry running shorts with built-in liner and zippered pocket. Breathable mesh panels.",
//       price: 34.99,
//       category: "Clothing",
//       photo: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400",
//     },

//     // Home & Kitchen (8)
//     {
//       name: "Stainless Steel French Press",
//       description: "Double-wall insulated French press with 34oz capacity. Brews rich, full-bodied coffee.",
//       price: 32.99,
//       category: "Home & Kitchen",
//       photo: "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=400",
//     },
//     {
//       name: "Ceramic Non-Stick Frying Pan 12-inch",
//       description: "PTFE-free ceramic coating with even heat distribution. Dishwasher safe.",
//       price: 44.99,
//       category: "Home & Kitchen",
//       photo: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400",
//     },
//     {
//       name: "Bamboo Cutting Board Set",
//       description: "Set of 3 bamboo cutting boards with juice grooves. antimicrobial and knife-friendly.",
//       price: 27.99,
//       category: "Home & Kitchen",
//       photo: "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400",
//     },
//     {
//       name: "Pour-Over Coffee Dripper",
//       description: "Hand-blown borosilicate glass dripper with stainless steel mesh filter. Makes 1-4 cups.",
//       price: 22.99,
//       category: "Home & Kitchen",
//       photo: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
//     },
//     {
//       name: "Robot Vacuum Cleaner",
//       description: "Smart navigation robot vacuum with 120-minute runtime, app control, and auto-empty dock.",
//       price: 299.99,
//       category: "Home & Kitchen",
//       photo: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400",
//     },
//     {
//       name: "Linen Duvet Cover Set Queen",
//       description: "Stonewashed linen duvet cover with 2 pillow shams. Gets softer with every wash.",
//       price: 119.99,
//       category: "Home & Kitchen",
//       photo: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400",
//     },
//     {
//       name: "Cast Iron Dutch Oven 6-quart",
//       description: "Enameled cast iron with self-basting lid. Perfect for slow cooking, braising, and baking bread.",
//       price: 69.99,
//       category: "Home & Kitchen",
//       photo: "https://images.unsplash.com/photo-1585837146751-a44118595079?w=400",
//     },
//     {
//       name: "Scented Soy Candle Set",
//       description: "Set of 3 hand-poured soy candles: vanilla, cedar, and lavender. 40-hour burn time each.",
//       price: 36.99,
//       category: "Home & Kitchen",
//       photo: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=400",
//     },

//     // Sports & Outdoors (8)
//     {
//       name: "Yoga Mat with Alignment Marks",
//       description: "6mm thick TPE yoga mat with laser-etched alignment lines. Non-slip on both sides.",
//       price: 39.99,
//       category: "Sports & Outdoors",
//       photo: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400",
//     },
//     {
//       name: "Insulated Water Bottle 32oz",
//       description: "Double-wall vacuum insulated stainless steel. Keeps cold 24h, hot 12h. BPA free.",
//       price: 34.99,
//       category: "Sports & Outdoors",
//       photo: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
//     },
//     {
//       name: "Adjustable Dumbbell Set",
//       description: "Space-saving adjustable dumbbells from 5 to 52.5 lbs each. Quick-change weight selector.",
//       price: 349.99,
//       category: "Sports & Outdoors",
//       photo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
//     },
//     {
//       name: "Hiking Backpack 40L",
//       description: "Lightweight internal frame backpack with rain cover, hydration sleeve, and multiple compartments.",
//       price: 89.99,
//       category: "Sports & Outdoors",
//       photo: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
//     },
//     {
//       name: "Resistance Band Set",
//       description: "Set of 5 loop bands with varying resistance levels. Includes carry bag and exercise guide.",
//       price: 19.99,
//       category: "Sports & Outdoors",
//       photo: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400",
//     },
//     {
//       name: "Camping Hammock with Mosquito Net",
//       description: "Lightweight parachute nylon hammock with integrated bug net. Packs down to the size of a grapefruit.",
//       price: 44.99,
//       category: "Sports & Outdoors",
//       photo: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400",
//     },
//     {
//       name: "Foam Roller for Recovery",
//       description: "High-density EVA foam roller with textured surface for deep tissue massage and muscle recovery.",
//       price: 24.99,
//       category: "Sports & Outdoors",
//       photo: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400",
//     },
//     {
//       name: "Trail Running Shoes",
//       description: "Lightweight trail runners with Vibram outsole, rock plate, and waterproof mesh upper.",
//       price: 139.99,
//       category: "Sports & Outdoors",
//       photo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
//     },

//     // Books & Stationery (8)
//     {
//       name: "Leather-Bound Journal",
//       description: "Hand-stitched full-grain leather journal with 200 pages of acid-free paper. Lay-flat binding.",
//       price: 28.99,
//       category: "Books & Stationery",
//       photo: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
//     },
//     {
//       name: "Fountain Pen Starter Kit",
//       description: "Brass fountain pen with converter, 6 ink cartridges, and a velvet carrying case.",
//       price: 42.99,
//       category: "Books & Stationery",
//       photo: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400",
//     },
//     {
//       name: "Hardcover Sketchbook A4",
//       description: "200gsm mixed-media paper, 80 sheets. Spiral bound with a rigid cover. Ideal for ink and watercolor.",
//       price: 18.99,
//       category: "Books & Stationery",
//       photo: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400",
//     },
//     {
//       name: "Desktop Pen Holder Organizer",
//       description: "Bamboo desk organizer with 6 compartments for pens, scissors, and small office supplies.",
//       price: 21.99,
//       category: "Books & Stationery",
//       photo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
//     },
//     {
//       name: "Bestselling Fiction Novel Collection",
//       description: "Box set of 5 award-winning contemporary novels. Paperback editions with author interviews.",
//       price: 54.99,
//       category: "Books & Stationery",
//       photo: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
//     },
//     {
//       name: "Washi Tape Set 20 Rolls",
//       description: "Decorative washi tape in assorted patterns and widths. Perfect for journaling and crafts.",
//       price: 14.99,
//       category: "Books & Stationery",
//       photo: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400",
//     },
//     {
//       name: "Personal Planner 2025 Weekly",
//       description: "Undated weekly planner with habit tracker, goal setting pages, and premium 100gsm paper.",
//       price: 26.99,
//       category: "Books & Stationery",
//       photo: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400",
//     },
//     {
//       name: "Calligraphy Brush Pen Set",
//       description: "Set of 12 dual-tip brush pens with flexible nibs. Water-based ink in assorted colors.",
//       price: 16.99,
//       category: "Books & Stationery",
//       photo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
//     },
//   ];

//   await prisma.product.createMany({ data: productData });
//   console.log(`  Created ${productData.length} Products`);

//   // 6. Seed Users — 30
//   console.log("Seeding Users...");
//   const allFirstNames = [...englishFirstNamesMale, ...englishFirstNamesFemale, ...frenchFirstNamesMale, ...frenchFirstNamesFemale];
//   const allLastNames = [...lastNames, ...frenchLastNames];
//   const allAvatarUrls = [...avatarUrlsMale, ...avatarUrlsFemale];
//   const allCountries = [...new Set(countries)];

//   const userData: { name: string; email: string; password: string; avator: string }[] = [];
//   const usedEmails = new Set<string>();

//   for (let i = 0; i < 30; i++) {
//     const firstName = randomPick(allFirstNames);
//     const lastName = randomPick(allLastNames);
//     const fullName = `${firstName} ${lastName}`;
//     let email = randomEmail(fullName);

//     while (usedEmails.has(email)) {
//       email = randomEmail(fullName + Math.random());
//     }
//     usedEmails.add(email);

//     userData.push({
//       name: fullName,
//       email,
//       password: "hashed_password_placeholder",
//       avator: randomPick(allAvatarUrls),
//     });
//   }

//   await prisma.user.createMany({ data: userData });
//   console.log(`  Created ${userData.length} Users`);

//   console.log("Seeding complete!");
//   console.log("Summary:");
//   console.log(`  FirstNames: ${firstNameData.length}`);
//   console.log(`  LastNames:  ${lastNameData.length}`);
//   console.log(`  Locations:  ${locationData.length}`);
//   console.log(`  Avatars:    ${avatarData.length}`);
//   console.log(`  Products:   ${productData.length}`);
//   console.log(`  Users:      ${userData.length}`);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error("Seed error:", e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
