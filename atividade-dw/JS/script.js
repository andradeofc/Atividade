let Pessoa = class Pessoa{
  constructor(nome, idade) { 
    this.nome = nome;
    this.idade = idade;
  }
}

let Usuario = class Usuario extends Pessoa{
  constructor(nome, senha, idade, email) { 
    super(nome,idade)
    this.senha = senha;
    this.email = email;
  }

  Salvo(){
    try{
      if(this.status!=undefined) {
        this.status = "Salvo"
      }
    }catch(error){
      console.log(error)
    }
  }
};

let pessoa = {}
var user = new Usuario(pessoa.nome, pessoa.senha, pessoa.idade, pessoa.email)
if(user.hasOwnProperty('nome')){
  Usuario.prototype.status = ""
  user.Salvo()
  document.getElementById("result").innerHTML = `<fieldset>Salvo com sucesso</br><span>Nome:${user.nome}</span><br><span>Email:${user.email}</span><br><span>Idade:${user.idade}</span></fieldset>`
}


function validaForm(frm) {
    if(frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 3) {
        alert("Por favor, indique o seu nome.");     
        frm.nome.focus();
        return false;
    }
    if(frm.email.value.indexOf("@") == -1 ||
      frm.email.valueOf.indexOf(".") == -1 ||
      frm.email.value == "" ||
      frm.email.value == null) {
        alert("Por favor, indique um e-mail válido.");
        frm.email.focus();
        return false;
    }

    escolhaSexo = -1; 
    for(x = frm.sexo.lenght -1; x > -1; x--) {
        if(frm.sexo[x].checked) { 
           escolhaSexo = x; 
        }
    }
    if(escolhaSexo == -1) {
        alert("qual o seu sexo?");
        frm.sexo[0].focus();
        return false;
    }

  }
