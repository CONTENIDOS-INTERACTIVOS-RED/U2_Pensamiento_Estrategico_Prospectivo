<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p.mb-4(data-aos="fade") En un entorno empresarial donde los cambios son cada vez más rápidos, la capacidad de anticiparse al futuro se ha convertido en una ventaja competitiva clave. Aquí es donde entra en juego la prospectiva, la cual es una herramienta que nos permite visualizar diferentes escenarios futuros, analizar tendencias emergentes y prepararnos para lo que está por venir. No se trata de predecir el futuro, sino de explorar posibilidades y estar listos para lo inesperado.

    .row.align-items-center
      .col-lg-7(data-aos="fade-right")
        .fondo-color-sistema-i.p-4.mb-4
          p A lo largo de esta unidad, se explorarán los conceptos básicos de la prospectiva, se aprenderá a utilizar diversas herramientas de análisis prospectivo, y descubriremos cómo identificar las tendencias, riesgos y oportunidades futuras. Este enfoque es clave para cualquier profesional que busque tomar decisiones informadas y estratégicas, basadas en una visión sólida y anticipada del entorno.
        p.mb-0 Al finalizar esta unidad, el estudiante estará capacitado para comprender como funciona el análisis prospectivo, identificar tendencias relevantes y construir escenarios futuros que le permitan liderar con confianza en el mundo el cual está en constante evolución. Al aplicar estas técnicas no solo le dará una perspectiva más amplia en la vida profesional, sino que le permitirá aportar soluciones innovadoras y estratégicas ante cualquier desafío.
      .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 505px;")
    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
