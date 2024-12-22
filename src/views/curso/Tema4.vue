<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Elaboración de escenarios prospectivos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4(data-aos="fade") Los escenarios prospectivos son representaciones narrativas de futuros posibles, que ayudan a las organizaciones en la toma de decisiones estratégicas, facilitando la preparación ante diversas eventualidades. Estos escenarios no buscan predecir el futuro exacto, sino presentar múltiples posibilidades que podrían materializarse en función de tendencias y factores actuales. Este enfoque ha sido utilizado por empresas de gran envergadura, como Shell, que desde los años setenta ha aplicado la elaboración de escenarios para anticiparse a cambios significativos, en el mercado energético y adaptarse a ellos, de forma proactiva.

    .row.mb-4
      .col-lg-5(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 505px;")
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Importancia")
            p.mb-4 La importancia de los escenarios prospectivos en la planificación, radica en su capacidad para aumentar la resiliencia de las organizaciones. Al prever posibles desarrollos futuros, las empresas pueden identificar oportunidades y amenazas, ajustando sus estrategias para enfrentar diferentes eventualidades. Esto les permite no solo adaptarse a los cambios, sino también aprovechar las oportunidades emergentes con mayor rapidez y eficiencia. En un entorno cada vez más incierto, la elaboración de escenarios se convierte en una herramienta invaluable para organizaciones de cualquier sector que desean mantenerse competitivas.
          div(titulo="Objetivos")
            p.mb-4 Los objetivos de la elaboración de escenarios prospectivos incluyen, en primer lugar, explorar futuros alternativos y evaluar sus posibles implicaciones. Este proceso ayuda a identificar los factores de riesgo y a tomar decisiones más informadas, que consideran el impacto de distintas variables en el futuro. Además, los escenarios prospectivos permiten a las organizaciones anticiparse a tendencias emergentes y adoptar una postura proactiva en lugar de reactiva, posicionándose estratégicamente ante cambios que podrían surgir en el entorno. (Perilla Maluche et al., 2020)#[sup 15]

    .fondo-color-sistema-j.p-4.mb-5(data-aos="fade-right")
      .row
        .col-md-auto
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/23.svg",style="max-width: 90px;")
        .col
          p.mb-0 Otro objetivo fundamental es #[b fomentar la creatividad y la innovación] dentro de la organización. Al considerar múltiples escenarios y explorar una gama de posibilidades, se estimula el pensamiento creativo, lo cual facilita la generación de ideas y la formulación de estrategias innovadoras. Esto no solo mejora la capacidad de respuesta de la organización, sino que también promueve una cultura de adaptabilidad y creatividad en todos los niveles de la toma de decisiones.
    
    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Metodologías comunes
    
    p.mb-4(data-aos="fade") Para la elaboración de escenarios prospectivos, existen diversas herramientas y metodologías que facilitan el análisis de variables y la creación de futuros posibles. Entre las herramientas más utilizadas se encuentran las matrices de impacto y probabilidad, que permiten visualizar la relación entre diferentes variables y su potencial impacto en el futuro. Estas matrices ayudan a identificar los factores claves que podrían tener un efecto considerable en cada escenario, y a evaluar la probabilidad de que estos eventos se materialicen. De este modo, la organización puede priorizar aquellos factores que requieren mayor atención en la planificación estratégica.

    p.fw-bold(style="font-size: 30px;") Ejemplo de matriz de probabilidad e impacto

    .row.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        p.mb-5 Una empresa está evaluando la incursión de nuevas tecnologías, para mejorar su competitividad. Los eventos o tendencias que se identifican son:

        ul.lista-ul
          li.d-flex.borde-p-1.pb-3.mb-3
            div.me-2
              span.d-inline-flex.fondo-color-sistema-k.fw-bold.px-2 1
            span Automatización de procesos.
          li.d-flex.borde-p-1.pb-3
            div.me-2
              span.d-inline-flex.fondo-color-sistema-k.fw-bold.px-2 2
            span Implementación de inteligencia artificial en atención al cliente.
          li.d-flex.borde-p-1.pb-3
            div.me-2
              span.d-inline-flex.fondo-color-sistema-k.fw-bold.px-2 3
            span Adopción de sistemas de #[em blockchain] para trazabilidad.
          li.d-flex.borde-p-1.pb-3
            div.me-2
              span.d-inline-flex.fondo-color-sistema-k.fw-bold.px-2 4
            span Desarrollo de aplicaciones para mejorar la experiencia del usuario.
          li.d-flex.borde-p-1.pb-3
            div.me-2
              span.d-inline-flex.fondo-color-sistema-k.fw-bold.px-2 5
            span Capacitación continua en habilidades digitales para empleados.

      .col-lg-6.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 610px;")
    
    p.fw-bold.mb-4(style="font-size: 30px;") Matriz de probabilidad (calificación de 1 a 5)

    p.mb-4 Donde 5 es alta probabilidad y 1 es poca probabilidad.

    p #[b Tabla 1.] Ejemplo matriz de probabilidad

    .tabla-a.tabla-p-1.mb-5(data-aos="fade")
      table
        thead
          tr
            th.text-center Evento
            th.text-center(style="width: 200px;") Probabilidad
            th.text-center Justificación
        tbody
          tr
            td Automatización de procesos.
            td.text-center 4
            td Tecnología accesible y beneficios económicos claros.
          tr
            td IA en atención al cliente.
            td.text-center 3
            td Costos elevados, pero interés creciente en personalización.
          tr
            td #[em Blockchain] para trazabilidad.
            td.text-center 2
            td Alta inversión inicial y complejidad técnica.
          tr
            td Apps para experiencia del usuario.
            td.text-center 5
            td Demanda alta por parte de los clientes.
          tr
            td Capacitación en habilidades digitales.
            td.text-center 4
            td Importancia creciente en el mercado laboral actual.

    p.fw-bold.mb-4(style="font-size: 26px;") Matriz de impacto (calificación de 1 a 5)

    p.mb-4 Donde 5 es alto impacto y 1 es poco impacto.

    p #[b Tabla 2.] Ejemplo matriz de impacto

    .tabla-a.tabla-p-1.mb-5
      table
        thead
          tr
            th.text-center Evento
            th.text-center(style="width: 200px;") Impacto
            th.text-center Justificación
        tbody
          tr
            td Automatización de procesos.
            td.text-center 5
            td Alta eficiencia y reducción de costos operativos.
          tr
            td IA en atención al cliente.
            td.text-center 4
            td Mejora la satisfacción del cliente y fidelización.
          tr
            td #[em Blockchain] para trazabilidad.
            td.text-center 3
            td Mayor confianza en la cadena de suministro.
          tr
            td Apps para experiencia del usuario.
            td.text-center 4
            td Mejora la interacción y la experiencia del cliente.
          tr
            td Capacitación en habilidades digitales.
            td.text-center 3
            td Aumenta la productividad y adaptabilidad del personal.


    p #[b Tabla 3.] Ejemplo combinación: matriz de probabilidad vs. Matriz de impacto

    .tabla-a.tabla-p-1.mb-4
      table
        thead
          tr
            th.text-center Evento
            th.text-center(style="width: 200px;") Probabilidad
            th.text-center(style="width: 200px;") Impacto
            th.text-center Clasificación
        tbody
          tr
            td Automatización de procesos.
            td.text-center 4
            td.text-center 5
            td.text-center Alta prioridad.
          tr
            td IA en atención al cliente.
            td.text-center 3
            td.text-center 4
            td.text-center Prioridad media-alta.
          tr
            td #[em Blockchain] para trazabilidad.
            td.text-center 2
            td.text-center 3
            td.text-center Prioridad baja.
          tr
            td Apps para experiencia del usuario.
            td.text-center 5
            td.text-center 4
            td.text-center Alta prioridad.
          tr
            td Capacitación en habilidades digitales.
            td.text-center 4
            td.text-center 3
            td.text-center Prioridad media.
    
    .row.mb-4
      .col-lg-7
        p.mb-4 En este ejemplo, la automatización de procesos y el desarrollo de aplicaciones, se consideran prioridades altas, dado que combinan una alta probabilidad de implementación con un impacto significativo. Este tipo de análisis facilita la toma de decisiones estratégicas para enfocar recursos y esfuerzos en las iniciativas con mayor potencial transformador y viabilidad.
        .fondo-color-sistema-j.p-4
          .row
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/26.svg",style="max-width: 90px;")
            .col
              p.m-0 Además de las #[b matrices de impacto], el uso de software de simulación, es una herramienta valiosa en la creación y análisis de escenarios complejos. Estos programas permiten simular diversos futuros posibles, a partir de múltiples variables, facilitando la evaluación de cada escenario con mayor precisión. Los #[b modelos de simulación] son especialmente útiles en sectores como la tecnología y las finanzas, donde las proyecciones basadas en datos, pueden ayudar a reducir la incertidumbre y a optimizar las decisiones.

      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 505px;")

    p.mb-5 Las metodologías destacadas para la creación de escenarios, son:

    TabsC.color-primario.mb-5(data-aos="fade-left")
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Método de Shell" :icon="require('@/assets/curso/temas/3.svg')")
        .row.align-items-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/27.png',style="max-width:456px;")
          .col-lg-7.mb-4.mb-md-0
            p.mb-4.fw-bold Método de Shell
            p.mb-4 Se centra en la identificación de factores claves que podrían influir en el futuro y el desarrollo de narrativas sobre cómo podrían interactuar estos factores.
            p.mb-0 Este enfoque es útil para explorar posibles cambios en el entorno, de forma integral, permitiendo a las organizaciones visualizar cómo podrían reaccionar ante diferentes combinaciones de eventos y tendencias. El método de Shell ha sido utilizado ampliamente en el sector energético y ha servido de referencia en la planificación estratégica de diversas industrias.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Análisis de tendencias" :icon="require('@/assets/curso/temas/3.svg')")
        .row.align-items-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/28.png',style="max-width:456px;")
          .col-lg-7.mb-4.mb-md-0
            p.mb-4.fw-bold Análisis de tendencias
            p.mb-0 Es otra metodología común, que se basa en el estudio de datos históricos y actuales para proyectar futuros posibles. Este enfoque permite identificar patrones y cambios emergentes, que podrían tener un impacto significativo en el futuro de la organización. A través del análisis de tendencias, las organizaciones pueden anticiparse a las fuerzas que impulsan el cambio y ajustar sus estrategias para responder, de manera efectiva, a los desarrollos futuros.


    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Aplicación en sectores económicos

    p.mb-4 La elaboración de escenarios prospectivos tiene aplicaciones prácticas en distintos sectores económicos, donde permite anticipar cambios y ajustar estrategias, en función de los futuros posibles. 

    p.mb-4 A continuación, se presentan algunas aplicaciones:
    
    .fondo-personalizado-1.f3.mb-4
      .fondo-personalizado-1__contenido.py-5
        .bg-white
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.pt-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Escenarios prospectivos
                p.mb-0 En el sector empresarial, las compañías utilizan escenarios prospectivos para prever fluctuaciones del mercado y ajustar sus planes de negocio. Por ejemplo, en la industria tecnológica, empresas como IBM han adoptado el análisis de escenarios para proyectar la evolución de tecnologías emergentes, como la inteligencia artificial. Al prever cómo podría desarrollarse la tecnología y su impacto en la sociedad, IBM puede ajustar su estrategia de innovación y mantenerse a la vanguardia.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 485px;")
            .row.justify-content-center.pt-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Mitigación de riesgos y desarrollo de estrategias de contingencia
                p.mb-0 Otra aplicación importante se da en la mitigación de riesgos y el desarrollo de estrategias de contingencia. Las empresas pueden analizar los escenarios más probables y desarrollar planes de acción que les permitan responder, de manera ágil, a cambios abruptos en el entorno. En el sector financiero, por ejemplo, las instituciones utilizan escenarios prospectivos para anticiparse a crisis económicas, ajustando sus políticas de inversión y gestión de riesgos, para reducir el impacto de posibles recesiones.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 485px;")
            .row.justify-content-center.pt-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Escenarios Prospectivos para Combatir el Cambio Climático
                p.mb-0 En el ámbito de las políticas públicas, los gobiernos y organizaciones internacionales también aplican escenarios prospectivos para abordar problemas de interés global, como el cambio climático y la sostenibilidad. Un ejemplo destacado es el trabajo de la ONU, que utiliza escenarios prospectivos para planificar acciones contra el cambio climático, evaluando el impacto de diferentes políticas, antes de su implementación. Esto permite a las autoridades internacionales coordinar esfuerzos y establecer metas a largo plazo, basadas en la evaluación de riesgos y oportunidades ambientales.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/31.png",style="max-width: 485px;")

    p.mb-5(data-aos="fade-left") La evaluación de políticas a través de escenarios prospectivos, permite a los formuladores de políticas anticipar los efectos de sus decisiones y ajustar sus estrategias, de acuerdo con los posibles resultados. Este enfoque ayuda a los gobiernos a tomar decisiones informadas y responsables, asegurando que las políticas implementadas tengan impacto positivo en la sociedad. La planificación basada en escenarios, se ha convertido en una herramienta esencial para la gestión de problemas complejos que requieren una visión a largo plazo y una postura adaptativa.

    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Retos y desafíos en la implementación
    
    p.mb-4 La implementación de escenarios prospectivos, presenta varios desafíos que deben abordarse para maximizar su efectividad. Uno de los principales retos es la incertidumbre inherente del futuro, debido a que es imposible prever con exactitud cómo evolucionarán todas las variables. Esta incertidumbre puede dificultar la elaboración de escenarios precisos y, en algunos casos, generar resistencia para fundamentar las estrategias en proyecciones inciertas. Para enfrentar este desafío, es importante recopilar datos sólidos y emplear una variedad de métodos cualitativos y cuantitativos que permitan minimizar los márgenes de error.

    .row.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 505px;")
      .col-lg-7(data-aos="fade-left")
        p.mb-4 Otro desafío común en la implementación de escenarios, es la resistencia al cambio dentro de la organización. Los escenarios prospectivos requieren un enfoque adaptativo y abierto, lo que puede generar resistencia en algunos miembros de la organización, especialmente si están acostumbrados a un enfoque de planificación más rígido. Para mitigar esta resistencia, es importante involucrar a los equipos en el proceso de creación de escenarios y fomentar una cultura de flexibilidad y aprendizaje continuo. Además, incluir a un grupo diverso de expertos en el proceso, puede reducir los sesgos y mejorar la calidad de los escenarios.

        .fondo-color-sistema-i.p-4
          p La diversidad de perspectivas es un aspecto clave para superar las limitaciones de los escenarios prospectivos. Al incluir a expertos de diferentes áreas y con distintos enfoques, se amplía la comprensión de los posibles impactos de cada variable, en el escenario. Esto permite reducir los sesgos cognitivos y evita que los escenarios se construyan exclusivamente en función de creencias o experiencias individuales. Asimismo, es esencial realizar una revisión continua de los escenarios y actualizarlos regularmente, para reflejar los cambios en el entorno.
  
    .fondo-color-sistema-m.mb-5
      .row
        .col-lg-8.align-content-center
          p.mb-0.p-4.pe-lg-0 Finalmente, es importante reconocer las limitaciones de los escenarios, porque, aunque pueden ser útiles para la planificación estratégica, no eliminan la incertidumbre ni garantizan una adaptación perfecta a los cambios futuros. Los sesgos cognitivos, como el exceso de confianza en un escenario particular, pueden influir en la toma de decisiones y reducir la efectividad de las estrategias. Por ello, es recomendable que las organizaciones usen los escenarios como una guía flexible y no como una predicción absoluta, ajustando sus estrategias conforme evolucione el contexto.
        .col-lg-4.order-first.order-lg-last.align-content-center
          figure
            img.mx-auto(src="@/assets/curso/temas/33.png")

     
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://archivo.cepal.org/pdfs/GuiaProspectiva/Godet2007.pdf" target="_blank" rel="noopener noreferrer") Godet, P. (n.d.). Prospectiva Estratégica: problemas y métodos.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/59107" target="_blank" rel="noopener noreferrer") Sánchez González, M. (2018). Gestión estratégica, innovación y prospectiva en comunicación: bases, técnicas y casos prácticos: ( ed.). Editorial UOC.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/217714" target="_blank" rel="noopener noreferrer") Boada, A. J. & Cardona Montoya, G. Y. M. (2020). La prospectiva: más allá de las proyecciones: (1 ed.). Fondo Editorial CEIPA.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/71774" target="_blank" rel="noopener noreferrer") López Fernández, R. (2016). Expertos y prospectiva en la investigación pedagógica: ( ed.). Editorial Universo Sur.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/228417" target="_blank" rel="noopener noreferrer") Perilla Maluche, R. B. Orjuela Garzón, W. A. & Parra Moreno, C. (2020). Análisis de futuro: algunos métodos alternativos a la "caja de herramientas" de la prospectiva: ( ed.). Sello Editorial Universidad del Tolima.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/816/81620150004.pdf" target="_blank" rel="noopener noreferrer") Chung Pinzás, A., (2009). Prospectiva estratégica: más allá del plan estratégico. Industrial Data, 12(2), 27-31.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/42001" target="_blank" rel="noopener noreferrer") Bas Amorós, E. (2013). Prospectiva e innovación (Vol. 1: visiones): ( ed.). Plaza y Valdés.

            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://www.youtube.com/watch?v=C6NiuuxtWiE" target="_blank" rel="noopener noreferrer") CompREd UAB. (2019, Julio 16). Método Delphi.

            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://www.youtube.com/watch?v=Bm6nP1qJ-qw" target="_blank" rel="noopener noreferrer") Edu. Virtual y a Distancia de la U. de Cundinamarca. (2023, febrero 24). Prospectiva estratégica parte 1.

            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://www.youtube.com/watch?v=aRliQuKD5lA" target="_blank" rel="noopener noreferrer") Edu. Virtual y a Distancia de la U. de Cundinamarca. (2023, febrero 24). Prospectiva estratégica parte 2.

            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://www.youtube.com/watch?v=-SB13lmAEcc" target="_blank" rel="noopener noreferrer") Morato, A. (2012, septiembre 10). Ana Morato. La prospectiva como herramienta para la planificación. el caso OPTI.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
