
const parametros = new URLSearchParams(window.location.search);
const tipo = parametros.get("tipo") || "bodas";

const datosServicios = {
  bodas: {
    titulo: "Bodas",
    texto: "Capturamos la ceremonia, los novios, la recepción y los detalles de tu boda.",
    fotos: [
      "photo-1519741497674-611481863552",
      "photo-1511285560929-80b456fea0bc",
      "photo-1520854221256-17451cc331bf",
      "photo-1519225421980-715cb0215aed",
      "photo-1522673607200-164d1b6ce486",
      "photo-1515934751635-c81c6bc9a2d8",
      "photo-1532712938310-34cb3982ef74",
      "photo-1510076857177-7470076d4098",
      "photo-1523438885200-e635ba2c371e",
      "photo-1469334031218-e382a71b716b",
      "photo-1492691527719-9d1e07e534b4",
      "photo-1511795409834-ef04bbd61622",
      "photo-1529636798458-92182e662485",
      "photo-1511988617509-a57c8a288659",
      "photo-1464366400600-7168b8af9bc3",
      "photo-1519167758481-83f550bb49b3"
    ]
  },

  xv: {
    titulo: "XV Años",
    texto: "Sesiones de quinceañeras, vestidos, vals y celebraciones inolvidables.",
    fotos: [
      "photo-1494790108377-be9c29b29330",
      "photo-1524250502761-1ac6f2e30d43",
      "photo-1534528741775-53994a69daeb",
      "photo-1517841905240-472988babdf9",
      "photo-1524504388940-b1c1722653e1",
      "photo-1531746020798-e6953c6e8e04",
      "photo-1529626455594-4ff0802cfb7e",
      "photo-1517365830460-955ce3ccd263",
      "photo-1488426862026-3ee34a7d66df",
      "photo-1502823403499-6ccfcf4fb453",
      "photo-1492633423870-43d1cd2775eb",
      "photo-1508214751196-bcfd4ca60f91",
      "photo-1506794778202-cad84cf45f1d",
      "photo-1531123897727-8f129e1688ce",
      "photo-1529139574466-a303027c1d8b",
      "photo-1529139574466-a303027c1d8b"
    ]
  },

  cumpleanos: {
    titulo: "Cumpleaños",
    texto: "Pasteles, velas, globos y celebraciones de cumpleaños.",
    fotos: [
      "photo-1530103862676-de8c9debad1d",
      "photo-1464349095431-e9a21285b5f3",
      "photo-1513151233558-d860c5398176",
      "photo-1605810230434-7631ac76ec81",
      "photo-1527529482837-4698179dc6ce",
      "photo-1505236858219-8359eb29e329",
      "photo-1533294455009-a77b7557d2d1",
      "photo-1517457373958-b7bdd4587205",
      "photo-1492684223066-81342ee5ff30",
      "photo-1478147427282-58a87a120781",
      "photo-1511268011861-691ed9e64969",
      "photo-1511795409834-ef04bbd61622",
      "photo-1464366400600-7168b8af9bc3",
      "photo-1519167758481-83f550bb49b3",
      "photo-1464366400600-7168b8af9bc3",
      "photo-1511988617509-a57c8a288659"
    ]
  },

  pareja: {
    titulo: "Sesiones de Pareja",
    texto: "Fotografías de novios, citas, aniversarios y momentos especiales en pareja.",
    fotos: [
      "photo-1518199266791-5375a83190b7",
      "photo-1529333166437-7750a6dd5a70",
      "photo-1522098543979-ffc7f79a56c4",
      "photo-1516589178581-6cd7833ae3b2",
      "photo-1494774157365-9e04c6720e47",
      "photo-1521119989659-a83eee488004",
      "photo-1511988617509-a57c8a288659",
      "photo-1511895426328-dc8714191300",
      "photo-1522673607200-164d1b6ce486",
      "photo-1529636798458-92182e662485",
      "photo-1516589178581-6cd7833ae3b2",
      "photo-1523438885200-e635ba2c371e",
      "photo-1520854221256-17451cc331bf",
      "photo-1519741497674-611481863552",
      "photo-1529333166437-7750a6dd5a70",
      "photo-1494774157365-9e04c6720e47"
    ]
  },

  infantiles: {
    titulo: "Sesiones Infantiles",
    texto: "Sesiones fotográficas de niños de 3 a 12 años, jugando y disfrutando.",
    fotos: [
      "photo-1503454537195-1dcabb73ffb9",
      "photo-1516627145497-ae6968895b74",
      "photo-1471286174890-9c112ffca5b4",
      "photo-1502086223501-7ea6ecd79368",
      "photo-1519689680058-324335c77eba",
      "photo-1544126592-807ade215a0b",
      "photo-1518831959646-742c3a14ebf7",
      "photo-1503919005314-30d93d07d823",
      "photo-1476231682828-37e571bc172f",
      "photo-1509062522246-3755977927d7",
      "photo-1503676260728-1c00da094a0b",
      "photo-1503454537195-1dcabb73ffb9",
      "photo-1516627145497-ae6968895b74",
      "photo-1502086223501-7ea6ecd79368",
      "photo-1544126592-807ade215a0b",
      "photo-1519689680058-324335c77eba"
    ]
  },

  maternidad: {
    titulo: "Sesiones de Maternidad",
    texto: "Fotografías dedicadas exclusivamente al embarazo y a la futura mamá.",
    fotos: [
      "photo-1531983412531-1f49a365ffed",
      "photo-1555252333-9f8e92e65df9",
      "photo-1519689680058-324335c77eba",
      "photo-1524504388940-b1c1722653e1",
      "photo-1494790108377-be9c29b29330",
      "photo-1534528741775-53994a69daeb",
      "photo-1517841905240-472988babdf9",
      "photo-1524250502761-1ac6f2e30d43",
      "photo-1531746020798-e6953c6e8e04",
      "photo-1529626455594-4ff0802cfb7e",
      "photo-1488426862026-3ee34a7d66df",
      "photo-1502823403499-6ccfcf4fb453",
      "photo-1492633423870-43d1cd2775eb",
      "photo-1508214751196-bcfd4ca60f91",
      "photo-1517365830460-955ce3ccd263",
      "photo-1531123897727-8f129e1688ce"
    ]
  },

  bebes: {
    titulo: "Sesiones de Bebés",
    texto: "Fotografías de bebés de 1 mes a 3 años y sus primeras etapas.",
    fotos: [
      "photo-1519689680058-324335c77eba",
      "photo-1544126592-807ade215a0b",
      "photo-1502086223501-7ea6ecd79368",
      "photo-1518831959646-742c3a14ebf7",
      "photo-1471286174890-9c112ffca5b4",
      "photo-1516627145497-ae6968895b74",
      "photo-1503454537195-1dcabb73ffb9",
      "photo-1503919005314-30d93d07d823",
      "photo-1476231682828-37e571bc172f",
      "photo-1509062522246-3755977927d7",
      "photo-1503676260728-1c00da094a0b",
      "photo-1511895426328-dc8714191300",
      "photo-1511988617509-a57c8a288659",
      "photo-1529636798458-92182e662485",
      "photo-1516589178581-6cd7833ae3b2",
      "photo-1522673607200-164d1b6ce486"
    ]
  },

  bautizos: {
    titulo: "Bautizos",
    texto: "Fotografía de ceremonias religiosas en iglesias, padrinos y familias.",
    fotos: [
      "photo-1438032005730-c779502df39b",
      "photo-1438232992991-995b7058bbb3",
      "photo-1511895426328-dc8714191300",
      "photo-1519741497674-611481863552",
      "photo-1511285560929-80b456fea0bc",
      "photo-1520854221256-17451cc331bf",
      "photo-1519225421980-715cb0215aed",
      "photo-1522673607200-164d1b6ce486",
      "photo-1515934751635-c81c6bc9a2d8",
      "photo-1532712938310-34cb3982ef74",
      "photo-1510076857177-7470076d4098",
      "photo-1523438885200-e635ba2c371e",
      "photo-1469334031218-e382a71b716b",
      "photo-1511795409834-ef04bbd61622",
      "photo-1464366400600-7168b8af9bc3",
      "photo-1519167758481-83f550bb49b3"
    ]
  },

  baile: {
    titulo: "Baile, Carnavales y Festivales",
    texto: "Fotografía de bailes folclóricos, presentaciones, carnavales y festivales culturales.",
    fotos: [
      "photo-1508700115892-45ecd05ae2ad",
      "photo-1547153760-18fc86324498",
      "photo-1518834107812-67b0b7c58434",
      "photo-1504609813442-a8924e83f76e",
      "photo-1535525153412-5a42439a210d",
      "photo-1492684223066-81342ee5ff30",
      "photo-1501281668745-f7f57925c3b4",
      "photo-1540575467063-178a50c2df87",
      "photo-1511795409834-ef04bbd61622",
      "photo-1470229722913-7c0e2dbbafd3",
      "photo-1459749411175-04bf5292ceea",
      "photo-1501386761578-eac5c94b800a",
      "photo-1506157786151-b8491531f063",
      "photo-1470225620780-dba8ba36b745",
      "photo-1492684223066-81342ee5ff30",
      "photo-1501281668745-f7f57925c3b4"
    ]
  },

  vaquero: {
    titulo: "Vaquero Regional",
    texto: "Sesiones inspiradas en la tradición vaquera mexicana, con caballos, sombreros y vestimenta regional.",
    fotos: [
      "photo-1511376777868-611b54f68947",
      "photo-1533227268428-f9ed0900fb3b",
      "photo-1506377711776-db0ccaf8e5f5",
      "photo-1500530855697-b586d89ba3ee",
      "photo-1473448912268-2022ce9509d8",
      "photo-1500595046743-cd271d694d30",
      "photo-1511497584788-876760111969",
      "photo-1500382017468-9049fed747ef",
      "photo-1472396961693-142e6e269027",
      "photo-1516934024742-b461fba47600",
      "photo-1464822759023-fed622ff2c3b",
      "photo-1511497584788-876760111969",
      "photo-1500534623283-312aade485b7",
      "photo-1469474968028-56623f02e42e",
      "photo-1473448912268-2022ce9509d8",
      "photo-1500595046743-cd271d694d30"
    ]
  },

  videos: {
    titulo: "Videos",
    texto: "Producción audiovisual, grabaciones de eventos y creación de recuerdos.",
    fotos: [
      "photo-1492691527719-9d1e07e534b4",
      "photo-1574717024653-61fd2cf4d44d",
      "photo-1485846234645-a62644f84728",
      "photo-1492619375914-88005aa9e8fb",
      "photo-1478720568477-152d9b164e26",
      "photo-1516035069371-29a1b244cc32",
      "photo-1502920917128-1aa500764cbd",
      "photo-1519183071298-a2962be90b8e",
      "photo-1500530855697-b586d89ba3ee",
      "photo-1492619375914-88005aa9e8fb",
      "photo-1516321318423-f06f85e504b3",
      "photo-1519389950473-47ba0277781c",
      "photo-1521737711867-e3b97375f902",
      "photo-1522071820081-009f0129c71c",
      "photo-1516321318423-f06f85e504b3",
      "photo-1492619375914-88005aa9e8fb"
    ]
  },

  eventos: {
    titulo: "Eventos",
    texto: "Cobertura de eventos culturales mexicanos, festivales y celebraciones tradicionales.",
    fotos: [
      "photo-1511795409834-ef04bbd61622",
      "photo-1540575467063-178a50c2df87",
      "photo-1501281668745-f7f57925c3b4",
      "photo-1492684223066-81342ee5ff30",
      "photo-1517457373958-b7bdd4587205",
      "photo-1505236858219-8359eb29e329",
      "photo-1470229722913-7c0e2dbbafd3",
      "photo-1501386761578-eac5c94b800a",
      "photo-1506157786151-b8491531f063",
      "photo-1470225620780-dba8ba36b745",
      "photo-1459749411175-04bf5292ceea",
      "photo-1540575467063-178a50c2df87",
      "photo-1492684223066-81342ee5ff30",
      "photo-1501281668745-f7f57925c3b4",
      "photo-1511795409834-ef04bbd61622",
      "photo-1505236858219-8359eb29e329"
    ]
  }
};

// Construir las URL de las imágenes
Object.values(datosServicios).forEach(servicio => {
  servicio.fotos = servicio.fotos.map(id =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`
  );
});

// Mostrar el servicio seleccionado
const servicio = datosServicios[tipo];
const titulo = document.getElementById("titulo-servicio");
const texto = document.getElementById("texto-servicio");
const galeria = document.getElementById("galeria-servicio");

if (servicio && titulo && texto && galeria) {
  document.title = `${servicio.titulo} | CoreFotografía`;
  titulo.textContent = servicio.titulo;
  texto.textContent = servicio.texto;
  galeria.innerHTML = "";

  servicio.fotos.forEach((url, index) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = `${servicio.titulo}, fotografía ${index + 1}`;
    img.loading = "lazy";

    img.onerror = () => {
      console.error("Error cargando imagen:", url);
      img.remove();
    };

    galeria.appendChild(img);
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entradas => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.15 });

    galeria.querySelectorAll("img").forEach(img => observer.observe(img));
  } else {
    galeria.querySelectorAll("img").forEach(img => img.classList.add("visible"));
  }
} else {
  if (titulo) titulo.textContent = "Servicio no encontrado";
  if (texto) texto.textContent = "La categoría que buscas no existe.";
  if (galeria) galeria.innerHTML = "";
}
