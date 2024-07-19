//Função com arrow function
const conexao = () => console.log("Conexão feita com sucesso!");
//Imprimir com loop de repetição
for (let i = 0; i < 3; i++) {
    conexao();
}

//Função normal
function conex() {
    console.log("Conexão feita com sucesso!")
}
//Imprimir normalmente chamando a função 3 vezes
conex();
conex();
conex();