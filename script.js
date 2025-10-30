const output = document.getElementById('output');
const input = document.getElementById('cmdinput')
const prompt = document.getElementById('prompt');

input.addEventListener('keydown', function(event){
  if(event.key === 'Enter'){
    const command = input.value; //pegando o que foi igitado
    input.value = '' // limpando o input pra poder receber novos commandos



    //adicionem os comandos que voces implementarem aqui : 
    const help = ['clear --limpar a tela <br>ls --listar diretorios/arquivos <br> echo --imprimir uma menssagem na tela <br>memb --lista os membros do grupo<br>infofast --mostra inforamções do sistema<br>cd --entra em um diretorio x']
    

    

    const line = document.createElement('div');
    line.textContent = `${prompt.textContent} ${command}`;
    output.appendChild(line) //append child pelo q intendi é pra adicionar a div criada ao final do #output


    //teste de comando clear
    if(command === 'clear'){
    output.innerHTML = '';
    }
    


    
    else if(command === 'help'){

      //helpl = lista de comandos no help
      const helpl = document.createElement('p');
      helpl.style.color = 'rgb(255 255 255 / 48%)';
      helpl.style.fontWeight = 'bold'
      helpl.innerHTML = `lista de comandos: <br> ${help}`;
      output.appendChild(helpl)
      
      

    }






    //comentei pois não tava entendendo direito, e tambem porque percebi que era o adam que tava responsavel por essa parte kkk


    // else if(command.startsWith('echo')){
    //   let menssagem = command.replace(/^echo\s*/, ''); //pelo q intendi vai apagar o "echo" e os espaçoes depois dele

    //   const match = menssagem.match(/(['"])(.*?)\1/);


    //   if (captura){
    //     //se encontrar aspas, vai pegar só o que esta dentro dela
    //     menssagem = match[2];
    //   }else{
    //     //se não tiver apas, mantem o que vier depois do echo
    //     menssagem = menssagem.trim();

    //   }

    //   const line = document.createElement('p')
    //   line.textContent = menssagem || ''; // esse || == 'ou'. então se menssagem estiver vasia ele não mostra nada; eu acho
    //   output.appendChild(line)


    // }

    else if(command === 'infofast'){
      //criando bloco pra mostrar a arte

      const bloco = document.createElement('div');
      bloco.style.display = 'flex';
      bloco.style.gap = '6px';
      bloco.style.whiteSpace = 'pre'; //pelo q intendi vai deixar o alinhado

      const arte = document.createElement('div');
      arte.textContent = `

      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣿⣷⡀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣷⠶⠦
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⠛⠋⠁⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣦⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣆⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⣀⣠⣴⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀
      ⠒⢶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀
      ⠀⠀⠉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀
      ⠀⠀⠀⠀⠀⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡀⠀⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠿⣶⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⣶⣶⣶⠄⠀⠀⠀⠀⠀⠀⠀⠀

      `;

      arte.style.color = '#39dbdbff'
      


      const info = document.createElement('div');

      const os = navigator.platform;
      const navegador = navigator.userAgent;
      const lingua = navigator.language;
      const resolucao = `${screen.width}x${screen.height}`;

      //
      const lines = [
        `OS: ${os}`,
        `Navegador: ${navegador}`,
        `Lingua: ${lingua}`,
        `Monitor resolution: ${resolucao}`
        //tem que colocar mais coisa aq: ...


      ];

      info.innerHTML = lines.join('<br>');
      info.style.color = '#0f0';

      
      //juntando tuod no bloco

      bloco.appendChild(arte)
      bloco.appendChild(info);
      output.appendChild(bloco)

    }



    //todos os comando tem que esta acima desse, nunca depois
    else if(command === 'egg'){
      const jf = document.createElement('img')
      jf.src = 'ovo.webp' //or cat.jpeg ou alguma outra imagem.
      jf.style.height = '300px';
      
      // jf.appendChild(jf)
      output.appendChild(jf)

    }
    


    //não sei porque não funciona
    else if(command === 'memb'){
      const memberrs = 'Douglas Gabriel<br>Adam Freire<br>Paulo Henrique<br>Luan<br>Alessandro';
      const members = document.createElement('p');
      members.style.color = '#0CF724';
      members.innerHTML = `Membros:<br> ${memberrs}`
      output.appendChild(members)

    }



    

    else{
      const errinho = document.createElement('p')
      errinho.textContent = `${command} --Comando não encontrado`
      output.appendChild(errinho)
    }

    //sem mais nada depois daqui pfv ass: Gabriel lindo!!
    // --
    // --
  }

});


