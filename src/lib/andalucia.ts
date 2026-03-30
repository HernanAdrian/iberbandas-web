/* ─────────────────────────────────────────────────────────────
   Shared Andalusia city data — single source of truth for all
   service+city pages and city HUB pages.
   ───────────────────────────────────────────────────────────── */

export interface KeyProblem {
  title: string;
  description: string;
}

export interface AndaluciaCity {
  displayName: string;
  slug: string;
  province: string;
  industrialZone: string;
  responseTime: string;
  sectors: string[];

  /* HUB page */
  hubIntro: string;

  /* Repair */
  repair: {
    localContext: string;
    industrialZones: string[];
    localProblems: string;
    keyProblems: KeyProblem[];
    costWarning: string;
  };

  /* Maintenance */
  maintenance: {
    intro: string;
    challenges: KeyProblem[];
    protocol: string;
  };

  /* Installation */
  installation: {
    intro: string;
    specs: KeyProblem[];
  };

  /* Urgency */
  urgency: {
    intro: string;
    guarantee: string;
  };
}

export const ANDALUCIA_CITIES: Record<string, AndaluciaCity> = {
  sevilla: {
    displayName: 'Sevilla',
    slug: 'sevilla',
    province: 'Sevilla',
    industrialZone: 'Polígono San Pablo, Torneo y Puerto Real',
    responseTime: '90 minutos',
    sectors: ['aeronáutica y fabricación de precisión', 'agroalimentación y aceite de oliva', 'logística del sur peninsular'],

    hubIntro:
      'Sevilla concentra la mayor planta de ensamblaje aeronáutico de España —Airbus en San Pablo— y una potente industria agroalimentaria ligada al aceite de oliva, cereales y cítricos del Valle del Guadalquivir. El Polígono Torneo y la Zona Franca agrupan logística y distribución de primer nivel. En estos entornos de alta exigencia, una cinta transportadora parada no es una incidencia técnica: es coste directo sobre la cuenta de resultados.',

    repair: {
      localContext:
        'El Polígono Industrial San Pablo es el mayor núcleo fabril de Sevilla, con industria aeronáutica, agroalimentaria y logística funcionando en turnos continuos. La Zona Franca y el Polígono Torneo concentran distribución y servicios industriales de gran envergadura. Las plantas agroalimentarias del Aljarafe —aceite, cereales y cítricos— operan a plena capacidad durante campañas que se extienden de octubre a enero. El calor extremo del verano sevillano —hasta 45°C registrado— es el mayor agresor del caucho en toda Andalucía.',
      industrialZones: [
        'Polígono Industrial San Pablo — aeronáutica y fabricación',
        'Zona Franca de Sevilla — logística y distribución',
        'Polígono Torneo — servicios industriales',
        'Aljarafe — agroalimentación, aceite y cítricos',
        'La Rinconada — cereales y manipulación agrícola',
      ],
      localProblems:
        'Las líneas de montaje aeronáutico del Polígono San Pablo manejan piezas con aristas cortantes que perforan las cubiertas sin avisar. Los empalmes vibran a frecuencias altas y fallan por fatiga antes de la siguiente revisión. En las plantas del Aljarafe, el calor de verano supera los 45°C en naves sin climatización, degradando el caucho a una velocidad que multiplica por tres la frecuencia de avería respecto al norte peninsular.',
      keyProblems: [
        {
          title: 'Calor extremo en naves sin climatización',
          description:
            'Las naves industriales del Aljarafe alcanzan 50°C interiores en agosto. El caucho estándar se ablanda, los empalmes pierden resistencia y la banda se desliza sobre los tambores. Se necesita compuesto de grado térmico.',
        },
        {
          title: 'Desgarros por piezas aeronáuticas con aristas',
          description:
            'Las cadenas de suministro de las plantas de San Pablo transportan componentes con geometrías complejas. Una pieza mal posicionada puede desgarrar la banda en segundos, parando la línea.',
        },
        {
          title: 'Fatiga de empalme en líneas de alta vibración',
          description:
            'Las vibraciones mecánicas de los utillajes de fabricación generan fatiga progresiva en los empalmes. Sin inspección periódica, el fallo ocurre en plena producción y sin previo aviso.',
        },
      ],
      costWarning:
        'Una parada en la línea de producción aeronáutica de Sevilla puede superar 30.000 € por hora en penalizaciones de entrega y costes de parada de planta.',
    },

    maintenance: {
      intro:
        'Las líneas de montaje aeronáutico de Sevilla exigen protocolos de mantenimiento de precisión. La fatiga térmica del verano y las vibraciones de los utillajes acumulan daño silencioso en los empalmes antes de que el fallo sea visible. Un plan de mantenimiento preventivo en Sevilla reduce la probabilidad de parada imprevista más de un 80%.',
      challenges: [
        {
          title: 'Inspección de empalmes en líneas de alta vibración',
          description:
            'Revisión periódica del estado de empalmes vulcanizados y mecánicos en cintas sometidas a vibración continua. Detección de grietas y microfisuras antes de la rotura.',
        },
        {
          title: 'Control de temperatura en cubiertas de caucho',
          description:
            'Monitorización del estado de degradación de la cubierta en naves expuestas al calor extremo del verano sevillano. Sustitución preventiva antes del fallo catastrófico.',
        },
        {
          title: 'Ajuste de tensión y centrado estacional',
          description:
            'Las dilataciones térmicas del verano modifican la tensión de la banda. Ajuste trimestral de la tensión y la trayectoria para evitar desgaste lateral y caída de material.',
        },
      ],
      protocol:
        'Realizamos auditorías técnicas en sus instalaciones de Sevilla, documentamos el estado de cada banda y empalme, y diseñamos un calendario de intervenciones adaptado a sus turnos de producción.',
    },

    installation: {
      intro:
        'Suministramos e instalamos bandas transportadoras para líneas de producción aeronáutica y agroalimentaria en Sevilla. La instalación incluye medición in situ, selección del compuesto óptimo según el tipo de carga y temperatura, empalme vulcanizado de alta resistencia y calibración bajo carga real.',
      specs: [
        {
          title: 'Bandas de alta temperatura para el sector agroalimentario del Aljarafe',
          description:
            'Selección de compuestos HT (High Temperature) para plantas expuestas a temperaturas de proceso y calor ambiental extremo. Mayor vida útil en entornos de hasta 120°C.',
        },
        {
          title: 'Bandas anti-corte para líneas aeronáuticas',
          description:
            'Cubiertas con tejido anti-penetración para líneas que transportan piezas con aristas cortantes. Protección específica contra desgarros por impacto.',
        },
        {
          title: 'Empalme vulcanizado de precisión',
          description:
            'Vulcanizado in situ con prensas calibradas para obtener una unión de resistencia igual a la de la banda. Garantía de empalme incluida en todas las instalaciones.',
        },
      ],
    },

    urgency: {
      intro:
        'Nuestros equipos de urgencia en Sevilla están en retén permanente. Recibida la alerta, movilizamos el técnico más cercano al Polígono San Pablo, Torneo o Aljarafe con todo el material necesario para reparar in situ sin esperar a almacén central.',
      guarantee:
        'Garantizamos llegada a las instalaciones de Sevilla en menos de 90 minutos. Si el técnico no puede reparar in situ, suministramos una banda de emergencia del stock móvil para reanudar la producción.',
    },
  },

  malaga: {
    displayName: 'Málaga',
    slug: 'malaga',
    province: 'Málaga',
    industrialZone: 'Polígono Guadalhorce y Puerto de Málaga',
    responseTime: '90 minutos',
    sectors: ['agroalimentación y conservas', 'logística portuaria', 'distribución y alimentación'],

    hubIntro:
      'El Polígono Industrial Guadalhorce concentra más de 1.200 empresas activas. El Puerto de Málaga mueve más de 4 millones de toneladas al año con operación continua 24/7. Las plantas agroalimentarias de la Axarquía y Antequera trabajan a máxima capacidad durante las campañas de aceituna, cítricos y cereales. En todos estos entornos, una cinta transportadora parada es pérdida económica directa e inmediata.',

    repair: {
      localContext:
        'El Polígono Industrial Guadalhorce es el mayor núcleo industrial de Málaga con más de 1.200 empresas activas. El Puerto de Málaga mueve más de 4 millones de toneladas de mercancía al año con operación continua 24/7. Las plantas agroalimentarias de la Axarquía y Antequera trabajan a máxima capacidad durante las campañas de aceituna, cítricos y cereales. El calor del verano —hasta 42°C— y la humedad salina del litoral son los dos agresores principales del caucho en Málaga.',
      industrialZones: [
        'Polígono Guadalhorce — mayor núcleo industrial de Málaga',
        'Puerto de Málaga — logística de importación y exportación',
        'Antequera — plantas agroalimentarias y de cereales',
        'Polígono San Rafael — distribución y almacenamiento',
        'Axarquía — manipulación de aceitunas y cítricos',
      ],
      localProblems:
        'Las bandas transportadoras en Málaga acumulan fallos específicos derivados del clima mediterráneo extremo y de la tipología industrial de la zona. El calor del verano —hasta 42°C en naves del Guadalhorce— degrada el caucho entre 2 y 3 veces más rápido que en el norte peninsular. La humedad salina del litoral corroe grapas, rodillos y estructuras, especialmente próximas al Puerto. Y durante las campañas agroalimentarias, las líneas de manipulación trabajan sin pausa provocando roturas de empalme por sobrecarga acumulada.',
      keyProblems: [
        {
          title: 'Desgaste acelerado por calor extremo',
          description:
            'Las temperaturas de hasta 42°C en naves del Guadalhorce degradan el caucho de las bandas y ablandan los compuestos de los empalmes vulcanizados. Las cubiertas que durarían 4 años en el norte fallan en 18 meses sin mantenimiento preventivo.',
        },
        {
          title: 'Corrosión por ambiente costero',
          description:
            'La humedad salina de la costa malagueña penetra en las grapas mecánicas y los rodillos. Los tornillos se corroen, las grapas pierden agarre y el empalme cede bajo carga. Es el fallo silencioso más frecuente en plantas del Puerto de Málaga.',
        },
        {
          title: 'Roturas de empalme en plena campaña',
          description:
            'Las plantas de aceitunas, cítricos y hortalizas de la Axarquía y Antequera trabajan al 100% durante los picos de campaña. Los empalmes al límite revientan con la sobrecarga. Cada hora puede suponer entre 3.000 € y 12.000 € de pérdidas.',
        },
      ],
      costWarning:
        'Una parada de línea no programada en el Polígono Guadalhorce puede costar entre 2.000 € y 15.000 € por hora según la capacidad de producción.',
    },

    maintenance: {
      intro:
        'El mantenimiento preventivo en Málaga tiene dos enemigos principales: el calor extremo del verano y la humedad salina del litoral. Sin un plan de inspección periódico, las bandas del Guadalhorce tienen una vida útil un 40% inferior a la media nacional. Nuestros equipos programan las intervenciones para minimizar el impacto en su producción.',
      challenges: [
        {
          title: 'Protección contra degradación térmica',
          description:
            'Inspección del estado del caucho en cada revisión. Detección de reblandecimiento y microfisuras antes de que la cubierta ceda. Recomendación de compuestos HT para entornos de calor extremo.',
        },
        {
          title: 'Revisión anticorrosión en instalaciones costeras',
          description:
            'Inspección de grapas mecánicas, tornillos de sujeción y rodillos en plantas próximas al Puerto. Aplicación de protección anticorrosiva y sustitución preventiva de componentes en riesgo.',
        },
        {
          title: 'Ajuste de tensión pre-campaña',
          description:
            'Revisión completa antes de cada campaña agroalimentaria. Ajuste de tensión, centrado de la banda y comprobación de empalmes para garantizar el funcionamiento sin paradas durante los picos de producción.',
        },
      ],
      protocol:
        'Visitamos sus instalaciones en el Guadalhorce, Antequera o la Axarquía para evaluar el estado de cada sistema, documentar las bandas en riesgo y planificar las intervenciones antes de la temporada alta.',
    },

    installation: {
      intro:
        'Suministramos e instalamos bandas transportadoras para la industria agroalimentaria, logística y portuaria de Málaga. Seleccionamos el compuesto óptimo según la carga, la temperatura y el entorno para maximizar la vida útil en las condiciones específicas del Guadalhorce y la costa malagueña.',
      specs: [
        {
          title: 'Bandas resistentes al calor para el sector alimentario',
          description:
            'Compuestos HT y OR (Oil Resistant) para plantas agroalimentarias del Guadalhorce. Mayor durabilidad en entornos de alta temperatura y contacto con aceites vegetales.',
        },
        {
          title: 'Bandas anticorrosión para instalaciones portuarias',
          description:
            'Coberturas y grapas de acero inoxidable para plantas próximas al Puerto de Málaga. Protección específica contra la corrosión por ambiente marino.',
        },
        {
          title: 'Instalación express sin parar la producción',
          description:
            'Programa de instalación en ventanas de paro planificadas para minimizar el impacto en su cadena de producción. Vulcanizado in situ en menos de 4 horas en la mayoría de los casos.',
        },
      ],
    },

    urgency: {
      intro:
        'Equipo de guardia en Málaga capital con cobertura directa al Polígono Guadalhorce, Puerto de Málaga, Antequera y la Axarquía. Tiempo de respuesta garantizado: 90 minutos desde la recepción de su alerta.',
      guarantee:
        'El técnico llega con prensa de vulcanizado portátil, material de empalme mecánico y stock de bandas de emergencia. En el 94% de los casos resolvemos la avería sin necesidad de pedir material adicional.',
    },
  },

  granada: {
    displayName: 'Granada',
    slug: 'granada',
    province: 'Granada',
    industrialZone: 'Polígono Juncaril, PTGRA y Armilla',
    responseTime: '90 minutos',
    sectors: ['agroalimentación y aceite de oliva', 'materiales de construcción y áridos', 'logística y distribución'],

    hubIntro:
      'La Vega de Granada es una de las zonas agrícolas e industriales más productivas de Andalucía. El Polígono Industrial Juncaril concentra más de 800 empresas entre manipulación agrícola, materiales de construcción y logística. El Parque Tecnológico de la Salud (PTGRA) atrae industria de alto valor. Las canteras del entorno granadino —áridos, granito, piedra caliza— generan una demanda constante de bandas transportadoras resistentes a la abrasión.',

    repair: {
      localContext:
        'El Polígono Industrial Juncaril es el principal núcleo fabril de Granada, con industria alimentaria, materiales de construcción y servicios logísticos. Las canteras de áridos y granito del entorno granadino generan cargas altamente abrasivas. Las plantas de manipulación de aceitunas de la comarca norte —Jaén limita al norte— trabajan a plena capacidad de octubre a enero. Los productos tropicales de la Costa Tropical (aguacate, mango, chirimoya) generan una cadena de frío que también depende de bandas transportadoras en perfecto estado.',
      industrialZones: [
        'Polígono Industrial Juncaril — mayor núcleo industrial de Granada',
        'PTGRA (Parque Tecnológico de la Salud) — industria de alto valor',
        'Polígono de Armilla — distribución y servicios',
        'Canteras del entorno — áridos, granito y piedra caliza',
        'Costa Tropical (Motril) — manipulación de productos tropicales',
      ],
      localProblems:
        'Las bandas en el entorno granadino sufren erosión acelerada por polvo de áridos y granito, sobrecarga estacional durante la campaña de aceitunas del norte de la provincia, y fallos de empalme en sistemas de cadena de frío de la Costa Tropical. El frío de los meses de invierno en Granada capital —diferencia térmica de hasta 30°C entre verano e invierno— genera ciclos de dilatación que fatiguen los empalmes a ritmo acelerado.',
      keyProblems: [
        {
          title: 'Erosión severa por polvo de áridos y granito',
          description:
            'Las canteras y plantas de áridos del entorno granadino generan polvo con partículas de cuarzo de alta dureza. Las cubiertas estándar se erosionan en meses. Se requieren compuestos extra-abrasion (ASTM D90 o superior).',
        },
        {
          title: 'Fatiga de empalme por ciclos térmicos',
          description:
            'Granada capital registra diferencias térmicas de hasta 35°C entre el invierno y el verano. Las dilataciones y contracciones repetidas fatigan los empalmes mecánicos y las uniones vulcanizadas sin la elasticidad suficiente.',
        },
        {
          title: 'Sobrecarga en campaña de aceitunas y frutos tropicales',
          description:
            'Las plantas de manipulación del norte de Granada (aceitunas, octubre-enero) y las instalaciones de empaquetado de la Costa Tropical trabajan a máxima intensidad en temporada. Los empalmes sin revisión previa ceden bajo la carga máxima.',
        },
      ],
      costWarning:
        'Una parada en una cantera de áridos de Granada puede paralizar la producción de hormigón y detener obras de construcción activas, con pérdidas de 1.500 € a 6.000 € por hora.',
    },

    maintenance: {
      intro:
        'El programa de mantenimiento preventivo en Granada tiene en cuenta los ciclos térmicos extremos de la capital y la abrasividad de los materiales que se procesan en su entorno industrial. Revisamos el estado de los empalmes antes del invierno y antes del verano para anticipar los efectos de la dilatación térmica.',
      challenges: [
        {
          title: 'Revisión bi-estacional de empalmes',
          description:
            'Inspección en otoño y primavera para detectar el estado de los empalmes tras los extremos térmicos. Sustitución preventiva de los que presentan microfisuras o pérdida de resistencia.',
        },
        {
          title: 'Control de erosión en plantas de áridos',
          description:
            'Medición del grosor de cubierta en cada visita. Alerta temprana cuando el desgaste supera el 60% para planificar la sustitución antes del fallo catastrófico.',
        },
        {
          title: 'Preparación pre-campaña agroalimentaria',
          description:
            'Revisión completa de todas las cintas de manipulación antes del inicio de la campaña de aceitunas y de la temporada de tropicales. Sustitución de componentes en riesgo.',
        },
      ],
      protocol:
        'Auditamos el estado de sus instalaciones en Juncaril, Armilla o la Costa Tropical, identificamos los puntos de mayor riesgo y diseñamos un plan de intervención adaptado a sus turnos y temporadas de producción.',
    },

    installation: {
      intro:
        'Suministramos e instalamos bandas transportadoras para industria de áridos, agroalimentación y logística en Granada. Para las canteras del entorno seleccionamos compuestos extra-abrasion. Para las plantas de la Costa Tropical, bandas de PVC sanitario resistentes a la humedad.',
      specs: [
        {
          title: 'Bandas extra-abrasion para canteras y áridos',
          description:
            'Cubiertas con dureza Shore A 65+ para resistir el polvo de cuarzo y granito. Vida útil hasta 3 veces superior a las cubiertas estándar en entornos abrasivos.',
        },
        {
          title: 'Bandas sanitarias para la Costa Tropical',
          description:
            'PVC y poliuretano alimentario para instalaciones de empaquetado de aguacate, mango y chirimoya. Fácil limpieza y resistencia a la humedad del entorno costero.',
        },
        {
          title: 'Gestión de instalación por lotes',
          description:
            'Coordinamos la sustitución escalonada de sus bandas para no paralizar la producción. Instalaciones en ventanas de mantenimiento planificadas.',
        },
      ],
    },

    urgency: {
      intro:
        'Equipo de guardia en Granada capital con cobertura directa al Polígono Juncaril, Armilla, PTGRA y canteras del entorno. También cubrimos Motril y la Costa Tropical. Respuesta garantizada en 90 minutos.',
      guarantee:
        'El vehículo de intervención lleva prensa de vulcanizado portátil, material de empalme mecánico y stock de bandas de los formatos más comunes en el sector de áridos y agroalimentación granadina.',
    },
  },

  cordoba: {
    displayName: 'Córdoba',
    slug: 'cordoba',
    province: 'Córdoba',
    industrialZone: 'Polígono Las Quemadas, Tecnocórdoba y La Torrecilla',
    responseTime: '90 minutos',
    sectors: ['aceite de oliva y agroalimentación', 'fabricación metálica', 'logística regional'],

    hubIntro:
      'Córdoba y su provincia producen más aceite de oliva que cualquier país del mundo salvo España entera. Las almazaras trabajan a pleno rendimiento de octubre a enero, con cintas transportadoras transportando toneladas de aceitunas sin parar. El Polígono Industrial Las Quemadas y Tecnocórdoba concentran fabricación metálica y logística. El verano cordobés —récord histórico de 47°C en 2021— es el entorno más extremo para el caucho de toda la Península.',

    repair: {
      localContext:
        'La provincia de Córdoba lidera la producción mundial de aceite de oliva. Las almazaras de Lucena, Cabra, Baena y la Campiña procesan millones de toneladas de aceitunas cada campaña. El hueso de aceituna es uno de los materiales más abrasivos para las cubiertas de caucho. En los polígonos industriales de la capital —Las Quemadas, Tecnocórdoba, La Torrecilla— la fabricación metálica somete las bandas a cargas de impacto frecuentes. El calor extremo del verano cordobés deteriora el caucho a velocidad sin par en España.',
      industrialZones: [
        'Polígono Las Quemadas — mayor industrial de Córdoba',
        'Tecnocórdoba — tecnología y fabricación',
        'Polígono La Torrecilla — logística y distribución',
        'Campiña cordobesa — almazaras y bodegas',
        'Lucena y comarca — mueble, metal y agroalimentación',
      ],
      localProblems:
        'Las almazaras cordobesas trabajan con hueso de aceituna —material altamente abrasivo— que erosiona las cubiertas de caucho a ritmo acelerado. El calor extremo del verano —hasta 47°C en Córdoba capital, récord de España— degrada los compuestos de los empalmes y provoca deslizamiento en bandas no dimensionadas para temperatura. La fabricación metálica del Polígono Las Quemadas genera impactos frecuentes que revientan los empalmes sin aviso.',
      keyProblems: [
        {
          title: 'Abrasión extrema por hueso de aceituna',
          description:
            'El hueso de aceituna tiene una dureza y una geometría irregular que erosionan las cubiertas de las bandas transportadoras entre 2 y 4 veces más rápido que los cereales. Sin compuesto específico para aceitunas, la vida útil de la cubierta se reduce a meses.',
        },
        {
          title: 'Degradación por el calor más extremo de España',
          description:
            'Córdoba registra las temperaturas más altas de España. Naves industriales sin climatización alcanzan 52-55°C interiores en agosto. Los empalmes con compuestos estándar se deforman y pierden resistencia. Solo los compuestos HT o EPDM aguantan estas condiciones.',
        },
        {
          title: 'Impactos en fabricación metálica',
          description:
            'Las piezas metálicas con aristas cortantes del Polígono Las Quemadas perforan las cubiertas y revientan los empalmes con impactos inesperados. Se requieren refuerzos de impacto bajo las zonas de carga.',
        },
      ],
      costWarning:
        'Una almazara cordobesa parada durante la campaña pierde entre 5.000 € y 20.000 € por hora de producción. Córdoba concentra el 30% de la producción mundial de aceite: no hay margen para fallos.',
    },

    maintenance: {
      intro:
        'El plan de mantenimiento en Córdoba tiene que preparar las bandas para el doble desafío: el infierno térmico del verano y la carga abrasiva de la campaña de aceitunas de octubre. Sin intervención preventiva, las bandas en almazaras cordobesas fallan con una frecuencia tres veces superior a la media sectorial.',
      challenges: [
        {
          title: 'Revisión pre-campaña en almazaras',
          description:
            'Auditoría completa del estado de las cintas de aceituna antes de octubre. Sustitución de cubiertas desgastadas, revisión de empalmes y ajuste de tensión para afrontar la campaña sin paradas.',
        },
        {
          title: 'Control de temperatura en verano',
          description:
            'Visita de inspección en julio para evaluar el estado del caucho tras el invierno. Identificación de zonas con reblandecimiento excesivo y recomendación de sustitución antes de la siguiente campaña.',
        },
        {
          title: 'Mantenimiento de rascadores y limpiadores',
          description:
            'La pulpa de aceituna y el aceite contaminan los rodillos y tambores. Limpieza y sustitución de rascadores para mantener la eficiencia de tracción y evitar el deslizamiento.',
        },
      ],
      protocol:
        'Visitamos sus instalaciones en Las Quemadas, la Campiña o Lucena para evaluar el estado de cada banda, documentar los puntos críticos y diseñar el calendario de intervenciones antes de la campaña oleícola.',
    },

    installation: {
      intro:
        'Instalamos bandas transportadoras diseñadas específicamente para las condiciones extremas de Córdoba: compuestos oleorresistentes para almazaras, cubiertas de alta temperatura para el sector industrial y refuerzos de impacto para la fabricación metálica.',
      specs: [
        {
          title: 'Bandas oleorresistentes para almazaras',
          description:
            'Compuesto OR (Oil Resistant) para cintas en contacto con aceite de oliva y pulpa de aceituna. Resiste la hinchazón y el reblandecimiento que destruye las cubiertas estándar.',
        },
        {
          title: 'Compuestos HT para el calor extremo cordobés',
          description:
            'Caucho EPDM o SBR de alta temperatura para naves sin climatización. Aguanta hasta 120°C de temperatura de proceso y 55°C de temperatura ambiente sin deformación.',
        },
        {
          title: 'Refuerzos de impacto para fabricación metálica',
          description:
            'Telas de nylon de alta tenacidad bajo las zonas de carga en plantas de Las Quemadas. Reducción del riesgo de perforación por piezas metálicas hasta un 70%.',
        },
      ],
    },

    urgency: {
      intro:
        'Equipo de guardia en Córdoba capital con cobertura directa a los polígonos Las Quemadas, Tecnocórdoba, La Torrecilla y las principales almazaras de la Campiña. Respuesta garantizada en 90 minutos.',
      guarantee:
        'Prioridad máxima durante la campaña de aceitunas (octubre-enero). Disponemos de stock específico de bandas oleorresistentes para almazaras cordobesas en el vehículo de guardia.',
    },
  },

  almeria: {
    displayName: 'Almería',
    slug: 'almeria',
    province: 'Almería',
    industrialZone: 'Polígono PITA, Almerimar y Macael',
    responseTime: '2 horas',
    sectors: ['horticultura intensiva y manipulación de fruta', 'mármol y piedra natural de Macael', 'logística de exportación'],

    hubIntro:
      'La provincia de Almería produce el 50% de la fruta y verdura de Europa desde sus invernaderos —el mayor complejo de cultivo protegido del mundo—. El Polígono Industrial PITA es el mayor hub logístico del sureste peninsular. Macael es la capital mundial del mármol blanco. En todos estos entornos de alta intensidad productiva, las bandas transportadoras trabajan con materiales altamente abrasivos durante periodos que se extienden prácticamente todo el año.',

    repair: {
      localContext:
        'Las instalaciones de clasificación y embalaje de tomate, pimiento, pepino y berenjena en el entorno de El Ejido y Almería capital trabajan en cadena continua 10-12 meses al año. El polvo de tierra y partículas minerales de los invernaderos es altamente abrasivo. Las plantas de corte y transformación de mármol en Macael someten las bandas a uno de los entornos más agresivos del país. El Polígono PITA concentra el hub logístico de exportación fresca que mueve cientos de miles de toneladas de hortalizas hacia Europa.',
      industrialZones: [
        'Polígono Industrial PITA — hub logístico del sureste',
        'El Ejido — mayor zona hortícola de España',
        'Macael — capital mundial del mármol blanco',
        'Polígono Almerimar — industria y distribución',
        'Campo de Dalías — invernaderos y manipulación agrícola',
      ],
      localProblems:
        'Las bandas en Almería enfrentan dos abrasivos entre los más agresivos que existen: el polvo mineral de los invernaderos y el polvo de mármol de Macael. Combinados con una operación prácticamente continua durante 10-12 meses al año, las cubiertas se erosionan a un ritmo que multiplica por cuatro la velocidad de desgaste respecto a sectores convencionales.',
      keyProblems: [
        {
          title: 'Erosión por polvo de invernadero',
          description:
            'Las partículas de tierra y polvo mineral de los invernaderos almerienses son de pequeño tamaño pero alta dureza. Las cubiertas estándar se erosionan en 4-6 meses de operación continua. Se requieren compuestos extra-abrasion con dureza Shore A mínima de 65.',
        },
        {
          title: 'Abrasión extrema por polvo de mármol de Macael',
          description:
            'El polvo de mármol blanco de Macael contiene cristales de calcita de alta dureza con geometría angular. La erosión de la cubierta es de las más agresivas del sector. Las canteras y plantas de corte de Macael destruyen bandas estándar en semanas.',
        },
        {
          title: 'Fatiga de empalme por operación casi ininterrumpida',
          description:
            'A diferencia de otras regiones con campañas estacionales cortas, las instalaciones de Almería trabajan 10-12 meses al año. Sin revisión periódica programada, los empalmes alcanzan el límite de fatiga y ceden en plena producción.',
        },
      ],
      costWarning:
        'Una parada en una planta de clasificación de tomate de El Ejido durante el periodo punta puede generar pérdidas de 3.000 € a 10.000 € por hora en producto perecedero que no puede esperar.',
    },

    maintenance: {
      intro:
        'En Almería el mantenimiento preventivo no es opcional: es la única diferencia entre una operación estable y paradas recurrentes costosas. La operación casi continua de 10-12 meses exige revisiones más frecuentes que en cualquier otra región de España.',
      challenges: [
        {
          title: 'Medición de desgaste mensual en horticultura',
          description:
            'Revisión mensual del grosor de cubierta en las cintas más expuestas al polvo de invernadero. Alerta cuando el desgaste supera el 50% para planificar la sustitución antes de la rotura catastrófica.',
        },
        {
          title: 'Protección específica para el sector del mármol en Macael',
          description:
            'Revisión trimestral en canteras y plantas de corte. Evaluación del estado de empalmes bajo carga y medición de erosión. Recomendación de compuestos específicos para extender la vida útil.',
        },
        {
          title: 'Revisión de rascadores y sistemas de limpieza',
          description:
            'La tierra y los residuos vegetales contaminan los tambores y rodillos, reduciendo la tracción. Limpieza y sustitución de rascadores para mantener la eficiencia del sistema.',
        },
      ],
      protocol:
        'Diseñamos planes de mantenimiento con visitas mensuales para plantas de alta intensidad o trimestrales para operaciones más moderadas. Documentamos el estado de cada banda y empalme en cada visita.',
    },

    installation: {
      intro:
        'Suministramos e instalamos bandas transportadoras diseñadas para las condiciones extremas de Almería: extra-abrasion para los invernaderos y canteras de mármol, y PVC sanitario para el contacto directo con frutas y verduras.',
      specs: [
        {
          title: 'Bandas extra-abrasion para el Mar de Plástico',
          description:
            'Compuestos de caucho con dureza Shore A 70+ para líneas de clasificación y embalaje de tomate, pimiento y pepino. Vida útil 3-4 veces superior a las bandas estándar en entornos de polvo mineral.',
        },
        {
          title: 'Cubiertas ultra-abrasion para Macael',
          description:
            'Compuestos especiales de alta resistencia a la abrasión (Super-abrasion) para las canteras y plantas de corte de mármol blanco. La opción más duradera en el entorno más agresivo.',
        },
        {
          title: 'Bandas sanitarias para contacto con hortalizas',
          description:
            'PVC y poliuretano alimentario para líneas de selección y embalaje en contacto directo con tomate, pimiento y pepino. Cumplimiento de normativa alimentaria y fácil limpieza.',
        },
      ],
    },

    urgency: {
      intro:
        'Equipo de guardia en Almería capital con cobertura al Polígono PITA, El Ejido, Campo de Dalías y Macael. Respuesta en 2 horas en toda la provincia.',
      guarantee:
        'Disponemos de stock específico de bandas para el sector hortícola almeriense: extra-abrasion para invernaderos y PVC sanitario para contacto alimentario. El 90% de las averías en Almería se resuelven en la primera visita.',
    },
  },

  cadiz: {
    displayName: 'Cádiz',
    slug: 'cadiz',
    province: 'Cádiz',
    industrialZone: 'Zona Franca, Puerto de Cádiz y Puerto Real',
    responseTime: '2 horas',
    sectors: ['naval e industria aeroespacial', 'logística portuaria y graneles', 'bodegas y agroalimentación de Jerez'],

    hubIntro:
      'La Bahía de Cádiz alberga dos de los complejos industriales más relevantes de Andalucía: Navantia en San Fernando y Airbus en Puerto Real. El Puerto de Cádiz opera con graneles y contenedores en operación continua. Jerez de la Frontera concentra la mayor industria vitivinícola del sur peninsular y una importante actividad logística. La combinación de ambiente atlántico, humedad extrema y actividad industrial pesada hace de Cádiz un entorno especialmente exigente para las bandas transportadoras.',

    repair: {
      localContext:
        'La Bahía de Cádiz concentra industria de alto valor: Navantia en San Fernando fabrica fragatas y submarinos, Airbus en Puerto Real produce fuselajes aeronáuticos, y la Zona Franca agrupa logística y manufactura diversa. El Puerto de Cádiz maneja graneles, contenedores y vehículos en operación continua. En Jerez, las bodegas de la DO Jerez-Xérès-Sherry y los almacenes logísticos generan una demanda constante de sistemas de transporte. El Levante y el Poniente —los vientos dominantes del Estrecho— cargan de sal el ambiente y aceleran la corrosión a niveles extremos.',
      industrialZones: [
        'Zona Franca de Cádiz — logística y manufactura',
        'Puerto Real — Airbus y fabricación industrial',
        'San Fernando — Navantia y industria naval',
        'Puerto de Cádiz — operaciones portuarias continuas',
        'Jerez de la Frontera — bodegas y logística',
      ],
      localProblems:
        'El ambiente atlántico del Estrecho es el más corrosivo de Andalucía para las instalaciones metálicas. El Levante y el Poniente —vientos dominantes cargados de sal— penetran en las naves industriales y atacan sin descanso las grapas, rodillos y estructuras de los transportadores. En la industria naval y aeronáutica, las piezas pesadas con geometrías complejas generan impactos que ninguna banda estándar puede absorber sin refuerzo.',
      keyProblems: [
        {
          title: 'Corrosión marina extrema por vientos del Estrecho',
          description:
            'El Levante y el Poniente de la Bahía de Cádiz transportan partículas de sal que se depositan en las grapas mecánicas, tornillos y estructuras metálicas. La corrosión avanza a un ritmo que en 6 meses puede comprometer la integridad del empalme. Se requieren grapas de acero inoxidable y protecciones específicas.',
        },
        {
          title: 'Impacto de piezas en industria naval y aeronáutica',
          description:
            'Navantia y Airbus manejan componentes de grandes dimensiones y peso variable. Una pieza mal posicionada o con aristas expuestas puede desgarrar la banda instantáneamente. Los refuerzos de impacto son imprescindibles en estas instalaciones.',
        },
        {
          title: 'Desgaste acelerado en graneles portuarios',
          description:
            'Las terminales de graneles del Puerto de Cádiz mueven minerales, cereales y áridos en operación 24/7. La abrasión continua y el peso de los materiales a granel deterioran las cubiertas y revientan los empalmes en ciclos más cortos que la media.',
        },
      ],
      costWarning:
        'Una parada en la línea de producción de Airbus en Puerto Real puede generar costes superiores a 25.000 € por hora. En el Puerto de Cádiz, la demora de un buque puede suponer penalizaciones de 15.000 € a 50.000 €.',
    },

    maintenance: {
      intro:
        'El plan de mantenimiento en Cádiz debe prioritariamente combatir la corrosión marina. El ambiente atlántico del Estrecho es implacable: sin inspección y protección periódica, los componentes metálicos de los transportadores fallan en meses. La industria naval y aeronáutica de la Bahía requiere protocolos de mantenimiento documentados y trazables.',
      challenges: [
        {
          title: 'Inspección anticorrosión trimestral',
          description:
            'Revisión del estado de grapas mecánicas, tornillos de sujeción y rodillos en plantas expuestas al ambiente marino. Sustitución preventiva de los componentes en fase inicial de corrosión.',
        },
        {
          title: 'Protocolo de mantenimiento documentado para industria regulada',
          description:
            'Las plantas de Navantia y Airbus requieren registros de mantenimiento trazables. Emitimos informes técnicos de cada visita con estado del sistema, acciones realizadas y recomendaciones.',
        },
        {
          title: 'Revisión de protecciones de impacto',
          description:
            'Inspección del estado de los refuerzos anti-penetración en líneas de transporte de piezas pesadas. Sustitución preventiva antes de que el desgaste del refuerzo exponga la tela portante.',
        },
      ],
      protocol:
        'Diseñamos planes de mantenimiento con visitas trimestrales para industria naval y aeronáutica, y semestrales para el sector logístico. Todos los informes son trazables y documentados para cumplimiento de los sistemas de calidad de nuestros clientes.',
    },

    installation: {
      intro:
        'Suministramos e instalamos bandas transportadoras diseñadas para resistir el ambiente marino de la Bahía de Cádiz: componentes de acero inoxidable, compuestos resistentes a la corrosión y refuerzos de impacto para la industria naval y aeronáutica.',
      specs: [
        {
          title: 'Grapas y componentes de acero inoxidable',
          description:
            'Empalmes y herrajes en acero inoxidable 316L para instalaciones próximas al litoral gaditano. Resistencia máxima a la corrosión marina. Vida útil hasta 5 veces superior a los componentes estándar.',
        },
        {
          title: 'Refuerzos de impacto para industria naval y aeroespacial',
          description:
            'Telas de aramida (Kevlar) bajo las zonas de carga en Navantia y Airbus. Protección anti-penetración de máxima especificación para el manejo de piezas pesadas con geometrías complejas.',
        },
        {
          title: 'Bandas de alta resistencia para graneles portuarios',
          description:
            'Cubiertas abrasion-resistant de caucho natural para las terminales de graneles del Puerto. Diseñadas para operación 24/7 con materiales abrasivos pesados.',
        },
      ],
    },

    urgency: {
      intro:
        'Equipo de guardia en la Bahía de Cádiz con cobertura a la Zona Franca, Puerto Real (Airbus), San Fernando (Navantia), Puerto de Cádiz y Jerez. Respuesta garantizada en 2 horas en toda la provincia.',
      guarantee:
        'Nuestro vehículo de guardia lleva grapas de acero inoxidable, material de empalme mecánico y bandas de emergencia para los formatos más habituales en la industria gaditana. Cobertura extendida a Algeciras y el Campo de Gibraltar.',
    },
  },
};

export const ANDALUCIA_CITY_SLUGS = Object.keys(ANDALUCIA_CITIES);

export function getAndaluciaCity(slug: string): AndaluciaCity {
  return ANDALUCIA_CITIES[slug] ?? ANDALUCIA_CITIES.sevilla;
}
