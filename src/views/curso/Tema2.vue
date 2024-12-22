<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Herramientas de análisis prospectivo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4(data-aos="fade") Para llevar a cabo un análisis prospectivo efectivo, existen herramientas que facilitan la comprensión de posibles escenarios futuros y permiten evaluar el impacto de factores internos y externos, en las estrategias.

    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        p.mb-4 Dentro de las herramientas más destacadas, se encuentran:
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Técnica Delphi")
            p.mb-0 La Técnica Delphi, siendo un método cualitativo basado en la consulta a expertos, para llevar a un consenso sobre eventos o tendencias futuras. Este método resulta útil cuando se requiere explorar temas complejos y recopilar opiniones informadas que permitan generar escenarios basados en conocimientos específicos.
          div(titulo="Análisis PESTEL")
            p.mb-0 El Análisis PESTEL, examina seis factores claves, los cuales son: Políticos, Económicos, Sociales, Tecnológicos, Ambientales y Legales. Este análisis es fundamental para evaluar las influencias externas que pueden afectar a una organización a corto y largo plazo. Al utilizar el análisis PESTEL, se puede identificar oportunidades y amenazas en el entorno, lo cual es crucial para una planificación estratégica efectiva. Esta herramienta brinda una visión integral del contexto en el que se opera la organización, permitiendo una anticipación a cambios y poder adaptarse de manera más rápida.
      .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 505px;")
    
    .fondo-color-sistema-j.p-4.mb-4(data-aos="fade-right")
      .row
        .col-md-auto
          figure.mb-4.mb-md-0
            img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 90px;")
        .col
          p.mb-0 La combinación de estas herramientas como el uso de la técnica Delphi para identificar tendencias y el análisis PESTEL para comprender el entorno, fortalece la capacidad de adaptación. Estas herramientas ayudan a evaluar el contexto actual, y permiten proyectar cómo se podría evolucionar, brindando una ventaja competitiva en un entorno incierto (Perilla Maluche et al., 2020)7; al integrarlas, se pueden diseñar estrategias adaptativas y anticipativas, esenciales para manejar riesgos y aprovechar oportunidades.
    
    p.mb-5(data-aos="fade-right") El dominio de estas herramientas de análisis prospectivo, es fundamental para desarrollar una estrategia robusta y sostenible en el tiempo (Sánchez González, 2018). 

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Técnica Delphi
    
    p.mb-4(data-aos="fade-left") Técnica Delphi es una herramienta de previsión cualitativa, utilizada para generar consenso entre expertos sobre futuros posibles. Este método consiste en una serie de rondas de preguntas en las que los expertos ofrecen sus perspectivas y, a medida que avanzan las rondas, se revisan sus respuestas hasta alcanzar un consenso final (López Fernández, 2016). Esta técnica es especialmente útil en temas complejos o inciertos, donde no existen respuestas absolutas.

    .row.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/8.png",style="max-width: 505px;")
      .col-lg-7(data-aos="fade-left")
        p.mb-4 Por ejemplo: en un escenario de planificación urbana, un grupo de expertos en infraestructura, economía, medio ambiente y tecnología, podrían usar la técnica Delphi para definir las posibles áreas de expansión de la ciudad en las próximas décadas, considerando factores como el crecimiento de la población, las tendencias de movilidad y las restricciones ambientales.

        p.mb-4 Un aspecto fundamental de la técnica Delphi, es su capacidad para minimizar la influencia de la opinión dominante y dar espacio a perspectivas diferentes, lo cual enriquece el análisis prospectivo. Cada ronda permite a los expertos reflexionar sobre sus respuestas iniciales, así como reconsiderar sus puntos de vista a la luz de las contribuciones de otros participantes (Bas, 2013).

        .fondo-color-sistema-j.p-4
          p.mb-0 Este enfoque resulta #[b particularmente valioso] para explorar temas en los que el conocimiento está en constante evolución, como la planificación de tecnologías emergentes. 
    
    p.mb-4(data-aos="fade-left") En un ejemplo relacionado con la implementación de inteligencia artificial en el sector financiero, la técnica Delphi puede ayudar a identificar las oportunidades y los riesgos asociados, basándose en la experiencia y previsión de los expertos del sector.

    p.mb-4(data-aos="fade") Las preguntas que se aplican en el método Delphi, según sea el caso, son:

    .row.mb-3(data-aos="fade")
      .col-lg-4.col-md-6.mb-4
        .borde-8.sompra-p-1.p-4.h-100.align-content-center
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 90px;")
          p.mb-0 ¿Cuáles son los principales factores que influirán en (el tema en cuestión) en el futuro?
      .col-lg-4.col-md-6.mb-4
        .borde-8.sompra-p-1.p-4.h-100.align-content-center
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 90px;")
          p.mb-0 ¿Qué tendencias o cambios prevé (el aspecto relevante) en los próximos años?
      .col-lg-4.col-md-6.mb-4
        .borde-8.sompra-p-1.p-4.h-100.align-content-center
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 90px;")
          p.mb-0 ¿Qué impacto tendrán estos cambios en (el área específica) y en la industria en general?
      .col-lg-4.col-md-6.mb-4
        .borde-8.sompra-p-1.p-4.h-100.align-content-center
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 90px;")
          p.mb-0 ¿Cuáles son los principales riesgos o desafíos que enfrentará (el sector o área de estudio) en el futuro?
      .col-lg-4.col-md-6.mb-4
        .borde-8.sompra-p-1.p-4.h-100.align-content-center
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 90px;")
          p.mb-0 ¿Qué oportunidades emergentes podrían aprovecharse en (el ámbito correspondiente) en los próximos años?
      .col-lg-4.col-md-6.mb-4
        .borde-8.sompra-p-1.p-4.h-100.align-content-center
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 90px;")
          p.mb-0 ¿Qué acciones son necesarias para aprovechar las oportunidades en (el campo específico) a largo plazo?
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Análisis PESTEL
    
    p.mb-4(data-aos="fade-left") El análisis PESTEL, por su parte, es una herramienta estructurada que examina factores externos que pueden afectar una organización: políticos, económicos, sociales, tecnológicos, ambientales y legales. Este análisis es clave en la prospectiva, porque permite comprender el contexto en que opera la organización y prever posibles cambios en el entorno que puedan impactarla (Boada & Cardona, 2020).

    .fondo-personalizado-1.no-tam-full.bottom-1.f1.mb-5
      .fondo-personalizado-1__contenido.pt-5
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img.mx-auto(src='@/assets/curso/temas/10.svg',style="max-width: 945px;")
          .tarjeta.p-3(x="34%" y="15%" numero="+" style="background-color: #FFF4C0")
            .h5.mb-2 Político
            ul.lista-ul.mb-0.pb-0
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Clima político.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Política fiscal.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Actividad del gobierno.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Conflictos / ayudas.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Impuestos.
          .tarjeta.p-3(x="60%" y="15%" numero="+" style="background-color: #FFF4C0")
            .h5.mb-2 Económico
            ul.lista-ul.mb-0.pb-0
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span PIB.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Tasa de empleo.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Tipo de cambio.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Inflación.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Nivel de renta.
          .tarjeta.p-3(x="89%" y="15%" numero="+" style="background-color: #FFF4C0")
            .h5.mb-2 Sociocultural
            ul.lista-ul.mb-0.pb-0
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Variables demográficas.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Factor cultural.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Religión.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Estilo de vida.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Nivel de educación.
          .tarjeta.p-3(x="34%" y="86%" numero="+" style="background-color: #FFF4C0")
            .h5.mb-2 Tecnológico
            ul.lista-ul.mb-0.pb-0
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Acceso tecnológico.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Infraestructura.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Investigación.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Tendencias tecnológicas.
          .tarjeta.p-3(x="60%" y="86%" numero="+" style="background-color: #FFF4C0")
            .h5.mb-2 Ecológico
            ul.lista-ul.mb-0.pb-0
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Políticas ambientales.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Reciclaje.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Tendencias de consumo.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Procesos de producción.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Riesgos naturales.
          .tarjeta.p-3(x="89%" y="86%" numero="+" style="background-color: #FFF4C0")
            .h5.mb-2 Legal
            ul.lista-ul.mb-0.pb-0
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Salarios.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Derechos.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Seguridad laboral.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Reglamentos.
              li.d-flex.mb-0
                i.fas.fa-circle.mt-1(style="font-size: 11px;")
                span Control de precios.


        .row.justify-content-center.pt-3
          .col-lg-10
            .fondo-color-sistema-j.p-4
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/11.svg",style="max-width: 90px;")
                .col
                  p.mb-0 #[b Por ejemplo:] una empresa de tecnología que busca expandirse a nivel internacional, el análisis PESTEL podría revelar factores claves, como regulaciones locales (aspecto legal), políticas de incentivos fiscales (aspecto político) o el nivel de adopción de nuevas tecnologías en el mercado de destino (aspecto tecnológico), lo cual ayudaría a diseñar una estrategia de expansión masiva.

    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-4 La combinación de la Técnica Delphi y el análisis PESTEL, permite obtener una visión más completa y adaptativa del futuro. Mientras que la técnica Delphi se centra en las opiniones de expertos y permite la exploración profunda de temas específicos, el análisis PESTEL proporciona una comprensión integral del entorno y de las fuerzas externas que pueden influir en las estrategias organizacionales.

        p.mb-0 #[b Por ejemplo:] una organización que desea lanzar un nuevo producto, podría usar la técnica Delphi para obtener opiniones de expertos sobre las tendencias y del mercado y, al mismo tiempo, realizar un análisis PESTEL para identificar los factores externos que podrían facilitar o complicar la introducción del producto. De esta manera, ambas herramientas permiten crear una estrategia bien fundamentada y adaptable antes diferentes escenarios.
      .col-lg-5(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 505px;")

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
  name: 'Tema2',
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
