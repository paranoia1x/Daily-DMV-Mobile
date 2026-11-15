/* Portuguese question translations (machine/AI translation, not yet reviewed by a native speaker).
   DMV_TR.pt[id] = { q, c: [[text, explain], ...] in the same order as the English choices, tip, alt }. */
window.DMV_TR = window.DMV_TR || {};
(function () {
  const D = window.DMV_TR.pt = {};
  function T(id, q, c, tip, alt) { D[id] = { q: q, c: c, tip: tip, alt: alt }; }
T("SGN-001", "O que você deve fazer diante desta placa?", [
["Parar totalmente e depois seguir quando for seguro", "Correto. A placa de STOP (PARE) exige parada total na linha de parada, antes da faixa de pedestres ou antes do cruzamento. Depois, olhe o trânsito em todas as direções e siga quando for seguro."],
["Reduzir a velocidade e seguir se ninguém estiver vindo", "Reduzir a velocidade é o que pede uma placa de YIELD (dê a preferência). Diante desta placa você deve parar totalmente, mesmo que a via pareça vazia."],
["Parar só se houver outros veículos", "A parada é obrigatória sempre. Pode haver pedestres, ciclistas ou veículos por perto que você não viu; por isso a parada total sempre vale."]],
"Oito lados = STOP. O formato octogonal é usado só para placas de STOP.", "Placa vermelha de oito lados com borda branca e letras brancas.");
T("SGN-002", "Diante desta placa não há linha de parada nem faixa de pedestres. Onde você deve parar?", [
["No meio do cruzamento, onde se enxerga melhor", "Parar dentro do cruzamento coloca seu carro no caminho do trânsito que cruza. Você deve parar antes de entrar."],
["Antes de entrar no cruzamento", "Correto. Pare na linha de parada, se houver; se não, antes da faixa de pedestres. Se não houver nenhuma das duas, pare antes de entrar no cruzamento."],
["Logo depois da placa, onde for mais prático", "O manual indica um lugar específico para parar. Nenhum lugar que bloqueie o cruzamento ou a faixa de pedestres é permitido."]],
"Linha de parada → faixa de pedestres → borda do cruzamento: pare no primeiro que existir.", "Placa vermelha de oito lados com letras brancas.");
T("SGN-003", "O que esta placa indica?", [
["Sempre parar totalmente", "A parada total só é necessária se o trânsito ou pessoas exigirem. Se o caminho estiver livre, você pode seguir com cuidado."],
["Reduzir a velocidade e estar pronto para parar e deixar os outros passarem primeiro", "Correto. Diante de uma placa de YIELD (dê a preferência), reduza a velocidade e esteja pronto para parar, para que qualquer veículo, ciclista ou pedestre passe antes de você."],
["Acelerar para entrar antes do restante do trânsito", "Acelerar para passar na frente dos outros é o contrário de dar a preferência. A placa significa que os outros passam primeiro."],
["Parar só para pedestres, não para veículos", "Dar a preferência vale também para veículos e ciclistas, não só para quem está a pé."]],
"Triângulo de ponta para baixo = YIELD: “deixe os outros passarem primeiro”.", "Placa triangular vermelha e branca com a ponta para baixo e letras vermelhas.");
T("SGN-004", "O que significa esta placa?", [
["Entrar só se houver pouco trânsito", "Esta placa não tem exceções por pouco trânsito. Entrar coloca você na contramão em uma rua ou rampa."],
["Via fechada à frente por obras", "Fechamentos por obras usam placas laranja como ROAD CLOSED AHEAD. Esta placa vermelha e branca trata do sentido de circulação."],
["Você não pode entrar na rua ou rampa onde está a placa", "Correto. DO NOT ENTER (não entre) significa que o trânsito vem na sua direção naquela rua ou rampa. Entrar colocaria você de frente com outros motoristas."]],
"Placas vermelhas e brancas são ordens. DO NOT ENTER = contramão à frente.", "Placa quadrada com um círculo vermelho atravessado por uma barra horizontal branca e palavras brancas.");
T("SGN-005", "Você vê esta placa de frente logo depois de entrar em uma rua. O que deve fazer?", [
["Quando for seguro, sair de ré ou fazer o retorno", "Correto. A placa WRONG WAY (contramão) significa que você está dirigindo contra o trânsito. Quando for seguro, saia de ré ou faça o retorno."],
["Continuar e procurar a próxima saída", "Continuar significa dirigir contra o trânsito, o que pode causar uma colisão de frente. Saia desse sentido assim que for seguro."],
["Parar na sua faixa e esperar ajuda", "Ficar parado em uma faixa de frente para o trânsito que vem é perigoso. O manual diz para sair de ré ou fazer o retorno quando for seguro."],
["Ligar o pisca-alerta e dirigir pelo acostamento", "O acostamento não resolve o fato de estar na contramão. Você ainda precisa sair desse sentido com segurança."]],
"À noite, se os refletores da pista brilharem vermelhos à sua frente, você também está na contramão.", "Placa retangular horizontal vermelha com palavras brancas.");
T("SGN-006", "O que significa esta placa?", [
["Retornos (U-turn) não são permitidos aqui", "Correto. Um círculo vermelho com uma linha vermelha cortando significa que a ação desenhada dentro não é permitida. Aqui, o desenho é um retorno."],
["Faixa de retorno à frente", "Placas que mostram um uso permitido da faixa não têm o círculo vermelho nem a linha diagonal. A linha diagonal sempre significa “não”."],
["Curva acentuada à frente", "Avisos de curva são losangos amarelos. Esta é uma placa vermelha e branca que proíbe uma ação."]],
"Círculo vermelho + linha diagonal = “NÃO” ao que estiver desenhado dentro.", "Placa quadrada branca com uma seta preta em forma de U dentro de um círculo vermelho com uma linha diagonal vermelha.");
T("SGN-007", "O que esta placa indica?", [
["A faixa da esquerda termina à frente", "Avisos de fim de faixa são placas amarelas. Um círculo vermelho com linha diagonal proíbe a ação desenhada."],
["Proibido virar à esquerda", "Correto. A seta mostra uma conversão à esquerda e o círculo vermelho com linha diagonal significa que essa conversão não é permitida."],
["Só é permitido virar à esquerda com seta verde", "Esta placa não fala de semáforos. Ela proíbe totalmente a conversão à esquerda nesse local."]],
"Leia o desenho e acrescente “NÃO” por causa da linha diagonal.", "Placa quadrada branca com uma seta preta que dobra à esquerda dentro de um círculo vermelho com uma linha diagonal vermelha.");
T("SGN-008", "O que significa esta placa?", [
["Somente conversão à direita", "Uma placa de “somente à direita” mostra uma seta sem linha diagonal vermelha, geralmente com a palavra ONLY."],
["Dê a preferência ao trânsito da direita", "Dar a preferência é indicado pelo triângulo vermelho e branco de YIELD, não por uma seta riscada."],
["Curva acentuada à direita", "Avisos de curva são losangos amarelos, não placas vermelhas e brancas de proibição."],
["Proibido virar à direita", "Correto. A seta mostra uma conversão à direita, e o círculo vermelho com linha diagonal significa que você não pode fazê-la aqui."]],
"", "Placa quadrada branca com uma seta preta que dobra à direita dentro de um círculo vermelho com uma linha diagonal vermelha.");
T("SGN-009", "Você está parado no sinal vermelho e esta placa está ali. O que pode fazer?", [
["Virar à direita depois de parar totalmente, se ninguém estiver vindo", "Normalmente isso é permitido, mas esta placa elimina essa opção. Você deve esperar o sinal verde."],
["Virar à esquerda para uma rua de mão única", "Virar no vermelho é justamente o que a placa proíbe. Espere o sinal mudar."],
["Esperar o sinal verde antes de virar", "Correto. Na Califórnia, em geral você pode virar à direita no vermelho depois de parar totalmente, a menos que haja uma placa NO TURN ON RED (proibido virar no vermelho), como esta."]],
"Virar à direita no vermelho: permitido, a menos que uma placa diga NO TURN ON RED.", "Placa retangular branca com palavras pretas e um círculo vermelho.");
T("SGN-010", "O que esta placa indica?", [
["Você deve virar à direita na próxima esquina", "A seta mostra o sentido do trânsito naquela rua. Ela não obriga você a virar."],
["Desvio à frente", "Placas de desvio usam outro texto. Esta placa mostra o único sentido de circulação permitido."],
["O trânsito desta rua segue só no sentido da seta", "Correto. Placas ONE WAY (mão única) mostram o único sentido em que o trânsito pode circular naquela rua."],
["Entrada da rodovia à direita", "Entradas de rodovia são indicadas por placas verdes de orientação, não por placas ONE WAY."]],
"", "Placa horizontal preta com uma seta branca apontando para a direita contendo palavras pretas.");
T("SGN-011", "O que significa esta placa?", [
["Não ultrapasse outros veículos neste trecho", "Correto. Uma placa DO NOT PASS (proibido ultrapassar) significa que você não pode ultrapassar veículos naquele trecho."],
["Ultrapasse só pela direita", "A placa não cria uma regra de ultrapassar pela direita. Ela diz que ultrapassar não é permitido naquele trecho."],
["Pode ultrapassar se não houver trânsito vindo de frente", "A regra vale mesmo que a via pareça livre. Perigos que não se veem costumam ser o motivo da proibição."]],
"", "Placa retangular vertical branca com três linhas de palavras pretas.");
T("SGN-012", "Você está dirigindo mais devagar que o restante do trânsito em uma via de várias faixas com esta placa. O que deve fazer?", [
["Ficar na faixa da esquerda para que os outros vejam você", "A faixa da esquerda é para ultrapassar. Andar devagar ali bloqueia o trânsito e leva a ultrapassagens perigosas pela direita."],
["Dirigir na faixa da direita", "Correto. Se você dirige mais devagar que o restante do trânsito, use a faixa da direita. Quando um motorista atrás de você quiser ir mais rápido, vá para a direita."],
["Dirigir pelo acostamento", "O acostamento não é faixa de circulação. Use a faixa da direita."]],
"", "Placa retangular vertical branca com quatro linhas de palavras pretas.");
T("SGN-013", "Você está dirigindo devagar em uma via de duas faixas onde ultrapassar não é seguro. Há cinco veículos enfileirados atrás de você. O que a lei exige?", [
["Acelerar até o limite de velocidade mesmo que não pareça seguro", "Você nunca deve dirigir mais rápido do que é seguro. A lei dá outra solução: o recuo (turnout)."],
["Usar uma área ou faixa de recuo para deixá-los passar", "Correto. Você deve usar um recuo para deixar os veículos passarem quando dirige devagar em uma via de duas faixas onde ultrapassar não é seguro e há cinco ou mais veículos atrás de você."],
["Continuar; os de trás têm que esperar", "Segurar uma fila de cinco ou mais veículos onde ultrapassar não é seguro é exatamente quando você deve deixá-los passar."],
["Fazer sinal para que ultrapassem pela contramão", "Fazer sinal para alguém entrar na contramão pode causar uma colisão de frente. Use o recuo."]],
"Cinco ou mais atrás + ultrapassar não é seguro = use o recuo.", "Placa retangular branca com quatro linhas de palavras pretas.");
T("SGN-014", "Do que avisa esta placa redonda amarela?", [
["Há uma área de descanso à frente", "Áreas de descanso aparecem em placas azuis. A placa redonda amarela é usada para passagens de nível (ferrovias)."],
["Cruzamento sem placas de parada", "O aviso de cruzamento é um losango amarelo com uma cruz, não uma placa redonda."],
["Há uma passagem de nível (ferrovia) à frente", "Correto. Uma placa redonda amarela e preta avisa de uma passagem de nível à frente. Olhe, escute, reduza a velocidade e esteja pronto para parar."]],
"Placa redonda amarela = trem à frente.", "Placa redonda amarela com um X preto e duas letras pretas.");
T("SGN-015", "Você vê esta placa em forma de X. O que deve fazer?", [
["Olhar, escutar, reduzir a velocidade e estar pronto para parar por causa de trens", "Correto. Esta placa marca a própria passagem de nível. Deixe qualquer trem passar antes de seguir."],
["Acelerar para atravessar os trilhos rápido", "Acelerar diminui seu tempo para perceber um trem. O seguro é reduzir a velocidade e estar pronto para parar."],
["Parar só se um trem estiver à vista", "Trens podem vir de qualquer direção a qualquer momento, e você pode ouvir um antes de vê-lo. Reduza a velocidade, olhe e escute em toda passagem de nível."]],
"", "Placa branca em forma de X com palavras pretas nas duas tábuas.");
T("SGN-016", "Esta placa pequena fica embaixo de uma placa de passagem de nível. O que ela indica?", [
["Só passam três trens por dia na passagem", "O número indica trilhos, não a frequência dos trens. Espere um trem a qualquer momento."],
["A passagem tem mais de uma linha de trilhos", "Correto. A placa mostra o número de linhas. Depois que um trem passa, outro pode vir por outra linha, de qualquer direção."],
["Você deve parar três vezes antes de atravessar", "Não existe regra de parar três vezes. A placa diz quantas linhas há."]],
"Mais linhas = mais lugares onde pode haver um trem. Olhe de novo depois que um trem passar.", "Placa branca pequena com um número dentro de um quadro e uma palavra.");
T("SGN-017", "O que significa esta placa de cinco lados?", [
["Você está perto de uma escola", "Correto. A placa de cinco lados significa que você está perto de uma escola. Dirija devagar e pare para crianças na faixa de pedestres."],
["Parquinho sem mudança no limite de velocidade", "Esta placa marca uma área escolar. Reduza a velocidade e esteja pronto para parar por causa das crianças."],
["Aqui os pedestres devem dar a preferência aos veículos", "Os motoristas dão a preferência aos pedestres, principalmente às crianças nas faixas. A placa pede cuidado aos motoristas."],
["Fim da zona escolar", "A placa indica que você está perto de uma escola, não o fim da zona."]],
"Cinco lados, como uma casinha de escola.", "Placa verde-amarelada de cinco lados com duas crianças caminhando.");
T("SGN-018", "Do que esta placa avisa?", [
["A calçada termina à frente", "Esta placa mostra uma pessoa andando para avisar de pedestres atravessando, não o fim da calçada."],
["Estacionamento de trilha para caminhada", "Informações de trilhas e lazer usam placas marrons, não losangos amarelos de aviso."],
["Travessia de pedestres à frente", "Correto. Esta placa de aviso significa que pode haver pessoas atravessando à frente. Reduza a velocidade e esteja pronto para parar."]],
"", "Placa amarela em forma de losango com o símbolo preto de uma pessoa andando.");
T("SGN-019", "O que significa esta placa?", [
["Lava-rápido à frente", "As linhas onduladas são marcas de pneus de um carro derrapando, não água de lava-rápido."],
["Pista sinuosa à frente", "A placa de pista sinuosa mostra uma só seta em zigue-zague. Esta mostra um carro derrapando."],
["Via em obras", "Avisos de obras são laranja, não amarelos."],
["A pista fica escorregadia quando molhada", "Correto. Reduza a velocidade quando a pista estiver molhada, evite frear ou virar bruscamente e deixe mais espaço."]],
"Marcas onduladas atrás de um carro = escorregadio.", "Placa amarela em forma de losango com um carro e duas linhas onduladas atrás dele.");
T("SGN-020", "Do que esta placa avisa?", [
["Pode haver trânsito entrando na sua faixa pela lateral", "Correto. Esta placa “Merging Traffic” (trânsito entrando) avisa que veículos de outra faixa ou rampa vão entrar na sua via. Fique atento e ajuste a velocidade ou a posição."],
["Sua faixa termina e você deve parar", "A placa não pede para parar. Ela avisa que outro trânsito vai entrar na sua via."],
["Começa uma rodovia com canteiro central", "A placa de rodovia dividida mostra o trânsito separado por um canteiro, com setas em sentidos opostos."]],
"", "Placa amarela em forma de losango com uma seta reta para cima e uma linha curva que se junta a ela pela direita.");
T("SGN-021", "O que significa esta placa?", [
["A rodovia dividida termina à frente", "Na versão de “fim”, o canteiro fica embaixo e as faixas se juntam em cima."],
["Trânsito nos dois sentidos à frente", "A placa de mão dupla mostra duas setas simples sem canteiro entre elas."],
["Começa uma rodovia dividida à frente", "Correto. Um canteiro ou divisória vai separar o trânsito em sentidos opostos. Mantenha-se à direita da divisória."],
["A faixa termina; entre à esquerda", "Placas de fim de faixa mostram uma faixa estreitando, não uma divisória central."]],
"", "Placa amarela em forma de losango com uma seta para cima e outra para baixo, separadas por uma figura preta de canteiro na parte de cima.");
T("SGN-022", "O que significa esta placa?", [
["Começa uma rodovia dividida à frente", "A versão de “começo” tem o canteiro em cima. Aqui a figura do canteiro termina no meio da placa."],
["A rodovia dividida termina; o trânsito seguirá nos dois sentidos sem divisória", "Correto. À frente não há divisória central. O trânsito em sentido contrário ficará mais perto, então mantenha-se à direita."],
["A via se reduz a uma faixa só no seu sentido", "Isso é indicado por uma placa de fim de faixa. Esta placa trata do fim da divisória central."]],
"", "Placa amarela em forma de losango com setas para cima e para baixo e uma figura preta de canteiro só na parte de baixo.");
T("SGN-023", "Do que esta placa avisa?", [
["Começa uma faixa de ultrapassagem à esquerda", "Faixas de ultrapassagem não são indicadas com setas opostas. Esta placa avisa de trânsito em sentido contrário dividindo a via."],
["Trânsito nos dois sentidos à frente", "Correto. “Two Way Traffic” (mão dupla) avisa que você vai dividir a via com trânsito vindo na sua direção. Mantenha-se à direita."],
["Rua de mão única à frente", "Ruas de mão única são indicadas por placas brancas e pretas ONE WAY. Estas setas apontam em sentidos opostos."],
["Começa uma rodovia dividida à frente", "A placa de rodovia dividida tem uma figura de canteiro entre as setas."]],
"", "Placa amarela em forma de losango com duas setas pretas lado a lado, uma para cima e outra para baixo.");
T("SGN-024", "O que esta placa indica?", [
["Uma faixa está sendo acrescentada", "A placa de “faixa adicional” mostra uma faixa nova entrando com espaço próprio. Esta mostra a via ficando mais estreita."],
["A via faz curva à esquerda", "Placas de curva usam uma só seta curva, não linhas de faixa."],
["Uma faixa termina à frente; prepare-se para entrar na outra", "Correto. Uma faixa está acabando. Quem está nela deve mudar de faixa, e quem está na outra deve ficar atento."]],
"", "Placa amarela em forma de losango com duas linhas de faixa em que a linha da direita se dobra para dentro.");
T("SGN-025", "Em que esta placa é diferente da placa “Merging Traffic”?", [
["O trânsito que entra ganha uma faixa própria em vez de entrar na sua", "Correto. A linha tracejada entre as setas mostra que uma faixa é acrescentada, então o trânsito que entra não precisa entrar na sua faixa imediatamente."],
["Significa que o trânsito deve parar antes de entrar", "Nenhuma das duas placas pede para o trânsito parar. Esta mostra que o trânsito que entra tem faixa própria."],
["É usada só em ruas da cidade", "Esta placa não se limita a ruas da cidade. Ela mostra uma faixa sendo acrescentada."],
["Avisa que a sua faixa está terminando", "A placa de fim de faixa mostra linhas estreitando. Aqui uma faixa está sendo acrescentada."]],
"", "Placa amarela em forma de losango com duas setas para cima; a seta da direita vem em curva pela lateral para uma faixa própria.");
T("SGN-026", "Do que esta placa avisa?", [
["Há um semáforo à frente", "Correto. Esteja pronto para o sinal mudar, principalmente se ainda não consegue ver o semáforo."],
["O semáforo à frente não está funcionando", "Esta placa avisa que há um semáforo à frente. Ela não diz nada sobre se ele funciona."],
["Passagem de nível com luzes à frente", "Passagens de nível usam uma placa redonda amarela ou uma cruz branca em forma de X."]],
"", "Placa amarela em forma de losango com um semáforo de luzes vermelha, amarela e verde.");
T("SGN-027", "O que significa esta placa?", [
["Hospital à frente", "Informações de hospital ficam em placas azuis. Esta placa amarela de aviso mostra o formato de um cruzamento."],
["Outra via cruza à frente", "Correto. Há um cruzamento à frente. Fique atento a veículos entrando pela esquerda e pela direita."],
["Passagem de nível à frente", "Avisos de ferrovia usam uma placa redonda amarela com um X e duas letras R."]],
"", "Placa amarela em forma de losango com uma cruz preta.");
T("SGN-028", "O que esta placa indica?", [
["Há um cruzamento de quatro vias à frente", "Um cruzamento de quatro vias é mostrado com uma cruz. Este formato mostra que a sua via termina."],
["Há uma rodovia com pedágio à frente", "O T representa o formato do cruzamento, não um pedágio."],
["Há uma rota de caminhões à frente", "Rotas de caminhões usam outras placas de orientação. Esta placa amarela de aviso mostra o formato da via."],
["Sua via termina em um cruzamento em T", "Correto. A via em que você está termina à frente. Prepare-se para reduzir a velocidade, dar a preferência se necessário e virar à esquerda ou à direita."]],
"", "Placa amarela em forma de losango com formato da letra T.");
T("SGN-029", "Do que esta placa avisa?", [
["Você pode pular a próxima placa de STOP", "Placas de aviso nunca anulam uma placa de STOP. Você ainda deve parar."],
["Pare aqui imediatamente", "Esta é uma placa de aviso. A placa de STOP de verdade está mais à frente."],
["Há uma placa de STOP à frente; prepare-se para parar", "Correto. A placa de STOP pode estar escondida por uma curva ou lombada. Comece a reduzir para parar suavemente."]],
"", "Placa amarela em forma de losango com uma seta para cima e uma pequena figura vermelha de oito lados.");
T("SGN-030", "O que esta placa indica?", [
["Dê a preferência ao trânsito que vem atrás", "Placas de dar a preferência tratam do trânsito em que você entra ou que você cruza, não do trânsito de trás."],
["A via à frente não tem nenhum controle de trânsito", "A placa avisa que vem um controle de YIELD."],
["Há uma placa de YIELD à frente; prepare-se para reduzir e deixar os outros passarem", "Correto. Este aviso dá tempo para você reduzir a velocidade antes de chegar à placa de YIELD (dê a preferência)."],
["Mude para a esquerda agora", "A placa mostra um controle de dar a preferência à frente, não uma mudança de faixa."]],
"", "Placa amarela em forma de losango com uma seta para cima e um pequeno triângulo vermelho e branco com a ponta para baixo.");
T("SGN-031", "O que significa esta placa?", [
["A via faz curva à esquerda à frente", "Correto. Reduza a velocidade antes da curva para se manter na sua faixa."],
["Faixa exclusiva para virar à esquerda", "Regras de uso de faixa aparecem em placas brancas de regulamentação. Esta placa amarela avisa sobre o formato da via."],
["Proibido virar à esquerda", "A placa de proibido virar à esquerda tem um círculo vermelho com linha diagonal em uma placa branca."]],
"Reduza ANTES da curva, não no meio dela.", "Placa amarela em forma de losango com uma seta preta que dobra à esquerda.");
T("SGN-032", "Do que esta placa avisa?", [
["Pista escorregadia quando molhada", "A placa de pista escorregadia mostra um carro com marcas onduladas de derrapagem."],
["Pista sinuosa à frente", "Correto. Há uma série de curvas à frente. Reduza a velocidade e mantenha-se na sua faixa nas curvas."],
["Área de travessia de animais", "O zigue-zague é uma seta que mostra o formato da via, não um animal."],
["Desvio à direita", "Desvios têm placas próprias. Esta mostra uma via com várias curvas."]],
"", "Placa amarela em forma de losango com uma seta preta que vira de um lado para o outro várias vezes.");
T("SGN-033", "Você vê esta placa em uma curva ou no fim de uma via. O que ela indica?", [
["Rua de mão única para a esquerda", "Placas ONE WAY são brancas e pretas. Esta placa amarela é um aviso sobre a direção da via."],
["A via muda de direção; siga a seta", "Correto. A seta direcional avisa de uma mudança brusca de direção. Reduza a velocidade e vire para onde a seta aponta."],
["A faixa da esquerda é só para ultrapassar", "Esta placa mostra para onde a via vai, não uma regra de faixa."]],
"", "Placa retangular horizontal amarela com uma seta preta grande apontando para a esquerda.");
T("SGN-034", "O que costuma significar uma placa amarela em forma de losango?", [
["Avisa de condições ou perigos específicos da via à frente", "Correto. Placas em forma de losango avisam sobre condições da via e perigos à frente."],
["Mostra onde há serviços como combustível e comida", "Informações de serviços ficam em placas azuis."],
["Indica uma lei que você deve obedecer, como um limite de velocidade", "Regras como limites de velocidade ficam em placas retangulares brancas de regulamentação."],
["Marca uma zona escolar", "Zonas escolares usam uma placa de cinco lados."]],
"", "");
T("SGN-035", "O que costuma comunicar uma placa retangular branca?", [
["Atrações turísticas", "Pontos de lazer e cultura usam placas marrons."],
["Obras à frente", "Avisos de obras e manutenção são laranja."],
["Regras importantes que você deve obedecer", "Correto. Placas retangulares brancas comunicam regras, como limites de velocidade e regras de faixa."]],
"", "");
T("SGN-036", "Qual afirmação sobre placas de aviso está correta?", [
["Só as placas de aviso amarelas devem ser obedecidas", "O manual não limita isso às placas amarelas."],
["Você pode ignorar uma placa de aviso se conhece a via", "As condições mudam, e a placa está ali por causa de um perigo real."],
["Placas de aviso são só sugestões", "Placas de aviso indicam perigos reais. O manual diz para obedecê-las."],
["Obedeça a todas as placas de aviso, qualquer que seja o formato ou a cor", "Correto. O manual diz para obedecer a todas as placas de aviso, independentemente do formato ou da cor."]],
"", "");
T("SGN-037", "Que formato de placa é usado só para placas de STOP?", [
["Triângulo com a ponta para baixo", "O triângulo com a ponta para baixo é a placa de YIELD (dê a preferência)."],
["Pentágono (5 lados)", "O formato de cinco lados é usado para placas escolares."],
["Octógono (8 lados)", "Correto. O octógono é reservado para placas de STOP, então você consegue reconhecê-la até por trás ou coberta de neve ou sujeira."],
["Círculo", "A placa redonda é usada para avisar de passagem de nível."]],
"", "");
T("SGN-038", "Qual é o formato de uma placa de YIELD (dê a preferência)?", [
["Um triângulo com a ponta para baixo", "Correto. A placa de YIELD é um triângulo vermelho e branco com a ponta para baixo."],
["Um losango com borda preta", "Placas em losango são de aviso. A placa de YIELD é um triângulo com a ponta para baixo."],
["Um octógono de oito lados", "O octógono de oito lados é usado só para placas de STOP, não para YIELD."]],
"", "");
T("SGN-039", "O que costuma significar uma placa laranja como esta?", [
["Há uma escola por perto", "Placas escolares têm cinco lados e são verde-amareladas ou amarelas."],
["Zona de obras à frente", "Correto. Placas laranja marcam áreas de obras e manutenção de vias. Reduza a velocidade, deixe espaço extra e espere freadas repentinas."],
["Um desvio terminou", "Esta placa laranja avisa de obras à frente, não do fim de algo."],
["Há uma área de descanso à frente", "Áreas de descanso aparecem em placas azuis."]],
"", "Placa laranja em forma de losango com três linhas de palavras pretas.");
T("SGN-040", "Você vê esta placa. Para o que deve estar pronto?", [
["Ignorar o sinaleiro se o semáforo estiver verde", "As orientações de trabalhadores da via, como sinaleiros com bandeira, devem ser seguidas na zona de obras."],
["Seguir as orientações do sinaleiro e reduzir ou parar", "Correto. Esta placa avisa que um sinaleiro está orientando o trânsito à frente. Obedeça aos sinais dele."],
["Acelerar para sair logo da zona de obras", "Zonas de obras exigem reduzir a velocidade. As multas podem ser de $1,000 ou mais, e dobram onde há trabalhadores."]],
"", "Placa laranja em forma de losango com uma pessoa segurando uma bandeira.");
T("SGN-041", "O que você deve fazer ao ver esta placa em uma zona de obras?", [
["Mudar para a esquerda quando for seguro, sem passar por cima de cones ou tambores", "Correto. O manual diz para mudar de faixa assim que for seguro, sem passar por cima dos cones ou tambores."],
["Ficar na sua faixa até os cones obrigarem você a mudar", "Esperar até o último momento torna a mudança mais difícil e perigosa. Mude assim que for seguro."],
["Parar e esperar um sinaleiro", "A placa não pede para parar. Ela pede para mudar para a esquerda."],
["Mudar para a direita, para o acostamento", "A placa pede ao trânsito que segue em frente para mudar para a esquerda."]],
"", "Placa laranja em forma de losango com quatro linhas de palavras pretas.");
T("SGN-042", "Você vê este emblema na traseira de um veículo à frente. O que ele indica?", [
["O veículo transporta materiais perigosos", "Cargas perigosas são marcadas com placas em forma de losango."],
["O veículo é um ônibus escolar", "Ônibus escolares são amarelos com luzes piscantes. Este emblema marca veículos lentos."],
["O veículo é lento", "Correto. Um triângulo laranja com borda vermelha marca veículos lentos, como os de manutenção de vias, que normalmente andam a 25 mph ou menos. Reduza a velocidade com antecedência."]],
"", "Triângulo laranja com uma borda vermelha larga.");
T("SGN-043", "Um caminhão à frente tem uma placa em forma de losango como esta. O que isso indica?", [
["O caminhão está fora de serviço e estacionado", "A placa trata da carga, não de o caminhão estar funcionando."],
["O caminhão pode usar a faixa HOV", "Essas placas não dão privilégios especiais de faixa."],
["É um veículo agrícola lento", "Veículos lentos usam um triângulo laranja e vermelho."],
["Pode estar transportando uma carga perigosa", "Correto. Uma placa em forma de losango significa que a carga pode ser perigosa (gás, explosivos etc.). Esses veículos devem parar antes de atravessar trilhos de trem, então esteja preparado."]],
"", "Placa vermelha em forma de losango com um símbolo branco de chama, uma palavra e um número.");
T("SGN-044", "Em um bairro comercial ou residencial sem placa de limite, qual é o limite de velocidade?", [
["25 mph", "Correto. O limite de velocidade é de 25 mph em bairros comerciais ou residenciais, a menos que outro seja indicado."],
["35 mph", "35 mph não é o limite padrão nesses bairros. O manual define um limite menor, a menos que uma placa diga outra coisa."],
["15 mph", "15 mph vale em lugares específicos, como becos e cruzamentos sem visibilidade, não em todos os bairros comerciais ou residenciais."]],
"", "");
T("SGN-045", "Esta placa fica sobre uma faixa. O que ela significa?", [
["Desta faixa você pode virar à esquerda ou seguir em frente", "A palavra ONLY (somente) significa que você não pode seguir em frente nesta faixa."],
["Os veículos desta faixa devem virar à esquerda", "Correto. Uma placa de uso de faixa com ONLY significa que a faixa é para o movimento mostrado. Aqui, conversões à esquerda."],
["Não é permitido virar à esquerda", "A proibição de virar à esquerda usa um círculo vermelho com linha diagonal. Esta placa exige a conversão à esquerda."]],
"", "Placa vertical branca com uma seta preta que se curva para a esquerda e uma palavra embaixo.");
T("SGN-046", "O que esta placa significa para quem vai virar à esquerda?", [
["Quem vira à esquerda tem a preferência no sinal verde", "Uma luz verde redonda não protege sua conversão à esquerda. A placa lembra você de dar a preferência."],
["Só é permitido virar à esquerda com seta verde", "A placa diz que você pode virar com a luz verde redonda, mas deve dar a preferência primeiro."],
["Com o sinal verde fixo, você pode virar à esquerda depois de dar a preferência ao trânsito que vem de frente", "Correto. A luz verde redonda não é uma conversão protegida, então deixe os veículos que vêm de frente passarem antes de virar."],
["Não é permitido virar à esquerda", "A placa diz como fazer a conversão com segurança, não que ela é proibida."]],
"", "Placa vertical branca com palavras pretas e um círculo verde.");
T("SGN-047", "Você está descendo uma estrada de montanha íngreme e estreita com esta placa e encontra um carro subindo. Nenhum dos dois consegue passar. Quem deve dar ré?", [
["O motorista que está subindo", "O veículo que sobe tem a preferência, então não deveria ter que dar ré ladeira abaixo."],
["O veículo maior", "O tamanho não é a regra. O veículo que sobe tem a preferência."],
["Você, que está descendo", "Correto. O veículo que está subindo tem a preferência. Quem desce tem mais controle ao dar ré ladeira acima e deve dar ré até o outro conseguir passar."]],
"", "Placa vertical branca com quatro linhas de palavras pretas.");
T("SGN-048", "O que significa esta placa?", [
["Não pare dentro do cruzamento", "Correto. Se o trânsito à frente estiver parado, espere antes do cruzamento. É ilegal bloquear um cruzamento quando não há espaço para atravessá-lo totalmente antes de o sinal ficar vermelho."],
["Não vire neste cruzamento", "Proibições de conversão usam NO TURNS ou setas com linha diagonal."],
["Pedestres não podem atravessar aqui", "A placa fala aos motoristas sobre bloquear o cruzamento."]],
"", "Placa branca com palavras pretas; a palavra de baixo é branca sobre uma faixa preta.");
T("SGN-049", "Que tipo de informação as placas azuis como esta dão?", [
["Avisos de perigos", "Avisos são amarelos (ou laranja em zonas de obras)."],
["Serviços para motoristas, como uma área de descanso", "Correto. Esta placa azul de orientação mostra uma área de descanso à frente."],
["Limites de velocidade", "Limites de velocidade ficam em placas brancas de regulamentação."],
["Desvios por obras", "Placas de obras são laranja."]],
"", "Placa retangular azul com palavras brancas.");
T("SGN-050", "O que significam as placas de regulamentação vermelhas e brancas (como DO NOT ENTER)?", [
["São conselhos que você pode escolher seguir", "Placas de regulamentação não são opcionais. Elas dizem o que você deve ou não deve fazer."],
["Siga a instrução da placa", "Correto. Placas vermelhas e brancas dão uma ordem que você deve seguir, como DO NOT ENTER (não entre) ou NO U-TURN (proibido retorno)."],
["Valem só à noite", "Essas placas valem o tempo todo, a menos que a placa indique um horário."]],
"", "");
T("SGN-051", "Esta placa fica em frente a um canteiro ou ilha de trânsito. O que ela indica?", [
["Passe pela direita da ilha ou canteiro", "Correto. KEEP RIGHT (mantenha-se à direita) significa passar pelo lado direito do obstáculo à frente."],
["Vire à direita na próxima rua", "A placa diz por qual lado passar o obstáculo, não onde virar."],
["A faixa da direita termina à frente", "O fim de faixa aparece em placas amarelas de aviso."],
["O trânsito lento deve usar a faixa da direita", "Essa regra aparece em outra placa: SLOWER TRAFFIC KEEP RIGHT."]],
"", "Placa vertical branca com palavras pretas e uma seta apontando para baixo e para a direita.");
T("SGN-052", "Depois desta placa você não consegue ver 400 pés dos trilhos nas duas direções, e a passagem não tem cancelas, sinais nem sinaleiro. Qual é o limite de velocidade a menos de 100 pés da passagem?", [
["25 mph", "25 mph é o limite padrão em bairros comerciais ou residenciais. Nesta situação de ferrovia o limite é menor."],
["5 mph", "5 mph é a orientação do manual para gelo, não para passagens de nível."],
["15 mph", "Correto. O limite é de 15 mph a menos de 100 pés de uma passagem de nível quando você não consegue ver os trilhos por 400 pés nas duas direções."]],
"", "Placa redonda amarela com um X preto e duas letras pretas.");
T("SGN-053", "Você vê esta placa. Qual é a melhor reação?", [
["Reduzir a velocidade e se preparar para seguir placas de desvio ou outras orientações", "Correto. Placas laranja indicam zonas de obras. A via à frente está fechada, então prepare-se para seguir as orientações."],
["Ignorá-la se você vir outros carros seguindo", "Outros motoristas podem ter autorização ou estar desrespeitando a regra. Siga as placas."],
["Fazer o retorno imediatamente onde estiver", "Um retorno repentino pode ser ilegal ou perigoso. Siga as orientações."]],
"", "Placa laranja em forma de losango com três linhas de palavras pretas.");
T("SGN-054", "Quando você pode estacionar onde está esta placa?", [
["A qualquer hora por até 15 minutos", "Não há exceção para estacionar rapidinho. A área é só para emergências."],
["Só à noite", "A placa não dá nenhuma exceção por horário."],
["Quando houver pouco trânsito", "O volume de trânsito não muda a regra."],
["Só em uma emergência", "Correto. O espaço é reservado para emergências, como uma pane do veículo."]],
"", "Placa retangular branca com três linhas de palavras pretas.");
T("SGN-055", "O que significa esta placa?", [
["Só é permitido estacionar à noite", "ANY TIME (a qualquer hora) significa que a regra vale o dia todo e a noite toda."],
["Não é permitido estacionar em nenhum momento", "Correto. Nunca estacione onde houver uma placa NO PARKING (proibido estacionar)."],
["Você pode parar um pouco para esperar dentro do carro", "Esperar estacionado também conta como estacionar. A regra não tem exceção."]],
"", "Placa vertical branca com borda vermelha, palavras vermelhas e uma seta vermelha apontando para a esquerda.");
T("SGN-056", "Você está em uma rua de mão única e vê esta placa. O que deve esperar?", [
["Uma segunda rua de mão única entra pela esquerda", "A placa diz que a via passa a ser de mão dupla, não que outra rua de mão única entra."],
["A rua termina", "Uma rua sem saída tem placa própria. Esta avisa de trânsito em sentido contrário."],
["Trânsito em sentido contrário à frente; mantenha-se à direita", "Correto. A via passa a ser de mão dupla à frente, então virão veículos na sua direção."]],
"", "Placa retangular branca com três linhas de palavras pretas.");
T("SGN-057", "Quando você deve reduzir a velocidade por causa do perigo que esta placa mostra?", [
["Depois de terminar a curva", "Reduzir depois da curva é tarde demais para ajudar você a se manter na faixa."],
["No meio da curva", "Frear forte na curva pode fazer o carro derrapar. Reduza antes de chegar."],
["Antes de entrar na curva", "Correto. Reduza a velocidade ao se aproximar da curva para fazê-la com suavidade."],
["Só se a pista estiver molhada", "Curvas exigem velocidade segura em qualquer clima."]],
"Freie na reta, vire na curva.", "Placa amarela em forma de losango com uma seta preta que dobra à direita.");
T("SGN-058", "O que a cor laranja desta placa indica?", [
["Marca uma zona de obras", "Correto. Placas laranja são usadas em áreas de obras e manutenção de vias. Reduza a velocidade e fique atento a trabalhadores e equipamentos."],
["Marca uma área turística ou de lazer", "Placas de turismo e lazer são marrons, não laranja."],
["Marca uma zona escolar à frente", "Zonas escolares usam uma placa de cinco lados, não um losango laranja."]],
"", "Placa laranja em forma de losango com duas linhas de palavras pretas.");

T("SIG-001", "Você chega a um semáforo com luz vermelha piscando. O que deve fazer?", [
["Reduzir a velocidade e passar com cuidado sem parar", "Isso descreve a luz AMARELA piscando. A luz vermelha piscando significa pare."],
["Parar, esperar o sinal ficar verde e depois seguir", "Uma luz vermelha piscando pode nunca ficar verde. Depois de parar totalmente, você pode seguir quando for seguro."],
["Dar a preferência só aos veículos da direita", "Primeiro você deve parar totalmente. Trate como uma placa de STOP."],
["Parar totalmente e depois seguir quando for seguro", "Correto. Luz vermelha piscando significa PARE. Depois de parar, você pode seguir quando for seguro, igual a uma placa de STOP."]],
"VERMELHA piscando = placa de STOP. AMARELA piscando = devagar e com cuidado.", "Semáforo com só a luz vermelha de cima acesa, com tracinhos em volta indicando que está piscando.");
T("SIG-002", "Uma luz vermelha piscando deve ser tratada quase como qual destas?", [
["Uma placa de STOP", "Correto. As duas exigem parada total, e depois você pode seguir quando for seguro."],
["Uma placa de YIELD (dê a preferência)", "Diante de uma placa de YIELD você só para se necessário. A luz vermelha piscando sempre exige parada total."],
["Uma luz verde com cautela", "A luz vermelha piscando nunca é um sinal de “siga” antes de você parar."]],
"", "");
T("SIG-003", "Você já parou totalmente neste semáforo com luz vermelha piscando. Não há trânsito nem pedestres por perto. E agora?", [
["Esperar ficar verde fixo", "Você não precisa esperar o verde. Depois de parar, a luz vermelha piscando permite seguir quando for seguro."],
["Seguir quando for seguro", "Correto. Luz vermelha piscando significa parar primeiro; depois de parar, você pode seguir quando for seguro."],
["Dar ré e procurar outro caminho", "Não há necessidade de dar ré. Pare, olhe e siga quando for seguro."]],
"", "Semáforo com a luz vermelha piscando.");
T("SIG-004", "O que significa esta luz amarela piscando?", [
["Parar e depois seguir quando for seguro", "Essa é a regra da luz VERMELHA piscando. A amarela piscando não exige parada."],
["O sinal vai ficar vermelho; pare se puder", "Isso descreve a luz amarela fixa."],
["Siga com cautela; reduza a velocidade e fique atento", "Correto. A luz amarela piscando é um aviso. Reduza a velocidade e fique atento. Você não precisa parar."],
["Acelere para passar rápido", "Amarela piscando significa cautela, ou seja, reduzir, não acelerar."]],
"", "Semáforo com a luz amarela do meio piscando.");
T("SIG-005", "O sinal à frente acabou de ficar amarelo fixo. O que você deve fazer?", [
["Acelerar para passar antes do vermelho", "Correr no amarelo aumenta o risco de colisão. Amarelo significa cautela, não pressa."],
["Frear bruscamente não importa a distância", "Frear bruscamente quando você está muito perto pode causar uma batida na traseira. Pare só se for seguro."],
["Parar se puder fazer isso com segurança; se não, atravessar com cuidado", "Correto. A luz amarela fixa significa que o sinal vai ficar vermelho. Pare se puder com segurança; se não puder, atravesse o cruzamento com cuidado."]],
"", "Semáforo com a luz amarela do meio acesa fixa.");
T("SIG-006", "Com o sinal vermelho fixo, quando você pode virar à direita?", [
["Nunca; virar à direita no vermelho é ilegal", "A Califórnia permite virar à direita no vermelho em muitos lugares, depois de parar totalmente."],
["Depois de parar totalmente, a menos que uma placa proíba", "Correto. Pare na linha de parada, dê a preferência a pedestres e ao trânsito e vire quando for seguro, a menos que haja uma placa NO TURN ON RED."],
["Só depois que aparecer uma seta verde", "Não é preciso seta verde para virar à direita no vermelho, a menos que uma placa proíba virar no vermelho."],
["A qualquer momento, desde que reduza antes", "Você deve parar totalmente primeiro. Passar sem parar não é permitido."]],
"", "Semáforo com a luz vermelha de cima acesa fixa.");
T("SIG-007", "Você quer virar à esquerda e esta seta vermelha está acesa. O que deve fazer?", [
["Ficar parado até aparecer uma luz verde ou uma seta verde", "Correto. Seta vermelha significa PARE. Não vire até aparecer uma luz verde ou uma seta verde."],
["Virar depois de parar totalmente se ninguém estiver vindo", "Diferente da luz vermelha redonda para virar à direita, com seta vermelha você não pode virar de jeito nenhum."],
["Virar se o trânsito de frente estiver longe", "A distância dos outros não importa. Seta vermelha significa não vire."]],
"", "Semáforo com uma seta vermelha para a esquerda acesa em cima.");
T("SIG-008", "Você está parado em uma seta vermelha apontando para a direita. Pode virar à direita depois de parar?", [
["Sim, igual ao sinal vermelho fixo", "A seta vermelha é diferente da luz vermelha redonda. Virar com seta vermelha não é permitido."],
["Não. Espere o sinal ficar verde", "Correto. Você não pode virar à direita enquanto estiver parado em uma seta vermelha."],
["Sim, se não houver placa NO TURN ON RED", "Não é preciso placa. A própria seta vermelha proíbe a conversão."]],
"", "");
T("SIG-009", "O que significa uma seta amarela fixa?", [
["A conversão protegida está terminando", "Correto. A seta amarela significa que o tempo de conversão protegida está acabando. Pare se puder com segurança. Se não puder parar com segurança ou já estiver no cruzamento, termine a conversão com cuidado."],
["Você pode virar e sempre tem a preferência", "A seta amarela não dá a preferência. Ela avisa que a conversão protegida está terminando."],
["Não é permitido virar nessa direção", "A seta vermelha proíbe conversões. A amarela avisa de uma mudança."],
["Agora só são permitidos retornos", "A seta trata do tempo da sua conversão, não do tipo de conversão."]],
"", "Semáforo com uma seta amarela para a esquerda acesa no meio.");
T("SIG-010", "O que significa uma seta amarela piscando apontando para a esquerda?", [
["O trânsito de frente está parado, então vire à vontade", "Isso descreve a seta verde. Com a seta amarela piscando, o trânsito de frente pode continuar andando."],
["Virar à esquerda é proibido até parar de piscar", "A seta amarela piscando permite a conversão depois de dar a preferência."],
["Parar e depois virar como numa placa de STOP", "Este sinal não exige parada total, mas você deve dar a preferência."],
["Você pode virar à esquerda, mas primeiro deve dar a preferência ao trânsito de frente", "Correto. A conversão é permitida, mas não é protegida do outro trânsito. Dê a preferência aos veículos de frente e aos pedestres e depois vire com cuidado."]],
"", "Semáforo com uma seta amarela para a esquerda piscando.");
T("SIG-011", "O que significa uma seta verde?", [
["Siga só em frente", "A seta mostra a direção permitida: aqui, uma conversão à esquerda."],
["Dê a preferência ao trânsito de frente antes de virar", "Com seta verde, os veículos de frente estão parados por um sinal vermelho. Mesmo assim, veja se há alguém no cruzamento."],
["Siga na direção da seta; é uma conversão protegida", "Correto. A seta verde permite uma conversão protegida enquanto os veículos de frente estão parados por um sinal vermelho."]],
"", "Semáforo com uma seta verde para a esquerda acesa embaixo.");
T("SIG-012", "Seu sinal está verde, mas o trânsito do outro lado do cruzamento está parado. O que deve fazer?", [
["Esperar antes do cruzamento até haver espaço para atravessá-lo por completo", "Correto. Não entre no cruzamento se não puder atravessá-lo por completo antes de o sinal ficar vermelho."],
["Entrar no cruzamento e esperar dentro dele até o trânsito andar", "Esperar dentro do cruzamento pode bloquear o trânsito que cruza quando seu sinal ficar vermelho. Isso é ilegal."],
["Buzinar para o trânsito andar", "Buzinar não cria espaço e não é um uso seguro da buzina."]],
"", "Semáforo com a luz verde de baixo acesa fixa.");
T("SIG-013", "Seu sinal fica verde, mas um pedestre ainda está terminando de atravessar à sua frente. O que deve fazer?", [
["Seguir, porque o verde dá a preferência a você", "O verde significa seguir só quando for seguro. Você ainda deve parar para pedestres no cruzamento."],
["Buzinar para o pedestre se apressar", "Buzinar pode assustar as pessoas. Aqui os pedestres têm a preferência."],
["Esperar o pedestre terminar de atravessar", "Correto. Mesmo com o verde, pare para qualquer veículo, ciclista ou pedestre que esteja no cruzamento."],
["Desviar do pedestre com cuidado", "Desviar de alguém na faixa de pedestres é perigoso e não é permitido. Espere."]],
"", "");
T("SIG-014", "O semáforo de um cruzamento está totalmente apagado (sem funcionar). O que você deve fazer?", [
["Passar se você estiver na via maior", "Não existe regra de “via maior” quando o semáforo está apagado. Todos param."],
["Parar como se houvesse placas de STOP em todas as direções e depois seguir quando for seguro", "Correto. Trate um semáforo apagado como uma parada obrigatória em todas as direções."],
["Reduzir a velocidade e seguir sem parar", "Reduzir não basta. Pare como se houvesse placas de STOP em todas as direções."]],
"", "Semáforo com todas as luzes apagadas.");
T("SIG-015", "Quando você pode virar à esquerda com sinal vermelho fixo na Califórnia?", [
["De qualquer rua, se não vier nenhum carro", "Virar à esquerda no vermelho só é permitido de uma rua de mão única para outra de mão única."],
["De uma rua de mão única para outra rua de mão única", "Correto. Depois de parar, e se nenhuma placa proibir, dê a preferência a veículos, pedestres e ciclistas que têm o sinal verde e vire quando for seguro."],
["Nunca; é sempre ilegal", "A Califórnia permite em uma situação: de uma rua de mão única para outra de mão única."],
["De uma rua de mão dupla para uma de mão única", "A rua de onde você sai também precisa ser de mão única."]],
"", "");
T("SIG-016", "Um pedestre ainda está na faixa quando o sinal mostra uma mão levantada piscando. O que você deve fazer como motorista?", [
["Pode passar, já que o sinal de pedestres está terminando", "A mão piscando diz aos pedestres para não COMEÇAREM a atravessar. Ela não acaba com a sua obrigação de dar a preferência."],
["Buzinar para avisar o pedestre", "Buzinar não é necessário e pode assustar as pessoas. Simplesmente dê a preferência."],
["Dar a preferência ao pedestre", "Correto. Os motoristas devem dar a preferência aos pedestres, mesmo que a luz “Não ande” esteja piscando."]],
"", "Sinal de pedestres com uma mão laranja levantada, tracinhos em volta e um número laranja.");
T("SIG-017", "O que mostra o número neste sinal de pedestres?", [
["Os segundos que faltam para atravessar a rua", "Correto. Os números fazem a contagem regressiva dos segundos que restam para atravessar."],
["O limite de velocidade da faixa de pedestres", "Faixas de pedestres não têm placa de limite de velocidade própria como esta."],
["O número de pedestres esperando", "Sinais de pedestres não contam pessoas. Os números fazem a contagem regressiva dos segundos que restam para atravessar."]],
"", "Sinal de pedestres com uma mão laranja levantada e um número.");
T("SIG-018", "Se um cruzamento não tem sinais de pedestres, quais sinais os pedestres seguem?", [
["Nenhum; podem atravessar quando quiserem", "Os pedestres também devem seguir as regras de trânsito."],
["Os semáforos dos veículos", "Correto. Se não houver sinais de pedestres, os pedestres obedecem aos semáforos dos veículos."],
["Só as placas de STOP", "Em um cruzamento com semáforo, valem os semáforos dos veículos."]],
"", "");
T("SIG-019", "Por que alguns sinais de pedestres emitem bipes, sons de passarinho ou mensagens faladas?", [
["Para avisar os motoristas que o sinal vai mudar", "Os sons são para os pedestres, não para os motoristas."],
["Para dizer aos motoristas que podem virar", "Os sons dão informação de travessia aos pedestres."],
["Para ajudar pedestres cegos ou com baixa visão a atravessar a rua", "Correto. Fique atento a esses pedestres e dê a preferência a eles."]],
"", "");
T("MRK-001", "Você quer virar à esquerda para a entrada de garagem mostrada, atravessando UMA faixa dupla amarela contínua. Isso é permitido?", [
["Sim, você pode atravessá-la para virar à esquerda em uma entrada de garagem, depois de dar a preferência ao trânsito de frente", "Correto. Você pode virar à esquerda atravessando uma única faixa dupla amarela para entrar ou sair de uma entrada de garagem ou via particular, ou para fazer um retorno. Espere até ser seguro."],
["Não, a faixa dupla amarela contínua nunca pode ser atravessada", "Há exceções. Uma delas é virar à esquerda atravessando uma única faixa dupla amarela para uma entrada de garagem ou via particular."],
["Só se antes você andar um trecho curto pela contramão", "Você não pode andar pela contramão para chegar à entrada. Atravesse direto quando for seguro."],
["Só entre 22h e 6h", "Não há regra de horário para essa exceção."]],
"Atravessar para VIRAR em uma entrada: pode. Atravessar para ULTRAPASSAR: não pode.", "Via de duas faixas com uma faixa dupla amarela contínua no centro. Um carro azul na faixa de baixo planeja virar à esquerda, mostrado em linha pontilhada, atravessando as linhas centrais para uma entrada do outro lado. Um carro laranja está na faixa de cima, mais à esquerda.");
T("MRK-002", "O motorista mostrado quer ultrapassar o caminhão lento atravessando a faixa dupla amarela contínua. Isso é permitido?", [
["Não, você não pode ultrapassar atravessando a faixa dupla amarela contínua", "Correto. Não ultrapasse atravessando a faixa dupla amarela contínua. As exceções de entrada de garagem e retorno não incluem ultrapassar."],
["Sim, se não houver trânsito de frente à vista", "Mesmo sem trânsito à vista, você não pode ultrapassar atravessando a faixa dupla amarela contínua."],
["Sim, se o caminhão estiver abaixo do limite de velocidade", "Um veículo lento à frente não cria exceção à regra da faixa dupla amarela."]],
"VIRAR atravessando = exceção permitida. ULTRAPASSAR atravessando = nunca.", "Via de duas faixas com faixa dupla amarela contínua no centro. Um carro azul está atrás de um caminhão lento, e uma linha pontilhada mostra o carro azul indo para a outra faixa para contornar o caminhão.");
T("MRK-003", "Qual destes é um motivo permitido para atravessar uma única faixa dupla amarela contínua?", [
["Ultrapassar um ciclista lento", "Ultrapassar não é uma das exceções da faixa dupla amarela contínua."],
["Contornar uma fila de trânsito parada no sinal vermelho", "Contornar trânsito parado é ultrapassar, o que não é permitido atravessando a faixa dupla amarela contínua."],
["Ganhar tempo quando sua faixa está cheia", "Conveniência não é uma exceção."],
["Virar à esquerda para uma via particular ou entrada de garagem", "Correto. Virar à esquerda atravessando uma única faixa dupla amarela para entrar ou sair de uma entrada ou via particular, ou para fazer um retorno, é permitido quando for seguro."]],
"", "");
T("MRK-004", "Duas faixas duplas amarelas contínuas, separadas por dois pés ou mais, dividem as faixas. Você pode virar à esquerda atravessando-as para a entrada mostrada?", [
["Sim, igual a atravessar uma única faixa dupla amarela", "Duas faixas duplas separadas por dois pés ou mais são tratadas como uma barreira. A exceção da entrada de garagem vale só para uma faixa dupla."],
["Não. Trate-as como uma barreira e atravesse só em uma abertura designada", "Correto. Não dirija sobre essa barreira nem a atravesse, nem faça conversão à esquerda ou retorno através dela, exceto em aberturas designadas."],
["Sim, se der seta por pelo menos 5 segundos", "Dar seta não torna legal atravessar uma barreira."]],
"Uma faixa dupla amarela = uma linha. Duas faixas duplas separadas 2+ pés = um muro.", "Via com duas faixas duplas amarelas contínuas no centro, separadas por um espaço marcado “2 ft or more”. Uma linha vermelha pontilhada mostra um carro azul planejando virar à esquerda atravessando as duas para uma entrada.");
T("MRK-005", "Qual NÃO é uma exceção que permite atravessar a faixa dupla amarela contínua?", [
["Entrar em uma faixa HOV que tem entrada designada à esquerda", "Esta é uma exceção citada no manual, então não é a resposta."],
["Seguir placas de obras que mandam você para o outro lado da via", "Esta é uma exceção da lista, então não é a resposta."],
["Ultrapassar um veículo que vai mais devagar que você", "Correto. Ultrapassar não é uma exceção. Não ultrapasse atravessando a faixa dupla amarela contínua."],
["Fazer um retorno onde retornos são permitidos", "Virar à esquerda atravessando uma única faixa dupla amarela para fazer um retorno é uma exceção, então não é a resposta."]],
"", "");
T("MRK-006", "Você é o carro azul. A linha amarela tracejada está do seu lado do centro. Você pode ultrapassar o carro à frente?", [
["Não, qualquer linha amarela central significa proibido ultrapassar", "Linhas amarelas tracejadas permitem ultrapassar a partir do lado em que estão."],
["Só se o outro carro fizer sinal para você passar", "Sinais de outros motoristas não decidem se ultrapassar é legal ou seguro."],
["Sim, quando for seguro, porque a linha tracejada está ao lado da sua faixa", "Correto. Uma linha amarela tracejada ao lado da sua faixa significa que você pode ultrapassar, mas só quando for seguro."]],
"", "Via de duas faixas. No centro há uma linha amarela contínua do lado de cima e uma linha amarela tracejada do lado de baixo, junto à faixa do carro azul. Um carro cinza está à frente do carro azul.");
T("MRK-007", "Você é o carro azul. A linha amarela contínua está do seu lado. Você pode ultrapassar o carro à frente atravessando o centro?", [
["Não, não ultrapasse quando a linha contínua estiver do seu lado", "Correto. Não ultrapasse se houver só uma faixa no seu sentido e uma linha amarela contínua do seu lado da via."],
["Sim, se fizer rápido", "A velocidade não muda a regra. Linha contínua do seu lado significa não ultrapasse."],
["Sim, porque do outro lado há uma linha tracejada", "A linha tracejada permite ultrapassar aos motoristas do OUTRO lado. Você deve seguir a linha do seu lado."]],
"Olhe a linha mais perto de VOCÊ: tracejada = pode ultrapassar quando for seguro; contínua = não.", "Via de duas faixas. No centro há uma linha amarela tracejada do lado de cima e uma linha amarela contínua do lado de baixo, junto à faixa do carro azul. Um carro cinza está à frente.");
T("MRK-008", "O que separa uma única linha branca contínua?", [
["Trânsito em sentidos opostos", "Trânsito em sentidos opostos é separado por linhas amarelas."],
["Faixas de trânsito no mesmo sentido", "Correto. Uma única linha branca contínua marca faixas que seguem no mesmo sentido, inclusive em ruas de mão única."],
["Vagas de estacionamento de faixas de bombeiros", "Não é assim que o manual descreve essa marcação."]],
"", "");
T("MRK-009", "Você quer passar para a faixa de carona (carpool) mostrada. Onde pode mudar de faixa?", [
["Em qualquer lugar, se der seta", "Dar seta não torna legal atravessar a linha branca dupla contínua."],
["Atravessando a linha branca dupla se o trânsito estiver leve", "Nunca mude de faixa atravessando a linha branca dupla contínua, qualquer que seja o trânsito."],
["Só onde a linha passa a ser uma única linha branca tracejada", "Correto. Nunca mude de faixa atravessando a linha branca dupla contínua. Espere até ver uma única linha branca tracejada ou uma entrada designada."]],
"", "Rodovia com uma faixa de carona marcada por um losango à esquerda. Uma linha branca dupla contínua a separa da faixa ao lado no primeiro trecho e depois vira uma única linha branca tracejada mais à frente.");
T("MRK-010", "O que significam linhas brancas tracejadas na via?", [
["Separam faixas no mesmo sentido; você pode mudar de faixa quando for seguro", "Correto. Linhas brancas tracejadas separam faixas em vias com duas ou mais faixas no mesmo sentido."],
["Marcam a borda de uma ciclofaixa onde você nunca pode entrar", "Ciclofaixas geralmente são marcadas por uma linha branca contínua que pode virar tracejada perto dos cruzamentos."],
["Separam trânsito em sentidos opostos", "Trânsito em sentidos opostos é separado por linhas amarelas."]],
"", "");
T("MRK-011", "Você está em uma faixa marcada com linhas tracejadas grandes em uma rodovia. Para o que deve estar pronto?", [
["A faixa é de carona (carpool)", "Faixas de carona são marcadas com um losango e as palavras Carpool Lane."],
["A faixa pode terminar ou sair da rodovia", "Correto. Faixas que terminam costumam ser marcadas com linhas tracejadas grandes. Procure placas mandando sair ou mudar de faixa."],
["A faixa é só para ultrapassar", "Linhas tracejadas grandes marcam uma faixa que termina ou de saída, não de ultrapassagem."]],
"", "");
T("MRK-012", "O que significa uma fileira de triângulos brancos pintados de lado a lado na sua faixa?", [
["Lombadas à frente", "Os triângulos são uma marcação no asfalto, não uma lombada."],
["Uma zona só para pedestres", "Faixas de pedestres são marcadas com linhas, não com triângulos."],
["Uma linha de dê a preferência", "Correto. A linha de dê a preferência é uma fileira de triângulos brancos que mostra onde dar a preferência ou parar. Os triângulos apontam para os veículos que se aproximam."]],
"", "Aproximação de um cruzamento com uma fileira de triângulos brancos pintados de lado a lado na faixa, com as pontas viradas para os carros que esperam.");
T("MRK-013", "O carro azul está em uma faixa central de conversão à esquerda. Que distância pode percorrer nesta faixa?", [
["Até meia milha", "Esta faixa não é de circulação. O limite é bem menor."],
["No máximo 200 pés", "Correto. A faixa central de conversão à esquerda serve só para se preparar e fazer uma conversão à esquerda ou um retorno. Você pode andar nela só 200 pés."],
["O quanto precisar, se o trânsito estiver lento", "A velocidade do trânsito não muda o limite. Não é faixa normal de circulação nem de ultrapassagem."],
["Não se pode andar nela", "Você pode usá-la para se preparar e fazer uma conversão à esquerda ou um retorno."]],
"", "Rua de mão dupla com uma faixa central limitada de cada lado por uma linha amarela contínua externa e uma linha amarela tracejada interna. Um carro azul está na faixa central.");
T("MRK-014", "Para qual destes pode ser usada uma faixa central de conversão à esquerda?", [
["Preparar e fazer uma conversão à esquerda ou um retorno", "Correto. Essa é sua única finalidade."],
["Ultrapassar trânsito mais lento", "Não é faixa de ultrapassagem. Usá-la para ultrapassar arrisca uma colisão de frente com alguém virando do outro sentido."],
["Esperar para entrar no trânsito pelo lado direito da via", "A faixa central não é faixa de entrada."]],
"", "");
T("MRK-015", "Como uma faixa HOV (carona) é marcada no asfalto?", [
["Com um símbolo de bicicleta e uma seta", "O símbolo de bicicleta é para ciclofaixas ou faixas compartilhadas."],
["Com um símbolo de losango", "Correto. A faixa HOV é marcada com um losango e as palavras Carpool Lane. As placas mostram o número mínimo de pessoas e o horário em que a regra vale."],
["Com uma fileira de triângulos brancos", "Uma fileira de triângulos brancos é uma linha de dê a preferência, não marcação de HOV."]],
"", "");
T("MRK-016", "Qual destes pode usar uma faixa HOV (a menos que outra coisa seja indicada)?", [
["Uma motocicleta", "Correto. Motocicletas podem usar faixas HOV a menos que outra coisa seja indicada. Os demais precisam do número de pessoas indicado, ou de um veículo elegível de baixa ou zero emissão com adesivo do DMV."],
["Qualquer veículo quando o trânsito está pesado", "Faixas HOV são reservadas. Trânsito pesado não é exceção."],
["Um motorista sozinho que está atrasado para o trabalho", "Estar atrasado não é exceção."],
["Um veículo rebocando um trailer", "Veículos rebocando devem usar a faixa da extrema direita ou uma faixa marcada para veículos lentos."]],
"", "");
T("MRK-017", "Qual faixa da imagem é a “faixa número 1”?", [
["Faixa A", "Correto. A faixa da esquerda (ou rápida) é a faixa número 1. A da direita dela é a número 2, e assim por diante."],
["Faixa B", "A faixa B é a faixa número 2, a segunda a partir da esquerda."],
["Faixa C", "A faixa C é a faixa número 3, a terceira a partir da esquerda."],
["Faixa D", "A faixa D é a da extrema direita. A numeração começa do outro lado."]],
"A número 1 fica junto à divisória central, como o primeiro da fila à esquerda.", "Quatro faixas, todas no mesmo sentido, marcadas A, B, C e D da esquerda (junto ao canteiro) para a direita.");
T("MRK-018", "Que faixa você deve usar em geral para entrar ou sair do trânsito?", [
["A faixa da esquerda", "A faixa da esquerda é para ultrapassar e virar à esquerda."],
["A faixa central de conversão à esquerda", "Essa faixa serve só para se preparar para conversões à esquerda e retornos."],
["A faixa da direita", "Correto. Use a faixa da direita para entrar ou sair do trânsito, ou quando entra na via a partir do meio-fio ou do acostamento."]],
"", "");
T("MRK-019", "Você deve parar no sinal vermelho. Onde deve ficar a frente do seu carro?", [
["Posição A", "Correto. Pare atrás da linha de parada. Se não houver, pare antes da faixa de pedestres; se não houver faixa de pedestres, antes do cruzamento."],
["Posição B", "Parar sobre a faixa de pedestres bloqueia os pedestres."],
["Posição C", "Parar dentro do cruzamento coloca você no caminho do trânsito que cruza."]],
"", "Aproximação de um cruzamento com uma linha branca larga atravessando a faixa do carro azul, depois uma faixa de pedestres listrada e depois o cruzamento. Círculos marcam a posição A logo antes da linha larga, a B sobre a faixa de pedestres e a C dentro do cruzamento.");
T("MRK-020", "Você vai virar à direita no cruzamento à frente. Quando pode entrar na ciclofaixa?", [
["Em qualquer ponto do quarteirão, se der seta", "Andar em uma ciclofaixa é ilegal, exceto em casos específicos, como a menos de 200 pés de uma conversão."],
["Nunca; vire a partir da sua faixa atual", "Para virar à direita você deve estar perto da borda direita, e pode usar a ciclofaixa a menos de 200 pés da conversão."],
["Só se não houver ciclistas a menos de 1,000 pés", "Não existe essa regra. O limite depende de quão perto você está da conversão."],
["A menos de 200 pés da conversão, depois de verificar se há ciclistas", "Correto. Você pode entrar na ciclofaixa a menos de 200 pés da conversão. Antes, verifique seus pontos cegos por causa de ciclistas."]],
"", "Via com uma ciclofaixa verde ao longo da borda direita. A linha da ciclofaixa é contínua e depois tracejada nos últimos 200 pés antes de um cruzamento. Um carro azul está na faixa de circulação.");
T("MRK-021", "Qual NÃO é um motivo legal para andar em uma ciclofaixa?", [
["Estacionar, onde for permitido", "Estacionar onde for permitido é uma das exceções da lista, então não é a resposta."],
["Virar, a menos de 200 pés do cruzamento", "Virar a menos de 200 pés de um cruzamento é uma exceção da lista, então não é a resposta."],
["Ultrapassar carros lentos pela direita", "Correto. Não é permitido usar a ciclofaixa para ultrapassar. As exceções são estacionar onde for permitido, entrar ou sair da via e virar a menos de 200 pés de um cruzamento."],
["Entrar ou sair da via", "Entrar ou sair da via é uma exceção da lista, então não é a resposta."]],
"", "");

T("ROW-001", "Você (carro azul) e o carro laranja param ao mesmo tempo nesta parada obrigatória de quatro vias. Quem deve seguir primeiro?", [
["Você, porque vai seguir em frente", "Seguir em frente não dá prioridade em uma parada em todas as direções quando os dois chegam juntos."],
["O carro laranja, porque está à sua direita", "Correto. Se os veículos chegam ao mesmo tempo, dê a preferência ao veículo da sua direita."],
["Quem acenar primeiro", "Acenar com a mão não é regra de preferência e pode causar confusão."]],
"Chegaram juntos? Dê a preferência à DIREITA.", "Cruzamento de quatro vias com uma placa de STOP em cada esquina. O carro azul (você) está parado embaixo. Um carro laranja está parado no lado direito do cruzamento.");
T("ROW-002", "Em um cruzamento sem placas de STOP ou YIELD, quem tem a preferência?", [
["O veículo maior", "O tamanho não decide a preferência."],
["O veículo mais rápido", "A velocidade nunca dá a preferência a você."],
["O veículo que vai virar à esquerda", "Quem vira à esquerda deve dar a preferência ao trânsito que se aproxima perto o bastante para ser perigoso."],
["O veículo que chega primeiro", "Correto. O veículo que chega primeiro tem a preferência. Se chegarem juntos, dê a preferência ao da sua direita."]],
"", "");
T("ROW-003", "Neste cruzamento em T sem placas, quem tem a preferência?", [
["Você, porque está à direita do carro laranja", "Em um cruzamento em T, a regra da direita não se aplica. A via que continua tem prioridade."],
["Quem estiver mais rápido", "A velocidade não dá a preferência."],
["O carro laranja, porque está na via que continua", "Correto. Em um cruzamento em T sem placas de STOP ou YIELD, os veículos da via que continua têm a preferência."]],
"", "Cruzamento em T sem placas de STOP ou YIELD. O carro azul (você) está na via que termina no T. Um carro laranja segue pela via que continua, vindo da esquerda.");
T("ROW-004", "Você vai virar à esquerda em um cruzamento. Um carro vindo de frente está perto o bastante para ser perigoso. O que deve fazer?", [
["Dar a preferência ao carro que vem de frente", "Correto. Ao virar à esquerda, dê a preferência aos pedestres e a qualquer veículo que se aproxima perto o bastante para ser perigoso."],
["Virar rápido antes que ele chegue", "Cortar na frente do trânsito que vem é uma causa comum de colisões graves."],
["Piscar os faróis e virar", "Piscar os faróis não dá a preferência a você."]],
"", "");
T("ROW-005", "Você está esperando para virar à esquerda. Um carro vindo de frente está com a seta da direita ligada. O que deve fazer?", [
["Virar agora; o outro carro vai virar antes de chegar até você", "A seta pode estar ligada por engano, ou o motorista pode planejar virar logo depois de você."],
["Esperar o outro carro realmente começar a virar", "Correto. Não suponha que um veículo com a seta ligada vai virar antes de chegar até você."],
["Buzinar para garantir que ele vire", "Buzinar não diz o que o outro motorista vai fazer."]],
"", "");
T("ROW-006", "Você está saindo de uma entrada de garagem para uma via. Quem tem a preferência?", [
["Você, porque deu seta", "A seta anuncia o que você pretende fazer; ela não dá a preferência."],
["Quem tiver o veículo maior", "O tamanho do veículo não decide a preferência."],
["O trânsito que já está na via", "Correto. Ao entrar no trânsito, siga com cuidado e dê a preferência ao trânsito que já ocupa as faixas."]],
"", "");
T("ROW-007", "Os pedestres têm a preferência em faixas de pedestres não marcadas?", [
["Sim, tanto nas marcadas quanto nas não marcadas", "Correto. Os pedestres têm a preferência em faixas de pedestres marcadas ou não marcadas."],
["Não, só nas faixas pintadas", "Nem todas as faixas de pedestres são marcadas, e a preferência vale para as duas."],
["Só em cruzamentos com semáforo", "Os pedestres têm a preferência em faixas marcadas ou não, com ou sem semáforo."]],
"", "");
T("ROW-008", "Um veículo na faixa ao lado está parado em uma faixa de pedestres. O que você deve fazer?", [
["Ultrapassá-lo com cuidado", "Não ultrapasse um veículo parado em uma faixa de pedestres. Pode haver um pedestre atravessando que você não vê."],
["Não ultrapassar; estar pronto para parar", "Correto. O outro motorista pode estar parado por causa de um pedestre que você não consegue ver."],
["Buzinar para saber por que parou", "Buzinar não revela um pedestre escondido e pode assustar as pessoas."]],
"", "");
T("ROW-009", "Um pedestre com bengala branca espera na esquina. Ele recolhe a bengala e se afasta do cruzamento. O que isso costuma significar?", [
["Ele precisa que você buzine para guiá-lo", "Nunca buzine para uma pessoa cega. Isso pode assustá-la e confundi-la."],
["Você deve esperar até ele ir embora", "O gesto indica que você pode seguir; não é preciso esperar ele ir embora."],
["Você pode seguir", "Correto. Quando uma pessoa cega recolhe a bengala e se afasta do cruzamento, geralmente significa que você pode seguir."],
["Ele vai atravessar, então acelere", "Acelerar nunca é a reação certa perto de pedestres."]],
"", "");
T("ROW-010", "Por que você deve evitar parar no meio de uma faixa de pedestres?", [
["Desgasta mais rápido a pintura da faixa", "O desgaste da pintura não é o problema. O problema é a segurança dos pedestres."],
["Só é problema à noite, quando está escuro", "Bloquear a faixa de pedestres é um problema a qualquer hora."],
["Pode obrigar as pessoas a contornar seu carro pelo meio do trânsito", "Correto. Parar na faixa pode obrigar um pedestre cego, ou qualquer pessoa, a andar no meio do trânsito fora da faixa."]],
"", "");
T("ROW-011", "Você está chegando a esta rotatória. Quem deve dar a preferência?", [
["Você deve dar a preferência ao trânsito que já está na rotatória", "Correto. Reduza a velocidade, dê a preferência a todo o trânsito que já está na rotatória e entre quando houver um espaço suficiente."],
["O carro laranja, porque você está entrando", "O trânsito que já está na rotatória tem prioridade."],
["Nenhum; os dois podem seguir ao mesmo tempo", "Entrar sem dar a preferência arrisca uma batida lateral."]],
"", "Rotatória de uma faixa com ilha central e quatro entradas. O carro azul (você) espera na entrada de baixo. Um carro laranja já circula na rotatória.");
T("ROW-012", "Em que sentido o trânsito circula em uma rotatória da Califórnia?", [
["No sentido horário", "O trânsito vai no sentido contrário, para você poder entrar virando à direita."],
["No sentido anti-horário", "Correto. Entre virando à direita e circule no sentido anti-horário em volta da ilha central."],
["Em qualquer sentido, dependendo da sua saída", "Todo o trânsito circula no mesmo sentido."]],
"", "Rotatória vista de cima, com ilha central e quatro entradas.");
T("ROW-013", "Você perde sua saída em uma rotatória. O que deve fazer?", [
["Parar e dar ré até a saída", "Nunca pare nem dê ré em uma rotatória."],
["Continuar dando a volta até voltar à sua saída", "Correto. Se perder a saída, continue dando a volta até voltar a ela."],
["Cortar por cima da ilha central", "A ilha central não é para dirigir."],
["Sair na próxima e fazer um retorno na entrada da rotatória", "Simplesmente dê outra volta. O manual indica essa opção como a segura."]],
"", "");
T("ROW-014", "Em uma rotatória de duas faixas, você quer virar à direita. Que faixa deve usar?", [
["A faixa da esquerda e depois cortar para a saída", "Cortar faixas na saída arrisca uma colisão com o trânsito da faixa da direita."],
["Qualquer faixa e sair pela que estiver livre", "Para conversões à direita, o manual diz para usar a faixa da direita."],
["A faixa da direita, e sair pela faixa da direita", "Correto. Para virar à direita, escolha a faixa da direita e saia pela faixa da direita."]],
"", "");
T("ROW-015", "Nesta via íngreme e estreita, nenhum carro consegue passar. Qual tem a preferência?", [
["O carro azul, que está subindo", "Correto. O veículo que sobe tem a preferência. Quem desce deve dar ré até o que sobe conseguir passar."],
["O carro laranja, que está descendo", "O veículo que desce tem mais controle ao dar ré, então é ele que deve dar ré."],
["O carro que buzinar primeiro", "Buzinar não decide a preferência."]],
"", "Via íngreme e estreita. Um carro azul sobe a ladeira e um carro laranja desce. Eles se encontram e não conseguem passar um pelo outro.");
T("ROW-016", "Outro motorista não dá a preferência a você. O que deve fazer?", [
["Insistir na sua preferência para dar uma lição", "Insistir pode causar uma colisão. A preferência é algo que se dá, não algo que se toma."],
["Abrir mão da sua preferência se isso ajudar a evitar uma colisão", "Correto. Nunca suponha que os outros vão dar a preferência a você, e abra mão dela quando isso ajudar a evitar uma colisão."],
["Acelerar para mostrar que chegou primeiro", "Acelerar para reivindicar a preferência aumenta a chance de colisão."]],
"", "");
T("ROW-017", "Qual é o limite de velocidade em um cruzamento sem visibilidade (sem placas de parada em nenhuma esquina e com a visão bloqueada)?", [
["25 mph", "25 mph é o limite padrão em bairros comerciais ou residenciais, mas em cruzamentos sem visibilidade é menor."],
["10 mph", "O manual indica 15 mph para cruzamentos sem visibilidade."],
["15 mph", "Correto. O limite em um cruzamento sem visibilidade é de 15 mph. Se a sua visão estiver bloqueada, avance devagar até conseguir ver."]],
"", "");
T("ROW-018", "Um cortejo fúnebre conduzido por um agente de trânsito está passando por um cruzamento. O que você deve fazer?", [
["Deixar o cortejo passar; não interrompê-lo", "Correto. Um cortejo fúnebre conduzido por um agente de trânsito tem a preferência. Você pode ser multado por interrompê-lo."],
["Entrar na fila para passar mais rápido", "Entrar em um cortejo fúnebre ou interrompê-lo pode render uma multa."],
["Passar pelo espaço entre dois veículos", "Entrar no cortejo o interrompe."]],
"", "");
T("ROW-019", "Um pedestre na calçada olha você nos olhos. O que isso costuma significar?", [
["Ele quer que você passe primeiro", "O contato visual geralmente significa o contrário."],
["Ele está pronto para atravessar; dê a preferência", "Correto. Um pedestre que faz contato visual está pronto para atravessar a rua."],
["Ele está esperando um ônibus", "Você não pode supor isso. Dê a preferência."]],
"", "");
T("ROW-020", "Qual destes é considerado pedestre?", [
["Uma pessoa de skate", "Correto. Uma pessoa que se desloca em algo que não é veículo nem bicicleta, como patins ou skate, é pedestre."],
["Uma pessoa dirigindo um carrinho de golfe", "Um carrinho de golfe é um veículo motorizado lento, não um pedestre."],
["Uma pessoa de bicicleta na ciclofaixa", "Ciclistas são condutores com regras próprias, a menos que decidam atravessar como pedestres."],
["Uma pessoa de motocicleta", "Motociclistas são condutores de veículos."]],
"", "");
T("TRN-001", "Com quanta antecedência você deve começar a dar seta antes de uma conversão?", [
["Pelo menos 25 pés", "Isso é tarde demais para os outros reagirem."],
["Só quando começar a virar", "Os outros precisam do aviso antes da conversão, não durante."],
["Pelo menos 100 pés", "Correto. Dê seta pelo menos 100 pés antes de virar."]],
"", "");
T("TRN-002", "Por quanto tempo você deve dar seta antes de mudar de faixa em uma rodovia?", [
["Pelo menos cinco segundos", "Correto. Dê seta pelo menos cinco segundos antes de mudar de faixa em uma rodovia."],
["Um segundo", "Um segundo não é aviso suficiente em velocidade de rodovia."],
["Em rodovias não é preciso dar seta", "Dê seta antes de toda mudança de faixa."]],
"", "");
T("TRN-003", "Você deve dar seta mesmo quando não vê outros veículos por perto?", [
["Não, a seta é só para os motoristas que você vê", "Pode haver veículos, ciclistas ou pedestres que você não notou."],
["Sim, sempre dê seta", "Correto. Dê seta mesmo quando não vê outros veículos ao seu redor."],
["Só à noite", "Dê seta a qualquer hora. Os outros podem não ver você, de dia ou de noite."]],
"", "");
T("TRN-004", "O que significa este sinal com a mão?", [
["Reduzir a velocidade ou parar", "O sinal de reduzir ou parar tem o antebraço apontando para baixo."],
["Conversão à direita", "O sinal de conversão à direita tem o antebraço apontando para cima."],
["Conversão à esquerda", "Correto. Braço e mão esticados retos para a esquerda significam conversão à esquerda."]],
"", "Vista de trás de um carro. O braço esquerdo do motorista sai pela janela esticado reto, paralelo ao chão.");
T("TRN-005", "O que significa este sinal com a mão?", [
["Conversão à esquerda", "O sinal de conversão à esquerda tem o braço esticado reto."],
["Reduzir a velocidade ou parar", "O sinal de reduzir ou parar aponta para baixo."],
["Pode me ultrapassar", "Não existe sinal oficial com a mão para isso."],
["Conversão à direita", "Correto. Braço para fora com o antebraço apontando para cima significa conversão à direita."]],
"", "Vista de trás de um carro. O braço esquerdo do motorista sai pela janela com o cotovelo dobrado e o antebraço apontando para cima.");
T("TRN-006", "O que significa este sinal com a mão?", [
["Reduzir a velocidade ou parar", "Correto. Braço para fora com o antebraço apontando para baixo significa reduzir ou parar."],
["Conversão à esquerda", "O sinal de conversão à esquerda tem o braço esticado reto."],
["Conversão à direita", "O sinal de conversão à direita aponta para cima."]],
"Para cima = direita, reto = esquerda, para baixo = reduzir ou parar.", "Vista de trás de um carro. O braço esquerdo do motorista sai pela janela com o cotovelo dobrado e o antebraço apontando para baixo.");
T("TRN-007", "Quando você deve usar sinais com a mão e o braço em vez das setas?", [
["Sempre que estiver com pressa e quiser sinalizar mais rápido", "Estar com pressa não é motivo para mudar a forma de sinalizar."],
["Quando suas setas estiverem quebradas ou difíceis de ver", "Correto. Use sinais com a mão e o braço se suas setas não funcionarem ou se a luz forte do sol as tornar difíceis de ver."],
["Só quando um policial pedir", "Você deve usá-los sempre que suas setas não puderem ser vistas, não só quando pedirem."]],
"", "");
T("TRN-008", "Enquanto espera para virar à esquerda, como deve manter as rodas dianteiras?", [
["Viradas para a esquerda, prontas para seguir", "Se as rodas apontarem para a esquerda e alguém bater atrás, você pode ser empurrado para o trânsito de frente."],
["Viradas para a direita, para o meio-fio", "Virá-las para a direita não ajuda e não é a forma de se preparar para virar à esquerda."],
["Apontando para a frente", "Correto. Mantenha as rodas retas até ser seguro começar a conversão. Se um carro bater atrás, você não será empurrado para o trânsito de frente."]],
"", "");
T("TRN-009", "Você vai virar à esquerda de uma rua de mão dupla para outra de mão dupla. Em que faixa deve terminar a conversão?", [
["Faixa A", "Correto. A faixa A é a faixa da esquerda mais perto do centro da rua no seu sentido. Terminar a conversão ali reduz o risco de colisão."],
["Faixa B", "A faixa B é a faixa da direita. Abrir para a faixa mais distante pode cruzar com outro trânsito que está virando."],
["Faixa C", "A faixa C leva o trânsito no sentido oposto. Terminar ali seria dirigir na contramão."]],
"", "Cruzamento. O carro azul (você) espera embaixo para virar à esquerda em uma rua de mão dupla. Nessa rua, círculos marcam a C na faixa do sentido oposto, a A na faixa da esquerda mais perto da linha central no seu novo sentido e a B na faixa da direita do seu novo sentido.");
T("TRN-010", "Ao virar à direita, onde você deve terminar a conversão?", [
["Na faixa da direita", "Correto. Comece e termine a conversão na faixa mais perto da borda direita da via. Não abra para outra faixa."],
["Na faixa que estiver livre", "Em uma rua de mão dupla, o manual diz para não abrir para outra faixa."],
["Na faixa central", "A faixa central não é onde normalmente termina uma conversão à direita."]],
"", "");
T("TRN-011", "Você vai virar à esquerda de uma rua de mão dupla para uma de mão única com três faixas. Onde pode terminar a conversão?", [
["Só na faixa da extrema direita", "Para esta conversão, o manual permite mais do que a faixa da extrema direita."],
["Em qualquer faixa que estiver livre", "Correto. Comece pela faixa mais perto do centro. Se houver três ou mais faixas no seu sentido, você pode terminar em qualquer faixa livre."],
["Só na faixa da extrema esquerda", "Com três ou mais faixas, o manual permite qualquer faixa livre."]],
"", "");
T("TRN-012", "Você está em uma faixa exclusiva de conversão à direita que não se junta a outra faixa. O sinal para o trânsito que segue em frente está vermelho. Você pode virar?", [
["Não, deve esperar o sinal de quem segue em frente ficar verde", "O sinal das faixas que seguem em frente não controla uma faixa exclusiva de conversão à direita."],
["Sim, e os pedestres devem dar a preferência a você", "Sempre dê a preferência aos pedestres na faixa ao virar."],
["Sim, a menos que a placa ou o sinal próprio dessa faixa diga que não", "Correto. Uma faixa exclusiva de conversão à direita permite virar mesmo que o trânsito em frente tenha sinal vermelho, a menos que um sinal ou placa no meio-fio direito dessa faixa indique outra coisa. Sempre dê a preferência aos pedestres."]],
"", "");
T("TRN-013", "Uma faixa está marcada só para ônibus de transporte público. O que você pode fazer com ela?", [
["Atravessá-la para virar à direita", "Correto. É ilegal dirigir, parar ou estacionar na faixa de ônibus, mas você pode atravessá-la para virar à direita."],
["Dirigir nela no horário de pico", "Dirigir em uma faixa exclusiva de ônibus é ilegal."],
["Estacionar nela por até cinco minutos", "Parar ou estacionar em uma faixa de ônibus é ilegal."]],
"", "");
T("TRN-014", "Quando você pode fazer um retorno em um bairro residencial?", [
["A qualquer momento, desde que dê seta antes", "Dar seta, sozinho, não torna o retorno seguro nem legal."],
["Só à noite, quando o trânsito está leve", "O horário não é a regra. A condição é que nenhum veículo esteja se aproximando a menos de 200 pés."],
["Quando nenhum veículo estiver a menos de 200 pés", "Correto. Em um bairro residencial, você pode fazer um retorno se nenhum veículo estiver se aproximando a menos de 200 pés."],
["Nunca em bairro residencial", "Retornos são permitidos em bairros residenciais quando nenhum veículo está se aproximando a menos de 200 pés."]],
"", "");
T("TRN-015", "Onde um retorno nunca é permitido?", [
["Em um cruzamento com sinal verde e sem placa", "Isso é permitido a menos que haja uma placa NO U-TURN."],
["Em uma rua de mão única", "Correto. Nunca faça retorno em uma rua de mão única. Outros lugares são passagens de nível, em frente a um quartel de bombeiros e em bairros comerciais."],
["Atravessando uma única faixa dupla amarela", "Retornos atravessando uma única faixa dupla amarela são permitidos onde forem legais nos demais aspectos."]],
"", "");
T("TRN-016", "Qual retorno é ilegal?", [
["Em um cruzamento com seta verde e sem placa NO U-TURN", "Este retorno é permitido: retornos são permitidos em um cruzamento com sinal verde ou seta verde, a menos que haja uma placa NO U-TURN."],
["Em um bairro comercial", "Correto. Nunca faça retorno em um bairro comercial (a parte da cidade onde ficam a maioria dos escritórios e comércios)."],
["Em uma rodovia dividida, por uma abertura no canteiro", "Este retorno é permitido: você pode fazer retorno em uma rodovia dividida onde há uma abertura no canteiro."],
["Em um bairro residencial sem nenhum veículo a menos de 200 pés", "Este retorno é permitido: em um bairro residencial você pode fazer retorno se nenhum veículo estiver se aproximando a menos de 200 pés."]],
"", "");
T("TRN-017", "Você não consegue ver com clareza 200 pés em cada direção. Pode fazer um retorno?", [
["Sim, se fizer rápido", "A velocidade não compensa a falta de visibilidade."],
["Sim, se buzinar antes", "Buzinar não torna o retorno legal."],
["Não", "Correto. Nunca faça retorno quando não consegue ver com clareza 200 pés em cada direção."]],
"", "");
T("TRN-018", "Você pode usar a entrada de um quartel de bombeiros para fazer o retorno?", [
["Não, nunca", "Correto. Nunca faça retorno em frente a um quartel de bombeiros nem use a entrada dele para retornar. Os caminhões de bombeiros precisam dela livre o tempo todo."],
["Sim, se nenhum caminhão de bombeiros estiver à vista", "Os caminhões de bombeiros podem sair sem aviso."],
["Só à noite, quando o quartel está tranquilo", "A regra vale o tempo todo; emergências também acontecem à noite."]],
"", "");
T("TRN-019", "Antes de mudar de faixa, qual é a última verificação que você deve fazer?", [
["Reduzir para 10 mph abaixo do trânsito", "Não é necessário reduzir a velocidade antes de mudar de faixa."],
["Olhar por cima do ombro para o lado para onde vai", "Correto. Os espelhos têm pontos cegos. Dê seta, olhe os espelhos e depois olhe por cima do ombro para ter certeza de que a faixa está livre."],
["Buzinar para avisar os outros", "A buzina é para evitar colisões, não para mudanças de faixa comuns."]],
"", "");
T("TRN-020", "Você começou a virar em um cruzamento e percebe que é a rua errada. O que deve fazer?", [
["Parar e dar ré até a rua certa", "Dar ré em um cruzamento é perigoso."],
["Voltar bruscamente para a faixa original", "Mudanças repentinas de direção podem causar colisões."],
["Terminar a conversão e depois retornar com segurança", "Correto. Se começar uma conversão, termine-a. Depois procure um lugar seguro e legal para retornar. Mudanças de última hora aumentam o risco de colisão."]],
"", "");
T("TRN-021", "Você vai entrar em uma entrada de garagem logo depois de atravessar um cruzamento. Quando deve dar seta?", [
["Quando estiver quase terminando de atravessar o cruzamento", "Correto. Dê seta quando estiver quase terminando de atravessar o cruzamento se for virar logo depois dele."],
["Antes de entrar no cruzamento", "Dar seta cedo demais pode fazer os motoristas do cruzamento pensarem que você vai virar ali."],
["Não dar seta; só virar", "Sempre dê seta antes de virar para que os outros saibam o que você vai fazer."]],
"", "");
T("TRN-022", "Qual destes é um bom hábito ao mudar de faixa?", [
["Ziguezaguear entre as faixas para continuar andando", "Ziguezaguear aumenta o risco de colisão."],
["Ficar em uma faixa o máximo possível", "Correto. Fique em uma faixa o máximo possível e não ziguezagueie no trânsito."],
["Mudar de faixa no meio de um cruzamento", "Depois de começar a atravessar um cruzamento, siga em frente."]],
"", "");
T("TRN-023", "Ao dar ré virando, onde você deve pôr a mão no volante?", [
["Às 9 e às 3 horas, com as duas mãos", "Essa é a posição normal para dirigir para a frente, mas dar ré virando é um dos casos de dirigir com uma mão."],
["Na posição das 6 horas", "O manual indica a posição das 12 horas para essa situação."],
["Na posição das 12 horas", "Correto. Ao dar ré virando, ponha a mão na posição das 12 horas para conseguir olhar para trás."]],
"", "");
T("FWY-001", "Você está nesta rampa de acesso. Como deve entrar na rodovia?", [
["Entrar na velocidade do trânsito, ou perto dela, e se encaixar em um espaço seguro", "Correto. Esteja na velocidade do trânsito ou perto dela, use os espelhos e a seta, olhe por cima do ombro e entre quando for seguro."],
["Parar no fim da rampa e esperar um espaço grande", "Parar na rampa torna a entrada mais difícil e pode causar uma batida na traseira. Não pare a menos que seja absolutamente necessário."],
["Entrar devagar para que os motoristas da rodovia vejam você", "Entrar devagar obriga o trânsito da rodovia a frear bruscamente."],
["Entrar imediatamente mesmo sem espaço", "O trânsito da rodovia tem a preferência. Entre em um espaço grande o bastante para o seu veículo."]],
"", "Rodovia com uma rampa de acesso que se junta a ela pela parte de baixo à esquerda. O carro azul (você) está na rampa. Outros carros estão na rodovia.");
T("FWY-002", "Ao entrar em uma rodovia, quem tem a preferência?", [
["O trânsito da rodovia", "Correto. O trânsito da rodovia tem a preferência."],
["O motorista que está entrando", "Quem está entrando deve encontrar um espaço seguro."],
["Quem for mais rápido", "A velocidade não decide a preferência."]],
"", "");
T("FWY-003", "Depois de entrar em uma rodovia você precisa atravessar várias faixas. Como deve fazer?", [
["Atravessar todas de uma vez para ganhar tempo", "Atravessar várias faixas de uma vez pode surpreender motoristas que você não verificou."],
["Dar seta e atravessar uma faixa de cada vez, verificando os pontos cegos a cada vez", "Correto. Atravesse as faixas uma de cada vez, verificando a cada vez se há veículos, motociclistas e ciclistas."],
["Esperar no acostamento até as faixas ficarem vazias", "O acostamento não é área de espera."]],
"", "");
T("FWY-004", "Quando você deve dar seta antes de sair de uma rodovia?", [
["Bem na chegada da rampa de saída", "Isso dá pouco aviso aos motoristas de trás."],
["Uma milha antes da saída", "Dar seta tão cedo pode confundir os outros sobre qual saída você vai pegar."],
["Cerca de cinco segundos (aproximadamente 400 pés) antes da saída", "Correto. Quando estiver na faixa certa, dê seta cinco segundos, cerca de 400 pés, antes de sair."]],
"", "");
T("FWY-005", "Você está quase perdendo sua saída da rodovia. O que deve fazer?", [
["Seguir até a próxima saída", "Correto. Não atravesse linhas contínuas nem faça manobras bruscas. Pegue a próxima saída e retorne com segurança."],
["Atravessar rápido as linhas contínuas para pegar a saída", "Não atravesse linhas contínuas ao sair."],
["Parar e dar ré até a saída", "Dar ré em uma rodovia é extremamente perigoso."]],
"", "");
T("FWY-006", "Mais ou menos de quanto espaço você precisa para entrar no trânsito em uma rodovia?", [
["Meio quarteirão, cerca de 150 pés", "Meio quarteirão (cerca de 150 pés) é a orientação para ruas da cidade."],
["Um quarteirão inteiro, cerca de 300 pés", "Correto. Na rodovia você precisa de um espaço de mais ou menos um quarteirão inteiro, cerca de 300 pés."],
["O comprimento de dois carros", "Isso é pouquíssimo em velocidade de rodovia."]],
"", "");
T("FWY-007", "Em ruas da cidade, mais ou menos de quanto espaço você precisa para entrar, sair ou se juntar ao trânsito?", [
["Um quarteirão inteiro, cerca de 300 pés", "Essa é a orientação para a rodovia."],
["O comprimento de um carro", "Pouco demais. Você precisa de espaço para alcançar a velocidade do trânsito."],
["Meio quarteirão, cerca de 150 pés", "Correto. Em ruas da cidade você precisa de mais ou menos meio quarteirão, cerca de 150 pés."]],
"", "");
T("FWY-008", "Você está atrás de um carro lento chegando ao topo desta ladeira e não consegue ver se vem trânsito. Deve ultrapassar?", [
["Não, espere até conseguir ver claramente à frente", "Correto. Não ultrapasse ao se aproximar de uma ladeira ou curva se não consegue ver o trânsito que vem. A ladeira ou curva deve estar a pelo menos um terço de milha."],
["Sim, se acelerar o suficiente", "Você não consegue ver o trânsito que vem. A velocidade não torna isso seguro."],
["Sim, se a linha for tracejada", "Mesmo onde ultrapassar é permitido, não ultrapasse quando não consegue ver se vem trânsito."]],
"", "Vista lateral de uma via de duas faixas subindo até o topo de uma ladeira. Um carro azul segue um carro cinza perto do topo; não dá para ver a via depois do topo.");
T("FWY-009", "Você não deve ultrapassar a menos de quantos pés de um cruzamento, ponte, túnel ou passagem de nível?", [
["50 pés", "O manual indica uma distância maior."],
["100 pés", "Correto. Não ultrapasse a menos de 100 pés de um cruzamento, ponte, túnel, passagem de nível ou outra área perigosa."],
["500 pés", "A regra do manual é de 100 pés."]],
"", "");
T("FWY-010", "Quando você pode ultrapassar outro veículo pela direita?", [
["Sempre que houver um acostamento largo e pavimentado", "Nunca saia da parte pavimentada ou principal da via para ultrapassar."],
["Sempre que o motorista da frente estiver abaixo do limite", "Estar devagar não é uma das condições da lista."],
["Quando o motorista da frente está virando à esquerda e você pode ultrapassar pela direita com segurança", "Correto. Outros casos: uma rodovia aberta com duas ou mais faixas no seu sentido, ou uma rua de mão única. Nunca saia da via pavimentada para ultrapassar."]],
"", "");
T("FWY-011", "Outro veículo está ultrapassando você. O que deve fazer?", [
["Manter sua posição na faixa e sua velocidade", "Correto. Deixe o veículo ultrapassar mantendo sua faixa e sua velocidade."],
["Acelerar para ele não conseguir ultrapassar", "Isso é perigoso e deixa o outro motorista preso na outra faixa."],
["Frear forte para deixá-lo entrar", "Frear bruscamente pode causar uma batida na traseira."]],
"", "");
T("FWY-012", "Qual é a ordem correta para ultrapassar em uma rodovia aberta?", [
["Acelerar, mudar de faixa e depois dar seta", "Dar seta depois de mudar de faixa não avisa ninguém."],
["Dar seta, olhar, mudar de faixa, ultrapassar e dar seta para voltar", "Correto. Dê seta, olhe por cima do ombro, passe para a faixa de ultrapassagem, acelere para ultrapassar e depois dê seta e volte para sua faixa."],
["Buzinar, mudar de faixa e ultrapassar sem dar seta", "A seta é obrigatória; a buzina não faz parte de uma ultrapassagem normal."]],
"", "");
T("FWY-013", "Um motorista está colado atrás de você e quer ir mais rápido. O que deve fazer?", [
["Frear para ele se afastar", "Frear para mandar um recado pode causar uma batida na traseira."],
["Acelerar acima do limite de velocidade", "Nunca ultrapasse o limite para agradar outro motorista."],
["Ir para a direita quando for seguro", "Correto. Quando outro motorista está colado atrás de você e quer ir mais rápido, vá para a direita."]],
"", "");
T("FWY-014", "Você está na rodovia e carros estão entrando por uma rampa. Qual é uma boa prática mesmo você tendo a preferência?", [
["Abrir espaço para eles quando puder fazer isso com segurança", "Correto. Abra espaço para veículos que entram na rodovia, mesmo que você tenha a preferência."],
["Acelerar para que eles entrem atrás de você", "Acelerar pode fechar quem está entrando."],
["Parar na sua faixa até eles entrarem", "Parar em uma rodovia é perigoso."]],
"", "");
T("FWY-015", "Seu carro quebra e você precisa parar em uma rodovia. O que o manual recomenda?", [
["Parar na faixa e caminhar para buscar ajuda", "Parar em uma faixa e caminhar por uma rodovia são duas coisas perigosas."],
["Sair totalmente do asfalto e ficar dentro do carro", "Correto. Estacione totalmente fora do asfalto e fique no veículo com as portas trancadas até a ajuda chegar, a menos que seja mais seguro sair e se afastar."],
["Deixá-lo no acostamento durante a noite e voltar depois", "Um veículo deixado em uma rodovia por mais de quatro horas pode ser removido."]],
"", "");
T("FWY-016", "Seu veículo para de funcionar na rodovia e você precisa sair. Por qual lado deve sair?", [
["Pelo lado do motorista, para ver o trânsito que vem", "Sair pelo lado do trânsito deixa você mais perto dos veículos em movimento."],
["Por qualquer lado, tanto faz", "Sair longe do trânsito é mais seguro, e o manual diz para usar o lado direito."],
["Pelo lado direito, longe do trânsito", "Correto. Encoste no acostamento direito e saia pelo lado direito, longe do trânsito. Volte pelo mesmo lado."]],
"", "");
T("FWY-017", "Um veículo deixado em uma rodovia por mais de quanto tempo pode ser removido?", [
["Quatro horas", "Correto. Um veículo parado, estacionado ou deixado em uma rodovia por mais de quatro horas pode ser removido."],
["30 minutos", "O manual indica mais tempo."],
["24 horas", "O manual indica menos tempo."]],
"", "");

T("SPD-001", "Em condições normais, que distância de seguimento o manual recomenda?", [
["Um segundo", "Um segundo não dá tempo suficiente para reagir se o veículo da frente frear de repente."],
["Pelo menos três segundos", "Correto. Use a regra dos três segundos. Quando o veículo da frente passar por um ponto fixo, você deve levar pelo menos três segundos para chegar ao mesmo ponto."],
["O comprimento de um carro a cada 50 mph", "O manual usa uma regra baseada em tempo: três segundos."]],
"Conte “mil e um, mil e dois, mil e três” a partir do poste.", "Via de duas faixas. Um carro azul segue um veículo cinza. Um poste ao lado da via tem a etiqueta “Ponto fixo”.");
T("SPD-002", "Como você usa o poste da imagem para verificar sua distância de seguimento?", [
["Contar comprimentos de carro até o poste", "O poste serve para marcar o tempo, não para medir comprimentos de carro."],
["Esperar passar por ele e depois acelerar", "Acelerar diminui sua distância de seguimento, o contrário do objetivo."],
["Contar os segundos até chegar ao poste", "Correto. Comece a contar quando o veículo da frente passar pelo poste. Se você chegar nele em menos de três segundos, está seguindo perto demais. Afaste-se."]],
"", "Um carro azul seguindo um veículo cinza, com um poste ao lado da via.");
T("SPD-003", "Em chuva forte, o que deve acontecer com sua distância de seguimento?", [
["Aumentar", "Correto. A chuva deixa as vias escorregadias. O manual diz para dirigir mais devagar e deixar mais espaço entre você e o veículo da frente."],
["Ficar igual à de uma via seca", "Uma distância adequada para pista seca pode ser curta demais em pista molhada, onde parar leva mais tempo."],
["Diminuir para conseguir seguir as lanternas do carro", "Seguir mais de perto reduz seu tempo de reação e aumenta o risco de colisão."]],
"Condições ruins = mais segundos de espaço.", "");
T("SPD-004", "Um motorista está colado atrás de você. O que o manual diz para fazer?", [
["Pisar forte no freio para avisá-lo a se afastar", "Frear de repente pode causar uma batida na traseira."],
["Manter a velocidade, aumentar o espaço à frente e deixá-lo passar", "Correto. Mantenha sua trajetória e velocidade e crie mais espaço à sua frente para poder reduzir aos poucos. Quando for seguro, vá para a direita para que ele possa passar."],
["Acelerar para se afastar dele", "Acelerar só aumenta o risco e não resolve o problema."]],
"", "");
T("SPD-005", "Quando você deve deixar MAIS do que a distância normal de três segundos?", [
["Só ao seguir um caminhão grande na cidade", "Mais espaço também ajuda com caminhões, mas essa não é a única situação."],
["Nunca; três segundos sempre bastam", "Três segundos é o mínimo para condições normais. Condições ruins pedem mais."],
["Atrás de uma motocicleta sobre grades metálicas ou cascalho", "Correto. Deixe mais espaço ao seguir motociclistas sobre superfícies metálicas (grades de pontes, trilhos de trem) ou cascalho. Também quando há alguém colado atrás de você, em vias escorregadias e na neblina."]],
"", "");
T("SPD-006", "Um veículo entra na sua frente perto demais. O que você deve fazer?", [
["Tirar o pé do acelerador para criar espaço", "Correto. Aliviar o acelerador abre espaço entre você e o veículo da frente."],
["Buzinar e piscar os faróis", "Isso não cria um espaço seguro e pode piorar a situação."],
["Acelerar para fechar o espaço e ninguém entrar", "Fechar o espaço elimina sua margem de segurança."]],
"", "");
T("SPD-007", "Você precisa dirigir em neblina densa. Qual opção está correta?", [
["Seguir de perto o carro da frente para ver as lanternas dele", "Seguir de perto não deixa tempo para parar. Em vez disso, aumente sua distância de seguimento."],
["Dirigir devagar, usar farol baixo e aumentar a distância de seguimento", "Correto. Também tenha certeza de que consegue parar dentro do espaço que enxerga à frente."],
["Usar farol alto para ver mais longe", "O farol alto reflete na neblina e causa ofuscamento."]],
"", "");
T("SPD-008", "O que diz a Lei Básica de Velocidade da Califórnia?", [
["Você sempre pode dirigir no limite de velocidade sinalizado", "O limite sinalizado é um máximo. As condições podem exigir dirigir mais devagar."],
["Você pode andar 10 mph acima do limite para ultrapassar", "Não existe essa exceção no manual."],
["Você nunca pode dirigir mais rápido do que é seguro para as condições atuais", "Correto. Independentemente do limite sinalizado, sua velocidade deve depender do trânsito, da superfície da via, do clima e das pessoas na via ou perto dela."]],
"", "");
T("SPD-009", "Salvo indicação em contrário, qual é o limite máximo de velocidade na maioria das rodovias da Califórnia?", [
["65 mph", "Correto. Salvo indicação em contrário, o limite máximo na maioria das rodovias da Califórnia é de 65 mph."],
["55 mph", "55 mph vale para rodovias de duas faixas sem divisão e veículos rebocando trailers."],
["70 mph", "O manual indica um número menor para a maioria das rodovias, salvo indicação em contrário."]],
"", "");
T("SPD-010", "Salvo indicação em contrário, qual é a velocidade máxima em uma rodovia de duas faixas sem divisão?", [
["65 mph", "65 mph vale para a maioria das outras rodovias."],
["55 mph", "Correto. O limite é de 55 mph em uma rodovia de duas faixas sem divisão, e também para veículos rebocando trailers."],
["45 mph", "O manual indica 55 mph para essa situação."]],
"", "");
T("SPD-011", "Você está rebocando um trailer em uma rodovia. Salvo indicação em contrário, qual é sua velocidade máxima?", [
["65 mph", "Veículos rebocando trailers têm um limite menor."],
["50 mph", "O manual indica 55 mph para veículos rebocando trailers, não 50 mph."],
["55 mph", "Correto. O máximo é de 55 mph para veículos rebocando trailers."]],
"", "");
T("SPD-012", "Salvo se houver um limite menor sinalizado, qual é o limite de velocidade a menos de 500 pés de uma escola enquanto há crianças do lado de fora ou atravessando a rua?", [
["25 mph", "Correto. O limite é de 25 mph a menos de 500 pés de uma escola enquanto há crianças do lado de fora ou atravessando. Algumas zonas podem sinalizar limites de até 15 mph."],
["15 mph", "Algumas zonas escolares sinalizam limites de até 15 mph, mas o limite geral é maior."],
["35 mph", "Isso é rápido demais perto de escolas com crianças presentes."]],
"", "Placa amarelo-esverdeada de cinco lados mostrando duas crianças caminhando.");
T("SPD-013", "Qual é o limite de velocidade em um beco?", [
["25 mph", "25 mph é o padrão em bairros comerciais e residenciais."],
["15 mph", "Correto. O limite de velocidade em um beco é de 15 mph."],
["5 mph", "O manual indica 15 mph para becos."]],
"", "");
T("SPD-014", "Quanto você deve reduzir a velocidade em uma via molhada?", [
["Pela metade", "Reduzir pela metade é a orientação do manual para neve compactada."],
["Para no máximo 5 mph", "Essa é a orientação para gelo."],
["De 5 a 10 mph", "Correto. Em uma via molhada, reduza a velocidade de 5 a 10 mph."]],
"", "");
T("SPD-015", "Como você deve ajustar a velocidade sobre neve compactada?", [
["Reduzir pela metade", "Correto. Sobre neve compactada, reduza a velocidade pela metade."],
["Reduzir 5 mph", "É uma mudança pequena demais para neve compactada."],
["Manter a mesma velocidade, mas frear antes", "Você deve reduzir a velocidade, não só frear antes."]],
"", "");
T("SPD-016", "Sobre gelo, qual é a orientação do manual para a velocidade?", [
["No máximo 15 mph", "O manual indica um número bem menor para gelo."],
["No máximo 5 mph", "Correto. Sobre gelo, reduza a velocidade para no máximo 5 mph."],
["Reduzir 10 mph", "10 mph a menos está mais perto da orientação para vias molhadas."]],
"", "");
T("SPD-017", "Em uma tempestade forte, você não consegue ver mais de 100 pés à frente. Qual é a maior velocidade considerada segura?", [
["45 mph", "A 45 mph você não conseguiria parar dentro de 100 pés."],
["O limite de velocidade sinalizado", "A Lei Básica de Velocidade significa que as condições podem exigir que você ande mais devagar do que o sinalizado."],
["30 mph", "Correto. Se você não consegue ver além de 100 pés, não é seguro dirigir a mais de 30 mph."]],
"", "");
T("SPD-018", "Você pode ser multado por dirigir devagar demais?", [
["Sim, se bloquear o fluxo normal do trânsito", "Correto. Você não deve bloquear o fluxo normal e razoável do trânsito dirigindo devagar demais. Se dirigir mais rápido ou mais devagar que o limite, pode ser multado."],
["Não, só o excesso de velocidade é ilegal", "Dirigir tão devagar que bloqueia o fluxo normal do trânsito também pode ser um problema."],
["Só em ruas da cidade, não em rodovias", "Essa regra não se limita às ruas da cidade; também vale nas rodovias."]],
"", "");
T("SPD-019", "Até onde à frente você deve observar a via?", [
["Só o carro da sua frente", "Olhar só para o carro da frente deixa você sem perceber os perigos além dele."],
["Pelo menos 10 segundos à frente do seu veículo", "Correto. Mantenha os olhos em movimento e observe pelo menos 10 segundos à frente para ter tempo de reagir."],
["Um segundo à frente", "Um segundo é tempo pouquíssimo para perceber e reagir a perigos."]],
"", "");
T("SPD-020", "Um ônibus, bonde ou trólebus está parado em uma zona de segurança. Qual é a velocidade máxima para ultrapassá-lo?", [
["5 mph", "O manual permite até 10 mph, não 5 mph, ao ultrapassar um ônibus ou bonde parado em uma zona de segurança."],
["25 mph", "Isso é rápido demais perto de pessoas embarcando e desembarcando."],
["10 mph", "Correto. Você pode ultrapassar a no máximo 10 mph. Nunca dirija por dentro de uma zona de segurança."]],
"", "");
T("SPD-021", "A 55 mph, mais ou menos quanto um carro de passeio médio precisa para parar, comparado a um veículo grande?", [
["Um carro consegue parar em cerca de 300 pés; um veículo grande pode levar até cerca de 400 pés", "Correto. Veículos mais pesados e mais rápidos levam mais tempo para parar, então não entre na frente de um veículo grande e reduza a velocidade."],
["Os dois param em cerca de 100 pés", "Parar a 55 mph exige uma distância muito maior."],
["Um veículo grande para em menos distância porque tem mais freios", "Veículos grandes levam mais tempo para parar do que carros de passeio na mesma velocidade."]],
"", "");
T("PRK-001", "Você estaciona virado para CIMA da ladeira junto a um meio-fio, como mostrado. Para que lado deve virar as rodas dianteiras?", [
["Para o meio-fio, para o pneu se apoiar nele", "Virar para o meio-fio é o correto ao estacionar LADEIRA ABAIXO. Ladeira acima, as rodas devem apontar para o outro lado, para o pneu se apoiar no meio-fio se o carro descer."],
["Para longe do meio-fio", "Correto. Virado para cima, vire as rodas dianteiras para longe do meio-fio (para a esquerda, em direção ao centro da via) e deixe o carro descer alguns centímetros até a roda encostar de leve no meio-fio."],
["Retas, com o freio de mão puxado", "Rodas retas deixam o carro descer livremente para o trânsito se os freios falharem. Só o freio de mão não basta em uma ladeira."]],
"PARA CIMA e PARA FORA: ladeira acima com meio-fio = rodas para longe do meio-fio.", "Vista lateral de um carro azul estacionado virado para cima em uma ladeira, junto a um meio-fio.");
T("PRK-002", "Cada carro está estacionado virado para CIMA da ladeira com um meio-fio à direita. Qual carro está com as rodas viradas corretamente?", [
["Carro A", "As rodas do carro A apontam para o meio-fio. Essa é a posição para ladeira abaixo. Ladeira acima, se o carro descesse, iria para longe do meio-fio, para o trânsito."],
["Carro B", "Rodas retas não usam o meio-fio para impedir que o carro desça."],
["Carro C", "Correto. Ladeira acima com meio-fio, vire as rodas para longe do meio-fio (para a esquerda). Se o carro descer, a parte de trás do pneu dianteiro trava no meio-fio."]],
"", "Vista de cima de três carros estacionados, cada um com um meio-fio à direita. O carro A tem as rodas dianteiras viradas para a direita, para o meio-fio. O carro B tem as rodas dianteiras retas. O carro C tem as rodas dianteiras viradas para a esquerda, para longe do meio-fio.");
T("PRK-003", "Você estaciona virado para BAIXO da ladeira junto a um meio-fio. Para que lado deve virar as rodas dianteiras?", [
["Para longe do meio-fio", "Para longe do meio-fio é a regra de ladeira acima. Ladeira abaixo, isso deixaria o carro descer para a rua."],
["Retas", "Rodas retas deixam o carro descer a ladeira se os freios falharem."],
["Para o meio-fio (para a direita)", "Correto. Virado para baixo, vire as rodas dianteiras para o meio-fio ou para a direita, em direção à lateral da via."]],
"Ladeira abaixo: vire para o meio-fio, para o carro bater nele e não ir para a rua.", "Vista lateral de um carro azul estacionado virado para baixo em uma ladeira, junto a um meio-fio.");
T("PRK-004", "Cada carro está estacionado virado para BAIXO da ladeira com um meio-fio à direita. Qual carro está com as rodas viradas corretamente?", [
["Carro A", "Correto. Ladeira abaixo, vire as rodas dianteiras para o meio-fio (para a direita). Se o carro andar para a frente, o pneu bate no meio-fio."],
["Carro B", "Rodas retas não dão proteção se o carro começar a andar."],
["Carro C", "Virar para longe do meio-fio é a posição para ladeira acima com meio-fio. Ladeira abaixo, isso guiaria o carro para a rua."]],
"", "Vista de cima de três carros, cada um com um meio-fio à direita. Carro A com as rodas viradas para a direita, para o meio-fio; carro B com as rodas retas; carro C com as rodas viradas para a esquerda, para longe do meio-fio.");
T("PRK-005", "Você estaciona virado para CIMA em uma via SEM meio-fio. Para que lado deve virar as rodas dianteiras?", [
["Para a direita, para o carro descer para longe do centro da via", "Correto. Ladeira acima ou abaixo, sem meio-fio, vire as rodas para a direita para o carro ir para longe do centro da via se os freios falharem."],
["Para a esquerda, em direção ao centro da via", "Sem meio-fio para segurar o pneu, virar para a esquerda deixaria o carro descer de volta para o meio da via."],
["Retas", "Rodas retas não desviam o carro do trânsito se ele descer."]],
"Sem meio-fio? Sempre vire para a DIREITA, para o acostamento.", "Vista lateral de um carro azul virado para cima em uma ladeira com acostamento de terra e sem meio-fio.");
T("PRK-006", "Você estaciona virado para BAIXO sem meio-fio. Para onde as rodas dianteiras devem apontar?", [
["Para a esquerda", "Para a esquerda guiaria um carro desgovernado em direção ao centro da via."],
["Para a direita, em direção à lateral da via", "Correto. Sem meio-fio, vire as rodas para a direita para o carro ir para longe do centro da via se os freios falharem."],
["Tanto faz se você puxar o freio de mão", "Os equipamentos podem falhar. O manual diz para puxar o freio E virar as rodas."]],
"", "Vista lateral de um carro azul virado para baixo em uma ladeira com acostamento de terra e sem meio-fio.");
T("PRK-007", "Em qual situação de estacionamento em ladeira você vira as rodas dianteiras para a ESQUERDA (para longe da borda da via), e somente nela?", [
["Ladeira abaixo com meio-fio", "Ladeira abaixo com meio-fio, as rodas viram para o meio-fio (direita)."],
["Ladeira acima com meio-fio", "Correto. Ladeira acima junto a um meio-fio é o único caso em que você vira para longe do meio-fio, deixando o pneu apoiado nele."],
["Ladeira acima sem meio-fio", "Sem meio-fio, vire para a direita, seja ladeira acima ou abaixo."],
["Ladeira abaixo sem meio-fio", "Sem meio-fio, as rodas viram para a direita."]],
"Só “ladeira acima + meio-fio” vira para a esquerda. Todo o resto vira para a direita.", "");
T("PRK-008", "Além de virar as rodas, o que mais você deve fazer ao estacionar em uma ladeira?", [
["Deixar o motor ligado em ponto morto", "Deixar o carro ligado em ponto morto permite que ele ande. Puxe o freio de mão e deixe em park."],
["Ligar o pisca-alerta enquanto estiver estacionado", "O pisca-alerta não faz parte do estacionamento normal em ladeira."],
["Puxar o freio de mão e deixar em park", "Correto. Seu veículo pode andar por falha de equipamento, então puxe o freio de mão e deixe em park (ou engatado, em câmbio manual), além de virar as rodas."]],
"", "");
T("PRK-009", "Você estaciona em uma entrada de garagem inclinada. Como deve virar as rodas?", [
["Para o veículo não descer para a rua", "Correto. Em uma entrada de garagem inclinada, vire as rodas para o carro não descer para a rua, deixe em park e puxe o freio de mão."],
["Sempre para a esquerda", "A direção depende da entrada de garagem. O objetivo é manter o carro fora da rua."],
["Retas, porque a entrada é propriedade privada", "Um carro desgovernado ainda pode acabar na rua."]],
"", "");
T("PRK-010", "O que significa um meio-fio pintado desta cor?", [
["Zona de carga e descarga de mercadorias", "As zonas de carga de mercadorias são meio-fios amarelos, não vermelhos."],
["Proibido parar, ficar parado ou estacionar", "Correto. Um meio-fio vermelho significa proibido parar, ficar parado ou estacionar. Os ônibus podem parar em uma zona vermelha marcada só para ônibus."],
["Estacionamento por tempo limitado", "O estacionamento por tempo limitado é marcado em verde."]],
"", "Um meio-fio pintado de vermelho entre a calçada e a rua.");
T("PRK-011", "O que você pode fazer em um meio-fio pintado desta cor?", [
["Estacionar por até uma hora", "O estacionamento por tempo limitado é o meio-fio verde."],
["Carregar e descarregar mercadorias", "A carga de mercadorias é o meio-fio amarelo."],
["Embarcar ou desembarcar passageiros", "Correto. Um meio-fio branco é só para embarque e desembarque de passageiros."]],
"", "Um meio-fio pintado de branco entre a calçada e a rua.");
T("PRK-012", "O que significa um meio-fio pintado desta cor?", [
["Estacionamento por tempo limitado", "Correto. Um meio-fio verde significa que você pode estacionar por tempo limitado. O tempo pode estar indicado em placas ou pintado no meio-fio."],
["Só para recarga de veículos elétricos", "As vagas de recarga de veículos elétricos são marcadas com placas; um meio-fio verde significa estacionamento por tempo limitado."],
["Proibido estacionar a qualquer hora", "Proibido parar ou estacionar é indicado por um meio-fio vermelho, não verde."]],
"", "Um meio-fio pintado de verde entre a calçada e a rua.");
T("PRK-013", "Para que serve um meio-fio pintado desta cor?", [
["Só para estacionamento de pessoas com deficiência", "O estacionamento para pessoas com deficiência é indicado por um meio-fio azul."],
["Embarque de passageiros e carga de mercadorias", "Correto. Meio-fios amarelos são para embarcar e desembarcar passageiros e carregar e descarregar mercadorias. Não pare mais do que o tempo indicado. Motoristas não comerciais geralmente precisam ficar com o veículo."],
["Só veículos de emergência, a qualquer hora", "Um meio-fio vermelho significa proibido parar ou estacionar. O amarelo é para carga e descarga."]],
"", "Um meio-fio pintado de amarelo entre a calçada e a rua.");
T("PRK-014", "Quem pode estacionar em um meio-fio pintado desta cor?", [
["Qualquer pessoa, por até 15 minutos", "Não há exceção de curta duração para motoristas sem cartão ou placa especial."],
["Caminhões de entrega fazendo paradas curtas", "As entregas usam meio-fios amarelos de carga, não azuis."],
["Motoristas com cartão ou placa de pessoa com deficiência", "Correto. Meio-fios azuis são para uma pessoa com deficiência, ou alguém que a transporta, que mostre um cartão especial ou uma placa especial."]],
"", "Um meio-fio pintado de azul entre a calçada e a rua.");
T("PRK-015", "A que distância de um hidrante você pode estacionar?", [
["Não mais perto que 15 pés", "Correto. Nunca estacione a menos de 15 pés de um hidrante ou da entrada de um quartel de bombeiros."],
["Não mais perto que 5 pés", "Cinco pés é perto demais. Os bombeiros precisam de espaço, então a regra do manual é de 15 pés."],
["A qualquer distância, se você ficar no carro", "Ficar no carro não muda a regra."]],
"", "");
T("PRK-016", "A que distância de uma faixa de pedestres você pode estacionar (sem extensão de calçada)?", [
["Não mais perto que 5 pés", "Estacionar tão perto bloqueia a visão dos pedestres."],
["Não mais perto que 20 pés", "Correto. Nunca estacione a menos de 20 pés de uma faixa de pedestres marcada ou não marcada, nem a menos de 15 pés onde houver extensão de calçada."],
["Encostado nas linhas da faixa", "Isso é perto demais. Carros estacionados podem esconder pessoas atravessando."]],
"", "");
T("PRK-017", "Onde NÃO é permitido estacionar?", [
["Junto a um meio-fio verde dentro do tempo limite", "Estacionar por tempo limitado em um meio-fio verde é permitido."],
["No lado direito de uma rua de mão dupla, no sentido do trânsito", "Essa é a forma normal de estacionar na rua."],
["A menos de três pés de uma rampa de calçada para pessoas com deficiência", "Correto. Nunca estacione a menos de três pés de uma rampa de calçada para pessoas com deficiência, nem na área hachurada ao lado de uma vaga para pessoas com deficiência."]],
"", "");
T("PRK-018", "Qual destes é um lugar ilegal para estacionar?", [
["Em fila dupla, ao lado de outro carro estacionado", "Correto. Estacionar em fila dupla é ilegal. Também é estacionar sobre uma faixa de pedestres, na calçada, na frente de uma entrada de garagem, ou em um túnel ou ponte, a menos que placas permitam."],
["Em uma vaga marcada no estacionamento de uma loja", "As vagas marcadas são para estacionar."],
["Em um meio-fio branco ao desembarcar um passageiro", "Paradas rápidas para desembarcar passageiros são permitidas em meio-fios brancos."]],
"", "");
T("PRK-019", "Você pode estacionar em uma vaga reservada para recarga ou abastecimento de veículos de emissão zero?", [
["Sim, se todas as outras vagas estiverem ocupadas", "A falta de outras vagas não é uma exceção."],
["Só se estiver dirigindo um veículo de emissão zero", "Correto. Nunca estacione em uma vaga reservada para veículos de emissão zero, a menos que esteja dirigindo um."],
["Sim, por até 30 minutos", "Não há exceção por tempo no manual."]],
"", "");
T("PRK-020", "Ao fazer baliza, a que distância do meio-fio seu veículo deve ficar?", [
["A até 3 pés", "Três pés é longe demais do meio-fio e deixa seu carro avançando sobre a faixa."],
["Encostando no meio-fio com os dois pneus", "Você só precisa ficar a até 18 polegadas; não é preciso encostar no meio-fio."],
["A até 18 polegadas", "Correto. Seu veículo deve ficar paralelo e a até 18 polegadas do meio-fio."]],
"", "");
T("PRK-021", "Ao procurar uma vaga para fazer baliza, de que tamanho deve ser o espaço?", [
["Pelo menos três pés mais comprido que seu veículo", "Correto. Procure um espaço pelo menos três pés mais comprido que seu veículo."],
["Exatamente o comprimento do seu veículo", "Você precisa de espaço extra para manobrar até a vaga."],
["O dobro do comprimento do seu veículo", "Não é preciso tanto espaço."]],
"", "");
T("PRK-022", "Você acabou de fazer baliza em uma rua movimentada. O que deve fazer antes de abrir a porta?", [
["Abri-la rápido para não ficar muito tempo no trânsito", "Abrir a porta sem olhar pode atingir um ciclista ou motociclista."],
["Olhar com atenção se passam veículos, bicicletas e motocicletas, e sair quando for seguro", "Correto. Verifique o ponto cego e os espelhos antes de abrir a porta."],
["Buzinar antes para avisar o trânsito", "Buzinar não substitui olhar."]],
"", "");
T("PRK-023", "Você pode estacionar do lado errado da rua (virado para o trânsito que vem)?", [
["Sim, se a rua estiver tranquila e ninguém estiver estacionado ali", "O volume de trânsito não muda a regra."],
["Sim, à noite, quando o trânsito está leve", "O horário não é uma das exceções."],
["Não, exceto em casos especiais, como uma emergência", "Correto. Não estacione do lado errado da rua, exceto em uma emergência, quando um policial exigir uma parada ou onde uma parada for especificamente permitida."]],
"", "");

T("SHR-001", "Você não consegue mudar de faixa para ultrapassar este ciclista. Quanto espaço deve deixar ao ultrapassar?", [
["Pelo menos três pés", "Correto. Deixe pelo menos três pés entre seu veículo e o ciclista. Se não conseguir deixar três pés, não ultrapasse até conseguir."],
["Pelo menos um pé, em baixa velocidade", "Um pé é perto demais. Um pequeno desequilíbrio pode causar uma colisão."],
["Pelo menos dez pés em todos os casos", "Mais espaço é bom quando possível, mas o mínimo do manual é de três pés."]],
"3 pés para bicicletas: mais ou menos o comprimento de uma régua de um metro.", "Via de duas faixas. Um carro azul se aproxima de um ciclista que anda perto da borda direita. Uma linha vermelha curta entre eles marca o espaço em questão.");
T("SHR-002", "Quais ciclistas devem usar capacete?", [
["Só os que andam em rodovias", "A regra do capacete se baseia na idade, não no local."],
["Ciclistas com menos de 18 anos", "Correto. Ciclistas com menos de 18 anos devem usar capacete."],
["Todos os ciclistas, de qualquer idade", "O manual indica a exigência para ciclistas com menos de 18 anos."]],
"", "");
T("SHR-003", "Em que sentido os ciclistas devem andar na via?", [
["Contra o trânsito, para ver os carros que vêm", "Andar contra o trânsito não é permitido e é mais perigoso."],
["Em qualquer sentido", "Os ciclistas devem andar no sentido do trânsito."],
["No mesmo sentido do trânsito", "Correto. Os ciclistas devem andar no mesmo sentido do trânsito."]],
"", "");
T("SHR-004", "Um ciclista mais lento que o trânsito vai para o meio da faixa. Quando ele pode fazer isso legalmente?", [
["Ao desviar de um perigo ou virar à esquerda", "Correto. As exceções incluem desviar de um perigo, preparar-se para virar à esquerda, ultrapassar, aproximar-se de uma conversão à direita e faixas estreitas demais para dividir com segurança. Siga a uma distância segura."],
["Nunca; ele deve sempre andar na borda direita", "Há várias exceções à regra de andar na borda direita."],
["Só quando anda em grupo", "Andar em grupo não é uma das exceções da lista."]],
"", "");
T("SHR-005", "À noite, uma bicicleta deve ter um farol dianteiro com luz branca visível a que distância?", [
["50 pés", "O manual exige visibilidade a uma distância muito maior."],
["300 pés", "Correto. O farol dianteiro deve mostrar uma luz branca visível a 300 pés."],
["1.000 pés", "O manual indica 300 pés para o farol dianteiro."]],
"", "");
T("SHR-006", "Que equipamento traseiro uma bicicleta deve ter à noite?", [
["Uma luz branca visível a 100 pés", "As luzes brancas são para a frente."],
["Nada; o equipamento traseiro é opcional", "O equipamento traseiro vermelho é obrigatório à noite."],
["Um refletor vermelho ou uma luz vermelha", "Correto. À noite é obrigatório um refletor traseiro vermelho embutido, uma luz vermelha fixa ou uma luz vermelha piscante visível a 500 pés."]],
"", "");
T("SHR-007", "Que distância de seguimento você deve manter atrás de uma motocicleta?", [
["Pelo menos três segundos", "Correto. Deixe uma distância segura de três segundos para não atingir um motociclista que freia de repente ou cai."],
["Um segundo, porque as motocicletas são pequenas", "Ser pequena não significa que ela para mais devagar. As motocicletas podem parar rápido ou cair."],
["O comprimento de dois carros", "O manual usa a regra dos três segundos."]],
"", "");
T("SHR-008", "Na Califórnia, é legal as motocicletas dividirem a faixa com outros veículos (andar entre as faixas)?", [
["Não, é sempre ilegal", "O manual diz que dividir a faixa com motocicletas é legal."],
["Sim, é legal", "Correto. Andar entre as faixas é legal. Sempre que possível, dê a faixa inteira a uma motocicleta e vá para um lado da sua faixa para dar mais espaço."],
["Só em ruas da cidade", "O manual não limita isso dessa forma."]],
"", "");
T("SHR-009", "Qual afirmação sobre ultrapassar uma motocicleta está correta?", [
["Você pode dividir a faixa da motocicleta para ultrapassá-la", "Nunca tente ultrapassar uma motocicleta na mesma faixa que você."],
["Ultrapassar pelo acostamento direito", "Andar pelo acostamento para ultrapassar não é permitido."],
["Nunca tente ultrapassar uma motocicleta na mesma faixa que você", "Correto. A motocicleta tem direito à faixa inteira. Ultrapasse usando outra faixa quando for seguro."]],
"", "");
T("SHR-010", "Por que é fácil não ver as motocicletas ao mudar de faixa?", [
["São menores e somem facilmente nos pontos cegos", "Correto. Verifique com cuidado os espelhos e os pontos cegos procurando motocicletas."],
["Sempre andam mais devagar que os carros", "As motocicletas podem andar em qualquer velocidade; o problema é o tamanho."],
["Não usam faróis", "O problema de visibilidade é principalmente o tamanho pequeno."]],
"", "");
T("SHR-011", "Um pedestre está atravessando a rua fora da faixa de pedestres. O que você deve fazer?", [
["Seguir em frente, porque ele está atravessando de forma ilegal", "Mesmo que alguém atravesse no lugar errado, você ainda deve evitar atingi-lo."],
["Reduzir a velocidade ou parar para ele atravessar", "Correto. Com ou sem faixa de pedestres, tenha cuidado, reduza a velocidade ou pare para o pedestre terminar de atravessar com segurança."],
["Buzinar até ele sair", "Buzinar pode assustar as pessoas, especialmente idosos, pessoas com crianças ou pessoas com deficiência."]],
"", "");
T("SHR-012", "Por que você deve ter cuidado extra perto de pedestres cegos se dirige um veículo híbrido ou elétrico?", [
["Esses veículos não conseguem parar rápido", "A capacidade de parar não é a principal preocupação aqui."],
["Esses veículos têm espelhos menores", "A preocupação é o som, não os espelhos."],
["Os pedestres cegos se orientam pelo som", "Correto. Veículos híbridos e elétricos podem ser muito silenciosos, e os pedestres cegos se orientam pelo som para saber que há um veículo perto. Tenha cuidado especial ao virar ou dar ré."]],
"", "");
T("SHR-013", "Pedestres que usam cão-guia ou bengala branca têm a preferência:", [
["O tempo todo", "Correto. Pedestres que usam cão-guia ou bengala branca têm a preferência o tempo todo."],
["Só nas faixas de pedestres marcadas", "A preferência deles não se limita às faixas marcadas."],
["Só quando o sinal WALK está aceso", "A preferência deles vale o tempo todo."]],
"", "");
T("SHR-014", "Você vê animais ou gado perto da via. O que deve fazer?", [
["Buzinar para os animais saírem da via", "É contra a lei assustar de propósito cavalos ou gado, e um animal assustado pode correr na sua frente."],
["Reduzir a velocidade ou parar, e seguir as instruções do responsável", "Correto. Reduza a velocidade ou pare, siga quando for seguro e obedeça às instruções da pessoa responsável pelos animais."],
["Acelerar para passar rápido pelos animais", "Passar rápido pelos animais pode assustá-los e fazê-los entrar na sua frente."]],
"", "");
T("SHR-015", "Os veículos elétricos de bairro (NEV) e os veículos de baixa velocidade (LSV) são proibidos em vias com limite de velocidade acima de:", [
["25 mph", "25 mph é a velocidade máxima deles, não o limite da via que os proíbe."],
["55 mph", "O manual indica um limite menor."],
["35 mph", "Correto. NEVs e LSVs chegam a no máximo 25 mph e são proibidos em vias onde o limite é maior que 35 mph."]],
"", "");
T("SHR-016", "Em uma via de duas faixas, um carro vem na sua direção e há um ciclista à frente, à sua direita. Qual é o plano mais seguro?", [
["Reduzir a velocidade e lidar com um perigo de cada vez", "Correto. Reduza a velocidade e deixe o veículo que vem passar. Depois vá para a esquerda para dar bastante espaço ao ciclista (pelo menos três pés). Enfrente um perigo de cada vez."],
["Passar entre os dois ao mesmo tempo, com cuidado", "Espremer-se entre dois perigos não deixa margem para erro."],
["Buzinar para o ciclista ir mais para a direita", "Buzinar pode assustar o ciclista e empurrá-lo para os carros estacionados ou para a borda."]],
"", "");
T("SHR-017", "Qual destas coisas os ciclistas podem fazer?", [
["Andar em qualquer rodovia", "Eles só podem andar em certos trechos de rodovia onde não há rota alternativa e onde não é proibido."],
["Ir para a esquerda para desviar de perigos como carros estacionados ou detritos", "Correto. Os ciclistas podem ir para a esquerda para desviar de perigos, então dê espaço a eles."],
["Andar contra o trânsito em ruas de mão dupla", "Os ciclistas devem andar no sentido do trânsito."]],
"", "");
T("SHR-018", "Qual grupo pode precisar de mais tempo para atravessar a rua?", [
["Só as pessoas correndo", "O manual cita vários grupos que podem precisar de mais tempo, e não quem está correndo."],
["Ninguém, porque os semáforos dão tempo suficiente", "Algumas pessoas precisam de mais tempo que outras, independentemente dos semáforos."],
["Idosos e pessoas com deficiência", "Correto. Idosos, pessoas com crianças pequenas e pessoas com deficiência podem precisar de mais tempo. Sempre dê tempo suficiente aos pedestres para atravessar."]],
"", "");
T("EMV-001", "O ônibus escolar da imagem está com luzes vermelhas piscando. Você vem no sentido contrário nesta via de duas faixas. O que deve fazer?", [
["Parar até as luzes pararem de piscar", "Correto. Quando um ônibus escolar pisca luzes vermelhas, pare em qualquer sentido até as crianças atravessarem com segurança e as luzes pararem de piscar."],
["Reduzir a velocidade e passar com cuidado", "Em uma via como esta, você deve parar em qualquer sentido."],
["Continuar, porque o ônibus está na outra faixa", "Em uma via de duas faixas sem divisão, o trânsito dos dois sentidos deve parar."]],
"", "Via de duas faixas. Um ônibus escolar está parado na faixa contrária com luzes vermelhas piscando e o braço de PARE aberto. O carro azul (você) se aproxima pela outra faixa.");
T("EMV-002", "O ônibus escolar com luzes vermelhas piscando está do outro lado desta rodovia dividida. Você precisa parar?", [
["Sim, todo o trânsito dos dois sentidos deve parar", "Há uma exceção para rodovias divididas ou com várias faixas."],
["Não, não em uma rodovia dividida ou com várias faixas", "Correto. Se o ônibus estiver do outro lado de uma rodovia dividida ou com várias faixas (duas ou mais faixas em cada sentido), você não precisa parar. Fique atento às crianças."],
["Só se você vir crianças perto do ônibus", "A regra depende do tipo de via, não de você ver crianças."]],
"", "Rodovia dividida com duas faixas em cada sentido e um canteiro central. Um ônibus escolar com luzes vermelhas piscando está parado do outro lado do canteiro. O carro azul (você) está do lado de cá.");
T("EMV-003", "Um ônibus escolar à frente está piscando luzes AMARELAS. O que isso significa?", [
["Você pode ultrapassar o ônibus rápido antes que ele pare", "Acelerar perto de um ônibus que vai embarcar ou desembarcar crianças é perigoso."],
["O ônibus terminou de embarcar", "As luzes amarelas vêm antes da parada, não depois."],
["O ônibus está se preparando para parar; reduza a velocidade e prepare-se para parar", "Correto. As luzes amarelas piscando avisam para reduzir a velocidade e se preparar para parar."]],
"", "");
T("EMV-004", "Se você não parar para um ônibus escolar com luzes vermelhas piscando, o que pode acontecer?", [
["Uma multa de até US$ 1.000 e uma possível suspensão", "Correto. Você pode ser multado em até US$ 1.000, e seu direito de dirigir pode ser suspenso por um ano."],
["Só uma carta de advertência, na primeira infração", "O manual cita penalidades sérias, não uma advertência."],
["Nada, se nenhuma criança se machucou", "Não parar é uma infração, tenha alguém se machucado ou não."]],
"", "");
T("EMV-005", "Um veículo de emergência com sirene e luzes vermelhas está vindo atrás de você. O que deve fazer?", [
["Acelerar para ficar à frente dele", "Acelerar não libera o caminho e arrisca uma colisão."],
["Ir para a borda direita e parar", "Correto. Dê a preferência indo para a borda direita da via e parando até o veículo de emergência passar."],
["Parar imediatamente na sua faixa", "Parar na sua faixa pode bloquear o veículo de emergência. Vá primeiro para a borda direita."]],
"", "Via de duas faixas. Um caminhão de bombeiros com luzes piscando vem atrás do carro azul (você).");
T("EMV-006", "Você já está em um cruzamento quando vê um veículo de emergência vindo. O que deve fazer?", [
["Parar onde está, no meio do cruzamento", "Parar no cruzamento pode bloquear o veículo de emergência e o resto do trânsito."],
["Dar ré com cuidado para sair do cruzamento", "Dar ré é perigoso e lento."],
["Liberar o cruzamento, depois ir para a direita e parar", "Correto. Continue atravessando o cruzamento e depois vá para a direita assim que for seguro e pare."]],
"", "");
T("EMV-007", "É contra a lei seguir a menos de quantos pés de um caminhão de bombeiros, viatura policial ou ambulância com a sirene ou as luzes piscando ligadas?", [
["300 pés", "Correto. Não siga a menos de 300 pés de um veículo de emergência quando a sirene ou as luzes piscando estiverem ligadas."],
["100 pés", "O manual indica uma distância maior."],
["50 pés", "50 pés é perto demais. O manual indica 300 pés."]],
"", "");
T("EMV-008", "Você se aproxima de um guincho parado no acostamento com luzes âmbar piscando. O que deve fazer?", [
["Nada especial; não é um veículo de emergência", "Guinchos com luzes âmbar piscando estão incluídos na regra de mudar de faixa."],
["Mudar de faixa e reduzir a velocidade", "Correto. Mude de faixa e reduza a velocidade para veículos de emergência parados, guinchos com luzes âmbar piscando e veículos de obras parados com luzes de advertência."],
["Parar atrás dele", "Não é preciso parar; mude de faixa e reduza a velocidade."]],
"", "");
T("EMV-009", "Um bombeiro dá uma instrução que contradiz um semáforo. O que você deve fazer?", [
["Obedecer ao semáforo", "No local de uma ocorrência, as instruções de policiais e bombeiros têm prioridade."],
["Ignorar os dois e dirigir com cuidado", "Você deve seguir as instruções do bombeiro."],
["Seguir a instrução do bombeiro", "Correto. Obedeça a qualquer instrução de um policial ou bombeiro, mesmo que contradiga placas, semáforos ou leis."]],
"", "");
T("EMV-010", "O que pode acontecer se você for até o local de um incêndio ou colisão só para olhar?", [
["Você pode ser preso", "Correto. Você pode ser preso por ir até o local de um incêndio, colisão ou outro desastre, porque atrapalha os bombeiros, as equipes de ambulância e o pessoal de resgate."],
["Nada, porque é uma via pública", "Atrapalhar as equipes de emergência pode ser crime mesmo em uma via pública."],
["Pedirão que você ajude as equipes", "As equipes de emergência não precisam de curiosos; você atrapalharia."]],
"", "");
T("EMV-011", "Você vê um orientador de travessia perto de uma escola. O que deve fazer?", [
["Segui-lo só se não houver semáforo", "As instruções dele devem ser seguidas o tempo todo."],
["Obedecer às instruções dele o tempo todo", "Correto. Obedeça sempre às patrulhas de segurança escolar e aos orientadores de travessia."],
["Considerar as instruções só como sugestão", "As instruções dos orientadores de travessia devem ser obedecidas."]],
"", "");
T("EMV-012", "Uma viatura liga as luzes de emergência e zigue-zagueia devagar por todas as faixas à sua frente (uma interrupção de trânsito). O que deve fazer?", [
["Ultrapassar a viatura com cuidado pela direita", "Não passe a viatura durante uma interrupção de trânsito."],
["Parar de repente na sua faixa, onde estiver", "Frear de repente pode causar colisões. Reduza a velocidade aos poucos."],
["Ligar o pisca-alerta, reduzir aos poucos e ficar atrás do policial", "Correto. Ligue o pisca-alerta, reduza aos poucos até a velocidade do policial e não passe a viatura até o policial desligar as luzes de emergência."]],
"", "");
T("EMV-013", "Um policial sinaliza para você encostar enquanto está na faixa de carona (HOV). O que deve fazer?", [
["Dar seta para a direita e ir para o acostamento direito", "Correto. Vá totalmente para o acostamento direito, mesmo que esteja na faixa de carona/HOV. Pare em um lugar bem iluminado quando possível."],
["Parar ali mesmo na faixa HOV", "Parar em uma faixa de trânsito é perigoso."],
["Encostar no acostamento esquerdo, junto à faixa HOV", "O manual diz para ir para o acostamento direito."]],
"", "");
T("EMV-014", "Durante uma abordagem policial, o que o manual recomenda antes de o policial chegar ao seu carro?", [
["Sair e caminhar em direção ao policial", "Fique dentro do veículo, a menos que o policial mande você sair."],
["Abaixar o vidro, desligar o rádio e manter as mãos bem à vista", "Correto. O motorista e os passageiros devem manter as mãos bem à vista."],
["Procurar seus documentos embaixo do banco", "Mexer-se procurando coisas pode ser mal interpretado. Mantenha as mãos visíveis até que peçam."]],
"", "");
T("TRK-001", "Você está dirigindo ao lado do reboque do caminhão, como mostrado. O que é verdade?", [
["O motorista do caminhão sempre consegue ver você nos espelhos grandes", "Veículos grandes têm pontos cegos grandes, as “zonas proibidas”, onde seu carro pode sumir de vista."],
["Andar ao lado do caminhão é mais seguro porque ele bloqueia o vento", "Dirigir ao lado de um veículo grande dificulta que o motorista evite perigos."],
["Você pode estar no ponto cego do caminhão; ultrapasse-o ou fique para trás em vez de ficar ao lado", "Correto. Se você não consegue ver os espelhos laterais do caminhão, o motorista não consegue ver você. Não dirija ao lado de veículos grandes mais tempo do que o necessário."]],
"", "Via de várias faixas. Um caminhão anda para a direita na faixa de cima. O carro azul (você) está na faixa de baixo, ao lado do meio do reboque do caminhão.");
T("TRK-002", "Como saber se o motorista de um caminhão provavelmente não vê você?", [
["Se você não consegue ver os espelhos laterais do caminhão", "Correto. Se você não consegue ver os espelhos laterais do caminhão, o motorista do caminhão não consegue ver você."],
["Se o caminhão anda mais devagar que você", "A velocidade não mostra se você está visível."],
["Se seus faróis estão desligados", "Os faróis ajudam, mas o teste principal é se você consegue ver os espelhos do caminhão."]],
"", "");
T("TRK-003", "Por qual lado você deve ultrapassar um caminhão grande?", [
["Pela direita", "O manual diz para ultrapassar pela esquerda."],
["Pela esquerda", "Correto. Sempre ultrapasse um veículo grande pela esquerda e depois siga à frente dele."],
["Por qualquer lado", "O manual especifica o lado esquerdo."]],
"", "");
T("TRK-004", "Um caminhão grande à frente está com a seta da direita ligada, mas primeiro vai para a esquerda. Por quê?", [
["O motorista desistiu de virar", "Não suponha isso. Veículos longos muitas vezes se afastam primeiro do lado da conversão para ganhar espaço."],
["O caminhão está se preparando para parar", "Abrir a curva faz parte da conversão, não da parada. Observe as setas dele."],
["Ele precisa abrir a curva para conseguir virar", "Correto. As rodas traseiras de um veículo longo fazem um caminho mais curto que as dianteiras, então os caminhões muitas vezes abrem a curva. Observe as setas e não se enfie no lado para onde ele vai virar."]],
"", "");
T("TRK-005", "Qual é um hábito seguro perto de caminhões grandes?", [
["Evitar entrar na frente deles e reduzir de repente", "Correto. Um veículo grande não consegue parar tão rápido quanto um carro."],
["Mudar de faixa bem na frente deles para chegar à sua saída", "Entrar na frente de um caminhão não deixa espaço para ele parar."],
["Seguir de perto para economizar combustível", "Andar colado diminui a distância de segurança e bloqueia sua visão."]],
"", "");
T("TRK-006", "Em uma rodovia dividida com quatro ou mais faixas em um sentido, quais faixas os caminhões grandes podem usar?", [
["Qualquer faixa", "Nessa situação, os caminhões grandes ficam limitados a certas faixas."],
["As duas faixas mais à direita", "Correto. Os caminhões grandes podem andar nas duas faixas mais à direita."],
["Só a faixa da extrema esquerda", "Os caminhões ficam do lado direito."]],
"", "");
T("TRK-007", "Ao rebocar um trailer em uma via com faixas marcadas, que faixa você deve usar?", [
["A faixa da extrema esquerda, para os outros ultrapassarem pela direita", "Veículos rebocando devem ficar à direita."],
["Qualquer faixa, desde que ande no limite de velocidade", "Rebocar tem regras específicas de faixa."],
["A faixa da extrema direita ou uma faixa marcada para veículos lentos", "Correto. Se não houver faixas marcadas e houver quatro ou mais faixas no seu sentido, use as duas faixas mais perto da borda direita."]],
"", "");
T("TRK-008", "O que você nunca deve fazer perto de um veículo leve sobre trilhos (VLT)?", [
["Virar na frente de um VLT que se aproxima", "Correto. Nunca vire na frente de um VLT que se aproxima."],
["Manter uma distância segura", "Manter uma distância segura é recomendado."],
["Verificar se vem um VLT antes de virar atravessando os trilhos", "Verificar se vem um VLT é recomendado."]],
"", "");
T("TRK-009", "Quando você pode ultrapassar um VLT ou bonde pela ESQUERDA?", [
["Sempre que o lado direito tiver muito trânsito", "Muito trânsito à direita não é uma das exceções."],
["Em uma rua de mão única, ou quando um policial mandar", "Correto. Não ultrapasse pela esquerda, a menos que esteja em uma rua de mão única, os trilhos estejam perto demais do lado direito para ultrapassar por lá ou um agente de trânsito mande."],
["Sempre que ele estiver parado para as pessoas descerem", "Estar parado não é uma exceção. As pessoas que embarcam e desembarcam podem estar atravessando."]],
"", "");
T("TRK-010", "O que é uma zona de segurança, e você pode passar por dentro dela?", [
["Um acostamento de rodovia para emergências; você pode passar por ele", "As zonas de segurança são para pedestres esperando o transporte público."],
["Uma zona escolar; passe a 15 mph", "Uma zona de segurança não é uma zona escolar."],
["Um espaço para pedestres que esperam ônibus ou bondes; nunca passe por dentro dela", "Correto. As zonas de segurança são marcadas com tachões ou marcadores elevados. Não passe por dentro de uma zona de segurança em nenhuma situação."]],
"", "");
T("TRK-011", "Qual área da imagem tem mais chance de estar no seu ponto cego?", [
["Área A", "A área A fica bem à frente. Você a vê pelo para-brisa."],
["Área B", "Correto. A área B fica ao seu lado e um pouco atrás. Na maioria dos veículos, os pontos cegos ficam nas laterais, um pouco atrás do motorista. Verifique-os olhando por cima do ombro."],
["Área C", "A área C fica bem atrás de você. O retrovisor interno mostra essa área."]],
"", "Vista de cima de um carro azul virado para cima na faixa do meio. O círculo A fica bem à frente, o círculo B fica na faixa da esquerda logo atrás do banco do motorista e o círculo C fica bem atrás do carro.");
T("TRK-012", "Como você deve verificar seus pontos cegos?", [
["Olhar por cima do ombro, virando só a cabeça", "Correto. Olhe por cima dos ombros direito e esquerdo pelas janelas laterais, virando só a cabeça."],
["Virar o corpo todo e o volante", "Virar o volante pode fazer o carro invadir outra faixa."],
["Usar só os espelhos laterais", "Os espelhos não mostram os pontos cegos."]],
"", "");
T("TRK-013", "Quando você deve verificar seus pontos cegos?", [
["Só ao mudar de faixa em velocidade de rodovia", "A verificação dos pontos cegos é necessária em muitas situações."],
["Antes de quase toda manobra, inclusive ao abrir a porta", "Correto. Verifique antes de mudar de faixa, virar, entrar no trânsito, dar ré, sair de uma vaga, fazer baliza, sair do meio-fio e abrir a porta."],
["Só ao sair de ré de uma vaga", "Muitas outras manobras também exigem verificar os pontos cegos."]],
"", "");
T("TRK-014", "Qual prática ajuda você a manter espaço nas laterais?", [
["Ficar nos pontos cegos dos outros motoristas para eles saberem onde você está", "Não fique no ponto cego de outro motorista."],
["Dirigir perto dos carros estacionados para deixar espaço para o trânsito", "Mantenha espaço entre seu veículo e os carros estacionados, caso uma porta se abra."],
["Evitar dirigir bem ao lado de outros veículos", "Correto. Mantenha também espaço entre seu veículo e os carros estacionados."]],
"", "");
T("RR-001", "A cancela começa a subir, mas as luzes vermelhas continuam piscando. O que você deve fazer?", [
["Continuar parado até as luzes vermelhas pararem de piscar", "Correto. Não atravesse até as luzes vermelhas pararem de piscar, mesmo que a cancela suba."],
["Seguir quando a cancela estiver totalmente levantada", "As luzes ainda piscando significam que um trem ainda pode estar vindo."],
["Contornar a cancela rapidamente", "Nunca contorne nem passe por baixo das cancelas; um trem pode estar vindo."]],
"", "Via que cruza trilhos de trem com uma cancela vermelha e branca abaixada e uma luz vermelha piscando. O carro azul (você) espera antes dos trilhos.");
T("RR-002", "Os dispositivos de aviso indicam que um trem está vindo. A que distância do trilho mais próximo você deve parar?", [
["Pelo menos 5 pés", "O manual indica uma distância maior."],
["Pelo menos 15 pés", "Correto. Pare a pelo menos 15 pés do trilho mais próximo."],
["Bem na beira dos trilhos", "Isso é perto demais de um trem passando."]],
"", "");
T("RR-003", "As cancelas estão abaixadas, mas você não vê nenhum trem. O que deve fazer?", [
["Contornar as cancelas com cuidado se não vir trem", "Nunca passe por baixo nem contorne cancelas abaixadas, mesmo que não veja um trem."],
["Levantar o braço da cancela e passar devagar", "Mexer na cancela é perigoso e não é permitido."],
["Ficar onde está e ligar para o número indicado ou para o 911", "Correto. Não passe por baixo nem contorne cancelas abaixadas. Se as cancelas estiverem abaixadas e nenhum trem se aproximar, ligue para o número gratuito de emergência da ferrovia indicado no local ou para o 911."]],
"", "");
T("RR-004", "O trânsito está parado do outro lado de uma passagem de nível. O que você deve fazer?", [
["Esperar antes dos trilhos até haver espaço para atravessá-los completamente", "Correto. Não comece a atravessar a menos que tenha espaço suficiente para atravessar completamente."],
["Começar a atravessar e esperar sobre os trilhos se for preciso", "Nunca pare sobre os trilhos do trem."],
["Parar com as rodas dianteiras sobre o primeiro trilho", "Qualquer parte do seu carro sobre os trilhos está em perigo."]],
"", "");
T("RR-005", "Seu carro morre sobre os trilhos, um trem está vindo e as luzes estão piscando. Para onde você deve ir?", [
["Caminho A", "Correto. Correr na direção de onde vem o trem mantém você fora da trajetória dos destroços quando o trem bater no carro. Depois ligue para o 911."],
["Caminho B", "Os destroços da batida são lançados no sentido em que o trem se move."],
["C: ficar no carro", "Com um trem se aproximando, saia imediatamente."]],
"Corra NA DIREÇÃO do trem (na diagonal, afastando-se dos trilhos): os destroços voam para a frente junto com o trem.", "Um carro azul está parado sobre os trilhos do trem. Um trem vem da esquerda e se move para a direita. A seta pontilhada A aponta para cima e para a esquerda, para onde vem o trem. A seta pontilhada B aponta para cima e para a direita. C indica ficar dentro do carro.");
T("RR-006", "Seu carro morre sobre os trilhos. Nenhum trem se aproxima e nenhuma luz de aviso está piscando. O que deve fazer?", [
["Ficar no carro e esperar um guincho", "Saia do carro primeiro, mesmo que não veja nenhum trem. Depois avise."],
["Sair e ligar para o número indicado na passagem de nível", "Correto. Saia do veículo, ligue para o número nos postes da passagem ou na caixa de controle metálica, informe o número da passagem se houver e diga que há um veículo sobre os trilhos. Depois ligue para o 911."],
["Deixar o carro e voltar para buscá-lo depois", "Você deve avisar que há um veículo sobre os trilhos para que os trens sejam alertados."]],
"", "");
T("RR-007", "Em uma passagem de nível, quando pode vir um trem?", [
["Só nos horários da tabela de trens", "Os horários mudam. Espere um trem a qualquer momento."],
["Só durante o dia", "Os trens circulam de dia e de noite, então espere um a qualquer hora."],
["A qualquer momento, de qualquer direção", "Correto. Espere um trem em qualquer trilho, a qualquer momento, vindo de qualquer direção."]],
"", "");
T("RR-008", "Quais veículos devem parar antes de atravessar trilhos de trem, mesmo sem nenhum trem à vista?", [
["Ônibus escolares e veículos com placas de materiais perigosos", "Correto. Ônibus, ônibus escolares e veículos com placa de materiais perigosos devem parar antes de atravessar os trilhos. Esteja pronto para parar atrás deles."],
["Motocicletas, ciclomotores e outros veículos de duas rodas", "Motocicletas e ciclomotores não estão na lista do manual de veículos que devem parar em toda passagem."],
["Picapes e vans transportando carga", "Picapes e vans não estão na lista do manual de veículos que devem parar em toda passagem."]],
"", "");
T("RR-009", "Muitas passagens de nível têm uma placa azul e branca. Para que serve?", [
["Mostra a tabela de horários dos trens naquela passagem", "Não são colocados horários nas passagens para os motoristas. Espere um trem a qualquer momento."],
["Dá informações de emergência sobre a passagem", "Correto. A placa azul e branca diz o que fazer se houver uma emergência sobre os trilhos ou perto deles, ou se seu veículo morrer sobre eles."],
["Marca o estacionamento para passageiros do trem", "A placa azul dá informações de emergência, não de estacionamento."]],
"", "");
T("RR-010", "Você pode fazer um retorno em uma passagem de nível ou sobre ela?", [
["Sim, se não houver trem à vista", "Um retorno em uma passagem de nível nunca é permitido."],
["Só se as cancelas estiverem levantadas", "As cancelas levantadas não mudam a regra. Retornos em passagens de nível ou sobre elas nunca são permitidos."],
["Nunca", "Correto. Nunca faça um retorno em uma passagem de nível ou sobre ela."]],
"", "");

T("CND-001", "Quando você deve baixar o farol alto para um veículo que vem de frente?", [
["A menos de 100 pés", "A 100 pés o outro motorista já estaria ofuscado."],
["A menos de 500 pés do veículo que vem de frente", "Correto. Baixe o farol alto a menos de 500 pés de um veículo que vem na sua direção e a menos de 300 pés de um veículo que você está seguindo."],
["Só se o outro motorista piscar os faróis", "Você deve baixá-lo mesmo que o outro motorista não faça sinal."]],
"", "");
T("CND-002", "Quando você está seguindo outro veículo, deve baixar o farol alto a menos de:", [
["100 pés", "O manual indica uma distância maior."],
["1.000 pés", "O manual indica 300 pés quando se está seguindo."],
["300 pés", "Correto. Baixe o farol alto a menos de 300 pés de um veículo que você está seguindo."]],
"", "");
T("CND-003", "Quando os faróis devem estar acesos?", [
["De 30 minutos depois do pôr do sol até 30 minutos antes do nascer do sol", "Correto. Use os faróis de 30 minutos depois do pôr do sol até 30 minutos antes do nascer do sol. Você também deve usar o farol baixo sempre que precisar dos limpadores por causa de neblina, chuva ou neve, e quando estiver escuro demais para ver 1.000 pés à frente."],
["Só depois que estiver completamente escuro", "Os faróis são necessários antes, a partir de 30 minutos depois do pôr do sol."],
["Só em rodovias à noite", "As regras dos faróis valem em todas as vias."]],
"", "");
T("CND-004", "Está chovendo o bastante para você precisar dos limpadores de para-brisa. O que mais deve fazer?", [
["Ligar só as luzes de posição", "É ilegal dirigir só com as luzes de posição."],
["Ligar o farol baixo", "Correto. Se você precisa dos limpadores por causa de neblina, chuva ou neve, deve ligar o farol baixo."],
["Ligar o farol alto", "O farol alto reflete na chuva e na neblina e causa ofuscamento."]],
"", "");
T("CND-005", "Os faróis de um carro que vem de frente estão ofuscando você. Para onde deve olhar?", [
["Direto para os faróis, para calcular a distância", "Olhar direto para luzes fortes torna mais difícil enxergar."],
["Para o painel", "Olhar para baixo tira seus olhos da via."],
["Para a borda direita da sua faixa", "Correto. Observe o veículo que vem com o canto do olho."]],
"", "");
T("CND-006", "Um motorista que vem de frente não baixa o farol alto. O que você deve fazer?", [
["Não responder com seu farol alto; olhar para a borda direita da sua faixa", "Correto. Não reaja mantendo seu farol alto ligado."],
["Ligar seu farol alto para chamar a atenção dele", "Isso só torna mais difícil para os dois enxergarem."],
["Fechar os olhos um instante enquanto ele passa", "Nunca feche os olhos enquanto dirige."]],
"", "");
T("CND-007", "À noite, um veículo com uma só luz vem na sua direção. O que você deve fazer?", [
["Supor que é uma motocicleta e manter sua posição na faixa", "Você não tem como saber o que é. Vá para a direita."],
["Ir o mais para a direita possível", "Correto. Pode ser um ciclista, um motociclista ou um veículo com um farol queimado."],
["Piscar o farol alto", "Piscar os faróis não cria espaço."]],
"", "");
T("CND-008", "Quando o asfalto fica especialmente escorregadio na chuva?", [
["Depois de várias horas de chuva", "A chuva prolongada lava parte do óleo e da poeira; o pior momento é o começo."],
["Só à noite", "O quanto a via escorrega depende das condições dela, não da hora do dia."],
["Quando começa a chover, especialmente depois de um longo período seco", "Correto. O óleo e a poeira da via ainda não foram lavados."]],
"", "");
T("CND-009", "Quais áreas costumam congelar antes do resto da via?", [
["Pontes, viadutos e lugares com sombra", "Correto. Esses lugares congelam primeiro e secam por último."],
["Trechos retos ensolarados", "As áreas com sol costumam esquentar primeiro."],
["Cruzamentos com semáforo", "Os semáforos não afetam o congelamento."]],
"", "");
T("CND-010", "Seu carro começa a derrapar em uma via escorregadia. O que você deve fazer?", [
["Frear forte e virar para o lado contrário da derrapagem", "Frear forte piora a derrapagem."],
["Aliviar o acelerador e virar na direção da derrapagem", "Correto. Tire o pé do acelerador devagar, não use os freios e vire o volante na direção da derrapagem. Tente pôr uma roda sobre asfalto seco."],
["Pisar no acelerador para recuperar a aderência rápido", "Acelerar faz os pneus perderem mais aderência e reduz seu controle."]],
"", "");
T("CND-011", "Seu veículo tem freios antitravamento (ABS) nas quatro rodas e você está derrapando com as rodas travadas. O que deve fazer?", [
["Bombear os freios rapidamente", "Bombear é para veículos sem ABS."],
["Tirar o pé totalmente do freio", "Essa é a orientação só para ABS nas rodas dianteiras."],
["Pisar firme no pedal do freio", "Correto. Com ABS nas quatro rodas, pise firme no pedal do freio."]],
"", "");
T("CND-012", "Seu carro começa a aquaplanar. O que você deve fazer?", [
["Reduzir a velocidade aos poucos e não usar os freios", "Correto. Aquaplanar significa que os pneus estão deslizando sobre a água."],
["Frear forte imediatamente", "Frear de repente pode fazer você perder o controle."],
["Acelerar para atravessar a água", "Acelerar piora a aquaplanagem."]],
"", "");
T("CND-013", "O que ajuda a evitar a aquaplanagem?", [
["Dirigir mais rápido para ficar menos tempo na água", "A velocidade torna a aquaplanagem mais provável."],
["Dirigir devagar e desviar da água parada se possível", "Correto. Reduza a velocidade também se ouvir barulho de água nos pneus."],
["Usar o piloto automático", "O piloto automático mantém a velocidade em vez de deixar você reduzir."]],
"", "");
T("CND-014", "Que luzes você deve usar em neblina densa?", [
["Farol alto", "O farol alto reflete e causa ofuscamento."],
["Só as luzes de posição", "Nunca dirija só com as luzes de posição."],
["Farol baixo", "Correto. Nunca dirija só com as luzes de posição ou de neblina."]],
"", "");
T("CND-015", "A neblina fica densa demais para dirigir com segurança. O que o manual sugere?", [
["Sair da via, ligar o pisca-alerta e esperar as condições melhorarem", "Correto. Sair da via é mais seguro do que dirigir sem enxergar."],
["Continuar dirigindo, mas seguir de perto o carro da frente", "Seguir de perto não deixa tempo para reagir."],
["Parar na sua faixa e apagar as luzes", "Parar em uma faixa sem luzes é muito perigoso."]],
"", "");
T("CND-016", "O que é recomendado ao dirigir com ventos fortes?", [
["Usar o piloto automático para manter a velocidade constante", "Não use o piloto automático; mantenha o máximo controle do acelerador."],
["Reduzir a velocidade e segurar firme o volante", "Correto. Fique atento a detritos e considere encostar até a tempestade passar."],
["Dirigir perto de caminhões grandes para se proteger", "Os veículos grandes são especialmente afetados pelo vento."]],
"", "");
T("CND-017", "A via à frente está alagada e você não sabe a profundidade da água. O que é melhor?", [
["Atravessar rápido", "Passar rápido pela água pode fazer você perder o controle."],
["Seguir de perto o carro da frente pela água", "Seguir de perto não reduz os perigos."],
["Procurar outro caminho", "Correto. Você pode não conseguir avaliar a profundidade. Se não tiver outra opção, passe devagar e teste os freios depois."]],
"", "");
T("CND-018", "Um pneu estoura. O que você deve fazer primeiro?", [
["Segurar o volante com as duas mãos e soltar o acelerador aos poucos", "Correto. Mantenha a velocidade se for possível e seguro, dirija para onde quer ir e depois reduza e encoste quando for seguro."],
["Frear forte imediatamente", "Frear de repente pode fazer você perder o controle."],
["Tirar o pé do acelerador de repente e virar para o acostamento", "Tirar o pé de forma brusca também pode fazer você perder o controle."]],
"", "");
T("CND-019", "Suas rodas da direita saem do asfalto. O que você deve fazer?", [
["Puxar o volante de uma vez para voltar logo à via", "Virar com força demais pode jogar você no trânsito que vem de frente."],
["Aliviar o acelerador, frear de leve e voltar com cuidado", "Correto. Segure o volante com firmeza, tire o pé do acelerador, freie de leve, verifique o trânsito atrás de você e volte com cuidado para o asfalto."],
["Frear forte ainda no acostamento", "Frear forte em um acostamento solto pode causar uma derrapagem."]],
"", "");
T("CND-020", "Você precisa parar por um problema no veículo. Onde deve evitar parar?", [
["Totalmente fora da via, longe do trânsito", "Esse é o lugar recomendado."],
["Onde os outros possam ver seu veículo de trás", "Isso é recomendado se você não conseguir sair da via."],
["Logo depois do topo de uma ladeira ou logo depois de uma curva", "Correto. Os outros motoristas podem não ver seu veículo a tempo."]],
"", "");
T("CND-021", "Você vê uma colisão à frente. Como pode avisar os motoristas que vêm atrás?", [
["Ligar o pisca-alerta ou tocar no freio", "Correto. Avise os motoristas de trás ligando o pisca-alerta, tocando de leve no pedal do freio três ou quatro vezes ou usando um sinal com a mão ao reduzir e parar."],
["Parar de repente para os motoristas de trás perceberem", "Paradas repentinas podem causar batidas na traseira."],
["Ligar o farol alto e buzinar", "O farol alto e a buzina não avisam claramente os motoristas de trás. O pisca-alerta e as luzes de freio avisam."]],
"", "");
T("CND-022", "Quando é adequado usar a buzina?", [
["Para mostrar aos outros motoristas que você está irritado", "A buzina é para avisos, não para expressar frustração."],
["Para ajudar a evitar uma colisão", "Correto. Use a buzina para evitar colisões e para alertar o trânsito que vem em estradas estreitas de montanha onde você não consegue ver pelo menos 200 pés à frente."],
["Para os pedestres atravessarem mais rápido", "Buzinar para pedestres pode assustá-los e não é um uso seguro da buzina."]],
"", "");
T("CND-023", "Você sai de um posto de gasolina bem iluminado para uma via escura. O que deve fazer?", [
["Ligar o farol alto de qualquer jeito", "O farol alto pode ofuscar outros motoristas e nem sempre é legal."],
["Dirigir mais rápido para chegar a uma área iluminada", "Acelerar quando você não enxerga bem é perigoso."],
["Dirigir devagar até seus olhos se acostumarem ao escuro", "Correto. Seus olhos precisam de tempo para se acostumar."]],
"", "");
T("CND-024", "Seus freios ficam molhados depois de passar por água funda. Como pode secá-los?", [
["Pisar de leve no acelerador e no freio ao mesmo tempo", "Correto. Você pode secar os freios molhados pisando de leve no acelerador e no freio ao mesmo tempo, só até os freios secarem."],
["Dirigir rápido por um tempo para o ar secá-los", "A velocidade não seca os freios, e dirigir rápido com freios fracos não é seguro."],
["Acionar o freio de mão várias vezes", "O método do manual usa os pedais do acelerador e do freio, não o freio de mão."]],
"", "");
T("CND-025", "Enquanto dirige, você se sente cansado, tonto e com dor de cabeça, e suspeita de monóxido de carbono. O que deve fazer?", [
["Aumentar o aquecedor", "Isso não resolve um vazamento do escapamento."],
["Mandar verificar o sistema de escapamento", "Correto. O monóxido de carbono não tem cheiro; esses sintomas podem ser um sinal de alerta. Nunca ligue o veículo em uma garagem fechada."],
["Ignorar; o monóxido de carbono só vem de caminhões", "Todos os veículos a gasolina produzem monóxido de carbono."]],
"", "");
T("IMP-001", "Se você tem 21 anos ou mais, é ilegal dirigir com uma concentração de álcool no sangue (BAC) de:", [
["0,10% ou mais", "O limite da Califórnia para adultos é menor que 0,10%."],
["0,05% ou mais", "0,05% aparece nos testes de menores de 21 anos, não é o limite para adultos."],
["0,08% ou mais", "Correto. Para motoristas de 21 anos ou mais, o limite é de 0,08%. Limites menores valem para motoristas com menos de 21 anos, em liberdade condicional por DUI, motoristas comerciais e motoristas que transportam passageiros mediante pagamento."]],
"", "");
T("IMP-002", "Se você tem menos de 21 anos, é ilegal dirigir com um BAC de:", [
["0,01% ou mais", "Correto. Motoristas com menos de 21 anos não podem dirigir com BAC de 0,01% ou mais."],
["0,08% ou mais", "0,08% é o limite para motoristas de 21 anos ou mais."],
["0,04% ou mais", "0,04% vale para motoristas comerciais e que transportam passageiros mediante pagamento."]],
"", "");
T("IMP-003", "Uma pessoa de qualquer idade em liberdade condicional por DUI não pode dirigir com um BAC de:", [
["0,08% ou mais", "A liberdade condicional por DUI tem um limite muito menor."],
["0,01% ou mais", "Correto. O limite é de 0,01% em qualquer idade durante a liberdade condicional por DUI."],
["0,05% ou mais", "O manual indica 0,01% para motoristas em liberdade condicional por DUI."]],
"", "");
T("IMP-004", "Qual é o limite de BAC para quem transporta passageiros mediante pagamento?", [
["0,08%", "Motoristas que transportam passageiros mediante pagamento têm um limite menor."],
["0,01%", "0,01% é o limite para motoristas com menos de 21 anos ou em liberdade condicional por DUI."],
["0,04%", "Correto. 0,04% ou mais é ilegal ao transportar passageiros mediante pagamento e também ao dirigir um veículo que exige carteira comercial."]],
"", "");
T("IMP-005", "Seu BAC está abaixo do limite legal. Você ainda pode ser preso por DUI?", [
["Sim, dependendo do quanto você está prejudicado, mesmo sem medir o BAC", "Correto. Quase todo mundo sente os efeitos do álcool abaixo do limite legal."],
["Não, estar abaixo do limite significa que você está dentro da lei", "Estar abaixo do limite não significa que é seguro. O comprometimento por si só pode levar à prisão."],
["Só se você tiver menos de 21 anos", "Isso vale para qualquer idade. Dirigir com as capacidades prejudicadas pode levar à prisão mesmo abaixo do limite legal de BAC."]],
"", "");
T("IMP-006", "O que pode tornar ilegal dirigir?", [
["Só as drogas ilegais, não os remédios receitados pelo médico", "A lei trata da mesma forma os remédios com receita e os sem receita se eles afetarem sua direção."],
["Qualquer droga que afete sua direção, mesmo receitada", "Correto. A lei não vê diferença entre drogas ilegais e remédios do médico ou da farmácia. Qualquer droga que afete sua capacidade de dirigir com segurança conta. Leia os rótulos e conheça os efeitos."],
["Só o álcool, porque as leis sobre drogas são separadas", "As leis de DUI da Califórnia valem tanto para álcool quanto para drogas."]],
"", "");
T("IMP-007", "O que acontece se você recusar um teste químico quando um policial suspeita de DUI?", [
["Nada; o teste é opcional", "Quando você dirige na Califórnia, consente em fazer os testes."],
["Você recebe uma advertência na primeira vez", "Não existe exceção de advertência."],
["O DMV vai suspender ou cassar seu direito de dirigir", "Correto. O manual diz que a recusa leva a uma suspensão ou cassação por um ano."]],
"", "");
T("IMP-008", "Você tem uma garrafa de bebida alcoólica aberta no carro. Onde ela deve ficar?", [
["No porta-malas", "Correto. Um recipiente aberto deve ficar no porta-malas ou em outro lugar onde os passageiros não se sentam."],
["No porta-luvas, fechado", "É ilegal guardar um recipiente aberto de bebida alcoólica no porta-luvas, mesmo que o porta-luvas esteja fechado."],
["Embaixo do banco do motorista", "Isso fica na área dos passageiros e não é permitido."]],
"", "");
T("IMP-009", "Você tem menos de 21 anos. Quando pode levar uma bebida alcoólica em um veículo?", [
["A qualquer momento, desde que esteja lacrada", "Estar lacrada não basta. Alguém de 21 anos ou mais também deve estar com você, a menos que você tenha uma exceção de trabalho."],
["Quando alguém de 21 anos ou mais estiver com você e ela estiver lacrada", "Correto. Alguém de 21 anos ou mais deve estar com você, e o recipiente deve estar cheio, lacrado e fechado (um aberto deve ir no porta-malas). Também há uma exceção de trabalho para vendas de bebidas fora do local."],
["Nunca, em nenhuma circunstância", "O manual cita exceções."]],
"", "");
T("IMP-010", "Um motorista com menos de 21 anos é pego com álcool no veículo, violando a lei. O que pode acontecer?", [
["Só uma multa pequena, sem efeito na carteira", "O manual cita consequências mais sérias, incluindo uma possível suspensão da carteira por um ano."],
["Nada, desde que o motorista esteja sóbrio", "Ter álcool no veículo violando a lei pode levar a penalidades mesmo que o motorista não tenha bebido."],
["Apreensão do veículo, multa e suspensão da carteira por um ano", "Correto. A polícia pode apreender o veículo por até 30 dias, e o tribunal pode multar o motorista e suspender a carteira por um ano. Se o motorista ainda não tiver carteira, o DMV pode atrasá-la por até um ano."]],
"", "");
T("IMP-011", "Se você for preso por DUI, quanto tempo tem para pedir uma audiência administrativa no DMV?", [
["10 dias a partir da data da prisão", "Correto. O policial pode dar a você uma carteira temporária por 30 dias."],
["30 dias a partir da data da prisão", "30 dias é a duração da carteira temporária que o policial pode dar a você. O prazo para pedir a audiência é menor: 10 dias."],
["Um ano a partir da data da prisão", "Um ano é tarde demais. Você deve pedir a audiência até 10 dias depois da prisão."]],
"", "");
T("IMP-012", "Por quanto tempo as condenações por DUI ficam no seu histórico de motorista?", [
["3 anos", "Muitas condenações de trânsito ficam 36 meses ou mais, mas o DUI fica mais tempo."],
["10 anos", "Correto. Todas as condenações por DUI ficam no seu histórico por 10 anos."],
["Até você concluir um programa de DUI", "Concluir um programa não remove a condenação."]],
"", "");
T("IMP-013", "Como a idade afeta a tolerância ao álcool?", [
["A tolerância aumenta com a idade", "O manual diz o contrário."],
["A idade não tem efeito", "O manual diz que a tolerância diminui com a idade."],
["Com a idade, sua tolerância ao álcool diminui", "Correto. Isso aumenta o risco de problemas ao dirigir relacionados ao álcool."]],
"", "");
T("IMP-014", "O celular de um motorista adulto toca enquanto ele dirige. O que o manual recomenda?", [
["Deixar cair na caixa postal", "Correto. Não atenda. Se precisar retornar ou fazer uma ligação, encoste com segurança fora da via. Adultos só devem usar o telefone no modo viva-voz quando necessário."],
["Atender rápido e segurar o telefone baixo", "Usar o telefone na mão enquanto dirige é ilegal."],
["Atender e depois ler as mensagens nos sinais vermelhos", "Segurar o telefone e ler mensagens enquanto dirige são coisas inseguras e ilegais."]],
"", "");
T("IMP-015", "Quando um motorista com menos de 18 anos pode usar o celular enquanto dirige?", [
["Ligações no viva-voz são sempre permitidas", "Menores não podem usar o telefone, nem no viva-voz, para atender ligações ou mandar mensagens enquanto dirigem."],
["Só para pedir ajuda de emergência", "Correto. É contra a lei um menor usar celular ou aparelho sem fio para atender ligações ou enviar ou responder mensagens enquanto dirige. A única exceção é ligar pedindo ajuda de emergência."],
["Quando estiver parado em um sinal vermelho", "Parar em um sinal não cria uma exceção."]],
"", "");
T("IMP-016", "Onde você pode fixar o celular no veículo?", [
["Segurando na mão sobre o volante", "Segurar o telefone enquanto dirige é ilegal."],
["Em qualquer lugar do para-brisa, até no meio", "Ele não pode bloquear sua visão da via."],
["No para-brisa, no painel ou no console central, sem bloquear sua visão", "Correto. Use um único deslize ou toque."]],
"", "");
T("IMP-017", "Qual é uma distração comum ao dirigir?", [
["Trocar a música ou o volume", "Correto. Outras incluem olhar o telefone, o navegador, crianças ou animais de estimação, e se maquiar ou fazer a barba."],
["Verificar os espelhos", "Verificar os espelhos faz parte de dirigir com segurança."],
["Observar 10 segundos à frente", "Observar à frente é um hábito seguro."]],
"", "");
T("IMP-018", "Como o cansaço afeta a direção?", [
["Só importa em viagens longas de mais de 8 horas", "O cansaço pode afetar você em qualquer viagem."],
["Pode afetar sua visão e aumentar o tempo de reação aos perigos", "Correto. Motoristas sonolentos enxergam e reagem mais devagar."],
["O café sempre elimina o efeito", "O café não resolve o cansaço de forma confiável."]],
"", "");
T("IMP-019", "É legal dirigir usando tampões de ouvido ou fone nos dois ouvidos?", [
["Sim, se a música estiver baixa", "O volume não muda a regra."],
["Só em rodovias", "Não existe exceção para rodovias."],
["Não, é ilegal", "Correto. Você precisa ouvir buzinas, sirenes e outros sons de aviso."]],
"", "");
T("IMP-020", "Qual destas coisas é ilegal para um passageiro em um carro comum?", [
["Fumar ou comer um produto de cannabis durante a viagem", "Correto. É ilegal fumar ou comer cannabis enquanto dirige ou viaja como passageiro em um veículo."],
["Levar uma garrafa de vinho fechada e lacrada", "Recipientes fechados e lacrados são permitidos."],
["Levar um produto de cannabis lacrado no porta-malas", "Produtos de cannabis fechados e lacrados são permitidos. O problema é fumar ou comer cannabis no veículo."]],
"", "");
T("IMP-021", "Um motorista com menos de 21 anos faz um teste preliminar de álcool (PAS) que mostra BAC de 0,05%. O que pode acontecer?", [
["Nada, porque está abaixo de 0,08%", "Motoristas com menos de 21 anos têm limites muito menores."],
["O policial pode exigir um teste de bafômetro ou de sangue", "Correto. Se um teste posterior também mostrar 0,05% ou mais, o motorista pode ser preso por DUI."],
["O motorista é mandado automaticamente ao tribunal", "O próximo passo são mais testes."]],
"", "");
T("LAW-001", "Quem deve usar cinto de segurança?", [
["Só o motorista", "Os passageiros também devem usar cinto de segurança."],
["Só quem está no banco da frente", "A regra inclui os passageiros, não só o banco da frente."],
["Você e seus passageiros", "Correto. Se um passageiro com menos de 16 anos não estiver usando cinto, você, como motorista, também pode ser multado."]],
"", "");
T("LAW-002", "Como deve ser usada a faixa abdominal do cinto?", [
["Ajustada e baixa sobre os quadris", "Correto. Caso contrário, você pode escorregar para fora do cinto em uma colisão."],
["Frouxa sobre a barriga", "Um cinto frouxo e alto pode deixar você escorregar para fora."],
["Por baixo do braço", "A faixa do ombro nunca deve ficar por baixo do braço."]],
"", "");
T("LAW-003", "Uma criança tem menos de 2 anos, menos de 40 libras e menos de 3 pés e 4 polegadas de altura. Como ela deve viajar?", [
["Em um assento de elevação virado para a frente", "Crianças tão pequenas devem viajar viradas para trás."],
["Em um sistema de retenção infantil virado para trás", "Correto. Um assento virado para trás não pode ir no banco da frente de um veículo com airbag."],
["Com o cinto de segurança de adulto", "Os cintos de adulto são para crianças de 8 anos ou mais ou com pelo menos 4 pés e 9 polegadas de altura."]],
"", "");
T("LAW-004", "Quando uma criança pode usar um cinto de segurança comum em vez de uma cadeirinha?", [
["Aos 5 anos, se conseguir ficar sentada quieta", "5 anos é pouco. O manual usa 8 anos ou uma altura de 4 pés e 9 polegadas."],
["Quando pesar pelo menos 40 libras", "Só o peso não é a regra do manual. É ter 8 anos ou 4 pés e 9 polegadas de altura."],
["Aos 8 anos, ou com 4 pés e 9 polegadas de altura", "Correto. Crianças de 8 anos ou mais, ou com pelo menos 4 pés e 9 polegadas de altura, podem usar um cinto de segurança bem ajustado que atenda aos padrões federais."]],
"", "");
T("LAW-005", "A que distância do airbag do volante você deve se sentar?", [
["Pelo menos 10 polegadas", "Correto. Fique a pelo menos 10 polegadas da tampa do airbag, medindo do centro do volante até o osso do peito, desde que consiga manter o controle total do veículo."],
["Pelo menos 2 polegadas", "Duas polegadas é perto demais. O airbag infla com muita força, então o manual diz para sentar a pelo menos 10 polegadas."],
["A distância não importa se você usa cinto", "O cinto e o airbag funcionam juntos, mas você ainda precisa de pelo menos 10 polegadas de espaço da tampa do airbag."]],
"", "");
T("LAW-006", "É ilegal deixar sozinha em um veículo uma criança de que idade?", [
["Três anos ou menos", "O manual indica uma idade maior."],
["Seis anos ou menos", "Correto. A criança pode ficar sob a supervisão de alguém com pelo menos 12 anos."],
["Menos de 16", "O manual indica seis anos ou menos."]],
"", "");
T("LAW-007", "Qual é o seguro de responsabilidade civil mínimo para a morte ou lesão de uma pessoa?", [
["US$ 15.000", "US$ 15.000 é o mínimo para danos materiais."],
["US$ 60.000", "US$ 60.000 cobre a morte ou lesão de mais de uma pessoa."],
["US$ 30.000", "Correto. Também US$ 60.000 para mais de uma pessoa e US$ 15.000 para danos materiais."]],
"", "");
T("LAW-008", "Você deve informar uma colisão ao DMV em até 10 dias se:", [
["Houve danos acima de US$ 1.000, ou alguém ficou ferido ou morreu", "Correto. Envie um Relatório de Acidente de Trânsito (SR 1) ao DMV em até 10 dias. Isso vale mesmo em propriedade privada e não importa quem causou."],
["Só se a polícia foi ao local da colisão", "A polícia não faz o relatório ao DMV por você."],
["Só se você foi o motorista culpado", "Você deve informar tenha causado a colisão ou não."]],
"", "");
T("LAW-009", "Seu carro bate em um carro estacionado e você não encontra o dono. O que deve fazer?", [
["Ir embora, já que ninguém se feriu", "Ir embora sem avisar o dono é fugir do local do acidente, mesmo que ninguém tenha se ferido."],
["Deixar um bilhete com seus dados de contato e informar a colisão", "Correto. Deixe um bilhete com seu nome, telefone e endereço bem preso ao veículo e informe a colisão à polícia."],
["Esperar o dono por uma hora e ir embora sem deixar bilhete", "Esperar não substitui deixar um bilhete e informar a colisão."]],
"", "");
T("LAW-010", "Se alguém ficar ferido ou morrer em uma colisão, você deve informar a polícia em até:", [
["10 dias", "10 dias é o prazo do relatório SR 1 ao DMV."],
["30 dias", "30 dias é tarde demais. O relatório à polícia deve ser feito em até 24 horas se alguém ficou ferido ou morreu."],
["24 horas", "Correto. Seu agente de seguros, corretor ou representante legal também pode fazê-lo."]],
"", "");
T("LAW-011", "Você se envolve em uma colisão sem o seguro adequado. O que pode acontecer?", [
["Seu direito de dirigir pode ser suspenso por até quatro anos", "Correto. Se você se envolver em uma colisão sem o seguro adequado, seu direito de dirigir pode ser suspenso por até quatro anos, não importa quem foi o culpado."],
["Nada, se o outro motorista foi o culpado", "Não importa quem foi o culpado."],
["Só uma carta de advertência", "O manual cita uma suspensão."]],
"", "");
T("LAW-012", "A carteira de um adulto pode ser suspensa com qual total de pontos?", [
["2 pontos em 12 meses", "O manual cita totais maiores."],
["4 pontos em 12 meses", "Correto. Também 6 pontos em 24 meses ou 8 pontos em 36 meses."],
["10 pontos em 12 meses", "A suspensão pode acontecer com um total menor."]],
"", "");
T("LAW-013", "Durante os primeiros 12 meses com carteira provisória, quando um motorista com menos de 18 anos NÃO pode dirigir (sem uma exceção)?", [
["Entre 18h e 6h", "O manual indica das 23h às 5h."],
["Nos fins de semana", "Não há restrição para fins de semana."],
["Entre 23h e 5h", "Correto. As exceções exigem uma nota assinada, por exemplo por necessidade médica, escolar, de trabalho ou familiar."]],
"", "");
T("LAW-014", "Um motorista provisório (menor de 18) quer levar amigos com menos de 20 anos. Quando isso é permitido?", [
["Quando um motorista habilitado de 25 anos ou mais estiver junto", "Correto. Um dos pais, um responsável ou outro motorista habilitado na Califórnia com pelo menos 25 anos deve estar junto, a menos que se aplique uma das exceções com nota assinada."],
["A qualquer momento depois dos primeiros 6 meses dirigindo", "A restrição de passageiros não termina depois de 6 meses."],
["Quando todos os amigos usarem cinto de segurança", "O cinto é obrigatório, mas não elimina essa restrição."]],
"", "");
T("LAW-015", "Quantas horas de prática supervisionada um motorista com menos de 18 anos deve completar antes da carteira?", [
["20 horas, sendo 5 à noite", "Vinte horas é menos do que o exigido. O manual exige 50 horas de prática, sendo 10 à noite."],
["50 horas, sendo 10 à noite", "Correto. Motoristas com menos de 18 anos devem praticar pelo menos 50 horas, 10 delas à noite, com um motorista habilitado na Califórnia de pelo menos 25 anos."],
["100 horas, sendo 20 à noite", "Cem horas é mais do que o exigido. O manual exige 50 horas, 10 delas à noite."]],
"", "");
T("LAW-016", "Quantas tentativas você tem para passar na prova teórica de uma primeira carteira antes de precisar fazer um novo pedido?", [
["Uma", "Você tem mais de uma tentativa."],
["Ilimitadas", "Depois de três tentativas você deve fazer um novo pedido."],
["Três", "Correto. Menores devem esperar sete dias para refazer uma prova teórica em que foram reprovados, sem contar o dia da reprovação."]],
"", "");
T("LAW-017", "Que idade você precisa ter para pedir uma permissão de aprendizagem na Califórnia?", [
["15 anos e meio", "Correto. Candidatos com menos de 18 anos também precisam de autoescola teórica e da assinatura de um dos pais ou responsável."],
["15 anos", "O mínimo é um pouco mais."],
["16 anos, depois da autoescola teórica", "16 é a idade mínima para a carteira provisória, não para a permissão de aprendizagem. O mínimo para a permissão é 15 anos e meio."]],
"", "");
T("LAW-018", "A carga passa mais de 4 pés além do para-choque traseiro. O que você deve exibir?", [
["Nada, desde que esteja bem amarrada", "Prender a carga é obrigatório, mas não substitui a bandeira."],
["Uma bandeira quadrada vermelha ou laranja de 12 polegadas", "Correto. A carga que passa mais de 4 pés além do para-choque traseiro deve ter uma bandeira quadrada de 12 polegadas, vermelha ou laranja fluorescente. À noite, deve ser marcada com duas luzes vermelhas."],
["O pisca-alerta, de dia e de noite", "O pisca-alerta não é a sinalização exigida. O manual pede uma bandeira, mais duas luzes vermelhas à noite."]],
"", "");
T("LAW-019", "É legal fumar em um veículo quando há um menor presente?", [
["Sim, com as janelas abertas", "Janelas abertas não criam uma exceção."],
["Sim, se o menor concordar", "A permissão do menor não muda a lei."],
["Não, você pode ser multado", "Correto. É ilegal fumar em um veículo quando há um menor presente, e você pode ser multado."]],
"", "");
T("LAW-020", "Uma pessoa pode viajar na caçamba aberta de uma picape?", [
["Só se o veículo tiver assentos seguros e cintos de segurança para ela", "Correto. Não deixe ninguém viajar na parte de trás de uma picape ou outro caminhão, a menos que tenha assentos seguros e cintos de segurança."],
["Sim, se a picape andar a menos de 25 mph", "A baixa velocidade não é uma exceção. A picape precisa de assentos seguros e cintos de segurança."],
["Sim, só em vias particulares", "O manual indica a exigência de assento e cinto de segurança."]],
"", "");
T("LAW-021", "Com que frequência você pode escolher a escola para infratores de trânsito por uma infração de um ponto (se o juiz oferecer)?", [
["Uma vez por ano", "O manual permite uma vez em qualquer período de 18 meses, não uma vez por ano."],
["Uma vez em qualquer período de 18 meses", "Correto. A multa não é informada à sua seguradora, mas fica no seu histórico."],
["Quantas vezes quiser", "Há um limite: uma vez em qualquer período de 18 meses."]],
"", "");
T("LAW-022", "Onde você pode colocar um aparelho de pagamento de pedágio no para-brisa?", [
["Em qualquer lugar do para-brisa", "Os objetos não podem bloquear sua visão, então ficam limitados a lugares específicos."],
["Pendurado no retrovisor interno", "Não pendure objetos no retrovisor; eles podem bloquear sua visão."],
["No centro da parte de cima do para-brisa", "Correto. Um aparelho de pagamento de pedágio pode ir em um quadrado de 5 polegadas no centro da parte mais alta do para-brisa."]],
"", "");

})();
