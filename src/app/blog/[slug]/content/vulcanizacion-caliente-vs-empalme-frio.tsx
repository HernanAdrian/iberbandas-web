import Link from 'next/link';

export function PostVulcanizacion() {
  return (
    <div className="articleBody">

      <p>
        El empalme es el punto más crítico de cualquier banda transportadora. Cuando falla —y tarde o
        temprano falla— tienes que tomar una decisión rápida: ¿qué método de reparación utilizas?
        La respuesta correcta puede significar años de vida útil adicional o una nueva intervención en
        pocos meses.
      </p>
      <p>
        Existen tres métodos principales de empalme de bandas transportadoras: vulcanización en caliente,
        empalme en frío con adhesivo y empalme mecánico. Cada uno tiene un campo de aplicación específico,
        una durabilidad distinta y un coste diferente. Esta guía te explica las diferencias técnicas reales
        para que puedas tomar la decisión correcta —o entender por qué tu técnico te recomienda uno u otro.
      </p>

      <section id="vulcanizacion-caliente">
        <h2>Qué es la vulcanización en caliente</h2>
        <p>
          La vulcanización en caliente es el método de empalme de mayor calidad disponible para bandas de
          caucho. Consiste en unir los dos extremos de la banda mediante calor y presión controlada, creando
          una fusión química a nivel molecular entre el material de ambos extremos y el compuesto vulcanizante
          de relleno.
        </p>
        <h3>Cómo funciona el proceso</h3>
        <ol>
          <li>
            <strong>Preparación de los extremos (paso en escalera):</strong> se cortan los extremos de la banda
            en escalones angulados, eliminando capas sucesivas de caucho para exponer la estructura de tela o
            cable en diferentes profundidades. Esta geometría aumenta la superficie de adhesión y distribuye
            las tensiones de tracción.
          </li>
          <li>
            <strong>Aplicación del compuesto vulcanizante:</strong> se aplica adhesivo de vulcanización caliente
            en todas las superficies de contacto, incluyendo los planos de escalón y las zonas de refuerzo.
          </li>
          <li>
            <strong>Montaje y prensado:</strong> los extremos se unen bajo la prensa de vulcanización, que
            aplica temperatura (entre 140 y 160 °C según el compuesto) y presión (5-15 bar) durante un tiempo
            determinado por el espesor de la banda (habitualmente 30-60 minutos de ciclo de calor).
          </li>
          <li>
            <strong>Enfriamiento bajo presión:</strong> la prensa permanece cerrada durante el enfriamiento
            para evitar deformaciones. El empalme está listo para operar tras el enfriamiento completo.
          </li>
        </ol>
        <p>
          El resultado es una unión cuya resistencia a la tracción alcanza el <strong>90-100% de la resistencia
          de la banda original</strong>. A efectos prácticos, el empalme es indistinguible del resto de la banda
          en cuanto a comportamiento mecánico.
        </p>

        <div className="callout">
          <p>
            <strong>Garantía IberBandas:</strong> todos nuestros empalmes vulcanizados en caliente incluyen
            garantía de 2 años sobre el empalme. Es la técnica que recomendamos para todas las aplicaciones
            permanentes de carga media y alta.
          </p>
        </div>

        <h3>Ventajas de la vulcanización en caliente</h3>
        <ul>
          <li>Resistencia máxima: 90-100% de la banda original</li>
          <li>Vida útil del empalme: 3 a 8 años según condiciones</li>
          <li>Superficie continua sin irregularidades que dañen rodillos ni raspadores</li>
          <li>Apto para todos los tipos de banda: caucho pesado, PVC, PU</li>
          <li>Resistente a entornos húmedos, químicos y de alta temperatura</li>
        </ul>

        <h3>Limitaciones</h3>
        <ul>
          <li>Requiere equipo pesado (prensa de vulcanización + fuente de calor)</li>
          <li>No aplicable en espacios confinados sin ventilación adecuada</li>
          <li>Proceso completo: 2-4 horas desde la preparación hasta el enfriamiento</li>
          <li>Mayor coste inicial que los métodos alternativos</li>
        </ul>
      </section>

      <section id="empalme-frio">
        <h2>Qué es el empalme en frío</h2>
        <p>
          El empalme en frío (también llamado empalme adhesivo o empalme vulcanizado en frío) utiliza un
          adhesivo de curing químico que vulcaniza a temperatura ambiente, sin necesidad de prensa de calor.
          Es el método preferido cuando hay restricciones de acceso, temperatura o tiempo.
        </p>
        <h3>Cómo funciona el proceso</h3>
        <ol>
          <li>
            <strong>Preparación de los extremos:</strong> igual que en caliente, se ejecuta el paso en escalera
            para maximizar la superficie de adhesión.
          </li>
          <li>
            <strong>Limpieza y activación:</strong> las superficies se limpian con disolvente específico y
            se activan con el primer de adhesión para garantizar la adhesión química.
          </li>
          <li>
            <strong>Aplicación del adhesivo:</strong> se aplican dos capas de adhesivo de vulcanización en frío
            (bicomponente en sistemas de alta resistencia), respetando el tiempo de abierto indicado por el fabricante.
          </li>
          <li>
            <strong>Unión y presión manual:</strong> se juntan los extremos y se prensa manualmente o con
            gatos de rodillo. No es necesaria una prensa mecánica.
          </li>
          <li>
            <strong>Curado:</strong> el adhesivo necesita de 4 a 24 horas para alcanzar su resistencia máxima
            según el producto y la temperatura ambiente (mínima recomendada: 15 °C).
          </li>
        </ol>
        <p>
          La resistencia del empalme en frío es del <strong>60-80% de la banda original</strong>. Para muchas
          aplicaciones de carga baja o media, es una solución perfectamente válida. En aplicaciones de alta
          carga o alta velocidad, puede no ser suficiente.
        </p>

        <h3>Ventajas del empalme en frío</h3>
        <ul>
          <li>No requiere prensa de vulcanización ni fuente de calor</li>
          <li>Aplicable en espacios confinados o con limitaciones de acceso</li>
          <li>Coste de material y equipo más bajo que la vulcanización en caliente</li>
          <li>Válido para entornos frigoríficos (bandas en frío)</li>
        </ul>

        <h3>Limitaciones</h3>
        <ul>
          <li>Resistencia inferior: 60-80% vs. 90-100% en caliente</li>
          <li>Vida útil menor: 1 a 3 años en condiciones exigentes</li>
          <li>Sensible a la temperatura durante el curado (no por debajo de 10 °C)</li>
          <li>Requiere mayor control de la preparación de superficie para evitar fallos adhesivos</li>
          <li>No recomendado para bandas de cable de acero de alta tracción</li>
        </ul>
      </section>

      <section id="empalme-mecanico">
        <h2>El empalme mecánico: la solución de emergencia</h2>
        <p>
          El empalme mecánico utiliza grapas metálicas (también llamadas clips, placas de unión o corchetes
          industriales) que atraviesan los extremos de la banda y se unen mediante un pasador o perno central.
          Es el método más rápido pero también el de menor durabilidad.
        </p>

        <div className="callout-warning callout">
          <p>
            <strong>Uso correcto del empalme mecánico:</strong> es una solución de emergencia para volver a
            producción mientras se planifica la reparación definitiva. No es una solución permanente para
            aplicaciones de carga media o alta.
          </p>
        </div>

        <h3>Cuándo es válido el empalme mecánico</h3>
        <ul>
          <li>Rotura de banda en turno nocturno sin técnico disponible</li>
          <li>Necesidad de volver a producción en menos de 1 hora</li>
          <li>Como solución transitoria cuando se está esperando la banda de sustitución</li>
          <li>En bandas de baja velocidad y carga ligera donde no se dispone de prensa</li>
        </ul>

        <h3>Por qué el empalme mecánico NO debe ser permanente</h3>
        <ul>
          <li>Resistencia 40-50% de la banda original: no apta para cargas elevadas</li>
          <li>Las grapas crean irregularidades que dañan los raspadores y los rodillos de retorno</li>
          <li>No apto para aplicaciones alimentarias (riesgo de contaminación metálica)</li>
          <li>No recomendado para velocidades superiores a 2,5-3 m/s</li>
          <li>Vida útil: 6 a 18 meses en condiciones favorables</li>
        </ul>
      </section>

      <section id="comparativa">
        <h2>Comparativa técnica completa</h2>
        <p>
          Esta tabla resume las diferencias clave entre los tres métodos para facilitar la decisión según
          el contexto de tu instalación:
        </p>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Criterio</th>
              <th>Vulcanización caliente</th>
              <th>Empalme en frío</th>
              <th>Empalme mecánico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Resistencia al empalme</td>
              <td>90-100% de la banda</td>
              <td>60-80% de la banda</td>
              <td>40-50% de la banda</td>
            </tr>
            <tr>
              <td>Vida útil del empalme</td>
              <td>3-8 años</td>
              <td>1-3 años</td>
              <td>6-18 meses</td>
            </tr>
            <tr>
              <td>Tiempo de ejecución</td>
              <td>2-4 horas</td>
              <td>4-10 horas (con curado)</td>
              <td>30-60 minutos</td>
            </tr>
            <tr>
              <td>Equipo necesario</td>
              <td>Prensa de vulcanización</td>
              <td>Herramientas manuales</td>
              <td>Kit de grapas + martillo</td>
            </tr>
            <tr>
              <td>Coste (material + mano de obra)</td>
              <td>Alto</td>
              <td>Medio</td>
              <td>Bajo</td>
            </tr>
            <tr>
              <td>Apto para alimentación</td>
              <td>Sí (PVC/PU/Modular)</td>
              <td>Sí (con adhesivos certificados)</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Aplicable en frío (frigorifico)</td>
              <td>Sí (prensa portátil)</td>
              <td>Con limitaciones (&gt;10 °C)</td>
              <td>Sí</td>
            </tr>
            <tr>
              <td>Apto para cable de acero</td>
              <td>Sí (especializado)</td>
              <td>No recomendado</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Uso recomendado</td>
              <td>Aplicación definitiva</td>
              <td>Semipermanente / acceso limitado</td>
              <td>Emergencia temporal</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cuando-elegir">
        <h2>Cuándo elegir cada método</h2>

        <h3>Elige vulcanización en caliente cuando:</h3>
        <ul>
          <li>La instalación opera a alta carga o alta velocidad (&gt;2 m/s)</li>
          <li>El entorno es abrasivo (minería, áridos, reciclaje)</li>
          <li>La banda es de caucho pesado o de cable de acero</li>
          <li>Buscas la solución más duradera y no quieres volver a intervenir en varios años</li>
          <li>La instalación trabaja en turnos continuos donde una nueva parada es muy costosa</li>
          <li>Necesitas garantía y trazabilidad técnica de la reparación</li>
        </ul>

        <h3>Elige empalme en frío cuando:</h3>
        <ul>
          <li>El acceso al punto de empalme no permite llevar una prensa de vulcanización</li>
          <li>La instalación opera en entorno frigorífico (imposible usar calor)</li>
          <li>La banda es de PVC o PU de carga ligera o media</li>
          <li>Necesitas una solución que dure 1-3 años mientras planificas una intervención más profunda</li>
          <li>Tienes restricciones de ventilación que impiden el proceso de vulcanización en caliente</li>
        </ul>

        <h3>Elige empalme mecánico cuando:</h3>
        <ul>
          <li>Es una emergencia y necesitas volver a producción en menos de una hora</li>
          <li>La banda tiene baja velocidad y carga ligera</li>
          <li>Es una solución transitoria: ya tienes planificada la reparación definitiva</li>
        </ul>

        <div className="callout-info callout">
          <p>
            <strong>La regla general de IberBandas:</strong> siempre que sea técnicamente posible, recomendamos
            la vulcanización en caliente. El diferencial de coste respecto al empalme en frío se recupera
            completamente con la mayor vida útil del empalme y la reducción de intervenciones futuras.
          </p>
        </div>
      </section>

      <section id="importancia-profesional">
        <h2>Por qué la ejecución profesional es determinante</h2>
        <p>
          Independientemente del método elegido, un empalme mal ejecutado siempre fallará antes que la
          banda más desgastada. Los errores más frecuentes que encontramos al intervenir sobre empalmes
          fallidos de terceros:
        </p>
        <ul>
          <li>
            <strong>Preparación de superficie incorrecta:</strong> el paso en escalera mal ejecutado reduce
            la superficie de adhesión efectiva hasta un 40%. El empalme parece correcto externamente pero
            tiene resistencia real muy inferior a la esperada.
          </li>
          <li>
            <strong>Temperatura o tiempo de vulcanización incorrectos:</strong> cada compuesto de caucho
            tiene su curva de vulcanización óptima. Temperatura insuficiente → adhesión incompleta.
            Temperatura excesiva → degradación del material de la banda.
          </li>
          <li>
            <strong>Adhesivo en frío caducado o mal almacenado:</strong> los adhesivos bicomponente tienen
            una vida útil y condiciones de conservación específicas. Un adhesivo fuera de especificación
            no cura correctamente.
          </li>
          <li>
            <strong>Contaminación de la superficie:</strong> aceite, polvo o humedad en la superficie de
            empalme pueden anular la adhesión química completamente, incluso si el proceso aparentemente
            se ejecutó correctamente.
          </li>
        </ul>
        <p>
          En IberBandas utilizamos prensas de vulcanización industriales con termorregulación de precisión
          (±2 °C), compuestos vulcanizantes certificados de primera calidad y técnicos con más de 10 años
          de experiencia media en empalmes. El empalme más caro es el que falla.
        </p>

        <div className="callout">
          <p>
            ¿Tienes un empalme que necesita revisión o reparación? <Link href="/reparacion/">Contacta con
            nuestro equipo</Link> para un diagnóstico in situ en toda Andalucía. Respuesta en menos de 2 horas.
          </p>
        </div>
      </section>

      <div className="faq-section" id="faq">
        <h2>Preguntas frecuentes</h2>

        <details className="faq-item">
          <summary>¿Cuánto dura un empalme vulcanizado en caliente?</summary>
          <div className="faq-answer">
            <p>
              Entre 3 y 8 años en condiciones normales de uso. Los factores que más influyen en la vida útil
              son: el tipo de material transportado (abrasividad), la velocidad y carga de la banda, los ciclos
              térmicos del entorno y la calidad de la ejecución del empalme. En instalaciones de minería o
              áridos con alta abrasión, la vida útil puede estar en el rango bajo (3-4 años). En logística
              o alimentación con cargas moderadas, puede superar los 6-8 años.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Puedo reparar yo mismo mi banda con empalme en frío?</summary>
          <div className="faq-answer">
            <p>
              Técnicamente es posible en bandas de PVC/PU ligeras con empalmes de baja responsabilidad.
              Sin embargo, los errores más frecuentes (preparación de superficie incorrecta, adhesivo mal
              aplicado, curado insuficiente) son difíciles de detectar antes de que el empalme falle bajo
              carga. Para bandas de caucho, cualquier anchura superior a 500 mm o aplicaciones de carga
              media/alta, recomendamos siempre la ejecución por parte de un técnico especializado. El
              coste de un empalme mal ejecutado supera ampliamente el ahorro en mano de obra.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Cuánto cuesta la vulcanización en caliente de una banda transportadora?</summary>
          <div className="faq-answer">
            <p>
              El coste depende principalmente de la anchura de la banda y del tipo de reparación.
              Un re-empalme vulcanizado en caliente en una banda de 800 mm de anchura oscila habitualmente
              entre 900 y 1.800 €, incluyendo materiales, mano de obra y desplazamiento en Andalucía.
              Para bandas más anchas (1.200-1.500 mm) o con reparación de desgarro además del empalme,
              el coste puede superar los 2.500 €. La urgencia (servicio 24/7) aplica un sobrecargo del
              20-40% sobre los precios en horario hábil.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Qué método usa IberBandas en sus reparaciones?</summary>
          <div className="faq-answer">
            <p>
              Nuestra recomendación por defecto es siempre la vulcanización en caliente para aplicaciones
              permanentes. Utilizamos prensas de vulcanización industriales portátiles que podemos desplazar
              a cualquier instalación de Andalucía. El empalme en frío lo aplicamos cuando hay restricciones
              técnicas que lo justifican (acceso, temperatura, tipo de banda). El empalme mecánico solo en
              situaciones de emergencia real como solución transitoria mientras preparamos la reparación
              definitiva.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Se puede vulcanizar cualquier tipo de banda?</summary>
          <div className="faq-answer">
            <p>
              La vulcanización en caliente es aplicable a bandas de caucho de prácticamente todos los tipos
              y espesores. También a bandas de PVC y PU de alta resistencia. Las bandas de cable de acero
              requieren una técnica específica (vulcanización con matriz para cables) que es más compleja
              pero igualmente factible con el equipo adecuado. Las bandas modulares de plástico (tipo
              Intralox) no se empalman: los módulos rotos se sustituyen individualmente. Las bandas de
              malla metálica tienen su propio sistema de empalme específico.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
