import { useState, useEffect } from "react";
import { useT } from "../context/LangContext.jsx";
import useReveal from "../hooks/useReveal.js";

const GALLERY_ITEMS = [
  {
    id: "ganesh-pol-amber-group",
    img: "/images/gallery/ganesh-pol-amber-group.jpg",
    title: { es: "Gran Grupo de Viajeros en Ganesh Pol", en: "Large Group of Travelers at Ganesh Pol" },
    location: { es: "Fuerte Amber, Jaipur", en: "Amber Fort, Jaipur" },
    caption: {
      es: "«Todo nuestro grupo reunido en la escalinata de Ganesh Pol con Victor. ¡Una experiencia inolvidable!»",
      en: "“Our entire group gathered on the steps of Ganesh Pol with Victor. An unforgettable experience!”"
    },
    guest: "Grupo de Viajeros (España)"
  },
  {
    id: "holi-festival-spain-flag",
    img: "/images/gallery/holi-festival-spain-flag.jpg",
    title: { es: "Festival de Holi con la Bandera de España", en: "Holi Festival with the Flag of Spain" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«Celebrar el festival de los colores con la bandera española desplegada junto a Victor y amigos locales.»",
      en: "“Celebrating the festival of colors displaying the Spanish flag with Victor and local friends.”"
    },
    guest: "Viajeros de Madrid & Valencia"
  },
  {
    id: "victor-taj-mahal-saree",
    img: "/images/gallery/victor-taj-mahal-saree.jpg",
    title: { es: "Vestidos de Kurta y Saree en el Taj Mahal", en: "Dressed in Kurta & Saree at Taj Mahal" },
    location: { es: "Agra, Uttar Pradesh", en: "Agra, Uttar Pradesh" },
    caption: {
      es: "«Lucir vestidos tradicionales de la India junto a Victor frente al icónico mausoleo de mármol blanco.»",
      en: "“Wearing traditional Indian attire with Victor in front of the iconic white marble mausoleum.”"
    },
    guest: "Grupo de Viajeros (Barcelona & Madrid)"
  },
  {
    id: "ganges-boat-diyas-varanasi",
    img: "/images/gallery/ganges-boat-diyas-varanasi.png",
    title: { es: "Ofrenda de Lámparas Flotantes en el Ganges", en: "Floating Oil Lamps Ceremony on the Ganges" },
    location: { es: "Varanasi, Uttar Pradesh", en: "Varanasi, Uttar Pradesh" },
    caption: {
      es: "«Navegar al amanecer por el río sagrado Ganges y ofrecer lámparas flotantes de caléndula (diyas).»",
      en: "“Sailing at sunrise on the sacred Ganges river and offering floating marigold lamps (diyas).”"
    },
    guest: "Viajeros de Zaragoza & Valencia"
  },
  {
    id: "victor-varanasi-temple",
    img: "/images/gallery/victor-varanasi-temple.png",
    title: { es: "Victor con Viajeros en Templo de Varanasi", en: "Victor with Travelers at Varanasi Temple" },
    location: { es: "Varanasi, Uttar Pradesh", en: "Varanasi, Uttar Pradesh" },
    caption: {
      es: "«Descubriendo los templos sagrados de Kashi y la estatua de Bharat Mata acompañados por Victor.»",
      en: "“Discovering the sacred temples of Kashi and the Bharat Mata statue accompanied by Victor.”"
    },
    guest: "Grupo de Viajeros (Sevilla & Bilbao)"
  },
  {
    id: "victor-mehtab-bagh-taj",
    img: "/images/gallery/victor-mehtab-bagh-taj.jpg",
    title: { es: "Victor y Viajeras en Mehtab Bagh (Taj Mahal)", en: "Victor & Travelers at Mehtab Bagh" },
    location: { es: "Agra, Uttar Pradesh", en: "Agra, Uttar Pradesh" },
    caption: {
      es: "«Disfrutando de las vistas panorámicas del Taj Mahal al atardecer desde los jardines de Mehtab Bagh.»",
      en: "“Enjoying panoramic views of the Taj Mahal at sunset from Mehtab Bagh gardens.”"
    },
    guest: "Laura & Carmen (Madrid)"
  },
  {
    id: "victor-bangla-sahib-selfie",
    img: "/images/gallery/victor-bangla-sahib-selfie.jpg",
    title: { es: "Victor en Gurudwara Bangla Sahib", en: "Victor at Gurudwara Bangla Sahib" },
    location: { es: "Nueva Delhi", en: "New Delhi" },
    caption: {
      es: "«Visitando el icónico templo sikh de Bangla Sahib con pañuelos naranjas tradicionales junto a Victor.»",
      en: "“Visiting the iconic Sikh temple Bangla Sahib with traditional orange head covers alongside Victor.”"
    },
    guest: "Grupo de Viajeros (Madrid & Barcelona)"
  },
  {
    id: "taj-mahal-arch-reflection",
    img: "/images/gallery/taj-mahal-arch-reflection.png",
    title: { es: "Silueta y Reflejo en el Taj Mahal", en: "Taj Mahal Arch Silhouette & Reflection" },
    location: { es: "Agra, Uttar Pradesh", en: "Agra, Uttar Pradesh" },
    caption: {
      es: "«Composición artística inolvidable enmarcados en el arco y reflejados en el suelo de mármol del Taj Mahal.»",
      en: "“Unforgettable artistic composition framed in the archway and reflected on the Taj Mahal marble floor.”"
    },
    guest: "Pareja de Viajeros (Valencia)"
  },
  {
    id: "airport-group-arrival-victor",
    img: "/images/gallery/airport-group-arrival-victor.png",
    title: { es: "Recepción de Bienvenida en el Aeropuerto", en: "Airport Arrival Welcome Reception" },
    location: { es: "Bienvenida Tradicional", en: "Traditional Welcome" },
    caption: {
      es: "«Recepción cálida con guirnaldas de flores de caléndula a la llegada a India con Victor.»",
      en: "“Warm welcome reception with traditional marigold flower garlands on arrival in India with Victor.”"
    },
    guest: "Grupo de Viajeros (España)"
  },
  {
    id: "airport-garland-welcome",
    img: "/images/gallery/airport-garland-welcome.jpg",
    title: { es: "Bienvenida con Guirnaldas de Caléndula", en: "Marigold Garlands Welcome" },
    location: { es: "Bienvenida Oficial", en: "Official Welcome" },
    caption: {
      es: "«Inicio de ruta con el toque tradicional indio desde el primer momento en el aeropuerto.»",
      en: "“Starting the tour with an authentic traditional Indian touch right from the airport arrival.”"
    },
    guest: "Familia & Amigos (Bilbao)"
  },
  {
    id: "victor-india-gate",
    img: "/images/gallery/victor-india-gate.jpg",
    title: { es: "Victor con Viajero en Puerta de la India", en: "Victor with Traveler at India Gate" },
    location: { es: "Nueva Delhi", en: "New Delhi" },
    caption: {
      es: "«Comenzando la aventura por Delhi junto a Victor frente al emblemático monumento de India Gate.»",
      en: "“Starting our Delhi adventure with Victor in front of the iconic India Gate monument.”"
    },
    guest: "Javier M. (Madrid)"
  },
  {
    id: "victor-orchha-group",
    img: "/images/gallery/victor-orchha-group.jpg",
    title: { es: "Explorando los Palacios de Orchha con Victor", en: "Exploring Orchha Palaces with Victor" },
    location: { es: "Orchha, Madhya Pradesh", en: "Orchha, Madhya Pradesh" },
    caption: {
      es: "«Recorriendo la histórica fortaleza y palacios de Orchha junto a Victor en un ambiente muy cercano.»",
      en: "“Touring the historical fortress and palaces of Orchha with Victor in a warm personal setting.”"
    },
    guest: "Grupo de Viajeras (Barcelona & Sevilla)"
  },
  {
    id: "khajuraho-temples-group",
    img: "/images/gallery/khajuraho-temples-group.jpg",
    title: { es: "Grupo frente a los Templos de Khajuraho", en: "Group in front of Khajuraho Temples" },
    location: { es: "Khajuraho, Madhya Pradesh", en: "Khajuraho, Madhya Pradesh" },
    caption: {
      es: "«Contemplar la arquitectura milenaria y esculturas de Khajuraho explicadas al detalle por nuestro guía Victor.»",
      en: "“Contemplating ancient architecture and sculptures of Khajuraho explained in detail by Victor.”"
    },
    guest: "Familia & Amigos (Madrid)"
  },
  {
    id: "orchha-tomb-selfie",
    img: "/images/gallery/orchha-tomb-selfie.jpg",
    title: { es: "Selfie en los Cenotafios Reales de Orchha", en: "Selfie at Royal Cenotaphs of Orchha" },
    location: { es: "Orchha", en: "Orchha" },
    caption: {
      es: "«Recuerdos inolvidables frente a las majestuosas cúpulas históricas de Orchha.»",
      en: "“Unforgettable memories in front of the majestic historical domes of Orchha.”"
    },
    guest: "Antonio & Grupo (Valencia)"
  },
  {
    id: "victor-jaipur-group",
    img: "/images/gallery/victor-jaipur-group.jpg",
    title: { es: "Recorriendo el Palacio de Jaipur con Victor", en: "Exploring Jaipur Palace with Victor" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«Explorar los patios del Palacio de la Ciudad de Jaipur con nuestro guía Victor fue de las mejores experiencias del viaje.»",
      en: "“Exploring Jaipur's City Palace courtyards with our guide Victor was one of the highlights of our trip.”"
    },
    guest: "Marta, Elena & Carmen (Valencia)"
  },
  {
    id: "victor-traveler-selfie",
    img: "/images/gallery/victor-traveler-selfie.jpg",
    title: { es: "Bienvenida y Recepción Privada", en: "Welcome & Private Reception" },
    location: { es: "Atención Personalizada", en: "Personalized Support" },
    caption: {
      es: "«Desde la llegada al hotel hasta el último día, Victor se encarga de que todo salga perfecto.»",
      en: "“From arrival at the hotel until the last day, Victor makes sure everything runs perfectly.”"
    },
    guest: "David S. (Barcelona)"
  },
  {
    id: "traveler-namaste-taj",
    img: "/images/gallery/traveler-namaste-taj.png",
    title: { es: "Namaste en el Taj Mahal", en: "Namaste at the Taj Mahal" },
    location: { es: "Agra, Uttar Pradesh", en: "Agra, Uttar Pradesh" },
    caption: {
      es: "«Un instante de paz y respeto luciendo ropa tradicional india frente al mausoleo del amor eterno.»",
      en: "“A moment of peace and respect wearing traditional Indian clothing in front of the mausoleum of eternal love.”"
    },
    guest: "Camila R. (Madrid)"
  },
  {
    id: "amer-fort-elephant-ride",
    img: "/images/gallery/amer-fort-elephant-ride.jpg",
    title: { es: "Subida al Fuerte Amber", en: "Elephant Ride at Amber Fort" },
    location: { es: "Amber, Rajastán", en: "Amber, Rajasthan" },
    caption: {
      es: "«Subir al histórico Fuerte Amber como los antiguos maharajás con sombrilla tradicional.»",
      en: "“Ascending historical Amber Fort like the ancient Maharajas with traditional sun umbrellas.”"
    },
    guest: "Ignacio & Teresa (Sevilla)"
  },
  {
    id: "shore-temple-mahabalipuram",
    img: "/images/gallery/shore-temple-mahabalipuram.png",
    title: { es: "Templo de la Orilla y Reflejo Espejo", en: "Shore Temple & Water Mirror Reflection" },
    location: { es: "Mahabalipuram, Sur de India", en: "Mahabalipuram, South India" },
    caption: {
      es: "«El milenario Templo de la Orilla tallado en granito reflejado sobre las aguas en Mahabalipuram.»",
      en: "“The ancient granite Shore Temple reflected over the water mirror in Mahabalipuram.”"
    },
    guest: "Familia Beltrán (Bilbao)"
  },
  {
    id: "victor-guide-selfie",
    img: "/images/gallery/victor-guide-selfie.png",
    title: { es: "Victor — Tu Guía en India", en: "Victor — Your Guide in India" },
    location: { es: "Experiencia de Viaje", en: "Travel Experience" },
    caption: {
      es: "«Victor acompañándonos y compartiendo la auténtica riqueza cultural y artística del subcontinente indio.»",
      en: "“Victor guiding us and sharing the authentic cultural and artistic wealth of the Indian subcontinent.”"
    },
    guest: "Victor — Guía Certificado"
  },
  {
    id: "painted-arches-jaipur",
    img: "/images/gallery/painted-arches-jaipur.jpg",
    title: { es: "Arcos Pintados de Rajastán", en: "Painted Arches of Rajasthan" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«La asombrosa arquitectura y los detallados frescos de los palacios reales de Rajastán.»",
      en: "“The astonishing architecture and detailed frescoes of Rajasthan's royal palaces.”"
    },
    guest: "Teresa & Manuel (Sevilla)"
  },
  {
    id: "patrika-gate-jaipur",
    img: "/images/gallery/patrika-gate-jaipur.jpg",
    title: { es: "Puerta de Patrika y Reflejo en Jaipur", en: "Patrika Gate & Reflection in Jaipur" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«La célebre fachada rosa de Patrika Gate reflejada perfectamente en el agua. Fotografía impresionante en Jaipur.»",
      en: "“The famous pink facade of Patrika Gate reflected perfectly in the water. Stunning photography in Jaipur.”"
    },
    guest: "Alba & Sergio (Barcelona)"
  },
  {
    id: "saree-group-taj",
    img: "/images/gallery/saree-group-taj.jpg",
    title: { es: "Vestidas de Sarees en el Taj Mahal", en: "Dressed in Sarees at the Taj Mahal" },
    location: { es: "Agra, Uttar Pradesh", en: "Agra, Uttar Pradesh" },
    caption: {
      es: "«Vivir la experiencia de vestir sarees tradicionales indios frente al majestuoso Taj Mahal junto a nuestro grupo.»",
      en: "“Experiencing wearing traditional Indian sarees in front of the majestic Taj Mahal with our group.”"
    },
    guest: "Grupo de Amigas (Madrid & Barcelona)"
  },
  {
    id: "group-jama-masjid",
    img: "/images/gallery/group-jama-masjid.jpg",
    title: { es: "Grupo de Viajeros en Jama Masjid", en: "Travel Group at Jama Masjid" },
    location: { es: "Vieja Delhi", en: "Old Delhi" },
    caption: {
      es: "«Nuestro grupo explorando la majestuosa mezquita Jama Masjid con Victor. Una experiencia privada e inolvidable juntos.»",
      en: "“Our group exploring the majestic Jama Masjid mosque with Victor. A private and unforgettable experience together.”"
    },
    guest: "Grupo de Viajeros (España)"
  },
  {
    id: "kathakali-figures",
    img: "/images/gallery/kathakali-figures.jpg",
    title: { es: "Danza Tradicional Kathakali", en: "Traditional Kathakali Dance" },
    location: { es: "Kerala & Arte del Sur", en: "Kerala & Southern Art" },
    caption: {
      es: "«Descubriendo el fascinante vestuario y maquillaje dramático de las danzas sagradas del sur de India.»",
      en: "“Discovering the fascinating costumes and dramatic makeup of South India's sacred dances.”"
    },
    guest: "Raúl & Beatriz (Valencia)"
  },
  {
    id: "rajasthan-folk-dancers",
    img: "/images/gallery/rajasthan-folk-dancers.jpg",
    title: { es: "Danzas Folclóricas de Rajastán", en: "Rajasthani Folk Dancers" },
    location: { es: "Palacio de Jaipur", en: "Jaipur City Palace" },
    caption: {
      es: "«Bailarines tradicionales celebrando con turbantes y cascabeles en las puertas del palacio durante las fiestas de Rajastán.»",
      en: "“Traditional dancers celebrating with turbans and ankle bells at the palace gates during Rajasthani festivals.”"
    },
    guest: "Gonzalo & Patricia (Madrid)"
  },
  {
    id: "gangaur-female-traveler",
    img: "/images/gallery/gangaur-female-traveler.jpg",
    title: { es: "Celebrando el Festival Gangaur", en: "Celebrating Gangaur Festival" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«Sumergirse en el colorido festival de Gangaur en Jaipur. Las tradiciones de Rajastán son fascinantes.»",
      en: "“Immersing ourselves in the colorful Gangaur festival in Jaipur. Rajasthan's traditions are mesmerizing.”"
    },
    guest: "Elena P. (Sevilla)"
  },
  {
    id: "golden-temple-amritsar",
    img: "/images/gallery/golden-temple-amritsar.jpg",
    title: { es: "Templo Dorado (Harmandir Sahib)", en: "Golden Temple (Harmandir Sahib)" },
    location: { es: "Amritsar, Punjab", en: "Amritsar, Punjab" },
    caption: {
      es: "«La serenidad y el brillo dorado reflejado en las aguas sagradas del Sarovar en Amritsar es inolvidable.»",
      en: "“The serenity and golden glow reflecting off the sacred waters of the Sarovar in Amritsar is unforgettable.”"
    },
    guest: "Carlos & Marta (Valencia)"
  },
  {
    id: "traveler-rajasthan",
    img: "/images/gallery/traveler-rajasthan.jpg",
    title: { es: "Encuentros Culturales en Rajastán", en: "Cultural Encounters in Rajasthan" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«Compartir sonrisas con las mujeres locales en Jaipur. Victor nos conectó con la gente real de una forma entrañable.»",
      en: "“Sharing smiles with local women in Jaipur. Victor connected us with real people in a warm, genuine way.”"
    },
    guest: "Clara M. (Madrid)"
  },
  {
    id: "classical-dance-display",
    img: "/images/gallery/classical-dance-display.jpg",
    title: { es: "Figuras Clásicas Mohiniyattam", en: "Classical Mohiniyattam Figures" },
    location: { es: "Cultura e Historia", en: "Culture & History" },
    caption: {
      es: "«Un recorrido repleto de mitología, historia y arte tradicional guiado paso a paso por Victor.»",
      en: "“A journey filled with mythology, history, and traditional art guided step-by-step by Victor.”"
    },
    guest: "Inés & Fernando (Barcelona)"
  },
  {
    id: "gangaur-male-traveler",
    img: "/images/gallery/gangaur-male-traveler.jpg",
    title: { es: "Alegría Festiva en Rajastán", en: "Festive Joy in Rajasthan" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«Vivir las festividades locales con el marco conmemorativo de Gangaur '26. India es pura energía.»",
      en: "“Experiencing local festivities with the Gangaur '26 frame. India is pure vibrant energy.”"
    },
    guest: "Pablo R. (Bilbao)"
  },
  {
    id: "golden-temple-reflection",
    img: "/images/gallery/golden-temple-reflection.jpg",
    title: { es: "Reflejos Sagrados en Amritsar", en: "Sacred Reflections in Amritsar" },
    location: { es: "Amritsar, Punjab", en: "Amritsar, Punjab" },
    caption: {
      es: "«Una atmósfera de paz y hospitalidad sin igual. El Templo Dorado nos tocó el corazón.»",
      en: "“An atmosphere of unmatched peace and hospitality. The Golden Temple touched our hearts.”"
    },
    guest: "Familia Navarro (Málaga)"
  },
  {
    id: "ganga-aarti-night",
    img: "/images/gallery/ganga-aarti-night.jpg",
    title: { es: "Ceremonia Ganga Aarti Nocturna", en: "Night Ganga Aarti Ceremony" },
    location: { es: "Dashashwamedh Ghat, Varanasi", en: "Dashashwamedh Ghat, Varanasi" },
    caption: {
      es: "«Observar el ritual del fuego y luces desde una barca al anochecer en el Ganges quita el aliento.»",
      en: "“Watching the ritual of fire and lights from a boat at dusk on the Ganges is breathtaking.”"
    },
    guest: "Isabel & Fernando (Valencia)"
  },
  {
    id: "taj-mahal-sunset",
    img: "/images/gallery/taj-mahal-sunset.jpg",
    title: { es: "Taj Mahal al Atardecer desde Mehtab Bagh", en: "Taj Mahal at Sunset from Mehtab Bagh" },
    location: { es: "Agra", en: "Agra" },
    caption: {
      es: "«Una perspectiva tranquila y distinta del Taj Mahal al atardecer sobre el río Yamuna. Inolvidable.»",
      en: "“A peaceful, unique perspective of the Taj Mahal at sunset across the Yamuna river. Unforgettable.”"
    },
    guest: "Sofía G. (Valencia)"
  },
  {
    id: "sadhu-yellow-robe",
    img: "/images/gallery/sadhu-yellow-robe.jpg",
    title: { es: "Monje en las Escalinatas del Ganges", en: "Monk on the Ganges Steps" },
    location: { es: "Varanasi", en: "Varanasi" },
    caption: {
      es: "«Caminar por los ghats de Varanasi al amanecer permite capturar estampas únicas de devoción y paz.»",
      en: "“Walking the ghats of Varanasi at sunrise allows capturing unique scenes of devotion and peace.”"
    },
    guest: "Rodrigo M. (Bilbao)"
  },
  {
    id: "hawa-mahal",
    img: "/images/gallery/hawa-mahal.jpg",
    title: { es: "Hawa Mahal al Anochecer", en: "Hawa Mahal at Dusk" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«Los colores del Palacio de los Vientos iluminado al anochecer son deslumbrantes.»",
      en: "“The colors of the illuminated Palace of Winds at dusk are mesmerizing.”"
    },
    guest: "David & Laura (Bilbao)"
  },
  {
    id: "sadhu-smiling",
    img: "/images/gallery/sadhu-smiling.jpg",
    title: { es: "Sonrisa y Color en la India Espiritual", en: "Smile & Color in Spiritual India" },
    location: { es: "Varanasi", en: "Varanasi" },
    caption: {
      es: "«La amabilidad de la gente local e itinerantes sagrados nos cautivó durante todo el recorrido.»",
      en: "“The friendliness of the local people and holy wanderers captivated us throughout the trip.”"
    },
    guest: "Carmen & Tomás (Alicante)"
  },
  {
    id: "varanasi-boat-sadhu",
    img: "/images/gallery/varanasi-boat-sadhu.jpg",
    title: { es: "Amanecer Espiritual en Varanasi", en: "Spiritual Sunrise in Varanasi" },
    location: { es: "Varanasi, Uttar Pradesh", en: "Varanasi, Uttar Pradesh" },
    caption: {
      es: "«Navegando al amanecer por los ghats sagrados del río Ganges. Una experiencia mística irrepetible.»",
      en: "“Sailing at sunrise along the sacred ghats of the Ganges River. A truly mystical experience.”"
    },
    guest: "Pedro & Lucía (Sevilla)"
  },
  {
    id: "elephant-eye",
    img: "/images/gallery/elephant-eye.jpg",
    title: { es: "Mirada Salvaje — Fauna en India", en: "Wild Gaze — Wildlife in India" },
    location: { es: "Parque Nacional Ranthambore", en: "Ranthambore National Park" },
    caption: {
      es: "«La conexión íntima con la naturaleza y fauna salvaje durante nuestras excursiones en la selva.»",
      en: "“The intimate connection with nature and wildlife during our jungle excursions.”"
    },
    guest: "Álvaro T. (Madrid)"
  },
  {
    id: "qutub-minar",
    img: "/images/gallery/qutub-minar.jpg",
    title: { es: "Qutub Minar y Ruinas Históricas", en: "Qutub Minar & Historic Ruins" },
    location: { es: "Nueva Delhi", en: "New Delhi" },
    caption: {
      es: "«Victor nos explicó la fascinante historia de las dinastías de Delhi mientras las aves volaban sobre el minarete.»",
      en: "“Victor explained the fascinating history of Delhi's dynasties while birds circled over the minaret.”"
    },
    guest: "María & Gonzalo (Madrid)"
  },
  {
    id: "jal-mahal",
    img: "/images/gallery/jal-mahal.jpg",
    title: { es: "Jal Mahal — Palacio Flotante", en: "Jal Mahal — Floating Palace" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«Un momento mágico contemplando el palacio del agua al atardecer en Jaipur con nuestro coche y guía privado.»",
      en: "“A magical moment looking out at the water palace at sunset in Jaipur with our private car & guide.”"
    },
    guest: "Familia Ramos (Barcelona)"
  },
  {
    id: "humayun-tomb",
    img: "/images/gallery/humayun-tomb.jpg",
    title: { es: "Tumba de Humayun", en: "Humayun's Tomb" },
    location: { es: "Delhi", en: "Delhi" },
    caption: {
      es: "«El precursor del Taj Mahal impresiona aún más en persona. Todo organizado con tiempo para disfrutar sin prisa.»",
      en: "“The precursor to the Taj Mahal is even more impressive in person. Everything arranged unhurried.”"
    },
    guest: "Javier R. (Zaragoza)"
  },
  {
    id: "sadhu-trishul",
    img: "/images/gallery/sadhu-trishul.jpg",
    title: { es: "Sadhu con Trishul a Orillas del Ganges", en: "Sadhu with Trishul by the Ganges" },
    location: { es: "Varanasi", en: "Varanasi" },
    caption: {
      es: "«Capturando la esencia mística del hinduismo a orillas del río sagrado en Varanasi.»",
      en: "“Capturing the mystical essence of Hinduism on the banks of the sacred river in Varanasi.”"
    },
    guest: "Marta & Marcos (Alicante)"
  },
  {
    id: "sadhu-marigold",
    img: "/images/gallery/sadhu-marigold.jpg",
    title: { es: "Retrato de Sadhu con Flores de Caléndula", en: "Sadhu Portrait with Marigold Flowers" },
    location: { es: "Varanasi", en: "Varanasi" },
    caption: {
      es: "«Conocer la devoción y tradiciones de los hombres sagrados de India con el respeto que inspira nuestro guía Victor.»",
      en: "“Learning about the devotion and traditions of India's holy men with the deep respect guided by Victor.”"
    },
    guest: "Familia Ramos (Barcelona)"
  },
  {
    id: "sadhu-dreadlocks",
    img: "/images/gallery/sadhu-dreadlocks.jpg",
    title: { es: "Tradición y Misticismo en India", en: "Tradition & Mysticism in India" },
    location: { es: "Varanasi", en: "Varanasi" },
    caption: {
      es: "«Fotografiando momentos únicos de vida y espiritualidad que jamás habríamos descubierto sin un guía local.»",
      en: "“Photographing unique moments of life and spirituality we would never have discovered without a local guide.”"
    },
    guest: "Hugo & Irene (San Sebastián)"
  }
];

export default function GallerySection() {
  const t = useT();
  useReveal();
  const [showAll, setShowAll] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") setSelectedIdx((i) => (i > 0 ? i - 1 : GALLERY_ITEMS.length - 1));
      if (e.key === "ArrowRight") setSelectedIdx((i) => (i < GALLERY_ITEMS.length - 1 ? i + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  const activeItem = selectedIdx !== null ? GALLERY_ITEMS[selectedIdx] : null;
  const visibleItems = showAll ? GALLERY_ITEMS : GALLERY_ITEMS.slice(0, 3);

  return (
    <section className="section-cream">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">
              {t({ es: "Galería de Experiencias · Viajeros Reales", en: "Traveler Experiences · Guest Gallery" })}
            </span>
            <h2>
              {t({ es: "Momentos en ruta acompañados por Victor", en: "Moments on the road with Victor" })}
            </h2>
          </div>
          <p>
            {t({
              es: "Fotografías reales e historias compartidas por nuestros viajeros durante sus recorridos privados por India.",
              en: "Real photographs and stories shared by our travelers during their private tours across India."
            })}
          </p>
        </div>

        <div className="gallery-grid">
          {visibleItems.map((item) => {
            const realIdx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
            return (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedIdx(realIdx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedIdx(realIdx)}
              >
                <img
                  src={item.img}
                  alt={t(item.title)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/gallery/ganesh-pol-amber-group.jpg";
                  }}
                />
                <div className="gallery-card-overlay">
                  <span className="gallery-badge">{t(item.location)}</span>
                  <h4>{t(item.title)}</h4>
                  <p>{t(item.caption)}</p>
                  <span className="gallery-guest">— {item.guest}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 32, textAlign: "center" }}>
          <button
            className="btn btn-outline"
            onClick={() => setShowAll(!showAll)}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", cursor: "pointer" }}
          >
            {showAll
              ? t({ es: "Mostrar menos fotos ↑", en: "Show fewer photos ↑" })
              : t({ es: `Ver todas las fotos (${GALLERY_ITEMS.length}) →`, en: `View all photos (${GALLERY_ITEMS.length}) →` })}
          </button>
        </div>
      </div>

      {activeItem && (
        <div className="gallery-modal-backdrop" onClick={() => setSelectedIdx(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              aria-label="Close modal"
              onClick={() => setSelectedIdx(null)}
            >
              ✕
            </button>
            <button
              className="gallery-modal-nav prev"
              aria-label="Previous image"
              onClick={() => setSelectedIdx((i) => (i > 0 ? i - 1 : GALLERY_ITEMS.length - 1))}
            >
              ‹
            </button>
            <button
              className="gallery-modal-nav next"
              aria-label="Next image"
              onClick={() => setSelectedIdx((i) => (i < GALLERY_ITEMS.length - 1 ? i + 1 : 0))}
            >
              ›
            </button>

            <div className="gallery-modal-body">
              <div className="gallery-modal-image-wrap">
                <img
                  src={activeItem.img}
                  alt={t(activeItem.title)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/gallery/ganesh-pol-amber-group.jpg";
                  }}
                />
              </div>
              <div className="gallery-modal-info">
                <span className="eyebrow" style={{ color: "var(--marigold-soft)" }}>{t(activeItem.location)}</span>
                <h3>{t(activeItem.title)}</h3>
                <p className="gallery-modal-quote">{t(activeItem.caption)}</p>
                <span className="gallery-modal-guest">— {activeItem.guest}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
