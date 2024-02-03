import PreviewCard from "./component/PreviewCard";
function App() {
  const category = "PERFUME";
  const heading = "Gabrielle Essence Eau De Parfum";
  const copy =
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.";
  const price = 149.99;
  const actualPrice = 169.99;
  return (
    <PreviewCard
      category={category}
      heading={heading}
      copy={copy}
      price={price}
      actualPrice={actualPrice}
    />
  );
}

export default App;
