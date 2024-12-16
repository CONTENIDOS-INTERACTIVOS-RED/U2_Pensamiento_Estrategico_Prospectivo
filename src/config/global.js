export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Prospectiva y análisis de escenarios futuros',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos de la prospectiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Diferencias entre prospectiva y predicción',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas de análisis prospectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Técnica Delphi',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Análisis PESTEL',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Identificación de tendencias, riesgos y oportunidades futuras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de tendencias: macro y micro tendencias',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Métodos para identificar riesgos futuros',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Estrategias para aprovechar oportunidades futuras',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elaboración de escenarios prospectivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Metodologías comunes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Aplicación en sectores económicos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Retos y desafíos en la implementación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Abad, F. (Coord.). (2014). Dentro de 15 años: ¿Escenarios improbables?: (1 ed.). LID Editorial España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271461',
    },
    {
      referencia:
        'Bas Amorós, E. (2013). Prospectiva e innovación (Vol. 1: visiones): ( ed.). Plaza y Valdés (España).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/42001',
    },
    {
      referencia:
        'Boada, A. J. & Cardona Montoya, G. Y. M. (2020). La prospectiva: más allá de las proyecciones: (1 ed.). Fondo Editorial CEIPA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/217714',
    },
    {
      referencia:
        'Chávez Martínez, G. (2003). El pensamiento del estratega: ( ed.). Plaza y Valdés (México).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/75568',
    },
    {
      referencia:
        'López Fernández, R. (2016). Expertos y prospectiva en la investigación pedagógica: ( ed.). Editorial Universo Sur.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/71774',
    },
    {
      referencia:
        'López Segrera, F. Luis Grosso, J. (Coord.) & José Mojica, F. (Coord.). (2004). América Latina y el Caribe en el siglo XXI: perspectiva y prospectiva de la globalización: ( ed.). Editorial Miguel Ángel Porrúa.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/75157',
    },
    {
      referencia:
        'Perilla Maluche, R. B. Orjuela Garzón, W. A. & Parra Moreno, C. (2020). Análisis de futuro: algunos métodos alternativos a la "caja de herramientas" de la prospectiva francesa: (1 ed.). Sello Editorial Universidad del Tolima.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228417',
    },
    {
      referencia:
        'Sánchez González, M. (2018). Gestión estratégica, innovación y prospectiva en comunicación: bases, técnicas y casos prácticos: ( ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/59107',
    },
    {
      referencia:
        'Saldaña Almazán, J. & Niño Gutiérrez, N. S. (2017). Strategic planning at UAGro: ( ed.). Ediciones y Gráficos Eón.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/120296',
    },
  ],
  glosario: [
    {
      termino: 'Prospectiva',
      significado:
        'enfoque estratégico que permite analizar múltiples futuros posibles para anticiparse a cambios y tomar decisiones informadas.',
    },
    {
      termino: 'Predicción',
      significado:
        'técnica que intenta anticipar un único futuro basado en datos y patrones históricos, en contraste con la exploración de múltiples escenarios de la prospectiva ',
    },
    {
      termino: 'Técnica Delphi',
      significado:
        'método cualitativo de previsión basado en la consulta iterativa a expertos para alcanzar consenso sobre futuros posibles.',
    },
    {
      termino: 'Análisis PESTEL',
      significado:
        'herramienta que evalúa factores externos (políticos, económicos, sociales, tecnológicos, ambientales y legales) que pueden afectar a una organización',
    },
    {
      termino: 'Macro tendencias',
      significado:
        'cambios estructurales a largo plazo que impactan a la sociedad en general, como la globalización y la digitalización.',
    },
    {
      termino: 'Micro tendencias',
      significado:
        'cambios específicos y de corto plazo que afectan a nichos o sectores específicos de la sociedad.',
    },
    {
      termino: 'Riesgos futuros',
      significado:
        'posibles amenazas o eventos adversos que pueden afectar a una organización, clasificadas en tipos como económicos, sociales y medioambientales.',
    },
    {
      termino: 'Análisis de vulnerabilidad ',
      significado:
        'método para identificar debilidades internas de una organización que pueden ser afectadas por factores externos.',
    },
    {
      termino: 'Mapeo de riesgos',
      significado:
        'técnica para clasificar y visualizar los riesgos en función de su probabilidad e impacto, facilitando la toma de decisiones estratégicas.',
    },
    {
      termino: 'Diversificación',
      significado:
        'estrategia de expansión que consiste en introducir nuevos productos o servicios para adaptarse a las demandas emergentes del mercado.',
    },
    {
      termino: 'Escenario prospectivo',
      significado:
        'representación de un posible futuro basado en el análisis de tendencias y factores de cambio, que guía la planificación estratégica.',
    },
    {
      termino: 'Adaptación estratégica',
      significado:
        'capacidad de una organización para ajustar sus estrategias en respuesta a cambios en el entorno, con el fin de mantener su competitividad.',
    },
    {
      termino: 'Planificación estratégica',
      significado:
        'proceso de desarrollo y ejecución de planes para alcanzar los objetivos de una organización, ajustándose a los cambios del entorno.',
    },
    {
      termino: 'Globalización',
      significado:
        'proceso de integración de los mercados y culturas a nivel mundial, generando interdependencia económica y social entre países.',
    },
    {
      termino: 'Digitalización',
      significado:
        'transformación de procesos, productos y servicios mediante el uso de tecnologías digitales, una macrotendencia que impacta todos los sectores.',
    },
    {
      termino: '<em>Big Data</em>',
      significado:
        'conjunto de técnicas y tecnologías que permiten analizar grandes volúmenes de datos para extraer información relevante y facilitar la toma de decisiones.',
    },
    {
      termino: 'Residencia organizacional',
      significado:
        'capacidad de una organización para adaptarse y recuperarse de crisis o cambios adversos, manteniendo su funcionamiento y competitividad.',
    },
    {
      termino: 'Innovación disruptiva',
      significado:
        'introducción de productos o servicios que cambian significativamente las reglas del mercado, generando nuevas oportunidades y desafío ',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
