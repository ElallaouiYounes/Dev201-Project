import TopSales from "./components/TopSales";

const productData = [
  {
    id: 1,
    name: "Intel Core i7 12700KF",
    price: "2500 DH",
    rating: 4.7,
    sold: "700+ sold",
    image:
      "public/images/Intel-Core-i5-11400F-2.6-GHz-4.4-GHz-SetupGame.jpg.png",
  },
  {
    id: 2,
    name: "ASUS Core i9 12900H",
    price: "7500 DH",
    rating: 4.8,
    sold: "800+ sold",
    image: "public/images/laptopsunder500-2048px-5452.png",
  },
  {
    id: 3,
    name: "Red Dead Redemption 2",
    price: "800 DH",
    rating: 4.6,
    sold: "400+ sold",
    image: "public/images/Red_Dead_Redemption_II09.webp",
  },
  {
    id: 4,
    name: "Alienware Gaming PC",
    price: "12500 DH",
    rating: 4.9,
    sold: "900+ sold",
    image: "public/images/images.png",
  },
  {
    id: 5,
    name: "Razer DeathAdder V2 Gaming Mouse",
    price: "550 DH",
    rating: 4.5,
    sold: "600+ sold",
    image: "public/images/Razer-DeathAdder-V2.jpeg",
  },
  {
    id: 6,
    name: "Corsair K70 RGB Gaming Keyboard",
    price: "1200 DH",
    rating: 4.7,
    sold: "500+ sold",
    image: "public/images/Corsair-K70-RGB.webp",
  },
  {
    id: 7,
    name: "Samsung 970 EVO Plus SSD 1TB",
    price: "1400 DH",
    rating: 4.8,
    sold: "1000+ sold",
    image: "public/images/Samsung-970-EVO-Plus.webp",
  },
  {
    id: 8,
    name: "PlayStation 5",
    price: "8500 DH",
    rating: 4.9,
    sold: "1500+ sold",
    image: "public/images/PlayStation-5.jpeg",
  },
  {
    id: 9,
    name: "Nintendo Switch OLED",
    price: "4000 DH",
    rating: 4.6,
    sold: "700+ sold",
    image: "public/images/Nintendo-Switch-OLED.jpeg",
  },
  {
    id: 10,
    name: "Logitech G733 Wireless Headset",
    price: "900 DH",
    rating: 4.5,
    sold: "800+ sold",
    image: "public/images/Logitech-G733.jpeg",
  },
  {
    id: 11,
    name: "MSI RTX 3060 Ti Gaming X",
    price: "4200 DH",
    rating: 4.7,
    sold: "300+ sold",
    image: "public/images/MSI-RTX-3060-Ti.jpeg",
  },
  {
    id: 12,
    name: "Apple MacBook Pro 14-inch",
    price: "22000 DH",
    rating: 4.8,
    sold: "150+ sold",
    image: "public/images/Apple-MacBook-Pro-14.jpeg",
  },
];

function App() {
  return (
    <div>
      <TopSales productData={productData} />
    </div>
  );
}

export default App;
