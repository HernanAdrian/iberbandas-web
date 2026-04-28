import Link from 'next/link';

export function PostMantenimientoPreventivo() {
  return (
    <div className="articleBody">

      <p>
        En más de 25 años de intervenciones técnicas en instalaciones de toda Andalucía, hemos llegado a una
        conclusión que se repite sin excepción: el 80% de las averías graves en bandas transportadoras eran
        predecibles y evitables. No es mala suerte. Es ausencia de mantenimiento preventivo.
      </p>
      <p>
        Esta guía te explica qué protocolos componen un plan de mantenimiento preventivo efectivo, con qué
        frecuencia ejecutarlos según tu sector y cómo calcular el retorno real de la inversión antes de
        decidir si lo implantáis.
      </p>

      <section id="coste-reactivo">
        <h2>El coste real del mantenimiento reactivo</h2>
        <p>
          Cuando una banda transportadora falla sin aviso previo, el reloj empieza a correr en tu contra.
          El coste de una parada no planificada rara vez se limita a la reparación en sí. La ecuación real es:
        </p>
        <ul>
          <li><strong>Reparación urgente:</strong> entre 1,5x y 3x el precio de una reparación programada</li>
          <li><strong>Pérdida de producción:</strong> variable, pero siempre significativa</li>
          <li><strong>Horas extra de personal:</strong> costes de personal para recuperar la producción perdida</li>
          <li><strong>Penalizaciones por retrasos:</strong> en sectores con contratos de entrega ajustados</li>
          <li><strong>Daños colaterales:</strong> material transportado dañado, otros equipos afectados</li>
        </ul>

        <div className="callout">
          <p>
            <strong>Referencia por sector en Andalucía:</strong> una parada no planificada en logística cuesta entre
            2.000 y 15.000 €/hora. En minería y agregados, entre 5.000 y 20.000 €/hora. En alimentación durante
            campaña (aceitunas, frutas), las pérdidas pueden superar los 10.000 €/hora contando el producto perecedero.
          </p>
        </div>

        <p>
          El mantenimiento reactivo es el modelo más caro que puede adoptar una instalación industrial. Un estudio
          del sector calcula que el coste medio por euro invertido en mantenimiento correctivo urgente triplica el
          coste del mismo mantenimiento ejecutado de forma planificada. El factor tiempo lo cambia todo.
        </p>
      </section>

      <section id="beneficios">
        <h2>Qué aporta un programa de mantenimiento preventivo bien ejecutado</h2>
        <p>
          Un programa preventivo no es un gasto; es una póliza de seguro con retorno positivo. Los beneficios
          que hemos medido en instalaciones que han pasado de mantenimiento reactivo a preventivo en Andalucía:
        </p>
        <ul>
          <li>Reducción de paradas no planificadas entre el <strong>60% y el 85%</strong> en los primeros 12 meses</li>
          <li>Extensión de la vida útil de la banda entre un <strong>30% y un 50%</strong></li>
          <li>Reducción del consumo energético por tensión óptima y rodillos en buen estado (<strong>5-12%</strong>)</li>
          <li>Mayor previsibilidad presupuestaria: el coste del mantenimiento deja de ser una incógnita</li>
          <li>Mejor seguridad laboral: menos incidentes derivados de fallos bruscos de equipos</li>
        </ul>

        <div className="callout-info callout">
          <p>
            <strong>Principio económico clave:</strong> el mantenimiento preventivo cuesta entre 5 y 10 veces menos
            que el mantenimiento correctivo equivalente. Esta ratio se mantiene en prácticamente todos los sectores
            industriales donde operamos.
          </p>
        </div>
      </section>

      <section id="protocolos">
        <h2>Los 4 protocolos esenciales de mantenimiento preventivo</h2>
        <p>
          Un programa preventivo efectivo se estructura en torno a cuatro protocolos técnicos complementarios.
          Cada uno tiene un propósito específico y una frecuencia óptima según el entorno de trabajo.
        </p>

        <h3>Protocolo 1: Alineación láser</h3>
        <p>
          La alineación láser mide con precisión milimétrica la desviación de la banda respecto al eje central
          del bastidor. Utilizamos equipos de alineación industrial con precisión de ±0,1 mm.
        </p>
        <p>
          <strong>Por qué importa:</strong> una desviación lateral de apenas 1 mm sostenida en el tiempo acorta
          la vida útil del borde de la banda hasta un 300%. La desalineación es la causa raíz del 35% de las
          sustituciones prematuras de banda que hemos analizado.
        </p>
        <ul>
          <li>Verificación de la alineación de todos los rodillos de carga y retorno</li>
          <li>Ajuste de rodillos de centrado y autocentrantes</li>
          <li>Comprobación de la horizontalidad del bastidor con nivel láser</li>
          <li>Registro fotográfico de la posición antes y después</li>
        </ul>
        <p>
          <strong>Frecuencia recomendada:</strong> trimestral en condiciones estándar; mensual en entornos
          polvorientos, con carga asimétrica o en bandas curvas.
        </p>

        <h3>Protocolo 2: Optimización de rodillos</h3>
        <p>
          Los rodillos son el sistema de soporte de toda la instalación. Un rodillo bloqueado o con rodamientos
          agotados no solo genera ruido y vibración: genera calor por fricción, desgasta la cubierta interior
          de la banda y puede ser foco de ignición en materiales inflamables.
        </p>
        <p>
          En la inspección de rodillos evaluamos:
        </p>
        <ul>
          <li><strong>Rodillos de carga:</strong> holgura radial máxima permitida 1 mm, temperatura superficial,
          ruido en giro, estado del sello del rodamiento</li>
          <li><strong>Rodillos de impacto (zona de carga):</strong> inspección de la goma amortiguadora,
          deformación por impactos acumulados</li>
          <li><strong>Rodillos de retorno:</strong> acumulación de material, estado de la superficie, rodamientos</li>
          <li><strong>Tambores motriz y de cola:</strong> estado del lagging (recubrimiento antideslizante),
          alineación, rodamientos principales</li>
        </ul>
        <p>
          <strong>Frecuencia recomendada:</strong> semestral en instalaciones estándar; trimestral en bandas
          de alta carga, alta velocidad o entornos con temperatura extrema o abrasivos.
        </p>

        <h3>Protocolo 3: Calibración de tensión</h3>
        <p>
          La tensión de la banda es un parámetro dinámico que cambia con la temperatura, el desgaste del material
          y el ciclo de carga. Una tensión incorrecta es una de las causas más silenciosas de deterioro acelerado.
        </p>
        <ul>
          <li>
            <strong>Tensión insuficiente:</strong> patinaje sobre el tambor motriz, desgaste del lagging,
            sobrecarga del motor eléctrico, desgaste prematuro del empalme por flexión excesiva.
          </li>
          <li>
            <strong>Tensión excesiva:</strong> sobrecarga de los rodamientos del tambor y de los rodillos,
            acortamiento de la vida útil de los empalmes, mayor consumo energético.
          </li>
        </ul>
        <p>
          Utilizamos medidores de frecuencia de vibración (método dinámico) y dinamómetros para determinar
          la tensión real y ajustar el tensor a los valores de diseño de la instalación.
        </p>
        <p>
          <strong>Frecuencia recomendada:</strong> trimestral; siempre después de cualquier parada prolongada
          superior a 72 horas o tras un cambio de banda.
        </p>

        <h3>Protocolo 4: Auditoría ultrasónica de desgaste</h3>
        <p>
          La auditoría ultrasónica permite medir el espesor de la cubierta de la banda sin desmontarla,
          generando un mapa de desgaste completo de toda la longitud. Es el equivalente industrial de una
          ecografía: da información sobre el estado interno sin intervención invasiva.
        </p>
        <ul>
          <li>Mapa completo de espesor de cubierta superior e inferior</li>
          <li>Identificación de zonas de desgaste crítico antes de que sean visibles externamente</li>
          <li>Estimación de vida útil restante según tasa de desgaste histórica</li>
          <li>Informe técnico con recomendación: continuar, monitorizar o planificar sustitución</li>
        </ul>
        <div className="callout">
          <p>
            <strong>Caso habitual:</strong> una banda con cubierta exterior aparentemente intacta puede tener zonas
            puntuales de espesor residual de 1-2 mm (sobre un espesor nominal de 8 mm). Sin auditoría ultrasónica,
            esas zonas no se detectan hasta la rotura.
          </p>
        </div>
        <p>
          <strong>Frecuencia recomendada:</strong> anual en condiciones normales; semestral en entornos abrasivos
          (minería, áridos, reciclaje, mármol).
        </p>
      </section>

      <section id="frecuencias">
        <h2>Frecuencias recomendadas por sector industrial</h2>
        <p>
          Las frecuencias óptimas varían según el perfil de uso, el material transportado y las condiciones
          ambientales. Esta tabla recoge las recomendaciones para los sectores más comunes en Andalucía:
        </p>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Protocolo</th>
              <th>Logística / Packaging</th>
              <th>Agroalimentaria</th>
              <th>Minería / Áridos</th>
              <th>Reciclaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inspección visual</td>
              <td>Semanal</td>
              <td>Diaria (campaña)</td>
              <td>Diaria</td>
              <td>Diaria</td>
            </tr>
            <tr>
              <td>Alineación láser</td>
              <td>Trimestral</td>
              <td>Trimestral / Mensual (campaña)</td>
              <td>Mensual</td>
              <td>Bimestral</td>
            </tr>
            <tr>
              <td>Revisión de rodillos</td>
              <td>Semestral</td>
              <td>Trimestral</td>
              <td>Trimestral</td>
              <td>Trimestral</td>
            </tr>
            <tr>
              <td>Calibración de tensión</td>
              <td>Trimestral</td>
              <td>Trimestral</td>
              <td>Bimestral</td>
              <td>Trimestral</td>
            </tr>
            <tr>
              <td>Auditoría ultrasónica</td>
              <td>Anual</td>
              <td>Anual</td>
              <td>Semestral</td>
              <td>Semestral</td>
            </tr>
          </tbody>
        </table>

        <p>
          Estas frecuencias son puntos de partida. Tras la auditoría inicial, el plan se personaliza según
          el estado real de la instalación y la historial de intervenciones.
        </p>
      </section>

      <section id="roi">
        <h2>ROI: cuánto te ahorra realmente el mantenimiento preventivo</h2>
        <p>
          Vamos a los números. Tomemos como ejemplo una instalación de logística en Sevilla con dos bandas
          transportadoras operando en dos turnos (16 horas/día).
        </p>
        <p><strong>Escenario A — Sin mantenimiento preventivo (solo reactivo):</strong></p>
        <ul>
          <li>Promedio histórico: 2 averías no planificadas al año</li>
          <li>Coste por avería: 1.800 € (reparación urgente) + 6.000 € (parada de 3 horas) = 7.800 €</li>
          <li>Sustitución anticipada de banda por desgaste acelerado: 3.500 € (cada 3 años = 1.167 €/año)</li>
          <li><strong>Coste anual estimado: 16.767 €</strong></li>
        </ul>
        <p><strong>Escenario B — Con mantenimiento preventivo IberBandas:</strong></p>
        <ul>
          <li>Programa preventivo anual (4 protocolos): 2.200 €</li>
          <li>Promedio con preventivo: 0,3 averías al año (reducción del 85%)</li>
          <li>Coste avería residual: 0,3 × 7.800 € = 2.340 €</li>
          <li>Extensión de vida útil de banda (50%): ahorro en sustitución = 583 €/año</li>
          <li><strong>Coste anual estimado: 4.540 € + 2.340 € = 4.957 €</strong></li>
        </ul>

        <div className="callout">
          <p>
            <strong>Ahorro anual estimado: 11.810 €.</strong> ROI del mantenimiento preventivo sobre la
            inversión de 2.200 €: <span className="stat-highlight">437%</span>. Estos son números conservadores
            basados en instalaciones reales que hemos auditado en Andalucía.
          </p>
        </div>
      </section>

      <section id="como-implantar">
        <h2>Cómo implantar un plan de mantenimiento preventivo en 4 pasos</h2>
        <p>
          Implantar un programa preventivo no requiere una gran inversión inicial ni reorganizar la operación.
          El proceso que seguimos con nuestros clientes tiene cuatro fases:
        </p>
        <ol>
          <li>
            <strong>Auditoría inicial del estado de la instalación.</strong> Antes de definir frecuencias
            y protocolos, necesitamos conocer el punto de partida real. Esto incluye inspección visual
            completa, medición de tensión, revisión del empalme y auditoría ultrasónica básica. La auditoría
            inicial es la base del plan personalizado.
          </li>
          <li>
            <strong>Definición del plan personalizado.</strong> Basándonos en la auditoría y en el perfil
            de uso de la instalación (sector, horas de operación, material, entorno), definimos los protocolos,
            frecuencias y prioridades específicas para tu instalación.
          </li>
          <li>
            <strong>Calendario de intervenciones programadas.</strong> Coordinamos las intervenciones con tu
            responsable de mantenimiento para minimizar el impacto en la producción. En muchos casos, la
            intervención puede realizarse durante paradas de turno o fines de semana.
          </li>
          <li>
            <strong>Informe técnico y seguimiento.</strong> Tras cada intervención, entregamos un informe
            técnico con el estado de cada parámetro, las acciones realizadas y las recomendaciones para
            la siguiente visita. Esto genera un historial técnico de la instalación de alto valor.
          </li>
        </ol>

        <div className="callout-info callout">
          <p>
            <Link href="/mantenimiento/">IberBandas ofrece programas de mantenimiento preventivo</Link> con
            cobertura en toda Andalucía. La primera auditoría es gratuita y sin compromiso. Contacta con
            nuestro equipo técnico para solicitar una visita.
          </p>
        </div>
      </section>

      <div className="faq-section" id="faq">
        <h2>Preguntas frecuentes sobre mantenimiento preventivo</h2>

        <details className="faq-item">
          <summary>¿Con qué frecuencia debo hacer mantenimiento a mi banda transportadora?</summary>
          <div className="faq-answer">
            <p>
              Depende del sector y las condiciones de uso. Como regla general: inspección visual semanal
              (realizable por el propio operario), revisión técnica de alineación y tensión trimestral,
              revisión completa de rodillos semestral y auditoría ultrasónica anual. En entornos con alta
              abrasión (minería, reciclaje, mármol) todas las frecuencias se duplican aproximadamente.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Puede hacer el mantenimiento nuestro propio personal o necesitamos especialistas externos?</summary>
          <div className="faq-answer">
            <p>
              La inspección visual básica puede y debe realizarla el personal de la instalación. Los protocolos
              técnicos (alineación láser, calibración de tensión, auditoría ultrasónica) requieren equipos
              especializados y formación específica. Intentar realizar estas intervenciones sin el equipo
              adecuado puede llevar a diagnósticos incorrectos y a intervenciones que agravan el problema.
              Lo habitual es un modelo mixto: inspección diaria/semanal interna + intervenciones técnicas
              periódicas con especialista.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Cuánto cuesta un programa de mantenimiento preventivo?</summary>
          <div className="faq-answer">
            <p>
              El coste depende del número de bandas, la frecuencia de intervención y los protocolos incluidos.
              Para instalaciones pequeñas (1-2 bandas), los programas anuales suelen oscilar entre 1.200 y
              3.000 €. Para instalaciones medianas o grandes, el coste escala con el número de bandas y la
              complejidad. En cualquier caso, el ROI calculado sobre el coste de las averías evitadas suele
              superar el 300-500% en el primer año.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿El mantenimiento preventivo funciona para bandas muy antiguas o muy desgastadas?</summary>
          <div className="faq-answer">
            <p>
              Depende del estado real. Si la banda tiene más del 70% de su vida útil consumida (cubierta
              delgada, múltiples reparaciones de empalme), el mantenimiento preventivo puede extender su vida
              un tiempo limitado, pero no es una solución indefinida. En ese caso, la recomendación técnica
              suele ser planificar la sustitución antes de que se produzca la rotura en momentos críticos.
              La auditoría inicial determina exactamente en qué punto está cada banda.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary>¿Qué documentación entrega IberBandas tras cada intervención de mantenimiento?</summary>
          <div className="faq-answer">
            <p>
              Tras cada visita entregamos un informe técnico que incluye: estado de cada parámetro revisado
              (valores medidos vs. valores óptimos), acciones realizadas, fotografías de antes y después
              en los puntos más relevantes, recomendaciones para la próxima visita y, si corresponde,
              alerta sobre elementos que requieren atención prioritaria antes de la próxima intervención
              programada. Este historial técnico tiene un valor elevado para justificar decisiones de inversión
              ante la dirección.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
