// comentário de uma linha

/* isto é um comentário longo
   de múltiplas linhas.
 */

function user() {
    const nome = 'joão'
    const idade = 19
    console.log(`meu nome é ${nome} e tenho ${idade} anos`)
}
user(); //sempre chamar a função

function userObject(){ //formato de objeto
    const usuario = {
        nome: "larissa",
        idade: 20
    }
    console.log(usuario)
}
userObject();