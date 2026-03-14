// ============================================================
//   EXERCÍCIOS - FUNÇÕES
// ============================================================

function exercicio1() {
    console.log("Olá, Mundo!");
}

function exercicio2() {
    const nome = prompt("Digite seu primeiro nome");
    const sobrenome = prompt("Digite seu sobrenome");
    const resultado = 'Olá ' + nome + ' ' + sobrenome;
    console.log(resultado);
}

function exercicio3() {
    const num1 = parseFloat(prompt("Digite um numero"));
    const num2 = parseFloat(prompt("Digite um numero"));
    console.log(`O resultado é: ${num1 + num2}`);
}

function exercicio4() {
    const nota1 = parseFloat(prompt("Insira sua primeira nota"));
    const nota2 = parseFloat(prompt("Insira sua segunda nota"));
    const nota3 = parseFloat(prompt("Insira sua terceira nota"));

    // Atenção: divisão só no final para pegar a média certa!
    const media = (nota1 + nota2 + nota3) / 3;
    console.log(`A sua média é ${media.toFixed(2)}`);
}

function exercicio5() {
    const num1 = parseFloat(prompt("Digite um numero"));

    const suce = num1 + 1;
    const ante = num1 - 1;

    console.log("O numero sucessor é: " + suce);
    console.log("O numero antecessor é: " + ante);
}

function exercicio6() {
    const salario = parseFloat(prompt("Digite o seu salário"));

    const novoSalario = salario * 1.15;

    console.log("O valor do salário reajustado é: " + Number(novoSalario.toFixed(2)));
}

function exercicio7() {
    const valor = parseFloat(prompt("Digite um valor em Reais"));

    const cotacaoDolar = 5.19;
    const conversao = valor / cotacaoDolar;

    console.log("O valor em Dolares é: " + Number(conversao.toFixed(2)));
}

function exercicio8() {
    const num = parseFloat(prompt("Digite um numero"));

    if (num % 2 === 0) {
        console.log(`O numero ${num} é par`);
    } else {
        console.log(`O numero ${num} é impar`);
    }
}

function exercicio9() {
    const idade = parseFloat(prompt("Digite sua idade"));

    if (idade >= 18) {
        console.log("Você é maior de idade");
    } else {
        console.log("Você é menor de idade");
    }
}

function exercicio10() {
    const num1 = parseFloat(prompt("Digite um numero"));
    const num2 = parseFloat(prompt("Digite um numero"));

    if (num1 > num2) {
        console.log(`O numero ${num1} é maior que ${num2}`);
    } else if (num1 < num2) {
        console.log(`O numero ${num2} é maior que ${num1}`);
    } else {
        console.log(`Os numeros são iguais`);
    }
}

function exercicio11() {
    const nota1 = parseFloat(prompt("Insira sua primeira nota"));
    const nota2 = parseFloat(prompt("Insira sua segunda nota"));

    const media = (nota1 + nota2) / 2;

    if (media >= 7) {
        console.log(`Sua média é ${media}, você foi aprovado parabéns!!`);
    } else {
        console.log(`Sua média é ${media}, você foi reprovado`);
    }
}

function exercicio12() {
    const num1 = parseFloat(prompt("Digite um numero"));

    if (num1 > 0) {
        console.log(`O numero ${num1} é positivo`);
    } else if (num1 === 0) {
        console.log(`O numero ${num1} é zero`);
    } else {
        console.log(`O numero ${num1} é negativo`);
    }
}

function exercicio13() {
    const idade = parseFloat(prompt("Digite sua idade"));

    if (idade < 5) {
        console.log("Idade inválida!");
    } else if (idade <= 7) {
        console.log("Sua categoria de nadador é infantil A");
    } else if (idade <= 11) {
        console.log("Sua categoria de nadador é infantil B");
    } else if (idade <= 13) {
        console.log("Sua categoria de nadador é juvenil A");
    } else if (idade <= 17) {
        console.log("Sua categoria de nadador é juvenil B");
    } else {
        console.log("Sua categoria de nadador é Adulto");
    }
}

function exercicio14() {
    const nomeUsuario = prompt("Insira seu nome de usuário");
    const senha = prompt("Insira sua senha");

    if (nomeUsuario === "admin" && senha === "1234") {
        console.log("Login efetuado com sucesso");
    } else {
        console.log("Falha na autenticação");
    }
}

function exercicio15() {
    const peso = parseFloat(prompt("Digite seu peso em kg"));
    const altura = parseFloat(prompt("Digite sua altura em metros"));

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III (mórbida)";
    }

    console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é ${classificacao}`);
}

function exercicio16() {
    const valorProduto = Number(prompt("Digite o valor do produto"));
    const porcentagemDesconto = Number(prompt("Digite a porcentagem de desconto"));

    const valorDesconto = (valorProduto * porcentagemDesconto) / 100;
    const precoFinal = valorProduto - valorDesconto;

    console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
    console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);
}

function exercicio17() {
    const celsius = Number(prompt("Digite a temperatura em celsius"));
    const fahrenheit = celsius * 1.8 + 32;

    console.log(`A temperatura em Fahrenheit é: ${fahrenheit}°`);
}

function exercicio18() {
    const dias = Number(prompt("Quantos dias de aluguel?"));
    const km = Number(prompt("Quantos Km rodados?"));

    const precoTotal = (dias * 60) + (km * 0.15);

    console.log(`O preço total a pagar é: R$ ${precoTotal.toFixed(2)}`);
}

function exercicio19() {
    const idade = Number(prompt("Digite sua idade:"));

    if (idade < 16) {
        console.log("Situação: Não votante");
    } else if (idade <= 17) {
        console.log("Situação: Voto opcional");
    } else if (idade <= 70) {
        console.log("Situação: Voto obrigatório");
    } else {
        console.log("Situação: Voto opcional");
    }
}

function exercicio20() {
    const peso = parseFloat(prompt("Digite seu peso em kg"));
    const altura = parseFloat(prompt("Digite sua altura em metros"));

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III (mórbida)";
    }

    console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é ${classificacao}`);
}

function exercicio21() {
    const preco = Number(prompt("Preço R$:"));
    const opcao = Number(prompt("1 = à vista   2 = 2x   3 = 3x ou +"));

    let total = preco;

    if (opcao === 1) {
        total = total * 0.9; // 10% de desconto à vista
    } else if (opcao === 3) {
        total = total * 1.2; // 20% de acréscimo parcelado
    }

    console.log(`Valor final: R$ ${total.toFixed(2)}`);
}

function exercicio22() {
    const a = Number(prompt("Insira o lado 1"));
    const b = Number(prompt("Insira o lado 2:"));
    const c = Number(prompt("Insira o lado 3:"));

    if (a + b > c && a + c > b && b + c > a) {
        console.log("Podem formar um triângulo");
    } else {
        console.log("Não podem formar um triângulo");
    }
}

function exercicio23() {
    const n1 = Number(prompt("Digite o primeiro numero"));
    const n2 = Number(prompt("Digite o segundo numero"));
    const n3 = Number(prompt("Digite o terceiro numero"));

    const maior = Math.max(n1, n2, n3);

    console.log(`O maior número é: ${maior}`);
}

function exercicio24() {
    const n1 = Number(prompt("Digite o primeiro numero"));
    const n2 = Number(prompt("Digite o segundo numero"));

    if (n1 < n2) {
        console.log(`Ordem crescente: ${n1}, ${n2}`);
    } else {
        console.log(`Ordem crescente: ${n2}, ${n1}`);
    }
}

function exercicio25() {
    const ano = Number(prompt("Digite um ano:"));

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log("O ano " + ano + " é bissexto.");
    } else {
        console.log("O ano " + ano + " NÃO é bissexto.");
    }
}

function exercicio26() {
    const anoAtual = 2025;

    const ano = Number(prompt("Ano de nascimento:"));
    const idade = anoAtual - ano;

    if (idade < 18) {
        console.log(`Você tem ${idade} anos em ${anoAtual}.`);
        console.log(`Ainda vai se alistar. Faltam ${18 - idade} anos.`);
    } else {
        console.log(`Você tem ${idade} anos em ${anoAtual}.`);
        console.log(`Já passou da idade de alistamento.`);
    }
}

function exercicio27() {
    const n1 = Number(prompt("Nota 1"));
    const n2 = Number(prompt("Nota 2"));

    const media = (n1 + n2) / 2;

    let status = "";
    if (media < 5) {
        status = "REPROVADO";
    } else if (media < 7) {
        status = "RECUPERAÇÃO";
    } else {
        status = "APROVADO";
    }

    console.log(`Sua média é: ${media.toFixed(1)}`);
    console.log(`Status: ${status}`);
}

function exercicio28() {
    const j1 = Number(prompt("Jogador 1 (1-Pedra, 2-Papel, 3-Tesoura):"));
    const j2 = Number(prompt("Jogador 2 (1-Pedra, 2-Papel, 3-Tesoura):"));

    if (j1 === j2) {
        console.log("Empate!");
    } else if (
        (j1 === 1 && j2 === 3) ||
        (j1 === 2 && j2 === 1) ||
        (j1 === 3 && j2 === 2)
    ) {
        console.log("Jogador 1 VENCEU!");
    } else {
        console.log("Jogador 2 VENCEU!");
    }
}

function exercicio29() {
    const km = Number(prompt("Distância em Km:"));
    let preco;

    if (km <= 200) {
        preco = km * 0.50;
    } else {
        preco = km * 0.45;
    }

    console.log("O preço da passagem é: R$ " + preco.toFixed(2));
}

function exercicio30() {
    const valorCasa = Number(prompt("Valor da casa (R$):"));
    const salario = Number(prompt("Seu salário mensal (R$):"));
    const anos = Number(prompt("Em quantos anos quer pagar?"));

    const meses = anos * 12;
    const prestacao = valorCasa / meses;
    const limite = salario * 0.30;

    console.log(`A prestação mensal seria de: R$ ${prestacao.toFixed(2)}`);

    if (prestacao <= limite) {
        console.log("Empréstimo APROVADO!");
    } else {
        console.log("Empréstimo NEGADO! (ultrapassa 30% do salário)");
    }
}

function exercicio31() {
    const item1 = prompt("Digite um item de compra");
    const item2 = prompt("Digite um item de compra");
    const item3 = prompt("Digite um item de compra");
    const item4 = prompt("Digite um item de compra");
    const item5 = prompt("Digite um item de compra");

    const arrayCompras = [item1, item2, item3, item4, item5];
    console.log("Lista de compras: " + arrayCompras.join(", "));

    const removerItem = prompt("Deseja remover um item? sim ou nao");

    if (removerItem.toLowerCase() === "sim") {
        const produto = prompt("Qual item voce quer remover?");

        const temOproduto = arrayCompras.includes(produto);

        if (temOproduto === true) {
            const listaAtualizada = arrayCompras.filter(item => item !== produto);
            console.log("Lista atualizada: " + listaAtualizada.join(", "));
        } else {
            console.log("Produto não encontrado na lista.");
        }
    } else {
        console.log("Lista final: " + arrayCompras.join(", "));
    }
}

function exercicio32() {
    const nome = prompt("Escreva seu nome");
    const tel = prompt("Digite seu numero");
    const email = prompt("Escreva seu email");

    const cadastro = {
        nome: nome,
        tel: tel,
        email: email
    };

    console.log(`nome: ${cadastro.nome} | tel: ${cadastro.tel} | email: ${cadastro.email}`);

    const mudanca = prompt("Deseja alterar telefone ou email? Digite tel ou email:");

    if (mudanca === "tel") {
        const novoNumero = prompt("Digite seu novo numero");
        cadastro.tel = novoNumero;
    } else if (mudanca === "email") {
        const novoEmail = prompt("Digite seu novo email");
        cadastro.email = novoEmail;
    } else {
        console.log("Opção inválida. Nenhum dado alterado.");
    }

    console.log(`Dados atualizados: ${cadastro.nome} | ${cadastro.tel} | ${cadastro.email}`);
}

function exercicio33() {
    const idade1 = parseInt(prompt("Digite a primeira idade"));
    const idade2 = parseInt(prompt("Digite a segunda idade"));
    const idade3 = parseInt(prompt("Digite a terceira idade"));
    const idade4 = parseInt(prompt("Digite a quarta idade"));
    const idade5 = parseInt(prompt("Digite a quinta idade"));

    const arrayidade = [idade1, idade2, idade3, idade4, idade5];

    const maior18 = arrayidade.filter(idade => idade > 18);
    const menor18 = arrayidade.filter(idade => idade < 18);

    console.log(`Idades digitadas: ${arrayidade.join(", ")}`);
    console.log(`Maiores de 18: ${maior18.length} pessoa(s) → [${maior18.join(", ")}]`);
    console.log(`Menores de 18: ${menor18.length} pessoa(s) → [${menor18.join(", ")}]`);
}

function exercicio34() {
    const precos = [];

    for (let i = 0; i < 4; i++) {
        precos.push(Number(prompt("Digite o preço " + (i + 1) + ":")));
    }

    const soma = precos.reduce((a, b) => a + b, 0);
    const media = soma / 4;

    // Math.max(...array) espalha o array como argumentos separados
    const maior = Math.max(...precos);
    const mediaSemMaior = (soma - maior) / 3;

    console.log(`Preços: ${precos.join(", ")}`);
    console.log(`Média normal: R$ ${media.toFixed(2)}`);
    console.log(`Média sem o mais caro: R$ ${mediaSemMaior.toFixed(2)}`);
}

function exercicio35() {
    let produto = {
        nome: prompt("Nome do produto:"),
        quantidade: Number(prompt("Quantidade inicial:"))
    };

    function mostrar() {
        let status = produto.quantidade > 0 ? "Em estoque" : "Fora de estoque";
        console.log(`${produto.nome} - ${produto.quantidade} unidade(s) - ${status}`);
    }

    mostrar();

    let opcao;

    do {
        opcao = Number(prompt("1 = Repor\n2 = Retirar\n0 = Sair"));

        if (opcao === 1) {
            const unidade = Number(prompt("Quantas unidades repor?"));
            if (unidade > 0) {
                produto.quantidade += unidade;
                console.log(`+${unidade} unidades adicionadas.`);
            }
        } else if (opcao === 2) {
            const unidade = Number(prompt("Quantas unidades retirar?"));
            if (unidade > 0 && unidade <= produto.quantidade) {
                produto.quantidade -= unidade;
                console.log(`-${unidade} unidades retiradas.`);
            } else if (unidade > produto.quantidade) {
                console.log("Não tem tanto em estoque!");
            }
        }

        mostrar();

    } while (opcao !== 0);
}

function exercicio36() {
    let usuarios = [
        { nome: "Ana Silva", email: "ana.silva@email.com" },
        { nome: "Bruno Costa", email: "bruno123@email.com" },
        { nome: "Carla Mendes", email: "carla.m@email.com" }
    ];

    console.log("Usuários cadastrados:");
    usuarios.forEach(u => console.log(`  - ${u.nome} | ${u.email}`));

    const emailBusca = prompt("Digite o email para buscar:").trim();

    const usuarioEncontrado = usuarios.find(u => u.email.toLowerCase() === emailBusca.toLowerCase());

    if (usuarioEncontrado) {
        console.log(`Usuário encontrado: ${usuarioEncontrado.nome}`);

        const remover = prompt("Deseja remover este usuário? (sim/não)").toLowerCase();

        if (remover === "sim" || remover === "s") {
            usuarios = usuarios.filter(u => u.email.toLowerCase() !== emailBusca.toLowerCase());
            console.log("Usuário removido com sucesso!");

            if (usuarios.length === 0) {
                console.log("A lista de usuários está vazia.");
            } else {
                console.log("Lista atualizada:");
                usuarios.forEach(u => console.log(`  - ${u.nome} | ${u.email}`));
            }
        } else {
            console.log("Nenhum usuário foi removido.");
        }
    } else {
        console.log("Usuário não encontrado.");
    }
}

function exercicio37() {
    let tarefas = [];

    for (let i = 1; i <= 3; i++) {
        const texto = prompt(`Tarefa ${i}:`) || `Tarefa ${i}`;
        tarefas.push({ texto, feita: false });
    }

    function mostra() {
        console.log("--- Tarefas ---");
        let feitas = 0;
        for (let i = 0; i < tarefas.length; i++) {
            let status = tarefas[i].feita ? "[X]" : "[ ]";
            console.log(`${i + 1}. ${status} ${tarefas[i].texto}`);
            if (tarefas[i].feita) feitas++;
        }
        console.log(`Feitas: ${feitas}/${tarefas.length}`);
    }

    mostra();

    let opcao;

    do {
        opcao = Number(prompt("1 = marcar feita\n2 = remover\n0 = sair") || "0");

        if (opcao === 1) {
            const numeroTarefa = Number(prompt("Número da tarefa:") || "0");
            if (numeroTarefa >= 1 && numeroTarefa <= tarefas.length) {
                tarefas[numeroTarefa - 1].feita = true;
                console.log("Tarefa marcada como feita!");
            }
        } else if (opcao === 2) {
            const remover = Number(prompt("Número para remover:") || "0");
            if (remover >= 1 && remover <= tarefas.length) {
                tarefas.splice(remover - 1, 1);
                console.log("Tarefa removida!");
            }
        }

        if (tarefas.length > 0) {
            mostra();
        } else {
            console.log("Lista vazia!");
        }

    } while (opcao !== 0);
}

function exercicio38() {
    // Mesmo funcionamento do 37 (lista de tarefas)
    exercicio37();
}

function exercicio39() {
    let jogadores = [];

    for (let i = 0; i < 4; i++) {
        let nome = prompt(`Nome do ${i + 1}º jogador:`) || `Jogador ${i + 1}`;
        let pontos = Number(prompt(`Pontos de ${nome}:`) || "0");
        jogadores.push({ nome, pontos });
    }

    function mostrarRanking() {
        // Ordena do maior para o menor sem alterar o original
        let ordenados = [...jogadores].sort((a, b) => b.pontos - a.pontos);
        console.log("🏆 Ranking:");
        ordenados.forEach((j, pos) => {
            console.log(`  ${pos + 1}º lugar: ${j.nome} - ${j.pontos} pontos`);
        });
    }

    const atualizar = prompt("Quer atualizar a pontuação de alguém?\n1 = Sim\n2 = Não");

    if (atualizar === "1") {
        console.log("Jogadores:");
        jogadores.forEach((j, i) => console.log(`  ${i + 1}. ${j.nome} (${j.pontos} pts)`));

        const numero = Number(prompt("Digite o número do jogador (1 a 4):") || "0");
        const indice = numero - 1;

        if (indice >= 0 && indice < jogadores.length) {
            const novaPontuacao = Number(prompt(`Nova pontuação para ${jogadores[indice].nome}:`) || "0");
            jogadores[indice].pontos = novaPontuacao;
            console.log(`Atualizado! ${jogadores[indice].nome} agora tem ${novaPontuacao} pontos.`);
        } else {
            console.log("Número inválido.");
        }
    }

    mostrarRanking();
}

function exercicio40() {
    let carrinho = [];

    for (let i = 1; i <= 5; i++) {
        let n = prompt(`Produto ${i} (vazio = parar):`)?.trim();
        if (!n) break;
        let p = Number(prompt("Preço R$:") || 0);
        carrinho.push({ nome: n, preco: p });
    }

    function atualizar() {
        let total = carrinho.reduce((s, i) => s + i.preco, 0);
        let frete = total > 100 ? 0 : 10;

        console.log("--- Carrinho ---");
        carrinho.forEach(i => console.log(`  ${i.nome} - R$ ${i.preco.toFixed(2)}`));
        console.log(`Subtotal: R$ ${total.toFixed(2)}`);
        console.log(`Frete: ${frete ? "R$ 10,00" : "Grátis"}`);
        console.log(`Total: R$ ${(total + frete).toFixed(2)}`);
    }

    atualizar();

    while (carrinho.length > 0) {
        let remover = prompt("Remover qual produto? (ou 'sair')").trim();
        if (remover.toLowerCase() === "sair" || !remover) break;

        let idx = carrinho.findIndex(p => p.nome.toLowerCase() === remover.toLowerCase());
        if (idx !== -1) {
            carrinho.splice(idx, 1);
            console.log("Removido!");
            atualizar();
        } else {
            console.log("Produto não encontrado.");
        }
    }
}

function exercicio41() {
    console.log("Boas-vindas à calculadora!");

    let dentroDaCalculadora = true;

    function selecionarOpcao() {
        return prompt(
            "Escolha uma opção:\n" +
            "1 - Somar números\n" +
            "2 - Subtrair dois números\n" +
            "3 - Soma de porcentagem\n" +
            "4 - Multiplicação\n" +
            "5 - Divisão\n" +
            "6 - Sair"
        );
    }

    function somarNumeros() {
        const quantidade = Number(prompt("Quantos números você deseja somar?"));
        let somaTotal = 0;
        for (let contador = 0; contador < quantidade; contador++) {
            const numero = Number(prompt(`Digite o ${contador + 1}º número:`));
            somaTotal += numero;
        }
        return somaTotal;
    }

    while (dentroDaCalculadora) {
        const opcao = selecionarOpcao();

        switch (opcao) {
            case "1": {
                const resultado = somarNumeros();
                console.log(`Soma total: ${resultado}`);
                break;
            }
            case "2": {
                const n1 = Number(prompt("Primeiro número:"));
                const n2 = Number(prompt("Segundo número:"));
                console.log(`${n1} - ${n2} = ${n1 - n2}`);
                break;
            }
            case "3": {
                const valor = Number(prompt("Valor base:"));
                const porcento = Number(prompt("Porcentagem a adicionar:"));
                const resultado = valor + (valor * (porcento / 100));
                console.log(`${valor} + ${porcento}% = ${resultado}`);
                break;
            }
            case "4": {
                const n1 = Number(prompt("Primeiro número:"));
                const n2 = Number(prompt("Segundo número:"));
                console.log(`${n1} × ${n2} = ${n1 * n2}`);
                break;
            }
            case "5": {
                const n1 = Number(prompt("Primeiro número:"));
                const n2 = Number(prompt("Segundo número:"));
                console.log(`${n1} ÷ ${n2} = ${n1 / n2}`);
                break;
            }
            case "6":
                dentroDaCalculadora = false;
                console.log("Calculadora encerrada.");
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}

function exercicio42() {
    let posicao = [];

    for (let i = 0; i < 5; i++) {
        posicao[i] = prompt(`Digite o nome do ${i + 1}º lugar:`) || `Posição ${i + 1}`;
    }

    console.log("Posição final:");
    for (let i = 0; i < posicao.length; i++) {
        console.log(`  ${i + 1}º - ${posicao[i]}`);
    }
}

function exercicio43() {
    let numeros = [];

    for (let i = 0; i < 6; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`));
    }

    const soma = numeros.reduce((a, b) => a + b, 0);
    console.log(`Números: ${numeros.join(", ")}`);
    console.log(`A soma dos números é: ${soma}`);
}

function exercicio44() {
    let numeros = [];

    for (let i = 0; i < 8; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`));
    }

    const pares = numeros.filter(n => n % 2 === 0);
    console.log(`Números digitados: ${numeros.join(", ")}`);
    console.log(`Os números pares são: ${pares.join(", ")}`);
}

function exercicio45() {
    let numeros = [];

    for (let i = 0; i < 7; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`));
    }

    const maior = Math.max(...numeros);
    console.log(`Números: ${numeros.join(", ")}`);
    console.log(`O maior número é: ${maior}`);
}

function exercicio46() {
    let medias = [];

    for (let i = 0; i < 5; i++) {
        medias[i] = Number(prompt(`Média do aluno ${i + 1}:`));
    }

    const mediaTurma = medias.reduce((a, b) => a + b, 0) / medias.length;
    console.log(`Médias: ${medias.join(", ")}`);
    console.log(`A média da turma é: ${mediaTurma.toFixed(2)}`);
}

function exercicio47() {
    let numeros = [];

    for (let i = 0; i < 10; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`));
    }

    let contadorImpares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            contadorImpares++;
        }
    }

    console.log(`Números: ${numeros.join(", ")}`);
    console.log(`Quantidade de números ímpares: ${contadorImpares}`);
}

function exercicio48() {
    let numeros = [];

    for (let i = 0; i < 10; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`));
    }

    const busca = Number(prompt("Digite o número que deseja buscar:"));

    let encontrado = false;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === busca) {
            encontrado = true;
        }
    }

    if (encontrado) {
        console.log(`O número ${busca} foi encontrado no vetor!`);
    } else {
        console.log(`O número ${busca} não está no vetor.`);
    }
}

function exercicio49() {
    let nomes = [];

    for (let i = 0; i < 5; i++) {
        nomes[i] = prompt(`Digite o nome ${i + 1}:`);
    }

    console.log("Nomes que começam com 'A':");
    let encontrou = false;

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i][0].toUpperCase() === "A") {
            console.log(`  - ${nomes[i]}`);
            encontrou = true;
        }
    }

    if (!encontrou) {
        console.log("  Nenhum nome começa com a letra A.");
    }
}

function exercicio50() {
    let numeros = [];

    for (let i = 0; i < 6; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`));
    }

    console.log("Números em ordem inversa:");

    for (let i = numeros.length - 1; i >= 0; i--) {
        console.log(`  - ${numeros[i]}`);
    }
}

function exercicio51() {
    let notas = [];

    for (let i = 0; i < 8; i++) {
        notas[i] = Number(prompt(`Nota do aluno ${i + 1}:`));
    }

    let aprovados = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 7.0) {
            aprovados++;
        }
    }

    console.log(`Total de alunos aprovados: ${aprovados} de ${notas.length}`);
}

function exercicio52() {
    let resultado = "Contagem de 1 a 10:\n";
    let i = 1;

    while (i <= 10) {
        resultado += i + "\n";
        i++;
    }

    console.log(resultado);
}

function exercicio53() {
    let numero = 0;

    while (numero <= 0) {
        numero = Number(prompt("Digite um número maior que 0:"));
    }

    console.log(`Número válido: ${numero}`);
}

function exercicio54() {
    const secreto = 42;
    let chute = -1;

    while (chute !== secreto) {
        chute = Number(prompt("Adivinhe o número secreto:"));
        if (chute < secreto) console.log("Muito baixo! Tente novamente.");
        else if (chute > secreto) console.log("Muito alto! Tente novamente.");
    }

    console.log("Parabéns! Você acertou! O número era 42.");
}

function exercicio55() {
    let soma = 0;
    let numero = 0;

    while (numero !== -1) {
        numero = Number(prompt("Digite um número para somar (-1 para parar):"));
        if (numero !== -1) soma += numero;
    }

    console.log(`Soma total: ${soma}`);
}

function exercicio56() {
    let resposta = "";

    while (resposta !== "s" && resposta !== "n") {
        resposta = prompt("Você gosta de programação? (s/n)").toLowerCase();
    }

    if (resposta === "s") {
        console.log("Que ótimo! Programação é incrível!");
    } else {
        console.log("Tudo bem, cada um tem seus gostos!");
    }
}

function exercicio57() {
    const base = Number(prompt("Digite a base:"));
    const expoente = Number(prompt("Digite o expoente:"));

    let resultado = 1;
    let i = 0;

    while (i < expoente) {
        resultado *= base;
        i++;
    }

    console.log(`${base}^${expoente} = ${resultado}`);
}

function exercicio58() {
    let resultado = "Números pares de 0 a 20:";
    let i = 0;

    while (i <= 20) {
        resultado += " " + i;
        i += 2;
    }

    console.log(resultado);
}

function exercicio59() {
    let soma = 0;
    let quantidade = 0;
    let nota = 0;

    while (nota >= 0) {
        nota = Number(prompt("Digite a nota do aluno (-1 para parar):"));
        if (nota >= 0) {
            soma += nota;
            quantidade++;
        }
    }

    if (quantidade === 0) {
        console.log("Nenhuma nota digitada.");
    } else {
        console.log(`Média da turma: ${(soma / quantidade).toFixed(2)}`);
    }
}

function exercicio60() {
    const numero = Number(prompt("Digite um número para calcular o fatorial:"));

    let resultado = 1;
    let i = 2;

    while (i <= numero) {
        resultado *= i;
        i++;
    }

    console.log(`${numero}! = ${resultado}`);
}

function exercicio61() {
    const n = Number(prompt("Quantos termos de Fibonacci deseja ver?"));

    let a = 0;
    let b = 1;
    let contador = 0;
    let resultado = "Sequência de Fibonacci: ";

    while (contador < n) {
        resultado += a + " ";
        const temp = a + b;
        a = b;
        b = temp;
        contador++;
    }

    console.log(resultado);
}

function exercicio62() {
    const dividendo = Number(prompt("Digite o dividendo:"));
    const divisor = Number(prompt("Digite o divisor:"));

    let quociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        quociente++;
    }

    console.log(`${dividendo} ÷ ${divisor} = ${quociente} (resto: ${resto})`);
}

function exercicio63() {
    let maior = null;
    let menor = null;
    let numero = -1;

    while (numero !== 0) {
        numero = Number(prompt("Digite um número (0 para parar):"));

        if (numero !== 0) {
            if (maior === null || numero > maior) maior = numero;
            if (menor === null || numero < menor) menor = numero;
        }
    }

    if (maior === null) {
        console.log("Nenhum número digitado.");
    } else {
        console.log(`Maior: ${maior}`);
        console.log(`Menor: ${menor}`);
    }
}

function exercicio64() {
    let saldo = 500;
    let continuar = true;

    while (continuar) {
        const saque = Number(prompt(`Saldo: R$${saldo}\nDigite o valor do saque:`));

        if (saque <= saldo) {
            saldo -= saque;
            console.log(`Saque de R$${saque} realizado. Saldo restante: R$${saldo}`);

            if (saldo === 0) {
                console.log("Saldo zerado. Encerrando.");
                continuar = false;
            }
        } else {
            console.log(`Saldo insuficiente! Seu saldo é R$${saldo}.`);
            continuar = false;
        }
    }
}

function exercicio65() {
    let vetor = [];
    let i = 0;

    while (i < 5) {
        vetor[i] = Number(prompt(`Digite o número ${i + 1}:`));
        i++;
    }

    console.log(`Vetor preenchido: [${vetor.join(", ")}]`);
}

function exercicio66() {
    let nomes = [];
    let nome = "";

    while (nome.toLowerCase() !== "fim") {
        nome = prompt('Digite um nome (ou "fim" para encerrar):');
        if (nome.toLowerCase() !== "fim") {
            nomes.push(nome);
        }
    }

    if (nomes.length === 0) {
        console.log("Nenhum nome cadastrado.");
    } else {
        console.log("Nomes cadastrados:");
        nomes.forEach(n => console.log(`  - ${n}`));
    }
}

// ============================================================
//   SISTEMA DE MENUS E CAPTURA DE SAÍDA
// ============================================================

// Pega os elementos do HTML pelo ID
const outputArea = document.getElementById('output-area');
const outputTexto = document.getElementById('output-texto');
const menuEl = document.getElementById('menu');
const backBtn = document.getElementById('back');

// Guarda os métodos originais
const consolLogOriginal = console.log;
const alertOriginal = window.alert;
const promptOriginal = window.prompt;

let logs = []; // Array que guarda as mensagens

// Inicia a captura das saídas
function iniciarCaptura() {
    logs = [];
    console.log = (...args) => {
        logs.push(args.map(a => String(a)).join(' '));
    };
    window.alert = (msg) => {
        logs.push("📢 " + msg);
    };
}

// Para a captura e devolve os métodos originais
function pararCaptura() {
    console.log = consolLogOriginal;
    window.alert = alertOriginal;
}

// Mostra o resultado na tela
function mostrarResultado() {
    outputTexto.textContent = logs.length > 0 ? logs.join('\n') : '(nenhuma saída visível)';
    outputArea.style.display = 'block';
    menuEl.style.display = 'none';
    backBtn.style.display = 'inline-block';
}

// Descrições de cada exercício
function getDescricao(n) {
    const desc = {
        1: "Olá, Mundo!",
        2: "Saudação com nome + sobrenome",
        3: "Soma de dois números",
        4: "Média de 3 notas",
        5: "Sucessor e antecessor",
        6: "Reajuste salarial 15%",
        7: "Real → Dólar",
        8: "Par ou ímpar",
        9: "Maior de idade",
        10: "Qual número é maior",
        11: "Aprovado/Reprovado (média 2 notas)",
        12: "Positivo, negativo ou zero",
        13: "Categoria de natação",
        14: "Login simples",
        15: "Cálculo de IMC",
        16: "Calculadora de Desconto",
        17: "Conversor de Temperatura",
        18: "Aluguel de Carro",
        19: "Situação de Votação",
        20: "IMC com Classificação",
        21: "Formas de Pagamento",
        22: "É um Triângulo?",
        23: "Maior de Três",
        24: "Ordem Crescente",
        25: "Ano Bissexto",
        26: "Alistamento Militar",
        27: "Média com Status",
        28: "Pedra, Papel e Tesoura",
        29: "Preço da Passagem",
        30: "Empréstimo Bancário",
        31: "Lista de Compras",
        32: "Cadastro de Contato",
        33: "Filtrar Adultos",
        34: "Calculadora de Preço",
        35: "Inventário Simples",
        36: "Buscar Usuário",
        37: "Marcar Tarefas",
        38: "Contagem por Categoria",
        39: "Ranking de Pontuação",
        40: "Carrinho Simples",
        41: "Calculadora com switch",
        42: "Preencher e Exibir",
        43: "Soma dos Elementos",
        44: "Apenas os Pares",
        45: "Encontrando o Maior Valor",
        46: "Média da Turma",
        47: "Contando Ímpares",
        48: "Procurando um Número",
        49: "Nomes com a Letra 'A'",
        50: "Vetor Invertido",
        51: "Alunos Aprovados",
        52: "Contagem Crescente",
        53: "Peça um Número Positivo",
        54: "Adivinhe o Número",
        55: "Somador com Flag",
        56: "Validação de Resposta",
        57: "Potência sem Operador Direto",
        58: "Contagem de Pares",
        59: "Média com Flag",
        60: "Fatorial",
        61: "Fibonacci",
        62: "Divisão por Subtrações",
        63: "Maior e Menor com Flag",
        64: "Simulando um Saque",
        65: "Preenchendo Vetor com While",
        66: "Cadastro na Lista"
    };
    return desc[n] || '';
}

// Cria os cards dinamicamente
for (let i = 1; i <= 66; i++) {
    const card = document.createElement('div');
    card.className = 'card';

    // Número formatado: "01", "02", ... "66"
    const numeroFormatado = i < 10 ? '0' + i : '' + i;

    card.innerHTML = `
        <h3>Exercício ${numeroFormatado}</h3>
        <p>${getDescricao(i)}</p>
    `;

    // Ao clicar no card, roda o exercício correspondente
    card.addEventListener('click', () => {
        iniciarCaptura();
        try {
            window['exercicio' + i](); // Chama a função pelo nome
        } catch (e) {
            logs.push("ERRO: " + e.message);
        }
        pararCaptura();
        mostrarResultado();
    });

    menuEl.appendChild(card);
}

// Botão voltar
backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    outputArea.style.display = 'none';
    menuEl.style.display = 'grid';
    backBtn.style.display = 'none';
    outputTexto.textContent = '';
});
