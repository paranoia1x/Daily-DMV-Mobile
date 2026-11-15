/* Study guide cheat sheets: short summaries of handbook rules, in English, Spanish and Portuguese.
   Every fact is taken from the California Driver's Handbook (DL 600 R6/2025) and matches the question bank.
   Spanish and Portuguese are machine (AI) translations, not yet reviewed by native speakers.
   Item: [big label, {en, es, pt}, optional picture]. Labels that are words have their own {en, es, pt}. */
window.DMV_STUDY = [
  {
    id: 'numbers', icon: '🔢', topics: ['speed', 'parking', 'turns', 'conditions'],
    title: { en: 'Numbers to remember', es: 'Números para recordar', pt: 'Números para lembrar' },
    intro: { en: 'The test loves numbers. Learn what each one is for.', es: 'El examen tiene muchas preguntas con números. Aprenda para qué sirve cada uno.', pt: 'A prova adora números. Aprenda para que serve cada um.' },
    items: [
      ['3 s', { en: 'Minimum following distance. Use more in rain, fog, behind motorcycles, or with a tailgater behind you.', es: 'Distancia mínima de seguimiento. Use más con lluvia, neblina, detrás de motocicletas o si alguien lo sigue muy de cerca.', pt: 'Distância mínima de seguimento. Use mais com chuva, neblina, atrás de motocicletas ou com alguém colado atrás de você.' }, 'img/diagrams/following-distance.svg'],
      ['10 s', { en: 'Scan at least 10 seconds ahead of your vehicle.', es: 'Mire al menos 10 segundos por delante de su vehículo.', pt: 'Observe pelo menos 10 segundos à frente do seu veículo.' }],
      ['100 ft', { en: 'Signal at least 100 feet before you turn. No passing within 100 feet of an intersection, bridge, tunnel, or railroad crossing.', es: 'Señale al menos 100 pies antes de dar vuelta. No rebase a menos de 100 pies de una intersección, puente, túnel o cruce de tren.', pt: 'Dê seta pelo menos 100 pés antes de virar. Não ultrapasse a menos de 100 pés de um cruzamento, ponte, túnel ou passagem de nível.' }],
      ['5 s', { en: 'Signal at least 5 seconds before changing lanes on a freeway (about 400 feet before an exit).', es: 'Señale al menos 5 segundos antes de cambiar de carril en la autopista (unos 400 pies antes de una salida).', pt: 'Dê seta pelo menos 5 segundos antes de mudar de faixa na rodovia (cerca de 400 pés antes de uma saída).' }],
      ['3 ft', { en: 'Leave at least 3 feet when passing a bicyclist. Never park within 3 feet of a sidewalk ramp for disabled persons.', es: 'Deje al menos 3 pies al rebasar a un ciclista. Nunca se estacione a menos de 3 pies de una rampa para personas con discapacidad.', pt: 'Deixe pelo menos 3 pés ao ultrapassar um ciclista. Nunca estacione a menos de 3 pés de uma rampa para pessoas com deficiência.' }],
      ['15 ft', { en: 'Never park within 15 feet of a fire hydrant. Stop at least 15 feet from the nearest railroad track when a train is coming.', es: 'Nunca se estacione a menos de 15 pies de un hidrante. Deténgase al menos a 15 pies de la vía más cercana cuando viene un tren.', pt: 'Nunca estacione a menos de 15 pés de um hidrante. Pare a pelo menos 15 pés do trilho mais próximo quando um trem estiver vindo.' }],
      ['20 ft', { en: 'Never park within 20 feet of a crosswalk (15 feet where there is a curb extension).', es: 'Nunca se estacione a menos de 20 pies de un cruce peatonal (15 pies donde hay una extensión de la banqueta).', pt: 'Nunca estacione a menos de 20 pés de uma faixa de pedestres (15 pés onde há extensão de calçada).' }],
      ['18 in', { en: 'When parallel parking, end up within 18 inches of the curb.', es: 'Al estacionarse en paralelo, quede a no más de 18 pulgadas de la acera.', pt: 'Ao fazer baliza, fique a até 18 polegadas do meio-fio.' }],
      ['200 ft', { en: 'U-turn in a residential district only if no vehicle is coming within 200 feet. Never U-turn if you cannot see 200 feet each way.', es: 'Vuelta en U en zona residencial solo si ningún vehículo se acerca a menos de 200 pies. Nunca la haga si no puede ver 200 pies en cada dirección.', pt: 'Retorno em bairro residencial só se nenhum veículo estiver a menos de 200 pés. Nunca retorne se não conseguir ver 200 pés em cada direção.' }],
      ['300 ft', { en: 'Dim high beams within 300 feet of a car you follow. Do not follow within 300 feet of an emergency vehicle with lights or siren on.', es: 'Baje las luces altas a menos de 300 pies del vehículo que sigue. No siga a menos de 300 pies a un vehículo de emergencia con luces o sirena.', pt: 'Baixe o farol alto a menos de 300 pés do carro que você segue. Não siga a menos de 300 pés de um veículo de emergência com luzes ou sirene.' }],
      ['500 ft', { en: 'Dim high beams within 500 feet of an oncoming car. School zone: 25 mph within 500 feet while children are present.', es: 'Baje las luces altas a menos de 500 pies de un vehículo que viene de frente. Zona escolar: 25 mph a menos de 500 pies cuando hay niños.', pt: 'Baixe o farol alto a menos de 500 pés de um carro que vem de frente. Zona escolar: 25 mph a menos de 500 pés quando há crianças.' }],
      [{ en: '10 days', es: '10 días', pt: '10 dias' }, { en: 'Report a collision to DMV (SR 1) within 10 days if damage is over $1,000 or anyone was hurt or killed. Tell law enforcement within 24 hours if anyone was hurt or killed.', es: 'Informe un choque al DMV (SR 1) en 10 días si el daño es mayor de $1,000 o alguien resultó herido o muerto. Avise a la policía en 24 horas si alguien resultó herido o muerto.', pt: 'Informe uma colisão ao DMV (SR 1) em até 10 dias se o dano passar de US$ 1.000 ou se alguém se feriu ou morreu. Avise a polícia em até 24 horas se alguém se feriu ou morreu.' }]
    ]
  },
  {
    id: 'speed', icon: '🚗', topics: ['speed'],
    title: { en: 'Speed limits', es: 'Límites de velocidad', pt: 'Limites de velocidade' },
    intro: { en: 'Basic Speed Law: never drive faster than is safe for the conditions, whatever the sign says.', es: 'Ley Básica de Velocidad: nunca maneje más rápido de lo que es seguro para las condiciones, diga lo que diga la señal.', pt: 'Lei Básica de Velocidade: nunca dirija mais rápido do que é seguro para as condições, não importa o que a placa diga.' },
    items: [
      ['65', { en: 'Most California highways, unless posted otherwise.', es: 'La mayoría de las carreteras de California, salvo otra indicación.', pt: 'A maioria das rodovias da Califórnia, salvo indicação em contrário.' }, 'img/signs/speed-limit-65.svg'],
      ['55', { en: 'Two-lane undivided highways, and any vehicle towing a trailer.', es: 'Carreteras de dos carriles sin división, y vehículos que remolcan un tráiler.', pt: 'Rodovias de duas faixas sem divisão, e veículos rebocando trailer.' }],
      ['30', { en: 'Highest safe speed when you cannot see farther than 100 feet (heavy rain, fog, storm).', es: 'Velocidad máxima segura cuando no puede ver más de 100 pies (lluvia fuerte, neblina, tormenta).', pt: 'Maior velocidade segura quando você não enxerga além de 100 pés (chuva forte, neblina, tempestade).' }],
      ['25', { en: 'Within 500 feet of a school while children are outside or crossing (some zones post 15).', es: 'A menos de 500 pies de una escuela cuando hay niños afuera o cruzando (algunas zonas indican 15).', pt: 'A menos de 500 pés de uma escola quando há crianças do lado de fora ou atravessando (algumas zonas indicam 15).' }, 'img/signs/school.svg'],
      ['15', { en: 'Alleys, and blind intersections. Also within 100 feet of a railroad crossing if you cannot see the tracks for 400 feet both ways.', es: 'Callejones e intersecciones sin visibilidad. También a menos de 100 pies de un cruce de tren si no puede ver las vías 400 pies en ambas direcciones.', pt: 'Becos e cruzamentos sem visibilidade. Também a menos de 100 pés de uma passagem de nível se você não vê os trilhos por 400 pés nos dois sentidos.' }],
      ['10', { en: 'Most you may go when passing a bus or streetcar stopped at a safety zone.', es: 'Lo máximo al pasar un autobús o tranvía detenido en una zona de seguridad.', pt: 'O máximo ao passar por um ônibus ou bonde parado em uma zona de segurança.' }],
      [{ en: 'Wet', es: 'Mojado', pt: 'Molhado' }, { en: 'Slow down 5 to 10 mph.', es: 'Reduzca de 5 a 10 mph.', pt: 'Reduza de 5 a 10 mph.' }],
      [{ en: 'Snow', es: 'Nieve', pt: 'Neve' }, { en: 'Packed snow: cut your speed in half.', es: 'Nieve compactada: reduzca su velocidad a la mitad.', pt: 'Neve compactada: reduza a velocidade pela metade.' }],
      [{ en: 'Ice', es: 'Hielo', pt: 'Gelo' }, { en: 'No more than 5 mph.', es: 'No más de 5 mph.', pt: 'No máximo 5 mph.' }]
    ]
  },
  {
    id: 'curbs', icon: '🎨', topics: ['parking'],
    title: { en: 'Curb colors', es: 'Colores de la acera', pt: 'Cores do meio-fio' },
    intro: { en: 'Painted curbs have special parking rules.', es: 'Las aceras pintadas tienen reglas especiales de estacionamiento.', pt: 'Meios-fios pintados têm regras especiais de estacionamento.' },
    items: [
      [{ en: 'Red', es: 'Rojo', pt: 'Vermelho' }, { en: 'No stopping, standing, or parking (buses may stop in a bus-only red zone).', es: 'Prohibido detenerse, quedarse parado o estacionarse (los autobuses pueden parar en una zona roja solo para autobuses).', pt: 'Proibido parar, ficar parado ou estacionar (ônibus podem parar em zona vermelha só para ônibus).' }, 'img/diagrams/curb-red.svg'],
      [{ en: 'White', es: 'Blanco', pt: 'Branco' }, { en: 'Stop only long enough to pick up or drop off passengers.', es: 'Deténgase solo para subir o bajar pasajeros.', pt: 'Pare só para embarcar ou desembarcar passageiros.' }, 'img/diagrams/curb-white.svg'],
      [{ en: 'Green', es: 'Verde', pt: 'Verde' }, { en: 'Park for a limited time (posted on a sign or painted on the curb).', es: 'Estaciónese por tiempo limitado (indicado en una señal o pintado en la acera).', pt: 'Estacione por tempo limitado (indicado em placa ou pintado no meio-fio).' }, 'img/diagrams/curb-green.svg'],
      [{ en: 'Yellow', es: 'Amarillo', pt: 'Amarelo' }, { en: 'Load and unload passengers and freight, no longer than the posted time.', es: 'Carga y descarga de pasajeros y mercancía, no más del tiempo indicado.', pt: 'Embarque e desembarque de passageiros e mercadorias, não mais que o tempo indicado.' }, 'img/diagrams/curb-yellow.svg'],
      [{ en: 'Blue', es: 'Azul', pt: 'Azul' }, { en: 'Disabled parking only, with a special placard or license plate.', es: 'Solo estacionamiento para personas con discapacidad, con placa o letrero especial.', pt: 'Só para pessoas com deficiência, com cartão ou placa especial.' }, 'img/diagrams/curb-blue.svg']
    ]
  },
  {
    id: 'hills', icon: '⛰️', topics: ['parking'],
    title: { en: 'Parking on a hill', es: 'Estacionarse en una pendiente', pt: 'Estacionar em ladeira' },
    intro: { en: 'Turn the wheels so the car rolls into the curb or away from traffic. Always set the parking brake and leave it in park.', es: 'Gire las ruedas para que el auto ruede hacia la acera o lejos del tráfico. Siempre ponga el freno de mano y déjelo en park.', pt: 'Vire as rodas para o carro rolar para o meio-fio ou para longe do trânsito. Sempre puxe o freio de mão e deixe em park.' },
    items: [
      [{ en: 'Uphill + curb', es: 'Subida + acera', pt: 'Subida + meio-fio' }, { en: 'Wheels AWAY from the curb (left). Let the car roll back gently against the curb. "Up, up and away."', es: 'Ruedas LEJOS de la acera (izquierda). Deje que el auto ruede un poco hacia atrás hasta tocar la acera.', pt: 'Rodas PARA LONGE do meio-fio (esquerda). Deixe o carro descer um pouco até encostar no meio-fio.' }, 'img/diagrams/hill-uphill-curb.svg'],
      [{ en: 'Downhill + curb', es: 'Bajada + acera', pt: 'Descida + meio-fio' }, { en: 'Wheels TOWARD the curb (right).', es: 'Ruedas HACIA la acera (derecha).', pt: 'Rodas PARA o meio-fio (direita).' }, 'img/diagrams/hill-downhill-curb.svg'],
      [{ en: 'No curb', es: 'Sin acera', pt: 'Sem meio-fio' }, { en: 'Uphill or downhill: wheels to the RIGHT, toward the shoulder.', es: 'En subida o bajada: ruedas a la DERECHA, hacia el acotamiento.', pt: 'Subindo ou descendo: rodas para a DIREITA, para o acostamento.' }, 'img/diagrams/hill-uphill-no-curb.svg'],
      [{ en: 'Driveway', es: 'Entrada', pt: 'Garagem' }, { en: 'On a sloping driveway, turn the wheels so the car will not roll into the street.', es: 'En una entrada inclinada, gire las ruedas para que el auto no ruede a la calle.', pt: 'Em uma entrada inclinada, vire as rodas para o carro não descer para a rua.' }]
    ]
  },
  {
    id: 'lines', icon: '🛣️', topics: ['markings'],
    title: { en: 'Lines on the road', es: 'Líneas en el camino', pt: 'Faixas na via' },
    intro: { en: 'Yellow lines separate traffic going opposite ways. White lines separate lanes going the same way.', es: 'Las líneas amarillas separan el tráfico en sentidos opuestos. Las blancas separan carriles en el mismo sentido.', pt: 'Linhas amarelas separam o trânsito em sentidos opostos. Linhas brancas separam faixas no mesmo sentido.' },
    items: [
      [{ en: 'Double yellow', es: 'Doble amarilla', pt: 'Dupla amarela' }, { en: 'Never cross to pass. You MAY cross it to turn left into a driveway or private road, or to make a U-turn.', es: 'Nunca la cruce para rebasar. SÍ puede cruzarla para dar vuelta a la izquierda hacia una entrada o camino privado, o para dar vuelta en U.', pt: 'Nunca cruze para ultrapassar. PODE cruzar para virar à esquerda em uma garagem ou via particular, ou para fazer retorno.' }, 'img/diagrams/double-yellow-driveway.svg'],
      [{ en: 'Two sets, 2+ ft apart', es: 'Dos juegos, 2+ pies', pt: 'Dois pares, 2+ pés' }, { en: 'A barrier. Do not drive over it, turn left across it, or U-turn across it, except at openings.', es: 'Una barrera. No la cruce, ni dé vuelta a la izquierda o en U sobre ella, salvo en aberturas.', pt: 'Uma barreira. Não passe por cima, não vire à esquerda nem retorne por ela, exceto nas aberturas.' }, 'img/diagrams/double-double-yellow.svg'],
      [{ en: 'Broken yellow', es: 'Amarilla discontinua', pt: 'Amarela tracejada' }, { en: 'You may pass if the broken line is next to your lane, when it is safe.', es: 'Puede rebasar si la línea discontinua está junto a su carril, cuando sea seguro.', pt: 'Pode ultrapassar se a linha tracejada estiver do seu lado, quando for seguro.' }, 'img/diagrams/yellow-broken-your-side.svg'],
      [{ en: 'Solid white', es: 'Blanca continua', pt: 'Branca contínua' }, { en: 'Marks lanes going the same way, including one-way streets.', es: 'Marca carriles en el mismo sentido, incluidas calles de un solo sentido.', pt: 'Marca faixas no mesmo sentido, inclusive ruas de mão única.' }],
      [{ en: 'Double white', es: 'Doble blanca', pt: 'Dupla branca' }, { en: 'A lane barrier (for example next to a carpool lane). Never change lanes over it.', es: 'Una barrera entre carriles (por ejemplo, junto al carril de uso compartido). Nunca cambie de carril sobre ella.', pt: 'Uma barreira entre faixas (por exemplo, junto à faixa de carona). Nunca mude de faixa por cima dela.' }, 'img/diagrams/hov-lane.svg'],
      [{ en: 'Broken white', es: 'Blanca discontinua', pt: 'Branca tracejada' }, { en: 'Separates lanes on roads with two or more lanes going the same way.', es: 'Separa carriles en caminos con dos o más carriles en el mismo sentido.', pt: 'Separa faixas em vias com duas ou mais faixas no mesmo sentido.' }]
    ]
  },
  {
    id: 'lights', icon: '🚦', topics: ['signals'],
    title: { en: 'Traffic lights', es: 'Semáforos', pt: 'Semáforos' },
    intro: { en: 'Flashing red is the one people mix up most: it works like a STOP sign.', es: 'La luz roja intermitente es la que más se confunde: funciona como una señal de ALTO.', pt: 'O vermelho piscante é o que mais confunde: funciona como uma placa de PARE.' },
    items: [
      [{ en: 'Solid red', es: 'Rojo fijo', pt: 'Vermelho fixo' }, { en: 'Stop. You may turn right after a full stop unless a sign says NO TURN ON RED, yielding to pedestrians and traffic.', es: 'Alto. Puede dar vuelta a la derecha después de detenerse por completo, salvo que una señal lo prohíba, cediendo el paso.', pt: 'Pare. Pode virar à direita depois de parar totalmente, a menos que uma placa proíba, dando a preferência.' }, 'img/signals/solid-red.svg'],
      [{ en: 'Flashing red', es: 'Rojo intermitente', pt: 'Vermelho piscante' }, { en: 'Same as a STOP sign: stop completely, then go when it is safe.', es: 'Igual que una señal de ALTO: deténgase por completo y siga cuando sea seguro.', pt: 'Igual a uma placa de PARE: pare totalmente e siga quando for seguro.' }, 'img/signals/flashing-red.svg'],
      [{ en: 'Red arrow', es: 'Flecha roja', pt: 'Seta vermelha' }, { en: 'Do not turn in that direction, not even right on red. Wait for green.', es: 'No dé vuelta en esa dirección, ni siquiera a la derecha. Espere la luz verde.', pt: 'Não vire nessa direção, nem à direita no vermelho. Espere o verde.' }, 'img/signals/red-arrow.svg'],
      [{ en: 'Solid yellow', es: 'Amarillo fijo', pt: 'Amarelo fixo' }, { en: 'The light is about to turn red. Stop if you can do so safely.', es: 'La luz está por cambiar a rojo. Deténgase si puede hacerlo con seguridad.', pt: 'O sinal vai ficar vermelho. Pare se puder fazer isso com segurança.' }, 'img/signals/solid-yellow.svg'],
      [{ en: 'Flashing yellow', es: 'Amarillo intermitente', pt: 'Amarelo piscante' }, { en: 'Slow down and proceed with caution. You do not need to stop.', es: 'Reduzca la velocidad y siga con precaución. No necesita detenerse.', pt: 'Reduza a velocidade e siga com cuidado. Não precisa parar.' }, 'img/signals/flashing-yellow.svg'],
      [{ en: 'Flashing yellow arrow', es: 'Flecha amarilla intermitente', pt: 'Seta amarela piscante' }, { en: 'You may turn, but oncoming traffic still has the right-of-way. Yield first.', es: 'Puede dar vuelta, pero el tráfico de frente tiene el derecho de paso. Ceda primero.', pt: 'Pode virar, mas o trânsito que vem de frente tem a preferência. Dê a preferência primeiro.' }, 'img/signals/flashing-yellow-arrow.svg'],
      [{ en: 'Green', es: 'Verde', pt: 'Verde' }, { en: 'Go, but only if the intersection is clear. A green arrow means a protected turn.', es: 'Siga, pero solo si la intersección está libre. Una flecha verde indica una vuelta protegida.', pt: 'Siga, mas só se o cruzamento estiver livre. A seta verde indica conversão protegida.' }, 'img/signals/solid-green.svg'],
      [{ en: 'Light not working', es: 'Semáforo apagado', pt: 'Semáforo apagado' }, { en: 'Treat it like STOP signs in all directions.', es: 'Trátelo como señales de ALTO en todas las direcciones.', pt: 'Trate como placas de PARE em todas as direções.' }, 'img/signals/dark-signal.svg']
    ]
  },
  {
    id: 'signs', icon: '🛑', topics: ['signs'],
    title: { en: 'Sign shapes and colors', es: 'Formas y colores de las señales', pt: 'Formatos e cores das placas' },
    intro: { en: 'You can often tell what a sign means from its shape and color before you can read it.', es: 'Muchas veces puede saber qué significa una señal por su forma y color antes de poder leerla.', pt: 'Muitas vezes dá para saber o que a placa significa pelo formato e cor antes de conseguir ler.' },
    items: [
      [{ en: 'Octagon (8 sides)', es: 'Octágono (8 lados)', pt: 'Octógono (8 lados)' }, { en: 'STOP only.', es: 'Solo ALTO.', pt: 'Só PARE.' }, 'img/signs/stop.svg'],
      [{ en: 'Triangle', es: 'Triángulo', pt: 'Triângulo' }, { en: 'YIELD.', es: 'CEDA EL PASO.', pt: 'DÊ A PREFERÊNCIA.' }, 'img/signs/yield.svg'],
      [{ en: 'Circle', es: 'Círculo', pt: 'Círculo' }, { en: 'Railroad crossing ahead.', es: 'Cruce de tren adelante.', pt: 'Passagem de nível à frente.' }, 'img/signs/rr-advance.svg'],
      [{ en: 'Five sides', es: 'Cinco lados', pt: 'Cinco lados' }, { en: 'School zone or school crossing.', es: 'Zona escolar o cruce escolar.', pt: 'Zona escolar ou travessia escolar.' }, 'img/signs/school.svg'],
      [{ en: 'Diamond', es: 'Rombo', pt: 'Losango' }, { en: 'Warning of a road condition or hazard ahead.', es: 'Advertencia de una condición o peligro adelante.', pt: 'Aviso de uma condição ou perigo à frente.' }, 'img/signs/slippery-when-wet.svg'],
      [{ en: 'Orange', es: 'Naranja', pt: 'Laranja' }, { en: 'Construction and road work.', es: 'Construcción y obras en el camino.', pt: 'Obras na via.' }, 'img/signs/road-work-ahead.svg'],
      [{ en: 'White rectangle', es: 'Rectángulo blanco', pt: 'Retângulo branco' }, { en: 'Regulatory: a law you must obey, such as a speed limit.', es: 'Reglamentaria: una ley que debe obedecer, como un límite de velocidad.', pt: 'Regulamentação: uma lei a obedecer, como um limite de velocidade.' }, 'img/signs/speed-limit-25.svg'],
      [{ en: 'Blue / brown', es: 'Azul / café', pt: 'Azul / marrom' }, { en: 'Blue: services such as rest areas. Brown: recreation and tourist areas.', es: 'Azul: servicios como áreas de descanso. Café: áreas recreativas y turísticas.', pt: 'Azul: serviços como áreas de descanso. Marrom: áreas de lazer e turismo.' }, 'img/signs/rest-area.svg'],
      [{ en: 'Red circle with slash', es: 'Círculo rojo con diagonal', pt: 'Círculo vermelho com barra' }, { en: 'Something is not allowed (NO U-TURN, NO LEFT TURN).', es: 'Algo está prohibido (NO VUELTA EN U, NO VUELTA A LA IZQUIERDA).', pt: 'Algo é proibido (PROIBIDO RETORNO, PROIBIDO VIRAR À ESQUERDA).' }, 'img/signs/no-u-turn.svg']
    ]
  },
  {
    id: 'row', icon: '🤝', topics: ['rightofway', 'emergency'],
    title: { en: 'Who goes first', es: 'Quién pasa primero', pt: 'Quem passa primeiro' },
    intro: { en: 'Right-of-way is given, not taken. Give it up if that helps avoid a collision.', es: 'El derecho de paso se cede, no se toma. Ceda si eso ayuda a evitar un choque.', pt: 'A preferência se dá, não se toma. Abra mão dela se isso ajudar a evitar uma colisão.' },
    items: [
      [{ en: 'Same time', es: 'Al mismo tiempo', pt: 'Ao mesmo tempo' }, { en: 'At a 4-way stop or uncontrolled intersection, yield to the vehicle on your RIGHT.', es: 'En un alto de 4 vías o una intersección sin señales, ceda al vehículo de su DERECHA.', pt: 'Em parada de 4 vias ou cruzamento sem sinalização, dê a preferência ao veículo da sua DIREITA.' }, 'img/diagrams/four-way-stop.svg'],
      [{ en: 'T intersection', es: 'Intersección en T', pt: 'Cruzamento em T' }, { en: 'Traffic on the through road has the right-of-way.', es: 'El tráfico en el camino que continúa tiene el derecho de paso.', pt: 'O trânsito da via que continua tem a preferência.' }, 'img/diagrams/t-intersection.svg'],
      [{ en: 'Left turn', es: 'Vuelta a la izquierda', pt: 'Conversão à esquerda' }, { en: 'Yield to pedestrians and oncoming traffic close enough to be a danger.', es: 'Ceda a los peatones y al tráfico de frente que esté lo bastante cerca para ser un peligro.', pt: 'Dê a preferência aos pedestres e ao trânsito de frente perto o bastante para ser perigoso.' }],
      [{ en: 'Pedestrians', es: 'Peatones', pt: 'Pedestres' }, { en: 'Right-of-way in marked AND unmarked crosswalks. Blind pedestrians (white cane or guide dog) always.', es: 'Tienen el derecho de paso en cruces marcados Y no marcados. Los peatones ciegos (bastón blanco o perro guía), siempre.', pt: 'Têm a preferência em faixas marcadas E não marcadas. Pedestres cegos (bengala branca ou cão-guia), sempre.' }, 'img/signs/pedestrian-crossing.svg'],
      [{ en: 'Roundabout', es: 'Glorieta', pt: 'Rotatória' }, { en: 'Yield to traffic already inside. Drive counterclockwise. Missed your exit? Go around again.', es: 'Ceda al tráfico que ya está dentro. Circule en sentido contrario a las manecillas del reloj. ¿Se pasó la salida? Dé otra vuelta.', pt: 'Dê a preferência a quem já está dentro. Circule no sentido anti-horário. Perdeu a saída? Dê outra volta.' }, 'img/diagrams/roundabout.svg'],
      [{ en: 'Steep narrow road', es: 'Camino angosto y empinado', pt: 'Via estreita e íngreme' }, { en: 'The vehicle going UPHILL has the right-of-way.', es: 'El vehículo que SUBE tiene el derecho de paso.', pt: 'O veículo que SOBE tem a preferência.' }, 'img/diagrams/mountain-road.svg'],
      [{ en: 'Siren behind you', es: 'Sirena detrás', pt: 'Sirene atrás' }, { en: 'Pull to the right edge and stop until it passes. In an intersection? Clear it first.', es: 'Oríllese a la derecha y deténgase hasta que pase. ¿Está en una intersección? Sálgase primero.', pt: 'Encoste na borda direita e pare até ele passar. Está no cruzamento? Saia dele primeiro.' }, 'img/diagrams/emergency-behind.svg'],
      [{ en: 'School bus, red lights', es: 'Autobús escolar, luces rojas', pt: 'Ônibus escolar, luzes vermelhas' }, { en: 'Stop from both directions until the lights stop flashing. Exception: bus on the other side of a divided or multilane highway.', es: 'Deténgase en ambos sentidos hasta que las luces dejen de parpadear. Excepción: autobús del otro lado de una carretera dividida o de varios carriles.', pt: 'Pare nos dois sentidos até as luzes pararem de piscar. Exceção: ônibus do outro lado de uma rodovia dividida ou com várias faixas.' }, 'img/diagrams/school-bus-two-lane.svg']
    ]
  },
  {
    id: 'alcohol', icon: '🍺', topics: ['impairment'],
    title: { en: 'Alcohol, drugs and phones', es: 'Alcohol, drogas y teléfonos', pt: 'Álcool, drogas e celular' },
    intro: { en: 'Blood alcohol concentration (BAC) limits depend on your age and what you drive.', es: 'Los límites de concentración de alcohol en la sangre (BAC) dependen de su edad y de lo que maneja.', pt: 'Os limites de álcool no sangue (BAC) dependem da sua idade e do que você dirige.' },
    items: [
      ['0.08%', { en: 'Illegal at 0.08% or higher if you are 21 or older.', es: 'Ilegal con 0.08% o más si tiene 21 años o más.', pt: 'Ilegal com 0,08% ou mais se você tem 21 anos ou mais.' }],
      ['0.04%', { en: 'Commercial drivers and anyone driving passengers for hire.', es: 'Conductores comerciales y quienes transportan pasajeros por pago.', pt: 'Motoristas comerciais e quem transporta passageiros mediante pagamento.' }],
      ['0.01%', { en: 'Under 21, or on DUI probation at any age.', es: 'Menores de 21, o en libertad condicional por DUI a cualquier edad.', pt: 'Menores de 21 anos, ou em liberdade condicional por DUI em qualquer idade.' }],
      [{ en: 'Open container', es: 'Envase abierto', pt: 'Recipiente aberto' }, { en: 'Must be in the trunk, not the glove box or under a seat.', es: 'Debe ir en la cajuela, no en la guantera ni debajo de un asiento.', pt: 'Deve ficar no porta-malas, não no porta-luvas nem embaixo do banco.' }],
      [{ en: 'Refuse a test', es: 'Negarse a la prueba', pt: 'Recusar o teste' }, { en: 'DMV suspends or revokes your driving privilege for one year.', es: 'El DMV suspende o revoca su privilegio de manejar por un año.', pt: 'O DMV suspende ou cassa seu direito de dirigir por um ano.' }],
      [{ en: 'Medicine', es: 'Medicinas', pt: 'Remédios' }, { en: 'Any drug that affects your driving counts, even one a doctor prescribed.', es: 'Cuenta cualquier droga que afecte su manejo, aunque la haya recetado un médico.', pt: 'Conta qualquer droga que afete sua direção, mesmo receitada por médico.' }],
      [{ en: 'Phones', es: 'Teléfonos', pt: 'Celular' }, { en: 'Adults: hands-free only. Under 18: no phone at all while driving, except to call for emergency help.', es: 'Adultos: solo manos libres. Menores de 18: nada de teléfono al manejar, excepto para pedir ayuda de emergencia.', pt: 'Adultos: só viva-voz. Menores de 18: nada de celular dirigindo, exceto para pedir ajuda de emergência.' }],
      [{ en: 'Earbuds', es: 'Audífonos', pt: 'Fones' }, { en: 'Illegal to wear a headset or earplugs in both ears while driving.', es: 'Es ilegal usar audífonos o tapones en ambos oídos al manejar.', pt: 'É ilegal usar fone ou tampões nos dois ouvidos ao dirigir.' }]
    ]
  },
  {
    id: 'license', icon: '🪪', topics: ['laws'],
    title: { en: 'Permit and teen license rules', es: 'Permiso y licencia para menores', pt: 'Permissão e carteira para menores' },
    intro: { en: 'Rules for drivers under 18 show up on the test often.', es: 'Las reglas para conductores menores de 18 aparecen seguido en el examen.', pt: 'As regras para motoristas menores de 18 aparecem muito na prova.' },
    items: [
      ['15½', { en: 'Minimum age for an instruction permit.', es: 'Edad mínima para el permiso de instrucción.', pt: 'Idade mínima para a permissão de aprendizagem.' }],
      ['50 h', { en: 'Supervised practice before the license, 10 hours of it at night, with a licensed driver 25 or older.', es: 'Práctica supervisada antes de la licencia, 10 horas de noche, con un conductor con licencia de 25 años o más.', pt: 'Prática supervisionada antes da carteira, 10 horas à noite, com um motorista habilitado de 25 anos ou mais.' }],
      ['11 p.m.–5 a.m.', { en: 'First 12 months with a provisional license: no driving in these hours without an exception.', es: 'Primeros 12 meses con licencia provisional: no manejar en este horario sin una excepción.', pt: 'Primeiros 12 meses com carteira provisória: não dirigir nesse horário sem exceção.' }],
      [{ en: 'Passengers under 20', es: 'Pasajeros menores de 20', pt: 'Passageiros menores de 20' }, { en: 'Not allowed in the first 12 months unless a licensed driver 25 or older rides along.', es: 'No se permiten en los primeros 12 meses salvo que vaya un conductor con licencia de 25 años o más.', pt: 'Não permitidos nos primeiros 12 meses, a menos que vá junto um motorista habilitado de 25 anos ou mais.' }],
      ['3', { en: 'Attempts to pass the knowledge test before you must reapply. Minors wait 7 days to retake.', es: 'Intentos para aprobar el examen de conocimientos antes de volver a solicitar. Los menores esperan 7 días para repetirlo.', pt: 'Tentativas para passar na prova teórica antes de fazer novo pedido. Menores esperam 7 dias para refazer.' }],
      [{ en: 'Seat belts', es: 'Cinturones', pt: 'Cintos' }, { en: 'You and every passenger. Children under 8 (and under 4 ft 9 in) ride in a child seat.', es: 'Usted y todos los pasajeros. Los niños menores de 8 años (y de menos de 4 pies 9 pulgadas) van en asiento infantil.', pt: 'Você e todos os passageiros. Crianças com menos de 8 anos (e menos de 4 pés e 9 polegadas) vão em cadeirinha.' }]
    ]
  }
];
