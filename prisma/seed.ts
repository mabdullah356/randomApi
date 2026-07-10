import { PrismaClient, Gender } from "@prisma/client";

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL,
});

const englishFirstNamesMale = [
  "James", "Oliver", "William", "Henry", "Thomas",
  "Edward", "Charles", "George", "Arthur", "Frederick",
  "Albert", "Ernest", "Alfred", "Herbert", "Arthur",
  "Walter", "Herbert", "Percy", "Cecil", "Reginald",
  "Archibald", "Barnabas", "Clement", "Dominic", "Edmund",
  "Felix", "Gerald", "Harold", "Irving", "Julian",
];

const englishFirstNamesFemale = [
  "Emma", "Olivia", "Charlotte", "Amelia", "Isla",
  "Mia", "Luna", "Harper", "Evelyn", "Aria",
  "Eleanor", "Elizabeth", "Victoria", "Alice", "Diana",
  "Catherine", "Margaret", "Florence", "Grace", "Hazel",
  "Iris", "Josephine", "Matilda", "Penelope", "Rosalind",
  "Sophia", "Violet", "Winifred", "Beatrice", "Clara",
];

const frenchFirstNamesMale = [
  "Louis", "Henri", "Pierre", "Jacques", "François",
  "Jean", "Antoine", "Marcel", "André", "René",
  "Émile", "Claude", "Georges", "Maurice", "Lucien",
  "Gaston", "Renault", "Sébastien", "Dominique", "Laurent",
  "Philippe", "Gabriel", "Matthieu", "Nicolas", "Thierry",
  "Vincent", "Arnaud", "Christophe", "Didier", "Olivier",
];

const frenchFirstNamesFemale = [
  "Marie", "Camille", "Juliette", "Colette", "Madeleine",
  "Vivienne", "Renée", "Élise", "Brigitte", "Céline",
  "Hélène", "Josette", "Madeleine", "Monique", "Nathalie",
  "Simone", "Sylvie", "Thérèse", "Valérie", "Véronique",
  "Adèle", "Bérénice", "Clémence", "Delphine", "Émilienne",
  "Françoise", "Geneviève", "Isabelle", "Joséphine", "Marguerite",
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones",
  "Davis", "Miller", "Wilson", "Moore", "Taylor",
  "Anderson", "Thomas", "Jackson", "White", "Harris",
  "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
  "Clark", "Rodriguez", "Lewis", "Lee", "Walker",
  "Hall", "Allen", "Young", "King", "Wright",
];

const frenchLastNames = [
  "Dupont", "Martin", "Bernard", "Dubois", "Moreau",
  "Laurent", "Lefebvre", "Mercier", "Fournier", "Lambert",
  "Bonnet", "François", "Martínez", "Girard", "André",
  "Lefèvre", "David", "Bertrand", "Rousseau", "Morel",
  "Simon", "Laurent", "Leduc", "Fontaine", "Chevalier",
  "François", "Garnier", "Arnaud", "Perrin", "Duval",
];

const cities = [
  "New York", "London", "Paris", "Berlin", "Tokyo",
  "Sydney", "Toronto", "Mumbai", "Cairo", "Rio de Janeiro",
  "Amsterdam", "Vienna", "Brussels", "Zurich", "Stockholm",
  "Oslo", "Helsinki", "Copenhagen", "Dublin", "Edinburgh",
  "Barcelona", "Madrid", "Lisbon", "Rome", "Milan",
  "Prague", "Warsaw", "Budapest", "Bucharest", "Athens",
];

const states = [
  "New York", "California", "Texas", "Florida", "Illinois",
  "England", "Île-de-France", "Bavaria", "Tokyo Prefecture", "New South Wales",
  "Ontario", "Maharashtra", "Cairo Governorate", "Rio de Janeiro", "North Holland",
  "Vienna", "Brussels-Capital", "Zurich", "Stockholm County", "Oslo",
  "Uusimaa", "Capital Region", "Leinster", "Edinburgh", "Catalonia",
  "Community of Madrid", "Lisbon District", "Lazio", "Lombardy", "Prague",
];

const countries = [
  "United States", "United Kingdom", "France", "Germany", "Japan",
  "Australia", "Canada", "India", "Egypt", "Brazil",
  "Netherlands", "Austria", "Belgium", "Switzerland", "Sweden",
  "Norway", "Finland", "Denmark", "Ireland", "United Kingdom",
  "Spain", "Spain", "Portugal", "Italy", "Italy",
  "Czech Republic", "Poland", "Hungary", "Romania", "Greece",
];

const avatarUrlsMale = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/men/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/men/13.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/men/15.jpg",
];

const avatarUrlsFemale = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/women/7.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://randomuser.me/api/portraits/women/9.jpg",
  "https://randomuser.me/api/portraits/women/10.jpg",
  "https://randomuser.me/api/portraits/women/11.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/women/13.jpg",
  "https://randomuser.me/api/portraits/women/14.jpg",
  "https://randomuser.me/api/portraits/women/15.jpg",
];

function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomEmail(name: string): string {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "protonmail.com"];
  return `${name.toLowerCase().replace(/[^a-z]/g, "")}${Math.floor(Math.random() * 999)}@${randomPick(domains)}`;
}

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.user.deleteMany();
  await prisma.firstName.deleteMany();
  await prisma.lastName.deleteMany();
  await prisma.location.deleteMany();
  await prisma.avatarPool.deleteMany();

  // 1. Seed FirstNames — 30 male, 30 female (English + French)
  console.log("Seeding FirstNames...");
  const firstNameData: { name: string; gender: Gender }[] = [];

  for (let i = 0; i < 15; i++) {
    firstNameData.push({ name: englishFirstNamesMale[i], gender: Gender.MALE });
  }
  for (let i = 0; i < 15; i++) {
    firstNameData.push({ name: frenchFirstNamesMale[i], gender: Gender.MALE });
  }
  for (let i = 0; i < 15; i++) {
    firstNameData.push({ name: englishFirstNamesFemale[i], gender: Gender.FEMALE });
  }
  for (let i = 0; i < 15; i++) {
    firstNameData.push({ name: frenchFirstNamesFemale[i], gender: Gender.FEMALE });
  }

  await prisma.firstName.createMany({ data: firstNameData });
  console.log(`  Created ${firstNameData.length} FirstNames`);

  // 2. Seed LastNames — 30 (English + French)
  console.log("Seeding LastNames...");
  const lastNameData: { name: string }[] = [];
  for (let i = 0; i < 15; i++) {
    lastNameData.push({ name: lastNames[i] });
  }
  for (let i = 0; i < 15; i++) {
    lastNameData.push({ name: frenchLastNames[i] });
  }

  await prisma.lastName.createMany({ data: lastNameData });
  console.log(`  Created ${lastNameData.length} LastNames`);

  // 3. Seed Locations — 30
  console.log("Seeding Locations...");
  const locationData: { city: string; state: string; country: string }[] = [];
  for (let i = 0; i < 30; i++) {
    locationData.push({
      city: cities[i],
      state: states[i],
      country: countries[i],
    });
  }

  await prisma.location.createMany({ data: locationData });
  console.log(`  Created ${locationData.length} Locations`);

  // 4. Seed AvatarPool — 30 (15 male, 15 female)
  console.log("Seeding AvatarPool...");
  const avatarData: { gender: Gender; url: string }[] = [];
  for (let i = 0; i < 15; i++) {
    avatarData.push({ gender: Gender.MALE, url: avatarUrlsMale[i] });
  }
  for (let i = 0; i < 15; i++) {
    avatarData.push({ gender: Gender.FEMALE, url: avatarUrlsFemale[i] });
  }

  await prisma.avatarPool.createMany({ data: avatarData });
  console.log(`  Created ${avatarData.length} Avatars`);

  // 5. Seed Users — 30
  console.log("Seeding Users...");
  const allFirstNames = [...englishFirstNamesMale, ...englishFirstNamesFemale, ...frenchFirstNamesMale, ...frenchFirstNamesFemale];
  const allLastNames = [...lastNames, ...frenchLastNames];
  const allAvatarUrls = [...avatarUrlsMale, ...avatarUrlsFemale];
  const allCountries = [...new Set(countries)];

  const userData: { name: string; email: string; password: string; avator: string }[] = [];
  const usedEmails = new Set<string>();

  for (let i = 0; i < 30; i++) {
    const firstName = randomPick(allFirstNames);
    const lastName = randomPick(allLastNames);
    const fullName = `${firstName} ${lastName}`;
    let email = randomEmail(fullName);

    while (usedEmails.has(email)) {
      email = randomEmail(fullName + Math.random());
    }
    usedEmails.add(email);

    userData.push({
      name: fullName,
      email,
      password: "hashed_password_placeholder",
      avator: randomPick(allAvatarUrls),
    });
  }

  await prisma.user.createMany({ data: userData });
  console.log(`  Created ${userData.length} Users`);

  console.log("Seeding complete!");
  console.log("Summary:");
  console.log(`  FirstNames: ${firstNameData.length}`);
  console.log(`  LastNames:  ${lastNameData.length}`);
  console.log(`  Locations:  ${locationData.length}`);
  console.log(`  Avatars:    ${avatarData.length}`);
  console.log(`  Users:      ${userData.length}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Seed error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
