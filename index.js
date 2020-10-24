var item = new Array();

function Carro(id, marca, placa, combustivel) {
    this.id = id;
    this.marca = marca;
    this.placa = placa;
    this.combustivel = combustivel;
    this.estacionamento = function() {
        console.log(`O carro ${this.id} da marca ${this.marca} de placa ${this.placa} está neste estacionamento.`);
    };
    this.tipocombustivel = function() {
        console.log(`Este carro utiliza ${this.combustivel} como combustível.`);
    }
}


function adiciona() {
var id = document.getElementById('id');
var marca = document.getElementById('marca');
var placa = document.getElementById('placa');
var combustivel = document.getElementById('combustivel');

var carro1 = new Carro(id.value, marca.value, placa.value, combustivel.value);

item.push(carro1);

console.log(item);

mostrar();
limparTxt();

}

function mostrar() {
    var lista = document.getElementById('lista');
    var text = '';
    text = '<ul>';
    for (var i = 0; i<item.length; i++)
    {
        text += "<li>";        
        text += "Id: " + item[i].id + " - ";
        text += "Marca: " + item[i].marca + " - ";
        text += "Placa: " + item[i].placa + " - ";
        text += "Combustível: " + item[i].combustivel;
        text += "</li>";
    }
    text+="</ul>"

    lista.innerHTML = text;
}

function apagar() {
item.pop();
mostrar();
limparTxt();

}

function limpar() {
item = [];
mostrar();
limparTxt();

}

function limparTxt() {
var id = document.getElementById('id');
var marca = document.getElementById('marca');
var placa = document.getElementById('placa');
var combustivel = document.getElementById('combustivel');

id.value = '';
marca.value = '';
placa.value = '';
combustivel.value = '';
}