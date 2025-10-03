/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
export const INTERLOCUTOR_VOICES = [
  'Aoede',
  'Charon',
  'Fenrir',
  'Kore',
  'Leda',
  'Orus',
  'Puck',
  'Zephyr',
] as const;

export type INTERLOCUTOR_VOICE = (typeof INTERLOCUTOR_VOICES)[number];

export type Prompt = {
  id: string;
  title: string;
  text: string;
};

export type Agent = {
  id: string;
  name: string;
  personality: string;
  bodyColor: string;
  voice: INTERLOCUTOR_VOICE;
  knowledgeBase: string;
  prompts?: Prompt[];
  speakingRate?: number;
  pitch?: number;
  enableGoogleSearch?: boolean;
};

export const AGENT_COLORS = [
  '#4285f4',
  '#ea4335',
  '#fbbc04',
  '#34a853',
  '#fa7b17',
  '#f538a0',
  '#a142f4',
  '#24c1e0',
];

export const createNewAgent = (properties?: Partial<Agent>): Agent => {
  return {
    id: Math.random().toString(36).substring(2, 15),
    name: '',
    personality: '',
    knowledgeBase: '',
    bodyColor: AGENT_COLORS[Math.floor(Math.random() * AGENT_COLORS.length)],
    voice: Math.random() > 0.5 ? 'Charon' : 'Aoede',
    speakingRate: 1,
    pitch: 0,
    enableGoogleSearch: false,
    ...properties,
  };
};

const woundManagementKnowledgeBase = `Guía de Estudio Detallada: Clínica y Cirugía Bovina y de Pequeños Animales
Sección 1: Exploración Clínica General en Bovinos
1.1 Anamnesis (Historia Clínica)
Factores Ambientales y Manejo: ¿Qué información se debe recabar sobre el corral, otros animales, áreas cercanas de otras especies, y cambios recientes en el manejo?
Historia Reproductiva: ¿Qué datos son importantes en relación con la fecha de parto, gestación, número de partos, abortos y calores?
Historia de Salud General: ¿Qué aspectos de la salud previa del animal (condición corporal, debilidad, postración, anorexia, grado de incapacidad) son cruciales para documentar?
Síntomas Específicos: ¿Qué tipos de secreciones (nariz, boca, vagina, ojos), problemas respiratorios (estornudos, tos), locomotores, nerviosos, sensoriales (ceguera, sordera), dolor, prurito, convulsiones, traumatismos, hemorragias y alergias se deben indagar?
Estrés y Condiciones Crónicas: ¿Qué tipos de estrés (físico, fisiológico, psicológico, ambiental), caquexia y emaciación deben ser considerados?
Intervenciones Previas: ¿Qué información es necesaria sobre exámenes de laboratorio y tratamientos aplicados anteriormente?
Enfoque Sistémico: ¿Cómo debe orientarse el interrogatorio en función del sistema u órgano afectado?
1.2 Examen Físico
Objetivo: ¿Cuál es el propósito principal del examen físico general?
Orden de Exploración: ¿Cuál es la secuencia recomendada para la exploración (constantes fisiológicas, inspección, palpación, percusión, auscultación)?
Importancia de las Constantes Fisiológicas: ¿Por qué es crucial evaluar las constantes fisiológicas antes de que el animal experimente estrés?
Homeostasis: ¿Qué significa mantener la homeostasis en un animal sano?
Valores Normales de Constantes Fisiológicas (Bovinos Adultos y Terneras):Temperatura Corporal: Rangos mínimo, medio y máximo para adultos y terneras (altiplano, trópico y desértico).
Frecuencia Cardíaca y Pulso: Rangos mínimo, medio y máximo por minuto para adultos y terneras.
Frecuencia Respiratoria: Rangos mínimo, medio y máximo por minuto para adultos y terneras.
Movimientos Ruminales: Frecuencia normal por cada 2 minutos.
Anormalidades: ¿Qué implicación tiene cualquier desviación de las constantes fisiológicas normales?
Zona de Auscultación Pulmonar: ¿Cómo se delimita esta zona anatómicamente?
1.3 Examen de la Dentición (Bovinos)
Fórmulas Dentarias: Temporales y Permanentes.
Tipos de Incisivos: Nombres de los incisivos centrales, primeros medianos, segundos medianos y extremos.
Erupción y Reemplazo: Edades aproximadas para la erupción de incisivos caducos y permanentes ("enrazan") y el término para la dentición completa.
Características de la Dentición Bovina: ¿Qué peculiaridades presenta la dentición bovina en el maxilar superior e inferior?
1.4 Control y Erradicación de Enfermedades (Bovinos)
Importancia del Veterinario: ¿Cuál es el papel fundamental del Médico Veterinario en el conocimiento, prevención, control y erradicación de enfermedades?
Producción de Alimentos Inocuos y Bienestar Animal: ¿Cómo se logra esto y qué factores (instalaciones, nutrición, manejo, bioseguridad, higiene) contribuyen?
Proceso Diagnóstico: Secuencia de pasos desde el expediente hasta el diagnóstico confirmativo (historia clínica, propedéutica, reseña, anamnesis, examen físico, clínica bovina, diagnóstico diferencial, diagnóstico presuntivo, pruebas de laboratorio, agente etiológico).
Impacto del Estrés: ¿Cómo el estrés afecta la susceptibilidad a enfermedades?
Sección 2: Administración de Fármacos y Anestesia en Veterinaria
2.1 Vías de Administración de Fármacos
Intravenosa (IV):Regiones Anatómicas: Yugular, Coccígea.
Características: Velocidad de acción, volumen de líquido, concentración plasmática.
Sustancias Comunes: Soluciones electrolíticas, sueros (glucosados, salinos), antibióticos, antihistamínicos, estimulantes cardíacos (adrenalina, atropina), tranquilizantes, anestésicos.
Calibre de Aguja: 16 o 14.
Procedimiento: Desinfección, inmovilización de la vena, ángulo de inserción, aplicación, retiro, presión post-punción.
Oral (Tomas, Tabletas y Bolos):Procedimiento (Líquidos): Uso de botellas de cuello angosto, sujeción del animal (ollares, nariguero), elevación de la nariz, introducción del cuello de la botella, cantidad por toma, precaución con la tráquea (neumonía por aspiración).
Procedimiento (Tabletas/Bolos): Sujeción, uso del tirabolos, tracción de la lengua, deglución.
Características: Vía fisiológica más común, cómoda, barata.
Absorción: pH dependiente (ácidos en estómago, básicos en intestino delgado), difusión pasiva.
Higiene General: Importancia del lavado de manos, guantes desechables y agujas estériles (prevención de transmisión de enfermedades parenterales).
2.2 Bloqueos Nerviosos en Bovinos
Importancia y Uso: ¿Por qué son cruciales los bloqueos nerviosos en la clínica de bovinos? Usos terapéuticos y diagnósticos.
Cirugía Exploratoria: ¿Por qué adquiere importancia en el campo sin diagnóstico por imagen?
Anestesia Adecuada: Razones humanitarias, eficiencia técnica, seguridad para el paciente y personal.
Factores para Elegir Anestesia: Especie, estado físico del paciente, naturaleza, amplitud, localización y duración de la cirugía.
Riesgos de Anestesia General en Rumiantes: Problemas potenciales (incluida la muerte), atención especial requerida.
Medicación Preanestésica: Fármacos utilizados (tranquilizantes, sedantes, relajantes musculares, parasimpaticolíticos) y sus efectos nocivos (regurgitación, hipersalivación, protrusión del pene, debilidad muscular, incoordinación, postración).
Costos y Disponibilidad de Anestésicos: Consideraciones prácticas.
Depresión Respiratoria: Efectos de anestésicos y relajantes musculares.
Capacidad Pulmonar Bovina: Comparación con monogástricos, eficiencia de intercambio gaseoso.
Efectos Tóxicos de Anestésicos: Factores que influyen (idiosincrasia, especie, edad, estado fisiológico, dosis, vía de aplicación).
Tranquilizantes Comúnmente Usados (Bovinos):Tipos: Derivados fenotiazínicos (Xilacina como hidrocloruro de xilacina 2% o 10%).
Dosis y Vías: mg/kg o ml/100 kg (IV e IM).
Efectos: Analgesia, sedación, relajación muscular, duración.
Reducción de Dosis: Impacto del estrés.
Combinación con Analgésicos: Ejemplos de cirugías dolorosas (tumor de células escamosas ocular).
Diazepam y Tiopental Sódico: Dosis y duración de efectos anestésicos cooperantes.
Sobredosis y Efectos Indeseables: Hipotermia, timpanismo, aborto, postración, neumonía por regurgitación, asfixia, hipotensión, fibrilación ventricular, paro cardíaco, shock, muerte.
Contraindicaciones: Cardiopatías, hepatopatías, daño renal, gestantes.
Antídotos y Tratamiento de Intoxicaciones: Sulfato de atropina, Yohimbina, Doxopram, Atipamezol, Vitamina C, sueros IV, analépticos respiratorios.
2.3 Bloqueo Local
Definición: Pérdida temporal y reversible de la sensibilidad en una región delimitada.
Mecanismo de Acción: Actúa sobre troncos y terminaciones nerviosas, bloqueando la conducción nerviosa.
Usos: Cirugía superficial o menor.
Ventajas: Fácil aplicación, no requiere anestesista, bajo peligro de toxicidad, permite cirugía en animales de pie.
Lidocaína: Dosis tóxica en vaca adulta.
Tipos de Bloqueos (Según Nivel de Parálisis Nerviosa):Bloqueo Tópico (Superficial o por Contacto): Insensibilización de terminaciones nerviosas en un área definida.
Bloqueo por Infiltración: Inyección de anestésico local en la piel y planos profundos para bloquear una zona determinada.
Tipos de Bloqueo por Infiltración: Campo, anillo, endovenoso local, local.
Bloqueo Local (Infiltración en Línea de Incisión): Inyección del anestésico en la línea y profundidad de la incisión para bloquear terminaciones nerviosas. Importancia de inyecciones múltiples para incisiones grandes y profundas.
Técnica de Bloqueo: Preparación antiséptica, puntos de aplicación (1.5-2 cm), insensibilización subcutánea (1-2 ml Lidocaína 20g), infiltración profunda (5 ml Lidocaína 18g), repetición en planos.
Otras Técnicas por Infiltración: "L invertida", "abanico", "cero", "piramidal", paquete testicular, tetas/pezones.
Indicaciones: Laparotomía, rumenotomía, abomasopexia, reducción de hernias, cirugías de miembros y tetas.
Bloqueo Regional (por Conducción): Inyección de analgésico cerca de un nervio para insensibilizar el área inervada. Baja dosis, excelente insensibilización. Uso en bloqueo epidural.
Analgesia Espinal: Aplicación en el canal espinal para bloquear nervios espinales, suprimiendo sensibilidad y motilidad posterior al punto de aplicación. Métodos: epidural y subdural.
2.4 Bloqueo Epidural
Definición: Aplicación de anestésico local en el espacio epidural.
Clasificación: Caudal y lumbo-sacro (dependiendo del nivel medular).
Procedimiento: Rasurado y desinfección, aguja estéril (18, 6-8 cm), posición de la cola, inserción de la aguja (perpendicular, luego 15° ventral y craneal), toque del piso del conducto raquídeo.
Comprobación de la Posición de la Aguja: Aspiración (sin sangre), resistencia a la introducción del líquido anestésico (no debe haber). Si hay resistencia o sangre, corregir posición o cambiar a técnica sacro-coccígea.
Dosis: 5 a 10 ml de Lidocaína al 2%.
Post-Aplicación: Retiro de la aguja, presión con torunda (evitar penetración de aire).
2.5 Bloqueo Paravertebral
Definición: Bloqueo de los nervios torácico décimo tercero (T13), primero y segundo lumbar (L1 y L2), y la rama dorsolateral del tercer lumbar (L3).
Propósito: Inervación sensitiva y motora para la piel, fascia, músculos y peritoneo del flanco. No siempre es necesario bloquear L3.
Técnicas (Método de Cambridge y Bloqueo Paravertebral Distal):Puntos de Referencia para T13, L1, L2: Apófisis transversas de las vértebras lumbares, a unos 5 cm de la línea media.
Preparación: Rasurado y desinfección.
Agujas: Nueva y estéril (18, 10 cm).
Localización del Nervio Espinal (Método de Cambridge): Tocar con la aguja la parte caudal de la cabeza articular de la última costilla, luego desplazar dorsoventral y caudal. Para L1, tocar el borde caudal de la apófisis transversa, desplazar caudal y centralmente.
Bloqueo de L2: Considerar si la incisión es a la mitad del flanco.
Advertencia (Cavidad Peritoneal): Ruido característico por penetración de aire (rectificar profundidad).
Dosis: 5 a 10 ml de anestésico local.
Aplicación del Anestésico: Mover la aguja para asegurar distribución.
Retiro de la Aguja: Presión con torunda (evitar enfisema subcutáneo).
Bloqueo Paravertebral Distal (Método de Cakala): Aplicación en las ramas dorsal y ventral de T13, L1 y L2. Inserción de aguja (18) a 5 cm de la línea imaginaria de los extremos distales de las apófisis L1, L2 y L3. Inyección de 5-10 ml de Lidocaína al 2% por encima de la apófisis a 5 cm de profundidad.
Sección 3: Cirugía y Cicatrización de Heridas
3.1 Cicatrización de Heridas
Fuerza de Tensión: Carga por unidad de área transversal en el punto de ruptura. Relación con la naturaleza del material, no con su espesor.
Fuerza de Ruptura: Carga para producir una herida. Medida clínica más significativa.
Fuerza para Perforar: Presión necesaria para perforar una víscera u órgano interno.
Recuperación de la Fuerza de Tensión: Diferencias entre tejidos (piel, fascia vs. estómago, intestino delgado). Variaciones dentro del mismo órgano (colon sigmoideo vs. ciego).
Factores que Afectan la Fuerza del Tejido: Estatura, edad, peso, espesor, edema, induración.
Modificadores de la Cicatrización: Corticosteroides, inmunodepresores, hormonas, quimioterapia, radioterapia.
Fases de la Cicatrización: Inflamatoria/debridación, formación de colágeno (cicatriz), depósito suficiente de colágeno.
Cicatrización por Segunda Intención: Causas (infección, trauma excesivo, pérdida/aproximación imprecisa de tejido). Proceso (dejar herida abierta, tejido de granulación con miofibroblastos, contracción, epitelización). Manejo del tejido de granulación excesivo.
3.2 Principios Quirúrgicos
Prioridad Principal: Mantener técnica estéril y aséptica para prevenir infección.
Fuentes de Infección: Microorganismos del paciente y del personal médico.
Planeación y Ejecución de la Cirugía:Longitud y Dirección de la Incisión: Suficiente espacio operatorio, exposición óptima. Dirección de cicatrización (de lado a lado, no de extremo a extremo). Incisiones paralelas a las fibras del tejido para mejores resultados cosméticos.
Técnica de Disección: Incisión limpia, ininterrumpida con presión uniforme del bisturí. Disección aguda para cortar tejidos. Preservar nervios, vasos y músculos subyacentes.
Complicaciones de la Cicatrización:Infección: Causa severa, introducción de microorganismos virulentos. Consecuencias (enfermedad prolongada, gangrena, muerte). Clasificación por fuente y cambios fisiopatológicos. Identificación de patógenos (secreción purulenta, cultivo). Tratamiento (antibióticos, incisión y drenaje, debridación de tejido necrótico). Infecciones virales y micóticas.
Separación de la Herida (Dehiscencia): Pacientes de edad avanzada, debilitados, sexo masculino. Ocurrencia (5-12 días post-op). Causas (tensión excesiva, técnica de sutura inadecuada, materiales de sutura inadecuados, falla del tejido). Manejo (re-cierre o dejar abierta). No hay diferencia entre incisiones verticales/transversales. Mayor incidencia en cirugías gástricas, biliares, cáncer intraabdominal. Factores contribuyentes (debilidad, hipoproteinemia).
Evisceración: Protrusión del intestino. Urgencia. Causas (distensión, náusea, tos, aumento de presión abdominal). Tratamiento (reintroducir intestino, cerrar herida).
3.3 Suturas Quirúrgicas
Cualidades de una Sutura Ideal:Resistencia al nudo sin deshilacharse.
Resistente al encogimiento de tejidos.
Absorbible con mínima reacción tisular (después de cumplir su propósito).
Cualidades a Mantener (si no existe sutura ideal):Fuerza de tensión elevada y uniforme.
Diámetro uniforme.
Materiales Absorbibles vs. No Absorbibles:Absorbibles: Mantener bordes temporalmente. Colágeno de mamíferos, polímeros sintéticos. Velocidad de absorción (rápida, prolongada). Impregnación o recubrimiento, teñido.
PDS II (Polidioxanona):* Absorción por hidrólisis. Retención de fuerza de tensión a 14, 28, 42 días. Absorción completa en 6 meses. No establecido en microcirugía, tejido nervioso, cardiovascular adulto.
MONOCRYL (Poliglecaprone 25):* Monofilamento, flexibilidad, inerte. Elevada fuerza de tensión inicial que disminuye en 2 semanas. Retención de fuerza a 7, 14, 21 días. Absorción completa entre 91 y 119 días. Usos (cierre subcuticular, aproximación de tejidos blandos, ligaduras).
No Absorbibles: Se mantienen indefinidamente. Polyamide, Polypropylene, Polyester, Fluorure de Polyvinylidène, etc.
Tipos de Ligaduras:Libre: Hilo de sutura.
Transfixión o Sutura Ligadura: Hilo con aguja para anclar antes de ocluir vaso grande/profundo. Suficiente longitud para apretar nudo.
Línea Primaria de Sutura: Mantiene bordes durante cicatrización por primera intención. Continua o interrumpida. Otros tipos (incluidas, jareta, subcuticulares). Aguja quirúrgica unida.
Suturas Continuas (Puntos Continuos): Serie de puntos con una hebra. Anudada a sí misma o en asa. Rápida colocación. Fuerza distribuida. Precaución con tensión (evitar estrangulación). Evitar ruptura. Masa de cuerpo extraño. Material de monofilamento en infección. Puede transmitir infección. Cierre continuo en masa (peritoneo/fascia).
Manejo de Nudos:Evitar tensión excesiva (romper suturas, cortar tejido).
No apretar demasiado (estrangular tejido). Aproximar, no estrangular.
Mantener tracción en un extremo del hilo.
Hacer lazada final horizontal.
Cambiar posición para nudo plano y seguro.
Lazadas extra no añaden fuerza, solo volumen.
Características de Sutura que Afectan Nudos:Manipuleo: Forma en que se maneja la sutura.
Extensibilidad: Estiramiento y recuperación del hilo. Tensión antes de romper. (PROLENE*).
Monofilamento: Bajo coeficiente de fricción (nudo menos seguro). PROLENE* plasticidad, aplanamiento. Memoria (tendencia a no quedar planas).
Multifilamento (Trenzadas): Mayor seguridad del nudo. Más fáciles de manipular. Alto coeficiente de fricción. Nudos permanecen. Variabilidad en fuerza. (ETHIBOND* Extra, VICRYL* Recubierto).
Agujas Quirúrgicas:Diseño y Material: Dureza, ductilidad, afilado, estabilidad en el porta-agujas. Acero inoxidable.
Tipos de Agujas:Cortantes: Punta en forma triangular o cuadrada con bordes cortantes. Penetran tejidos densos. Precisión. (Agujas de Keith, P-Precision Point, FSL, FS).
Reverso Cortantes: Forma triangular, bordes cortantes por fuera de la curvatura. Evitar desprendimiento de tejido. (Agujas OS).
Cortantes Laterales (Espátula): Diseño plano, bordes cortantes a los lados. Procedimientos oftálmicos. Separar capas delgadas.
Ahusadas (Redondas): Penetran y separan tejido sin cortarlo. Punta delgada. Cuerpo aplanado (oval/rectangular). Usadas en tejidos de fácil penetración (peritoneo, vísceras abdominales, miocardio, duramadre, subcutáneo). Mínimo orificio. (Aguja de Mayo para tejido denso: ginecológicos, cierre general, hernias).
Manejo del Porta-agujas:Verificar alineación de quijadas.
Manejar aguja y porta-agujas como unidad.
Pasar porta-agujas al cirujano en posición correcta.
Usar porta-agujas para sacar aguja (no pinza de hemostasia).
Selección de Suturas (Principios):Cicatrización Lenta (Piel, Fascia, Tendones): Suturas no absorbibles o absorbibles de mayor duración.
Cicatrización Rápida (Estómago, Colon, Vejiga): Suturas absorbibles.
Tejidos Potencialmente Contaminados: Evitar multifilamento. Usar monofilamento o absorbibles resistentes a infección.
Factor Cosmético: Materiales inertes, monofilamento más pequeños (nylon, polipropileno). Cerrar con suturas subcuticulares. Cintas estériles para piel.
Líquidos con Altas Concentraciones de Cristaloides (Tracto Urinario/Biliar): Suturas absorbibles (evitar cálculos).
Calibre de Sutura: Más fino compatible con fuerza del tejido.
Suturas de Retención: Reforzar suturas primarias en riesgo de tensión. Retirar cuando disminuya el riesgo.
Requerimientos de Suturas en Tejidos Específicos:Estómago: Cicatriza rápido. Suturas absorbibles (VICRYL*), también PROLENE*.
Intestino Delgado: Cierre similar al estómago. Contenido biliar/pancreático (peritonitis química). Cierre invertido (minimizar protrusión). Preferencia por absorbibles (no limitan diámetro). No absorbibles en serosa para seguridad. Cicatriza rápido.
Colon: Contenido microbiano. Monofilamento o absorbibles.
Tracto Biliar (Vesícula biliar, Cístico, Colédoco): Cicatriza rápido. Evitar cuerpos extraños (cálculos). Sutura absorbible de menor calibre.
Órganos Parenquimatosos (Bazo, Hígado, Riñón): Reparación de laceraciones. Ligar vasos grandes. Coaptar cápsula fibrosa exterior. Suturas pequeñas. Epiplón para cierre. Nuevo tejido fibroso en 7-10 días. Sutura en resección hepática (VICRYL* o seda). Malla VICRYL* (poliglactina 910).
Fascia: Estructura de soporte principal. Mantener herida cerrada, resistir presión intraabdominal. Material sintético de injerto (PROLENE* malla). Suturas no absorbibles (PROLENE*). Recuperación de fuerza (40% en 2 meses, máximo en 1 año+). Sutura de capas (posterior siempre, anterior si cortada). Suturas de espesor total. Elasticidad (ceder a edema). Acero inoxidable (corte). Suturas PDS* II para jóvenes/sanos. Técnica interrumpida. Monofilamento o multifilamento (sin infección), monofilamento absorbible o no absorbible inerte (con infección).
Músculo: No tolera bien la sutura. Evitar cortar o dañar aporte sanguíneo/inervación. Suturar fascia, no músculo.
Retención de Suturas (Heridas Abdominales): Refuerzo fuerte, pero doloroso. Agujas doble armado. Colocar de dentro a fuera (evitar células epiteliales contaminadas). Materiales (ETHILON*, MERSILENE*, ETHIBOND* Extra, PROLENE*, PERMA-HAND*, acero quirúrgico). Dejar 14-21 días (promedio 3 semanas).
Suturas para Drenajes: Asegurar en pared de órgano con absorbibles. Unir órgano a peritoneo y fascia. Alrededor de drenaje (2 o 4 suturas), asegurar a la piel. Drenaje en cavidad peritoneal: anclar a la piel con 1-2 suturas no absorbibles.
Vasos (Anastomosis): Evitar reacción tisular excesiva (disminución de calibre, trombos). Materiales inertes (nylon, poliéster, polipropileno). Poliéster multifilamento (coagulación). ETHIBOND* Extra (fuerza, durabilidad, superficie lisa). PROLENE* o seda (arterias coronarias, sin efecto "sierra"). Suturas continuas (mejor cierre a prueba de fugas en vasos grandes). Suturas de monofilamento (ETHILON*, PROLENE*) en microvasculares.
3.4 Cirugía de Pequeños Animales: Casos Específicos
Neoplasias Perianales:Tipos: Adenomas y carcinomas de glándulas perianales, adenocarcinomas de glándulas apocrinas de sacos anales.
Adenomas Perianales: Más frecuentes (80%). Hormonodependientes (asociados a tumores testiculares intersticiales). Pequeños, lisos, múltiples, bien delimitados, ulcerados, crecimiento lento.
Tratamiento: Orquidectomía bilateral (en machos enteros) para reducir aparición de nuevas neoplasias.
Criptorquidia y Tumores Testiculares:Riesgos: Mayor incidencia de tumores y torsiones en testículos ectópicos.
Tumores Malignos: Más fácilmente desapercibidos si son intraabdominales.
Síndrome de Feminización: Sospechar tumor de Sertoli en perros criptórquidos.
Síntomas: Asintomático (masa palpable), trastornos endocrinos (cambios en pelo, feminización), tumores perianales, enfermedad prostática.
Diagnóstico: Radiología, ecografía (localización), hematología (aplasia medular por estrógenos).
Tratamiento: Orquidectomía profiláctica bilateral (para evitar transmisión genética y prevenir tumores). Testículos preescrotales e inguinales se extirpan directamente. Testículos abdominales se localizan siguiendo el conducto deferente desde la próstata o cerca de la vejiga.
Hernia Perineal:Causas: Hipertrofia prostática (en perros de edad avanzada), tenesmo, estreñimiento crónico, debilidad muscular perineal.
Contenido: Próstata, vejiga, flexura rectal, tejido graso.
Recomendación: Orquidectomía siempre que se intervenga quirúrgicamente una hernia de este tipo.
Vasectomía:Técnica: Incidir túnica vaginal sobre conducto deferente. Exteriorizar conducto, abrir ventana en su vascularización. Ligar conducto con material absorbible (2/0), respetar vascularización. Seccionar doblemente, resecando 1-2 cm. Extremo próximo al testículo abierto, extremo alejado ligado ("extremo libre" para evitar atrofia testicular).
Cierre: Túnica vaginal con punto cruzado o abierta. Herida quirúrgica en dos planos (subcutáneo y piel).
Complicación más Frecuente: Hematoma (manejo vascular).
Post-cirugía: Separar de hembras en celo por un mes (eliminación de espermatozoides).
Orquidectomía (Perro y Gato):Pre-escrotal (Perro): Incisión elíptica en piel alrededor de implantación escrotal. Hemostasia meticulosa (electrocauterio bipolar). Disección de tejido subcutáneo para exponer cordón espermático. Ligadura de estructuras del cordón por separado. Cierre por planos.
Escrotal (Gato): Incisión cutánea sobre testículo. No suturar escroto.
Uretrostomía Perineal (Gato):Indicaciones: Obstrucción peneana no resoluble por sondaje, casos recidivantes.
Técnica: Incisión, disección y resección del músculo retractor del pene. Prolongar incisión con tijeras finas hasta glándulas bulbouretrales (no resecar). Lograr diámetro amplio de uretra.
Complicaciones:Sangrado: Minimizar seccionando cuerpo esponjoso por línea media sin lesionar cuerpos cavernosos. Suturar bordes seccionados del cuerpo esponjoso a la piel con sutura continua entrelazada de Ford.
Dehiscencia de Sutura/Fibrosis: Disección incompleta de fijaciones del pene a pelvis, sección incompleta de músculos isquiocavernosos (tensión en sutura). Contacto de orina con tejido subcutáneo (inflamación, retraso cicatrización, necrosis cutánea).
Tratamiento de Dehiscencia: Re-suturar mucosa uretral a la piel.
Neoplasias Vaginales:Sospecha: Tumor en perra mayor, hiperplasia en joven y en celo.
Tratamiento: Quirúrgico. Quimioterapia para tumor venéreo transmisible.
Importancia de sondar la uretra: Mantener localizada para evitar lesionarla.
Obstrucción Uretral (Perro):Pre-quirúrgico: Corregir alteraciones hídricas, electrolíticas y metabólicas. Intentar hidropropulsión de cálculos a vejiga.
Anestesia: Sedación profunda y anestesia local en pacientes urémicos/deprimidos.
Uretrotomía: Para eliminar cálculos retenidos delante del hueso peniano que no se movilizaron a la vejiga.
Post-quirúrgico: Control de infección (antibióticos amplio espectro, luego antibiograma). Limpieza diaria de uretrostomía. Pomadas/vaselina tópicas.
Advertencias al Propietario: Sangrado normal y copioso al orinar.
FLUTD (Enfermedad del Tracto Urinario Distal Felino): Síndrome común (10% patologías felinas).
Episiotomía:Cierre: Tres capas (mucosa vaginal con sutura continua absorbible 2/0-3/0; músculo y tejido subcutáneo continuo con mismo material; piel con puntos simples o intradérmica). Cuidar bordes de comisura vulvar superior.
Post-quirúrgico: Collar isabelino (evitar lamido).
Cistocentesis: Técnica rápida y sencilla, mejor tolerada que el sondaje. Dirigir bisel de aguja hacia el exterior.
Hemostasia en Cirugía:Control del Sangrado: Campo quirúrgico limpio, evita hemorragias postoperatorias.
Causas de Hemorragia Espontánea (Perros): Trombocitopenia inmunomediada (más común), infecciosas, CID, intoxicación por raticida. Enfermedad de Von Willebrand.
Morfología Plaquetaria: Ayuda en diagnóstico de trombocitopenia.
Disfunción Plaquetaria: Hemorragias con número adecuado de plaquetas (ehrlichiosis, anaplasmosis, mieloma múltiple).
Coagulopatías Congénitas: Poco comunes.
CID (Coagulación Intravascular Diseminada): Deterioro por prolongación de TCA o TTPA.
Enfermedad Hepática: Tradicionalmente hipocoagulabilidad, pero puede haber activación plaquetaria, trombosis portal/esplénica.
Terapia Antiagregante (Aspirina, Clopidogrel): Dosis en perros y gatos, efectos secundarios, utilidad en enfermedad hipertrófica cardíaca.
Terapia Trombolítica (Estreptoquinasa, Activador Tisular del Plasminógeno): Administrar temprano (dentro de 4 horas). Poca experiencia en veterinaria.
Métodos Mecánicos de Hemostasia: Presión directa, torundas, compresas, ligaduras, clips vasculares, suturas.
Agentes Tópicos de Hemostasia: Gelatina, colágeno, celulosa oxidada, trombina, fibrina, pegamentos sintéticos.
Adrenalina (diluida 1:200.000): Instilar sobre tejido para reducir sangrado superficial. Controlar efectos cardíacos e hipertensión.
Suturas y Ligaduras: Evitar sujetar material con porta-agujas o pinzas al hacer nudo. Cortar cabos a 3-5 mm. Sección de pedículo vascular a distancia de la ligadura.
Clamps Vasculares y Torniquetes de Rumel: Ocluyen temporalmente sin lesión vascular.
Cierre de Vasos: Ligadura en masa para vasos pequeños y omentales. Ligadura transfixiante doble.
Coagulación Bipolar: Control preciso del sangrado.
Hemostasia en Hígado: Compresión directa con gasa, agentes tópicos.
Anestesia en Pequeños Animales:Preadministración de Medicación Preanestésica: 30-40 minutos antes.
Anestesia Intravenosa (Barbitúricos): Deprimen SNC, sueño. Bajo costo, fácil administración. Difícil de controlar. Eliminación lenta. Dosis cercanas a tóxicas para relajación muscular.
Hipotermia: Disminuye metabolismo de drogas IV. Aumenta concentración plasmática de propofol y fentanilo. Prolonga efecto de relajantes musculares.
Manejo de la Hipotermia: Fuentes de calor externas. Evitar calor directo en shock hipovolémico (vasodilatación).
Anestesia Epidural/Espinal: Desaconsejada en alteraciones de la coagulación.
Electrocirugía:Bipolar (POWERSTAR): Corte y coagulación simultánea. Corriente entre dos electrodos activos. Altamente focalizado. Menos daño térmico en tejidos circundantes. No indicado para coagulación anticonceptiva de trompas de Falopio.
Monopolar: Electrodo activo es corte y coagulación. Paciente conectado a electrodo de retorno (placa de toma de tierra). Corriente puede pasar más allá del área de interés.
Densidad de Energía: Concepto clave. Efectos sobre tejidos varían con distancia, potencia, superficie y tiempo.
Incisión Limpia pero Hemorrágica: Electrodo fino, alta densidad de potencia (reducir velocidad, cambiar electrodo).
Humo: Irritación ocular/respiratoria, posible transmisión de patologías. Usar mascarillas y aspiradores.
Activación Inadvertida del Generador: Perforaciones de órganos, hemorragia.
Electrodo Neutro (Placa de Retorno): Eliminar corriente de forma segura. Amplio, buena conductividad, bien colocado. Afeitar zona de contacto, usar gel.
Láser en Cirugía Veterinaria (CO2):Interacción con Tejidos: Reflexión, transmisión, absorción, dispersión.
Densidad de Potencia: Impacto del haz sobre el tejido. Cauterizar vasos (0.5-0.8 mm) variando distancia, potencia, ángulo de incisión.
Usos Comunes: Ovariohisterectomías, esplenectomías, nefrectomías, cirugía hepática, mastectomías.
Precauciones: No contactar punta del instrumento con piel (quemaduras). Aislar y proteger piel con gasas humedecidas.
Cierre de Heridas y Suturas (Principios):Cierre Primario: Aproximar bordes sin tensión.
Tejido Subcutáneo: Usar apropiadamente para sujetar suturas, evitar espacios muertos (seromas). Usar material absorbible (poliglactina 910, ácido poliglicólico) de bajo peso molecular. Monofilamento preferible por menor capilaridad.
Cicatrización Lenta: Retrasar retirada de sutura.
Movilidad en Heridas Crónicas: Colocar drenajes, inmovilizar herida.
Sutura Continua: Fuerza de tensión uniforme.
Nudos: Trabajar lentamente, considerar tensión. Nudos planos y cuadrados. Nudos quirúrgicos de uso común. Multifilamento más fáciles de anudar. Monofilamento más seguros.
Preservar Integridad de Suturas: Evitar apretar o comprimir con instrumentos.
Tipos de Suturas (General):Coaptación: Afrontar tejidos, sin tensión. Puntos separados (intradérmica/subcutánea, cruzados/en X), surjete simple (intradérmico/subcutáneo).
Tensionantes: Para reducir tensión. Puntos en U (horizontal/vertical).
Anastomosis Digestivas:Estómago: Cerrar en dos planos (sutura simple continua mucosa/submucosa, sutura invertida de Lembert serosa/muscular).
Intestino Delgado: Mismas consideraciones que el estómago. Preservar diámetro de la luz. Asegurar estanqueidad (evitar peritonitis química). Suturas absorbibles (monofilamento). Agujas de punta redonda.
Vasos: Sin tensión. Agujas atraumáticas de 3/8, 1/2 o 5/8 de círculo. Suturas finas (nylon, polipropileno) monofilamento. Suturas continuas o separadas.
Nervios (Microcirugía): Agujas atraumáticas 3/8, 1/2, 5/8 de círculo, punta redonda. Nylón o polipropileno 11/0, 10/0, 9/0.
Conyuntiva: Enterrar nudos. Sutura no absorbible (nylon 9/0-10/0) con aguja espatulada para injertos. Poliglactina para úlceras infectadas.
Adhesivos Tisulares:Tipos: Sintéticos (cianoacrilatos: butil-cianoacrilato menos tóxico) y biológicos.
Complicaciones Sintéticos: Toxicidad, irritación, inflamación.
Ventajas: Fácil y rápida aplicación.
Limitaciones: No aplicar en incisiones > 5 cm. Superficies poco húmedas. Imposibilidad de rectificar.
Grapadoras Quirúrgicas:Clasificación: Circulares, lineales, lineales cortantes, ligaduras, grapas cutáneas.
Grapadoras Circulares: Anastomosis término-terminales, término-laterales, látero-laterales (tracto digestivo, colon, recto).
Grapadoras Cutáneas: Cierre de piel.
Laparoscopia:Ventajas: Recuperación más rápida.
Materiales: Mismos que cirugía convencional, adaptados (diámetro trocares, longitud hilo). Hilos visibles, fáciles de anudar.
Agujas: Punta atraumática, curvatura modificable.
Manejo de Aguja: Corregir posición con contra porta-agujas. Sujetar firmemente.
3.5 Principios de los Cuidados Quirúrgicos
Pre-cirugía:Valoración Preanestésica: Anamnesis profunda, examen físico (auscultación, palpación, percusión, inspección).
Registros Quirúrgicos: Importancia del registro médico.
Periodos de Ayuno:
Estudios Complementarios: No deben suplir actuación veterinaria. Contactar con veterinario previo. Recoger información basada en hechos.
Esterilización y Limpieza del Material: Autoclave (método preferido). Conocer equipo, duración del ciclo, temperatura, ventilación. Cajas de instrumental abiertas durante esterilización. Soluciones desinfectantes (propiedades, enjuague).
Administración de Antibióticos Preoperatorios: Dentro de 1 hora antes de incisión (reduce riesgo de infección 50%). Duración de cirugía (factor importante). Cirugías limpias-contaminadas.
Preparación del Campo Operatorio: Descontaminación (eliminar flora transitoria y residente superficial). No afeitar (inflamación, extrusión de microorganismos).
Posicionamiento del Paciente: Adecuado a la cirugía (decúbito supino, lateral, etc.). Vigilar tubo endotraqueal al rotar.
Preparación del Quirófano: Ambiente seguro y eficiente. Áreas independientes (anestesia, lavado/esterilización, salas de operaciones, recuperación, laboratorios, autopsias).
Durante la Cirugía:Técnica Aséptica: Esterilización del lugar, lavado de manos, limpieza de áreas, manejo de desechos, uso de indumentaria/utensilios adecuados.
Vestuario Quirúrgico: Pijamas médicos limpios, sin contaminación. Reservorio de bacterias.
Instrumental Quirúrgico: Escalpelos (hojas desechables, mangos), tijeras (tipos), pinzas (Adson), porta-agujas (Mayo-Hegar, Mathieu, Olsen-Hegar), pinzas porta-gasas. Saber utilizar lo esencial.
Vigilar la Hemostasia: Limpiar campo sangrante. Evitar exceso de pinzas hemostáticas (olvido en cavidad).
Proteger al Animal contra la Hipotermia: Temperatura uniforme en quirófanos.
Inmovilizar Firmemente pero Cuidadosamente: Posición operatoria requerida.
La Anestesia: Períodos de anestesia quirúrgica (pérdida de reflejos oculopalpebral y conjuntival, relajación de tercer párpado, sin resistencia al mover cabeza/miembros). Pulso y presión arterial normales al principio, luego bajan. Temperatura desciende.
Dolor: Consecuencias (aumento tamaño masa, empeoramiento).
Laparotomía Exploratoria: Herramienta diagnóstica. No siempre exámenes complementarios dan diagnóstico definitivo.
Post-cirugía:Recuperación: Depende de la anestesia (minutos a horas), vigilancia frecuente/continua. Personal calificado.
Remover Tubo Endotraqueal, Mantener/Remover Cánulas IV.
Cuidado de la Herida: Vigilar dehiscencia, infección. Limpieza diaria.
Valoración de Constantes Vitales y Parámetros Fisiológicos.
Evaluación Frecuente: Evitar contusiones, problemas vasculares y respiratorios.
Lugar Designado para Recuperación: Cuidados intensivos.
Transición a Manejo Normal: Cuando come y bebe normalmente, parámetros fisiológicos estables.
Cuidados a Largo Plazo: Cuidado de la herida, remoción de suturas y catéteres.
Definiciones Clave:Iatrogenia: Daño causado por el acto médico.
Mala Praxis: Daños por deficiencias en procedimientos terapéuticos.
Error: Inherente a la práctica. Reducir al máximo.
Ética Profesional: Conservar la vida, aliviar el sufrimiento/dolor, fomentar el bienestar. Conocimiento básico de ética. Defender los mejores intereses de los pacientes y dueños.
Derechos de los Animales: Marco de referencia para la actuación veterinaria (no malos tratos, muerte instantánea/indolora, vivir libre en ambiente natural, crecer en condiciones propias de especie).
Sección 4: Pruebas de Laboratorio y Diagnóstico Complementario
Hematocrito (Ht): Depende del número y tamaño de eritrocitos, estado de hidratación. Deshidratación lo aumenta falsamente.
Leucocitos: Recuento total y diferencial. Interpretación de cambios.
Neutrofilia, Monocitosis, Linfopenia, Eosinopenia (Perros): En infecciones bacterianas agudas y estrés intenso.
Desplazamiento Regenerativo: Leucocitosis con aumento de neutrófilos inmaduros (enfermedad prolongada, estimulación de médula ósea).
Glucosa en Sangre (Glucemia): Evalúa absorción y utilización de carbohidratos. Depende de insulina, catecolaminas, corticosteroides, electrolitos.
Creatinina: Reacciona con picratos en solución alcalina (complejo rojo). Mide concentración.
Electrolitos: Sodio (principal catión extracelular), potasio (principal catión intracelular). Desequilibrio de potasio afecta agua intracelular.
Cloruros: Titulación con iones de plata.
Análisis de Gases Sanguíneos: pH, PCO2, PO2. PCO2 > 45 mmHg (acidosis respiratoria), < 35 mmHg (alcalosis respiratoria). Componente metabólico (bicarbonato o exceso/déficit de bases).
ECG (Electrocardiograma): Registra actividad eléctrica del corazón.
Derivaciones: Bipolares y monopolares (sistema hexaaxial).
Toma de Datos: Onda P, intervalo P-R, complejo QRS, intervalo Q-T. Frecuencia auricular y ventricular.
Necropsia: Conocer historia clínica y quirúrgica del perro, operación sufrida, características de la enfermedad, tratamientos, análisis de laboratorio.
Análisis de Orina: Volumen, transparencia, color.
Turbia: Sedimentos (glóbulos blancos/rojos, cálculos, cilindros).
Rojo/Pardo: Hemoglobina, mioglobina.
Pardo/Amarillo: Pigmentos biliares.
Sedimento Urinario: Leucocitos (inflamación, infección), Glóbulos rojos (trauma, cistitis, cálculos, inflamación, neoplasia), Bacterias (infección), Cristales (infección, contaminación).
Cultivo de Orina: Obligatorio si se sospecha infección.
Cuestionario (10 Preguntas Cortas)
Anamnesis Reproductiva Bovina: Explica por qué es fundamental recabar información detallada sobre la historia de partos, abortos y calores en una vaca durante la anamnesis inicial.
Preparación Quirúrgica del Campo Operatorio: ¿Cuál es el propósito principal de la preparación del campo operatorio en cirugía veterinaria y qué técnica se desaconseja, y por qué?
Riesgos de Anestesia General en Rumiantes: Describe dos problemas principales que la anestesia general puede causar en rumiantes, comparado con otras especies, y por qué se requiere una atención especial.
Bloqueo Epidural en Bovinos: Describe el procedimiento para verificar la correcta posición de la aguja al realizar un bloqueo epidural en un bovino, mencionando al menos dos indicadores clave.
Cicatrización por Segunda Intención: ¿Cuándo se produce la cicatrización por segunda intención y cuáles son las características clave de este proceso en comparación con la unión primaria?
Selección de Suturas para Tejidos de Cicatrización Lenta vs. Rápida: ¿Qué tipo de suturas se recomiendan para tejidos que cicatrizan lentamente (ej. fascia) y cuáles para tejidos que cicatrizan rápidamente (ej. estómago), y por qué?
Complicaciones de la Orquidectomía y Escrotectomía: Menciona dos principios de Halsted que son fundamentales para prevenir las complicaciones más comunes en la orquidectomía y escrotectomía, y explica brevemente cómo contribuyen.
Uso de Adrenalina en Hemostasia Local: Explica cómo la adrenalina diluida puede utilizarse en cirugía para reducir el sangrado superficial, y qué precauciones cardíacas y de presión arterial deben considerarse.
Análisis de Gases Sanguíneos (PCO2): ¿Qué indican los valores de PCO2 por encima de 45 mmHg y por debajo de 35 mmHg en un análisis de gases sanguíneos en animales?
Ventajas de la Electrocirugía Bipolar: Menciona dos ventajas clave de la electrocirugía bipolar sobre la monopolar, particularmente en relación con la focalización de la corriente y el daño térmico.
Clave de Respuestas del Cuestionario
Anamnesis Reproductiva Bovina: Es fundamental recabar información sobre partos, abortos y calores para evaluar el historial reproductivo de la vaca, identificar posibles problemas de fertilidad, ciclos estrales irregulares o enfermedades reproductivas subyacentes que puedan influir en el diagnóstico actual o futuro manejo del animal.
Preparación Quirúrgica del Campo Operatorio: El propósito principal es eliminar las fuentes controlables de contaminación (flora transitoria y residente superficial). Se desaconseja afeitar la zona de incisión con rasuradora seca, ya que puede producir una inflamación secundaria y la extrusión de microorganismos de capas profundas de la piel, aumentando la contaminación quirúrgica.
Riesgos de Anestesia General en Rumiantes: La anestesia general en rumiantes puede causar problemas como regurgitación y timpanismo, que pueden llevar a neumonía por aspiración o asfixia. Además, su capacidad pulmonar es reducida, lo que hace el intercambio gaseoso menos eficiente y los predispone a insuficiencia respiratoria, especialmente con el uso de relajantes musculares.
Bloqueo Epidural en Bovinos: Para verificar la correcta posición, primero se aspira con el émbolo de la jeringa; no debe salir sangre. Luego, al introducir el líquido anestésico, no debe haber resistencia y debe fluir suave y lentamente. Si hay resistencia o sangre, la aguja no está en el espacio epidural y su posición debe corregirse.
Cicatrización por Segunda Intención: Ocurre cuando una herida no cicatriza por unión primaria, generalmente debido a infección, trauma excesivo, o pérdida/aproximación imprecisa de tejido. Se caracteriza por dejar la herida abierta para que cicatrice desde las capas profundas hacia la superficie, formando tejido de granulación y cicatriz, lo que es un proceso más lento y complicado.
Selección de Suturas para Tejidos de Cicatrización Lenta vs. Rápida: Para tejidos de cicatrización lenta (como la fascia o piel), se recomiendan suturas no absorbibles o absorbibles de mayor duración, ya que necesitan soporte prolongado. Para tejidos de cicatrización rápida (como el estómago o intestino delgado), se usan suturas absorbibles, dado que recuperan su fuerza rápidamente y las suturas ya no son necesarias.
Complicaciones de la Orquidectomía y Escrotectomía: Dos principios de Halsted fundamentales son el manejo delicado de los tejidos y una hemostasia adecuada. El manejo delicado minimiza el trauma y la inflamación, mientras que una hemostasia adecuada previene hematomas y asegura que los muñones del cordón espermático estén bien ligados para evitar hemorragias postoperatorias.
Uso de Adrenalina en Hemostasia Local: La adrenalina diluida (ej., 1:200.000) puede instilarse sobre el tejido para inducir vasoconstricción local y reducir el sangrado en intervenciones superficiales. Sin embargo, se debe controlar la cantidad administrada y vigilar al paciente por posibles alteraciones cardíacas como taquicardia o arritmias, y la aparición de hipertensión arterial.
Análisis de Gases Sanguíneos (PCO2): Un PCO2 por encima de 45 mmHg indica acidosis respiratoria, lo que sugiere hipoventilación. Por el contrario, un PCO2 por debajo de 35 mmHg indica alcalosis respiratoria, lo que sugiere hiperventilación.
Ventajas de la Electrocirugía Bipolar: La electrocirugía bipolar es altamente focalizada porque la corriente se dirige entre dos electrodos activos en el mismo instrumento, a través de un segmento muy pequeño de tejido. Esto reduce significativamente el daño térmico en los tejidos circundantes en comparación con la monopolar, donde la corriente puede dispersarse más ampliamente a través del paciente.
Preguntas de Ensayo
Analice la importancia de una anamnesis exhaustiva y un examen físico ordenado en el diagnóstico de enfermedades bovinas, contrastando cómo la recopilación de datos reproductivos y ambientales, junto con la evaluación de constantes fisiológicas, conduce a un diagnóstico presuntivo y diferencial.
Discuta los desafíos y consideraciones especiales de la anestesia en rumiantes, comparando los riesgos de la anestesia general con las ventajas de los bloqueos nerviosos locales y regionales (como el epidural y paravertebral), y detalle los tipos de fármacos y sus efectos deseables e indeseables.
Compare y contraste los principios de cicatrización por primera y segunda intención, explicando los factores que influyen en cada proceso y las implicaciones quirúrgicas, incluyendo la elección de suturas y el manejo de complicaciones como la infección y la dehiscencia.
Desarrolle una discusión sobre la selección de materiales y técnicas de sutura en diferentes tejidos corporales, destacando cómo las características del material (absorbible/no absorbible, monofilamento/multifilamento) y el tipo de aguja se adaptan a las propiedades del tejido y a las condiciones específicas de la cirugía (ej., tracto gastrointestinal, vasos, fascia, piel).
Evalúe críticamente el papel de la hemostasia intraoperatoria en la cirugía de pequeños animales, describiendo las diferentes técnicas (mecánicas, farmacológicas, tópicas, electrocirugía bipolar) y su aplicación en escenarios clínicos variados, así como las implicaciones de las coagulopatías y su manejo pre y postoperatorio.
Glosario de Términos Clave
Abomasopexia: Fijación quirúrgica del abomaso (cuarto estómago de los rumiantes) a la pared abdominal para corregir o prevenir su desplazamiento.
Adenoma Perianal: Tumor benigno común de las glándulas perianales, a menudo hormonodependiente y asociado a tumores testiculares en machos enteros.
Agente Etiológico: El microorganismo o factor causante de una enfermedad.
Analgesia Epidural: Pérdida de sensibilidad en una región del cuerpo debido a la inyección de un anestésico local en el espacio epidural, que rodea la médula espinal.
Analgesia Espinal: Aplicación de un analgésico dentro del canal espinal para bloquear los nervios espinales, suprimiendo la sensibilidad y motilidad en la región posterior al punto de aplicación.
Anamnesis: Recopilación de información sobre la historia clínica de un paciente, obtenida mediante preguntas al propietario o responsable.
Anastomosis: Conexión quirúrgica entre dos estructuras tubulares, como vasos sanguíneos o segmentos del intestino.
Anestesia por Infiltración: Inyección de un anestésico local directamente en los tejidos de una zona específica para bloquear las terminaciones nerviosas.
Anestesia Regional: Inyección de un analgésico en la proximidad de un nervio para insensibilizar el área inervada por dicho nervio.
Antibioterapia Empírica: Administración de antibióticos basada en la sospecha clínica de la infección, antes de obtener los resultados del cultivo y antibiograma.
Antibiograma: Prueba de laboratorio que determina la sensibilidad de un microorganismo a diferentes antibióticos.
Anticoagulantes: Fármacos que previenen la formación de coágulos sanguíneos.
Antiagregantes: Fármacos que inhiben la agregación de plaquetas, reduciendo la formación de trombos.
Aplasia Medular: Supresión de la actividad de la médula ósea, resultando en una disminución de la producción de células sanguíneas.
Aposición: Contacto o unión de dos superficies o bordes, especialmente en cirugía.
Arnica Montana: Medicamento homeopático con efectos antiinflamatorios y analgésicos, también contribuye al control del sangrado.
Asepsia Quirúrgica: Conjunto de prácticas destinadas a mantener un área libre de microorganismos patógenos para prevenir infecciones, especialmente en el quirófano.
Atipamezol: Antídoto específico para los efectos sedativos y analgésicos de la xilacina.
Auscultación: Examen físico que consiste en escuchar los sonidos internos del cuerpo, generalmente con un estetoscopio.
Caquexia: Estado de debilidad y emaciación extrema, generalmente debido a una enfermedad crónica grave.
Catgut Crómico Quirúrgico: Sutura absorbible de origen natural (submucosa de oveja o serosa bovina) tratada para prolongar su absorción por las enzimas lisosomales.
Catgut Quirúrgico Simple: Sutura absorbible de origen natural, no tratada, con una capacidad de absorción a corto plazo.
Celulitis: Inflamación aguda, diseminada y purulenta del tejido celular subcutáneo.
Cierre por Segunda Intención: Proceso de cicatrización en el que una herida se deja abierta y cicatriza desde el fondo hacia la superficie, generalmente involucrando la formación de tejido de granulación.
Cicatrización por Primera Intención: Cicatrización de una herida con bordes limpios y aproximados, resultando en una cicatriz mínima.
Cistocentesis: Punción de la vejiga urinaria a través de la pared abdominal para obtener una muestra de orina estéril.
Clopidogrel: Fármaco antiagregante que inhibe el reclutamiento y activación plaquetaria mediada por ADP.
Coagulopatías Congénitas: Trastornos de la coagulación presentes desde el nacimiento.
Coagulación Intravascular Diseminada (CID): Trastorno grave de la coagulación que provoca la formación de pequeños coágulos en todo el torrente sanguíneo, agotando los factores de coagulación y llevando a hemorragias.
Condición Corporal: Medida del estado nutricional de un animal.
Constantes Fisiológicas: Parámetros vitales (temperatura, frecuencia cardíaca, frecuencia respiratoria, movimientos ruminales) que indican el estado de salud de un animal.
Criptorquidia: Condición en la que uno o ambos testículos no descienden al escroto.
Dehiscencia: Separación parcial o total de los bordes de una herida quirúrgica.
Debridación: Eliminación quirúrgica o no quirúrgica de tejido muerto, dañado o infectado de una herida.
Deficit de Bases: Medida del equilibrio ácido-base que indica la cantidad de base necesaria para restaurar el pH sanguíneo a la normalidad.
Dexametasona: Corticosteroide con potentes propiedades antiinflamatorias e inmunosupresoras.
Diagnóstico Confirmativo: Diagnóstico definitivo de una enfermedad, usualmente basado en pruebas de laboratorio específicas.
Diagnóstico Diferencial: Lista de posibles enfermedades que podrían explicar los signos clínicos de un paciente.
Diagnóstico Presuntivo: Diagnóstico basado en los signos clínicos y hallazgos del examen físico, antes de las pruebas de confirmación.
Diazepam: Tranquilizante y sedante, a menudo usado en preanestesia o para efectos anestésicos cooperantes.
Disquecia: Defecación difícil o dolorosa.
Distocia: Parto difícil o laborioso.
Doxopram: Estimulante respiratorio que antagoniza algunos efectos de la xilacina.
Drenaje Penrose: Drenaje pasivo, usualmente de látex, que funciona por capilaridad para eliminar líquidos de una herida.
Electrocirugía Bipolar: Técnica quirúrgica que utiliza corriente eléctrica de alta frecuencia para cortar o coagular tejido entre dos electrodos activos, que forman parte del mismo instrumento.
Electrocirugía Monopolar: Técnica quirúrgica en la que la corriente eléctrica fluye desde un electrodo activo a través del paciente hasta una placa de retorno (electrodo neutro).
Emaciación: Adelgazamiento extremo, pérdida de masa corporal y tejido adiposo.
Enfisema Subcutáneo: Presencia de aire en el tejido subcutáneo.
Endometritis: Inflamación del endometrio, la capa interna del útero.
Enterotomía: Incisión quirúrgica en el intestino.
Episiotomía: Incisión quirúrgica de la vulva para facilitar el parto o el acceso a la vagina.
Estreptoquinasa: Fármaco trombolítico utilizado para disolver coágulos sanguíneos.
Etamsilato: Fármaco hemostático utilizado para reducir el sangrado.
Evisceración: Protrusión de órganos internos (especialmente intestino) a través de una herida abdominal abierta.
Examen Físico General: Evaluación sistemática de un paciente para detectar signos de enfermedad.
Fascia: Capa de tejido conjuntivo firme que cubre los músculos y otras estructuras.
Fascitis: Inflamación de la fascia.
Fibrinógeno: Proteína plasmática esencial para la coagulación sanguínea.
Fibrinólisis: Proceso fisiológico de disolución de coágulos sanguíneos.
Fimosis: Estrechamiento del orificio prepucial que impide la exteriorización del pene.
FLUTD (Enfermedad del Tracto Urinario Distal Felino): Síndrome que abarca diversas afecciones del tracto urinario inferior en gatos.
Fotofobia: Intolerancia a la luz.
Fuerza de Ruptura: La carga requerida para que un material de sutura o un tejido se rompa, independientemente de su dimensión.
Fuerza de Tensión: La carga por unidad de área transversal que un material o tejido puede soportar en el punto de ruptura.
Gastropexia: Fijación quirúrgica del estómago a la pared abdominal, comúnmente realizada para prevenir la dilatación-vólvulo gástrico.
Gastrorrafia: Sutura quirúrgica del estómago.
Gastrostomía: Creación de una abertura quirúrgica en el estómago, a menudo para la colocación de una sonda de alimentación.
Hematocrito: Porcentaje del volumen sanguíneo ocupado por los glóbulos rojos.
Hemograma: Análisis de sangre que evalúa los componentes celulares (glóbulos rojos, glóbulos blancos, plaquetas).
Hemostasia: Proceso de detención del sangrado.
Hernia Perineal: Protrusión de órganos abdominales o pélvicos a través de un defecto en la musculatura del diafrag-ma pélvico.
Hidrofobia: Miedo al agua.
Hidropropulsión: Técnica para movilizar cálculos urinarios mediante el flujo de líquido.
Homeostasis: Capacidad del organismo para mantener un equilibrio y estabilidad interna.
Hiperplasia Vaginal: Crecimiento excesivo de tejido en la vagina, a menudo relacionado con el ciclo estral.
Hipoproteinemia: Nivel bajo de proteínas en la sangre.
Hipotermia: Temperatura corporal anormalmente baja.
Hipoventilación: Respiración insuficiente que resulta en un aumento de PCO2 en la sangre.
Iatrogenia: Cualquier efecto nocivo o indeseado que se deriva directamente de la acción o intervención médica.
Induración: Endurecimiento de un tejido en respuesta a presión o lesión.
Inspección: Examen físico mediante la observación visual del paciente.
Lactulosa: Laxante osmótico que ablanda las heces.
Laparotomía: Incisión quirúrgica en la pared abdominal para acceder a la cavidad abdominal.
Leucocitosis: Aumento del número total de glóbulos blancos en la sangre.
Lidocaína: Anestésico local.
Ligadura en Masa: Técnica de ligadura que involucra una gran cantidad de tejido y vasos juntos.
Linfa: Líquido transparente que circula por el sistema linfático.
Linfopenia: Disminución del número de linfocitos en la sangre.
Mala Praxis: Negligencia profesional o error en la práctica médica que causa daño al paciente.
Melena: Heces oscuras y alquitranadas, indicativas de sangrado en el tracto gastrointestinal superior.
Metronidazol: Antibiótico con actividad contra bacterias anaerobias y algunos protozoos.
MONOCRYL (Poliglecaprone 25):* Sutura monofilamento sintética absorbible, utilizada para la aproximación de tejidos blandos y ligaduras.
Movimientos Ruminales: Contracción y relajación rítmica del rumen, esenciales para la digestión en rumiantes.
Neoplasia: Crecimiento anormal de células o tejidos; tumor.
Neumonía por Aspiración: Inflamación pulmonar causada por la inhalación de material extraño (ej., vómito o líquido ruminal).
Neutrofilia: Aumento del número de neutrófilos en la sangre.
Orquidectomía: Extirpación quirúrgica de uno o ambos testículos (castración).
Palpación: Examen físico mediante el uso del tacto para sentir órganos o tejidos.
Palpación Rectal: Método de exploración física en grandes animales para evaluar órganos pélvicos y abdominales a través del recto.
PCO2: Presión parcial de dióxido de carbono en la sangre, indicativa de la ventilación pulmonar.
Percusión: Examen físico que consiste en golpear una superficie del cuerpo para producir un sonido que revele la condición de los órganos subyacentes.
Peritonitis: Inflamación del peritoneo, la membrana que recubre la cavidad abdominal y los órganos internos.
PDS II (Polidioxanona):* Sutura monofilamento sintética absorbible de larga duración.
Piómetra: Acumulación de pus en el útero.
Pinzas de Adson: Pinzas quirúrgicas pequeñas con dientes, utilizadas para sujetar tejidos delicados.
Pinzas de Kelly: Pinzas hemostáticas curvas o rectas utilizadas para pinzar vasos sanguíneos.
Poliglactina 910 (VICRYL):* Sutura multifilamento sintética absorbible.
PROLENE (Polipropileno):* Sutura monofilamento sintética no absorbible, conocida por su inercia y resistencia a la tracción.
Propedéutica: Conjunto de conocimientos preliminares necesarios para la práctica de una ciencia o arte; en medicina, la enseñanza preparatoria para el diagnóstico.
Prurito: Picazón intensa.
Ptialismo: Producción excesiva de saliva.
Radiografía: Técnica de diagnóstico por imagen que utiliza rayos X para visualizar estructuras internas.
Regurgitación: Retorno del contenido del esófago o rumen a la boca, sin esfuerzo de vómito.
Rumenotomía: Incisión quirúrgica en el rumen para acceder a su interior.
Saculitis Anal: Inflamación de los sacos anales.
Sedación: Inducción de un estado de calma, somnolencia y disminución de la ansiedad mediante fármacos.
Sepsis: Respuesta inflamatoria sistémica del cuerpo a una infección.
Seroma: Acumulación de líquido seroso bajo la piel después de una cirugía.
Sutura Atraumatica: Aguja y material de sutura pre-ensamblados que minimizan el daño al tejido al pasar.
Sutura de Monofilamento: Hilo de sutura compuesto por una sola hebra.
Sutura de Multifilamento: Hilo de sutura compuesto por varias hebras trenzadas o torcidas.
Suturas Absorbibles: Materiales de sutura que son degradados y absorbidos por el cuerpo con el tiempo.
Suturas Continuas: Patrón de sutura en el que una sola hebra de sutura se utiliza para una serie de puntos, con nudos solo al principio y al final.
Suturas de Retención: Suturas de refuerzo grandes, colocadas a cierta distancia de la incisión principal para aliviar la tensión.
Suturas No Absorbibles: Materiales de sutura que permanecen en el cuerpo indefinidamente.
Tenesmo: Esfuerzos dolorosos e ineficaces para defecar u orinar.
Tiopental Sódico: Barbitúrico de acción ultracorta utilizado para la inducción de la anestesia.
Trombocitopenia: Disminución del número de plaquetas en la sangre.
Trombocitopatía: Disfunción de las plaquetas, incluso si su número es normal.
Tromboembolismo: Obstrucción de un vaso sanguíneo por un trombo (coágulo) que se ha desprendido de su lugar de origen.
Tranquilizantes: Fármacos que reducen la ansiedad y producen relajación sin causar somnolencia profunda.
Uretrotomía: Incisión quirúrgica en la uretra.
Uroabdomen: Presencia de orina en la cavidad abdominal.
Vasectomía: Extirpación de una porción de los conductos deferentes para esterilizar a un macho sin afectar la producción hormonal.
Xilacina: Alfa-2 agonista con propiedades sedativas, analgésicas y relajantes musculares, comúnmente usado en bovinos.
Yohimbina: Antagonista de los receptores alfa-2 adrenérgicos, usado como antídoto para la xilacina.
Zoonosis: Enfermedad que puede transmitirse de animales a humanos.`;

export const Sofia: Agent = {
  id: 'dra-sofia',
  name: '👩‍⚕️ Dra. Sofía (Felinos)',
  personality: `\
Eres la Dra. Sofía, una médica veterinaria con una especialización en medicina felina. \
Tu tono es calmado, paciente y muy detallado. Te apasionan los gatos y siempre buscas educar al estudiante sobre las sutilezas del comportamiento y la salud felina. \
Hablas de forma clara y concisa, evitando la jerga excesivamente técnica a menos que sea necesario, en cuyo caso la explicas.`,
  bodyColor: '#a142f4',
  voice: 'Aoede',
  knowledgeBase: woundManagementKnowledgeBase,
  speakingRate: 1,
  pitch: 0,
  enableGoogleSearch: false,
};

export const Mateo: Agent = {
  id: 'dr-mateo',
  name: '👨‍⚕️ Dr. Mateo (Caninos)',
  personality: `\
Eres el Dr. Mateo, un veterinario enérgico y práctico especializado en perros. \
Tu comunicación es directa, optimista y alentadora. Te enfocas en dar consejos prácticos y en explicar procedimientos y diagnósticos de manera que el estudiante pueda entenderlos y recordarlos fácilmente. \
Te encanta usar analogías para simplificar temas complejos.`,
  bodyColor: '#4285f4',
  voice: 'Charon',
  knowledgeBase: woundManagementKnowledgeBase,
  speakingRate: 1,
  pitch: 0,
  enableGoogleSearch: false,
};