//Blog 1:
import blog1_1 from "../img/blogs/blog1-1.png";
import blog1_2 from "../img/blogs/blog1-2.png";
//Blog 2:
import blog2_1 from "../img/blogs/blog2-1.png";
import blog2_2 from "../img/blogs/blog2-2.png";
//Blog3
import blog3 from "../img/blogs/blog3.svg";
import blog4 from "../img/blogs/blog4.svg";
import blog5 from "../img/blogs/blog5.svg";

const blogs = [
  {
    _id: "1",
    title: "Imágenes responsive en ReactJS",
    date: "27 de Diciembre",
    imagePrincipal: blog1_1,
    textPrincipal:
    "Trabajar con imágenes 🌄 de fondo a pantalla completa puede resultar complicado. A menudo encuentro que muy pocas imágenes de pantalla completa 💻 se ven bien tanto en orientación horizontal como vertical, así que me gusta usar diferentes 🔀 imágenes dependiendo del ancho de la ventana gráfica. Por lo general, dejaría que las consultas de medios en CSS manejen la capacidad de respuesta del sitio, pero a veces las URL de imágenes solo están disponibles en JavaScript, por ejemplo, si se cargan a través de una solicitud Ajax. Es ",
    textSecundario:
      "Ante estos problemas 🤯 en una aplicación React, decidí probar la nueva API Hooks para solucionarlos. ¡Con React Hooks, podemos suscribirnos a los cambios en el tamaño de la ventana gráfica y configurar la imagen de fondo adecuada en función del ancho de la pantalla! 🎉En mi aplicación React, elegí una imagen de fondo adaptada para pantallas de escritorio y otra adecuada para dispositivos móviles 📲, según este diseño.",
    textTerciario:
      "Ten en cuenta que este es un componente funcional, ya que los Hooks no funcionan con componentes de clase. Las pantallas de menos de 650 px usarán la imagen adaptada para dispositivos móviles. Las pantallas más amplias utilizarán la imagen del escritorio. Aquí os dejo el código de ejemplo: 😏➡️",
    imageSecundaria: blog1_2,
    link: 'https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f'
  },
  {
    _id: "2",
    title: "SweetAlert2",
    date: "29 de Diciembre",
    imagePrincipal: blog2_1,
    textPrincipal:
      "Hoy quiero hablaros de librería SweetAlert2. Es una librería javascript que te permite crear ventanas emergentes con un diseño profesional y fácil de personalizar e implementar. Y lo mejor de todo es que es compatible con la mayoría de los navegadores web como: Edge, Chrome, Firefox, Safari, entre otros más. ✌🏻 muy sencilla de utilizar y que queda genial para mostrar alertas en tus proyectos❗️ Con un poquito de código consigues un resultado muy chulo. 😏",
    textSecundario:
      "Ante estos problemas 🤯 en una aplicación React, decidí probar la nueva API Hooks para solucionarlos. ¡Con React Hooks, podemos suscribirnos a los cambios en el tamaño de la ventana gráfica y configurar la imagen de fondo adecuada en función del ancho de la pantalla! 🎉En mi aplicación React, elegí una imagen de fondo adaptada para pantallas de escritorio y otra adecuada para dispositivos móviles 📲, según este diseño.",
    textTerciario:
      "Ten en cuenta que este es un componente funcional, ya que los Hooks no funcionan con componentes de clase. Las pantallas de menos de 650 px usarán la imagen adaptada para dispositivos móviles. Las pantallas más amplias utilizarán la imagen del escritorio. Aquí os dejo el código de ejemplo: 😏➡️",
    imageSecundaria: blog2_2,
    link: 'https://sweetalert2.github.io/'
  },
  {
    _id: "3",
    title: "Blog3",
    date: "27 de Diciembre",
    imagePrincipal: blog3,
    textPrincipal: "METER textPrincipalO",
  },
  {
    _id: "4",
    title: "Blog4",
    date: "27 de Diciembre",
    imagePrincipal: blog4,
    textPrincipal: "METER textPrincipalO",
  },
  {
    _id: "5",
    title: "Blog5",
    date: "27 de Diciembre",
    imagePrincipal: blog5,
    textPrincipal: "METER TEXTO",
  },
];

export default blogs;
