var dadosCliente = {
    endereco : {},
    contato : {}
};

function validarFormulario(){
    
    event.preventDefault();
    
    console.log( validarEndereco() )

    if(validarEndereco() && validarContato()){
        console.log('validação está ok.. pode prosseguir');
        console.log(dadosCliente);
    }    
    else {
        console.log('validação não passou.. preencher todos os campos');
    }

}  

function validarEndereco(){
    //gerar objeto endereco baseado nos dados do formulario
    objEndereco = {
        pais        : document.getElementById('selection_country').value,
        estado      : document.getElementById('state').value,
        cidade      : document.getElementById('selection_city').value,
        cep         : document.getElementById('zip').value,
        endereco1   : document.getElementById('ad1').value,
        endereco2   : document.getElementById('ad2').value,
    };

    if( objEndereco.pais == '0' ) {
        return false;
    } else if (objEndereco.cidade == '0'){
        return false;
    } else if( objEndereco.estado.trim().length == 0 ){
        return false;
    } else if( objEndereco.cep.trim().length == 0 ){
        return false;
    } else if ( objEndereco.endereco1.trim().length == 0  ){
        return false;
    } else if ( objEndereco.endereco2.trim().length == 0  ){
        return false;
    } else {//validação ok
        //grava o objeto endereço no objeto dadosCliente
       dadosCliente.endereco = objEndereco;
        //retorno da função
        return true;
    }

}

function validarContato(){

     objContato = {
        name        : document.getElementById('name').value,
        lastname      : document.getElementById('lastname').value,
        email      : document.getElementById('email').value,
        phone         : document.getElementById('phone').value
        
    };


     if( objContato.name.trim().length == 0 ){
        return false;
    } else if( objContato.lastname.trim().length == 0 ){
        return false;
    } else if ( objContato.email.trim().length == 0  ){
        return false;
    } else if ( objContato.phone.trim().length == 0  ){
        return false;
    } else {
       
        dadosCliente.contato = objContato;

        

   
        return true;
    }

   

}

