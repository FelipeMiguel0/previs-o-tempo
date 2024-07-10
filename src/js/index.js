const chaveDaApi = "d7d47622d0b2462d81d185307240907";
const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if (!cidade) return;

    const dados = await buscarDadosDaCidade(cidade);

    if (dados) preencherDadosNaTela(dados, cidade);

});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;

    const resposta = await fetch(apiUrl);

    if (resposta.status !== 200) return;

    const dados = resposta.json();

    return dados;
}

function preencherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const humidadee = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;

    document.getElementById("cidade").textContent = cidade;

    document.getElementById("temperatura").textContent = `${temperatura} ºC`;

    document.getElementById("condicao").textContent = condicao;

    document.getElementById("humidade").textContent = `${humidadee}%`;

    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento} km/h`;

    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);

    const contai = document.getElementById('container');
    if (condicao == "Parcialmente nublado") {
        contai.style.backgroundImage = "url('https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg?auto=compress&cs=tinysrgb&w=600')";
    }

    else if (condicao == "Neblina") {
        contai.style.backgroundImage = "url('https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=600')";
    }

    else if (condicao == "Chuva fraca") {
        contai.style.backgroundImage = "url('https://images.pexels.com/photos/1915184/pexels-photo-1915184.jpeg?auto=compress&cs=tinysrgb&w=300')";
    }

    else if (condicao == "Céu limpo") {
        contai.style.backgroundImage = "url('https://images.pexels.com/photos/22590664/pexels-photo-22590664/free-photo-of-panorama-vista-paisagem-ceu.jpeg?auto=compress&cs=tinysrgb&w=300')";
    }

    else if (condicao == "Encoberto") {
        contai.style.backgroundImage = "url('https://images.pexels.com/photos/22129639/pexels-photo-22129639/free-photo-of-mar-panorama-vista-paisagem.jpeg?auto=compress&cs=tinysrgb&w=600')";
    }

    else if (condicao == "Aguaceiros fracos") {
        contai.style.backgroundImage = "url('https://images.pexels.com/photos/1915184/pexels-photo-1915184.jpeg?auto=compress&cs=tinysrgb&w=300')";
    }

    else if (condicao == "Sol") {
        contai.style.backgroundImage = "url('https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg?auto=compress&cs=tinysrgb&w=600')";
    }

    else if (condicao == "Possibilidade de chuva irregular") {
        contai.style.backgroundImage = "url('https://images.pexels.com/photos/1824270/pexels-photo-1824270.jpeg?auto=compress&cs=tinysrgb&w=400')";
    }

    else {
        contai.style.backgroundImage = "url('https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=400')";
    }

}



