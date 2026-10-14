export const company = {
  brand: "Simply Makhana",
  name: "Shree Balaji Organics",
  address:
    "116/1 Andul Road, Ground Floor, opposite Bank of Baroda, Botanical Garden, Howrah 711103",
  email: "info@shreebalajiorganics.com",
  phone: "6289339800",
  phoneIntl: "916289339800",
  phoneDisplay: "+91 62893 39800",
  mapQuery:
    "116/1 Andul Road, opposite Bank of Baroda, Botanical Garden, Howrah 711103",
  hours: "Monday to Saturday, 10:00 am – 7:00 pm",
  instagram: "https://www.instagram.com/shreebalajiorganics_/",
  facebook: "https://www.facebook.com/share/19kKcFKApw/",
  linkedin: "https://www.linkedin.com/in/shree-balaji-organics-a2722341a",
};

export const journey = [
  {
    step: "01",
    title: "The pond",
    text: "Phool makhana is a water crop. Ours is popped from Mithila’s ponds: white, light, and large enough to pack as jumbo.",
  },
  {
    step: "02",
    title: "The Howrah house",
    text: "Shree Balaji Organics packs that crop as Simply Makhana at 116/1 Andul Road, opposite Bank of Baroda. The address on this site is the ground-floor works.",
  },
  {
    step: "03",
    title: "The biscuit",
    text: "We milled the same nut with millet into a cookie. The pack says 0g added sugar. Wheat and milk are named, because a biscuit should say what is in it.",
  },
  {
    step: "04",
    title: "The next shelf",
    text: "Launching flavour makhana in different flavours for your better snacking purpose.",
  },
  {
    step: "05",
    title: "The counter",
    text: "People still walk in at Botanical Garden, or write to the WhatsApp and email printed on the pack. The reply comes from this house.",
  },
];

export const whyUs = [
  {
    title: "A door you can find",
    text: "Opposite Bank of Baroda, Botanical Garden, Howrah. Many pouches only name a distant warehouse. This one has a counter.",
  },
  {
    title: "The panel matches the page",
    text: "Protein, fibre, fat, and sugar here are the figures from our plain makhana panel. We do not keep a prettier set of numbers for the internet.",
  },
  {
    title: "One flavour, said plainly",
    text: "The sugar-free cookie says no added sugar, and it also says wheat and milk. Flavoured makhana still to launch will be named the same way.",
  },
  {
    title: "The number on the pack",
    text: "Customer care is +91 62893 39800. An enquiry on this site reaches that WhatsApp and info@shreebalajiorganics.com.",
  },
];

export const whyProducts = [
  {
    title: "Plain makhana",
    text: "Per 100g: 9.63g protein, 7.26g fibre, 0.10g fat, and 0g total sugar. A dry white pop for a bowl beside chai.",
  },
  {
    title: "Makhana cookies",
    text: "Both boxes are makhana and millet, 100g, with a 50g serving at 240 kcal. The sugar-free box uses oligofructose and says no added sugar. The other box lists sugar in the ingredients.",
  },
  {
    title: "Flavoured makhana",
    text: "Launching flavour makhana in different flavours for your better snacking purpose.",
  },
];

export const plainNutrition = {
  title: "Per 100g",
  rows: [
    ["Energy", "354.14 kcal"],
    ["Dietary fibre", "7.26 g"],
    ["Carbohydrate", "78.68 g"],
    ["Potassium", "292 mg"],
    ["Protein", "9.63 g"],
    ["Sodium", "3 mg"],
    ["Fat", "0.10 g"],
    ["Total sugar", "0 g"],
  ],
};

export const cookieNutrition = {
  title: "Per serving · 5 pieces (50g)",
  note: "A 100g pack has 2 servings. Figures are taken from our cookie pack.",
  rows: [
    ["Calories", "240"],
    ["Total fat", "9 g"],
    ["Saturated fat", "0 g"],
    ["Trans fat", "0 g"],
    ["Cholesterol", "0 mg"],
    ["Sodium", "95 mg"],
    ["Total carbohydrate", "36 g"],
    ["Dietary fibre", "5 g"],
    ["Added sugars", "0 g"],
    ["Protein", "4 g"],
  ],
};

export const cookieIngredients =
  "Makhana flour, millet flour, wheat flour, coconut powder, milk powder, butter, salt, oligofructose, raising agent (500(ii)).";

export const cookieSugarIngredients =
  "Makhana flour, millet flour, wheat flour, coconut powder, milk powder, butter, salt, sugar, raising agent (500(ii)).";

export const categories = [
  {
    slug: "premium-makhana",
    name: "Makhana",
    tagline: "Packed pouches, loose 1 kg by sutta, and bulk grades.",
    image: "/images/bowl-wood.jpg",
  },
  {
    slug: "makhana-cookies",
    name: "Makhana Cookies",
    tagline: "Two 100g boxes: makhana and millet cookies, and the sugar-free box.",
    image: "/images/cookie-sf-front.jpg",
  },
  {
    slug: "launching-soon",
    name: "Launching soon",
    tagline: "Launching flavour makhana in different flavours for your better snacking purpose.",
    image: "/images/soon-flavours.jpg",
  },
];

export const launchingLine =
  "Launching flavour makhana in different flavours for your better snacking purpose.";

const plainNote =
  "Plain phool makhana. 100% natural fox nuts, with the nutrition printed on our plain makhana panel.";

export const products = [
  {
    id: "makhana-250",
    category: "premium-makhana",
    name: "Makhana",
    weight: "250 g",
    mrp: 550,
    price: 430,
    image: "/images/pouch.jpg",
    badge: "250 g",
    featured: true,
    blurb: "A 250g pouch of plain phool makhana. MRP ₹550, selling price ₹430.",
    points: ["250 g", "Plain phool makhana", "MRP ₹550"],
    nutrition: plainNutrition,
    details: [plainNote, "Selling price ₹430."],
  },
  {
    id: "makhana-200",
    category: "premium-makhana",
    name: "Makhana",
    weight: "200 g",
    mrp: 499,
    price: 349,
    image: "/images/pouch-mithila.jpg",
    badge: "200 g",
    featured: true,
    blurb: "A 200g pouch of plain phool makhana. MRP ₹499, selling price ₹349.",
    points: ["200 g", "Plain phool makhana", "MRP ₹499"],
    nutrition: plainNutrition,
    details: [plainNote, "Selling price ₹349."],
  },
  {
    id: "loose-4",
    category: "premium-makhana",
    name: "Loose Makhana",
    weight: "1 kg · 4 Sutta",
    price: 750,
    image: "/images/bowl-wood.jpg",
    badge: "Loose · 1 kg",
    blurb: "Loose makhana, 1 kg, 4 Sutta grade.",
    points: ["1 kg", "4 Sutta", "Loose"],
    nutrition: plainNutrition,
    details: [plainNote, "4 Sutta is the size grade of this 1 kg lot."],
  },
  {
    id: "loose-5",
    category: "premium-makhana",
    name: "Loose Makhana",
    weight: "1 kg · 5 Sutta",
    price: 1200,
    image: "/images/bowl-glass.jpg",
    badge: "Loose · 1 kg",
    blurb: "Loose makhana, 1 kg, 5 Sutta grade.",
    points: ["1 kg", "5 Sutta", "Loose"],
    nutrition: plainNutrition,
    details: [plainNote, "5 Sutta is the size grade of this 1 kg lot."],
  },
  {
    id: "loose-6",
    category: "premium-makhana",
    name: "Loose Makhana",
    weight: "1 kg · 6 Sutta",
    price: 1150,
    image: "/images/hero-makhana.jpg",
    badge: "Loose · 1 kg",
    featured: true,
    blurb: "Loose makhana, 1 kg, 6 Sutta grade.",
    points: ["1 kg", "6 Sutta", "Loose"],
    nutrition: plainNutrition,
    details: [plainNote, "6 Sutta is the size grade of this 1 kg lot."],
  },
  {
    id: "bulk-normal-4",
    category: "premium-makhana",
    name: "Bulk Makhana · Normal",
    weight: "4 Sutta",
    price: 700,
    image: "/images/cat-premium.jpg",
    badge: "Bulk",
    blurb: "Normal bulk grade, 4 Sutta. Rate ₹700.",
    points: ["Bulk", "Normal", "4 Sutta"],
    nutrition: plainNutrition,
    details: [plainNote, "Bulk rate for normal 4 Sutta."],
  },
  {
    id: "bulk-normal-5",
    category: "premium-makhana",
    name: "Bulk Makhana · Normal",
    weight: "5 Sutta",
    price: 850,
    image: "/images/life-linen.jpg",
    badge: "Bulk",
    blurb: "Normal bulk grade, 5 Sutta. Rate ₹850.",
    points: ["Bulk", "Normal", "5 Sutta"],
    nutrition: plainNutrition,
    details: [plainNote, "Bulk rate for normal 5 Sutta."],
  },
  {
    id: "bulk-normal-6",
    category: "premium-makhana",
    name: "Bulk Makhana · Normal",
    weight: "6 Sutta",
    price: 1050,
    image: "/images/lifestyle.jpg",
    badge: "Bulk",
    blurb: "Normal bulk grade, 6 Sutta. Rate ₹1,050.",
    points: ["Bulk", "Normal", "6 Sutta"],
    nutrition: plainNutrition,
    details: [plainNote, "Bulk rate for normal 6 Sutta."],
  },
  {
    id: "bulk-handpicked-4",
    category: "premium-makhana",
    name: "Bulk Makhana · Handpicked",
    weight: "4 Sutta",
    price: 750,
    image: "/images/life-hands.jpg",
    badge: "Handpicked",
    blurb: "Handpicked bulk grade, 4 Sutta. Rate ₹750.",
    points: ["Bulk", "Handpicked", "4 Sutta"],
    nutrition: plainNutrition,
    details: [plainNote, "Bulk rate for handpicked 4 Sutta."],
  },
  {
    id: "bulk-handpicked-5",
    category: "premium-makhana",
    name: "Bulk Makhana · Handpicked",
    weight: "5 Sutta",
    price: 930,
    image: "/images/life-breakfast.jpg",
    badge: "Handpicked",
    blurb: "Handpicked bulk grade, 5 Sutta. Rate ₹930.",
    points: ["Bulk", "Handpicked", "5 Sutta"],
    nutrition: plainNutrition,
    details: [plainNote, "Bulk rate for handpicked 5 Sutta."],
  },
  {
    id: "bulk-handpicked-6",
    category: "premium-makhana",
    name: "Bulk Makhana · Handpicked",
    weight: "6 Sutta",
    price: 1120,
    image: "/images/bowl-wood.jpg",
    badge: "Handpicked",
    featured: true,
    blurb: "Handpicked bulk grade, 6 Sutta. Rate ₹1,120.",
    points: ["Bulk", "Handpicked", "6 Sutta"],
    nutrition: plainNutrition,
    details: [plainNote, "Bulk rate for handpicked 6 Sutta."],
  },
  {
    id: "cookies-100",
    category: "makhana-cookies",
    name: "Makhana Cookies",
    weight: "100 g",
    mrp: 60,
    price: 58,
    image: "/images/cookie-box-front.jpg",
    badge: "100 g",
    featured: true,
    blurb: "Makhana and millet cookies, 100g. This box lists sugar in the ingredients. MRP ₹60, selling price ₹58.",
    points: ["High fibre", "100% veg", "High in protein", "Rich in antioxidant", "Low calorie", "Zero cholesterol"],
    ingredients: cookieSugarIngredients,
    allergens: "Contains wheat and milk.",
    nutrition: {
      ...cookieNutrition,
      note: "A 100g pack has 2 servings. The nutrition panel says 0g added sugars. The ingredients on this box include sugar.",
    },
    gallery: ["/images/cookie-box-front.jpg", "/images/cookie-icons.jpg", "/images/cookie-back.jpg"],
    details: ["Selling price ₹58. Best used within 9 months of the packing date."],
  },
  {
    id: "cookies-sf-100",
    category: "makhana-cookies",
    name: "Makhana Cookies (Sugar Free)",
    weight: "100 g",
    mrp: 70,
    price: 68,
    image: "/images/cookie-sf-front.jpg",
    badge: "Sugar free",
    featured: true,
    blurb: "Sugar-free makhana and millet cookies, 100g. The box says no added sugar. MRP ₹70, selling price ₹68.",
    points: [
      "No added sugar",
      "High fibre",
      "High in protein",
      "Rich in antioxidant",
      "Low calorie",
      "Enriched with millets",
      "Goodness of makhana",
      "Weight management",
      "Good for health",
    ],
    ingredients: cookieIngredients,
    allergens: "Contains wheat and milk.",
    nutrition: {
      ...cookieNutrition,
      note: "A 100g pack has 2 servings. This sugar-free box uses oligofructose and says no added sugar.",
    },
    gallery: [
      "/images/cookie-sf-front.jpg",
      "/images/cookie-sf-life.jpg",
      "/images/cookie-sf-icons.jpg",
      "/images/cookie-sf-back.jpg",
    ],
    details: ["Selling price ₹68. Best used within 9 months of the packing date."],
  },
  {
    id: "soon-flavours",
    category: "launching-soon",
    name: "Flavoured Makhana",
    weight: "Flavoured",
    upcoming: true,
    image: "/images/soon-flavours.jpg",
    badge: "Launching soon",
    blurb: "Launching flavour makhana in different flavours for your better snacking purpose.",
    points: ["Flavoured phool makhana", "Launching soon"],
    details: [
      "Launching flavour makhana in different flavours for your better snacking purpose.",
    ],
  },
  {
    id: "soon-macaroni",
    category: "launching-soon",
    name: "Macaroni Pasta",
    weight: "Pasta",
    upcoming: true,
    image: "/images/soon-macaroni.jpg",
    badge: "Launching soon",
    blurb: "Makhana macaroni. On the way, not on sale yet.",
    points: ["Makhana macaroni", "Launching soon"],
    gallery: ["/images/soon-macaroni.jpg", "/images/soon-pasta-pack.jpg"],
  },
  {
    id: "soon-pasta",
    category: "launching-soon",
    name: "Pasta",
    weight: "Pasta",
    upcoming: true,
    image: "/images/soon-pasta-bowl.jpg",
    badge: "Launching soon",
    blurb: "Makhana pasta. On the way, not on sale yet.",
    points: ["Makhana pasta", "Launching soon"],
  },
  {
    id: "soon-papad",
    category: "launching-soon",
    name: "Makhana Papad",
    weight: "Papad",
    upcoming: true,
    image: "/images/soon-papad.jpg",
    badge: "Launching soon",
    blurb: "Makhana papad. On the way, not on sale yet.",
    points: ["Makhana papad", "Launching soon"],
  },
  {
    id: "soon-chips",
    category: "launching-soon",
    name: "Makhana Chips",
    weight: "Chips",
    upcoming: true,
    image: "/images/soon-chips.jpg",
    badge: "Launching soon",
    blurb: "Makhana chips. On the way, not on sale yet.",
    points: ["Makhana chips", "Launching soon"],
  },
  {
    id: "soon-kheer",
    category: "launching-soon",
    name: "Makhana Kheer",
    weight: "Kheer",
    upcoming: true,
    image: "/images/soon-kheer.jpg",
    badge: "Launching soon",
    blurb: "Makhana kheer. On the way, not on sale yet.",
    points: ["Makhana kheer", "Launching soon"],
  },
  {
    id: "soon-atta",
    category: "launching-soon",
    name: "Makhana Atta",
    weight: "Atta",
    upcoming: true,
    image: "/images/soon-flour.jpg",
    badge: "Launching soon",
    blurb: "Makhana atta. On the way, not on sale yet.",
    points: ["Makhana atta", "Launching soon"],
  },
];

export const instagramReviews = [
  { name: "Meera S.", place: "Kolkata", image: "/images/life-chai.jpg", text: "The jumbo makhana stays crisp on the fourth day. I keep a bowl beside the evening chai and it actually gets finished." },
  { name: "Arjun M.", place: "Howrah", image: "/images/cookies-front.jpg", text: "Ordered the sugar-free cookies for my father. They taste like a biscuit he is happy to pick up, and the pack is honest about wheat and milk." },
  { name: "Nisha P.", place: "Bhubaneswar", image: "/images/pouch-mithila.jpg", text: "Mithila pond makhana is plump. I did not find hard centres, and the pouch reached me without crushed dust at the bottom." },
  { name: "Rahul D.", place: "Delhi", image: "/images/prod-peri-peri.jpg", text: "Peri peri is the pouch I finish first. The chilli is bright and the nut underneath is still dry and loud." },
  { name: "Fatima K.", place: "Hyderabad", image: "/images/cookies-angle.jpg", text: "The cookie box was packed tightly. Nothing arrived as crumbs, which is rare with a biscuit that has a short texture." },
  { name: "Vivek R.", place: "Mumbai", image: "/images/bowl-wood.jpg", text: "I have stopped roasting supermarket makhana. These are clean enough to eat from the pouch on a work call." },
  { name: "Ananya G.", place: "Bengaluru", image: "/images/prod-coconut-cookie.jpg", text: "Coconut cookies with tea, and I did not want a second sweet afterwards. That is exactly why I bought them." },
  { name: "Suresh I.", place: "Patna", image: "/images/life-linen.jpg", text: "This tastes like the makhana we ate growing up. Large, white, and not perfumed with anything." },
  { name: "Priya L.", place: "Pune", image: "/images/prod-hamper.jpg", text: "Sent the festive duo to my sister. She called about the cookie before she mentioned the ribbon, which is the right order." },
  { name: "Kabir T.", place: "Jaipur", image: "/images/prod-salt.jpg", text: "Himalayan salt makhana is my desk snack. One flavour, no oily fingers, and the 100g pack is the right size." },
  { name: "Divya N.", place: "Chennai", image: "/images/prod-chivda.jpg", text: "Makhana chivda has taken the place of our fried mixture. It still feels like a treat with filter coffee." },
  { name: "Imran Q.", place: "Lucknow", image: "/images/prod-ghee.jpg", text: "Ghee roast is rich without sitting heavy. I ordered the 150g again the same week." },
  { name: "Rhea B.", place: "Siliguri", image: "/images/prod-mini-cookie.jpg", text: "The mini cookies vanished at home. I liked that the tin still says no added sugar, in plain words." },
  { name: "Manoj H.", place: "Ranchi", image: "/images/pouch.jpg", text: "The family pouch is the one that makes sense for us. A bowl every evening, and the pops stay whole." },
  { name: "Tanya J.", place: "Ahmedabad", image: "/images/prod-kheer.jpg", text: "The kheer mix softened properly in milk. No raw flour taste, and I could sweeten it the way my mother does." },
  { name: "Omar F.", place: "Kochi", image: "/images/prod-chatpata.jpg", text: "Chatpata masala is properly tangy. I packed it for a train ride and it was the best thing in the bag." },
  { name: "Leela V.", place: "Varanasi", image: "/images/cat-cookies.jpg", text: "The fibre cookies are short and sandy, the way a good biscuit should be. They do not taste like a health bar." },
  { name: "Nikhil C.", place: "Indore", image: "/images/pack-contact.jpg", text: "I wrote from the website and the Howrah team replied with the 500g price and a packing date. Clear and quick." },
  { name: "Sara W.", place: "Darjeeling", image: "/images/prod-pudina.jpg", text: "Pudina makhana is cooling and crunchy. I eat it with buttermilk and the mint actually tastes like mint." },
  { name: "Deepak A.", place: "Asansol", image: "/images/prod-ladoo.jpg", text: "We used the ladoo mix for a puja plate. Guests asked which shop in Howrah had sent them." },
];

export const googleReviews = [
  { name: "Rina Banerjee", place: "Howrah", stars: 5, text: "Bought the cookie box after finding the address opposite Bank of Baroda. The biscuit was fresh, and the pack matches what they describe." },
  { name: "Amitava Dey", place: "Kolkata", stars: 5, text: "Plain makhana is large and white. I have stopped picking up the loose stock from the bazaar." },
  { name: "Shalini Mehta", place: "Mumbai", stars: 5, text: "The gift box arrived neatly, and the note I asked for was inside. Easy people to buy from." },
  { name: "Farhan Ali", place: "Hyderabad", stars: 5, text: "The no-added-sugar cookies are the first biscuits my mother has agreed to keep in her tin." },
  { name: "Pooja Kulkarni", place: "Bengaluru", stars: 5, text: "The 1kg pouch is consistent. Every handful is puffed, not a mix of tiny hard seeds." },
  { name: "Joseph P.", place: "Kochi", stars: 5, text: "Ingredients on the cookie are clear. Wheat and milk are marked, which is what I needed to see." },
  { name: "Namrata Singh", place: "Delhi", stars: 4, text: "Peri peri and the plain pouch are both excellent. I would have liked a slightly larger salt pack, and I have asked them for one." },
  { name: "Bikash Roy", place: "Howrah", stars: 5, text: "The shop side is easy to visit at Botanical Garden. They explained the plain makhana and the cookie without rushing." },
];

export function inr(n) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(id) {
  return products.find((p) => p.id === id);
}

export function productsByCategory(slug) {
  return products.filter((p) => p.category === slug);
}

export function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function whatsappLink(text) {
  return `https://wa.me/${company.phoneIntl}?text=${encodeURIComponent(text)}`;
}

export function orderMessage(product, qty = 1) {
  return [
    "Hello Simply Makhana,",
    `I would like to order ${product.name} (${product.weight}) × ${qty}.`,
    product.mrp
      ? `MRP: ${inr(product.mrp)}. Selling price: ${inr(product.price)}.`
      : `Listed price: ${inr(product.price)}.`,
    "Please confirm availability and delivery.",
  ].join("\n");
}
