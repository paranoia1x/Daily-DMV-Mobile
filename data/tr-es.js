/* Spanish question translations (machine/AI translation, not yet reviewed by a native speaker).
   DMV_TR.es[id] = { q, c: [[text, explain], ...] in the same order as the English choices, tip, alt }. */
window.DMV_TR = window.DMV_TR || {};
(function () {
  const D = window.DMV_TR.es = {};
  function T(id, q, c, tip, alt) { D[id] = { q: q, c: c, tip: tip, alt: alt }; }
T("SGN-001", "¿Qué debe hacer ante esta señal?", [
["Hacer un alto total y luego avanzar cuando sea seguro", "Correcto. Una señal de STOP (ALTO) exige un alto total en la línea de alto, antes del cruce peatonal o antes de la intersección. Luego revise el tráfico en todas las direcciones y avance cuando sea seguro."],
["Bajar la velocidad y seguir si no viene nadie", "Bajar la velocidad es lo que pide una señal de YIELD (ceda el paso). Ante esta señal debe hacer un alto total, aunque el camino parezca vacío."],
["Detenerse solo si hay otros vehículos", "El alto es obligatorio siempre. Puede haber peatones, ciclistas o vehículos cerca que usted no ha visto; por eso el alto total siempre aplica."]],
"Ocho lados = STOP. La forma octagonal solo se usa para señales de STOP.", "Señal roja de ocho lados con borde blanco y letras blancas.");
T("SGN-002", "Ante esta señal no hay línea de alto ni cruce peatonal. ¿Dónde debe detenerse?", [
["En medio de la intersección, donde se ve mejor", "Detenerse dentro de la intersección pone su auto en el camino del tráfico que cruza. Debe detenerse antes de entrar."],
["Antes de entrar a la intersección", "Correcto. Deténgase en la línea de alto si la hay; si no, antes del cruce peatonal. Si no hay ninguno de los dos, deténgase antes de entrar a la intersección."],
["Justo después de la señal, donde le convenga", "El manual indica un lugar específico para detenerse. No se permite ningún lugar que bloquee la intersección o el cruce peatonal."]],
"Línea de alto → cruce peatonal → borde de la intersección: deténgase en el primero que exista.", "Señal roja de ocho lados con letras blancas.");
T("SGN-003", "¿Qué le indica esta señal?", [
["Hacer siempre un alto total", "Solo debe hacer un alto total si el tráfico o las personas lo hacen necesario. Si el camino está libre, puede continuar con cuidado."],
["Bajar la velocidad y estar listo para detenerse y dejar pasar a otros", "Correcto. Ante una señal de YIELD (ceda el paso), baje la velocidad y esté listo para detenerse para que cualquier vehículo, ciclista o peatón pase antes que usted."],
["Acelerar para incorporarse antes que el demás tráfico", "Acelerar para ganarles a los demás es lo contrario de ceder el paso. La señal significa que los demás pasan primero."],
["Detenerse solo por peatones, no por vehículos", "Ceder el paso aplica también a vehículos y ciclistas, no solo a personas a pie."]],
"Triángulo hacia abajo = YIELD: “deje que ellos pasen primero”.", "Señal triangular roja y blanca que apunta hacia abajo, con letras rojas.");
T("SGN-004", "¿Qué significa esta señal?", [
["Entrar solo si hay poco tráfico", "Esta señal no tiene excepciones por poco tráfico. Entrar lo pone en sentido contrario en una calle o rampa."],
["Calle cerrada adelante por construcción", "Los cierres por construcción usan señales anaranjadas como ROAD CLOSED AHEAD. Esta señal roja y blanca se refiere al sentido de circulación."],
["No puede entrar a la calle o rampa donde está la señal", "Correcto. DO NOT ENTER (no entre) significa que el tráfico viene hacia usted en esa calle o rampa. Entrar lo pondría de frente contra otros conductores."]],
"Las señales rojas y blancas son órdenes. DO NOT ENTER = sentido contrario adelante.", "Señal cuadrada con un círculo rojo atravesado por una barra horizontal blanca y palabras blancas.");
T("SGN-005", "Ve esta señal de frente después de entrar a una calle. ¿Qué debe hacer?", [
["Cuando sea seguro, salir en reversa o dar la vuelta", "Correcto. Una señal de WRONG WAY (sentido contrario) significa que maneja contra el tráfico. Cuando sea seguro, salga en reversa o dé la vuelta."],
["Seguir y buscar la próxima salida", "Seguir significa manejar contra el tráfico, lo que puede causar un choque de frente. Salga de ese sentido en cuanto sea seguro."],
["Detenerse en su carril y esperar ayuda", "Quedarse detenido en un carril frente al tráfico que viene es peligroso. El manual dice que salga en reversa o dé la vuelta cuando sea seguro."],
["Encender las luces intermitentes y manejar por el acotamiento", "El acotamiento no soluciona el manejar en sentido contrario. Aun así debe salir de ese sentido de forma segura."]],
"De noche, si los reflectores del camino brillan rojos frente a usted, también va en sentido contrario.", "Señal rectangular horizontal roja con palabras blancas.");
T("SGN-006", "¿Qué significa esta señal?", [
["No se permiten vueltas en U aquí", "Correcto. Un círculo rojo con una línea roja que lo cruza significa que la acción dibujada adentro no está permitida. Aquí, el dibujo es una vuelta en U."],
["Carril para vueltas en U adelante", "Las señales que muestran un uso permitido del carril no tienen círculo rojo ni línea diagonal. La línea diagonal siempre significa “no”."],
["Curva cerrada adelante", "Las advertencias de curvas son rombos amarillos. Esta es una señal roja y blanca que prohíbe una acción."]],
"Círculo rojo + línea diagonal = “NO” a lo que muestre el dibujo.", "Señal cuadrada blanca con una flecha negra en forma de U dentro de un círculo rojo con una línea diagonal roja.");
T("SGN-007", "¿Qué le indica esta señal?", [
["El carril izquierdo termina adelante", "Las advertencias de fin de carril son señales amarillas. Un círculo rojo con línea diagonal prohíbe la acción dibujada."],
["No dar vuelta a la izquierda", "Correcto. La flecha muestra una vuelta a la izquierda y el círculo rojo con línea diagonal significa que esa vuelta no está permitida."],
["Solo se permite dar vuelta a la izquierda con flecha verde", "Esta señal no menciona semáforos. Prohíbe la vuelta a la izquierda por completo en ese lugar."]],
"Lea el dibujo y agréguele “NO” por la línea diagonal.", "Señal cuadrada blanca con una flecha negra que dobla a la izquierda dentro de un círculo rojo con una línea diagonal roja.");
T("SGN-008", "¿Qué significa esta señal?", [
["Solo vuelta a la derecha", "Una señal de “solo vuelta a la derecha” muestra una flecha sin línea diagonal roja, normalmente con la palabra ONLY."],
["Ceda el paso al tráfico de la derecha", "Ceder el paso se indica con un triángulo rojo y blanco de YIELD, no con una flecha tachada."],
["Curva cerrada a la derecha", "Las advertencias de curvas son rombos amarillos, no señales rojas y blancas de prohibición."],
["No dar vuelta a la derecha", "Correcto. La flecha muestra una vuelta a la derecha, y el círculo rojo con línea diagonal significa que no puede hacerla aquí."]],
"", "Señal cuadrada blanca con una flecha negra que dobla a la derecha dentro de un círculo rojo con una línea diagonal roja.");
T("SGN-009", "Está detenido en un semáforo en rojo y está esta señal. ¿Qué puede hacer?", [
["Dar vuelta a la derecha después de un alto total si no viene nadie", "Normalmente eso se permite, pero esta señal elimina esa opción. Debe esperar la luz verde."],
["Dar vuelta a la izquierda hacia una calle de un solo sentido", "Dar vuelta con luz roja es justamente lo que la señal prohíbe. Espere a que cambie el semáforo."],
["Esperar la luz verde antes de dar vuelta", "Correcto. En California normalmente puede dar vuelta a la derecha con luz roja después de un alto total, salvo que haya una señal de NO TURN ON RED (no dar vuelta con luz roja), como esta."]],
"Vuelta a la derecha con luz roja: permitida, salvo que una señal diga NO TURN ON RED.", "Señal rectangular blanca con palabras negras y un círculo rojo.");
T("SGN-010", "¿Qué le indica esta señal?", [
["Debe dar vuelta a la derecha en la próxima esquina", "La flecha muestra el sentido del tráfico en esa calle. No lo obliga a dar vuelta."],
["Desviación adelante", "Las señales de desviación usan otro texto. Esta señal muestra el único sentido de circulación permitido."],
["El tráfico de esta calle va solo en el sentido de la flecha", "Correcto. Las señales ONE WAY (un solo sentido) muestran el único sentido en que puede circular el tráfico en esa calle."],
["Entrada a la autopista a la derecha", "Las entradas a la autopista se marcan con señales verdes de orientación, no con señales ONE WAY."]],
"", "Señal horizontal negra con una flecha blanca que apunta a la derecha y contiene palabras negras.");
T("SGN-011", "¿Qué significa esta señal?", [
["No rebase a otros vehículos en esta zona", "Correcto. Una señal de DO NOT PASS (no rebasar) significa que no puede rebasar vehículos en esa zona."],
["Rebase solo por la derecha", "La señal no crea una regla para rebasar por la derecha. Dice que rebasar no está permitido en esa zona."],
["Se permite rebasar si no se ve tráfico en sentido contrario", "La regla aplica aunque el camino parezca libre. Los peligros que no se ven suelen ser la razón de la prohibición."]],
"", "Señal rectangular vertical blanca con tres líneas de palabras negras.");
T("SGN-012", "Maneja más despacio que el resto del tráfico en un camino de varios carriles con esta señal. ¿Qué debe hacer?", [
["Quedarse en el carril izquierdo para que lo vean", "El carril izquierdo es para rebasar. Ir despacio ahí bloquea el tráfico y provoca rebases peligrosos por la derecha."],
["Manejar en el carril derecho", "Correcto. Si maneja más despacio que el resto del tráfico, use el carril derecho. Cuando un conductor detrás de usted quiera ir más rápido, muévase a la derecha."],
["Manejar por el acotamiento", "El acotamiento no es un carril de circulación. Use el carril de la derecha."]],
"", "Señal rectangular vertical blanca con cuatro líneas de palabras negras.");
T("SGN-013", "Maneja despacio en un camino de dos carriles donde rebasar no es seguro. Hay cinco vehículos en fila detrás de usted. ¿Qué exige la ley?", [
["Acelerar hasta el límite de velocidad aunque no se sienta seguro", "Nunca debe manejar más rápido de lo que es seguro. La ley le da otra solución: el apartadero (turnout)."],
["Usar un apartadero o carril de apartadero para dejarlos pasar", "Correcto. Debe usar un apartadero para dejar pasar a los vehículos cuando maneja despacio en un camino de dos carriles donde rebasar no es seguro y lo siguen cinco o más vehículos."],
["Seguir; los de atrás tienen que esperar", "Retener una fila de cinco o más vehículos donde rebasar no es seguro es justamente cuando debe dejarlos pasar."],
["Hacer señas para que lo rebasen por el carril contrario", "Hacer señas para que otros se metan al carril contrario puede causar un choque de frente. Use el apartadero."]],
"Cinco o más detrás + rebasar no es seguro = use el apartadero.", "Señal rectangular blanca con cuatro líneas de palabras negras.");
T("SGN-014", "¿De qué le advierte esta señal redonda amarilla?", [
["Hay un área de descanso adelante", "Las áreas de descanso se muestran en señales azules. La señal redonda amarilla se usa para cruces de ferrocarril."],
["Cruce de caminos sin señales de alto", "La advertencia de cruce de caminos es un rombo amarillo con una cruz, no una señal redonda."],
["Hay un cruce de ferrocarril adelante", "Correcto. Una señal redonda amarilla y negra advierte de un cruce de ferrocarril adelante. Mire, escuche, baje la velocidad y esté listo para detenerse."]],
"Señal redonda amarilla = tren adelante.", "Señal redonda amarilla con una X negra y dos letras negras.");
T("SGN-015", "Ve esta señal en forma de X. ¿Qué debe hacer?", [
["Mirar, escuchar, bajar la velocidad y estar listo para detenerse por trenes", "Correcto. Esta señal marca el cruce de ferrocarril. Deje pasar cualquier tren antes de continuar."],
["Acelerar para cruzar las vías rápido", "Acelerar le deja menos tiempo para notar un tren. Lo seguro es bajar la velocidad y estar listo para detenerse."],
["Detenerse solo si se ve un tren", "Los trenes pueden venir de cualquier dirección en cualquier momento, y puede oír uno antes de verlo. Baje la velocidad, mire y escuche en cada cruce."]],
"", "Señal blanca en forma de X con palabras negras en ambas tablas.");
T("SGN-016", "Esta señal pequeña está debajo de una señal de cruce de ferrocarril. ¿Qué le indica?", [
["Solo pasan tres trenes al día por el cruce", "El número indica vías, no cada cuánto pasan los trenes. Espere un tren en cualquier momento."],
["El cruce tiene más de una vía", "Correcto. La placa muestra el número de vías. Después de que pasa un tren, puede venir otro por otra vía, desde cualquier dirección."],
["Debe detenerse tres veces antes de cruzar", "No existe una regla de detenerse tres veces. La señal le dice cuántas vías hay."]],
"Más vías = más lugares donde puede venir un tren. Vuelva a mirar después de que pase un tren.", "Señal blanca pequeña con un número dentro de un recuadro y una palabra.");
T("SGN-017", "¿Qué significa esta señal de cinco lados?", [
["Está cerca de una escuela", "Correcto. La señal de cinco lados significa que está cerca de una escuela. Maneje despacio y deténgase por los niños en el cruce peatonal."],
["Parque infantil sin cambio en el límite de velocidad", "Esta señal marca una zona escolar. Baje la velocidad y esté listo para detenerse por los niños."],
["Aquí los peatones deben ceder el paso a los vehículos", "Los conductores ceden el paso a los peatones, sobre todo a los niños en los cruces. La señal pide cuidado a los conductores."],
["Fin de la zona escolar", "La señal indica que está cerca de una escuela, no el fin de la zona."]],
"Cinco lados, como una casita escolar.", "Señal amarillo verdosa de cinco lados con dos niños caminando.");
T("SGN-018", "¿De qué le advierte esta señal?", [
["La banqueta termina adelante", "Esta señal muestra una persona caminando para advertir de peatones que cruzan, no del fin de una banqueta."],
["Estacionamiento de sendero para caminar", "La información de senderos y recreación usa señales cafés, no rombos amarillos de advertencia."],
["Cruce de peatones adelante", "Correcto. Esta señal de advertencia significa que puede haber personas cruzando adelante. Baje la velocidad y esté listo para detenerse."]],
"", "Señal amarilla en forma de rombo con el símbolo negro de una persona caminando.");
T("SGN-019", "¿Qué significa esta señal?", [
["Lavado de autos adelante", "Las líneas onduladas son las huellas de llantas de un auto que se resbala, no agua de un lavado de autos."],
["Camino con curvas adelante", "La señal de camino con curvas muestra una sola flecha en zigzag. Esta muestra un auto derrapando."],
["Camino en construcción", "Las advertencias de construcción son anaranjadas, no amarillas."],
["El camino es resbaloso cuando está mojado", "Correcto. Baje la velocidad cuando el camino esté mojado, evite frenar o girar de golpe y deje más espacio."]],
"Huellas onduladas detrás de un auto = resbaloso.", "Señal amarilla en forma de rombo con un auto y dos líneas onduladas detrás.");
T("SGN-020", "¿De qué le advierte esta señal?", [
["Puede haber tráfico incorporándose a su carril desde un lado", "Correcto. Esta señal de “Merging Traffic” (tráfico que se incorpora) advierte que vehículos de otro carril o rampa se unirán a su camino. Esté atento y ajuste su velocidad o posición."],
["Su carril termina y debe detenerse", "No le pide detenerse. La señal advierte que otro tráfico se unirá a su camino."],
["Comienza una carretera dividida", "La señal de carretera dividida muestra el tráfico separado por un camellón, con flechas en sentidos opuestos."]],
"", "Señal amarilla en forma de rombo con una flecha recta hacia arriba y una línea curva que se une desde la derecha.");
T("SGN-021", "¿Qué significa esta señal?", [
["La carretera dividida termina adelante", "En la versión de “fin”, el camellón está abajo y los carriles se juntan arriba."],
["Tráfico en ambos sentidos adelante", "La señal de tráfico en ambos sentidos muestra dos flechas sencillas sin camellón entre ellas."],
["Comienza una carretera dividida adelante", "Correcto. Un camellón o divisor separará el tráfico que va en sentidos opuestos. Manténgase a la derecha del divisor."],
["El carril termina; incorpórese a la izquierda", "Las señales de fin de carril muestran un carril que se angosta, no un divisor central."]],
"", "Señal amarilla en forma de rombo con una flecha hacia arriba y otra hacia abajo, separadas por una figura negra de camellón en la parte de arriba.");
T("SGN-022", "¿Qué significa esta señal?", [
["Comienza una carretera dividida adelante", "La versión de “comienza” tiene el camellón arriba. Aquí la figura del camellón termina a media señal."],
["La carretera dividida termina; el tráfico irá en ambos sentidos sin divisor", "Correcto. Adelante no hay divisor central. El tráfico en sentido contrario estará más cerca, así que manténgase a la derecha."],
["El camino se reduce a un carril solo en su sentido", "Eso se muestra con una señal de fin de carril. Esta señal se refiere al fin del divisor central."]],
"", "Señal amarilla en forma de rombo con flechas hacia arriba y hacia abajo y una figura negra de camellón solo en la parte de abajo.");
T("SGN-023", "¿De qué le advierte esta señal?", [
["Comienza un carril para rebasar a la izquierda", "Los carriles para rebasar no se muestran con flechas opuestas. Esta señal advierte de tráfico en sentido contrario que comparte el camino."],
["Tráfico en ambos sentidos adelante", "Correcto. “Two Way Traffic” (tráfico en ambos sentidos) advierte que compartirá el camino con tráfico que viene hacia usted. Manténgase a la derecha."],
["Calle de un solo sentido adelante", "Las calles de un solo sentido se marcan con señales blancas y negras ONE WAY. Estas flechas apuntan en sentidos opuestos."],
["Comienza una carretera dividida adelante", "La señal de carretera dividida incluye una figura de camellón entre las flechas."]],
"", "Señal amarilla en forma de rombo con dos flechas negras lado a lado, una hacia arriba y otra hacia abajo.");
T("SGN-024", "¿Qué le indica esta señal?", [
["Se agrega un carril", "La señal de “carril agregado” muestra un carril nuevo que se une con su propio espacio. Esta muestra el camino haciéndose más angosto."],
["El camino da vuelta a la izquierda", "Las señales de curva usan una sola flecha curva, no líneas de carril."],
["Un carril termina adelante; prepárese para incorporarse", "Correcto. Un carril se termina. Los conductores de ese carril deben incorporarse y los del otro carril deben estar atentos."]],
"", "Señal amarilla en forma de rombo con dos líneas de carril donde la línea derecha se dobla hacia adentro.");
T("SGN-025", "¿En qué se diferencia esta señal de una señal de “Merging Traffic”?", [
["El tráfico que se une tiene su propio carril agregado en vez de incorporarse al suyo", "Correcto. La línea punteada entre las flechas indica que se agrega un carril, así que el tráfico que se une no tiene que entrar a su carril de inmediato."],
["Significa que el tráfico debe detenerse antes de unirse", "Ninguna de las dos señales pide al tráfico detenerse. Esta muestra que el tráfico que se une tiene su propio carril."],
["Solo se usa en calles de la ciudad", "Esta señal no se limita a calles de la ciudad. Muestra que se agrega un carril."],
["Advierte que su carril termina", "Una señal de fin de carril muestra líneas que se angostan. Aquí se agrega un carril."]],
"", "Señal amarilla en forma de rombo con dos flechas hacia arriba; la flecha derecha entra curvándose desde un lado a su propio carril.");
T("SGN-026", "¿De qué le advierte esta señal?", [
["Hay un semáforo adelante", "Correcto. Esté listo para que cambie la luz, sobre todo si todavía no puede ver el semáforo."],
["El semáforo de adelante no funciona", "Esta señal advierte que hay un semáforo adelante. No dice nada sobre si funciona."],
["Cruce de ferrocarril con luces adelante", "Los cruces de ferrocarril usan una señal redonda amarilla o una cruz blanca en forma de X."]],
"", "Señal amarilla en forma de rombo con un semáforo de luces roja, amarilla y verde.");
T("SGN-027", "¿Qué significa esta señal?", [
["Hospital adelante", "La información de hospitales está en señales azules. Esta señal amarilla de advertencia muestra la forma de una intersección."],
["Otro camino cruza adelante", "Correcto. Hay un cruce de caminos adelante. Esté atento a vehículos que entren por la izquierda y la derecha."],
["Cruce de ferrocarril adelante", "Las advertencias de ferrocarril usan una señal redonda amarilla con una X y dos letras R."]],
"", "Señal amarilla en forma de rombo con una cruz negra.");
T("SGN-028", "¿Qué le indica esta señal?", [
["Hay una intersección de cuatro vías adelante", "Un cruce de cuatro vías se muestra con una cruz. Esta forma indica que su camino termina."],
["Hay un camino de cuota adelante", "La T representa la forma de la intersección, no un camino de cuota."],
["Hay una ruta para camiones adelante", "Las rutas para camiones usan otras señales de orientación. Esta señal amarilla de advertencia muestra la forma del camino."],
["Su camino termina en una intersección en T", "Correcto. El camino por donde va termina adelante. Prepárese para bajar la velocidad, ceder el paso si es necesario y dar vuelta a la izquierda o a la derecha."]],
"", "Señal amarilla en forma de rombo con forma de letra T.");
T("SGN-029", "¿De qué le advierte esta señal?", [
["Puede saltarse la próxima señal de STOP", "Las señales de advertencia nunca anulan una señal de STOP. Aun así debe detenerse."],
["Deténgase aquí de inmediato", "Esta es una señal de advertencia. La señal de STOP real está más adelante."],
["Hay una señal de STOP adelante; prepárese para detenerse", "Correcto. La señal de STOP puede estar oculta por una curva o una loma. Empiece a bajar la velocidad para detenerse con suavidad."]],
"", "Señal amarilla en forma de rombo con una flecha hacia arriba y una pequeña figura roja de ocho lados.");
T("SGN-030", "¿Qué le indica esta señal?", [
["Ceda el paso al tráfico que viene detrás", "Las señales de ceder el paso se refieren al tráfico al que usted se une o que cruza, no al que viene detrás."],
["El camino de adelante no tiene controles de tráfico", "La señal le avisa que se acerca un control de YIELD."],
["Hay una señal de YIELD adelante; prepárese para bajar la velocidad y dejar pasar a otros", "Correcto. Esta advertencia le da tiempo para bajar la velocidad antes de llegar a la señal de YIELD (ceda el paso)."],
["Incorpórese a la izquierda ahora", "La señal muestra un control de ceder el paso adelante, no un cambio de carril."]],
"", "Señal amarilla en forma de rombo con una flecha hacia arriba y un pequeño triángulo rojo y blanco apuntando hacia abajo.");
T("SGN-031", "¿Qué significa esta señal?", [
["El camino da vuelta a la izquierda adelante", "Correcto. Baje la velocidad antes de la curva para mantenerse en su carril."],
["Carril solo para vuelta a la izquierda", "Las reglas de uso de carril se muestran en señales blancas reglamentarias. Esta señal amarilla advierte sobre la forma del camino."],
["No dar vuelta a la izquierda", "La señal de no dar vuelta a la izquierda tiene un círculo rojo con línea diagonal en una señal blanca."]],
"Baje la velocidad ANTES de la curva, no a la mitad.", "Señal amarilla en forma de rombo con una flecha negra que se dobla a la izquierda.");
T("SGN-032", "¿De qué le advierte esta señal?", [
["Camino resbaloso cuando está mojado", "La señal de camino resbaloso muestra un auto con marcas onduladas de derrape."],
["Camino con curvas adelante", "Correcto. Hay una serie de curvas adelante. Baje la velocidad y manténgase en su carril en las vueltas."],
["Zona de cruce de animales", "El zigzag es una flecha que muestra la forma del camino, no un animal."],
["Desviación a la derecha", "Las desviaciones tienen sus propias señales. Esta muestra un camino con varias curvas."]],
"", "Señal amarilla en forma de rombo con una flecha negra que se dobla de un lado a otro varias veces.");
T("SGN-033", "Ve esta señal en una curva o al final de un camino. ¿Qué le indica?", [
["Calle de un solo sentido a la izquierda", "Las señales ONE WAY son blancas y negras. Esta señal amarilla advierte sobre la dirección del camino."],
["El camino cambia de dirección; siga la flecha", "Correcto. La flecha direccional advierte de un cambio brusco de dirección. Baje la velocidad y gire hacia donde apunta la flecha."],
["El carril izquierdo es solo para rebasar", "Esta señal muestra hacia dónde va el camino, no una regla de carril."]],
"", "Señal rectangular horizontal amarilla con una flecha negra grande que apunta a la izquierda.");
T("SGN-034", "¿Qué suele significar una señal amarilla en forma de rombo?", [
["Advierte de condiciones o peligros específicos del camino adelante", "Correcto. Las señales en forma de rombo advierten de condiciones del camino y peligros adelante."],
["Le indica dónde hay servicios como gasolina y comida", "La información de servicios está en señales azules."],
["Indica una ley que debe obedecer, como un límite de velocidad", "Reglas como los límites de velocidad están en señales rectangulares blancas reglamentarias."],
["Marca una zona escolar", "Las zonas escolares usan una señal de cinco lados."]],
"", "");
T("SGN-035", "¿Qué suele comunicar una señal rectangular blanca?", [
["Atracciones turísticas", "Los lugares recreativos y culturales usan señales cafés."],
["Trabajos de construcción adelante", "Las advertencias de construcción y mantenimiento son anaranjadas."],
["Reglas importantes que debe obedecer", "Correcto. Las señales rectangulares blancas comunican reglas, como límites de velocidad y reglas de carril."]],
"", "");
T("SGN-036", "¿Qué afirmación sobre las señales de advertencia es correcta?", [
["Solo hay que obedecer las señales de advertencia amarillas", "El manual no limita esto a las señales amarillas."],
["Puede ignorar una señal de advertencia si conoce el camino", "Las condiciones cambian, y la señal está ahí por un peligro real."],
["Las señales de advertencia son solo sugerencias", "Las señales de advertencia le avisan de peligros reales. El manual dice que hay que obedecerlas."],
["Obedezca todas las señales de advertencia, sin importar su forma o color", "Correcto. El manual dice que hay que obedecer todas las señales de advertencia sin importar su forma o color."]],
"", "");
T("SGN-037", "¿Qué forma de señal se usa solo para las señales de STOP?", [
["Triángulo hacia abajo", "El triángulo hacia abajo es la señal de YIELD (ceda el paso)."],
["Pentágono (5 lados)", "La forma de cinco lados se usa para las señales escolares."],
["Octágono (8 lados)", "Correcto. El octágono está reservado para las señales de STOP, así que puede reconocerla incluso por detrás o cubierta de nieve o tierra."],
["Círculo", "La señal redonda se usa para advertir de un cruce de ferrocarril."]],
"", "");
T("SGN-038", "¿Qué forma tiene una señal de YIELD (ceda el paso)?", [
["Un triángulo hacia abajo", "Correcto. La señal de YIELD es un triángulo rojo y blanco que apunta hacia abajo."],
["Un rombo con borde negro", "Las señales en forma de rombo son de advertencia. La señal de YIELD es un triángulo que apunta hacia abajo."],
["Un octágono de ocho lados", "El octágono de ocho lados solo se usa para señales de STOP, no para YIELD."]],
"", "");
T("SGN-039", "¿Qué suele significar una señal anaranjada como esta?", [
["Hay una escuela cerca", "Las señales escolares tienen cinco lados y son amarillo verdosas o amarillas."],
["Zona de trabajo adelante", "Correcto. Las señales anaranjadas marcan zonas de construcción y mantenimiento de carreteras. Baje la velocidad, deje espacio extra y espere frenadas repentinas."],
["Terminó una desviación", "Esta señal anaranjada advierte de trabajos adelante, no del fin de algo."],
["Hay un área de descanso adelante", "Las áreas de descanso se muestran en señales azules."]],
"", "Señal anaranjada en forma de rombo con tres líneas de palabras negras.");
T("SGN-040", "Ve esta señal. ¿Para qué debe estar listo?", [
["Ignorar al banderero si el semáforo está en verde", "Las indicaciones de los trabajadores del camino, como los banderilleros, deben seguirse en la zona de trabajo."],
["Seguir las indicaciones del banderero y bajar la velocidad o detenerse", "Correcto. Esta señal advierte que un banderero dirige el tráfico adelante. Obedezca sus señales."],
["Acelerar para salir rápido de la zona de trabajo", "Las zonas de trabajo exigen bajar la velocidad. Las multas pueden ser de $1,000 o más, y se duplican donde hay trabajadores."]],
"", "Señal anaranjada en forma de rombo con una persona que sostiene una bandera.");
T("SGN-041", "¿Qué debe hacer al ver esta señal en una zona de trabajo?", [
["Incorporarse a la izquierda cuando sea seguro, sin cruzar conos ni barriles", "Correcto. El manual dice que se incorpore en cuanto sea seguro, sin cruzar los conos ni los barriles."],
["Quedarse en su carril hasta que los conos lo obliguen a cambiarse", "Esperar al último momento hace que incorporarse sea más difícil y peligroso. Incorpórese en cuanto sea seguro."],
["Detenerse y esperar a un banderero", "La señal no le pide detenerse. Le pide incorporarse a la izquierda."],
["Incorporarse a la derecha, al acotamiento", "La señal le pide al tráfico que sigue de frente incorporarse a la izquierda."]],
"", "Señal anaranjada en forma de rombo con cuatro líneas de palabras negras.");
T("SGN-042", "Ve este emblema en la parte trasera de un vehículo adelante. ¿Qué le indica?", [
["El vehículo lleva materiales peligrosos", "Las cargas peligrosas se marcan con letreros en forma de rombo."],
["El vehículo es un autobús escolar", "Los autobuses escolares son amarillos con luces intermitentes. Este emblema marca vehículos lentos."],
["El vehículo es lento", "Correcto. Un triángulo anaranjado con borde rojo marca vehículos lentos, como los de mantenimiento de caminos, que normalmente van a 25 mph o menos. Baje la velocidad con anticipación."]],
"", "Triángulo anaranjado con un borde rojo ancho.");
T("SGN-043", "Un camión adelante lleva un letrero en forma de rombo como este. ¿Qué le indica?", [
["El camión está fuera de servicio y estacionado", "El letrero se refiere a la carga, no a si el camión funciona."],
["El camión puede usar el carril HOV", "Los letreros no dan privilegios especiales de carril."],
["Es un vehículo agrícola lento", "Los vehículos lentos usan un triángulo anaranjado y rojo."],
["Puede llevar una carga peligrosa", "Correcto. Un letrero en forma de rombo significa que la carga puede ser peligrosa (gas, explosivos, etc.). Estos vehículos deben detenerse antes de cruzar vías de ferrocarril, así que esté preparado."]],
"", "Letrero rojo en forma de rombo con un símbolo blanco de llama, una palabra y un número.");
T("SGN-044", "En un distrito comercial o residencial sin señal de límite, ¿cuál es el límite de velocidad?", [
["25 mph", "Correcto. El límite de velocidad es de 25 mph en distritos comerciales o residenciales, salvo que se indique otro."],
["35 mph", "35 mph no es el límite por defecto en estos distritos. El manual fija un límite más bajo salvo que una señal diga otra cosa."],
["15 mph", "15 mph aplica en lugares específicos, como callejones e intersecciones ciegas, no en todos los distritos comerciales o residenciales."]],
"", "");
T("SGN-045", "Esta señal está sobre un carril. ¿Qué significa?", [
["Desde este carril puede dar vuelta a la izquierda o seguir de frente", "La palabra ONLY (solo) significa que no puede seguir de frente desde este carril."],
["Los vehículos de este carril deben dar vuelta a la izquierda", "Correcto. Una señal de uso de carril con ONLY significa que ese carril es para el movimiento indicado. Aquí, vueltas a la izquierda."],
["No se permiten vueltas a la izquierda", "La prohibición de vuelta a la izquierda usa un círculo rojo con línea diagonal. Esta señal exige la vuelta a la izquierda."]],
"", "Señal vertical blanca con una flecha negra que se curva a la izquierda y una palabra debajo.");
T("SGN-046", "¿Qué significa esta señal para los conductores que dan vuelta a la izquierda?", [
["Las vueltas a la izquierda tienen derecho de paso con luz verde", "Una luz verde redonda no protege su vuelta a la izquierda. La señal le recuerda ceder el paso."],
["Solo se permite dar vuelta a la izquierda con flecha verde", "La señal dice que puede dar vuelta con la luz verde redonda, pero debe ceder el paso primero."],
["Con luz verde fija, puede dar vuelta a la izquierda después de ceder el paso al tráfico que viene de frente", "Correcto. La luz verde redonda no es una vuelta protegida, así que deje pasar a los vehículos que vienen de frente antes de dar vuelta."],
["No se permiten vueltas a la izquierda", "La señal le dice cómo dar la vuelta con seguridad, no que esté prohibida."]],
"", "Señal vertical blanca con palabras negras y un círculo verde.");
T("SGN-047", "Va bajando por un camino de montaña empinado y angosto con esta señal y se encuentra con un auto que sube. Ninguno puede pasar. ¿Quién debe retroceder?", [
["El conductor que sube", "El vehículo que sube tiene el derecho de paso, así que no debería tener que retroceder cuesta abajo."],
["El vehículo más grande", "El tamaño no es la regla. El vehículo que sube tiene el derecho de paso."],
["Usted, el conductor que baja", "Correcto. El vehículo que va cuesta arriba tiene el derecho de paso. El que baja tiene más control al retroceder cuesta arriba y debe retroceder hasta que el otro pueda pasar."]],
"", "Señal vertical blanca con cuatro líneas de palabras negras.");
T("SGN-048", "¿Qué significa esta señal?", [
["No se detenga dentro de la intersección", "Correcto. Si el tráfico de adelante está detenido, espere antes de la intersección. Es ilegal bloquear una intersección cuando no hay espacio para cruzarla por completo antes de que la luz cambie a rojo."],
["No dé vuelta en esta intersección", "Las prohibiciones de vuelta usan NO TURNS o flechas con línea diagonal."],
["Los peatones no pueden cruzar aquí", "La señal se dirige a los conductores sobre bloquear la intersección."]],
"", "Señal blanca con palabras negras; la palabra de abajo es blanca sobre una franja negra.");
T("SGN-049", "¿Qué tipo de información dan las señales azules como esta?", [
["Advertencias de peligros", "Las advertencias son amarillas (o anaranjadas en zonas de trabajo)."],
["Servicios para los conductores, como un área de descanso", "Correcto. Esta señal azul de orientación muestra un área de descanso adelante."],
["Límites de velocidad", "Los límites de velocidad están en señales blancas reglamentarias."],
["Desviaciones por construcción", "Las señales de construcción son anaranjadas."]],
"", "Señal rectangular azul con palabras blancas.");
T("SGN-050", "¿Qué significan las señales reglamentarias rojas y blancas (como DO NOT ENTER)?", [
["Son consejos que puede decidir seguir", "Las señales reglamentarias no son opcionales. Le dicen lo que debe o no debe hacer."],
["Hay que seguir la indicación de la señal", "Correcto. Las señales rojas y blancas dan una orden que debe seguir, como DO NOT ENTER (no entre) o NO U-TURN (no vuelta en U)."],
["Solo aplican de noche", "Estas señales aplican en todo momento, salvo que la señal indique un horario."]],
"", "");
T("SGN-051", "Esta señal está frente a un camellón o isla de tráfico. ¿Qué le indica?", [
["Pase por la derecha de la isla o camellón", "Correcto. KEEP RIGHT (manténgase a la derecha) significa que debe pasar por el lado derecho del obstáculo de adelante."],
["Dé vuelta a la derecha en la próxima calle", "La señal indica por qué lado pasar el obstáculo, no dónde dar vuelta."],
["El carril derecho termina adelante", "El fin de carril se muestra en señales amarillas de advertencia."],
["El tráfico lento debe usar el carril derecho", "Esa regla aparece en otra señal: SLOWER TRAFFIC KEEP RIGHT."]],
"", "Señal vertical blanca con palabras negras y una flecha que apunta hacia abajo y a la derecha.");
T("SGN-052", "Después de esta señal no puede ver 400 pies de vía en ambas direcciones, y el cruce no tiene plumas, señales ni banderero. ¿Cuál es el límite de velocidad a menos de 100 pies del cruce?", [
["25 mph", "25 mph es el límite por defecto en distritos comerciales o residenciales. En este caso de ferrocarril el límite es más bajo."],
["5 mph", "5 mph es la guía del manual para hielo, no para cruces de ferrocarril."],
["15 mph", "Correcto. El límite es de 15 mph a menos de 100 pies de un cruce de ferrocarril cuando no puede ver las vías 400 pies en ambas direcciones."]],
"", "Señal redonda amarilla con una X negra y dos letras negras.");
T("SGN-053", "Ve esta señal. ¿Qué es lo mejor que puede hacer?", [
["Bajar la velocidad y prepararse para seguir las señales de desviación u otras indicaciones", "Correcto. Las señales anaranjadas indican zonas de trabajo. El camino de adelante está cerrado, así que prepárese para seguir las indicaciones."],
["Ignorarla si ve que otros autos siguen", "Otros conductores pueden tener permiso o estar rompiendo la regla. Siga las señales."],
["Dar la vuelta de inmediato donde esté", "Hacer una vuelta en U repentina puede ser ilegal o peligroso. Siga las indicaciones."]],
"", "Señal anaranjada en forma de rombo con tres líneas de palabras negras.");
T("SGN-054", "¿Cuándo puede estacionarse donde está esta señal?", [
["En cualquier momento por hasta 15 minutos", "No hay excepción de estacionamiento corto. El área es solo para emergencias."],
["Solo de noche", "La señal no da ninguna excepción por horario."],
["Cuando haya poco tráfico", "El nivel de tráfico no cambia la regla."],
["Solo en una emergencia", "Correcto. El espacio está reservado para emergencias, como una descompostura del vehículo."]],
"", "Señal rectangular blanca con tres líneas de palabras negras.");
T("SGN-055", "¿Qué significa esta señal?", [
["Se permite estacionarse solo de noche", "ANY TIME (a cualquier hora) significa que la regla aplica todo el día y toda la noche."],
["No se permite estacionarse en ningún momento", "Correcto. Nunca se estacione donde haya una señal de NO PARKING (no estacionarse)."],
["Puede detenerse un momento a esperar en su auto", "Esperar estacionado también cuenta como estacionarse. La regla no tiene excepción."]],
"", "Señal vertical blanca con borde rojo, palabras rojas y una flecha roja que apunta a la izquierda.");
T("SGN-056", "Va por una calle de un solo sentido y ve esta señal. ¿Qué debe esperar?", [
["Una segunda calle de un solo sentido se une desde la izquierda", "La señal dice que el camino se vuelve de doble sentido, no que se une otra calle de un solo sentido."],
["La calle termina", "Una calle sin salida tiene su propia señal. Esta advierte de tráfico en sentido contrario."],
["Tráfico en sentido contrario adelante; manténgase a la derecha", "Correcto. El camino se vuelve de doble sentido adelante, así que vendrán vehículos hacia usted."]],
"", "Señal rectangular blanca con tres líneas de palabras negras.");
T("SGN-057", "¿Cuándo debe bajar la velocidad por el peligro que muestra esta señal?", [
["Después de terminar la curva", "Bajar la velocidad después de la curva es demasiado tarde para ayudarle a mantenerse en su carril."],
["A la mitad de la curva", "Frenar fuerte en una curva puede hacer que el auto se deslice. Baje la velocidad antes de llegar."],
["Antes de entrar a la curva", "Correcto. Baje la velocidad al acercarse a la curva para poder tomarla con suavidad."],
["Solo si el camino está mojado", "Las curvas requieren una velocidad segura con cualquier clima."]],
"Frene en la recta, gire en la curva.", "Señal amarilla en forma de rombo con una flecha negra que se dobla a la derecha.");
T("SGN-058", "¿Qué le indica el color anaranjado de esta señal?", [
["Marca una zona de trabajo", "Correcto. Las señales anaranjadas se usan en zonas de construcción y mantenimiento de carreteras. Baje la velocidad y esté atento a trabajadores y equipo."],
["Marca una zona turística o recreativa", "Las señales turísticas y recreativas son cafés, no anaranjadas."],
["Marca una zona escolar adelante", "Las zonas escolares usan una señal de cinco lados, no un rombo anaranjado."]],
"", "Señal anaranjada en forma de rombo con dos líneas de palabras negras.");

T("SIG-001", "Llega a un semáforo con luz roja intermitente. ¿Qué debe hacer?", [
["Bajar la velocidad y pasar con cuidado sin detenerse", "Eso describe una luz AMARILLA intermitente. Una luz roja intermitente significa alto."],
["Detenerse, esperar a que la luz cambie a verde y luego avanzar", "Una luz roja intermitente puede no cambiar nunca a verde. Después de un alto total, puede avanzar cuando sea seguro."],
["Ceder el paso solo a los vehículos de su derecha", "Primero debe hacer un alto total. Trátela como una señal de STOP."],
["Hacer un alto total y luego avanzar cuando sea seguro", "Correcto. Una luz roja intermitente significa ALTO. Después de detenerse, puede avanzar cuando sea seguro, igual que con una señal de STOP."]],
"ROJA intermitente = señal de STOP. AMARILLA intermitente = despacio y con cuidado.", "Semáforo con solo la luz roja de arriba encendida, con rayitas alrededor para indicar que parpadea.");
T("SIG-002", "Una luz roja intermitente debe tratarse casi igual que ¿cuál de estas?", [
["Una señal de STOP", "Correcto. Las dos exigen un alto total, y después puede avanzar cuando sea seguro."],
["Una señal de YIELD (ceda el paso)", "Ante una señal de YIELD solo se detiene si es necesario. Una luz roja intermitente siempre exige un alto total."],
["Una luz verde con precaución", "Una luz roja intermitente nunca es una señal de “avance” hasta que usted se haya detenido."]],
"", "");
T("SIG-003", "Ya hizo un alto total ante esta luz roja intermitente. No hay tráfico ni peatones cerca. ¿Qué sigue?", [
["Esperar a que cambie a verde fijo", "No necesita esperar la luz verde. Después de detenerse, la luz roja intermitente le permite avanzar cuando sea seguro."],
["Avanzar cuando sea seguro", "Correcto. Una luz roja intermitente significa detenerse primero; después de detenerse, puede avanzar cuando sea seguro."],
["Retroceder y buscar otra ruta", "No hay necesidad de retroceder. Deténgase, revise y avance cuando sea seguro."]],
"", "Semáforo con la luz roja parpadeando.");
T("SIG-004", "¿Qué significa esta luz amarilla intermitente?", [
["Detenerse y luego avanzar cuando sea seguro", "Esa es la regla para la luz ROJA intermitente. La amarilla intermitente no exige detenerse."],
["La luz está por cambiar a rojo; deténgase si puede", "Eso describe una luz amarilla fija."],
["Avance con precaución; baje la velocidad y esté atento", "Correcto. Una luz amarilla intermitente es una advertencia. Baje la velocidad y esté atento. No necesita detenerse."],
["Acelere para pasar rápido", "Amarilla intermitente significa precaución, o sea bajar la velocidad, no acelerar."]],
"", "Semáforo con la luz amarilla del medio parpadeando.");
T("SIG-005", "La luz de adelante acaba de cambiar a amarilla fija. ¿Qué debe hacer?", [
["Acelerar para ganarle a la luz roja", "Apurarse con la amarilla aumenta el riesgo de choque. Amarilla significa precaución, no prisa."],
["Frenar de golpe sin importar qué tan cerca esté", "Frenar de golpe cuando está muy cerca puede causar un choque por detrás. Deténgase solo si es seguro."],
["Detenerse si puede hacerlo con seguridad; si no, cruzar con cuidado", "Correcto. Una luz amarilla fija significa que la luz está por cambiar a rojo. Deténgase si puede hacerlo con seguridad; si no puede, cruce la intersección con cuidado."]],
"", "Semáforo con la luz amarilla del medio encendida fija.");
T("SIG-006", "Con una luz roja fija, ¿cuándo puede dar vuelta a la derecha?", [
["Nunca; dar vuelta a la derecha con luz roja es ilegal", "California permite dar vuelta a la derecha con luz roja en muchos lugares, después de un alto total."],
["Después de un alto total, salvo que una señal lo prohíba", "Correcto. Deténgase en la línea de alto, ceda el paso a peatones y tráfico, y dé vuelta cuando sea seguro, salvo que haya una señal de NO TURN ON RED."],
["Solo después de que aparezca una flecha verde", "No se necesita flecha verde para dar vuelta a la derecha con luz roja, salvo que una señal lo prohíba."],
["En cualquier momento, siempre que baje la velocidad primero", "Primero debe hacer un alto total. No se permite pasar sin detenerse."]],
"", "Semáforo con la luz roja de arriba encendida fija.");
T("SIG-007", "Quiere dar vuelta a la izquierda y esta flecha roja está encendida. ¿Qué debe hacer?", [
["Quedarse detenido hasta que aparezca una luz verde o una flecha verde", "Correcto. Una flecha roja significa ALTO. No dé vuelta hasta que aparezca una luz verde o una flecha verde."],
["Dar vuelta después de un alto total si no viene nadie", "A diferencia de la luz roja redonda para vueltas a la derecha, con flecha roja no puede dar vuelta en absoluto."],
["Dar vuelta si el tráfico de frente está lejos", "La distancia del demás tráfico no importa. Una flecha roja significa no dar vuelta."]],
"", "Semáforo con una flecha roja hacia la izquierda encendida arriba.");
T("SIG-008", "Está detenido ante una flecha roja que apunta a la derecha. ¿Puede dar vuelta a la derecha después de detenerse?", [
["Sí, igual que con una luz roja fija", "Una flecha roja es distinta de una luz roja redonda. No se permite dar vuelta con flecha roja."],
["No. Espere a que la luz cambie a verde", "Correcto. No puede dar vuelta a la derecha mientras esté detenido ante una flecha roja."],
["Sí, si no hay una señal de NO TURN ON RED", "No hace falta ninguna señal. La flecha roja misma prohíbe la vuelta."]],
"", "");
T("SIG-009", "¿Qué significa una flecha amarilla fija?", [
["La vuelta protegida está terminando", "Correcto. Una flecha amarilla significa que el tiempo de vuelta protegida está terminando. Deténgase si puede hacerlo con seguridad. Si no puede detenerse con seguridad o ya está en la intersección, termine la vuelta con cuidado."],
["Puede dar vuelta y siempre tiene el derecho de paso", "Una flecha amarilla no le da el derecho de paso. Advierte que la vuelta protegida está terminando."],
["No se permiten vueltas en esa dirección", "Una flecha roja prohíbe las vueltas. Una flecha amarilla advierte de un cambio."],
["Ahora solo se permiten vueltas en U", "La flecha se refiere al tiempo de su vuelta, no al tipo de vuelta."]],
"", "Semáforo con una flecha amarilla hacia la izquierda encendida en el medio.");
T("SIG-010", "¿Qué significa una flecha amarilla intermitente que apunta a la izquierda?", [
["El tráfico de frente está detenido, así que dé vuelta libremente", "Eso describe una flecha verde. Con flecha amarilla intermitente, el tráfico de frente puede seguir avanzando."],
["Las vueltas a la izquierda están prohibidas hasta que deje de parpadear", "Una flecha amarilla intermitente permite la vuelta después de ceder el paso."],
["Detenerse y luego dar vuelta como en una señal de STOP", "Esta señal no exige un alto total, pero debe ceder el paso."],
["Puede dar vuelta a la izquierda, pero primero debe ceder el paso al tráfico de frente", "Correcto. La vuelta está permitida pero no protegida del demás tráfico. Ceda el paso a los vehículos de frente y a los peatones, y luego dé vuelta con precaución."]],
"", "Semáforo con una flecha amarilla hacia la izquierda parpadeando.");
T("SIG-011", "¿Qué significa una flecha verde?", [
["Avance solo de frente", "La flecha muestra la dirección permitida: aquí, una vuelta a la izquierda."],
["Ceda el paso al tráfico de frente antes de dar vuelta", "Con flecha verde, los vehículos de frente están detenidos por una luz roja. Aun así, fíjese si hay alguien en la intersección."],
["Avance en la dirección de la flecha; es una vuelta protegida", "Correcto. Una flecha verde le permite dar una vuelta protegida mientras los vehículos de frente están detenidos por una luz roja."]],
"", "Semáforo con una flecha verde hacia la izquierda encendida abajo.");
T("SIG-012", "Su luz está en verde, pero el tráfico del otro lado de la intersección está detenido. ¿Qué debe hacer?", [
["Esperar antes de la intersección hasta que haya espacio para cruzarla por completo", "Correcto. No entre a la intersección si no puede cruzarla por completo antes de que la luz cambie a rojo."],
["Entrar a la intersección y esperar dentro hasta que el tráfico avance", "Esperar dentro de la intersección puede bloquear el tráfico que cruza cuando su luz cambie a rojo. Eso es ilegal."],
["Tocar el claxon para que el tráfico avance", "Tocar el claxon no crea espacio y no es un uso seguro del claxon."]],
"", "Semáforo con la luz verde de abajo encendida fija.");
T("SIG-013", "Su luz cambia a verde, pero un peatón todavía termina de cruzar frente a usted. ¿Qué debe hacer?", [
["Avanzar, porque la verde le da el derecho de paso", "La luz verde significa avanzar solo cuando es seguro. Aun así debe detenerse por los peatones en la intersección."],
["Tocar el claxon para que el peatón se apure", "Tocar el claxon puede asustar a las personas. Aquí los peatones tienen el derecho de paso."],
["Esperar a que el peatón termine de cruzar", "Correcto. Incluso con luz verde, deténgase por cualquier vehículo, ciclista o peatón que esté en la intersección."],
["Rodear al peatón con cuidado", "Rodear a alguien en un cruce peatonal es peligroso y no está permitido. Espere."]],
"", "");
T("SIG-014", "El semáforo de una intersección está completamente apagado (no funciona). ¿Qué debe hacer?", [
["Pasar si usted va por la calle más grande", "No existe una regla de “la calle más grande” cuando el semáforo no funciona. Todos se detienen."],
["Detenerse como si hubiera señales de STOP en todas las direcciones y luego avanzar cuando sea seguro", "Correcto. Trate un semáforo apagado como un alto en todas las direcciones."],
["Bajar la velocidad y seguir sin detenerse", "Bajar la velocidad no es suficiente. Deténgase como si hubiera señales de STOP en todas las direcciones."]],
"", "Semáforo con todas las luces apagadas.");
T("SIG-015", "¿Cuándo puede dar vuelta a la izquierda con luz roja fija en California?", [
["Desde cualquier calle, si no vienen autos", "Las vueltas a la izquierda con luz roja solo se permiten de una calle de un solo sentido a otra de un solo sentido."],
["De una calle de un solo sentido a otra calle de un solo sentido", "Correcto. Después de detenerse, y si ninguna señal lo prohíbe, ceda el paso a los vehículos, peatones y ciclistas que tienen luz verde, y dé vuelta cuando sea seguro."],
["Nunca; siempre es ilegal", "California lo permite en un caso: de una calle de un solo sentido a otra de un solo sentido."],
["De una calle de doble sentido a una de un solo sentido", "La calle de donde sale también debe ser de un solo sentido."]],
"", "");
T("SIG-016", "Un peatón todavía está en el cruce peatonal cuando la señal muestra una mano levantada intermitente. ¿Qué debe hacer usted como conductor?", [
["Puede pasar, ya que la señal para peatones está terminando", "La mano intermitente les indica a los peatones que no EMPIECEN a cruzar. No termina su obligación de ceder el paso."],
["Tocar el claxon para avisar al peatón", "Tocar el claxon no es necesario y puede asustar a las personas. Simplemente ceda el paso."],
["Ceder el paso al peatón", "Correcto. Los conductores deben ceder el paso a los peatones, incluso si la luz de “No caminar” está parpadeando."]],
"", "Señal para peatones con una mano naranja levantada, rayitas alrededor y un número naranja.");
T("SIG-017", "¿Qué indica el número en esta señal para peatones?", [
["Los segundos que quedan para cruzar la calle", "Correcto. Los números cuentan hacia atrás los segundos que quedan para cruzar."],
["El límite de velocidad del cruce peatonal", "Los cruces peatonales no tienen una señal de límite de velocidad propia como esta."],
["El número de peatones que esperan", "Las señales para peatones no cuentan personas. Los números cuentan hacia atrás los segundos que quedan para cruzar."]],
"", "Señal para peatones con una mano naranja levantada y un número.");
T("SIG-018", "Si una intersección no tiene señales para peatones, ¿qué señales siguen los peatones?", [
["Ninguna; pueden cruzar cuando quieran", "Los peatones también deben seguir las reglas del camino."],
["Los semáforos de los vehículos", "Correcto. Si no hay señales para peatones, los peatones obedecen los semáforos de los vehículos."],
["Solo las señales de STOP", "En una intersección con semáforo, aplican los semáforos de los vehículos."]],
"", "");
T("SIG-019", "¿Por qué algunas señales para peatones emiten pitidos, trinos o mensajes hablados?", [
["Para advertir a los conductores que la luz va a cambiar", "Los sonidos son para los peatones, no para los conductores."],
["Para indicar a los conductores que pueden dar vuelta", "Los sonidos dan información de cruce a los peatones."],
["Para ayudar a los peatones ciegos o con baja visión a cruzar la calle", "Correcto. Esté atento a estos peatones y cédales el paso."]],
"", "");
T("MRK-001", "Quiere dar vuelta a la izquierda hacia la entrada de cochera que se muestra, cruzando UN juego de doble línea amarilla continua. ¿Está permitido?", [
["Sí, puede cruzarlas para dar vuelta a la izquierda hacia una entrada, después de ceder el paso al tráfico de frente", "Correcto. Puede dar vuelta a la izquierda cruzando un solo juego de doble línea amarilla para entrar o salir de una entrada de cochera o camino privado, o para hacer una vuelta en U. Espere a que sea seguro."],
["No, la doble línea amarilla continua nunca se puede cruzar", "Hay excepciones. Una de ellas es dar vuelta a la izquierda cruzando un solo juego de doble línea amarilla hacia una entrada o camino privado."],
["Solo si primero maneja un tramo corto por el carril contrario", "No puede manejar por el carril contrario para llegar a la entrada. Cruce directamente cuando sea seguro."],
["Solo entre las 10 p.m. y las 6 a.m.", "No hay una regla de horario para esta excepción."]],
"Cruzar para DAR VUELTA hacia una entrada: sí. Cruzar para REBASAR: no.", "Camino de dos carriles con un juego de doble línea amarilla continua en el centro. Un auto azul en el carril de abajo planea dar vuelta a la izquierda, marcada con línea punteada, cruzando las líneas centrales hacia una entrada al otro lado. Un auto anaranjado está en el carril de arriba, más a la izquierda.");
T("MRK-002", "El conductor de la imagen quiere rebasar al camión lento cruzando la doble línea amarilla continua. ¿Está permitido?", [
["No, no puede rebasar cruzando la doble línea amarilla continua", "Correcto. No rebase cruzando la doble línea amarilla continua. Las excepciones de entrada de cochera y vuelta en U no incluyen rebasar."],
["Sí, si no se ve tráfico de frente", "Aunque no se vea tráfico, no puede rebasar cruzando la doble línea amarilla continua."],
["Sí, si el camión va por debajo del límite de velocidad", "Un vehículo lento adelante no crea una excepción a la regla de la doble línea amarilla."]],
"DAR VUELTA cruzándola = excepción permitida. REBASAR cruzándola = nunca.", "Camino de dos carriles con doble línea amarilla continua en el centro. Un auto azul va detrás de un camión lento, y una línea punteada muestra al auto azul pasando al otro carril para rodear al camión.");
T("MRK-003", "¿Cuál de estas es una razón permitida para cruzar un solo juego de doble línea amarilla continua?", [
["Rebasar a un ciclista lento", "Rebasar no es una de las excepciones de la doble línea amarilla continua."],
["Rodear una fila de tráfico detenida en un semáforo en rojo", "Rodear tráfico detenido es rebasar, y eso no se permite cruzando la doble línea amarilla continua."],
["Ahorrar tiempo cuando su carril está lleno", "La conveniencia no es una excepción."],
["Dar vuelta a la izquierda hacia un camino privado o entrada de cochera", "Correcto. Dar vuelta a la izquierda cruzando un solo juego de doble línea amarilla para entrar o salir de una entrada o camino privado, o para hacer una vuelta en U, se permite cuando es seguro."]],
"", "");
T("MRK-004", "Dos juegos de doble línea amarilla continua, separados por dos pies o más, dividen los carriles. ¿Puede dar vuelta a la izquierda cruzándolos hacia la entrada que se muestra?", [
["Sí, igual que al cruzar un solo juego de doble línea amarilla", "Dos juegos separados por dos pies o más se tratan como una barrera. La excepción de la entrada de cochera aplica solo a un juego."],
["No. Trátelos como una barrera y cruce solo en una abertura designada", "Correcto. No maneje sobre esta barrera ni la cruce, ni dé vuelta a la izquierda o en U a través de ella, excepto en aberturas designadas."],
["Sí, si pone la direccional al menos 5 segundos", "Poner la direccional no hace legal cruzar una barrera."]],
"Un juego de doble línea amarilla = una línea. Dos juegos separados 2+ pies = un muro.", "Camino con dos juegos de doble línea amarilla continua en el centro, separados por un espacio marcado “2 ft or more”. Una línea roja punteada muestra a un auto azul que planea dar vuelta a la izquierda cruzando ambos juegos hacia una entrada.");
T("MRK-005", "¿Cuál NO es una excepción que le permite cruzar la doble línea amarilla continua?", [
["Entrar a un carril HOV que tiene una entrada designada a la izquierda", "Esta es una excepción que menciona el manual, así que no es la respuesta."],
["Seguir señales de construcción que lo mandan al otro lado del camino", "Esta es una excepción incluida en la lista, así que no es la respuesta."],
["Rebasar a un vehículo que va más despacio que usted", "Correcto. Rebasar no es una excepción. No rebase cruzando la doble línea amarilla continua."],
["Hacer una vuelta en U donde se permiten", "Dar vuelta a la izquierda cruzando un solo juego de doble línea amarilla para hacer una vuelta en U es una excepción, así que no es la respuesta."]],
"", "");
T("MRK-006", "Usted es el auto azul. La línea amarilla discontinua está de su lado del centro. ¿Puede rebasar al auto de adelante?", [
["No, cualquier línea amarilla central significa no rebasar", "Las líneas amarillas discontinuas permiten rebasar desde el lado en que están."],
["Solo si el otro auto le hace señas para rebasar", "Las señas de otros conductores no deciden si rebasar es legal o seguro."],
["Sí, cuando sea seguro, porque la línea discontinua está junto a su carril", "Correcto. Una línea amarilla discontinua junto a su carril significa que puede rebasar, pero solo cuando sea seguro."]],
"", "Camino de dos carriles. En el centro hay una línea amarilla continua del lado de arriba y una línea amarilla discontinua del lado de abajo, junto al carril del auto azul. Un auto gris va delante del auto azul.");
T("MRK-007", "Usted es el auto azul. La línea amarilla continua está de su lado. ¿Puede rebasar al auto de adelante cruzando el centro?", [
["No, no rebase cuando la línea continua está de su lado", "Correcto. No rebase si solo hay un carril en su sentido y hay una línea amarilla continua de su lado del camino."],
["Sí, si puede hacerlo rápido", "La velocidad no cambia la regla. Una línea continua de su lado significa no rebasar."],
["Sí, porque del otro lado hay una línea discontinua", "La línea discontinua permite rebasar a los conductores del OTRO lado. Usted debe seguir la línea de su lado."]],
"Fíjese en la línea más cercana a USTED: discontinua = puede rebasar cuando sea seguro; continua = no.", "Camino de dos carriles. En el centro hay una línea amarilla discontinua del lado de arriba y una línea amarilla continua del lado de abajo, junto al carril del auto azul. Un auto gris va adelante.");
T("MRK-008", "¿Qué separa una sola línea blanca continua?", [
["El tráfico que va en sentidos opuestos", "El tráfico en sentidos opuestos se separa con líneas amarillas."],
["Carriles de tráfico que van en el mismo sentido", "Correcto. Una sola línea blanca continua marca carriles que van en el mismo sentido, incluso en calles de un solo sentido."],
["Los espacios de estacionamiento de los carriles de bomberos", "Esa no es la descripción que da el manual de esta marca."]],
"", "");
T("MRK-009", "Quiere pasarse al carril compartido (carpool) que se muestra. ¿Dónde puede cambiar de carril?", [
["En cualquier lugar, si pone la direccional", "Poner la direccional no hace legal cruzar la doble línea blanca continua."],
["Cruzando la doble línea blanca si hay poco tráfico", "Nunca cambie de carril cruzando la doble línea blanca continua, sin importar el tráfico."],
["Solo donde la línea se vuelve una sola línea blanca discontinua", "Correcto. Nunca cambie de carril cruzando la doble línea blanca continua. Espere hasta ver una sola línea blanca discontinua o una entrada designada."]],
"", "Autopista con un carril compartido marcado con un rombo a la izquierda. Una doble línea blanca continua lo separa del carril de al lado en el primer tramo y luego cambia a una sola línea blanca discontinua más adelante.");
T("MRK-010", "¿Qué significan las líneas blancas discontinuas en un camino?", [
["Separan carriles que van en el mismo sentido; puede cambiar de carril cuando sea seguro", "Correcto. Las líneas blancas discontinuas separan carriles en caminos con dos o más carriles en el mismo sentido."],
["Marcan el borde de un carril para bicicletas al que nunca puede entrar", "Los carriles para bicicletas normalmente se marcan con una línea blanca continua que puede volverse discontinua cerca de las intersecciones."],
["Separan el tráfico que va en sentidos opuestos", "El tráfico en sentidos opuestos se separa con líneas amarillas."]],
"", "");
T("MRK-011", "Va en un carril marcado con líneas discontinuas grandes en una autopista. ¿Para qué debe estar listo?", [
["El carril es un carril compartido (carpool)", "Los carriles compartidos se marcan con un rombo y las palabras Carpool Lane."],
["El carril puede terminar o salir de la autopista", "Correcto. Los carriles que terminan suelen marcarse con líneas discontinuas grandes. Busque señales que le indiquen salir o incorporarse."],
["El carril es solo para rebasar", "Las líneas discontinuas grandes marcan un carril que termina o de salida, no un carril para rebasar."]],
"", "");
T("MRK-012", "¿Qué significa una fila de triángulos blancos pintados a lo ancho de su carril?", [
["Topes adelante", "Los triángulos son una marca en el pavimento, no un tope."],
["Una zona solo para peatones", "Los cruces peatonales se marcan con líneas, no con triángulos."],
["Una línea de ceda el paso", "Correcto. Una línea de ceda el paso es una fila de triángulos blancos que muestra dónde ceder el paso o detenerse. Los triángulos apuntan hacia los vehículos que se acercan."]],
"", "Llegada a un cruce con una fila de triángulos blancos pintados a lo ancho del carril, con las puntas hacia los autos que esperan.");
T("MRK-013", "El auto azul está en un carril central para vuelta a la izquierda. ¿Qué distancia puede recorrer en este carril?", [
["Hasta media milla", "Este carril no es de circulación. El límite es mucho menor."],
["No más de 200 pies", "Correcto. El carril central para vuelta a la izquierda es solo para prepararse y hacer una vuelta a la izquierda o en U. Solo puede recorrer 200 pies en él."],
["Lo que necesite, si el tráfico va lento", "La velocidad del tráfico no cambia el límite. No es un carril normal de circulación ni para rebasar."],
["No se puede manejar en él", "Puede usarlo para prepararse y hacer una vuelta a la izquierda o en U."]],
"", "Calle de doble sentido con un carril central bordeado a cada lado por una línea amarilla continua exterior y una línea amarilla discontinua interior. Un auto azul está en el carril central.");
T("MRK-014", "¿Para cuál de estas se puede usar un carril central para vuelta a la izquierda?", [
["Prepararse y hacer una vuelta a la izquierda o en U", "Correcto. Ese es su único propósito."],
["Rebasar al tráfico más lento", "No es un carril para rebasar. Usarlo para rebasar arriesga un choque de frente con alguien que da vuelta desde el otro sentido."],
["Esperar para incorporarse al tráfico desde el lado derecho del camino", "El carril central no es un carril de incorporación."]],
"", "");
T("MRK-015", "¿Cómo se marca un carril HOV (carril compartido) en la superficie del camino?", [
["Con un símbolo de bicicleta y una flecha", "El símbolo de bicicleta es para carriles de bicicletas o carriles compartidos con bicicletas."],
["Con un símbolo de rombo", "Correcto. Un carril HOV se marca con un rombo y las palabras Carpool Lane. Las señales indican el número mínimo de personas y el horario en que aplica la regla."],
["Con una fila de triángulos blancos", "Una fila de triángulos blancos es una línea de ceda el paso, no una marca de HOV."]],
"", "");
T("MRK-016", "¿Cuál de estos puede usar un carril HOV (salvo que se indique otra cosa)?", [
["Una motocicleta", "Correcto. Las motocicletas pueden usar los carriles HOV salvo que se indique otra cosa. Los demás necesitan el número de personas indicado, o un vehículo elegible de bajas o cero emisiones con calcomanía del DMV."],
["Cualquier vehículo cuando hay mucho tráfico", "Los carriles HOV están reservados. El tráfico pesado no es una excepción."],
["Un conductor solo que va tarde al trabajo", "Ir tarde no es una excepción."],
["Un vehículo que remolca un tráiler", "Los vehículos que remolcan deben usar el carril de la extrema derecha o un carril marcado para vehículos lentos."]],
"", "");
T("MRK-017", "¿Qué carril de la imagen es el “carril número 1”?", [
["Carril A", "Correcto. El carril izquierdo (o rápido) es el carril número 1. El de su derecha es el número 2, y así sucesivamente."],
["Carril B", "El carril B es el carril número 2, el segundo desde la izquierda."],
["Carril C", "El carril C es el carril número 3, el tercero desde la izquierda."],
["Carril D", "El carril D es el de la extrema derecha. La numeración empieza del otro lado."]],
"El número 1 está junto al divisor central, como el primero de la fila a la izquierda.", "Cuatro carriles que van todos en el mismo sentido, marcados A, B, C y D de izquierda (junto al camellón) a derecha.");
T("MRK-018", "¿Qué carril debe usar generalmente para entrar o salir del tráfico?", [
["El carril izquierdo", "El carril izquierdo es para rebasar y dar vuelta a la izquierda."],
["El carril central para vuelta a la izquierda", "Ese carril es solo para prepararse para vueltas a la izquierda y en U."],
["El carril derecho", "Correcto. Use el carril derecho para entrar o salir del tráfico, o cuando entra al camino desde la acera o el acotamiento."]],
"", "");
T("MRK-019", "Debe detenerse en un semáforo en rojo. ¿Dónde debe quedar el frente de su auto?", [
["Posición A", "Correcto. Deténgase detrás de la línea de alto. Si no hay, deténgase antes del cruce peatonal; si no hay cruce peatonal, antes de la intersección."],
["Posición B", "Detenerse sobre el cruce peatonal bloquea a los peatones."],
["Posición C", "Detenerse dentro de la intersección lo pone en el camino del tráfico que cruza."]],
"", "Llegada a una intersección con una línea blanca ancha a lo ancho del carril del auto azul, luego un cruce peatonal con franjas y luego la intersección. Hay círculos que marcan la posición A justo antes de la línea ancha, la B sobre el cruce peatonal y la C dentro de la intersección.");
T("MRK-020", "Planea dar vuelta a la derecha en la intersección de adelante. ¿Cuándo puede entrar al carril para bicicletas?", [
["En cualquier parte de la cuadra, si pone la direccional", "Manejar en un carril para bicicletas es ilegal, salvo en casos específicos como a menos de 200 pies de una vuelta."],
["Nunca; dé vuelta desde su carril actual", "Para dar vuelta a la derecha debe estar cerca del borde derecho, y puede usar el carril para bicicletas a menos de 200 pies de la vuelta."],
["Solo si no hay ciclistas a menos de 1,000 pies", "No existe esa regla. El límite depende de qué tan cerca esté de la vuelta."],
["A menos de 200 pies de la vuelta, después de revisar si hay ciclistas", "Correcto. Puede entrar al carril para bicicletas a menos de 200 pies de la vuelta. Primero revise sus puntos ciegos por si hay ciclistas."]],
"", "Camino con un carril verde para bicicletas a lo largo del borde derecho. La línea del carril para bicicletas es continua y luego discontinua en los últimos 200 pies antes de una intersección. Un auto azul va en el carril de circulación.");
T("MRK-021", "¿Cuál NO es una razón legal para manejar en un carril para bicicletas?", [
["Estacionarse, donde se permite", "Estacionarse donde se permite es una de las excepciones de la lista, así que no es la respuesta."],
["Dar vuelta, a menos de 200 pies de la intersección", "Dar vuelta a menos de 200 pies de una intersección es una excepción de la lista, así que no es la respuesta."],
["Rebasar autos lentos por la derecha", "Correcto. No se permite usar el carril para bicicletas para rebasar. Las excepciones son estacionarse donde se permite, entrar o salir del camino y dar vuelta a menos de 200 pies de una intersección."],
["Entrar o salir del camino", "Entrar o salir del camino es una excepción de la lista, así que no es la respuesta."]],
"", "");

T("ROW-001", "Usted (auto azul) y el auto anaranjado se detienen al mismo tiempo en este alto de cuatro vías. ¿Quién debe avanzar primero?", [
["Usted, porque va de frente", "Ir de frente no le da prioridad en un alto de todas las direcciones cuando ambos llegan al mismo tiempo."],
["El auto anaranjado, porque está a su derecha", "Correcto. Si los vehículos llegan al mismo tiempo, ceda el paso al vehículo de su derecha."],
["El conductor que haga señas primero", "Hacer señas con la mano no es una regla de derecho de paso y puede causar confusión."]],
"¿Llegaron al mismo tiempo? Ceda el paso a la DERECHA.", "Intersección de cuatro vías con una señal de STOP en cada esquina. El auto azul (usted) está detenido abajo. Un auto anaranjado está detenido en el lado derecho de la intersección.");
T("ROW-002", "En una intersección sin señales de STOP ni de YIELD, ¿quién tiene el derecho de paso?", [
["El vehículo más grande", "El tamaño no decide el derecho de paso."],
["El vehículo que va más rápido", "La velocidad nunca le da el derecho de paso."],
["El vehículo que da vuelta a la izquierda", "Quien da vuelta a la izquierda debe ceder el paso al tráfico que se acerca lo bastante cerca como para ser peligroso."],
["El vehículo que llega primero", "Correcto. El vehículo que llega primero tiene el derecho de paso. Si llegan al mismo tiempo, ceda el paso al de su derecha."]],
"", "");
T("ROW-003", "En esta intersección en T sin señales, ¿quién tiene el derecho de paso?", [
["Usted, porque está a la derecha del auto anaranjado", "En una intersección en T no aplica la regla de la derecha. El camino que continúa tiene prioridad."],
["El que vaya más rápido", "La velocidad no da el derecho de paso."],
["El auto anaranjado, porque va por el camino que continúa", "Correcto. En una intersección en T sin señales de STOP ni de YIELD, los vehículos del camino que continúa tienen el derecho de paso."]],
"", "Intersección en T sin señales de STOP ni de YIELD. El auto azul (usted) está en el camino que termina en la T. Un auto anaranjado circula por el camino que continúa, desde la izquierda.");
T("ROW-004", "Va a dar vuelta a la izquierda en una intersección. Un auto de frente está lo bastante cerca como para ser peligroso. ¿Qué debe hacer?", [
["Ceder el paso al auto que viene de frente", "Correcto. Al dar vuelta a la izquierda, ceda el paso a los peatones y a cualquier vehículo que se acerque lo bastante cerca como para ser peligroso."],
["Dar vuelta rápido antes de que llegue", "Atravesarse frente al tráfico que viene es una causa común de choques graves."],
["Hacer cambio de luces y dar vuelta", "Hacer cambio de luces no le da el derecho de paso."]],
"", "");
T("ROW-005", "Espera para dar vuelta a la izquierda. Un auto de frente tiene puesta la direccional derecha. ¿Qué debe hacer?", [
["Dar vuelta ya; el otro auto dará vuelta antes de llegar a usted", "La direccional puede estar puesta por error, o el conductor puede planear dar vuelta justo después de usted."],
["Esperar a que el otro auto realmente empiece su vuelta", "Correcto. No suponga que un vehículo con la direccional puesta dará vuelta antes de llegar a usted."],
["Tocar el claxon para asegurarse de que dé vuelta", "Tocar el claxon no le dice qué hará el otro conductor."]],
"", "");
T("ROW-006", "Está saliendo a un camino desde una entrada de cochera. ¿Quién tiene el derecho de paso?", [
["Usted, porque puso la direccional", "La direccional anuncia lo que planea hacer; no le da el derecho de paso."],
["El que tenga el vehículo más grande", "El tamaño del vehículo no decide el derecho de paso."],
["El tráfico que ya va por el camino", "Correcto. Al incorporarse al tráfico, avance con precaución y ceda el paso al tráfico que ya ocupa los carriles."]],
"", "");
T("ROW-007", "¿Tienen los peatones el derecho de paso en los cruces peatonales sin marcar?", [
["Sí, tanto en cruces marcados como sin marcar", "Correcto. Los peatones tienen el derecho de paso en cruces peatonales marcados o sin marcar."],
["No, solo en cruces pintados", "No todos los cruces peatonales están marcados, y el derecho de paso aplica a ambos."],
["Solo en intersecciones con semáforo", "Los peatones tienen el derecho de paso en cruces marcados o sin marcar, con o sin semáforo."]],
"", "");
T("ROW-008", "Un vehículo en el carril de al lado está detenido ante un cruce peatonal. ¿Qué debe hacer?", [
["Rebasarlo con cuidado", "No rebase a un vehículo detenido ante un cruce peatonal. Puede haber un peatón cruzando que usted no ve."],
["No rebasar; estar listo para detenerse", "Correcto. El otro conductor puede estar detenido por un peatón que usted no alcanza a ver."],
["Tocar el claxon para saber por qué se detuvo", "Tocar el claxon no revela a un peatón oculto y puede asustar a las personas."]],
"", "");
T("ROW-009", "Un peatón con bastón blanco espera en la esquina. Recoge el bastón y se aleja de la intersección. ¿Qué suele significar esto?", [
["Necesita que usted toque el claxon para guiarlo", "Nunca le toque el claxon a una persona ciega. Puede asustarla y confundirla."],
["Debe esperar a que se vaya del lugar", "El gesto le indica que avance; no necesita esperar a que se vaya."],
["Usted puede avanzar", "Correcto. Cuando una persona ciega recoge su bastón y se aleja de la intersección, normalmente significa que usted puede avanzar."],
["Está por cruzar, así que acelere", "Acelerar nunca es la respuesta correcta cerca de peatones."]],
"", "");
T("ROW-010", "¿Por qué debe evitar detenerse en medio de un cruce peatonal?", [
["Desgasta más rápido la pintura del cruce", "El desgaste de la pintura no es el problema. El problema es la seguridad de los peatones."],
["Solo es un problema de noche, cuando está oscuro", "Bloquear el cruce peatonal es un problema a cualquier hora del día."],
["Puede obligar a las personas a rodear su auto por el tráfico", "Correcto. Detenerse sobre el cruce peatonal podría obligar a un peatón ciego, o a cualquiera, a caminar entre el tráfico fuera del cruce."]],
"", "");
T("ROW-011", "Se acerca a esta glorieta. ¿Quién debe ceder el paso?", [
["Usted debe ceder el paso al tráfico que ya está en la glorieta", "Correcto. Baje la velocidad, ceda el paso a todo el tráfico que ya está en la glorieta y entre cuando haya un espacio suficiente."],
["El auto anaranjado, porque usted está entrando", "El tráfico que ya está en la glorieta tiene prioridad."],
["Ninguno; ambos pueden avanzar a la vez", "Entrar sin ceder el paso arriesga un choque lateral."]],
"", "Glorieta de un carril con isla central y cuatro entradas. El auto azul (usted) espera en la entrada de abajo. Un auto anaranjado ya circula en el círculo.");
T("ROW-012", "¿En qué sentido circula el tráfico en una glorieta de California?", [
["En el sentido de las manecillas del reloj", "El tráfico va en sentido contrario, para que pueda entrar girando hacia la derecha."],
["En sentido contrario a las manecillas del reloj", "Correcto. Entre girando hacia la derecha y circule en sentido contrario a las manecillas del reloj alrededor de la isla central."],
["En cualquier sentido, según su salida", "Todo el tráfico circula en el mismo sentido."]],
"", "Glorieta vista desde arriba, con isla central y cuatro entradas.");
T("ROW-013", "Se le pasa su salida en una glorieta. ¿Qué debe hacer?", [
["Detenerse y retroceder hasta la salida", "Nunca se detenga ni retroceda en una glorieta."],
["Seguir dando la vuelta hasta volver a su salida", "Correcto. Si se le pasa su salida, siga dando la vuelta hasta regresar a ella."],
["Cruzar por encima de la isla central", "La isla central no es para manejar."],
["Salir en la siguiente y hacer una vuelta en U en la entrada de la glorieta", "Simplemente dé otra vuelta. El manual indica esa opción como la segura."]],
"", "");
T("ROW-014", "En una glorieta de dos carriles, quiere dar vuelta a la derecha. ¿Qué carril debe usar?", [
["El carril izquierdo y luego cruzarse hacia la salida", "Cruzarse de carril en la salida arriesga un choque con el tráfico del carril derecho."],
["Cualquier carril y salir por el que esté libre", "Para vueltas a la derecha, el manual dice que use el carril derecho."],
["El carril derecho, y salir por el carril derecho", "Correcto. Para dar vuelta a la derecha, elija el carril derecho y salga por el carril derecho."]],
"", "");
T("ROW-015", "En este camino empinado y angosto, ningún auto puede pasar. ¿Cuál tiene el derecho de paso?", [
["El auto azul que va cuesta arriba", "Correcto. El vehículo que va cuesta arriba tiene el derecho de paso. El que baja debe retroceder hasta que el que sube pueda pasar."],
["El auto anaranjado que va cuesta abajo", "El vehículo que baja tiene más control al retroceder, así que es el que debe retroceder."],
["El auto que toque el claxon primero", "Tocar el claxon no decide el derecho de paso."]],
"", "Camino empinado y angosto. Un auto azul sube la cuesta y un auto anaranjado baja. Se encuentran y no pueden pasarse.");
T("ROW-016", "Otro conductor no le cede el derecho de paso. ¿Qué debe hacer?", [
["Insistir en su derecho de paso para darle una lección", "Insistir puede causar un choque. El derecho de paso es algo que se cede, no algo que se toma."],
["Ceder su derecho de paso si eso ayuda a evitar un choque", "Correcto. Nunca suponga que los demás le cederán el paso, y ceda el derecho de paso cuando ayude a evitar un choque."],
["Acelerar para demostrar que llegó primero", "Acelerar para reclamar el derecho de paso aumenta la probabilidad de un choque."]],
"", "");
T("ROW-017", "¿Cuál es el límite de velocidad en una intersección ciega (sin señales de alto en ninguna esquina y con la vista bloqueada)?", [
["25 mph", "25 mph es el límite por defecto en distritos comerciales o residenciales, pero en intersecciones ciegas es menor."],
["10 mph", "El manual indica 15 mph para intersecciones ciegas."],
["15 mph", "Correcto. El límite en una intersección ciega es de 15 mph. Si su vista está bloqueada, avance despacio hasta que pueda ver."]],
"", "");
T("ROW-018", "Una procesión fúnebre dirigida por un oficial de tránsito pasa por una intersección. ¿Qué debe hacer?", [
["Dejar pasar la procesión; no interrumpirla", "Correcto. Una procesión fúnebre dirigida por un oficial de tránsito tiene el derecho de paso. Le pueden dar una multa por interrumpirla."],
["Meterse en la fila para pasar más rápido", "Unirse a una procesión fúnebre o interrumpirla puede costarle una multa."],
["Pasar por el espacio entre dos vehículos", "Meterse en la procesión la interrumpe."]],
"", "");
T("ROW-019", "Un peatón en la acera lo mira a los ojos. ¿Qué suele significar esto?", [
["Quiere que usted pase primero", "El contacto visual normalmente significa lo contrario."],
["Está listo para cruzar; cédale el paso", "Correcto. Un peatón que hace contacto visual está listo para cruzar la calle."],
["Está esperando un autobús", "No puede suponer eso. Ceda el paso."]],
"", "");
T("ROW-020", "¿Cuál de estos se considera peatón?", [
["Una persona en patineta", "Correcto. Una persona que se desplaza en algo que no es un vehículo ni una bicicleta, como patines o una patineta, es un peatón."],
["Una persona que maneja un carrito de golf", "Un carrito de golf es un vehículo motorizado lento, no un peatón."],
["Una persona en bicicleta en el carril para bicicletas", "Los ciclistas son conductores con sus propias reglas, salvo que decidan cruzar como peatones."],
["Una persona en motocicleta", "Los motociclistas son conductores de vehículos."]],
"", "");
T("TRN-001", "¿Con cuánta anticipación debe empezar a señalar antes de una vuelta?", [
["Al menos 25 pies", "Eso es demasiado tarde para que los demás reaccionen."],
["Solo cuando empieza a dar la vuelta", "Los demás necesitan el aviso antes de la vuelta, no durante."],
["Al menos 100 pies", "Correcto. Señale al menos 100 pies antes de dar la vuelta."]],
"", "");
T("TRN-002", "¿Cuánto tiempo debe señalar antes de cambiar de carril en una autopista?", [
["Al menos cinco segundos", "Correcto. Señale al menos cinco segundos antes de cambiar de carril en una autopista."],
["Un segundo", "Un segundo no es suficiente aviso a velocidades de autopista."],
["En las autopistas no hace falta señalar", "Señale antes de cada cambio de carril."]],
"", "");
T("TRN-003", "¿Debe señalar aunque no vea otros vehículos alrededor?", [
["No, las señales son solo para los conductores que usted ve", "Puede haber vehículos, ciclistas o peatones que usted no ha notado."],
["Sí, siempre señale", "Correcto. Señale aunque no vea otros vehículos a su alrededor."],
["Solo de noche", "Señale a cualquier hora. Los demás pueden no verlo, de día o de noche."]],
"", "");
T("TRN-004", "¿Qué significa esta señal con la mano?", [
["Bajar la velocidad o detenerse", "La señal de bajar la velocidad o detenerse tiene el antebrazo apuntando hacia abajo."],
["Vuelta a la derecha", "La señal de vuelta a la derecha tiene el antebrazo apuntando hacia arriba."],
["Vuelta a la izquierda", "Correcto. El brazo y la mano extendidos rectos hacia la izquierda significan vuelta a la izquierda."]],
"", "Vista desde atrás de un auto. El brazo izquierdo del conductor sale por la ventana extendido recto, paralelo al suelo.");
T("TRN-005", "¿Qué significa esta señal con la mano?", [
["Vuelta a la izquierda", "La señal de vuelta a la izquierda tiene el brazo extendido recto."],
["Bajar la velocidad o detenerse", "La señal de bajar la velocidad o detenerse apunta hacia abajo."],
["Puede rebasarme", "No existe una señal oficial con la mano para eso."],
["Vuelta a la derecha", "Correcto. El brazo afuera con el antebrazo apuntando hacia arriba significa vuelta a la derecha."]],
"", "Vista desde atrás de un auto. El brazo izquierdo del conductor sale por la ventana con el codo doblado y el antebrazo apuntando hacia arriba.");
T("TRN-006", "¿Qué significa esta señal con la mano?", [
["Bajar la velocidad o detenerse", "Correcto. El brazo afuera con el antebrazo apuntando hacia abajo significa bajar la velocidad o detenerse."],
["Vuelta a la izquierda", "La señal de vuelta a la izquierda tiene el brazo extendido recto."],
["Vuelta a la derecha", "La señal de vuelta a la derecha apunta hacia arriba."]],
"Arriba = derecha, recto = izquierda, abajo = bajar la velocidad o detenerse.", "Vista desde atrás de un auto. El brazo izquierdo del conductor sale por la ventana con el codo doblado y el antebrazo apuntando hacia abajo.");
T("TRN-007", "¿Cuándo debe usar señales con la mano y el brazo en vez de las direccionales?", [
["Cuando tenga prisa y quiera señalar más rápido", "Tener prisa no es razón para cambiar la forma de señalar."],
["Cuando sus direccionales no funcionan o no se ven bien", "Correcto. Use señales con la mano y el brazo si sus direccionales no funcionan o si la luz del sol hace difícil verlas."],
["Solo cuando un policía se lo pida", "Debe usarlas siempre que sus direccionales no se puedan ver, no solo cuando se lo pidan."]],
"", "");
T("TRN-008", "Mientras espera para dar vuelta a la izquierda, ¿cómo debe tener las llantas delanteras?", [
["Giradas a la izquierda, listas para avanzar", "Si sus llantas apuntan a la izquierda y alguien lo choca por detrás, podría ser empujado hacia el tráfico de frente."],
["Giradas a la derecha, hacia la acera", "Girarlas a la derecha no ayuda y no es la forma de prepararse para una vuelta a la izquierda."],
["Apuntando derecho hacia adelante", "Correcto. Mantenga las llantas derechas hasta que sea seguro empezar la vuelta. Si un auto lo choca por detrás, no será empujado hacia el tráfico de frente."]],
"", "");
T("TRN-009", "Da vuelta a la izquierda de una calle de doble sentido a otra de doble sentido. ¿En qué carril debe terminar la vuelta?", [
["Carril A", "Correcto. El carril A es el carril izquierdo más cercano al centro de la calle en su sentido. Terminar la vuelta ahí reduce el riesgo de choque."],
["Carril B", "El carril B es el carril derecho. Abrirse hacia el carril lejano puede chocar con otro tráfico que da vuelta."],
["Carril C", "El carril C lleva el tráfico en sentido contrario. Terminar ahí sería manejar en sentido contrario."]],
"", "Intersección. El auto azul (usted) espera abajo para dar vuelta a la izquierda hacia una calle de doble sentido. En esa calle, hay círculos que marcan la C en el carril del sentido contrario, la A en el carril izquierdo más cercano a la línea central en su nuevo sentido y la B en el carril derecho de su nuevo sentido.");
T("TRN-010", "Al dar vuelta a la derecha, ¿dónde debe terminar la vuelta?", [
["En el carril derecho", "Correcto. Empiece y termine la vuelta en el carril más cercano al borde derecho del camino. No se abra hacia otro carril."],
["En el carril que esté libre", "En una calle de doble sentido, el manual dice que no se abra hacia otro carril."],
["En el carril central", "El carril central no es donde normalmente termina una vuelta a la derecha."]],
"", "");
T("TRN-011", "Da vuelta a la izquierda de una calle de doble sentido a una de un solo sentido con tres carriles. ¿Dónde puede terminar la vuelta?", [
["Solo en el carril de la extrema derecha", "Para esta vuelta, el manual permite más que el carril de la extrema derecha."],
["En cualquier carril que esté libre", "Correcto. Empiece desde el carril más cercano al centro. Si hay tres o más carriles en su sentido, puede terminar en cualquier carril libre."],
["Solo en el carril de la extrema izquierda", "Con tres o más carriles, el manual permite cualquier carril libre."]],
"", "");
T("TRN-012", "Está en un carril exclusivo para vuelta a la derecha que no se une a otro carril. La luz para el tráfico que sigue de frente está en rojo. ¿Puede dar vuelta?", [
["No, debe esperar a que la luz de frente cambie a verde", "La luz de los carriles que siguen de frente no controla un carril exclusivo para vuelta a la derecha."],
["Sí, y los peatones deben cederle el paso a usted", "Siempre ceda el paso a los peatones en un cruce peatonal al dar vuelta."],
["Sí, salvo que la señal o luz propia de ese carril diga que no", "Correcto. Un carril exclusivo para vuelta a la derecha le permite dar vuelta aunque el tráfico de frente tenga luz roja, salvo que una luz o señal en la acera derecha de ese carril indique otra cosa. Siempre ceda el paso a los peatones."]],
"", "");
T("TRN-013", "Un carril está marcado solo para autobuses de transporte público. ¿Qué puede hacer con él?", [
["Cruzarlo para dar vuelta a la derecha", "Correcto. Es ilegal manejar, detenerse o estacionarse en el carril de autobuses, pero puede cruzarlo para dar vuelta a la derecha."],
["Manejar en él en horas pico", "Manejar en un carril exclusivo para autobuses es ilegal."],
["Estacionarse en él hasta cinco minutos", "Detenerse o estacionarse en un carril de autobuses es ilegal."]],
"", "");
T("TRN-014", "¿Cuándo puede hacer una vuelta en U en un distrito residencial?", [
["En cualquier momento, siempre que ponga la direccional primero", "Poner la direccional por sí solo no la hace segura ni legal."],
["Solo de noche, cuando hay poco tráfico", "La hora no es la regla. La condición es que no se acerquen vehículos a menos de 200 pies."],
["Cuando no haya ningún vehículo a menos de 200 pies", "Correcto. En un distrito residencial puede hacer una vuelta en U si no se acerca ningún vehículo a menos de 200 pies."],
["Nunca en un distrito residencial", "Las vueltas en U se permiten en distritos residenciales cuando no se acerca ningún vehículo a menos de 200 pies."]],
"", "");
T("TRN-015", "¿Dónde nunca se permite una vuelta en U?", [
["En una intersección con luz verde y sin señal", "Eso se permite salvo que haya una señal de NO U-TURN."],
["En una calle de un solo sentido", "Correcto. Nunca haga una vuelta en U en una calle de un solo sentido. Otros lugares son los cruces de ferrocarril, frente a una estación de bomberos y en distritos comerciales."],
["Cruzando un solo juego de doble línea amarilla", "Las vueltas en U cruzando un solo juego de doble línea amarilla se permiten donde sean legales por lo demás."]],
"", "");
T("TRN-016", "¿Qué vuelta en U es ilegal?", [
["En una intersección con flecha verde y sin señal de NO U-TURN", "Esta vuelta en U se permite: se pueden hacer vueltas en U en una intersección con luz verde o flecha verde salvo que haya una señal de NO U-TURN."],
["En un distrito comercial", "Correcto. Nunca haga una vuelta en U en un distrito comercial (la parte de la ciudad donde están la mayoría de las oficinas y negocios)."],
["En una carretera dividida, por una abertura del divisor", "Esta vuelta en U se permite: puede dar vuelta en U en una carretera dividida donde hay una abertura en el divisor."],
["En un distrito residencial sin ningún vehículo a menos de 200 pies", "Esta vuelta en U se permite: en un distrito residencial puede dar vuelta en U si no se acerca ningún vehículo a menos de 200 pies."]],
"", "");
T("TRN-017", "No puede ver con claridad 200 pies en cada dirección. ¿Puede hacer una vuelta en U?", [
["Sí, si la hace rápido", "La velocidad no compensa la mala visibilidad."],
["Sí, si toca el claxon primero", "Tocar el claxon no la hace legal."],
["No", "Correcto. Nunca haga una vuelta en U cuando no puede ver con claridad 200 pies en cada dirección."]],
"", "");
T("TRN-018", "¿Puede usar la entrada de una estación de bomberos para dar la vuelta?", [
["No, nunca", "Correcto. Nunca haga una vuelta en U frente a una estación de bomberos ni use su entrada para dar la vuelta. Los camiones de bomberos la necesitan libre en todo momento."],
["Sí, si no se ve ningún camión de bomberos", "Los camiones de bomberos pueden salir sin aviso."],
["Solo de noche, cuando la estación está tranquila", "La regla aplica en todo momento; las emergencias también ocurren de noche."]],
"", "");
T("TRN-019", "Antes de cambiar de carril, ¿cuál es la última revisión que debe hacer?", [
["Bajar a 10 mph menos que el tráfico", "No es necesario bajar la velocidad antes de cambiar de carril."],
["Mirar por encima del hombro hacia donde se va a mover", "Correcto. Los espejos tienen puntos ciegos. Ponga la direccional, revise los espejos y luego mire por encima del hombro para asegurarse de que el carril esté libre."],
["Tocar el claxon para avisar a los demás", "El claxon es para evitar choques, no para cambios de carril normales."]],
"", "");
T("TRN-020", "Empezó a dar vuelta en una intersección y se da cuenta de que es la calle equivocada. ¿Qué debe hacer?", [
["Detenerse y retroceder hasta la calle correcta", "Retroceder en una intersección es peligroso."],
["Volver de golpe a su carril original", "Los cambios repentinos de dirección pueden causar choques."],
["Terminar la vuelta y luego dar la vuelta de forma segura", "Correcto. Si empieza una vuelta, termínela. Luego busque un lugar seguro y legal para dar la vuelta. Los cambios de último momento aumentan el riesgo de choque."]],
"", "");
T("TRN-021", "Planea entrar a una entrada de cochera justo después de cruzar una intersección. ¿Cuándo debe señalar?", [
["Cuando casi haya cruzado la intersección", "Correcto. Señale cuando casi haya cruzado la intersección si planea dar vuelta poco después de cruzarla."],
["Antes de entrar a la intersección", "Señalar demasiado pronto puede hacer creer a los conductores de la intersección que usted dará vuelta ahí."],
["No señalar; solo dar vuelta", "Siempre señale antes de dar vuelta para que los demás sepan lo que planea hacer."]],
"", "");
T("TRN-022", "¿Cuál de estas es una buena costumbre al cambiar de carril?", [
["Zigzaguear entre carriles para seguir avanzando", "Zigzaguear aumenta el riesgo de choque."],
["Quedarse en un carril lo más posible", "Correcto. Quédese en un carril lo más posible y no zigzaguee entre el tráfico."],
["Cambiar de carril en medio de una intersección", "Una vez que empieza a cruzar una intersección, siga adelante."]],
"", "");
T("TRN-023", "Al retroceder mientras da vuelta, ¿dónde debe poner la mano en el volante?", [
["A las 9 y a las 3 con ambas manos", "Esa es la posición normal para manejar hacia adelante, pero retroceder dando vuelta es uno de los casos para manejar con una mano."],
["En la posición de las 6", "El manual indica la posición de las 12 para esta situación."],
["En la posición de las 12", "Correcto. Al retroceder dando vuelta, ponga la mano en la posición de las 12 para poder mirar hacia atrás."]],
"", "");
T("FWY-001", "Está en esta rampa de entrada. ¿Cómo debe entrar a la autopista?", [
["Entrar a la velocidad del tráfico o cerca de ella e incorporarse en un espacio seguro", "Correcto. Vaya a la velocidad del tráfico o cerca de ella, use los espejos y la direccional, mire por encima del hombro e incorpórese cuando sea seguro."],
["Detenerse al final de la rampa y esperar un espacio grande", "Detenerse en la rampa hace más difícil incorporarse y puede causar un choque por detrás. No se detenga salvo que sea absolutamente necesario."],
["Entrar despacio para que los conductores de la autopista lo vean", "Entrar despacio obliga al tráfico de la autopista a frenar de golpe."],
["Incorporarse de inmediato aunque no haya espacio", "El tráfico de la autopista tiene el derecho de paso. Incorpórese en un espacio lo bastante grande para su vehículo."]],
"", "Autopista con una rampa de entrada que se une desde abajo a la izquierda. El auto azul (usted) está en la rampa. Otros autos van por la autopista.");
T("FWY-002", "Al incorporarse a una carretera, ¿quién tiene el derecho de paso?", [
["El tráfico de la carretera", "Correcto. El tráfico de la carretera tiene el derecho de paso."],
["El conductor que se incorpora", "El conductor que se incorpora debe encontrar un espacio seguro."],
["El que vaya más rápido", "La velocidad no decide el derecho de paso."]],
"", "");
T("FWY-003", "Después de entrar a una autopista necesita cruzar varios carriles. ¿Cómo debe hacerlo?", [
["Cruzarlos todos de una vez para ahorrar tiempo", "Cruzar varios carriles de una vez puede sorprender a conductores que usted no revisó."],
["Señalar y cruzar un carril a la vez, revisando los puntos ciegos cada vez", "Correcto. Cruce los carriles uno a la vez, revisando cada vez si hay vehículos, motociclistas y ciclistas."],
["Esperar en el acotamiento hasta que los carriles estén vacíos", "El acotamiento no es un área de espera."]],
"", "");
T("FWY-004", "¿Cuándo debe señalar antes de salir de una autopista?", [
["Justo al llegar a la rampa de salida", "Eso les da muy poco aviso a los conductores de atrás."],
["Una milla antes de la salida", "Señalar tan pronto puede confundir a los demás sobre qué salida va a tomar."],
["Unos cinco segundos (aproximadamente 400 pies) antes de la salida", "Correcto. Cuando esté en el carril correcto, señale cinco segundos, unos 400 pies, antes de salir."]],
"", "");
T("FWY-005", "Está por pasarse su salida de la autopista. ¿Qué debe hacer?", [
["Seguir hasta la próxima salida", "Correcto. No cruce líneas continuas ni haga movimientos bruscos. Tome la siguiente salida y regrese de forma segura."],
["Cruzar rápido las líneas continuas para alcanzar la salida", "No cruce líneas continuas al salir."],
["Detenerse y retroceder hasta la salida", "Retroceder en una autopista es extremadamente peligroso."]],
"", "");
T("FWY-006", "¿Aproximadamente cuánto espacio necesita para incorporarse al tráfico en la carretera?", [
["Media cuadra, unos 150 pies", "Media cuadra (unos 150 pies) es la guía para calles de la ciudad."],
["Una cuadra completa, unos 300 pies", "Correcto. En la carretera necesita un espacio de aproximadamente una cuadra completa, unos 300 pies."],
["El largo de dos autos", "Eso es demasiado poco a velocidades de carretera."]],
"", "");
T("FWY-007", "En calles de la ciudad, ¿aproximadamente cuánto espacio necesita para incorporarse, entrar o salir del tráfico?", [
["Una cuadra completa, unos 300 pies", "Esa es la guía para la carretera."],
["El largo de un auto", "Muy poco. Necesita espacio para alcanzar la velocidad del tráfico."],
["Media cuadra, unos 150 pies", "Correcto. En calles de la ciudad necesita aproximadamente media cuadra, unos 150 pies."]],
"", "");
T("FWY-008", "Va detrás de un auto lento acercándose a la cima de esta loma y no puede ver si viene tráfico. ¿Debe rebasar?", [
["No, espere hasta poder ver con claridad adelante", "Correcto. No rebase al acercarse a una loma o curva si no puede ver el tráfico que viene. La loma o curva debe estar al menos a un tercio de milla."],
["Sí, si acelera lo suficiente", "No puede ver el tráfico que viene. La velocidad no lo hace seguro."],
["Sí, si la línea es discontinua", "Aunque rebasar sea legal ahí, no rebase cuando no pueda ver si se acerca otro tráfico."]],
"", "Vista lateral de un camino de dos carriles que sube hacia la cima de una loma. Un auto azul sigue a un auto gris cerca de la cima; no se ve el camino más allá de la cima.");
T("FWY-009", "¿A menos de cuántos pies de una intersección, puente, túnel o cruce de ferrocarril no debe rebasar?", [
["50 pies", "El manual indica una distancia mayor."],
["100 pies", "Correcto. No rebase a menos de 100 pies de una intersección, puente, túnel, cruce de ferrocarril u otra zona peligrosa."],
["500 pies", "La regla del manual es de 100 pies."]],
"", "");
T("FWY-010", "¿Cuándo puede rebasar a otro vehículo por la derecha?", [
["Siempre que haya un acotamiento pavimentado ancho", "Nunca se salga de la parte pavimentada o principal del camino para rebasar."],
["Siempre que el conductor de adelante vaya por debajo del límite", "Ir despacio no es una de las condiciones de la lista."],
["Cuando el conductor de adelante da vuelta a la izquierda y puede rebasar por la derecha con seguridad", "Correcto. Otros casos: una carretera abierta con dos o más carriles en su sentido, o una calle de un solo sentido. Nunca se salga del camino pavimentado para rebasar."]],
"", "");
T("FWY-011", "Otro vehículo lo está rebasando. ¿Qué debe hacer?", [
["Mantener su posición en el carril y su velocidad", "Correcto. Deje que el vehículo lo rebase manteniendo su carril y su velocidad."],
["Acelerar para que no pueda rebasarlo", "Eso es peligroso y deja al otro conductor atrapado en el otro carril."],
["Frenar fuerte para dejarlo entrar", "Frenar de golpe puede causar un choque por detrás."]],
"", "");
T("FWY-012", "¿Cuál es el orden correcto para rebasar en una carretera abierta?", [
["Acelerar, cambiarse de carril y luego señalar", "Señalar después de cambiarse no da ningún aviso a los demás."],
["Señalar, mirar, cambiarse, rebasar y señalar para regresar", "Correcto. Señale, mire por encima del hombro, pásese al carril de rebase, acelere para rebasar y luego señale y regrese a su carril."],
["Tocar el claxon, cambiarse y rebasar sin señalar", "Las señales son obligatorias; el claxon no es parte de un rebase normal."]],
"", "");
T("FWY-013", "Un conductor va muy pegado detrás de usted y quiere ir más rápido. ¿Qué debe hacer?", [
["Frenar para que se aleje", "Frenar para mandar un mensaje puede causar un choque por detrás."],
["Acelerar por encima del límite de velocidad", "Nunca exceda la velocidad para complacer a otro conductor."],
["Moverse a la derecha cuando sea seguro", "Correcto. Cuando otro conductor va muy cerca detrás de usted y quiere ir más rápido, muévase a la derecha."]],
"", "");
T("FWY-014", "Va por la autopista y entran autos desde una rampa. ¿Qué es una buena práctica aunque usted tenga el derecho de paso?", [
["Hacerles espacio cuando pueda hacerlo con seguridad", "Correcto. Haga espacio para los vehículos que entran a la autopista, aunque usted tenga el derecho de paso."],
["Acelerar para que se incorporen detrás de usted", "Acelerar puede cerrarles el paso a los que se incorporan."],
["Detenerse en su carril hasta que entren", "Detenerse en una autopista es peligroso."]],
"", "");
T("FWY-015", "Su auto se descompone y tiene que detenerse en una autopista. ¿Qué recomienda el manual?", [
["Detenerse en el carril y caminar a buscar ayuda", "Detenerse en un carril y caminar por una autopista son ambas cosas peligrosas."],
["Salirse completamente del pavimento y quedarse adentro", "Correcto. Estaciónese completamente fuera del pavimento y quédese en su vehículo con las puertas con seguro hasta que llegue ayuda, salvo que sea más seguro bajarse y alejarse."],
["Dejarlo en el acotamiento toda la noche y volver después", "Un vehículo dejado en una autopista por más de cuatro horas puede ser retirado."]],
"", "");
T("FWY-016", "Su vehículo deja de funcionar en la autopista y tiene que bajarse. ¿Por qué lado debe salir?", [
["Por el lado del conductor, para ver el tráfico que viene", "Bajarse del lado del tráfico lo pone más cerca de los vehículos en movimiento."],
["Por cualquier lado, da igual", "Salir lejos del tráfico es más seguro, y el manual dice que use el lado derecho."],
["Por el lado derecho, lejos del tráfico", "Correcto. Oríllese al acotamiento derecho y baje por el lado derecho, lejos del tráfico. Regrese por el mismo lado."]],
"", "");
T("FWY-017", "Un vehículo dejado en una autopista por más de ¿cuánto tiempo puede ser retirado?", [
["Cuatro horas", "Correcto. Un vehículo detenido, estacionado o dejado en una autopista por más de cuatro horas puede ser retirado."],
["30 minutos", "El manual indica más tiempo."],
["24 horas", "El manual indica menos tiempo."]],
"", "");

T("SPD-001", "En condiciones normales, ¿qué distancia de seguimiento recomienda el manual?", [
["Un segundo", "Un segundo no da suficiente tiempo para reaccionar si el vehículo de adelante frena de golpe."],
["Al menos tres segundos", "Correcto. Use la regla de los tres segundos. Cuando el vehículo de adelante pase un punto fijo, usted debe tardar al menos tres segundos en llegar al mismo punto."],
["El largo de un auto por cada 50 mph", "El manual usa una regla basada en el tiempo: tres segundos."]],
"Cuente “mil uno, mil dos, mil tres” desde el poste.", "Camino de dos carriles. Un auto azul sigue a un vehículo gris. Un poste junto al camino está marcado como “Fixed point” (punto fijo).");
T("SPD-002", "¿Cómo usa el poste de la imagen para revisar su distancia de seguimiento?", [
["Contar cuántos autos caben hasta el poste", "El poste se usa para medir tiempo, no para contar autos."],
["Esperar a pasarlo y luego acelerar", "Acelerar acorta su distancia de seguimiento, lo contrario de lo que busca."],
["Contar los segundos hasta llegar al poste", "Correcto. Empiece a contar cuando el vehículo de adelante pase el poste. Si usted llega en menos de tres segundos, va demasiado cerca. Quédese más atrás."]],
"", "Un auto azul sigue a un vehículo gris, con un poste junto al camino.");
T("SPD-003", "Con lluvia fuerte, ¿qué debe pasar con su distancia de seguimiento?", [
["Aumentarla", "Correcto. La lluvia hace que el camino esté resbaloso. El manual dice que maneje más despacio y deje más espacio entre usted y el vehículo de adelante."],
["Mantenerla igual que en un camino seco", "Un espacio adecuado para el camino seco puede ser muy corto en uno mojado, donde frenar toma más distancia."],
["Reducirla para poder seguir las luces traseras del otro auto", "Ir más cerca reduce su tiempo de reacción y aumenta el riesgo de choque."]],
"Malas condiciones = más segundos de espacio.", "");
T("SPD-004", "Alguien va muy pegado detrás de usted. ¿Qué dice el manual que haga?", [
["Frenar fuerte para que se aleje", "Frenar de golpe puede causar un choque por detrás."],
["Mantener su velocidad, dejar más espacio adelante y dejarlo pasar", "Correcto. Mantenga su rumbo y velocidad y deje más espacio delante de usted para poder frenar poco a poco. Cuando sea seguro, muévase a la derecha para que el que va pegado pueda pasar."],
["Acelerar para alejarse", "Acelerar solo aumenta el riesgo y no resuelve el problema."]],
"", "");
T("SPD-005", "¿Cuándo debe dejar MÁS de la distancia normal de tres segundos?", [
["Solo al seguir a un camión grande en la ciudad", "Más espacio también ayuda con los camiones, pero no es la única situación."],
["Nunca; tres segundos siempre son suficientes", "Tres segundos es el mínimo en condiciones normales. Las malas condiciones requieren más."],
["Detrás de una motocicleta sobre rejillas de metal o grava", "Correcto. Deje más espacio al seguir a motociclistas sobre superficies de metal (rejillas de puentes, vías de tren) o grava. También cuando alguien va pegado detrás de usted, en caminos resbalosos y con neblina."]],
"", "");
T("SPD-006", "Un vehículo se mete muy cerca delante de usted. ¿Qué debe hacer?", [
["Quitar el pie del acelerador para crear espacio", "Correcto. Soltar el acelerador abre espacio entre usted y el vehículo de adelante."],
["Tocar el claxon y hacer cambio de luces", "Eso no crea un espacio seguro y puede empeorar la situación."],
["Acelerar para cerrar el espacio y que nadie más se meta", "Cerrar el espacio elimina su margen de seguridad."]],
"", "");
T("SPD-007", "Tiene que manejar con neblina espesa. ¿Qué es lo correcto?", [
["Seguir de cerca al auto de adelante para ver sus luces traseras", "Ir de cerca no le deja tiempo para detenerse. Mejor aumente su distancia de seguimiento."],
["Manejar despacio, usar luces bajas y aumentar la distancia de seguimiento", "Correcto. Además, asegúrese de poder detenerse dentro del espacio que alcanza a ver."],
["Usar luces altas para ver más lejos", "Las luces altas rebotan en la neblina y causan deslumbramiento."]],
"", "");
T("SPD-008", "¿Qué dice la Ley Básica de Velocidad de California?", [
["Siempre puede manejar al límite de velocidad indicado", "El límite indicado es un máximo. Las condiciones pueden exigir ir más despacio."],
["Puede ir 10 mph por encima del límite para rebasar", "El manual no tiene esa excepción."],
["Nunca puede manejar más rápido de lo que es seguro para las condiciones actuales", "Correcto. Sin importar el límite indicado, su velocidad debe depender del tráfico, la superficie del camino, el clima y las personas en el camino o cerca de él."]],
"", "");
T("SPD-009", "Salvo que se indique otro, ¿cuál es el límite máximo de velocidad en la mayoría de las carreteras de California?", [
["65 mph", "Correcto. Salvo que se indique otro, el límite máximo de velocidad en la mayoría de las carreteras de California es de 65 mph."],
["55 mph", "55 mph aplica a carreteras de dos carriles sin divisor y a vehículos que remolcan tráileres."],
["70 mph", "El manual indica una cifra menor para la mayoría de las carreteras, salvo que se indique otra."]],
"", "");
T("SPD-010", "Salvo que se indique otro, ¿cuál es la velocidad máxima en una carretera de dos carriles sin divisor?", [
["65 mph", "65 mph aplica a la mayoría de las demás carreteras."],
["55 mph", "Correcto. El límite es de 55 mph en una carretera de dos carriles sin divisor, y también para vehículos que remolcan tráileres."],
["45 mph", "El manual indica 55 mph para esta situación."]],
"", "");
T("SPD-011", "Remolca un tráiler en una carretera. Salvo que se indique otro, ¿cuál es su velocidad máxima?", [
["65 mph", "Los vehículos que remolcan tráileres tienen un límite menor."],
["50 mph", "El manual indica 55 mph para vehículos que remolcan tráileres, no 50 mph."],
["55 mph", "Correcto. La velocidad máxima es de 55 mph para vehículos que remolcan tráileres."]],
"", "");
T("SPD-012", "Salvo que se indique un límite menor, ¿cuál es el límite de velocidad a menos de 500 pies de una escuela mientras hay niños afuera o cruzando la calle?", [
["25 mph", "Correcto. El límite es de 25 mph a menos de 500 pies de una escuela mientras hay niños afuera o cruzando. Algunas zonas pueden indicar límites tan bajos como 15 mph."],
["15 mph", "Algunas zonas escolares indican límites tan bajos como 15 mph, pero el límite general es mayor."],
["35 mph", "Eso es demasiado rápido cerca de escuelas con niños presentes."]],
"", "Señal amarillo verdosa de cinco lados con dos niños caminando.");
T("SPD-013", "¿Cuál es el límite de velocidad en un callejón?", [
["25 mph", "25 mph es el límite por defecto en distritos comerciales y residenciales."],
["15 mph", "Correcto. El límite de velocidad en un callejón es de 15 mph."],
["5 mph", "El manual indica 15 mph para callejones."]],
"", "");
T("SPD-014", "¿Cuánto debe reducir su velocidad en un camino mojado?", [
["A la mitad", "Reducir a la mitad es la guía del manual para nieve compactada."],
["A no más de 5 mph", "Esa es la guía para hielo."],
["Entre 5 y 10 mph", "Correcto. En un camino mojado, reduzca la velocidad entre 5 y 10 mph."]],
"", "");
T("SPD-015", "¿Cómo debe ajustar su velocidad sobre nieve compactada?", [
["Reducirla a la mitad", "Correcto. Sobre nieve compactada, reduzca su velocidad a la mitad."],
["Reducirla 5 mph", "Ese cambio es demasiado pequeño para nieve compactada."],
["Mantener la misma velocidad pero frenar antes", "Debe bajar la velocidad, no solo frenar antes."]],
"", "");
T("SPD-016", "Sobre hielo, ¿cuál es la guía de velocidad del manual?", [
["No más de 15 mph", "El manual indica una cifra mucho menor para hielo."],
["No más de 5 mph", "Correcto. Sobre hielo, reduzca su velocidad a no más de 5 mph."],
["Reducir 10 mph", "10 mph menos se parece más a la guía para caminos mojados."]],
"", "");
T("SPD-017", "En una tormenta fuerte no puede ver más de 100 pies adelante. ¿Cuál es la velocidad más alta que se considera segura?", [
["45 mph", "A 45 mph no podría detenerse en 100 pies."],
["El límite de velocidad indicado", "La Ley Básica de Velocidad significa que las condiciones pueden exigir ir más despacio de lo indicado."],
["30 mph", "Correcto. Si no puede ver más allá de 100 pies, no es seguro manejar a más de 30 mph."]],
"", "");
T("SPD-018", "¿Le pueden dar una multa por manejar demasiado despacio?", [
["Sí, si bloquea el flujo normal del tráfico", "Correcto. No debe bloquear el flujo normal y razonable del tráfico por manejar demasiado despacio. Si maneja más rápido o más despacio que el límite, le pueden dar una multa."],
["No, solo exceder la velocidad es ilegal", "Manejar tan despacio que bloquee el flujo normal del tráfico también puede ser un problema."],
["Solo en calles de la ciudad, no en carreteras", "Esta regla no se limita a las calles de la ciudad; también aplica en carreteras."]],
"", "");
T("SPD-019", "¿Qué tan lejos debe mirar hacia adelante en el camino?", [
["Solo al auto de enfrente", "Mirar solo al auto de adelante hace que los peligros más allá lo tomen por sorpresa."],
["Al menos 10 segundos delante de su vehículo", "Correcto. Mantenga la vista en movimiento y mire al menos 10 segundos adelante para tener tiempo de reaccionar."],
["Un segundo adelante", "Un segundo es muy poco tiempo para ver un peligro y reaccionar."]],
"", "");
T("SPD-020", "Un autobús, tranvía o trolebús está detenido en una zona de seguridad. ¿A qué velocidad máxima puede pasarlo?", [
["5 mph", "El manual permite hasta 10 mph, no 5 mph, al pasar un autobús o tranvía detenido en una zona de seguridad."],
["25 mph", "Eso es demasiado rápido cerca de personas que suben y bajan."],
["10 mph", "Correcto. Puede pasar a no más de 10 mph. Nunca maneje a través de una zona de seguridad."]],
"", "");
T("SPD-021", "A 55 mph, ¿más o menos qué distancia necesita un auto de pasajeros promedio para detenerse, comparado con un vehículo grande?", [
["Un auto puede detenerse en unos 300 pies; un vehículo grande puede necesitar hasta unos 400 pies", "Correcto. Los vehículos más pesados y más rápidos tardan más en detenerse, así que no se meta delante de un vehículo grande para luego frenar."],
["Ambos se detienen en unos 100 pies", "A 55 mph se necesita mucha más distancia para detenerse."],
["Un vehículo grande se detiene en menos distancia porque tiene más frenos", "Los vehículos grandes tardan más en detenerse que los autos de pasajeros a la misma velocidad."]],
"", "");
T("PRK-001", "Se estaciona cuesta ARRIBA junto a una acera, como se muestra. ¿Hacia dónde debe girar las llantas delanteras?", [
["Hacia la acera, para que la llanta se apoye en ella", "Girar hacia la acera es lo correcto para estacionarse cuesta ABAJO. Cuesta arriba, las llantas deben apuntar al otro lado para que la llanta se apoye en la acera si el auto se va hacia atrás."],
["En dirección contraria a la acera", "Correcto. Cuesta arriba, gire las llantas delanteras en dirección contraria a la acera (a la izquierda, hacia el centro del camino) y deje que el auto ruede hacia atrás unas pulgadas hasta que la llanta toque suavemente la acera."],
["Derechas, con el freno de estacionamiento puesto", "Con las llantas derechas, el auto puede rodar libremente hacia el tráfico si fallan los frenos. El freno de estacionamiento solo no es suficiente en una pendiente."]],
"CUESTA ARRIBA con acera = llantas en dirección CONTRARIA a la acera.", "Vista lateral de un auto azul estacionado cuesta arriba en una pendiente, junto a una acera.");
T("PRK-002", "Cada auto está estacionado cuesta ARRIBA con la acera a la derecha. ¿Qué auto tiene las llantas bien giradas?", [
["Auto A", "Las llantas del auto A apuntan hacia la acera. Esa es la posición para cuesta abajo. Cuesta arriba, si el auto rodara hacia atrás, se alejaría de la acera hacia el tráfico."],
["Auto B", "Con las llantas derechas no se aprovecha la acera para evitar que el auto ruede."],
["Auto C", "Correcto. Cuesta arriba con acera, gire las llantas en dirección contraria a la acera (a la izquierda). Si el auto rueda hacia atrás, la parte trasera de la llanta delantera se atora en la acera."]],
"", "Vista desde arriba de tres autos estacionados, cada uno con la acera a su derecha. El auto A tiene las llantas delanteras giradas a la derecha, hacia la acera. El auto B tiene las llantas delanteras derechas. El auto C tiene las llantas delanteras giradas a la izquierda, en dirección contraria a la acera.");
T("PRK-003", "Se estaciona cuesta ABAJO junto a una acera. ¿Hacia dónde debe girar las llantas delanteras?", [
["En dirección contraria a la acera", "Girar en dirección contraria a la acera es la regla para cuesta arriba. Cuesta abajo, eso dejaría que el auto rodara hacia la calle."],
["Derechas", "Con las llantas derechas, el auto puede rodar cuesta abajo si fallan los frenos."],
["Hacia la acera (a la derecha)", "Correcto. Cuesta abajo, gire las llantas delanteras hacia la acera, o hacia la derecha, hacia la orilla del camino."]],
"Cuesta abajo: gire hacia la acera, para que el auto ruede hacia ella y no hacia la calle.", "Vista lateral de un auto azul estacionado cuesta abajo en una pendiente, junto a una acera.");
T("PRK-004", "Cada auto está estacionado cuesta ABAJO con la acera a la derecha. ¿Qué auto tiene las llantas bien giradas?", [
["Auto A", "Correcto. Cuesta abajo, gire las llantas delanteras hacia la acera (a la derecha). Si el auto rueda hacia adelante, la llanta choca contra la acera."],
["Auto B", "Con las llantas derechas no hay protección si el auto empieza a rodar."],
["Auto C", "Girar en dirección contraria a la acera es la posición para cuesta arriba con acera. Cuesta abajo, dirigiría el auto hacia la calle."]],
"", "Vista desde arriba de tres autos, cada uno con la acera a su derecha. Auto A con las llantas giradas a la derecha hacia la acera, auto B con las llantas derechas, auto C con las llantas giradas a la izquierda, en dirección contraria a la acera.");
T("PRK-005", "Se estaciona cuesta ARRIBA en un camino SIN acera. ¿Hacia dónde debe girar las llantas delanteras?", [
["A la derecha, para que el auto ruede lejos del centro del camino", "Correcto. Cuesta arriba o cuesta abajo, sin acera, gire las llantas a la derecha para que el auto ruede lejos del centro del camino si fallan los frenos."],
["A la izquierda, hacia el centro del camino", "Sin acera que detenga la llanta, girar a la izquierda dejaría que el auto rodara hacia atrás al centro del camino."],
["Derechas", "Con las llantas derechas, el auto no se desvía del tráfico si rueda."]],
"¿Sin acera? Siempre gire a la DERECHA, hacia el acotamiento.", "Vista lateral de un auto azul cuesta arriba en una pendiente con acotamiento de tierra y sin acera.");
T("PRK-006", "Se estaciona cuesta ABAJO sin acera. ¿Hacia dónde deben apuntar las llantas delanteras?", [
["A la izquierda", "A la izquierda, un auto que rueda iría hacia el centro del camino."],
["A la derecha, hacia la orilla del camino", "Correcto. Sin acera, gire las llantas a la derecha para que el auto ruede lejos del centro del camino si fallan los frenos."],
["No importa si pone el freno de estacionamiento", "El equipo puede fallar. El manual dice que ponga el freno Y gire las llantas."]],
"", "Vista lateral de un auto azul cuesta abajo en una pendiente con acotamiento de tierra y sin acera.");
T("PRK-007", "¿Cuál es la ÚNICA situación de estacionamiento en pendiente en la que gira las llantas delanteras a la IZQUIERDA (lejos de la orilla del camino)?", [
["Cuesta abajo con acera", "Cuesta abajo con acera, las llantas se giran hacia la acera (a la derecha)."],
["Cuesta arriba con acera", "Correcto. Cuesta arriba junto a una acera es el único caso en que gira en dirección contraria a la acera, para que la llanta se apoye en ella."],
["Cuesta arriba sin acera", "Sin acera, gire a la derecha, tanto cuesta arriba como cuesta abajo."],
["Cuesta abajo sin acera", "Sin acera, las llantas se giran a la derecha."]],
"Solo “cuesta arriba + acera” gira a la izquierda. Todo lo demás gira a la derecha.", "");
T("PRK-008", "Además de girar las llantas, ¿qué más debe hacer al estacionarse en una pendiente?", [
["Dejar el motor encendido en neutral", "Dejar el auto encendido en neutral permite que ruede. Ponga el freno de estacionamiento y déjelo en park."],
["Encender las luces intermitentes mientras está estacionado", "Las luces intermitentes no son parte del estacionamiento normal en pendiente."],
["Poner el freno de estacionamiento y dejarlo en park", "Correcto. Su vehículo podría rodar por una falla del equipo, así que ponga el freno de estacionamiento y déjelo en park (o en una velocidad si es transmisión manual), además de girar las llantas."]],
"", "");
T("PRK-009", "Se estaciona en una entrada de cochera con pendiente. ¿Cómo debe girar las llantas?", [
["De modo que el vehículo no ruede hacia la calle", "Correcto. En una entrada con pendiente, gire las llantas para que el auto no ruede hacia la calle, déjelo en park y ponga el freno de estacionamiento."],
["Siempre a la izquierda", "La dirección depende de la entrada. El objetivo es que el auto no llegue a la calle."],
["Derechas, porque las entradas son propiedad privada", "Un auto que rueda puede terminar en la calle de todas formas."]],
"", "");
T("PRK-010", "¿Qué significa una acera pintada de este color?", [
["Zona de carga para mercancía", "Las zonas de carga de mercancía son aceras amarillas, no rojas."],
["Prohibido detenerse, quedarse parado o estacionarse", "Correcto. Una acera roja significa que no puede detenerse, quedarse parado ni estacionarse. Los autobuses pueden detenerse en una zona roja marcada solo para autobuses."],
["Estacionamiento por tiempo limitado", "El estacionamiento por tiempo limitado se marca en verde."]],
"", "Acera pintada de rojo entre una banqueta y una calle.");
T("PRK-011", "¿Qué puede hacer en una acera pintada de este color?", [
["Estacionarse hasta una hora", "El estacionamiento por tiempo limitado es la acera verde."],
["Cargar y descargar mercancía", "La carga de mercancía es la acera amarilla."],
["Recoger o dejar pasajeros", "Correcto. Una acera blanca es solo para recoger y dejar pasajeros."]],
"", "Acera pintada de blanco entre una banqueta y una calle.");
T("PRK-012", "¿Qué significa una acera pintada de este color?", [
["Estacionamiento por tiempo limitado", "Correcto. Una acera verde significa que puede estacionarse por tiempo limitado. El límite de tiempo puede estar en señales o pintado en la acera."],
["Solo para cargar vehículos eléctricos", "Los espacios para cargar vehículos eléctricos se marcan con señales; una acera verde significa estacionamiento por tiempo limitado."],
["Prohibido estacionarse en todo momento", "La prohibición de detenerse o estacionarse se indica con una acera roja, no verde."]],
"", "Acera pintada de verde entre una banqueta y una calle.");
T("PRK-013", "¿Para qué es una acera pintada de este color?", [
["Solo para estacionamiento de personas con discapacidad", "El estacionamiento para personas con discapacidad se indica con una acera azul."],
["Cargar pasajeros y mercancía", "Correcto. Las aceras amarillas son para subir y bajar pasajeros y cargar y descargar mercancía. No se detenga más del tiempo indicado. Los conductores de vehículos no comerciales normalmente deben quedarse con el vehículo."],
["Solo vehículos de emergencia, en todo momento", "Una acera roja significa prohibido detenerse o estacionarse. La amarilla es para carga."]],
"", "Acera pintada de amarillo entre una banqueta y una calle.");
T("PRK-014", "¿Quién puede estacionarse en una acera pintada de este color?", [
["Cualquiera, hasta 15 minutos", "No hay excepción de tiempo corto para conductores sin placa o letrero especial."],
["Camiones de reparto que hacen paradas cortas", "Los repartos usan las aceras amarillas de carga, no las azules."],
["Conductores con letrero o placa para personas con discapacidad", "Correcto. Las aceras azules son para una persona con discapacidad, o para quien la lleva, que muestre un letrero especial o una placa especial."]],
"", "Acera pintada de azul entre una banqueta y una calle.");
T("PRK-015", "¿Qué tan cerca de un hidrante puede estacionarse?", [
["No a menos de 15 pies", "Correcto. Nunca se estacione a menos de 15 pies de un hidrante o de la entrada de una estación de bomberos."],
["No a menos de 5 pies", "Cinco pies es demasiado cerca. Los bomberos necesitan espacio, por eso la regla del manual es de 15 pies."],
["A cualquier distancia, si se queda en el auto", "Quedarse en el auto no cambia la regla."]],
"", "");
T("PRK-016", "¿Qué tan cerca de un cruce peatonal puede estacionarse (sin extensión de acera)?", [
["No a menos de 5 pies", "Estacionarse tan cerca tapa la vista de los peatones."],
["No a menos de 20 pies", "Correcto. Nunca se estacione a menos de 20 pies de un cruce peatonal marcado o sin marcar, o a menos de 15 pies donde haya una extensión de acera."],
["Justo hasta las líneas del cruce", "Eso es demasiado cerca. Los autos estacionados pueden ocultar a las personas que cruzan."]],
"", "");
T("PRK-017", "¿Dónde NO se permite estacionarse?", [
["Junto a una acera verde dentro del límite de tiempo", "El estacionamiento por tiempo limitado en una acera verde está permitido."],
["Del lado derecho de una calle de doble sentido, en el sentido del tráfico", "Esa es la forma normal de estacionarse en la calle."],
["A menos de tres pies de una rampa de banqueta para personas con discapacidad", "Correcto. Nunca se estacione a menos de tres pies de una rampa de banqueta para personas con discapacidad, ni en el área con rayas diagonales junto a un espacio para personas con discapacidad."]],
"", "");
T("PRK-018", "¿Cuál de estos es un lugar ilegal para estacionarse?", [
["En doble fila junto a otro auto estacionado", "Correcto. Estacionarse en doble fila es ilegal. También lo es estacionarse en un cruce peatonal, en la banqueta, frente a una entrada de cochera, o en un túnel o puente salvo que las señales lo permitan."],
["En un espacio marcado del estacionamiento de una tienda", "Los espacios marcados son para estacionarse."],
["En una acera blanca mientras deja a un pasajero", "Las paradas breves para dejar pasajeros se permiten en las aceras blancas."]],
"", "");
T("PRK-019", "¿Puede estacionarse en un espacio reservado para cargar o abastecer vehículos de cero emisiones?", [
["Sí, si todos los demás espacios están llenos", "La falta de otros espacios no es una excepción."],
["Solo si maneja un vehículo de cero emisiones", "Correcto. Nunca se estacione en un espacio designado para vehículos de cero emisiones a menos que maneje uno."],
["Sí, hasta 30 minutos", "El manual no tiene ninguna excepción por tiempo."]],
"", "");
T("PRK-020", "Al estacionarse en paralelo, ¿qué tan cerca de la acera debe quedar su vehículo?", [
["A menos de 3 pies", "Tres pies es demasiado lejos de la acera y deja su auto metido en el carril."],
["Tocando la acera con ambas llantas", "Solo necesita quedar a menos de 18 pulgadas; no hace falta rozar la acera."],
["A menos de 18 pulgadas", "Correcto. Su vehículo debe quedar paralelo y a menos de 18 pulgadas de la acera."]],
"", "");
T("PRK-021", "Al buscar un espacio para estacionarse en paralelo, ¿de qué tamaño debe ser?", [
["Al menos tres pies más largo que su vehículo", "Correcto. Busque un espacio al menos tres pies más largo que su vehículo."],
["Exactamente del largo de su vehículo", "Necesita espacio extra para maniobrar."],
["El doble del largo de su vehículo", "No se necesita tanto espacio."]],
"", "");
T("PRK-022", "Acaba de estacionarse en paralelo en una calle con mucho tráfico. ¿Qué debe hacer antes de abrir la puerta?", [
["Abrirla rápido para no estar mucho tiempo en el tráfico", "Abrir la puerta sin mirar puede golpear a un ciclista o motociclista."],
["Mirar con cuidado si pasan vehículos, bicicletas y motocicletas, y bajar cuando sea seguro", "Correcto. Revise su punto ciego y sus espejos antes de abrir la puerta."],
["Tocar el claxon primero para avisar al tráfico", "Tocar el claxon no sustituye mirar."]],
"", "");
T("PRK-023", "¿Puede estacionarse del lado contrario de la calle (de frente al tráfico)?", [
["Sí, si la calle está tranquila y no hay nadie estacionado", "La cantidad de tráfico no cambia la regla."],
["Sí, de noche cuando hay poco tráfico", "La hora del día no es una de las excepciones."],
["No, salvo en casos especiales como una emergencia", "Correcto. No se estacione del lado contrario de la calle salvo en una emergencia, cuando un agente del orden le pida detenerse, o donde se permita específicamente."]],
"", "");

T("SHR-001", "No puede cambiarse de carril para rebasar a este ciclista. ¿Cuánto espacio debe dejar al rebasarlo?", [
["Al menos tres pies", "Correcto. Deje al menos tres pies entre su vehículo y el ciclista. Si no puede dejar tres pies, no lo rebase hasta que pueda."],
["Al menos un pie, a baja velocidad", "Un pie es demasiado cerca. Un pequeño tambaleo podría causar un choque."],
["Al menos diez pies en todos los casos", "Más espacio es bueno cuando lo hay, pero el mínimo del manual es de tres pies."]],
"3 pies para bicicletas: más o menos el largo de una regla de una yarda.", "Camino de dos carriles. Un auto azul se acerca a un ciclista que va cerca de la orilla derecha. Una línea roja corta entre ellos marca el espacio en cuestión.");
T("SHR-002", "¿Qué ciclistas deben usar casco?", [
["Solo los que van por autopistas", "La regla del casco depende de la edad, no del lugar."],
["Los ciclistas menores de 18 años", "Correcto. Los ciclistas menores de 18 años deben usar casco."],
["Todos los ciclistas, de cualquier edad", "El manual indica la obligación para ciclistas menores de 18 años."]],
"", "");
T("SHR-003", "¿En qué sentido deben circular los ciclistas en el camino?", [
["De frente al tráfico, para ver los autos que vienen", "Circular contra el tráfico no está permitido y es más peligroso."],
["En cualquier sentido", "Los ciclistas deben circular en el mismo sentido que el tráfico."],
["En el mismo sentido que el tráfico", "Correcto. Los ciclistas deben circular en el mismo sentido que el tráfico."]],
"", "");
T("SHR-004", "Un ciclista que va más lento que el tráfico se mueve hacia el centro del carril. ¿Cuándo puede hacerlo legalmente?", [
["Al evitar un peligro o al dar vuelta a la izquierda", "Correcto. Las excepciones incluyen evitar un peligro, prepararse para dar vuelta a la izquierda, rebasar, acercarse a una vuelta a la derecha y carriles demasiado angostos para compartirlos con seguridad. Sígalo a una distancia segura."],
["Nunca; siempre debe ir por la orilla derecha", "Hay varias excepciones a circular por la orilla derecha."],
["Solo cuando van en grupo", "Ir en grupo no es una de las excepciones de la lista."]],
"", "");
T("SHR-005", "De noche, una bicicleta debe tener una lámpara delantera con luz blanca visible desde ¿qué distancia?", [
["50 pies", "El manual exige que se vea desde una distancia mucho mayor."],
["300 pies", "Correcto. La lámpara delantera debe dar una luz blanca visible desde 300 pies."],
["1,000 pies", "El manual indica 300 pies para la lámpara delantera."]],
"", "");
T("SHR-006", "¿Qué equipo trasero debe tener una bicicleta de noche?", [
["Una luz blanca visible desde 100 pies", "Las luces blancas van adelante."],
["Nada; el equipo trasero es opcional", "De noche se exige equipo trasero rojo."],
["Un reflector rojo o una luz roja", "Correcto. De noche se exige un reflector rojo trasero integrado, una luz roja fija o una luz roja intermitente visible desde 500 pies."]],
"", "");
T("SHR-007", "¿Qué distancia de seguimiento debe mantener detrás de una motocicleta?", [
["Al menos tres segundos", "Correcto. Deje una distancia segura de tres segundos para no golpear a un motociclista que frene de golpe o se caiga."],
["Un segundo, porque las motocicletas son pequeñas", "Ser pequeñas no significa que frenen más lento. Las motocicletas pueden detenerse rápido o caerse."],
["El largo de dos autos", "El manual usa la regla de los tres segundos."]],
"", "");
T("SHR-008", "¿Es legal en California que las motocicletas compartan carril con otros vehículos (lane splitting)?", [
["No, siempre es ilegal", "El manual dice que compartir carril con motocicletas es legal."],
["Sí, es legal", "Correcto. Circular entre carriles es legal. Siempre que pueda, deje a la motocicleta el carril completo, y muévase a un lado de su carril para darle más espacio."],
["Solo en calles de la ciudad", "El manual no lo limita de esa forma."]],
"", "");
T("SHR-009", "¿Qué es correcto sobre rebasar a una motocicleta?", [
["Puede compartir el carril de la motocicleta para rebasarla", "Nunca intente rebasar a una motocicleta en el mismo carril que usted."],
["Rebasarla por el acotamiento derecho", "No se permite manejar por el acotamiento para rebasar."],
["Nunca intente rebasar a una motocicleta en el mismo carril que usted", "Correcto. Una motocicleta tiene derecho al carril completo. Rebásela usando otro carril cuando sea seguro."]],
"", "");
T("SHR-010", "¿Por qué es fácil no ver una motocicleta al cambiar de carril?", [
["Son más pequeñas y desaparecen fácilmente en los puntos ciegos", "Correcto. Revise con cuidado los espejos y los puntos ciegos por si hay motocicletas."],
["Siempre van más lento que los autos", "Las motocicletas pueden ir a cualquier velocidad; el problema es su tamaño."],
["No usan faros", "El problema de visibilidad es principalmente su tamaño pequeño."]],
"", "");
T("SHR-011", "Un peatón cruza la calle fuera de un cruce peatonal. ¿Qué debe hacer?", [
["Seguir, porque está cruzando ilegalmente", "Aunque alguien cruce en un lugar indebido, de todos modos debe evitar golpearlo."],
["Bajar la velocidad o detenerse para dejarlo cruzar", "Correcto. Con o sin cruce peatonal, tenga precaución, baje la velocidad o deténgase para que el peatón termine de cruzar con seguridad."],
["Tocar el claxon hasta que se quite", "Tocar el claxon puede asustar a las personas, sobre todo a personas mayores, personas con niños o con discapacidad."]],
"", "");
T("SHR-012", "¿Por qué debe tener cuidado extra cerca de peatones ciegos si maneja un vehículo híbrido o eléctrico?", [
["Estos vehículos no pueden frenar rápido", "La capacidad de frenado no es la preocupación principal aquí."],
["Estos vehículos tienen espejos más pequeños", "La preocupación es el sonido, no los espejos."],
["Los peatones ciegos se guían por el sonido", "Correcto. Los vehículos híbridos y eléctricos pueden ser muy silenciosos, y los peatones ciegos dependen del sonido para saber que hay un vehículo cerca. Tenga especial cuidado al dar vuelta o retroceder."]],
"", "");
T("SHR-013", "Los peatones que usan perro guía o bastón blanco tienen el derecho de paso:", [
["En todo momento", "Correcto. Los peatones con perro guía o bastón blanco tienen el derecho de paso en todo momento."],
["Solo en cruces peatonales marcados", "Su derecho de paso no se limita a los cruces marcados."],
["Solo cuando la señal de WALK está encendida", "Su derecho de paso aplica en todo momento."]],
"", "");
T("SHR-014", "Ve animales o ganado cerca del camino. ¿Qué debe hacer?", [
["Tocar el claxon para que los animales se quiten del camino", "Es ilegal asustar a propósito a caballos o ganado, y un animal asustado puede atravesarse en su camino."],
["Bajar la velocidad o detenerse, y seguir las indicaciones de quien los cuida", "Correcto. Baje la velocidad o deténgase, avance cuando sea seguro y siga las indicaciones de la persona a cargo de los animales."],
["Acelerar para pasar rápido junto a los animales", "Pasar rápido junto a los animales puede asustarlos y hacer que se atraviesen."]],
"", "");
T("SHR-015", "Los vehículos eléctricos de vecindario (NEV) y los vehículos de baja velocidad (LSV) no pueden circular en caminos con límites de velocidad mayores de:", [
["25 mph", "25 mph es su velocidad máxima, no el límite del camino."],
["55 mph", "El manual indica un límite menor."],
["35 mph", "Correcto. Los NEV y LSV llegan a un máximo de 25 mph y no pueden circular en caminos con límite mayor de 35 mph."]],
"", "");
T("SHR-016", "En un camino de dos carriles, viene un auto de frente y hay un ciclista adelante a su derecha. ¿Cuál es el plan más seguro?", [
["Bajar la velocidad y enfrentar un peligro a la vez", "Correcto. Baje la velocidad y deje pasar al vehículo que viene de frente. Luego muévase a la izquierda para darle al ciclista bastante espacio (al menos tres pies). Enfrente un peligro a la vez."],
["Pasar entre los dos al mismo tiempo, con cuidado", "Meterse entre dos peligros no deja margen de error."],
["Tocar el claxon para que el ciclista se haga más a la derecha", "Tocar el claxon puede asustar al ciclista y empujarlo hacia autos estacionados o la orilla."]],
"", "");
T("SHR-017", "¿Cuál de estas cosas pueden hacer los ciclistas?", [
["Circular por cualquier autopista", "Solo pueden circular en ciertos tramos de autopista donde no hay ruta alterna y no está prohibido."],
["Moverse a la izquierda para evitar peligros como autos estacionados o basura", "Correcto. Los ciclistas pueden moverse a la izquierda para evitar peligros, así que déles espacio."],
["Circular contra el tráfico en calles de doble sentido", "Los ciclistas deben circular en el mismo sentido que el tráfico."]],
"", "");
T("SHR-018", "¿Qué grupo puede necesitar más tiempo para cruzar una calle?", [
["Solo quienes salen a trotar o correr", "El manual menciona varios grupos que pueden necesitar más tiempo, no a quienes trotan."],
["Nadie, porque los semáforos dan suficiente tiempo", "Algunas personas necesitan más tiempo que otras, sin importar los semáforos."],
["Las personas mayores y las personas con discapacidad", "Correcto. Las personas mayores, las personas con niños pequeños y las personas con discapacidad pueden necesitar más tiempo. Siempre dé a los peatones suficiente tiempo para cruzar."]],
"", "");
T("EMV-001", "El autobús escolar de la imagen tiene las luces rojas intermitentes encendidas. Usted se acerca en sentido contrario en este camino de dos carriles. ¿Qué debe hacer?", [
["Detenerse hasta que las luces dejen de parpadear", "Correcto. Cuando un autobús escolar tiene las luces rojas intermitentes encendidas, deténgase en cualquiera de los dos sentidos hasta que los niños hayan cruzado con seguridad y las luces dejen de parpadear."],
["Bajar la velocidad y pasar con cuidado", "En un camino como este debe detenerse en cualquiera de los dos sentidos."],
["Seguir, ya que el autobús está en el otro carril", "En un camino de dos carriles sin divisor, el tráfico de ambos sentidos debe detenerse."]],
"", "Camino de dos carriles. Un autobús escolar está detenido en el carril contrario con las luces rojas parpadeando y su brazo de alto extendido. El auto azul (usted) se acerca por el otro carril.");
T("EMV-002", "El autobús escolar con luces rojas intermitentes está del otro lado de esta carretera dividida. ¿Necesita detenerse?", [
["Sí, todo el tráfico de ambos sentidos siempre debe detenerse", "Hay una excepción para carreteras divididas o de varios carriles."],
["No, en una carretera dividida o de varios carriles no", "Correcto. Si el autobús está del otro lado de una carretera dividida o de varios carriles (dos o más carriles en cada sentido), no necesita detenerse. Esté atento por si hay niños."],
["Solo si ve niños cerca del autobús", "La regla depende del tipo de camino, no de si usted ve niños."]],
"", "Carretera dividida con dos carriles en cada sentido y un camellón. Un autobús escolar con luces rojas intermitentes está detenido del otro lado del camellón. El auto azul (usted) está del lado cercano.");
T("EMV-003", "Un autobús escolar adelante tiene luces AMARILLAS intermitentes. ¿Qué significa esto?", [
["Puede rebasar rápido al autobús antes de que se detenga", "Acelerar cerca de un autobús que está por subir o bajar niños es peligroso."],
["El autobús terminó de subir niños", "Las luces amarillas van antes de la parada, no después."],
["El autobús se prepara para detenerse; baje la velocidad y prepárese para detenerse", "Correcto. Las luces amarillas intermitentes le advierten que baje la velocidad y se prepare para detenerse."]],
"", "");
T("EMV-004", "Si no se detiene ante un autobús escolar con luces rojas intermitentes, ¿qué puede pasar?", [
["Una multa de hasta $1,000 y una posible suspensión", "Correcto. Le pueden multar con hasta $1,000, y su privilegio de manejar podría suspenderse por un año."],
["Solo una carta de advertencia, si es la primera vez", "El manual indica sanciones graves, no una advertencia."],
["Nada si ningún niño salió lastimado", "No detenerse es una infracción aunque nadie salga lastimado."]],
"", "");
T("EMV-005", "Un vehículo de emergencia con sirena y luces rojas se acerca por detrás de usted. ¿Qué debe hacer?", [
["Acelerar para mantenerse adelante", "Acelerar no despeja el camino y arriesga un choque."],
["Orillarse a la derecha y detenerse", "Correcto. Ceda el paso orillándose al borde derecho del camino y deteniéndose hasta que pase el vehículo de emergencia."],
["Detenerse de inmediato en su carril", "Detenerse en su carril puede bloquear al vehículo de emergencia. Primero muévase a la orilla derecha."]],
"", "Camino de dos carriles. Un camión de bomberos con luces intermitentes se acerca por detrás del auto azul (usted).");
T("EMV-006", "Ya está dentro de una intersección cuando ve que viene un vehículo de emergencia. ¿Qué debe hacer?", [
["Detenerse justo donde está, dentro de la intersección", "Detenerse dentro de la intersección puede bloquear al vehículo de emergencia y al demás tráfico."],
["Retroceder con cuidado para salir de la intersección", "Retroceder es peligroso y lento."],
["Salir de la intersección y luego orillarse a la derecha y detenerse", "Correcto. Siga a través de la intersección, luego oríllese a la derecha en cuanto sea seguro y deténgase."]],
"", "");
T("EMV-007", "Es ilegal seguir a menos de ¿cuántos pies a un camión de bomberos, patrulla o ambulancia con la sirena o las luces intermitentes encendidas?", [
["300 pies", "Correcto. No siga a menos de 300 pies a un vehículo de emergencia con la sirena o las luces intermitentes encendidas."],
["100 pies", "El manual indica una distancia mayor."],
["50 pies", "50 pies es demasiado cerca. El manual indica 300 pies."]],
"", "");
T("EMV-008", "Se acerca a una grúa detenida en el acotamiento con luces ámbar intermitentes. ¿Qué debe hacer?", [
["Nada especial; no es un vehículo de emergencia", "Las grúas con luces ámbar intermitentes están incluidas en la regla de cambiarse de carril."],
["Cambiarse de carril y bajar la velocidad", "Correcto. Cámbiese de carril y baje la velocidad ante vehículos de emergencia detenidos, grúas con luces ámbar intermitentes y vehículos de trabajo en el camino detenidos con luces de advertencia."],
["Detenerse detrás de ella", "No necesita detenerse; cámbiese de carril y baje la velocidad."]],
"", "");
T("EMV-009", "Un bombero le da una indicación que contradice un semáforo. ¿Qué debe hacer?", [
["Seguir el semáforo", "En una emergencia, las indicaciones de los agentes y los bomberos tienen prioridad."],
["Ignorar a los dos y manejar con cuidado", "Debe seguir las indicaciones del bombero."],
["Seguir la indicación del bombero", "Correcto. Obedezca cualquier indicación de un agente del orden o un bombero, aunque contradiga señales, semáforos o leyes."]],
"", "");
T("EMV-010", "¿Qué puede pasar si maneja al lugar de un incendio o choque solo para mirar?", [
["Lo pueden arrestar", "Correcto. Lo pueden arrestar por manejar al lugar de un incendio, choque u otro desastre, porque estorba a los bomberos, paramédicos y personal de rescate."],
["Nada, porque es un camino público", "Estorbar al personal de emergencia puede ser un delito aunque sea en un camino público."],
["Le pedirán que ayude", "Los equipos de emergencia no necesitan curiosos; usted estorbaría."]],
"", "");
T("EMV-011", "Ve a un guardia de cruce cerca de una escuela. ¿Qué debe hacer?", [
["Seguirlo solo si no hay semáforo", "Sus indicaciones deben seguirse en todo momento."],
["Obedecer sus indicaciones en todo momento", "Correcto. Obedezca siempre a las patrullas escolares de seguridad y a los guardias de cruce."],
["Tomar sus indicaciones solo como consejos", "Las indicaciones de los guardias de cruce deben obedecerse."]],
"", "");
T("EMV-012", "Una patrulla enciende sus luces de emergencia y zigzaguea despacio por todos los carriles delante de usted (una pausa de tráfico). ¿Qué debe hacer?", [
["Rebasar a la patrulla con cuidado por la derecha", "No rebase a la patrulla durante una pausa de tráfico."],
["Frenar de golpe en su carril, donde está", "Frenar de golpe puede causar choques. Baje la velocidad poco a poco."],
["Encender las intermitentes, bajar la velocidad poco a poco y quedarse detrás del agente", "Correcto. Encienda las luces intermitentes, baje poco a poco a la velocidad del agente y no rebase a la patrulla hasta que el agente apague las luces de emergencia."]],
"", "");
T("EMV-013", "Un agente del orden le indica que se orille mientras va en el carril compartido (HOV). ¿Qué debe hacer?", [
["Poner la direccional derecha y pasarse al acotamiento derecho", "Correcto. Pásese por completo al acotamiento derecho, aunque esté en el carril compartido/HOV. Deténgase en un lugar bien iluminado cuando sea posible."],
["Detenerse ahí mismo en el carril HOV", "Detenerse en un carril de circulación es peligroso."],
["Orillarse al acotamiento izquierdo junto al carril HOV", "El manual dice que se pase al acotamiento derecho."]],
"", "");
T("EMV-014", "Durante una parada de tránsito, ¿qué recomienda el manual antes de que el agente llegue a su auto?", [
["Bajarse y caminar hacia el agente", "Quédese dentro de su vehículo salvo que el agente le pida bajarse."],
["Bajar la ventana, apagar el radio y mantener las manos a la vista", "Correcto. El conductor y los pasajeros deben poner las manos a la vista."],
["Buscar sus documentos debajo del asiento", "Moverse buscando cosas puede malinterpretarse. Mantenga las manos visibles hasta que se lo pidan."]],
"", "");
T("TRK-001", "Va manejando junto al remolque del camión, como se muestra. ¿Qué es cierto?", [
["El conductor del camión siempre lo puede ver en sus espejos grandes", "Los vehículos grandes tienen puntos ciegos grandes, o “No Zones”, donde su auto puede desaparecer de la vista."],
["Ir junto al camión es lo más seguro porque lo protege del viento", "Manejar junto a un vehículo grande le dificulta al conductor esquivar peligros."],
["Puede estar en el punto ciego del camión; rebáselo o quédese atrás en vez de ir a su lado", "Correcto. Si usted no puede ver los espejos laterales del camión, el conductor no puede verlo a usted. No maneje junto a vehículos grandes más tiempo del necesario."]],
"", "Camino de varios carriles. Un camión avanza hacia la derecha en el carril de arriba. El auto azul (usted) va en el carril de abajo, junto a la mitad del remolque del camión.");
T("TRK-002", "¿Cómo puede saber que probablemente el conductor de un camión no lo ve?", [
["Si usted no puede ver los espejos laterales del camión", "Correcto. Si usted no puede ver los espejos laterales del camión, el conductor del camión no puede verlo a usted."],
["Si el camión va más lento que usted", "La velocidad no indica si usted es visible."],
["Si sus faros están apagados", "Los faros ayudan, pero la prueba clave es si usted puede ver los espejos del camión."]],
"", "");
T("TRK-003", "¿Por qué lado debe rebasar a un camión grande?", [
["Por la derecha", "El manual dice que rebase por la izquierda."],
["Por la izquierda", "Correcto. Siempre rebase a un vehículo grande por la izquierda y luego adelántese."],
["Por cualquier lado", "El manual especifica el lado izquierdo."]],
"", "");
T("TRK-004", "Un camión grande adelante tiene la direccional derecha puesta pero primero se mueve a la izquierda. ¿Por qué?", [
["El conductor cambió de opinión sobre la vuelta", "No suponga eso. Los vehículos largos suelen moverse primero hacia el lado contrario para tener espacio."],
["El camión se prepara para detenerse", "Abrirse es parte de dar la vuelta, no de detenerse. Fíjese en sus direccionales."],
["Necesita abrirse para poder dar la vuelta", "Correcto. Las llantas traseras de un vehículo largo siguen un camino más corto que las delanteras, así que los camiones suelen abrirse. Fíjese en sus direccionales y no se meta por el lado hacia donde va a dar vuelta."]],
"", "");
T("TRK-005", "¿Cuál es una costumbre segura cerca de camiones grandes?", [
["Evitar meterse delante de ellos y frenar de golpe", "Correcto. Un vehículo grande no puede detenerse tan rápido como un auto."],
["Cambiarse de carril justo delante de ellos para llegar a su salida", "Meterse delante de un camión le deja sin espacio para detenerse."],
["Seguirlos de cerca para ahorrar gasolina", "Ir pegado reduce la distancia de seguridad y le tapa la vista."]],
"", "");
T("TRK-006", "En una carretera dividida con cuatro o más carriles en un sentido, ¿qué carriles pueden usar los camiones grandes?", [
["Cualquier carril", "En esta situación los camiones grandes están limitados a ciertos carriles."],
["Los dos carriles de más a la derecha", "Correcto. Los camiones grandes pueden circular en los dos carriles de más a la derecha."],
["Solo el carril de la extrema izquierda", "Los camiones se mantienen del lado derecho."]],
"", "");
T("TRK-007", "Al remolcar un tráiler en un camino con carriles marcados, ¿qué carril debe usar?", [
["El carril de la extrema izquierda para que otros rebasen por la derecha", "Los vehículos que remolcan deben mantenerse a la derecha."],
["Cualquier carril, siempre que vaya al límite de velocidad", "Remolcar tiene reglas específicas de carril."],
["El carril de la extrema derecha o un carril marcado para vehículos lentos", "Correcto. Si no hay carriles marcados y hay cuatro o más carriles en su sentido, use los dos carriles más cercanos a la orilla derecha."]],
"", "");
T("TRK-008", "¿Qué nunca debe hacer cerca de un tren ligero?", [
["Dar vuelta delante de un tren ligero que se acerca", "Correcto. Nunca dé vuelta delante de un tren ligero que se acerca."],
["Mantener una distancia segura", "Mantener una distancia segura es lo recomendado."],
["Revisar si viene un tren ligero antes de cruzar las vías", "Revisar si viene un tren ligero es lo recomendado."]],
"", "");
T("TRK-009", "¿Cuándo puede rebasar a un tren ligero o tranvía por la IZQUIERDA?", [
["Siempre que haya mucho tráfico del lado derecho", "El tráfico pesado a la derecha no es una de las excepciones."],
["En una calle de un solo sentido, o cuando un agente se lo indique", "Correcto. No rebase por la izquierda salvo que esté en una calle de un solo sentido, que las vías estén demasiado cerca del lado derecho para rebasar ahí, o que un agente de tránsito se lo indique."],
["Siempre que esté detenido para que bajen pasajeros", "Que esté detenido no es una excepción. Las personas que suben y bajan pueden estar cruzando."]],
"", "");
T("TRK-010", "¿Qué es una zona de seguridad y puede manejar a través de ella?", [
["Un acotamiento de carretera para emergencias; puede manejar por él", "Las zonas de seguridad son para peatones que esperan el transporte público."],
["Una zona escolar; pase a 15 mph", "Una zona de seguridad no es una zona escolar."],
["Un espacio para peatones que esperan autobuses o trolebuses; nunca maneje a través de ella", "Correcto. Las zonas de seguridad se marcan con botones o marcadores en relieve. No maneje a través de una zona de seguridad bajo ninguna circunstancia."]],
"", "");
T("TRK-011", "¿Qué área de la imagen es más probable que esté en su punto ciego?", [
["Área A", "El área A está justo enfrente. La puede ver por el parabrisas."],
["Área B", "Correcto. El área B está a su lado y un poco atrás. En la mayoría de los vehículos, los puntos ciegos están a los lados, un poco detrás del conductor. Revíselos mirando por encima del hombro."],
["Área C", "El área C está justo detrás de usted. El espejo retrovisor muestra esa área."]],
"", "Vista desde arriba de un auto azul que apunta hacia arriba en el carril del medio. El círculo A está justo enfrente, el círculo B está en el carril izquierdo justo detrás del asiento del conductor y el círculo C está justo detrás del auto.");
T("TRK-012", "¿Cómo debe revisar sus puntos ciegos?", [
["Mirar por encima del hombro, girando solo la cabeza", "Correcto. Mire por encima de los hombros derecho e izquierdo, por las ventanas laterales, girando solo la cabeza."],
["Girar todo el cuerpo y el volante", "Girar el volante puede hacer que el auto se desvíe hacia otro carril."],
["Usar solo los espejos laterales", "Los espejos no muestran los puntos ciegos."]],
"", "");
T("TRK-013", "¿Cuándo debe revisar sus puntos ciegos?", [
["Solo al cambiar de carril a velocidad de autopista", "La revisión de puntos ciegos se necesita en muchas situaciones."],
["Antes de casi cualquier movimiento, incluso al abrir la puerta", "Correcto. Revíselos antes de cambiar de carril, dar vuelta, incorporarse, retroceder, salir de un espacio de estacionamiento, estacionarse en paralelo, salir desde la acera y abrir la puerta."],
["Solo al salir en reversa de un espacio de estacionamiento", "Muchas otras maniobras también requieren revisar los puntos ciegos."]],
"", "");
T("TRK-014", "¿Qué práctica le ayuda a mantener espacio a los lados?", [
["Quedarse en los puntos ciegos de otros conductores para que sepan dónde está", "No se quede en el punto ciego de otro conductor."],
["Manejar cerca de los autos estacionados para dejar espacio al tráfico", "Deje espacio entre su vehículo y los autos estacionados por si alguien abre una puerta."],
["Evitar manejar justo al lado de otros vehículos", "Correcto. También deje espacio entre su vehículo y los vehículos estacionados."]],
"", "");
T("RR-001", "La pluma empieza a subir, pero las luces rojas siguen parpadeando. ¿Qué debe hacer?", [
["Quedarse detenido hasta que las luces rojas dejen de parpadear", "Correcto. No cruce hasta que las luces rojas dejen de parpadear, aunque la pluma suba."],
["Avanzar en cuanto la pluma esté arriba", "Si las luces siguen parpadeando, puede venir un tren."],
["Rodear la pluma rápidamente", "Nunca rodee ni pase por debajo de las plumas del cruce; puede venir un tren."]],
"", "Camino que cruza unas vías de tren con una pluma roja y blanca bajada y una luz roja parpadeando. El auto azul (usted) espera antes de las vías.");
T("RR-002", "Los dispositivos de advertencia indican que viene un tren. ¿A qué distancia de la vía más cercana debe detenerse?", [
["Al menos 5 pies", "El manual indica una distancia mayor."],
["Al menos 15 pies", "Correcto. Deténgase al menos a 15 pies de la vía más cercana."],
["Justo en la orilla de las vías", "Eso es demasiado cerca de un tren que pasa."]],
"", "");
T("RR-003", "Las plumas del cruce están bajadas, pero no ve ningún tren. ¿Qué debe hacer?", [
["Rodear las plumas con cuidado si no ve ningún tren", "Nunca pase por debajo ni alrededor de las plumas bajadas, aunque no vea un tren."],
["Levantar la pluma y pasar despacio", "Manipular la pluma es peligroso y no está permitido."],
["Quedarse donde está y llamar al número indicado o al 911", "Correcto. No pase por debajo ni alrededor de las plumas bajadas. Si están bajadas y no se acerca ningún tren, llame al número gratuito de emergencias del ferrocarril que está en el cruce o al 911."]],
"", "");
T("RR-004", "El tráfico está detenido del otro lado de un cruce de ferrocarril. ¿Qué debe hacer?", [
["Esperar antes de las vías hasta que haya espacio para cruzarlas por completo", "Correcto. No empiece a cruzar si no tiene espacio para cruzar por completo."],
["Empezar a cruzar y esperar sobre las vías si es necesario", "Nunca se detenga sobre las vías del tren."],
["Detenerse con las llantas delanteras sobre la primera vía", "Cualquier parte de su auto sobre las vías está en peligro."]],
"", "");
T("RR-005", "Su auto se queda parado sobre las vías, viene un tren y las luces parpadean. ¿Hacia dónde debe ir?", [
["Ruta A", "Correcto. Correr hacia el lado de donde viene el tren lo mantiene fuera del camino de los restos que salen volando cuando el tren choca con el auto. Luego llame al 911."],
["Ruta B", "Los restos del choque salen disparados en la dirección en que avanza el tren."],
["C: quedarse en el auto", "Si se acerca un tren, bájese de inmediato."]],
"Corra HACIA el tren (en diagonal, alejándose de las vías): los restos salen volando hacia adelante con el tren.", "Un auto azul está parado sobre las vías del tren. Un tren se acerca desde la izquierda y avanza hacia la derecha. La flecha punteada A apunta hacia arriba y a la izquierda, hacia donde viene el tren. La flecha punteada B apunta hacia arriba y a la derecha. La C indica quedarse dentro del auto.");
T("RR-006", "Su auto se queda parado sobre las vías. No viene ningún tren y no hay luces de advertencia parpadeando. ¿Qué debe hacer?", [
["Quedarse en el auto y esperar una grúa", "Primero bájese del auto, aunque no se vea ningún tren. Luego repórtelo."],
["Bajarse y llamar al número que aparece en el cruce", "Correcto. Bájese del vehículo, llame al número que está en los postes del cruce o en la caja de control metálica, dé el número del cruce si aparece y diga que hay un vehículo en las vías. Luego llame al 911."],
["Dejar el auto y volver por él después", "Debe reportar un vehículo en las vías para que se pueda avisar a los trenes."]],
"", "");
T("RR-007", "En un cruce de ferrocarril, ¿cuándo puede pasar un tren?", [
["Solo a las horas del horario de trenes", "Los horarios cambian. Espere un tren en cualquier momento."],
["Solo de día", "Los trenes pasan de día y de noche, así que espere uno a cualquier hora."],
["En cualquier momento, desde cualquier dirección", "Correcto. Espere un tren en cualquier vía, en cualquier momento y en cualquier dirección."]],
"", "");
T("RR-008", "¿Qué vehículos deben detenerse antes de cruzar las vías del tren, aunque no se vea ningún tren?", [
["Autobuses escolares y vehículos con letreros de materiales peligrosos", "Correcto. Los autobuses, los autobuses escolares y los vehículos marcados con un letrero de materiales peligrosos deben detenerse antes de cruzar las vías. Esté listo para detenerse detrás de ellos."],
["Motocicletas, motonetas y otros vehículos de dos ruedas", "Las motocicletas y motonetas no están en la lista del manual de vehículos que deben detenerse en todos los cruces."],
["Camionetas pickup y vans que llevan carga", "Las pickups y vans no están en la lista del manual de vehículos que deben detenerse en todos los cruces."]],
"", "");
T("RR-009", "Muchos cruces de ferrocarril tienen una señal azul y blanca. ¿Para qué sirve?", [
["Muestra el horario de trenes de ese cruce", "En los cruces no se ponen horarios para los conductores. Espere un tren en cualquier momento."],
["Da información de emergencia sobre el cruce", "Correcto. La señal azul y blanca le dice qué hacer si hay una emergencia en las vías o cerca de ellas, o si su vehículo se queda parado sobre ellas."],
["Marca el estacionamiento para pasajeros del tren", "La señal azul da información de emergencia, no de estacionamiento."]],
"", "");
T("RR-010", "¿Puede hacer una vuelta en U en un cruce de ferrocarril o sobre él?", [
["Sí, si no se ve ningún tren", "Una vuelta en U sobre un cruce nunca está permitida."],
["Solo si las plumas están arriba", "Que las plumas estén arriba no cambia la regla. Las vueltas en U en cruces de ferrocarril o sobre ellos nunca están permitidas."],
["Nunca", "Correcto. Nunca haga una vuelta en U en un cruce de ferrocarril ni sobre él."]],
"", "");

T("CND-001", "¿Cuándo debe bajar las luces altas ante un vehículo que viene de frente?", [
["A menos de 100 pies", "A 100 pies el otro conductor ya estaría deslumbrado."],
["A menos de 500 pies del vehículo que viene de frente", "Correcto. Cambie a luces bajas a menos de 500 pies de un vehículo que viene hacia usted, y a menos de 300 pies de un vehículo que va siguiendo."],
["Solo si el otro conductor le hace cambio de luces", "Debe bajarlas aunque el otro conductor no le haga ninguna señal."]],
"", "");
T("CND-002", "Cuando va siguiendo a otro vehículo, debe bajar las luces altas a menos de:", [
["100 pies", "El manual indica una distancia mayor."],
["1,000 pies", "El manual indica 300 pies cuando va siguiendo a otro vehículo."],
["300 pies", "Correcto. Cambie a luces bajas a menos de 300 pies de un vehículo que va siguiendo."]],
"", "");
T("CND-003", "¿Cuándo deben estar encendidos sus faros?", [
["Desde 30 minutos después de la puesta del sol hasta 30 minutos antes del amanecer", "Correcto. Use los faros desde 30 minutos después de la puesta del sol hasta 30 minutos antes del amanecer. También debe usar luces bajas siempre que necesite los limpiaparabrisas por neblina, lluvia o nieve, y cuando esté tan oscuro que no pueda ver a 1,000 pies."],
["Solo cuando ya está completamente oscuro", "Los faros se necesitan antes, desde 30 minutos después de la puesta del sol."],
["Solo en autopistas y carreteras de noche", "Las reglas de los faros aplican en todos los caminos."]],
"", "");
T("CND-004", "Llueve lo suficiente como para necesitar los limpiaparabrisas. ¿Qué más debe hacer?", [
["Encender solo las luces de estacionamiento", "Es ilegal manejar solo con las luces de estacionamiento."],
["Encender las luces bajas", "Correcto. Si necesita los limpiaparabrisas por neblina, lluvia o nieve, debe encender las luces bajas."],
["Encender las luces altas", "Las luces altas rebotan en la lluvia y la neblina y causan deslumbramiento."]],
"", "");
T("CND-005", "Los faros de un auto que viene de frente lo deslumbran. ¿Hacia dónde debe mirar?", [
["Directo a los faros para calcular la distancia", "Mirar directo a luces brillantes hace que vea peor."],
["Al tablero", "Mirar hacia abajo quita la vista del camino."],
["Hacia la orilla derecha de su carril", "Correcto. Vigile al vehículo que viene de frente con el rabillo del ojo."]],
"", "");
T("CND-006", "Un conductor que viene de frente no baja sus luces altas. ¿Qué debe hacer?", [
["No responder con sus propias luces altas; mirar hacia la orilla derecha de su carril", "Correcto. No reaccione dejando sus luces altas encendidas; eso solo hace que ambos vean peor."],
["Encender sus luces altas para llamar su atención", "Eso solo hace que a los dos les cueste más ver."],
["Cerrar los ojos un momento mientras pasa", "Nunca cierre los ojos mientras maneja."]],
"", "");
T("CND-007", "De noche, se acerca de frente un vehículo con una sola luz. ¿Qué debe hacer?", [
["Suponer que es una motocicleta y mantener su posición en el carril", "No puede saber qué es. Muévase a la derecha."],
["Manejar lo más a la derecha posible", "Correcto. Podría ser un ciclista, un motociclista o un vehículo con un faro fundido."],
["Hacer cambio de luces altas", "Hacer cambio de luces no crea espacio."]],
"", "");
T("CND-008", "¿Cuándo está especialmente resbaloso el pavimento con lluvia?", [
["Después de varias horas de lluvia", "La lluvia larga lava parte del aceite y el polvo; el peor momento es al principio."],
["Solo de noche", "Lo resbaloso depende de las condiciones del camino, no de la hora."],
["Cuando empieza a llover, sobre todo después de mucho tiempo seco", "Correcto. El aceite y el polvo del camino todavía no se han lavado."]],
"", "");
T("CND-009", "¿Qué zonas suelen congelarse antes que el resto del camino?", [
["Puentes, pasos elevados y lugares con sombra", "Correcto. Estas zonas se congelan primero y se secan al último."],
["Tramos rectos con sol", "Las zonas con sol normalmente se calientan primero."],
["Intersecciones con semáforo", "Los semáforos no influyen en el congelamiento."]],
"", "");
T("CND-010", "Su auto empieza a derrapar en un camino resbaloso. ¿Qué debe hacer?", [
["Frenar fuerte y girar en sentido contrario al derrape", "Frenar fuerte empeora el derrape."],
["Soltar el acelerador y girar en la dirección del derrape", "Correcto. Quite el pie del acelerador poco a poco, no use los frenos y gire el volante en la dirección del derrape. Trate de poner una llanta sobre pavimento seco."],
["Pisar el acelerador para recuperar tracción rápido", "Acelerar hace que las llantas pierdan más agarre y reduce su control."]],
"", "");
T("CND-011", "Su vehículo tiene frenos antibloqueo (ABS) en las cuatro ruedas y está en un derrape con las ruedas bloqueadas. ¿Qué debe hacer?", [
["Bombear los frenos rápido", "Bombear es para vehículos sin ABS."],
["Quitar el pie del freno por completo", "Esa es la indicación solo para ABS en las ruedas delanteras."],
["Presionar el pedal del freno con firmeza", "Correcto. Con ABS en las cuatro ruedas, presione el pedal del freno con firmeza."]],
"", "");
T("CND-012", "Su auto empieza a hidroplanear. ¿Qué debe hacer?", [
["Bajar la velocidad poco a poco y no usar los frenos", "Correcto. Hidroplanear significa que las llantas van sobre el agua; frenar de golpe puede hacer que pierda el control."],
["Frenar fuerte de inmediato", "Frenar de golpe puede hacer que pierda el control."],
["Acelerar para atravesar el agua", "Acelerar empeora el hidroplaneo."]],
"", "");
T("CND-013", "¿Qué le ayuda a evitar el hidroplaneo?", [
["Manejar más rápido para pasar menos tiempo en el agua", "La velocidad hace más probable el hidroplaneo."],
["Manejar despacio y rodear el agua estancada si es posible", "Correcto. También baje la velocidad si oye las llantas chapotear."],
["Usar el control de crucero", "El control de crucero mantiene la velocidad en vez de dejarlo bajarla."]],
"", "");
T("CND-014", "¿Qué luces debe usar con neblina espesa?", [
["Luces altas", "Las luces altas rebotan y causan deslumbramiento."],
["Solo luces de estacionamiento", "Nunca maneje solo con las luces de estacionamiento."],
["Luces bajas", "Correcto. Nunca maneje solo con las luces de estacionamiento o las de niebla."]],
"", "");
T("CND-015", "La neblina se vuelve demasiado espesa para manejar con seguridad. ¿Qué sugiere el manual?", [
["Salirse del camino, encender las intermitentes y esperar a que mejoren las condiciones", "Correcto. Salirse del camino es más seguro que manejar a ciegas."],
["Seguir manejando pero pegado al auto de adelante", "Ir pegado no deja tiempo para reaccionar."],
["Detenerse en su carril y apagar las luces", "Detenerse en un carril sin luces es muy peligroso."]],
"", "");
T("CND-016", "¿Qué se recomienda al manejar con vientos fuertes?", [
["Usar el control de crucero para mantener la velocidad", "No use el control de crucero; mantenga el máximo control del acelerador."],
["Bajar la velocidad y sujetar el volante con firmeza", "Correcto. Esté atento a objetos en el camino y considere orillarse hasta que pase la tormenta."],
["Manejar cerca de camiones grandes para protegerse", "Los vehículos grandes son especialmente afectados por el viento."]],
"", "");
T("CND-017", "El camino de adelante está inundado y no puede saber qué tan profunda es el agua. ¿Qué es lo mejor?", [
["Pasar rápido", "Manejar rápido por el agua puede hacer que pierda el control."],
["Seguir de cerca al auto de adelante por el agua", "Ir de cerca no reduce los peligros."],
["Buscar otra ruta", "Correcto. Puede que no logre calcular la profundidad. Si no tiene otra opción, maneje despacio y después pruebe sus frenos."]],
"", "");
T("CND-018", "Se le revienta una llanta. ¿Qué debe hacer primero?", [
["Sujetar el volante con ambas manos y soltar el acelerador poco a poco", "Correcto. Mantenga la velocidad si es posible y seguro, dirija el auto hacia donde quiere ir, y luego baje la velocidad y oríllese cuando sea seguro."],
["Frenar fuerte de inmediato", "Frenar de golpe puede hacer que pierda el control."],
["Quitar el pie del acelerador de golpe y girar hacia el acotamiento", "Quitar el pie de golpe también puede hacer que pierda el control."]],
"", "");
T("CND-019", "Sus llantas derechas se salen del pavimento. ¿Qué debe hacer?", [
["Dar un volantazo para regresar al camino de inmediato", "Girar demasiado fuerte puede mandarlo hacia el tráfico de frente."],
["Soltar el acelerador, frenar suavemente y regresar con cuidado", "Correcto. Sujete el volante con firmeza, quite el pie del acelerador, frene suavemente, revise el tráfico detrás de usted y regrese con cuidado al pavimento."],
["Frenar fuerte mientras sigue en el acotamiento", "Frenar fuerte en un acotamiento suelto puede causar un derrape."]],
"", "");
T("CND-020", "Tiene que detenerse por una falla del vehículo. ¿Dónde debe evitar detenerse?", [
["Completamente fuera del camino, lejos del tráfico", "Ese es el lugar recomendado."],
["Donde otros puedan ver su vehículo desde atrás", "Eso es lo recomendado si no puede salirse del camino."],
["Justo después de una loma o justo después de una curva", "Correcto. Los otros conductores podrían no ver su vehículo a tiempo."]],
"", "");
T("CND-021", "Ve un choque adelante. ¿Cómo puede avisar a los conductores de atrás?", [
["Encender las intermitentes o tocar el freno ligeramente", "Correcto. Avise a los conductores de atrás encendiendo las luces intermitentes, tocando ligeramente el pedal del freno tres o cuatro veces o usando la señal de mano al bajar la velocidad y detenerse."],
["Frenar de golpe para que los de atrás se den cuenta", "Frenar de golpe puede causar choques por detrás."],
["Encender las luces altas y tocar el claxon", "Las luces altas y el claxon no avisan con claridad a los conductores de atrás. Las intermitentes y las luces de freno sí."]],
"", "");
T("CND-022", "¿Cuándo es apropiado usar el claxon?", [
["Para mostrar a otros conductores que está molesto", "El claxon es para advertir, no para expresar enojo."],
["Para ayudar a evitar un choque", "Correcto. Use el claxon para evitar choques y para avisar al tráfico de frente en caminos de montaña angostos donde no puede ver al menos 200 pies adelante."],
["Para que los peatones crucen más rápido", "Tocarles el claxon a los peatones puede asustarlos y no es un uso seguro del claxon."]],
"", "");
T("CND-023", "Sale de una gasolinera muy iluminada a un camino oscuro. ¿Qué debe hacer?", [
["Encender las luces altas pase lo que pase", "Las luces altas pueden deslumbrar a otros conductores y no siempre son legales."],
["Manejar más rápido para llegar a una zona iluminada", "Acelerar cuando no ve bien es peligroso."],
["Manejar despacio hasta que sus ojos se acostumbren a la oscuridad", "Correcto. Sus ojos necesitan tiempo para adaptarse."]],
"", "");
T("CND-024", "Sus frenos se mojan después de pasar por agua profunda. ¿Cómo puede secarlos?", [
["Pisar ligeramente el acelerador y el freno al mismo tiempo", "Correcto. Puede secar los frenos mojados pisando ligeramente el acelerador y el freno al mismo tiempo, solo hasta que se sequen."],
["Manejar rápido un rato para que el aire los seque", "La velocidad no seca los frenos, y manejar rápido con frenos débiles es peligroso."],
["Bombear el freno de estacionamiento varias veces", "El método del manual usa el acelerador y el pedal del freno, no el freno de estacionamiento."]],
"", "");
T("CND-025", "Mientras maneja se siente cansado y mareado, le duele la cabeza y sospecha que es monóxido de carbono. ¿Qué debe hacer?", [
["Subir la calefacción", "Eso no resuelve una fuga del escape."],
["Hacer revisar el sistema de escape", "Correcto. El monóxido de carbono no tiene olor; estos síntomas pueden ser una señal de alerta. Nunca encienda su vehículo dentro de un garaje cerrado."],
["Ignorarlo; el monóxido de carbono solo sale de los camiones", "Todos los vehículos de gasolina producen monóxido de carbono."]],
"", "");
T("IMP-001", "Si tiene 21 años o más, es ilegal manejar con una concentración de alcohol en la sangre (BAC) de:", [
["0.10% o más", "El límite de California para adultos es menor que 0.10%."],
["0.05% o más", "0.05% se menciona para pruebas a menores de 21, no como el límite para adultos."],
["0.08% o más", "Correcto. Para conductores de 21 años o más, el límite es 0.08%. Hay límites más bajos para menores de 21, personas en libertad condicional por DUI, conductores comerciales y conductores que llevan pasajeros por pago."]],
"", "");
T("IMP-002", "Si es menor de 21 años, es ilegal manejar con un BAC de:", [
["0.01% o más", "Correcto. Los conductores menores de 21 no pueden manejar con un BAC de 0.01% o más."],
["0.08% o más", "0.08% es el límite para conductores de 21 años o más."],
["0.04% o más", "0.04% aplica a conductores comerciales y a quienes llevan pasajeros por pago."]],
"", "");
T("IMP-003", "Una persona de cualquier edad en libertad condicional por DUI no puede manejar con un BAC de:", [
["0.08% o más", "La libertad condicional por DUI tiene un límite mucho más bajo."],
["0.01% o más", "Correcto. El límite es 0.01% a cualquier edad mientras está en libertad condicional por DUI."],
["0.05% o más", "El manual indica 0.01% para conductores en libertad condicional por DUI."]],
"", "");
T("IMP-004", "¿Cuál es el límite de BAC para alguien que lleva pasajeros por pago?", [
["0.08%", "Los conductores que llevan pasajeros por pago tienen un límite más bajo."],
["0.01%", "0.01% es el límite para menores de 21 o personas en libertad condicional por DUI."],
["0.04%", "Correcto. Es ilegal un BAC de 0.04% o más al llevar pasajeros por pago, y también al manejar un vehículo que requiere licencia comercial."]],
"", "");
T("IMP-005", "Su BAC está por debajo del límite legal. ¿Aun así lo pueden arrestar por DUI?", [
["Sí, según qué tan afectado esté, incluso sin medir el BAC", "Correcto. Casi todos sienten efectos del alcohol por debajo del límite legal."],
["No, estar por debajo del límite significa que está dentro de la ley", "Estar por debajo del límite no significa que sea seguro. Estar afectado puede bastar para un arresto."],
["Solo si es menor de 21", "Esto aplica a cualquier edad. Manejar afectado puede llevar a un arresto incluso por debajo del límite legal de BAC."]],
"", "");
T("IMP-006", "¿Qué puede hacer que sea ilegal manejar?", [
["Solo las drogas ilegales, no las medicinas del médico", "La ley trata igual los medicamentos recetados y los de venta libre si afectan su manejo."],
["Cualquier droga que afecte su manejo, aunque sea recetada", "Correcto. La ley no distingue entre drogas ilegales y medicamentos del médico o la farmacia. Cuenta cualquier droga que afecte su capacidad de manejar con seguridad. Lea las etiquetas y conozca sus efectos."],
["Solo el alcohol, porque las leyes de drogas son aparte", "Las leyes de DUI de California aplican tanto al alcohol como a las drogas."]],
"", "");
T("IMP-007", "¿Qué pasa si se niega a una prueba química cuando un agente sospecha DUI?", [
["Nada; la prueba es opcional", "Al manejar en California, usted da su consentimiento para las pruebas."],
["Le dan una advertencia la primera vez", "No hay excepción con advertencia."],
["El DMV suspenderá o revocará su privilegio de manejar", "Correcto. El manual indica que negarse lleva a una suspensión o revocación por un año."]],
"", "");
T("IMP-008", "Lleva una botella de alcohol abierta en su auto. ¿Dónde debe guardarla?", [
["En la cajuela", "Correcto. Un envase abierto debe ir en la cajuela u otro lugar donde no se sienten pasajeros."],
["En la guantera, cerrada", "Es ilegal guardar un envase de alcohol abierto en la guantera, aunque esté cerrada."],
["Debajo del asiento del conductor", "Esa es el área de pasajeros y no está permitido."]],
"", "");
T("IMP-009", "Es menor de 21 años. ¿Cuándo puede llevar una bebida alcohólica en un vehículo?", [
["En cualquier momento, siempre que esté sellada", "Que esté sellada no basta. También debe ir con usted alguien de 21 años o más, salvo que tenga una excepción por trabajo."],
["Cuando va con usted alguien de 21 años o más y está sellada", "Correcto. Debe ir con usted alguien de 21 años o más, y el envase debe estar lleno, sellado y sin abrir (uno abierto debe ir en la cajuela). También hay una excepción por trabajo para ventas de licor fuera del local."],
["Nunca, bajo ninguna circunstancia", "El manual indica excepciones."]],
"", "");
T("IMP-010", "Un conductor menor de 21 años es sorprendido con alcohol en el vehículo, violando la ley. ¿Qué puede pasar?", [
["Solo una multa pequeña, sin efecto en la licencia", "El manual indica consecuencias más graves, incluida una posible suspensión de la licencia por un año."],
["Nada, siempre que el conductor esté sobrio", "Llevar alcohol en el vehículo violando la ley puede tener sanciones aunque el conductor no haya bebido."],
["Retención del vehículo, multa y suspensión de la licencia por un año", "Correcto. Las autoridades pueden retener el vehículo hasta 30 días, y el tribunal puede multar al conductor y suspender su licencia por un año. Si todavía no tiene licencia, el DMV puede retrasarla hasta un año."]],
"", "");
T("IMP-011", "Si lo arrestan por DUI, ¿cuánto tiempo tiene para pedir una audiencia administrativa del DMV?", [
["10 días desde la fecha del arresto", "Correcto. El agente puede darle una licencia temporal por 30 días."],
["30 días desde la fecha del arresto", "30 días es lo que dura la licencia temporal que le puede dar el agente. El plazo para pedir la audiencia es más corto: 10 días."],
["Un año desde la fecha del arresto", "Un año es demasiado tarde. Debe pedir la audiencia dentro de los 10 días siguientes al arresto."]],
"", "");
T("IMP-012", "¿Cuánto tiempo permanecen las condenas por DUI en su historial de manejo?", [
["3 años", "Muchas condenas de tránsito permanecen 36 meses o más, pero el DUI permanece más tiempo."],
["10 años", "Correcto. Todas las condenas por DUI permanecen en su historial por 10 años."],
["Hasta que termine un programa de DUI", "Terminar un programa no borra la condena."]],
"", "");
T("IMP-013", "¿Cómo afecta la edad a la tolerancia al alcohol?", [
["La tolerancia aumenta con la edad", "El manual dice lo contrario."],
["La edad no tiene efecto", "El manual dice que la tolerancia disminuye con la edad."],
["Con la edad, la tolerancia al alcohol disminuye", "Correcto. Esto aumenta el riesgo de problemas de manejo relacionados con el alcohol."]],
"", "");
T("IMP-014", "Al celular de un conductor adulto le entra una llamada mientras maneja. ¿Qué recomienda el manual?", [
["Dejar que se vaya al buzón de voz", "Correcto. No conteste. Si tiene que devolver o hacer una llamada, oríllese de forma segura. Los adultos solo deben usar el teléfono en modo manos libres cuando sea necesario."],
["Contestar rápido y sostener el teléfono abajo", "Usar un teléfono en la mano mientras maneja es ilegal."],
["Contestar y leer mensajes en los semáforos en rojo", "Sostener el teléfono y leer mensajes mientras maneja son cosas peligrosas e ilegales."]],
"", "");
T("IMP-015", "¿Cuándo puede un conductor menor de 18 años usar el celular mientras maneja?", [
["Las llamadas con manos libres siempre están permitidas", "Los menores no pueden usar el teléfono, ni siquiera con manos libres, para contestar llamadas ni para mensajes mientras manejan."],
["Solo para llamar pidiendo ayuda de emergencia", "Correcto. Es ilegal que un menor use un celular o dispositivo inalámbrico para contestar llamadas o enviar o responder mensajes mientras maneja. La única excepción es llamar para pedir ayuda de emergencia."],
["Cuando está detenido en un semáforo en rojo", "Estar detenido en un semáforo no crea una excepción."]],
"", "");
T("IMP-016", "¿Dónde puede colocar el celular en el vehículo?", [
["Sosteniéndolo en la mano sobre el volante", "Sostener un teléfono mientras maneja es ilegal."],
["En cualquier parte del parabrisas, incluso en el centro", "No puede taparle la vista del camino."],
["En el parabrisas, el tablero o la consola central, sin taparle la vista", "Correcto. Úselo con un solo deslizamiento o toque."]],
"", "");
T("IMP-017", "¿Cuál es una distracción común al manejar?", [
["Cambiar la música o el volumen", "Correcto. Otras son mirar el teléfono, el navegador, a los niños o las mascotas, y maquillarse o rasurarse."],
["Revisar los espejos", "Revisar los espejos es parte de manejar con seguridad."],
["Mirar 10 segundos adelante", "Mirar hacia adelante es una buena costumbre."]],
"", "");
T("IMP-018", "¿Cómo afecta el cansancio al manejar?", [
["Solo importa en viajes largos de más de 8 horas", "El cansancio puede afectarle en cualquier viaje."],
["Puede afectar su vista y aumentar su tiempo de reacción ante peligros", "Correcto. Los conductores con sueño ven y reaccionan más despacio."],
["El café siempre quita el efecto", "El café no quita el cansancio de forma confiable."]],
"", "");
T("IMP-019", "¿Es legal manejar con tapones o audífonos en ambos oídos?", [
["Sí, si la música está bajita", "El volumen no cambia la regla."],
["Solo en autopistas", "No hay excepción para autopistas."],
["No, es ilegal", "Correcto. Necesita oír los claxons, las sirenas y otros sonidos de advertencia."]],
"", "");
T("IMP-020", "¿Qué es ilegal para un pasajero en un auto normal?", [
["Fumar o comer un producto de cannabis mientras va en el auto", "Correcto. Es ilegal fumar o comer cannabis mientras maneja o va como pasajero en un vehículo."],
["Llevar una botella de vino cerrada y sellada", "Los envases cerrados y sellados están permitidos."],
["Llevar un producto de cannabis sellado en la cajuela", "Los productos de cannabis cerrados y sellados están permitidos. El problema es fumar o comer cannabis dentro del vehículo."]],
"", "");
T("IMP-021", "Un conductor menor de 21 años hace una prueba preliminar de alcohol (PAS) que marca 0.05% de BAC. ¿Qué puede pasar?", [
["Nada, porque está por debajo de 0.08%", "Los conductores menores de 21 tienen límites mucho más bajos."],
["El agente puede exigirle una prueba de aliento o de sangre", "Correcto. Si una prueba posterior también marca 0.05% o más, el conductor puede ser arrestado por DUI."],
["El conductor va automáticamente a juicio", "El siguiente paso son más pruebas."]],
"", "");
T("LAW-001", "¿Quién debe usar el cinturón de seguridad?", [
["Solo el conductor", "Los pasajeros también deben usar el cinturón de seguridad."],
["Solo quienes van en el asiento delantero", "La regla incluye a los pasajeros, no solo al asiento delantero."],
["Usted y sus pasajeros", "Correcto. Si un pasajero menor de 16 años no lleva el cinturón, a usted como conductor también le pueden dar una multa."]],
"", "");
T("LAW-002", "¿Cómo debe usarse la banda del regazo del cinturón?", [
["Ajustada y baja sobre las caderas", "Correcto. Si no, podría deslizarse por debajo del cinturón en un choque."],
["Floja sobre el estómago", "Un cinturón flojo y alto puede dejar que se deslice."],
["Por debajo del brazo", "La banda del hombro nunca debe ir por debajo del brazo."]],
"", "");
T("LAW-003", "Un niño tiene menos de 2 años, pesa menos de 40 libras y mide menos de 3 pies 4 pulgadas. ¿Cómo debe viajar?", [
["En un asiento elevado mirando hacia adelante", "Los niños así de pequeños deben viajar mirando hacia atrás."],
["En un sistema de retención infantil mirando hacia atrás", "Correcto. Un asiento que mira hacia atrás no puede ir en el asiento delantero de un vehículo con bolsa de aire."],
["Con un cinturón de seguridad de adulto", "Los cinturones de adulto son para niños de 8 años o más o que midan al menos 4 pies 9 pulgadas."]],
"", "");
T("LAW-004", "¿Cuándo puede un niño usar un cinturón de seguridad normal en vez de un asiento infantil?", [
["A los 5 años, si puede quedarse quieto", "5 años es muy pronto. El manual usa los 8 años o una estatura de 4 pies 9 pulgadas."],
["Cuando pese al menos 40 libras", "El peso por sí solo no es la regla del manual. Lo son los 8 años o una estatura de 4 pies 9 pulgadas."],
["A los 8 años, o al medir 4 pies 9 pulgadas", "Correcto. Los niños de 8 años o más, o que miden al menos 4 pies 9 pulgadas, pueden usar un cinturón de seguridad bien abrochado que cumpla las normas federales."]],
"", "");
T("LAW-005", "¿A qué distancia de la bolsa de aire del volante debe sentarse?", [
["Al menos 10 pulgadas", "Correcto. Siéntese al menos a 10 pulgadas de la cubierta de la bolsa de aire, medidas del centro del volante al esternón, siempre que pueda mantener el control total del vehículo."],
["Al menos 2 pulgadas", "Dos pulgadas es demasiado cerca. Una bolsa de aire se infla con mucha fuerza, por eso el manual dice que se siente al menos a 10 pulgadas."],
["La distancia no importa si usa el cinturón", "El cinturón y la bolsa de aire trabajan juntos, pero aun así necesita al menos 10 pulgadas de espacio de la cubierta de la bolsa de aire."]],
"", "");
T("LAW-006", "¿Es ilegal dejar solo en un vehículo a un niño de qué edad?", [
["Tres años o menos", "El manual indica una edad mayor."],
["Seis años o menos", "Correcto. Se puede dejar a un niño al cuidado de alguien de al menos 12 años."],
["Menos de 16", "El manual indica seis años o menos."]],
"", "");
T("LAW-007", "¿Cuál es el seguro de responsabilidad mínimo por la muerte o lesión de una persona?", [
["$15,000", "$15,000 es el mínimo por daños a la propiedad."],
["$60,000", "$60,000 cubre la muerte o lesión de más de una persona."],
["$30,000", "Correcto. También $60,000 por más de una persona y $15,000 por daños a la propiedad."]],
"", "");
T("LAW-008", "Debe reportar un choque al DMV dentro de 10 días si:", [
["Hubo daños de más de $1,000, o alguien resultó lesionado o murió", "Correcto. Presente un Reporte de Accidente de Tránsito (SR 1) al DMV dentro de 10 días. Esto aplica incluso en propiedad privada y sin importar quién lo causó."],
["Solo si la policía llegó al lugar del choque", "Las autoridades no harán el reporte al DMV por usted."],
["Solo si usted fue el conductor culpable", "Debe reportarlo aunque usted no haya causado el choque."]],
"", "");
T("LAW-009", "Su auto golpea a un auto estacionado y no encuentra al dueño. ¿Qué debe hacer?", [
["Irse, ya que nadie salió lastimado", "Irse sin avisar al dueño es huir del lugar (hit-and-run), aunque nadie haya salido lastimado."],
["Dejar una nota con sus datos de contacto y reportarlo", "Correcto. Deje una nota bien sujeta al vehículo con su nombre, teléfono y dirección, y reporte el choque a las autoridades."],
["Esperar una hora al dueño y luego irse sin dejar nota", "Esperar no sustituye dejar una nota y reportar el choque."]],
"", "");
T("LAW-010", "Si alguien resulta lesionado o muere en un choque, debe reportarlo a las autoridades dentro de:", [
["10 días", "10 días es el plazo para el reporte SR 1 al DMV."],
["30 días", "30 días es demasiado tarde. El reporte a las autoridades se debe hacer dentro de 24 horas si alguien resultó lesionado o murió."],
["24 horas", "Correcto. Su agente de seguros, corredor o representante legal también puede presentarlo."]],
"", "");
T("LAW-011", "Tiene un choque sin el seguro adecuado. ¿Qué puede pasar?", [
["Su privilegio de manejar puede suspenderse hasta cuatro años", "Correcto. Si tiene un choque sin el seguro adecuado, su privilegio de manejar puede suspenderse hasta cuatro años, sin importar quién tuvo la culpa."],
["Nada si el otro conductor tuvo la culpa", "No importa quién tuvo la culpa."],
["Solo una carta de advertencia", "El manual indica una suspensión."]],
"", "");
T("LAW-012", "¿Con qué total de puntos se puede suspender la licencia de un adulto?", [
["2 puntos en 12 meses", "El manual indica totales más altos."],
["4 puntos en 12 meses", "Correcto. También 6 puntos en 24 meses, u 8 puntos en 36 meses."],
["10 puntos en 12 meses", "La suspensión puede ocurrir con un total más bajo."]],
"", "");
T("LAW-013", "Durante los primeros 12 meses con licencia provisional, ¿cuándo NO puede manejar un menor de 18 años (sin una excepción)?", [
["Entre las 6 p.m. y las 6 a.m.", "El manual indica de 11 p.m. a 5 a.m."],
["Los fines de semana", "No hay restricción de fines de semana."],
["Entre las 11 p.m. y las 5 a.m.", "Correcto. Las excepciones requieren una nota firmada, por ejemplo por necesidad médica, escolar, de trabajo o familiar."]],
"", "");
T("LAW-014", "Un conductor provisional (menor de 18) quiere llevar a amigos menores de 20 años. ¿Cuándo se permite?", [
["Cuando lo acompaña un conductor con licencia de 25 años o más", "Correcto. Debe acompañarlo su padre, madre, tutor u otro conductor con licencia de California de al menos 25 años, salvo que aplique una excepción de la lista con nota firmada."],
["En cualquier momento después de los primeros 6 meses manejando", "La restricción de pasajeros no termina a los 6 meses."],
["Cuando todos los amigos usan el cinturón", "El cinturón es obligatorio, pero no elimina esta restricción."]],
"", "");
T("LAW-015", "¿Cuántas horas de práctica supervisada debe completar un menor de 18 antes de obtener la licencia?", [
["20 horas, 5 de ellas de noche", "Veinte horas son menos de lo requerido. El manual exige 50 horas de práctica, 10 de ellas de noche."],
["50 horas, 10 de ellas de noche", "Correcto. Los menores de 18 deben practicar al menos 50 horas, 10 de ellas de noche, con un conductor con licencia de California de al menos 25 años."],
["100 horas, 20 de ellas de noche", "Cien horas son más de lo requerido. El manual exige 50 horas, 10 de ellas de noche."]],
"", "");
T("LAW-016", "¿Cuántos intentos tiene para aprobar el examen de conocimientos de una licencia nueva antes de tener que volver a solicitar?", [
["Uno", "Tiene más de un intento."],
["Ilimitados", "Después de tres intentos debe volver a solicitar."],
["Tres", "Correcto. Los menores deben esperar siete días para repetir un examen de conocimientos reprobado, sin contar el día en que lo reprobaron."]],
"", "");
T("LAW-017", "¿Qué edad debe tener para solicitar un permiso de aprendizaje en California?", [
["15½ años", "Correcto. Los solicitantes menores de 18 también necesitan educación vial y la firma de su padre, madre o tutor."],
["15 años", "El mínimo es un poco mayor."],
["16 años, después de la educación vial", "16 años es la edad mínima para la licencia provisional, no para el permiso de aprendizaje. El mínimo para el permiso es 15½."]],
"", "");
T("LAW-018", "Una carga sobresale más de 4 pies de su defensa trasera. ¿Qué debe poner?", [
["Nada, siempre que esté bien amarrada", "Asegurar la carga es obligatorio, pero no sustituye la bandera."],
["Una bandera cuadrada roja o anaranjada de 12 pulgadas", "Correcto. Una carga que sobresale más de 4 pies de la defensa trasera debe llevar una bandera cuadrada de 12 pulgadas, roja o anaranjada fluorescente. De noche debe marcarse con dos luces rojas."],
["Sus luces intermitentes, de día y de noche", "Las luces intermitentes no son la señalización requerida. El manual pide una bandera, y además dos luces rojas de noche."]],
"", "");
T("LAW-019", "¿Es legal fumar en un vehículo cuando va un menor de edad?", [
["Sí, con las ventanas abiertas", "Las ventanas abiertas no crean una excepción."],
["Sí, si el menor está de acuerdo", "El permiso del menor no cambia la ley."],
["No, le pueden multar", "Correcto. Es ilegal fumar en un vehículo cuando va un menor, y le pueden multar."]],
"", "");
T("LAW-020", "¿Puede una persona viajar en la parte trasera descubierta de una camioneta pickup?", [
["Solo si el vehículo tiene asientos fijos y cinturones de seguridad para ella", "Correcto. No deje que nadie viaje en la parte de atrás de una pickup u otro camión a menos que tenga asientos fijos y cinturones de seguridad."],
["Sí, si la camioneta va a menos de 25 mph", "Ir despacio no es una excepción. La camioneta necesita asientos fijos y cinturones."],
["Sí, solo en caminos privados", "El manual indica el requisito de asientos y cinturones."]],
"", "");
T("LAW-021", "¿Con qué frecuencia puede elegir la escuela para infractores de tránsito por una infracción de un punto (si el juez la ofrece)?", [
["Una vez al año", "El manual lo permite una vez en cualquier periodo de 18 meses, no una vez al año."],
["Una vez en cualquier periodo de 18 meses", "Correcto. La multa no se reporta a su compañía de seguros, pero sí queda en su historial."],
["Todas las veces que quiera", "Hay un límite: una vez en cualquier periodo de 18 meses."]],
"", "");
T("LAW-022", "¿Dónde puede colocar un dispositivo de pago de peaje en el parabrisas?", [
["En cualquier parte del parabrisas", "Los objetos no deben taparle la vista, así que solo pueden ir en lugares específicos."],
["Colgando del espejo retrovisor", "No cuelgue objetos del espejo; pueden taparle la vista."],
["En la parte superior central del parabrisas", "Correcto. Un dispositivo de pago de peaje puede ir en un cuadrado de 5 pulgadas en la parte superior central del parabrisas."]],
"", "");

})();
