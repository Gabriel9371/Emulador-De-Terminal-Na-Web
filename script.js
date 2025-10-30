const output = document.getElementById("output");
const input = document.getElementById("cmdinput");
const prompt = document.getElementById("prompt");



const diretorios = {
  user: ["config.json", "documents", "desktop"],
  documents: ["report.txt", "novoComando->egg.md"],
  desktop: ["shortcuts.txt"],
};



// Variáveis de Estado
let nomeDiretorio = "user"; // Nome do diretório atual
let diretorio = (name) =>
  name.toLowerCase() === name && name.indexOf(".") === -1;



input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = input.value; //pegando o que foi igitado
    input.value = ""; // limpando o input pra poder receber novos commandos



    //adicionem os comandos que voces implementarem aqui :
    const help = [
      "'clear -- limpa a tela <br>ls -- lista diretórios/arquivos <br> echo -- imprime uma mensagem na tela <br>memb -- lista os membros do grupo<br>infofast -- mostra informações do sistema<br>cd -- entra em um diretório<br>cd.. -- volta para o diretório anterior<br><br>Diretórios: <br>user<br>documents<br>desktop",
    ];



    const line = document.createElement("div");
    line.textContent = `${prompt.textContent} ${command}`;
    output.appendChild(line); //append child pelo q intendi é pra adicionar a div criada ao final do #output

    //teste de comando clear
    if (command === "clear") {
      output.innerHTML = "";
    } 
    
    else if (command.startsWith("ls")) {
      // Pega o conteúdo do diretório atual (usando a variável de estado)
      const itens = diretorios[nomeDiretorio];

      if (!itens || itens.length === 0) {
        // Se o diretório não existir ou estiver vazio
        const lsL = document.createElement("p");
        lsL.textContent = "Diretório vazio ou não encontrado.";
        output.appendChild(lsL);
      }
      
      else {
        // Lista os itens
        const lsL = document.createElement("p");
        // Usamos tabulação (\t) para melhor visualização
        lsL.textContent = itens.join("\t");
        output.appendChild(lsL);
      }
    } 
    
    
    else if (command.startsWith("echo")) {
      //  verifica se uma string, representada pela variável command, começa com a sequência de caracteres "echo".
      // Pega tudo depois de 'echo'
      let mensagem = command.replace(/^echo\s*/, ""); //replace(): Um método de string que busca por um padrão e o substitui por outro valor

      const echoL = document.createElement("p");

      echoL.textContent = mensagem;
      output.appendChild(echoL);
    } 
    
    else if (command === "memb") {
      const memberrs =
        "Douglas Gabriel<br>Adam Freire<br>Paulo Henrique<br>Luan<br>Alessandro";
      const members = document.createElement("p");
      members.style.color = "#0CF724";
      members.innerHTML = `Membros:<br> ${memberrs}`;
      output.appendChild(members);
    } 
    
    else if (command === "help") {
      //helpl = lista de comandos no help
      const helpl = document.createElement("p");
      helpl.style.color = "rgb(255 255 255 / 48%)";
      helpl.style.fontWeight = "bold";
      helpl.innerHTML = `lista de comandos: <br> ${help}`;
      output.appendChild(helpl);
    } 


    
    
    else if (command === "infofast") {
      //criando bloco pra mostrar a arte

      const bloco = document.createElement("div");
      bloco.style.display = "flex";
      bloco.style.gap = "6px";
      bloco.style.whiteSpace = "pre"; //pelo q intendi vai deixar o alinhado

      const arte = document.createElement("div");
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

      arte.style.color = "#39dbdbff";

      const info = document.createElement("div");

      const os = navigator.platform;
      const navegador = navigator.userAgent;
      const lingua = navigator.language;
      const resolucao = `${screen.width}x${screen.height}`;

      //
      const lines = [
        `OS: ${os}`,
        `Navegador: ${navegador}`,
        `Lingua: ${lingua}`,
        `Monitor resolution: ${resolucao}`,
        //tem que colocar mais coisa aq: ...
      ];

      info.innerHTML = lines.join("<br>");
      info.style.color = "#0f0";

      //juntando tuod no bloco

      bloco.appendChild(arte);
      bloco.appendChild(info);
      output.appendChild(bloco);
    } 




    else if (command.startsWith("cd")) {
      // Pega o argumento após 'cd'
      let comando = command.replace(/^cd\s*/, "").trim();

      //  Verifica se o 'comando' existe no diretório atual
      const conteudoAtual = diretorios[nomeDiretorio];

      if (conteudoAtual && conteudoAtual.includes(comando)) {

        //  Verifica se o 'comando' é um diretório (usando nossa função simples)

        if (diretorio(comando)) {

          //  Verifica se o 'comando' existe como chave no nosso 'diretorios'

          if (comando in diretorios) {

            // Muda o diretório atual.
            nomeDiretorio = comando;

            // Opcional: Adicionar uma mensagem de confirmação
            const cdL = document.createElement("p");
            cdL.textContent = `Diretório atual: ${nomeDiretorio}`;
            output.appendChild(cdL);
          } 
          else {

            //  É um diretório, mas não tem conteúdo definido na simulação
            const errorL = document.createElement("p");
            errorL.textContent = `cd: ${comando}: Diretório simulado, mas sem conteúdo definido.`;
            output.appendChild(errorL);

          }
        }
         else {


          //  É um arquivo, não um diretório
          const errorL = document.createElement("p");
          errorL.textContent = `cd: ${comando}: Não é um diretório.`;
          output.appendChild(errorL);

        }
      } 


      else if (comando === "..") {
        // Se o usuário tentar voltar (cd ..)
        if (nomeDiretorio !== "user") {

          // Se não estiver na "raiz" (user), volta para "user"

          nomeDiretorio = "user";

          const cdL = document.createElement("p");
          cdL.textContent = `Retornou ao diretório: ${nomeDiretorio}`;
          output.appendChild(cdL);
        } 

        else {

          const errorL = document.createElement("p");
          errorL.textContent = `cd: Já está na raiz ('user').`;
          output.appendChild(errorL);

        }
      } 

      else {
        // Erro: Não encontrou o arquivo/diretório
        const errorL = document.createElement("p");
        errorL.textContent = `cd: ${comando}: Arquivo ou diretório não encontrado.`;
        output.appendChild(errorL);
      }

    }



    else if (command === "egg") {
      const jf = document.createElement("img");
      jf.src = "ovo.webp"; //or cat.jpeg ou alguma outra imagem.
      jf.style.height = "300px";
      
      // jf.appendChild(jf)
      output.appendChild(jf);
      
      
      
    } 
    
    //todos os comando tem que esta acima desse, nunca depois
    else {
      const errinho = document.createElement("p");
      errinho.textContent = `${command} --Comando não encontrado`;
      output.appendChild(errinho);
    }
  }



});