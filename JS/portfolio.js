/* 
OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da
aba que foi clicada pelo usuário e esconder o conteúdo
da aba anterior
- passo 1 - dar um jeito de pegar os elementos que representam
as abas no HTML
-passo 2 - dar um jeito de identificar o clique no elemento da aba
-passo 3 - quando o usuário clicar, desmarcar a aba selecionada
-passo 4 - marcar a aba clicada como selecionada
-passo 5 - esconder o conteúdo anterior
-passo 6 - mostrar o conteúdo da aba selecionada
*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");

//o const torna a lista criada em constante, não se pode alterar o seu valor.

//passo 2 - dar um jeito de identificar o clique no elemento da aba
// for each, significa para cada, usando em uma lista ele executa uma ação para cada item da lista

abas.forEach((aba) => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionada")) return
            
            selecionarAba(aba);
            mostrarInformacoesDaAba(aba);
        });
    });

    function selecionarAba(aba){

        // passo 3 - quando o usuário clicar, desmarcar a aba selecionada, query selector é para um elemento e o all para multiplos elementos
        
        const abaSelecionada = document.querySelector(".aba.selecionada");
        abaSelecionada.classList.remove("selecionada")

        //passo 4 - marcar a aba clicada como selecionada
        
        aba.classList.add("selecionada")
    }

    function mostrarInformacoesDaAba(aba){
        const idDoElementoInformacoesDaAba = `informacao-${aba.id}`;
        
        const informacaoASerMostrada = document.getElementById(idDoElementoInformacoesDaAba);
        
        //passo 5 - esconder o conteúdo anterior
        
        const informacaoSelecionada = document.querySelector(".informacao.selecionada");
        
        informacaoSelecionada.classList.remove("selecionada");

        //passo 6 - mostrar o conteúdo da aba selecionada
        
               
        informacaoASerMostrada.classList.add("selecionada")
    }

