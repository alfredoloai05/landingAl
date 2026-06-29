export const CONTACT = {
  brand: "AL Software Studio",
  owner: "Alfredo Loaiza",
  role: "Fundador · Ingeniero de Software · Máster en IA",
  email: "alfredoglb2020@gmail.com",
  whatsappNumber: "593991697973",
  phoneDisplay: "+593 991 697 973",
  whatsappMessage: "Hola Alfredo, vi AL Software Studio y quiero conversar sobre un proyecto.",
  github: "https://github.com/alfredoloai05",
  linkedin: "https://www.linkedin.com/in/alfredoloaiza/",
  instagram: "https://www.instagram.com/alfredolb2009/",
  location: "Loja, Ecuador",
};

export const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
export const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Nuevo proyecto - AL Software Studio")}&body=${encodeURIComponent("Hola Alfredo, quiero conversar sobre un proyecto de software.")}`;
