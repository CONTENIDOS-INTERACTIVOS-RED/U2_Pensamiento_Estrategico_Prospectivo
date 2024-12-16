<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos básicos de la prospectiva'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4(data-aos="fade") La prospectiva permite anticipar y prepararse para futuros posibles, ofreciendo una visión más amplia para enfrentar los cambios que puedan surgir. A diferencia de las predicciones, que se enfocan en un único escenario, la prospectiva ayuda a considerar varias alternativas, lo que te brinda mayor flexibilidad al momento de tomar decisiones. Con este enfoque, se podrán identificar tendencias claves, para evaluar los riesgos que podrían presentarse y aprovechar las oportunidades futuras, de manera estratégica, tanto en el entorno profesional como en el personal.

    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        .fondo-color-sistema-i.p-4.h-100.align-content-center
          p.mb-4 En el PDF #[em #[b Definición y origen]], se estudiará cómo la prospectiva, como herramienta estratégica, permite anticiparse a cambios y explorar múltiples escenarios futuros para identificar riesgos, tendencias y oportunidades. Además, se analizarán sus fundamentos históricos, como su origen con Gaston Berger y su evolución hacia la prospectiva estratégica, que une previsión y acción para diseñar estrategias adaptativas y efectivas. Este enfoque proporciona un marco sólido para tomar decisiones informadas en un entorno dinámico y complejo.

          a.anexo.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#FCDFDB'}")
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <strong>Anexo. </strong> Definición y origen.

      .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 505px;")
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Diferencias entre prospectiva y predicción
    
    p.mb-4(data-aos="fade-right") Comprender las diferencias entre prospectiva y predicción es fundamental para aplicarlas de manera adecuada, en la planificación estratégica:

    TabsC.color-primario.mb-5(data-aos="fade-left")
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Predicción" :icon="require('@/assets/curso/temas/3.svg')")
        .row.align-items-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/4.png',style="max-width:459px;")
          .col-lg-7.mb-4.mb-md-0
            p.mb-4.fw-bold Predicción
            p La predicción se centra en anticipar un solo futuro, buscando estimar con precisión, lo que ocurrirá en función de ciertos datos o patrones históricos. Este enfoque es común en modelos tradiciones de previsión, donde el objetivo es reducir la incertidumbre y pronosticar resultados específicos (Boada & Cardona, 2020). Sin embargo, su enfoque limitado a un único escenario, hace que la predicción pueda resultar insuficiente en contextos de alta volatilidad e incertidumbre, donde múltiples variables pueden influir en el futuro, de formas inesperadas.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Prospectiva" :icon="require('@/assets/curso/temas/3.svg')")
        .row.align-items-center
          .col-md-6.col-lg-5.col-xl-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/5.png',style="max-width:459px;")
          .col-md-6.col-lg-7.col-xl-7.mb-4.mb-md-0
            p.mb-4.fw-bold Prospectiva
            p.mb-3 La prospectiva se diferencia al explorar diversos futuros posibles, sin intentar adivinar cuál de ellos se concretará. Este enfoque se basa en la idea que el futuro no es único ni fijo, sino que depende de una serie de factores y decisiones que moldean distintas posibilidades.
            p.mb-3 A través de la prospectiva, se pueden analizar varios escenarios y así preparar respuestas estratégicas para cada uno, lo que da cierta ventaja en un entorno cambiante (López Fernández, 2016). Esta perspectiva permite no solo reaccionar a eventos futuros, sino también influir en ellos, mediante decisiones estratégicas informadas.
            p.mb-0 La prospectiva también se apoya en metodologías que fomentan una visión integral y flexible del futuro, como el análisis de tendencias, la identificación de riesgos y la construcción de escenarios. A diferencia de la predicción, que se basa en datos cuantitativos para proyectar un único resultado, la prospectiva utiliza, tanto datos cualitativos como cuantitativos, para explorar una variedad de futuros posibles. (Perilla Maluche et al., 2020)

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
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
