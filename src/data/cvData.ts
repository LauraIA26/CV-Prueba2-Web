import { WorkExperience, EducationItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  fullName: 'Laura Jiménez López',
  displayName: 'Laura Jiménez',
  title: 'Especialista en Gestión Administrativa & Atención al Cliente',
  subtitle: 'Titulada en Gestión Administrativa con más de 10 años de trayectoria continuada en facturación, proveedores, albaranes, control de stock y relación con clientes.',
  phone: '650.43.35.65',
  email: 'ia.jlaura26@gmail.com',
  location: 'Illescas (Toledo) / Parla (Madrid Sur)',
  driverLicense: 'Carnet de conducir Tipo B (desde 2004)',
  availability: 'Preferiblemente jornada / media jornada de mañana',
  summary: `Profesional administrativa proactiva, resolutiva y con sólida formación técnica. Destaco por mi rigurosidad en la emisión de facturas y albaranes, excelente capacidad de negociación y seguimiento con proveedores, organización de stock e inventarios, y una atención al cliente cercana, humana y orientada a la fidelización.`
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'exp-tintas-2024',
    role: 'Auxiliar Administrativo',
    company: 'Tintas La Sagra',
    period: 'Septiembre 2024 – Diciembre 2024',
    startDate: '09/2024',
    endDate: '12/2024',
    category: 'admin',
    isHighlighted: true,
    responsibilities: [
      'Emisión, verificación y gestión de facturación y presupuestos comerciales.',
      'Prospección activa y seguimiento continuo de cuentas de clientes.',
      'Control de cobros, resolución de incidencias en facturas y gestión documental.',
      'Atención personal y telefónica con clientes corporativos y particulares.'
    ],
    skillsUsed: ['Facturación', 'Prospección Comercial', 'Seguimiento de Clientes', 'Presupuestos', 'Excel']
  },
  {
    id: 'exp-tintas-2020',
    role: 'Dependiente de Tienda & Atención al Cliente',
    company: 'Tintas La Sagra',
    period: 'Junio 2020 – Enero 2021',
    startDate: '06/2020',
    endDate: '01/2021',
    category: 'customer_service',
    responsibilities: [
      'Atención directa al público y asesoramiento comercial personalizado.',
      'Gestión integral de servicios de copistería y digitalización de documentos.',
      'Control de caja, cobros diarios e inventario de tienda.',
      'Recepción de pedidos y preparación de mercancías para clientes.'
    ],
    skillsUsed: ['Atención al Cliente', 'Copistería', 'Gestión de Caja', 'Control de Stock', 'Resolución de Dudas']
  },
  {
    id: 'exp-novo-2003',
    role: 'Auxiliar Administrativa',
    company: 'Encuadernación Novo, S.L.',
    period: 'Mayo 2003 – Septiembre 2012',
    startDate: '05/2003',
    endDate: '09/2012',
    category: 'admin',
    isHighlighted: true,
    responsibilities: [
      'Gestión continuada durante más de 9 años en el área administrativa de producción.',
      'Negociación directa con proveedores, trámite de pedidos y control de entregas.',
      'Supervisión minuciosa e inventariado periódico de stock de material primario.',
      'Atención telefónica a clientes, recepción de presupuestos y emisión de facturación.',
      'Organización de archivos administrativos y soporte a la dirección de taller.'
    ],
    skillsUsed: ['Gestión de Proveedores', 'Control de Stock', 'Facturación', 'Producción', 'Atención Telefónica']
  },
  {
    id: 'exp-pliego-2003',
    role: 'Auxiliar Administrativa',
    company: 'Pliego Rebaque, S.A.',
    period: 'Marzo 2003 – Mayo 2003',
    startDate: '03/2003',
    endDate: '05/2003',
    category: 'admin',
    responsibilities: [
      'Confección y expedición de albaranes y facturas de entrega.',
      'Recepción de pedidos de clientes y tramitación administrativa.',
      'Atención telefónica de consultas y canalización de requerimientos.'
    ],
    skillsUsed: ['Albaranes', 'Facturación', 'Pedidos', 'Atención al Cliente']
  },
  {
    id: 'exp-insalud-2002',
    role: 'Auxiliar Administrativa',
    company: 'INSALUD (Leganés y Humanes)',
    period: 'Diciembre 2002 – Enero 2003',
    startDate: '12/2002',
    endDate: '01/2003',
    category: 'admin',
    responsibilities: [
      'Sustitución de personal administrativo sanitario en centros de atención primaria.',
      'Gestión de expedientes de pacientes, citado telefónico y archivo clínico.',
      'Atención al usuario presencial y resolución rápida de consultas.'
    ],
    skillsUsed: ['Administración Pública', 'Gestión de Pacientes', 'Archivo Documental', 'Atención Presencial']
  },
  {
    id: 'exp-fct-2002',
    role: 'Prácticas F.C.T. en Gestión Administrativa',
    company: 'Encuadernación Novo, S.L.',
    period: 'Finalizado en 2002 (340 horas)',
    startDate: '2002',
    endDate: '2002',
    category: 'training',
    responsibilities: [
      'Prácticas de formación profesional (340h) con evaluación excelente.',
      'Introducción de datos de facturación, albaranes y soporte en almacén.'
    ],
    skillsUsed: ['Gestión Administrativa', 'Archivo', 'Ofimática', 'Introducción de Datos']
  },
  {
    id: 'exp-eventuales',
    role: 'Apoyo Administrativo & Servicios Eventuales',
    company: 'Proyectos Varios (Casas y Oficinas)',
    period: 'Trayectoria Versátil',
    startDate: '2013',
    endDate: '2020',
    category: 'commercial',
    responsibilities: [
      'Confección eventual de presupuestos, albaranes, facturas y gestión de EPIs.',
      'Apoyo operativo organizativo y coordinación de tareas en entornos dinámicos.'
    ],
    skillsUsed: ['Presupuestos', 'Gestión de EPIs', 'Facturas', 'Organización']
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'edu-fp',
    title: 'Título de Gestión Administrativa',
    institution: 'I.E.S Enrique Tierno Galván (Parla, Madrid)',
    year: '2002',
    type: 'fp',
    description: 'Formación Profesional de Grado Medio orientada al control contable, técnicas administrativas de oficina, comunicación empresarial y gestión de compraventa.',
    highlights: [
      'Técnicas Administrativas de Oficina',
      'Contabilidad y Facturación',
      'Comunicación y Archivo de la Información',
      'Prácticas profesionales FCT superadas con éxito (340 horas)'
    ]
  },
  {
    id: 'edu-office',
    title: 'Título de Informática "Office"',
    institution: 'Academia Privada',
    year: '2000 - 2001',
    duration: '9 Meses de duración',
    type: 'course',
    description: 'Formación intensiva de 9 meses en el manejo profesional del paquete Microsoft Office y herramientas de gestión digital.',
    highlights: [
      'Microsoft Word (Procesamiento avanzado de textos)',
      'Microsoft Excel (Hojas de cálculo, fórmulas y tablas)',
      'Bases de datos y archivo informático',
      'Mecanografía y gestión de correo'
    ]
  },
  {
    id: 'edu-eso',
    title: 'Educación Secundaria Obligatoria (E.S.O)',
    institution: 'C.P. La Paloma y I.E.S Narcís Monturiol (Parla, Madrid)',
    year: '2000',
    type: 'secondary',
    description: 'Formación secundaria completada con éxito, cimiento de formación en comunicación, matemáticas y resolución de problemas.',
    highlights: ['Finalizado en 2000', 'Base académica sólida']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Gestión Administrativa y Facturación',
    iconName: 'FileText',
    description: 'Control meticuloso de la documentación comercial, ciclo de facturación y albaranes.',
    skills: [
      { name: 'Emisión de Facturas y Presupuestos', level: 'Experto', description: 'Registro y comprobación de conceptos, impuestos y cobros.' },
      { name: 'Gestión de Albaranes y Pedidos', level: 'Experto', description: 'Emisión, cotejo y tramitación diaria.' },
      { name: 'Control de Archivo Documental', level: 'Experto', description: 'Organización física y digital de expedientes.' },
      { name: 'Gestión de EPIs y Material', level: 'Avanzado', description: 'Tramitación administrativa de equipos y presupuestos.' }
    ]
  },
  {
    title: 'Gestión de Proveedores y Stock',
    iconName: 'PackageCheck',
    description: 'Coordinación eficiente de suministros, inventarios y relación con proveedores.',
    skills: [
      { name: 'Negociación y Relación con Proveedores', level: 'Experto', description: '9+ años gestionando pedidos de materia prima.' },
      { name: 'Control e Inventario de Stock', level: 'Experto', description: 'Supervisión de existencias y minimización de descuadres.' },
      { name: 'Recepción y Verificación de Mercancía', level: 'Experto', description: 'Cotejo entre albarán de entrega y orden de pedido.' }
    ]
  },
  {
    title: 'Atención al Cliente y Gestión Comercial',
    iconName: 'Headphones',
    description: 'Trato cercano, profesional y enfocado en resolver necesidades de forma inmediata.',
    skills: [
      { name: 'Atención Telefónica y Presencial', level: 'Experto', description: 'Comunicación fluida, amable y resolutiva.' },
      { name: 'Prospección y Seguimiento de Clientes', level: 'Avanzado', description: 'Captación telefónica, actualización de fichas y llamadas de control.' },
      { name: 'Servicios de Copistería y Tienda', level: 'Experto', description: 'Manejo de equipos de reprografía y atención directa.' }
    ]
  },
  {
    title: 'Herramientas Informáticas & Ofimática',
    iconName: 'Monitor',
    description: 'Dominio de programas de gestión de oficina y entorno informático moderno.',
    skills: [
      { name: 'Microsoft Office (Excel, Word)', level: 'Experto', description: 'Formación específica de 9 meses + uso práctico constante.' },
      { name: 'Software de Facturación / ERP', level: 'Avanzado', description: 'Adaptación rápida a programas informáticos de gestión empresarial.' },
      { name: 'Gestión de Correo Electrónico y Correo-e', level: 'Experto', description: 'Outlook, Gmail, mensajería y redacción profesional.' },
      { name: 'Entorno Windows & Herramientas Digitales', level: 'Experto', description: 'Agilidad en ordenador, escáner e impresoras.' }
    ]
  }
];
