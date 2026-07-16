export const CONTACT = {
  brand: "Vencodex",
  email: "alfredoglb2020@gmail.com",
  whatsappNumber: "593991697973",
  phoneDisplay: "+593 991 697 973",
  whatsappMessage: "Hola Vencodex, tengo una idea y quiero ponerla en marcha.",
  github: "https://github.com/alfredoloai05",
  linkedin: "https://www.linkedin.com/in/alfredoloaiza/",
  location: "Ecuador · Proyectos globales",
};

export const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
export const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Quiero poner una idea en marcha - Vencodex")}&body=${encodeURIComponent("Hola Vencodex, tengo una idea y quiero contarles qué quiero lograr.")}`;
