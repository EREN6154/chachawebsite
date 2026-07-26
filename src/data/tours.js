// Tour catalog for Viajé India Planeta — bilingual (ES/EN) content.
// Each text field is a {es, en} pair. Use the t() helper from
// src/context/LangContext.jsx to read the active language.

export const TOURS = [
  {
    slug: "triangulo-dorado-clasico",
    image: "/images/tours/triangulo-dorado-clasico.jpg",
    title: { es: "Triángulo Dorado Clásico", en: "Classic Golden Triangle" },
    region: { es: "Norte de India", en: "North India" },
    duration: 6,
    nights: 5,
    cities: ["Delhi", "Jaipur", "Agra"],
    tagline: {
      es: "Delhi, Jaipur y Agra en su forma más pura: el circuito que enamoró al mundo.",
      en: "Delhi, Jaipur and Agra in their purest form: the circuit that won the world over."
    },
    priceFrom: 865,
    highlights: [
      { es: "Jama Masjid, Chandni Chowk en riksha y el Fuerte Rojo", en: "Jama Masjid, a rickshaw ride through Chandni Chowk and the Red Fort" },
      { es: "Fuerte Amber a lomos de elefante o jeep", en: "Amber Fort by elephant or jeep" },
      { es: "Amanecer frente al Taj Mahal", en: "Sunrise in front of the Taj Mahal" },
      { es: "Fatehpur Sikri, la ciudad fantasma de Akbar", en: "Fatehpur Sikri, Akbar's ghost city" }
    ],
    includes: [
      { es: "Alojamiento con guía en español", en: "Accommodation with Spanish-speaking guide" },
      { es: "Transporte privado con aire acondicionado", en: "Private air-conditioned transport" },
      { es: "Entradas a los monumentos del itinerario", en: "Entrance fees to all monuments on the itinerary" },
      { es: "Guía de habla hispana todo el recorrido", en: "Spanish-speaking guide for the entire trip" }
    ],
    excludes: [
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Propinas y gastos personales", en: "Tips and personal expenses" },
      { es: "Paseo en elefante (opcional)", en: "Elephant ride (optional)" }
    ],
    days: [
      { d: 1, title: { es: "Llegada a Delhi", en: "Arrival in Delhi" }, text: { es: "Bienvenida tradicional a la llegada al aeropuerto internacional, con guirnalda de flores y pulsera protectora de Rudraksha. Traslado y alojamiento en el hotel.", en: "Traditional welcome on arrival at the international airport, with a flower garland and a protective Rudraksha bracelet. Transfer and overnight at the hotel." } },
      { d: 2, title: { es: "Explorando Delhi", en: "Exploring Delhi" }, text: { es: "Visita a la Vieja Delhi: Jama Masjid, paseo en rickshaw por Chandni Chowk, Raj Ghat y vista del Fuerte Rojo. Por la tarde, la Nueva Delhi colonial: Puerta de India, edificios gubernamentales, Qutub Minar y el templo sij Bangla Sahib.", en: "Visit to Old Delhi: Jama Masjid, a rickshaw ride through Chandni Chowk, Raj Ghat and a view of the Red Fort. In the afternoon, colonial New Delhi: India Gate, government buildings, Qutub Minar and the Bangla Sahib Sikh temple." } },
      { d: 3, title: { es: "Delhi – Jaipur", en: "Delhi – Jaipur" }, text: { es: "Salida por carretera hacia Jaipur, la Ciudad Rosa (260 km). Llegada y alojamiento.", en: "Departure by road to Jaipur, the Pink City (260 km). Arrival and overnight stay." } },
      { d: 4, title: { es: "Explora Jaipur", en: "Explore Jaipur" }, text: { es: "Ascenso al Fuerte Amber en jeep o elefante, panorámica desde el Fuerte Nahargarh, el Jal Mahal flotante, el Palacio de la Ciudad, el observatorio Jantar Mantar y el icónico Hawa Mahal.", en: "Ascent to Amber Fort by jeep or elephant, panoramic views from Nahargarh Fort, the floating Jal Mahal, the City Palace, the Jantar Mantar observatory and the iconic Hawa Mahal." } },
      { d: 5, title: { es: "Jaipur – Agra vía Fatehpur Sikri", en: "Jaipur – Agra via Fatehpur Sikri" }, text: { es: "Ruta hacia Agra con parada en Fatehpur Sikri, la ciudad fantasma de arenisca roja construida por Akbar. Por la tarde, visita al Mehtab Bagh, el jardín frente al Taj Mahal.", en: "Road to Agra with a stop at Fatehpur Sikri, the red sandstone ghost city built by Akbar. In the afternoon, visit Mehtab Bagh, the garden facing the Taj Mahal." } },
      { d: 6, title: { es: "Agra y regreso", en: "Agra and departure" }, text: { es: "Amanecer en el Taj Mahal, paseo por la Agra antigua y visita al Fuerte de Agra. Traslado a Delhi para el vuelo internacional.", en: "Sunrise at the Taj Mahal, a walk through old Agra and a visit to Agra Fort. Transfer to Delhi for the international flight." } }
    ]
  },
  {
    slug: "triangulo-dorado-mandawa",
    image: "/images/tours/triangulo-dorado-mandawa.jpg",
    title: { es: "Triángulo Dorado con Mandawa", en: "Golden Triangle with Mandawa" },
    region: { es: "Norte de India", en: "North India" },
    duration: 8,
    nights: 7,
    cities: ["Delhi", "Agra", "Jaipur", "Mandawa"],
    tagline: {
      es: "El clásico circuito ampliado con los frescos pintados de Shekhawati.",
      en: "The classic circuit extended with the painted frescoes of Shekhawati."
    },
    priceFrom: 1050,
    highlights: [
      { es: "Taj Mahal al atardecer desde la llegada", en: "Taj Mahal at sunset from the day you arrive" },
      { es: "Havelis pintados al fresco en Mandawa", en: "Fresco-painted havelis in Mandawa" },
      { es: "Chand Baori, el pozo escalonado de Abhaneri", en: "Chand Baori, the stepwell of Abhaneri" },
      { es: "Fuerte Amber y ciudad vieja de Jaipur", en: "Amber Fort and Jaipur's old city" }
    ],
    includes: [
      { es: "Alojamiento con guía en español", en: "Accommodation with Spanish-speaking guide" },
      { es: "Transporte privado", en: "Private transport" },
      { es: "Entradas a monumentos", en: "Monument entrance fees" }
    ],
    excludes: [
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Propinas y gastos personales", en: "Tips and personal expenses" }
    ],
    days: [
      { d: 1, title: { es: "Delhi – Agra", en: "Delhi – Agra" }, text: { es: "Llegada a Delhi y traslado directo a Agra. Por la tarde, visita al mirador del Taj Mahal.", en: "Arrival in Delhi and direct transfer to Agra. In the afternoon, visit the Taj Mahal viewpoint." } },
      { d: 2, title: { es: "Agra", en: "Agra" }, text: { es: "Amanecer en el Taj Mahal, la joya de mármol blanco de Shah Jahan, y visita al Fuerte de Agra, construido en arenisca roja por el emperador Akbar.", en: "Sunrise at the Taj Mahal, Shah Jahan's white marble jewel, and a visit to Agra Fort, built in red sandstone by Emperor Akbar." } },
      { d: 3, title: { es: "Agra – Fatehpur Sikri – Abhaneri – Jaipur", en: "Agra – Fatehpur Sikri – Abhaneri – Jaipur" }, text: { es: "Ruta hacia Jaipur con paradas en Fatehpur Sikri y en el imponente pozo escalonado Chand Baori de Abhaneri.", en: "Road to Jaipur with stops at Fatehpur Sikri and the striking Chand Baori stepwell in Abhaneri." } },
      { d: 4, title: { es: "Jaipur", en: "Jaipur" }, text: { es: "Hawa Mahal, ascenso al Fuerte Amber en elefante (opcional), Jal Mahal, Palacio de la Ciudad y Jantar Mantar.", en: "Hawa Mahal, ascent to Amber Fort by elephant (optional), Jal Mahal, the City Palace and Jantar Mantar." } },
      { d: 5, title: { es: "Jaipur – Mandawa", en: "Jaipur – Mandawa" }, text: { es: "Traslado a Mandawa, corazón de la región de Shekhawati, y visita por la tarde a sus famosos havelis decorados con frescos.", en: "Transfer to Mandawa, the heart of the Shekhawati region, and an afternoon visit to its famous fresco-painted havelis." } },
      { d: 6, title: { es: "Mandawa – Delhi", en: "Mandawa – Delhi" }, text: { es: "Regreso por carretera a Delhi.", en: "Return by road to Delhi." } },
      { d: 7, title: { es: "Nueva Delhi", en: "New Delhi" }, text: { es: "Jama Masjid, riksha por Chandni Chowk, Raj Ghat, Qutub Minar y la Nueva Delhi colonial con el templo del Loto.", en: "Jama Masjid, a rickshaw ride through Chandni Chowk, Raj Ghat, Qutub Minar and colonial New Delhi with the Lotus Temple." } },
      { d: 8, title: { es: "Salida", en: "Departure" }, text: { es: "Traslado al aeropuerto para el vuelo internacional.", en: "Transfer to the airport for the international flight." } }
    ]
  },
  {
    slug: "triangulo-dorado-ranthambore",
    image: "/images/tours/triangulo-dorado-ranthambore.jpg",
    title: { es: "Triángulo Dorado con Ranthambore", en: "Golden Triangle with Ranthambore" },
    region: { es: "Norte de India · Vida Salvaje", en: "North India · Wildlife" },
    duration: 7,
    nights: 6,
    cities: ["Delhi", "Jaipur", "Ranthambore", "Agra"],
    tagline: {
      es: "Palacios, mercados y un safari en busca del tigre de Bengala.",
      en: "Palaces, markets and a safari in search of the Bengal tiger."
    },
    priceFrom: 1180,
    highlights: [
      { es: "Safari en jeep por la reserva de Ranthambore", en: "Jeep safari through the Ranthambore reserve" },
      { es: "Fuerte Amber y Fuerte Nahargarh en Jaipur", en: "Amber Fort and Nahargarh Fort in Jaipur" },
      { es: "Danzas folclóricas de Rajastán junto al parque", en: "Rajasthani folk dances by the park" },
      { es: "Taj Mahal y Fuerte de Agra", en: "Taj Mahal and Agra Fort" }
    ],
    includes: [
      { es: "Alojamiento en hotel 4 estrellas", en: "4-star hotel accommodation" },
      { es: "Transporte en sedán con aire acondicionado", en: "Air-conditioned sedan transport" },
      { es: "Guía turístico de habla hispana", en: "Spanish-speaking tour guide" },
      { es: "Entradas a monumentos", en: "Monument entrance fees" },
      { es: "Safari en el parque", en: "Park safari" }
    ],
    excludes: [
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Propinas y gastos personales", en: "Tips and personal expenses" }
    ],
    days: [
      { d: 1, title: { es: "Llegada a Delhi", en: "Arrival in Delhi" }, text: { es: "Bienvenida con guirnaldas y pulsera de Rudraksha a la llegada. Alojamiento en el hotel.", en: "Welcome with garlands and a Rudraksha bracelet on arrival. Overnight at the hotel." } },
      { d: 2, title: { es: "Explorando Delhi", en: "Exploring Delhi" }, text: { es: "Jama Masjid, riksha por Chandni Chowk, Raj Ghat, el pozo Agrasen ki Baori, Qutub Minar y el templo sij Bangla Sahib.", en: "Jama Masjid, a rickshaw ride through Chandni Chowk, Raj Ghat, the Agrasen ki Baori stepwell, Qutub Minar and the Bangla Sahib Sikh temple." } },
      { d: 3, title: { es: "Delhi – Jaipur", en: "Delhi – Jaipur" }, text: { es: "Carretera hacia Jaipur (260 km) y visita al templo de mármol Birla.", en: "Road to Jaipur (260 km) and a visit to the marble Birla Temple." } },
      { d: 4, title: { es: "Explora Jaipur", en: "Explore Jaipur" }, text: { es: "Fuerte Amber en jeep o elefante, vistas desde el Fuerte Nahargarh, el Jal Mahal, Palacio de la Ciudad, Jantar Mantar y el Hawa Mahal.", en: "Amber Fort by jeep or elephant, views from Nahargarh Fort, Jal Mahal, the City Palace, Jantar Mantar and Hawa Mahal." } },
      { d: 5, title: { es: "Jaipur – Ranthambore", en: "Jaipur – Ranthambore" }, text: { es: "Traslado al Parque Nacional Ranthambore. Por la tarde, safari en jeep en busca de tigres, ciervos y fauna del bosque. Noche con música y danza folclórica de Rajastán.", en: "Transfer to Ranthambore National Park. In the afternoon, a jeep safari in search of tigers, deer and forest wildlife. Evening of Rajasthani folk music and dance." } },
      { d: 6, title: { es: "Ranthambore – Fatehpur Sikri – Agra", en: "Ranthambore – Fatehpur Sikri – Agra" }, text: { es: "Ruta hacia Agra con parada en Fatehpur Sikri, la ciudad fantasma de Akbar, y visita al jardín Mehtab Bagh.", en: "Road to Agra with a stop at Fatehpur Sikri, Akbar's ghost city, and a visit to the Mehtab Bagh garden." } },
      { d: 7, title: { es: "Agra – Delhi", en: "Agra – Delhi" }, text: { es: "Visita al Taj Mahal en carro eléctrico, paseo por la Agra antigua, el Fuerte de Agra y traslado a Delhi para el vuelo internacional.", en: "Visit to the Taj Mahal by electric cart, a walk through old Agra, Agra Fort, and transfer to Delhi for the international flight." } }
    ]
  },
  {
    slug: "triangulo-dorado-khajuraho-varanasi",
    image: "/images/tours/triangulo-dorado-khajuraho-varanasi.jpg",
    title: { es: "Triángulo Dorado con Khajuraho y Varanasi", en: "Golden Triangle with Khajuraho and Varanasi" },
    region: { es: "Norte de India · Espiritual", en: "North India · Spiritual" },
    duration: 10,
    nights: 9,
    cities: ["Delhi", "Jaipur", "Agra", "Orchha", "Khajuraho", "Varanasi"],
    tagline: {
      es: "Del esplendor mogol a los templos esculpidos y las orillas sagradas del Ganges.",
      en: "From Mughal splendor to sculpted temples and the sacred banks of the Ganges."
    },
    priceFrom: 1590,
    highlights: [
      { es: "Templos Patrimonio de la Humanidad de Khajuraho", en: "Khajuraho's UNESCO World Heritage temples" },
      { es: "Ciudad palaciega de Orchha", en: "The palace city of Orchha" },
      { es: "Amanecer en barco por el Ganges en Varanasi", en: "Sunrise boat ride on the Ganges in Varanasi" },
      { es: "Ceremonia Aarti a orillas del río sagrado", en: "Aarti ceremony on the banks of the sacred river" }
    ],
    includes: [
      { es: "Alojamiento con guía en español", en: "Accommodation with Spanish-speaking guide" },
      { es: "Transporte", en: "Transport" },
      { es: "Vuelo local", en: "Domestic flight" },
      { es: "Entradas a monumentos", en: "Monument entrance fees" }
    ],
    excludes: [
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Propinas y gastos personales", en: "Tips and personal expenses" },
      { es: "Imprevistos por retrasos o cancelaciones de vuelo", en: "Costs from flight delays or cancellations" }
    ],
    days: [
      { d: 1, title: { es: "Llegada a Delhi", en: "Arrival in Delhi" }, text: { es: "Bienvenida tradicional con guirnaldas y pulsera de Rudraksha. Alojamiento en el hotel.", en: "Traditional welcome with garlands and a Rudraksha bracelet. Overnight at the hotel." } },
      { d: 2, title: { es: "Explorando Delhi", en: "Exploring Delhi" }, text: { es: "Jama Masjid, riksha en Chandni Chowk, Raj Ghat, Qutub Minar, Agrasen ki Baori y el templo sij Bangla Sahib.", en: "Jama Masjid, a rickshaw ride through Chandni Chowk, Raj Ghat, Qutub Minar, Agrasen ki Baori and the Bangla Sahib Sikh temple." } },
      { d: 3, title: { es: "Delhi – Jaipur", en: "Delhi – Jaipur" }, text: { es: "Carretera a Jaipur y visita al templo de mármol Birla.", en: "Road to Jaipur and a visit to the marble Birla Temple." } },
      { d: 4, title: { es: "Explora Jaipur", en: "Explore Jaipur" }, text: { es: "Fuerte Amber, Fuerte Nahargarh, Jal Mahal, Palacio de la Ciudad, Jantar Mantar y Hawa Mahal.", en: "Amber Fort, Nahargarh Fort, Jal Mahal, the City Palace, Jantar Mantar and Hawa Mahal." } },
      { d: 5, title: { es: "Jaipur – Agra vía Fatehpur Sikri", en: "Jaipur – Agra via Fatehpur Sikri" }, text: { es: "Ruta a Agra con parada en la ciudad fantasma de Fatehpur Sikri y visita al Mehtab Bagh al atardecer.", en: "Road to Agra with a stop at the ghost city of Fatehpur Sikri and a sunset visit to Mehtab Bagh." } },
      { d: 6, title: { es: "Explorando Agra", en: "Exploring Agra" }, text: { es: "Amanecer en el Taj Mahal, paseo por la Agra antigua y visita al Fuerte de Agra.", en: "Sunrise at the Taj Mahal, a walk through old Agra and a visit to Agra Fort." } },
      { d: 7, title: { es: "Agra – Jhansi (tren) – Orchha – Khajuraho", en: "Agra – Jhansi (train) – Orchha – Khajuraho" }, text: { es: "Tren a Jhansi, visita a los palacios y templos de Orchha, antigua capital Bundela, y continuación por carretera a Khajuraho.", en: "Train to Jhansi, a visit to the palaces and temples of Orchha, the former Bundela capital, then on by road to Khajuraho." } },
      { d: 8, title: { es: "Templos de Khajuraho – Varanasi", en: "Khajuraho temples – Varanasi" }, text: { es: "Visita a los templos declarados Patrimonio de la Humanidad por la UNESCO, célebres por sus esculturas. Por la tarde, carretera hasta Varanasi.", en: "Visit to the UNESCO World Heritage temples, famous for their sculpture. In the afternoon, road to Varanasi." } },
      { d: 9, title: { es: "Varanasi", en: "Varanasi" }, text: { es: "Paseo en barco al amanecer por el Ganges, recorrido a pie por los callejones sagrados, excursión a Sarnath donde Buda dio su primer sermón, y ceremonia Aarti al anochecer en los ghats.", en: "Sunrise boat ride on the Ganges, a walk through the sacred lanes, an excursion to Sarnath where Buddha gave his first sermon, and an evening Aarti ceremony at the ghats." } },
      { d: 10, title: { es: "Varanasi – Delhi – Salida", en: "Varanasi – Delhi – Departure" }, text: { es: "Vuelo a Delhi y traslado al aeropuerto internacional para el regreso.", en: "Flight to Delhi and transfer to the international airport for the return home." } }
    ]
  },
  {
    slug: "delhi-agra-jaipur-varanasi",
    image: "/images/tours/delhi-agra-jaipur-varanasi.jpg",
    title: { es: "Triángulo Dorado con Varanasi", en: "Golden Triangle with Varanasi" },
    region: { es: "Norte de India · Espiritual", en: "North India · Spiritual" },
    duration: 9,
    nights: 8,
    cities: ["Delhi", "Jaipur", "Agra", "Varanasi"],
    tagline: {
      es: "El circuito clásico con vuelo directo a la ciudad más sagrada del hinduismo.",
      en: "The classic circuit with a direct flight to Hinduism's most sacred city."
    },
    priceFrom: 1140,
    highlights: [
      { es: "Fuerte Amber a lomos de elefante", en: "Amber Fort by elephant" },
      { es: "Taj Mahal y Fuerte de Agra", en: "Taj Mahal and Agra Fort" },
      { es: "Vuelo directo Delhi–Varanasi", en: "Direct flight Delhi–Varanasi" },
      { es: "Paseo en barca de madrugada por el Ganges y ceremonia Aarti", en: "Dawn boat ride on the Ganges and Aarti ceremony" }
    ],
    includes: [
      { es: "8 noches de alojamiento en media pensión", en: "8 nights' accommodation on half board" },
      { es: "Asistencia en el aeropuerto ida y vuelta", en: "Airport assistance both ways" },
      { es: "Entradas a los monumentos", en: "Monument entrance fees" },
      { es: "Riksha en Chandni Chowk", en: "Rickshaw ride in Chandni Chowk" },
      { es: "Elefante o jeep en el Fuerte Amber", en: "Elephant or jeep at Amber Fort" },
      { es: "Guía de habla castellana", en: "Spanish-speaking guide" },
      { es: "Coche con aire acondicionado y WiFi a bordo", en: "Air-conditioned car with onboard WiFi" }
    ],
    excludes: [
      { es: "Tarifa aérea y tasas de aeropuerto", en: "Airfare and airport taxes" },
      { es: "Vuelos internos e internacional, visado", en: "Domestic and international flights, visa" },
      { es: "Gastos personales, propinas, seguros y lavandería", en: "Personal expenses, tips, insurance and laundry" }
    ],
    days: [
      { d: 1, title: { es: "Llegada a Delhi", en: "Arrival in Delhi" }, text: { es: "Recibimiento en el aeropuerto con guirnalda de flores y foto de bienvenida. Traslado al hotel, formalidades de check-in y explicación detallada del viaje.", en: "Airport welcome with a flower garland and a photo. Transfer to the hotel, check-in formalities and a detailed briefing on the trip." } },
      { d: 2, title: { es: "En Delhi", en: "In Delhi" }, text: { es: "Fuerte Rojo, riksha por Chandni Chowk hasta Jama Masjid, la tumba de Gandhi, la Nueva Delhi gubernamental, el templo sij, el Qutub Minar y la milenaria Columna de Hierro.", en: "Red Fort, rickshaw ride through Chandni Chowk to Jama Masjid, Gandhi's memorial, government New Delhi, the Sikh temple, Qutub Minar and the centuries-old Iron Pillar." } },
      { d: 3, title: { es: "Delhi – Jaipur", en: "Delhi – Jaipur" }, text: { es: "Carretera hacia la Ciudad Rosa (265 km). Por la tarde, panorámica de la ciudad y ceremonia vespertina en el templo Birla.", en: "Road to the Pink City (265 km). In the afternoon, a city overview and evening ceremony at the Birla Temple." } },
      { d: 4, title: { es: "Jaipur – Fuerte Amber – Jaipur", en: "Jaipur – Amber Fort – Jaipur" }, text: { es: "Ascenso al Fuerte Amber en elefante, el observatorio astronómico de Jai Singh, el Palacio del Maharajá y el Hawa Mahal.", en: "Ascent to Amber Fort by elephant, Jai Singh's astronomical observatory, the Maharaja's Palace and Hawa Mahal." } },
      { d: 5, title: { es: "Jaipur – Fatehpur Sikri – Agra", en: "Jaipur – Fatehpur Sikri – Agra" }, text: { es: "Ruta hacia Agra con parada en la ciudad abandonada de Fatehpur Sikri.", en: "Road to Agra with a stop at the abandoned city of Fatehpur Sikri." } },
      { d: 6, title: { es: "En Agra", en: "In Agra" }, text: { es: "El Taj Mahal, el Fuerte de Agra y visita al orfanato de la Madre Teresa de Calcuta.", en: "The Taj Mahal, Agra Fort and a visit to Mother Teresa's orphanage." } },
      { d: 7, title: { es: "Agra – Delhi – Varanasi (vuelo)", en: "Agra – Delhi – Varanasi (flight)" }, text: { es: "Traslado a Delhi y vuelo a Varanasi. Por la tarde, primer contacto con el Ganges y la ceremonia Aarti.", en: "Transfer to Delhi and flight to Varanasi. In the afternoon, first contact with the Ganges and the Aarti ceremony." } },
      { d: 8, title: { es: "En Varanasi", en: "In Varanasi" }, text: { es: "Paseo en barca de madrugada por los ghats sagrados, recorrido por la ciudad antigua y excursión a Sarnath, cuna del budismo.", en: "Dawn boat ride along the sacred ghats, a walk through the old city and an excursion to Sarnath, the birthplace of Buddhism." } },
      { d: 9, title: { es: "Varanasi – Delhi – Viaje adelante", en: "Varanasi – Delhi – Onward journey" }, text: { es: "Vuelo a Delhi y conexión con el siguiente destino.", en: "Flight to Delhi and connection to the next destination." } }
    ]
  },
  {
    slug: "golden-triangle-culture-tour",
    image: "/images/tours/golden-triangle-culture-tour.jpg",
    title: { es: "Golden Triangle & Cultura", en: "Golden Triangle & Culture" },
    region: { es: "Norte de India · Espiritual", en: "North India · Spiritual" },
    duration: 11,
    nights: 10,
    cities: ["Delhi", "Jaipur", "Abhaneri", "Fatehpur Sikri", "Agra", "Khajuraho", "Varanasi"],
    tagline: {
      es: "El recorrido más completo por el norte, con el pozo de Abhaneri y los templos de Khajuraho.",
      en: "The most complete route through the north, with the Abhaneri stepwell and the temples of Khajuraho."
    },
    priceFrom: 1690,
    highlights: [
      { es: "El Templo de los Monos y el templo Birla en Jaipur", en: "The Monkey Temple and the Birla Temple in Jaipur" },
      { es: "El pozo escalonado Chand Baori de Abhaneri", en: "The Chand Baori stepwell in Abhaneri" },
      { es: "Templos esculpidos de Khajuraho", en: "The sculpted temples of Khajuraho" },
      { es: "Ghats y ceremonia del Ganges en Varanasi", en: "The ghats and Ganges ceremony in Varanasi" }
    ],
    includes: [
      { es: "Alojamiento", en: "Accommodation" },
      { es: "Traslados y visitas según programa", en: "Transfers and visits as per the program" },
      { es: "Tren Agra–Khajuraho", en: "Train Agra–Khajuraho" },
      { es: "Vuelo Varanasi–Delhi", en: "Flight Varanasi–Delhi" }
    ],
    excludes: [
      { es: "Vuelos internacionales", en: "International flights" },
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Gastos personales", en: "Personal expenses" }
    ],
    days: [
      { d: 1, title: { es: "Nueva Delhi", en: "New Delhi" }, text: { es: "Llegada al aeropuerto internacional, recibimiento por nuestro representante y traslado al hotel.", en: "Arrival at the international airport, welcome by our representative and transfer to the hotel." } },
      { d: 2, title: { es: "Nueva Delhi", en: "New Delhi" }, text: { es: "Jama Masjid, riksha por la Vieja Delhi hasta Chandni Chowk, Raj Ghat, Qutub Minar, el templo sij, la residencia presidencial y el Parlamento, y la Puerta de India.", en: "Jama Masjid, a rickshaw ride through Old Delhi to Chandni Chowk, Raj Ghat, Qutub Minar, the Sikh temple, the presidential residence and Parliament, and India Gate." } },
      { d: 3, title: { es: "Delhi – Jaipur", en: "Delhi – Jaipur" }, text: { es: "Carretera a Jaipur, visita al Templo de los Monos «Galta» y al templo Birla.", en: "Road to Jaipur, a visit to the Galta Monkey Temple and the Birla Temple." } },
      { d: 4, title: { es: "Jaipur", en: "Jaipur" }, text: { es: "Fachada del Palacio de los Vientos, Fuerte Amber, el crematorio real de Gaitor, el Observatorio Solar y el mercado local.", en: "The facade of the Palace of Winds, Amber Fort, the royal cenotaphs at Gaitor, the Solar Observatory and the local market." } },
      { d: 5, title: { es: "Jaipur – Abhaneri – Fatehpur Sikri – Agra", en: "Jaipur – Abhaneri – Fatehpur Sikri – Agra" }, text: { es: "Ruta a Agra con paradas en el pozo Chand Baori de Abhaneri y en la ciudad desierta de Fatehpur Sikri, capital de Akbar en el siglo XVI.", en: "Road to Agra with stops at the Chand Baori stepwell in Abhaneri and the deserted city of Fatehpur Sikri, Akbar's 16th-century capital." } },
      { d: 6, title: { es: "Agra", en: "Agra" }, text: { es: "Taj Mahal, Fuerte Rojo y el pequeño Taj «Itmad-ud-Daula». Por la tarde, otra perspectiva del Taj Mahal desde la otra orilla del río Yamuna.", en: "Taj Mahal, the Red Fort, and the 'Baby Taj' Itmad-ud-Daula. In the afternoon, another view of the Taj Mahal from the far bank of the Yamuna river." } },
      { d: 7, title: { es: "Agra – Khajuraho", en: "Agra – Khajuraho" }, text: { es: "Traslado a la estación para tomar el tren a Khajuraho.", en: "Transfer to the station to take the train to Khajuraho." } },
      { d: 8, title: { es: "Khajuraho", en: "Khajuraho" }, text: { es: "Visita a los templos declarados Patrimonio de la Humanidad, célebres por su arquitectura hindú y sus detalles esculpidos.", en: "Visit to the UNESCO World Heritage temples, famous for their Hindu architecture and sculpted detail." } },
      { d: 9, title: { es: "Khajuraho – Varanasi", en: "Khajuraho – Varanasi" }, text: { es: "Traslado a la ciudad sagrada del hinduismo a orillas del Ganges.", en: "Transfer to Hinduism's sacred city on the banks of the Ganges." } },
      { d: 10, title: { es: "Varanasi", en: "Varanasi" }, text: { es: "Los ghats, paseo en barco por el Ganges, el templo Vishwanath, el templo Bharat Mata y Sarnath. Por la tarde, ceremonia religiosa a orillas del río.", en: "The ghats, a boat ride on the Ganges, the Vishwanath temple, the Bharat Mata temple and Sarnath. In the afternoon, a religious ceremony on the riverbank." } },
      { d: 11, title: { es: "Varanasi – Delhi – Salida", en: "Varanasi – Delhi – Departure" }, text: { es: "Vuelo a Delhi y salida internacional.", en: "Flight to Delhi and international departure." } }
    ]
  },
  {
    slug: "royal-rajasthan",
    image: "/images/tours/royal-rajasthan.jpg",
    title: { es: "Royal Rajasthan", en: "Royal Rajasthan" },
    region: { es: "Rajastán · Gran Circuito", en: "Rajasthan · Grand Circuit" },
    duration: 13,
    nights: 12,
    cities: ["Delhi", "Mandawa", "Bikaner", "Jaisalmer", "Jodhpur", "Udaipur", "Jaipur", "Agra"],
    tagline: {
      es: "El gran recorrido por los palacios, fuertes y desiertos de los maharajás.",
      en: "The grand route through the palaces, forts and deserts of the maharajas."
    },
    priceFrom: 2190,
    highlights: [
      { es: "Havelis pintados de Mandawa", en: "The painted havelis of Mandawa" },
      { es: "Fuerte Junagarh y templo jainista de Bikaner", en: "Junagarh Fort and the Jain temple of Bikaner" },
      { es: "Dunas y paseo en camello en Jaisalmer, la Ciudad Dorada", en: "Dunes and a camel ride in Jaisalmer, the Golden City" },
      { es: "Fuerte Mehrangarh en la Ciudad Azul de Jodhpur", en: "Mehrangarh Fort in the Blue City of Jodhpur" },
      { es: "Lago Pichola y Palacio de la Ciudad en Udaipur", en: "Lake Pichola and the City Palace in Udaipur" }
    ],
    includes: [
      { es: "Alojamiento", en: "Accommodation" },
      { es: "Transporte privado", en: "Private transport" },
      { es: "Guía turístico en español", en: "Spanish-speaking tour guide" },
      { es: "Entradas a monumentos", en: "Monument entrance fees" }
    ],
    excludes: [
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Gastos personales", en: "Personal expenses" }
    ],
    days: [
      { d: 1, title: { es: "Llegada a Delhi", en: "Arrival in Delhi" }, text: { es: "Bienvenida con guirnaldas y pulsera protectora de Rudraksha. Alojamiento en el hotel.", en: "Welcome with garlands and a protective Rudraksha bracelet. Overnight at the hotel." } },
      { d: 2, title: { es: "Explorando Delhi", en: "Exploring Delhi" }, text: { es: "Jama Masjid, riksha por Chandni Chowk, Raj Ghat, Qutub Minar, Agrasen ki Baori y el templo sij Bangla Sahib.", en: "Jama Masjid, a rickshaw ride through Chandni Chowk, Raj Ghat, Qutub Minar, Agrasen ki Baori and the Bangla Sahib Sikh temple." } },
      { d: 3, title: { es: "Delhi – Mandawa", en: "Delhi – Mandawa" }, text: { es: "Carretera hacia Mandawa y visita a sus havelis históricos, joyas de la arquitectura pintada de Shekhawati.", en: "Road to Mandawa and a visit to its historic havelis, gems of Shekhawati's painted architecture." } },
      { d: 4, title: { es: "Mandawa – Bikaner", en: "Mandawa – Bikaner" }, text: { es: "El Fuerte Junagarh, famoso por sus patios y torres, y el templo jainista Bhandasar.", en: "Junagarh Fort, famous for its courtyards and towers, and the Bhandasar Jain temple." } },
      { d: 5, title: { es: "Bikaner – Jaisalmer", en: "Bikaner – Jaisalmer" }, text: { es: "Llegada a la Ciudad Dorada, paseo en barca por el lago Gadisagar y espectáculo de marionetas en el Museo del Patrimonio Thar.", en: "Arrival in the Golden City, a boat ride on Gadisagar Lake and a puppet show at the Thar Heritage Museum." } },
      { d: 6, title: { es: "Explorar Jaisalmer", en: "Explore Jaisalmer" }, text: { es: "El pueblo encantado de Kuldhara, el Fuerte de Jaisalmer, Nathmal Ji Ki Haveli y paseo en camello por las dunas al atardecer.", en: "The haunted village of Kuldhara, Jaisalmer Fort, Nathmal Ji Ki Haveli and a sunset camel ride over the dunes." } },
      { d: 7, title: { es: "Jaisalmer – Jodhpur", en: "Jaisalmer – Jodhpur" }, text: { es: "Llegada a la Ciudad Azul, visita al majestuoso Fuerte Mehrangarh y al cenotafio de mármol Jaswant Thada.", en: "Arrival in the Blue City, a visit to the majestic Mehrangarh Fort and the marble cenotaph of Jaswant Thada." } },
      { d: 8, title: { es: "Jodhpur – Udaipur vía Ranakpur", en: "Jodhpur – Udaipur via Ranakpur" }, text: { es: "Ruta hacia Udaipur con parada en los templos jainistas de Ranakpur, con sus 1.444 pilares esculpidos.", en: "Road to Udaipur with a stop at the Jain temples of Ranakpur, with their 1,444 carved pillars." } },
      { d: 9, title: { es: "Exploración de Udaipur", en: "Exploring Udaipur" }, text: { es: "El Palacio de la Ciudad a orillas del lago Pichola, paseo en barco por el lago, los jardines Saheliyon-ki-Bari y la escuela de pintura en miniatura.", en: "The City Palace on the shores of Lake Pichola, a boat ride on the lake, the Saheliyon-ki-Bari gardens and a miniature painting school." } },
      { d: 10, title: { es: "Udaipur – Jaipur", en: "Udaipur – Jaipur" }, text: { es: "Carretera hacia la Ciudad Rosa y visita al templo Birla.", en: "Road to the Pink City and a visit to the Birla Temple." } },
      { d: 11, title: { es: "Exploración de Jaipur", en: "Exploring Jaipur" }, text: { es: "Fuerte Amber, Fuerte Nahargarh, el Jal Mahal, el Palacio de la Ciudad, Jantar Mantar y el Hawa Mahal.", en: "Amber Fort, Nahargarh Fort, Jal Mahal, the City Palace, Jantar Mantar and Hawa Mahal." } },
      { d: 12, title: { es: "Jaipur – Agra vía Fatehpur Sikri", en: "Jaipur – Agra via Fatehpur Sikri" }, text: { es: "Ruta hacia Agra con parada en Fatehpur Sikri y visita al Mehtab Bagh.", en: "Road to Agra with a stop at Fatehpur Sikri and a visit to Mehtab Bagh." } },
      { d: 13, title: { es: "Agra – Delhi", en: "Agra – Delhi" }, text: { es: "Amanecer en el Taj Mahal, paseo por la Agra antigua, el Fuerte de Agra y traslado a Delhi para el vuelo internacional.", en: "Sunrise at the Taj Mahal, a walk through old Agra, Agra Fort and transfer to Delhi for the international flight." } }
    ]
  },
  {
    slug: "mini-rajasthan",
    image: "/images/tours/mini-rajasthan.jpg",
    title: { es: "Mini Rajastán", en: "Mini Rajasthan" },
    region: { es: "Rajastán", en: "Rajasthan" },
    duration: 9,
    nights: 8,
    cities: ["Delhi", "Udaipur", "Jodhpur", "Jaipur", "Agra"],
    tagline: {
      es: "Lo esencial de Rajastán en un ritmo cómodo, con vuelo directo a Udaipur.",
      en: "The essentials of Rajasthan at a comfortable pace, with a direct flight to Udaipur."
    },
    priceFrom: 1420,
    highlights: [
      { es: "Lago Pichola y Palacio de la Ciudad en Udaipur", en: "Lake Pichola and the City Palace in Udaipur" },
      { es: "Fuerte Mehrangarh en la Ciudad Azul de Jodhpur", en: "Mehrangarh Fort in the Blue City of Jodhpur" },
      { es: "Templos de Ranakpur en ruta", en: "The temples of Ranakpur along the way" },
      { es: "Fuerte Amber y Taj Mahal", en: "Amber Fort and the Taj Mahal" }
    ],
    includes: [
      { es: "Alojamiento", en: "Accommodation" },
      { es: "Transporte", en: "Transport" },
      { es: "Guía de habla hispana", en: "Spanish-speaking guide" },
      { es: "Entradas a monumentos", en: "Monument entrance fees" },
      { es: "Vuelo local Delhi–Udaipur", en: "Domestic flight Delhi–Udaipur" }
    ],
    excludes: [
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Gastos personales", en: "Personal expenses" }
    ],
    days: [
      { d: 1, title: { es: "Llegada a Delhi", en: "Arrival in Delhi" }, text: { es: "Bienvenida tradicional con guirnaldas y pulsera de Rudraksha.", en: "Traditional welcome with garlands and a Rudraksha bracelet." } },
      { d: 2, title: { es: "Explorando Delhi", en: "Exploring Delhi" }, text: { es: "Jama Masjid, riksha en Chandni Chowk, Raj Ghat, Qutub Minar y el templo sij Bangla Sahib.", en: "Jama Masjid, a rickshaw ride through Chandni Chowk, Raj Ghat, Qutub Minar and the Bangla Sahib Sikh temple." } },
      { d: 3, title: { es: "Delhi – Udaipur (vuelo)", en: "Delhi – Udaipur (flight)" }, text: { es: "Vuelo a Udaipur y tarde libre para instalarse.", en: "Flight to Udaipur and a free afternoon to settle in." } },
      { d: 4, title: { es: "Exploración de Udaipur", en: "Exploring Udaipur" }, text: { es: "El Palacio de la Ciudad, paseo en barco por el lago Pichola y los jardines Saheliyon-ki-Bari.", en: "The City Palace, a boat ride on Lake Pichola and the Saheliyon-ki-Bari gardens." } },
      { d: 5, title: { es: "Udaipur – Jodhpur vía Ranakpur", en: "Udaipur – Jodhpur via Ranakpur" }, text: { es: "Ruta con parada en los templos jainistas de Ranakpur, el complejo con más pilares esculpidos de India.", en: "Road with a stop at the Jain temples of Ranakpur, India's most heavily pillared temple complex." } },
      { d: 6, title: { es: "Jodhpur – Jaipur", en: "Jodhpur – Jaipur" }, text: { es: "Visita a la Ciudad Azul antes de continuar hacia Jaipur.", en: "A visit to the Blue City before continuing on to Jaipur." } },
      { d: 7, title: { es: "Explorando Jaipur", en: "Exploring Jaipur" }, text: { es: "Fuerte Amber, Fuerte Nahargarh, Jal Mahal, Palacio de la Ciudad, Jantar Mantar y Hawa Mahal.", en: "Amber Fort, Nahargarh Fort, Jal Mahal, the City Palace, Jantar Mantar and Hawa Mahal." } },
      { d: 8, title: { es: "Jaipur – Fatehpur Sikri – Agra", en: "Jaipur – Fatehpur Sikri – Agra" }, text: { es: "Ruta hacia Agra con parada en la ciudad fantasma de Fatehpur Sikri.", en: "Road to Agra with a stop at the ghost city of Fatehpur Sikri." } },
      { d: 9, title: { es: "Explorando Agra y regreso a Delhi", en: "Exploring Agra and return to Delhi" }, text: { es: "Amanecer en el Taj Mahal, el Fuerte de Agra y traslado a Delhi para la salida internacional.", en: "Sunrise at the Taj Mahal, Agra Fort and transfer to Delhi for the international departure." } }
    ]
  },
  {
    slug: "lo-mejor-de-la-india",
    image: "/images/tours/lo-mejor-de-la-india.jpg",
    title: { es: "Lo Mejor de la India", en: "The Best of India" },
    region: { es: "Norte de India", en: "North India" },
    duration: 7,
    nights: 6,
    cities: ["Delhi", "Mandawa", "Jaipur", "Agra"],
    tagline: {
      es: "Un ritmo pausado entre la capital, los havelis pintados y el Taj Mahal.",
      en: "An unhurried pace between the capital, the painted havelis and the Taj Mahal."
    },
    priceFrom: 990,
    highlights: [
      { es: "Vieja y Nueva Delhi en un solo día completo", en: "Old and New Delhi in one full day" },
      { es: "Havelis con frescos en Mandawa", en: "Fresco-painted havelis in Mandawa" },
      { es: "Ceremonia Aarti en el templo Birla de Jaipur", en: "Aarti ceremony at the Birla Temple in Jaipur" },
      { es: "Fuerte Amber en elefante y Taj Mahal al atardecer", en: "Amber Fort by elephant and the Taj Mahal at sunset" }
    ],
    includes: [
      { es: "Alojamiento", en: "Accommodation" },
      { es: "Media pensión", en: "Half board" },
      { es: "Transporte privado", en: "Private transport" },
      { es: "Guía de habla hispana", en: "Spanish-speaking guide" }
    ],
    excludes: [
      { es: "Vuelos internacionales", en: "International flights" },
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Gastos personales", en: "Personal expenses" }
    ],
    days: [
      { d: 1, title: { es: "Llegada a Delhi", en: "Arrival in Delhi" }, text: { es: "Recibimiento en el aeropuerto y traslado al hotel.", en: "Airport welcome and transfer to the hotel." } },
      { d: 2, title: { es: "Delhi", en: "Delhi" }, text: { es: "Raj Ghat, el templo sij de Bangla Sahib, la Gran Mezquita Jama Masjid y paseo en riksha por Chandni Chowk. Por la tarde, Rajpath, la Puerta de India, el Parlamento, el Palacio Presidencial y el Qutub Minar.", en: "Raj Ghat, the Bangla Sahib Sikh temple, the Great Mosque Jama Masjid and a rickshaw ride through Chandni Chowk. In the afternoon, Rajpath, India Gate, Parliament, the Presidential Palace and Qutub Minar." } },
      { d: 3, title: { es: "Delhi – Mandawa", en: "Delhi – Mandawa" }, text: { es: "Carretera hacia Mandawa, en la región de Shekhawati, y paseo por sus calles de havelis con fachadas pintadas al fresco.", en: "Road to Mandawa, in the Shekhawati region, and a walk through its streets of fresco-painted haveli facades." } },
      { d: 4, title: { es: "Mandawa – Jaipur", en: "Mandawa – Jaipur" }, text: { es: "Llegada a la Ciudad Rosa y ceremonia Aarti al atardecer en el templo Birla.", en: "Arrival in the Pink City and a sunset Aarti ceremony at the Birla Temple." } },
      { d: 5, title: { es: "Jaipur", en: "Jaipur" }, text: { es: "Ascenso al Fuerte Amber a lomos de elefante, el Palacio del Maharajá, el Observatorio Jai Singh y el Palacio de los Vientos.", en: "Ascent to Amber Fort by elephant, the Maharaja's Palace, the Jai Singh Observatory and the Palace of Winds." } },
      { d: 6, title: { es: "Jaipur – Agra", en: "Jaipur – Agra" }, text: { es: "Ruta con parada en Abhaneri y Fatehpur Sikri. Al atardecer, el Taj Mahal envuelto en tonos rojizos.", en: "Road with a stop in Abhaneri and Fatehpur Sikri. At sunset, the Taj Mahal wrapped in reddish tones." } },
      { d: 7, title: { es: "Agra – Delhi – Salida", en: "Agra – Delhi – Departure" }, text: { es: "El Fuerte Rojo de Agra y el ashram de la Madre Teresa, traslado a Delhi y vuelo de salida.", en: "Agra's Red Fort and Mother Teresa's ashram, transfer to Delhi and departure flight." } }
    ]
  },
  {
    slug: "karnataka-tamil-nadu-gran-sur",
    image: "/images/tours/karnataka-tamil-nadu-gran-sur.jpg",
    title: { es: "Karnataka & Tamil Nadu: Gran Sur", en: "Karnataka & Tamil Nadu: Grand South" },
    region: { es: "Sur de India", en: "South India" },
    duration: 16,
    nights: 15,
    cities: ["Bangalore", "Mysore", "Chennai", "Mahabalipuram", "Thanjavur", "Madurai", "Periyar", "Alleppey", "Kochi"],
    tagline: {
      es: "El recorrido más completo del sur: palacios de maharajás, templos milenarios y los backwaters de Kerala.",
      en: "The most complete route through the south: maharaja palaces, ancient temples and the backwaters of Kerala."
    },
    priceFrom: 2450,
    highlights: [
      { es: "El deslumbrante Palacio de Mysore", en: "The dazzling Mysore Palace" },
      { es: "Templos Hoysala de Somanathapura y Chennai colonial", en: "The Hoysala temples of Somanathapura and colonial Chennai" },
      { es: "Templos de Mahabalipuram y Kanchipuram, la ciudad de oro", en: "The temples of Mahabalipuram and Kanchipuram, the golden city" },
      { es: "Noche en houseboat por los backwaters de Alleppey", en: "A night on a houseboat through the Alleppey backwaters" },
      { es: "Barrio judío y redes de pesca chinas en Kochi", en: "The Jewish quarter and Chinese fishing nets in Kochi" }
    ],
    includes: [
      { es: "Alojamiento", en: "Accommodation" },
      { es: "Comidas según programa", en: "Meals as per the program" },
      { es: "Traslados y visitas privadas", en: "Private transfers and visits" },
      { es: "Noche en houseboat con pensión completa", en: "Houseboat night on full board" }
    ],
    excludes: [
      { es: "Vuelos internacionales", en: "International flights" },
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Gastos personales", en: "Personal expenses" },
      { es: "Masaje ayurvédico y danza Kathakali (opcionales)", en: "Ayurvedic massage and Kathakali dance (optional)" }
    ],
    days: [
      { d: 1, title: { es: "Bangalore – Mysore", en: "Bangalore – Mysore" }, text: { es: "Llegada a Bangalore, traslado a Mysore y primer recorrido por la ciudad de los palacios de las mil y una noches.", en: "Arrival in Bangalore, transfer to Mysore and a first walk through this city of Arabian Nights-style palaces." } },
      { d: 2, title: { es: "Mysore", en: "Mysore" }, text: { es: "El deslumbrante Palacio de Mysore (Amba Vilas), residencia de la dinastía Wodeyar, y el colorido mercado Devaraja.", en: "The dazzling Mysore Palace (Amba Vilas), residence of the Wodeyar dynasty, and the colorful Devaraja market." } },
      { d: 3, title: { es: "Mysore", en: "Mysore" }, text: { es: "La colina de Chamundi con la estatua del Toro Sagrado, el Palacio de Verano del sultán Tipu y las tiendas de seda y sándalo de Mysore.", en: "Chamundi Hill with the statue of the Sacred Bull, Sultan Tipu's Summer Palace, and Mysore's silk and sandalwood shops." } },
      { d: 4, title: { es: "Mysore", en: "Mysore" }, text: { es: "Excursión al Monasterio de Oro de Namdroling, el mayor asentamiento tibetano del mundo, con su mercado tibetano.", en: "Excursion to the Golden Temple of Namdroling, the largest Tibetan settlement in the world, with its Tibetan market." } },
      { d: 5, title: { es: "Mysore – Templo Keshava – Bangalore", en: "Mysore – Keshava Temple – Bangalore" }, text: { es: "Visita al templo Hoysala de Keshava en Somanathapura antes de continuar hacia Bangalore.", en: "Visit to the Hoysala Keshava temple in Somanathapura before continuing on to Bangalore." } },
      { d: 6, title: { es: "Bangalore – Chennai", en: "Bangalore – Chennai" }, text: { es: "Trayecto por carretera hasta Chennai, capital de Tamil Nadu.", en: "Road journey to Chennai, the capital of Tamil Nadu." } },
      { d: 7, title: { es: "Chennai", en: "Chennai" }, text: { es: "Museo Nacional, el Fuerte de San Jorge, la Playa Marina, la Basílica de Santo Tomé y el templo de Kapaleeshwarar.", en: "The National Museum, Fort St. George, Marina Beach, the Basilica of San Thome and the Kapaleeshwarar temple." } },
      { d: 8, title: { es: "Chennai – Kanchipuram – Mahabalipuram", en: "Chennai – Kanchipuram – Mahabalipuram" }, text: { es: "Kanchipuram, la ciudad de oro, y los templos costeros de Mahabalipuram, con la Penitencia de Arjuna.", en: "Kanchipuram, the golden city, and the coastal temples of Mahabalipuram, with Arjuna's Penance." } },
      { d: 9, title: { es: "Mahabalipuram – Darasuram – Thanjavur", en: "Mahabalipuram – Darasuram – Thanjavur" }, text: { es: "El templo Airavatesvara de Darasuram, tallado en piedra bajo la dinastía Chola.", en: "The Airavatesvara temple in Darasuram, carved in stone under the Chola dynasty." } },
      { d: 10, title: { es: "Thanjavur – Trichy", en: "Thanjavur – Trichy" }, text: { es: "La fortaleza de roca de Trichy y el templo amurallado de Sri Ranganathaswamy en Srirangam.", en: "Trichy's rock fort and the walled Sri Ranganathaswamy temple in Srirangam." } },
      { d: 11, title: { es: "Thanjavur – Madurai", en: "Thanjavur – Madurai" }, text: { es: "El templo Meenakshi, con sus diez gopurams de colores, el palacio de Thirumalai Nayak y una puja hinduista al atardecer.", en: "The Meenakshi temple, with its ten colorful gopurams, the palace of Thirumalai Nayak and an evening Hindu puja." } },
      { d: 12, title: { es: "Madurai – Periyar", en: "Madurai – Periyar" }, text: { es: "Caminata guiada por el santuario natural de Periyar, hogar de ciervos, mangostas y una gran variedad de aves.", en: "Guided walk through the Periyar nature sanctuary, home to deer, mongooses and a wide variety of birds." } },
      { d: 13, title: { es: "Periyar – Alleppey", en: "Periyar – Alleppey" }, text: { es: "Embarque en un tradicional houseboat para un crucero por los canales y palmerales de los backwaters de Kerala.", en: "Boarding a traditional houseboat for a cruise through the canals and palm groves of Kerala's backwaters." } },
      { d: 14, title: { es: "Alleppey – Kochi", en: "Alleppey – Kochi" }, text: { es: "El barrio judío, la sinagoga y el Palacio de Mattancherry, las redes de pesca chinas y la iglesia de San Francisco.", en: "The Jewish quarter, the synagogue and Mattancherry Palace, the Chinese fishing nets and St. Francis Church." } },
      { d: 15, title: { es: "Kochi", en: "Kochi" }, text: { es: "Día libre, con danza Kathakali o masaje ayurvédico opcionales.", en: "Free day, with optional Kathakali dance or Ayurvedic massage." } },
      { d: 16, title: { es: "Kochi – Salida", en: "Kochi – Departure" }, text: { es: "Traslado al aeropuerto para el vuelo de regreso.", en: "Transfer to the airport for the flight home." } }
    ]
  },
  {
    slug: "sur-de-india-clasico",
    image: "/images/tours/sur-de-india-clasico.jpg",
    title: { es: "Sur de India Clásico", en: "Classic South India" },
    region: { es: "Sur de India", en: "South India" },
    duration: 11,
    nights: 10,
    cities: ["Chennai", "Mahabalipuram", "Pondicherry", "Thanjavur", "Madurai", "Thekkady", "Kumarakom", "Cochin"],
    tagline: {
      es: "Templos dravídicos, un rincón de Francia en Pondicherry y los canales de Kerala.",
      en: "Dravidian temples, a corner of France in Pondicherry, and the canals of Kerala."
    },
    priceFrom: 1780,
    highlights: [
      { es: "Cinco Rathas y templos costeros de Mahabalipuram", en: "The Five Rathas and coastal temples of Mahabalipuram" },
      { es: "El encanto colonial francés de Pondicherry", en: "The French colonial charm of Pondicherry" },
      { es: "Templo Meenakshi de Madurai", en: "The Meenakshi temple in Madurai" },
      { es: "Reserva de tigres de Periyar y santuario de aves de Kumarakom", en: "Periyar's tiger reserve and the Kumarakom bird sanctuary" }
    ],
    includes: [
      { es: "Alojamiento", en: "Accommodation" },
      { es: "Traslados y visitas privadas", en: "Private transfers and visits" },
      { es: "Guía local", en: "Local guide" }
    ],
    excludes: [
      { es: "Vuelos internacionales", en: "International flights" },
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Gastos personales", en: "Personal expenses" }
    ],
    days: [
      { d: 1, title: { es: "Chennai – Mahabalipuram", en: "Chennai – Mahabalipuram" }, text: { es: "Recepción en el aeropuerto y traslado directo a Mahabalipuram.", en: "Airport reception and direct transfer to Mahabalipuram." } },
      { d: 2, title: { es: "Mahabalipuram – Kanchipuram", en: "Mahabalipuram – Kanchipuram" }, text: { es: "Los templos Kailasantha y Ekambaraeswara en Kanchipuram, y de vuelta el templo costero y los Cinco Rathas de Mahabalipuram.", en: "The Kailasantha and Ekambaraeswara temples in Kanchipuram, then back to the Shore Temple and the Five Rathas of Mahabalipuram." } },
      { d: 3, title: { es: "Mahabalipuram – Pondicherry", en: "Mahabalipuram – Pondicherry" }, text: { es: "Parada en Auroville de camino, la Playa Promenade, el museo local y la iglesia de Santa María.", en: "A stop in Auroville along the way, Promenade Beach, the local museum and the Church of Our Lady." } },
      { d: 4, title: { es: "Pondicherry – Thanjavur", en: "Pondicherry – Thanjavur" }, text: { es: "Los templos de Chidambaram Natarajar, Gangaikonda Cholapuram y Darasuram, y el pueblo de fundición de bronce Chola.", en: "The temples of Chidambaram Natarajar, Gangaikonda Cholapuram and Darasuram, and the Chola bronze-casting village." } },
      { d: 5, title: { es: "Thanjavur – Trichy – Madurai", en: "Thanjavur – Trichy – Madurai" }, text: { es: "El templo Brihadisvara, joya de la arquitectura del sur, el templo de Srirangam y las mansiones de Chettinad.", en: "The Brihadisvara temple, a jewel of southern architecture, the Srirangam temple and the mansions of Chettinad." } },
      { d: 6, title: { es: "Madurai", en: "Madurai" }, text: { es: "El mercado de flores, el templo Meenakshi, el palacio Thirumalai Nayak y el templo Thirupparankundram.", en: "The flower market, the Meenakshi temple, the palace of Thirumalai Nayak and the Thirupparankundram temple." } },
      { d: 7, title: { es: "Madurai – Thekkady", en: "Madurai – Thekkady" }, text: { es: "La reserva de tigres de Periyar, paseo en elefante y visita a una plantación de especias.", en: "The Periyar tiger reserve, an elephant ride and a visit to a spice plantation." } },
      { d: 8, title: { es: "Thekkady – Kumarakom", en: "Thekkady – Kumarakom" }, text: { es: "El pueblo de Alappey Backwater, el santuario de aves de Kumarakom y paseo en barco.", en: "The Alappey backwater village, the Kumarakom bird sanctuary and a boat ride." } },
      { d: 9, title: { es: "Kumarakom – Cochin", en: "Kumarakom – Cochin" }, text: { es: "Traslado a Cochin y espectáculo de danza Kathakali por la tarde.", en: "Transfer to Cochin and a Kathakali dance performance in the evening." } },
      { d: 10, title: { es: "Cochin", en: "Cochin" }, text: { es: "El Palacio de Mattancherry, la sinagoga judía, la iglesia de St. Francis y la playa de Cochin.", en: "Mattancherry Palace, the Jewish synagogue, St. Francis Church and Cochin beach." } },
      { d: 11, title: { es: "Salida", en: "Departure" }, text: { es: "Traslado al aeropuerto de Cochin para el vuelo de regreso.", en: "Transfer to Cochin airport for the flight home." } }
    ]
  },
  {
    slug: "la-danza-de-shiva",
    image: "/images/tours/la-danza-de-shiva.jpg",
    title: { es: "La Danza de Shiva", en: "The Dance of Shiva" },
    region: { es: "Sur de India · Espiritual", en: "South India · Spiritual" },
    duration: 12,
    nights: 11,
    cities: ["Chennai", "Pondicherry", "Tanjore", "Chettinadu", "Madurai", "Periyar", "Alleppey", "Cochin"],
    tagline: {
      es: "Un viaje devocional por los grandes templos de Shiva, hasta los canales de Kerala.",
      en: "A devotional journey through the great temples of Shiva, down to the canals of Kerala."
    },
    priceFrom: 1950,
    highlights: [
      { es: "El templo de Kailashnath en Kanchipuram", en: "The Kailashnath temple in Kanchipuram" },
      { es: "El Shiva danzante de Chidambaram", en: "The dancing Shiva of Chidambaram" },
      { es: "El templo Brihadeeswara de Thanjavur", en: "The Brihadeeswara temple in Thanjavur" },
      { es: "Crucero en Kettuvallam por los backwaters", en: "A Kettuvallam cruise through the backwaters" },
      { es: "Kathakali en Cochin", en: "Kathakali in Cochin" }
    ],
    includes: [
      { es: "11 noches de alojamiento en doble", en: "11 nights' accommodation in a double room" },
      { es: "Media pensión", en: "Half board" },
      { es: "Almuerzo en houseboat", en: "Lunch on the houseboat" },
      { es: "Traslados en vehículo con aire acondicionado", en: "Transfers in an air-conditioned vehicle" }
    ],
    excludes: [
      { es: "Vuelos internacionales", en: "International flights" },
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Gastos personales", en: "Personal expenses" }
    ],
    days: [
      { d: 1, title: { es: "Llegada a Chennai", en: "Arrival in Chennai" }, text: { es: "Recepción en el aeropuerto y visita de orientación con el mercado de frutas y verduras de la ciudad.", en: "Airport reception and an orientation visit including the city's fruit and vegetable market." } },
      { d: 2, title: { es: "Chennai – Kanchipuram – Chennai", en: "Chennai – Kanchipuram – Chennai" }, text: { es: "Una de las siete ciudades sagradas de India, con el templo Kailashnath dedicado a Shiva, y de vuelta el Memorial de Gandhi y Marine Beach.", en: "One of India's seven sacred cities, with the Kailashnath temple dedicated to Shiva, then back to Gandhi's Memorial and Marina Beach." } },
      { d: 3, title: { es: "Chennai – Mahabalipuram – Pondicherry", en: "Chennai – Mahabalipuram – Pondicherry" }, text: { es: "Los Cinco Rathas de Mahabalipuram y, en Pondicherry, el Sri Aurobindo Ashram y el legado colonial francés.", en: "The Five Rathas of Mahabalipuram and, in Pondicherry, the Sri Aurobindo Ashram and the French colonial legacy." } },
      { d: 4, title: { es: "Pondicherry – Chidambaram – Tanjore – Kumbakonam", en: "Pondicherry – Chidambaram – Tanjore – Kumbakonam" }, text: { es: "El templo de Sri Nataraja en Chidambaram, dedicado al Shiva danzante, y el templo Brihadeeswara de Tanjore.", en: "The Sri Nataraja temple in Chidambaram, dedicated to the dancing Shiva, and the Brihadeeswara temple in Tanjore." } },
      { d: 5, title: { es: "Kumbakonam – Trichy – Chettinadu", en: "Kumbakonam – Trichy – Chettinadu" }, text: { es: "La zona de templos de Trichy, antigua capital Chola, y llegada a las mansiones de Chettinad.", en: "The temple district of Trichy, the former Chola capital, and arrival at the mansions of Chettinad." } },
      { d: 6, title: { es: "Chettinadu – Madurai", en: "Chettinadu – Madurai" }, text: { es: "El complejo del templo Meenakshi y el Palacio Tirumala Nayak en la ciudad santa de Madurai.", en: "The Meenakshi temple complex and the Thirumalai Nayak Palace in the holy city of Madurai." } },
      { d: 7, title: { es: "Madurai – Periyar", en: "Madurai – Periyar" }, text: { es: "El Parque Natural de Periyar, con su lago artificial y avistamiento de fauna.", en: "Periyar Nature Park, with its artificial lake and wildlife spotting." } },
      { d: 8, title: { es: "Periyar – Kumarakom", en: "Periyar – Kumarakom" }, text: { es: "Visita a una plantación de especias antes de continuar hacia Kumarakom.", en: "A visit to a spice plantation before continuing on to Kumarakom." } },
      { d: 9, title: { es: "Kumarakom – Cochin", en: "Kumarakom – Cochin" }, text: { es: "Crucero en Kettuvallam por los backwaters de Alleppey y llegada a Cochin, con su mercado de especias.", en: "A Kettuvallam cruise through the Alleppey backwaters and arrival in Cochin, with its spice market." } },
      { d: 10, title: { es: "Cochin", en: "Cochin" }, text: { es: "El Palacio de Mattancherry con sus frescos del Ramayana, la sinagoga y por la noche, danza Kathakali.", en: "Mattancherry Palace with its Ramayana frescoes, the synagogue, and Kathakali dance in the evening." } },
      { d: 11, title: { es: "Salida desde Cochin", en: "Departure from Cochin" }, text: { es: "Traslado al aeropuerto para el vuelo internacional.", en: "Transfer to the airport for the international flight." } }
    ]
  },
  {
    slug: "odisha-chhattisgarh-tribal",
    image: "/images/tours/odisha-chhattisgarh-tribal.jpg",
    title: { es: "Odisha & Chhattisgarh: Patrimonio Tribal y Fauna", en: "Odisha & Chhattisgarh: Tribal Heritage and Wildlife" },
    region: { es: "Este de India · Tribal & Vida Salvaje", en: "East India · Tribal & Wildlife" },
    duration: 11,
    nights: 10,
    cities: ["Bhubaneswar", "Puri", "Gopalpur", "Rayagada", "Jeypore", "Jagdalpur", "Kondagaon", "Raipur", "Kanha"],
    tagline: {
      es: "Templos milenarios, mercados tribales semanales y un safari en el parque que inspiró El Libro de la Selva.",
      en: "Ancient temples, weekly tribal markets and a safari in the park that inspired The Jungle Book."
    },
    priceFrom: 2290,
    highlights: [
      { es: "Templo del Sol de Konark, Patrimonio de la Humanidad", en: "The Konark Sun Temple, a UNESCO World Heritage Site" },
      { es: "Mercados tribales semanales de Chatikona y Onkudelli", en: "The weekly tribal markets of Chatikona and Onkudelli" },
      { es: "Comunidades Dongaria Kondh, Bonda y Gadaba", en: "The Dongaria Kondh, Bonda and Gadaba communities" },
      { es: "Danza del cuerno de bisonte de los Gond", en: "The Gond Bison Horn dance" },
      { es: "Safaris de tigres en el Parque Nacional Kanha", en: "Tiger safaris in Kanha National Park" }
    ],
    includes: [
      { es: "Alojamiento", en: "Accommodation" },
      { es: "Vehículo con aire acondicionado", en: "Air-conditioned vehicle" },
      { es: "Guía especializado en cultura tribal", en: "Guide specialized in tribal culture" },
      { es: "Safaris en jeep en Kanha", en: "Jeep safaris in Kanha" }
    ],
    excludes: [
      { es: "Vuelos internacionales", en: "International flights" },
      { es: "Seguro de viaje", en: "Travel insurance" },
      { es: "Gastos personales", en: "Personal expenses" }
    ],
    days: [
      { d: 1, title: { es: "Llegada a Bhubaneswar", en: "Arrival in Bhubaneswar" }, text: { es: "La Ciudad de los Templos de India, con el templo Lingaraj, el Mukteshwar y el Museo Tribal Estatal.", en: "India's Temple City, with the Lingaraj temple, the Mukteshwar temple and the State Tribal Museum." } },
      { d: 2, title: { es: "Excursión a Konark y Puri", en: "Excursion to Konark and Puri" }, text: { es: "El Templo del Sol de Konark, con forma de carro ceremonial, el templo tántrico de las 64 Yoginis y el templo de Jagannath en Puri (visita exterior).", en: "The Konark Sun Temple, shaped like a ceremonial chariot, the tantric 64 Yoginis temple, and the Jagannath temple in Puri (exterior visit)." } },
      { d: 3, title: { es: "Bhubaneswar – Gopalpur", en: "Bhubaneswar – Gopalpur" }, text: { es: "Ruta costera con parada en el lago Chilika para un paseo en barca por sus canales, rico en aves migratorias.", en: "Coastal route with a stop at Lake Chilika for a boat ride through its channels, rich in migratory birds." } },
      { d: 4, title: { es: "Gopalpur – Rayagada", en: "Gopalpur – Rayagada" }, text: { es: "Encuentro con la tribu Lanjia Saura en las tierras altas de Puttasing, conocida por sus murales rituales Idital.", en: "A meeting with the Lanjia Saura tribe in the highlands of Puttasing, known for its ritual Idital murals." } },
      { d: 5, title: { es: "Rayagada – Mercado de Chatikona – Jeypore", en: "Rayagada – Chatikona Market – Jeypore" }, text: { es: "El mercado semanal donde las comunidades Dongaria Kondh y Desia Kondh bajan de las colinas a comerciar.", en: "The weekly market where the Dongaria Kondh and Desia Kondh communities come down from the hills to trade." } },
      { d: 6, title: { es: "Jeypore – Mercado de Onkudelli – Jagdalpur", en: "Jeypore – Onkudelli Market – Jagdalpur" }, text: { es: "Uno de los mercados tribales más vibrantes de Odisha, con las comunidades Bonda y Gadaba, y las cascadas de Chitrakut.", en: "One of Odisha's most vibrant tribal markets, with the Bonda and Gadaba communities, and the Chitrakut waterfalls." } },
      { d: 7, title: { es: "Jagdalpur – Kondagaon – Raipur", en: "Jagdalpur – Kondagaon – Raipur" }, text: { es: "Aldeas de la tribu Gond Bison Horn con demostración de su danza tradicional, y el pueblo de Kondagaon, célebre por su artesanía en hierro.", en: "Villages of the Bison Horn Gond tribe with a demonstration of their traditional dance, and the village of Kondagaon, famous for its ironwork crafts." } },
      { d: 8, title: { es: "Excursión a Rajim Mela", en: "Excursion to Rajim Mela" }, text: { es: "La versión reducida del Kumbh Mela, con peregrinos y sadhus bañándose en el río Mahanadi.", en: "A smaller-scale Kumbh Mela, with pilgrims and sadhus bathing in the Mahanadi river." } },
      { d: 9, title: { es: "Rajim Mela – Parque Nacional Kanha", en: "Rajim Mela – Kanha National Park" }, text: { es: "Traslado al parque que inspiró El Libro de la Selva de Kipling y primer safari vespertino.", en: "Transfer to the park that inspired Kipling's The Jungle Book, and a first evening safari." } },
      { d: 10, title: { es: "Kanha: safari mañana y tarde", en: "Kanha: morning and evening safari" }, text: { es: "Dos safaris en jeep en busca de tigres, leopardos, osos perezosos y grandes manadas de ciervos.", en: "Two jeep safaris in search of tigers, leopards, sloth bears and large herds of deer." } },
      { d: 11, title: { es: "Kanha – Raipur – Delhi", en: "Kanha – Raipur – Delhi" }, text: { es: "Traslado y vuelo de regreso a Delhi para la conexión internacional.", en: "Transfer and flight back to Delhi for the international connection." } }
    ]
  }
];

export function getTourBySlug(slug) {
  return TOURS.find(t => t.slug === slug);
}
