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
  foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49q2IH6MCj-DC0zl8INPrZb4rIrXyCWwxIHCyWIlX3V9E42BYi6GGFIqaB_TicxUGqWdEIyf2UVTfGaCw1WKRZIJAVOcCWPybsAUVoA&s=10",
  nombre: "Bradd Pitt",
  children: "Actor con amplia experiencia en cine independiente."
};

export const BiografiaLarga = Template.bind({});
BiografiaLarga.args = {
  foto: "https://7days.ru/upload/images/d40/682d2fd70fb45eeebe76170ff6faf.jpg",
  nombre: "Robert Johnson",
  children:
    "Actor veterano con más de 40 años de trayectoria. Ha participado en más de 60 películas y ha sido nominado en diversas ocasiones por su contribución a la industria cinematográfica. Su versatilidad lo ha llevado a interpretar desde papeles dramáticos hasta personajes cómicos inolvidables."
};

export const SinFoto = Template.bind({});
SinFoto.args = {
  foto: "",
  nombre: "Mr.Sin Foto",
  children:
    "Actor veterano con más de 40 años de trayectoria. Ha participado en más de 60 películas y ha sido nominado en diversas ocasiones por su contribución a la industria cinematográfica. Su versatilidad lo ha llevado a interpretar desde papeles dramáticos hasta personajes cómicos inolvidables."
};
