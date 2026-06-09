document.getElementById('submitbutton').addEventListener('click', function (e) {
    e.preventDefault();
    const usuario = document.getElementById('name').value;
    const senha = document.getElementById('password').value; 

    if(usuario === '') {
        alert('digite o usuario');
        return;
    }
    if(senha === '') {

        alert('digite a senha');
        return;
      
     } 
      verificarlogin(usuario,senha)
      .then(function() {
        alert('acesso permitido');
      })
      .catch(function() {
        alert('acesso negado');
     });
      });
    function verificarlogin(usuario,senha) {
        return new Promise(function(resolve,reject) {
            setTimeout(function() {
                if(usuario === 'admin' && senha === '123456'){
                resolve();
            }else {
                reject();
            }

            },2000);
            
        
        });
    }

        
    