import Link from 'next/link';

export function PostSenalesAveria() {
  return (
    <div className="articleBody">

      <section id="por-que-importa">
        <h2>Por qué identificar los avisos a tiempo puede salvarte miles de euros</h2>
        <p>
          Una banda transportadora que falla sin previo aviso no solo paraliza la línea de producción: desencadena
          una reacción en cadena de costes que se acumula por horas. En logística, una parada no planificada puede
          costar entre 2.000 y 15.000 € por hora. En minería o agregados, la cifra puede superar los 20.000 €.
        </p>
        <div className="callout">
          <p>
            <strong>Dato clave:</strong> El 94% de las averías graves en bandas transportadoras estuvieron precedidas
            por al menos tres señales detectables semanas antes de la rotura total. El problema no es la falta
            de señales; es no saber reconocerlas.
          </p>
        </div>
        <p>
          En IberBandas llevamos más de 25 años interviniendo en instalaciones de toda Andalucía. Lo que hemos
          aprendido es que las bandas transportadoras siempre avisan. En esta guía te mostramos las 7 señales más
          críticas que debes conocer, qué las causa y qué debes hacer en cada caso.
        </p>
      </section>

      <section id="senal-1">
        <h2>Señal 1: Ruido anormal durante la marcha</h2>
        <div className="signal-card">
          <h3><span className="signal-number">1</span> Chirridos, golpeteos o traqueteos</h3>
          <p>
            El ruido es el primer comunicado de tu instalación. Una banda transportadora en buen estado opera con
            un nivel sonoro constante y predecible. Cualquier variación debería activar una inspección inmediata.
          </p>
          <ul>
            <li>
              <strong>Chirrido agudo continuo:</strong> señala desalineación de la banda, falta de lubricación
              en rodillos o rozamiento con la estructura. Si se incrementa progresivamente, la banda está
              desgastando su borde en contacto con el bastidor.
            </li>
            <li>
              <strong>Golpeteo rítmico:</strong> aparece con una frecuencia vinculada a la velocidad de la banda.
              Indica daño localizado en el empalme (grapas sueltas, zona de vulcanizado con irregularidad)
              o un cuerpo extraño incrustado en la cara interior.
            </li>
            <li>
              <strong>Traqueteo irregular:</strong> suele originarse en rodillos de retorno o de carga con
              rodamientos agotados. Un rodillo bloqueado no solo genera ruido: genera calor, desgasta la
              cubierta de la banda por abrasión directa y puede provocar un incendio en aplicaciones con
              materiales inflamables.
            </li>
          </ul>
        </div>
        <p>
          <strong>Qué hacer:</strong> Localiza el origen del ruido sin detener la línea si es seguro. Documenta
          con audio o vídeo. Escala a inspección técnica en las próximas 24-48 horas.
        </p>
      </section>

      <section id="senal-2">
        <h2>Señal 2: Desalineación lateral de la banda</h2>
        <div className="signal-card">
          <h3><span className="signal-number">2</span> La banda se desplaza hacia un lado</h3>
          <p>
            Cuando la banda abandona el centro del bastidor y se desplaza lateralmente de forma continua o
            intermitente, estás ante uno de los problemas más frecuentes y más destructivos si se ignora.
          </p>
          <ul>
            <li>
              <strong>Causas principales:</strong> bastidor torcido o fuera de nivel, carga asimétrica sobre la
              banda, tensión irregular entre los dos lados, polines de centrado mal ajustados o desgastados.
            </li>
            <li>
              <strong>Consecuencias progresivas:</strong> desgaste acelerado de los bordes, ruptura de cables
              de refuerzo laterales, daño en la estructura del bastidor, y en casos avanzados, la banda puede
              salirse completamente del sistema.
            </li>
          </ul>
        </div>
        <div className="callout-warning callout">
          <p>
            <strong>Señal de alerta máxima:</strong> Si ves que los bordes de la banda están deshilachados o
            que el material de cubierta se desprende en tiras longitudinales, la desalineación lleva semanas
            activa. Requiere intervención inmediata.
          </p>
        </div>
        <p>
          Una desalineación de apenas 10 mm sostenida en el tiempo puede reducir la vida útil de los bordes
          de la banda hasta un 60%. La corrección es relativamente sencilla cuando se interviene pronto;
          compleja y cara cuando el daño ya es estructural.
        </p>
      </section>

      <section id="senal-3">
        <h2>Señal 3: Desgaste excesivo o irregular en los bordes</h2>
        <div className="signal-card">
          <h3><span className="signal-number">3</span> Bordes erosionados, irregulares o con cables a la vista</h3>
          <p>
            Inspecciona los bordes de la banda con regularidad. Un desgaste simétrico y gradual es normal y
            calculable. Un desgaste asimétrico o acelerado indica siempre un problema subyacente.
          </p>
          <ul>
            <li>
              <strong>Bordes irregulares con muescas:</strong> la banda está chocando contra elementos fijos
              del bastidor. Causa: desalineación crónica o elementos estructurales deformados.
            </li>
            <li>
              <strong>Material de cubierta agrietado longitudinalmente:</strong> fatiga del material por ciclos
              térmicos excesivos, cubierta envejecida o incompatibilidad química con el material transportado.
            </li>
            <li>
              <strong>Cables o tejido de refuerzo visibles:</strong> situación de emergencia. La cubierta de
              protección ha desaparecido. La banda puede romper en cualquier momento bajo carga.
            </li>
          </ul>
        </div>
        <p>
          Cuando los elementos de refuerzo son visibles, la banda no debe seguir en operación. El riesgo no
          es solo la parada; es la rotura brusca con posible proyección de material o daño al personal.
        </p>
      </section>

      <section id="senal-4">
        <h2>Señal 4: Vibración o trepidación anormal</h2>
        <div className="signal-card">
          <h3><span className="signal-number">4</span> La banda vibra o tiembla de forma inusual</h3>
          <p>
            Toda instalación tiene su firma vibratoria normal. Aprende a reconocerla. Cualquier cambio en esa
            firma es información técnica valiosa.
          </p>
          <ul>
            <li>
              <strong>Vibración en frecuencias bajas:</strong> rodillos de carga desequilibrados o con
              rodamientos en fin de vida útil. Cada rodillo que vibra acelera el desgaste del empalme
              de forma exponencial (cada paso del empalme sobre un rodillo que vibra supone un impacto).
            </li>
            <li>
              <strong>Trepidación en el tramo de retorno:</strong> rodillos de retorno bloqueados o con
              holgura excesiva. La cara interior de la banda sufre abrasión directa.
            </li>
            <li>
              <strong>Vibración repentina no presente antes:</strong> puede indicar que un elemento
              estructural se ha soltado, que hay acumulación de material en el tambor motriz o que
              el tensor ha perdido presión.
            </li>
          </ul>
        </div>
        <p>
          Una vibración que se ignora durante semanas puede provocar la fatiga prematura del empalme y una
          rotura súbita de la banda, incluso si la cubierta exterior parece en buen estado.
        </p>
      </section>

      <section id="senal-5">
        <h2>Señal 5: Pérdida de tensión o patinaje en el tambor motriz</h2>
        <div className="signal-card">
          <h3><span className="signal-number">5</span> La banda patina o no arrastra correctamente la carga</h3>
          <p>
            El sistema de tensado es el pulmón de tu instalación. Cuando falla, la banda pierde tracción y
            empieza a patinar sobre el tambor motriz.
          </p>
          <ul>
            <li>
              <strong>Síntoma visual:</strong> la banda se desplaza lentamente incluso con el motor en marcha,
              o la carga llega al punto de descarga con retraso. Hay marcas de quemado en la cara inferior
              de la banda por fricción con el tambor.
            </li>
            <li>
              <strong>Causas habituales:</strong> tensor de contrapeso mal ajustado, tensor hidráulico con
              fuga de presión, empalme que ha cedido y ha reducido la longitud efectiva de la banda,
              o elasticidad perdida en la banda por envejecimiento.
            </li>
            <li>
              <strong>Consecuencias:</strong> desgaste acelerado de la cubierta interior y del lagging del
              tambor, sobrecargas en el motor y reducción de la vida útil del sistema de accionamiento.
            </li>
          </ul>
        </div>
        <div className="callout-info callout">
          <p>
            <strong>Comprobación rápida:</strong> Si al aplicar presión manual sobre la banda entre dos rodillos
            de carga la flecha de la banda supera el 3% de la separación entre rodillos, la tensión es
            claramente insuficiente.
          </p>
        </div>
      </section>

      <section id="senal-6">
        <h2>Señal 6: Empalme deteriorado o separándose</h2>
        <div className="signal-card">
          <h3><span className="signal-number">6</span> El empalme presenta fisuras, levantamientos o separación</h3>
          <p>
            El empalme es el punto más crítico de cualquier banda transportadora. Una falla del empalme es
            responsable del <strong>40-60% de todas las paradas no planificadas</strong> en instalaciones
            sin mantenimiento preventivo.
          </p>
          <ul>
            <li>
              <strong>Fisuras transversales cerca del empalme:</strong> la zona de unión ha perdido flexibilidad.
              En empalmes vulcanizados, indica fatiga térmica o envejecimiento del adhesivo de vulcanización.
              En empalmes mecánicos, indica que las grapas están cediendo.
            </li>
            <li>
              <strong>Levantamiento de bordes en el empalme:</strong> la adhesión está fallando. Si se tira
              manualmente del borde del empalme y cede, la rotura total es inminente.
            </li>
            <li>
              <strong>Empalme mecánico con grapas sueltas o corroídas:</strong> las grapas oxidadas pierden
              tensión de cierre y pueden proyectarse durante la marcha, causando daños en equipos y riesgo
              para el personal.
            </li>
          </ul>
        </div>
        <p>
          La vida útil de un empalme vulcanizado en caliente bien ejecutado es de 3 a 8 años según las
          condiciones. La de un empalme mecánico, de 6 a 18 meses. Si no tienes registro de cuándo se
          realizó el último empalme, es hora de inspeccionarlo.
        </p>
      </section>

      <section id="senal-7">
        <h2>Señal 7: Material acumulado bajo la banda o en los rodillos</h2>
        <div className="signal-card">
          <h3><span className="signal-number">7</span> Depósitos de material en la cara inferior o en los rodillos</h3>
          <p>
            La cara inferior de la banda y los rodillos de retorno deben estar limpios durante la operación
            normal. Cualquier acumulación de material es una señal de disfunción del sistema de limpieza.
          </p>
          <ul>
            <li>
              <strong>Material adherido a la cara inferior:</strong> el raspador primario o secundario no está
              ejerciendo la presión correcta. El material endurecido actúa como lija sobre la cubierta interior
              de la banda en cada ciclo.
            </li>
            <li>
              <strong>Material incrustado en rodillos de retorno:</strong> los rodillos acumulan material,
              pierden su geometría cilíndrica y provocan desgaste asimétrico en la cara inferior de la banda.
              También pueden causar desalineación progresiva.
            </li>
            <li>
              <strong>Derrames continuos en los laterales:</strong> indica carga incorrecta (exceso de material,
              carga descentrada) o faldones de contención deteriorados. La pérdida de producto es un coste
              directo además del daño a la banda.
            </li>
          </ul>
        </div>
        <p>
          Un sistema de limpieza mal ajustado o desgastado no solo daña la banda; provoca contaminación del
          entorno, puede crear riesgos de seguridad por material en el suelo y genera sobrecarga en los
          rodillos de retorno.
        </p>
      </section>

      <section id="que-hacer">
        <h2>Qué hacer cuando detectas estos síntomas</h2>
        <p>
          Identificar la señal es el primer paso. Lo que hagas a continuación determina si vas a pagar
          una reparación puntual o una parada de producción de varios días.
        </p>
        <ol>
          <li>
            <strong>No ignores señales combinadas.</strong> Si detectas dos o más señales simultáneamente
            (por ejemplo, desalineación + ruido anormal), la probabilidad de falla inminente se multiplica.
            Planifica una parada técnica en las próximas 48-72 horas.
          </li>
          <li>
            <strong>Documenta visualmente.</strong> Fotografía o graba vídeo de la señal en curso. La
            información visual permite que un técnico evalúe la gravedad sin necesidad de desplazarse en
            primera instancia y planifique mejor la intervención.
          </li>
          <li>
            <strong>Prioriza el empalme.</strong> Si la señal procede del empalme (ruido rítmico, levantamiento
            visible), escala a prioridad máxima. Un empalme que falla completamente puede detener la
            instalación durante horas o días.
          </li>
          <li>
            <strong>Llama a un especialista para diagnóstico in situ.</strong> Muchas de estas señales
            tienen causas que solo se identifican correctamente con la instalación en marcha y el equipo
            adecuado. Un diagnóstico erróneo puede llevar a reparar el síntoma en lugar de la causa raíz.
          </li>
        </ol>

        <div className="callout">
          <p>
            En IberBandas realizamos <strong>diagnósticos técnicos in situ en toda Andalucía</strong>.
            Si detectas alguna de estas señales, contacta con nuestro equipo para una evaluación sin coste
            ni compromiso. <Link href="/reparacion/">Ver servicio de reparación →</Link>
          </p>
        </div>
      </section>

      <div className="faq-section" id="faq">
        <h2>Preguntas frecuentes</h2>

        <details className="faq-item">
          <summary>¿Cuánto tiempo tengo antes de que se rompa la banda si veo estas señales?</summary>
          <div className="faq-answer">
            <p>
              Depende de la señal y de la intensidad. Una desalineación leve puede darte semanas para actuar;
              un empalme que ya está levantando bordes puede ceder en horas bajo carga completa. La regla
              general es: si detectas dos señales simultáneas, no esperes más de 72 horas para una inspección
              técnica. Si el empalme está visiblemente comprometido o hay cables de refuerzo a la vista,
              actúa de inmediato.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Puedo seguir operando con una desalineación leve?</summary>
          <div className="faq-answer">
            <p>
              Depende de la magnitud. Una desalineación de 5-10 mm que se corrige sola puede tolerarse
              durante un turno si no hay una inspección disponible de inmediato. Una desalineación
              progresiva (que aumenta con el tiempo) o superior a 15-20 mm en una banda estándar no debería
              ignorarse más de 24 horas. El riesgo no es solo el daño a la banda, sino que la banda puede
              salirse del bastidor y provocar un incidente de seguridad.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Cuánto cuesta reparar una banda transportadora averiada?</summary>
          <div className="faq-answer">
            <p>
              El coste varía significativamente según el tipo de intervención. Un re-empalme mecánico de
              urgencia puede costar entre 400 y 900 €. Una vulcanización en caliente in situ, entre 800 y
              2.500 € dependiendo del tamaño de la banda y el tipo de reparación. Una sustitución completa
              de banda, desde 1.500 € hasta más de 10.000 € en instalaciones grandes. Lo que está claro es
              que el coste de la reparación preventiva (detectada a tiempo) es siempre inferior al de la
              reparación de urgencia más el coste de la parada de producción.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Cómo sé si necesito reparar el empalme o cambiar la banda entera?</summary>
          <div className="faq-answer">
            <p>
              Esta decisión depende del estado general de la banda, no solo del empalme. Si la cubierta de
              la banda tiene más del 30% de su vida útil desgastada, tiene grietas generalizadas o múltiples
              zonas de daño, un nuevo empalme no resuelve el problema de fondo. En ese caso, cambiar la
              banda completa es la opción económicamente más inteligente a medio plazo. Un técnico puede
              realizar una auditoría de espesor por ultrasonidos para determinar el desgaste real de la
              cubierta y darte una recomendación fundamentada.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Con qué frecuencia debo revisar mi banda transportadora?</summary>
          <div className="faq-answer">
            <p>
              La inspección visual básica debería ser diaria (antes o después del turno), comprobando
              desalineación, ruidos anómalos y estado visible del empalme. Una inspección técnica detallada,
              que incluya comprobación de tensión, alineación láser y revisión de rodillos, debería realizarse
              al menos trimestralmente en aplicaciones estándar y mensualmente en entornos de alta carga,
              abrasión o funcionamiento continuo 24/7. Los sectores de minería, reciclaje y agroalimentación
              suelen requerir mayor frecuencia.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
