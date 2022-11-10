// Sistema de Cadastro de Eventos

const dataAtual = new Date ('2022-08-01') // Data Atual do Sistema
const dataEvento = new Date ('2022-08-30') // Data em que ocorrerá o Evento
const dataNascimento = new Date ('2004-03-04') // Data de Nascimento inserida pelo Usuário
const idadePermitida = new Date ('2005-01-01') // Idade Mínima permitida para se cadastrar
let registroParticipante = 0  // Variável para saber quando registrar o Usuário no Evento
let nomeParticipante = "Guilherme"  // Nome inserido pelo Usuário
let numeroParticipantes = 50 // Número de Participantes do Evento
let listaParticipantes = "Vitor, Gustavo, Rafaela..." // Lista de Participantes do Evento
let listaPalestrantes = "Roberto, Carlos, João e Vitor" // Lista de Palestrantes do Evento

if (dataAtual < dataEvento) {
    console.log ("Data do Evento conferida.")
    console.log ("Confira a seguir a lista dos Palestrantes que irão participar do evento:")
    console.log (listaPalestrantes)

    if (numeroParticipantes < 100) {
        console.log("O número total de pessoas com presença confirmada é de:")
        console.log(numeroParticipantes)
        console.log ("Ainda há vagas disponíveis para o evento.")
        console.log ("Por favor, insira sua Data de Nascimento.")
    
        if (dataNascimento < idadePermitida) {
            console.log ("Você possuí idade suficiente para se cadastrar no evento.")
            console.log ("Por favor, insira o seu nome.")
            let registroParticipante = + 1

        if (registroParticipante = 1) {
            console.log (`Olá, ${nomeParticipante}`)
            console.log ("Sua presença no evento foi confirmada. Seu cadastro finalizado com sucesso!")
            let numeroParticipantes = + 1

        }
        
        } else {
            console.log ("Erro. Você precisa ter pelo menos 18 anos para se cadastrar.")
        }
    
    } else {
        console.log ("Erro. Limite de pessoas cadastradas atingido.")
    
}

} else {
    console.log ("Erro. Data do Evento Inválida.")
}