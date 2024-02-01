$(document).ready(function(){
    var jogadoresTop = [
        {"foto": "./lib/midias/Jogadores/Fluxo/1TOP.webp", "nome": "Kiari", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitTOP0","preco": 100000},
        {"foto": "./lib/midias/Jogadores/Furia/1TOP.webp", "nome": "Destroy", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitTOP1","preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/1TOP.webp", "nome": "Tay", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitTOP2","preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/1TOP.webp", "nome": "Lonely", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitTOP3","preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/1TOP.webp", "nome": "Makes", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitTOP4","preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/1TOP.webp", "nome": "SuperCleber", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitTOP5","preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/1TOP.webp", "nome": "Robo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitTOP6","preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/1TOP.webp", "nome": "Wizer", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitTOP7","preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/1TOP.webp", "nome": "fNb", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitTOP8","preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/1TOP.webp", "nome": "Guigo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitTOP9","preco": 150}
        // Jogadores Top Laners
    ];

    var jogadoresJg = [
        {"foto": "./lib/midias/Jogadores/Fluxo/2JG.webp", "nome": "Sting", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitJungler0", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/2JG.webp", "nome": "Mir", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitJungler1", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/2JG.webp", "nome": "Yampi", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitJungler2", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/2JG.webp", "nome": "Malrang", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitJungler3", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/2JG.webp", "nome": "Drakehero", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitJungler4", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/2JG.webp", "nome": "Seize", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitJungler5", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/2JG.webp", "nome": "Croc", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitJungler6", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/2JG.webp", "nome": "Cariok", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitJungler7", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/2JG.webp", "nome": "Aegis", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitJungler8", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/2JG.webp", "nome": "Disamis", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitJungler9", "preco": 150}
        // Jogadores Caçadores
    ];

    var jogadoresMid = [
        {"foto": "./lib/midias/Jogadores/Fluxo/3MID.webp", "nome": "Fuuu", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitMID0", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/3MID.webp", "nome": "Tutsz", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitMID1", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/3MID.webp", "nome": "Aithusa", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitMID2", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/3MID.webp", "nome": "Hauz", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitMID3", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/3MID.webp", "nome": "Piloto", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitMID4", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/3MID.webp", "nome": "Envy", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitMID5", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/3MID.webp", "nome": "tinowns", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitMID6", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/3MID.webp", "nome": "dyNquedo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitMID7", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/3MID.webp", "nome": "Grevthar", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitMID8", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/3MID.webp", "nome": "toucouille", "pais": "./lib/midias/Bandeiras/França.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitMID9", "preco": 150}
        // Jogadores Mid Laners
    ];

    var jogadoresAdc = [
        {"foto": "./lib/midias/Jogadores/Fluxo/4ADC.webp", "nome": "Kojima", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitADC0", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/4ADC.webp", "nome": "Ayu", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitADC1", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/4ADC.webp", "nome": "NinjaKiwi", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitADC2", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/4ADC.webp", "nome": "Netuno", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitADC3", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/4ADC.webp", "nome": "micaO", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitADC4", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/4ADC.webp", "nome": "Celo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitADC5", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/4ADC.webp", "nome": "Route", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitADC6", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/4ADC.webp", "nome": "TitaN", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitADC7", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/4ADC.webp", "nome": "Brance", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitADC8", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/4ADC.webp", "nome": "SMILEY", "pais": "./lib/midias/Bandeiras/Suecia.PNG", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitADC9", "preco": 150}
        // Jogadores Atiradores
    ];

    var jogadoresSup = [
        {"foto": "./lib/midias/Jogadores/Fluxo/5SUP.webp", "nome": "Scamber", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitSUP0", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/5SUP.webp", "nome": "Zay", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitSUP1", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/5SUP.webp", "nome": "Damage", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitSUP2", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/5SUP.webp", "nome": "Ceos", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitSUP3", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/5SUP.webp", "nome": "Cavalo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitSUP4", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/5SUP.webp", "nome": "kabbie", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitSUP5", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/5SUP.webp", "nome": "RedBert", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitSUP6", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/5SUP.webp", "nome": "Kuri", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitSUP7", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/5SUP.webp", "nome": "Jojo", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitSUP8", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/5SUP.webp", "nome": "ProDelta", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitSUP9", "preco": 150}
        // Jogadores Suportes
    ];

    var coachs = [
        {"foto": "./lib/midias/Jogadores/Fluxo/6COACH.png", "nome": "ONMETA", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Fluxo.webp", "id": "submitCoach0", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Furia/6COACH.png", "nome": "Maestro", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/FURIA.png", "id": "submitCoach1", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Intz/6COACH.png", "nome": "Aoshi", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/INTZ.webp", "id": "submitCoach2", "preco": 100},
        {"foto": "./lib/midias/Jogadores/Kabum/6COACH.png", "nome": "ti0ben", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/KaBum.png", "id": "submitCoach3", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Liberty/6COACH.png", "nome": "Turtle", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Liberty.png", "id": "submitCoach4", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Los/6COACH.png", "nome": "Dionrray", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/Los.webp", "id": "submitCoach5", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Loud/6COACH.webp", "nome": "Stardust", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/LOUD.png", "id": "submitCoach6", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Pain/6COACH.png", "nome": "Xero", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/PaiN.png", "id": "submitCoach7", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Red/6COACH.png", "nome": "Kalec", "pais": "./lib/midias/Bandeiras/Brasil.webp", "time": "./lib/midias/LogosOrgs/RED.png", "id": "submitCoach8", "preco": 150},
        {"foto": "./lib/midias/Jogadores/Vivo/6COACH.png", "nome": "SeeEl", "pais": "./lib/midias/Bandeiras/Coreia.svg", "time": "./lib/midias/LogosOrgs/Vivo.webp", "id": "submitCoach9", "preco": 150}
        // Coachs
    ];

    var pos = {jogadoresTop, jogadoresJg, jogadoresMid, jogadoresAdc, jogadoresSup, coachs};

    function construirTabela(elementos = pos) {
        let tabelaHTML = '';
    
        tabelaHTML += `
            <table class="table table-bordered table-hover table-dark">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>País</th>
                        <th>Time</th>
                        <th>Preço</th>
                        <th>Comprar</th>
                    </tr>
                </thead>
                <tbody>
        `;
    
        for (let i = 0; i < elementos.length; i++) {
            tabelaHTML += `
                <tr>
                    <td id="jogador"><img src="${elementos[i].foto}" alt="${elementos[i].nome}" class="w-75"></td>
                    <td class="text-center">${elementos[i].nome}</td>
                    <td><img src="${elementos[i].pais}" alt="" class="rounded w-100"></td>
                    <td class="text-center"><img src="${elementos[i].time}" alt="" class="w-75"></td>
                    <td class="text-center">${elementos[i].preco}</td>
                    <td><button data-dismiss="modal" type="submit" class="btn btn-success col-12 bg-dark" id="${elementos[i].id}"><i class="bi bi-plus-lg"></i></button></td>
                </tr>
            `;
        }
    
        tabelaHTML += `
                </tbody>
            </table>
        `;
    
        return tabelaHTML;
    }

    const posicoes = ['TOP', 'Jungler', 'MID', 'ADC', 'SUP', 'Coach'];
// Criar um objeto que mapeia as posições para os jogadores
    const jogadoresPorPosicao = {
        'TOP': jogadoresTop,
        'Jungler': jogadoresJg,
        'MID': jogadoresMid,
        'ADC': jogadoresAdc,
        'SUP': jogadoresSup,
        'Coach': coachs,
    };

    for (const posicao of posicoes) {
        const tabelaId = `tabela${posicao}`;
        const jogadoresDaPosicao = jogadoresPorPosicao[posicao];

        const tabelaElement = document.getElementById(tabelaId);

        if (tabelaElement && jogadoresDaPosicao) {
            tabelaElement.innerHTML = construirTabela(jogadoresDaPosicao);
        }
    }

    $(document).ready(function(){
        $('[data-bs-content]').popover({
            trigger: 'manual', // Impede o popover de aparecer automaticamente
        }).on('mouseenter', function () {
          // Exibe o popover ao passar o mouse sobre o botão
        $(this).popover('show');
        }).on('mouseleave', function () {
          // Oculta o popover ao retirar o mouse do botão
        $(this).popover('hide');
        });
    });

    function resetarModal(jogador) {
        for (const posicao of posicoes) {
            const resetId = `#reset${posicao}`;
            const modalId = `#modal${posicao}`;
            $(document).off('click', resetId);
            $(document).on('click', resetId, function () {
                const modal = $(modalId);
                var novoPreco = 0
                novoPreco = parseInt($('#precoFinal').text().replace(/\./g, '')) + parseInt(jogador.preco);
                valorFormatado = parseFloat(novoPreco).toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 0});
                $('#precoFinal').text(valorFormatado);
                modal.find(".pais").attr("src", "./lib/midias/Logos/League-of-Legends-Logo.png");
                modal.find(".time").attr("src", "./lib/midias/Logos/Iconpag.png");
                modal.find("#imgJogador").attr("src", "./lib/midias/Jogadores/images.png");
                modal.find("h6").text(posicao);
                modal.find(".btn-danger")
                    .attr("class", "btn btn-success col-12 bg-dark")
                    .removeAttr("id")
                    .attr("data-toggle", "modal")
                    .attr("data-target", `#comprar${posicao}`)
                    .attr("type", "submit")
                    .html('<i class="bi bi-plus-lg"></i>');
                modal.find('span[data-bs-toggle="popover"]')
                    .attr("data-bs-content", "")
                    .popover('dispose')
                    .popover();
                adicionarEventoSubmit(posicao);
            });
        }
    }

    function adicionarEventoSubmit(indice, j) {
        for(const posicao of posicoes) {
            const submitId = `#submit${posicao}${j}`;
            const modalId = `#modal${posicao}`;
            $(document).off('click', submitId);
            const jogador = jogadoresPorPosicao[posicao][j];
            $(document).on('click', submitId, function () {
                const modal = $(modalId);
                var novoPreco = 0
                novoPreco = parseInt($('#precoFinal').text().replace(/\./g, '')) - parseInt(jogador.preco);
                valorFormatado = parseFloat(novoPreco).toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 0});
                $('#precoFinal').text(valorFormatado);
                modal.find(".pais").attr("src", jogador.pais);
                modal.find(".time").attr("src", jogador.time);
                modal.find("#imgJogador").attr("src", jogador.foto);
                modal.find("#imgJogador").attr("alt", jogador.nome);
                modal.find("#funcao").attr("src", jogador.posicao);
                modal.find("h6").text(jogador.nome);
                modal.find(".btn-success")
                    .attr("class", "btn btn-danger col-12 bg-dark")
                    .attr("id", `reset${posicao}`)
                    .attr("type", "reset")
                    .html('<i class="bi bi-dash-lg"></i>')
                    .removeAttr("data-toggle")
                    .removeAttr("data-target")
                // Supondo que você tenha uma referência para o elemento span dentro do modal
                modal.find('span[data-bs-toggle="popover"]')
                .attr("data-bs-content", `R$ ${jogador.preco}`)
                .popover('dispose')
                .popover() 
                resetarModal(jogador)
            });
        }
    }
    
    // Exemplo de como você pode usar isso em um loop
    const numJogadores = 10; // Ajuste conforme necessário
    
    for (let i = 0; i < posicoes.length; i++) {
        for (let j = 0; j < numJogadores; j++) {
            adicionarEventoSubmit(posicoes[i], j);
        }
    }

    document.querySelector("#limpar").addEventListener('click', function () {
        location.reload();
    });

})