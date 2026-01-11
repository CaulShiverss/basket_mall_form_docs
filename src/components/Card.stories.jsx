import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    foto: { control: "text" },
    nombre: { control: "text" },
    children: { control: "text" }
  }
};

const Template = (args) => <Card {...args} />;

export const Basico = Template.bind({});
Basico.args = {
  foto: "https://spalding-basketball.com/cdn/shop/products/spalding-fiba-varsity-tf-150-rubber-indooroutdoor-basketball-941958.jpg?v=1754024368",
  nombre: "Balón Spalding",
  children: "Balón oficial de baloncesto Spalding, ideal para interiores y exteriores."
};

export const DescripcionLarga = Template.bind({});
DescripcionLarga.args = {
  foto: "https://dam.elcorteingles.es/producto/www-001017725008183-03.jpg?impolicy=Resize&width=1200&height=1200",
  nombre: "Giannis Immortality 4",
  children:
    "Zapatillas Nike inspiradas en Giannis Antetokounmpo, con excelente amortiguación. Pensadas para el juego exterior en pistas de cemento o ladrillo. Perfecto agarre del tobillo para jugadores interiores."
};

export const SinFoto = Template.bind({});
SinFoto.args = {
  foto: "",
  nombre: "Canasta Profesional",
  children:
    "Canasta de baloncesto profesional con base móvil y tablero de acrílico."
};
