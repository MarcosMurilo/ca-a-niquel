 
// declarando as variaves que irão preencher os quadros 1, 2, 3 da roleta
var eleQuadro3 = document.querySelector('#img-3')
var eleQuadro2 = document.querySelector('#img-2')
var eleQuadro1 = document.querySelector('#img-1')
var saldo = document.getElementById('saldo')
var mostraCredito = document.getElementById('saldo') // texto que mostra o R$ credito
var recebeRoleta // resultado da roleta
var corSection = document.getElementById('corSection')



function rodarRoleta(){

   

    // ARRAY FONTE img/img-001.jpeg     
    let bancoImg = [

      "img/img-001.jpeg",
      "img/img-002.jpeg",
      "img/img-003.jpeg",
      "img/img-004.jpeg",
      "img/img-005.jpeg",
      "img/img-006.jpeg",
      "img/img-007.jpeg",
      "img/img-008.jpg",
      "img/img-009.jpg",
      "img/img-010.jpeg",
      "img/img-011.jpg",
      "img/img-012.jpg",
      "img/img-013.jpg"
]
let bancoImg2 = [

   "img/img-001.jpeg", 
   "img/img-002.jpeg", 
   "img/img-003.jpeg", 
   "img/img-004.jpeg",
   "img/img-005.jpeg",
   "img/img-006.jpeg",
   "img/img-007.jpeg",
   "img/img-008.jpg",
   "img/img-009.jpg",
   "img/img-010.jpeg",
   "img/img-011.jpg",
   "img/img-012.jpg",
   "img/img-013.jpg"
]

let bancoImg3 = [

   "img/img-001.jpeg", //0  
   "img/img-002.jpeg", // 1
   "img/img-003.jpeg", // 2
   "img/img-004.jpeg", //3
   "img/img-005.jpeg", // 4
   "img/img-006.jpeg", // 5
   "img/img-007.jpeg", // 6
   "img/img-008.jpg", // 7
   "img/img-009.jpg", // 8
   "img/img-010.jpeg", // 9
   "img/img-011.jpg", // 10
   "img/img-012.jpg", // 11
   "img/img-013.jpg" // 12
]

   /* 
    valores adicionais de acordo com a imagem:
    de [0] -> [2] + 5
    de [3] ->  [5] + 10
    de [6] -> [8] + 15
    de [9] -> [11] + 20
   */
   
   // limpa os quadros com as fotos a cada vez q o botão 'jogar' é acionado
         eleQuadro3.innerHTML = ''
         eleQuadro2.innerHTML = ''
         eleQuadro1.innerHTML = ''
       
         // "girando a roleta das imagens"
         // ran3, 2, 1 sao os index capturados
         let ran3 =  Math.floor(Math.random() * bancoImg.length) 
         let ran2 =  Math.floor(Math.random() * bancoImg.length)
         let ran1 =  Math.floor(Math.random() * bancoImg.length)
         
        
         // SOMANDO OU SUBTRAINDO OS VALORES DO SALDO CONFORME RESULTADO DA ROLETA
         if ( ran1 == ran2 && ran1 == ran3 ){
           
               recebeRoleta = 150
            
            }
            
            
        else if (ran1 == ran2 && ran1 != ran3){

         if (ran1 >= 0 && ran1 <= 2 && ran2 >= 0 && ran2 <=2) {
            recebeRoleta = 20
            recebeRoleta += 5
         } else if ( ran1 >= 3 && ran1 <= 5 && ran2 >= 3 && ran2 <=5) {
            recebeRoleta = 20
            recebeRoleta += 10
         } else if ( ran1 >= 6 && ran1 <= 8 && ran2 >= 6 && ran2 <=8) {
            recebeRoleta = 20
            recebeRoleta += 15
         } else if ( ran1 >= 9 && ran1 <= 12 && ran2 >= 9 && ran2 <= 12 ) {
            recebeRoleta = 20
            recebeRoleta += 20
         }
           
           
       } else if (ran1 == ran3 ) {

         if (ran1 >= 0 && ran1 <= 2 && ran3 >= 0 && ran3 <=2) {
            recebeRoleta = 20
            recebeRoleta += 5
         } else if ( ran1 >= 3 && ran1 <= 5 && ran3 >= 3 && ran3 <=5) {
            recebeRoleta = 20
            recebeRoleta += 10
         } else if ( ran1 >= 6 && ran1 <= 8 && ran3 >= 6 && ran3 <=8) {
            recebeRoleta = 20
            recebeRoleta += 15
         } else if ( ran1 >= 9 && ran1 <= 12 && ran3 >= 9 && ran3 <= 12 ) {
            recebeRoleta = 20
            recebeRoleta += 20
         }
            
       } else if (ran2 == ran3 ) {

         if (ran2 >= 0 && ran2 <= 2 && ran3 >= 0 && ran3 <=2) {
            recebeRoleta = 20
            recebeRoleta += 5
         } else if ( ran2 >= 3 && ran2 <= 5 && ran3 >= 3 && ran3 <=5) {
            recebeRoleta = 20
            recebeRoleta += 10
         } else if ( ran2 >= 6 && ran2 <= 8 && ran3 >= 6 && ran3 <=8) {
            recebeRoleta = 20
            recebeRoleta += 15
         } else if ( ran2 >= 9 && ran2 <= 12 && ran3 >= 9 && ran3 <= 12 ) {
            recebeRoleta = 20
            recebeRoleta += 20
         }
            
       }else if (ran1 != ran2 && ran2 != ran3 && ran2 != ran3){
            
            recebeRoleta = -10
               //   
       } 

         // ADICIONA UM INDEX DE FORMA RANDÔMICA
        // adiciona as fotos aleatóriamente quadro 3
      if(bancoImg.length == bancoImg.length) { // mesmo valor ***
         var quadro3 = document.createElement('img')
         quadro3.setAttribute('src',`${bancoImg3[ran3]}`)
         quadro3.setAttribute('width','200')
         quadro3.setAttribute('height','200')
         eleQuadro3.appendChild(quadro3)

        // adiciona as fotos aleatóriamente quadro 2
         var quadro2 = document.createElement('img')
         quadro2.setAttribute('src',`${bancoImg2[ran2]}`)
         quadro2.setAttribute('width','200')
         quadro2.setAttribute('height','200')
         eleQuadro2.appendChild(quadro2)

         // adiciona as fotos aleatóriamente quadro 1
        var quadro1 = document.createElement('img')
        quadro1.setAttribute('src',`${bancoImg[ran1]}`)
        quadro1.setAttribute('width','200')
        quadro1.setAttribute('height','200')
        eleQuadro1.appendChild(quadro1)
         } 
        
} //  FIM  rodarRoleta()

    // função faz correr as fotos nos 3 quadros
  function roda() {       
      rodandoRoleta = setInterval(rodarRoleta, 100)
  }

 

  // função faz parar as fotos nos quadros
  function para() {

      if (recebeRoleta == 150) {
       
         corSection.style.backgroundColor = "#0a4fe2" // cor fundo azul
         let emojVariaTitulo = document.querySelector('h1').innerHTML = ganha() + "Jogo Caça Níquel" + ganha(); // chama função ganha para mostrar os emoji´s
      } else if(recebeRoleta >= 20 && recebeRoleta < 150) {

         corSection.style.backgroundColor = "#ffa500" // cor fundo amarela
         let emojVariaTitulo = document.querySelector('h1').innerHTML = ganha() + "Jogo Caça Níquel" + ganha();
      } else {
         corSection.style.backgroundColor = "#c20c0c" // cor fundo vermelha
         let emojVariaTitulo = document.querySelector('h1').innerHTML = perde() + "Jogo Caça Níquel" + perde();
      }

      var recebeInput = document.getElementById('credito').value // ID  input
      var inputCredito = document.getElementById('credito') // adiciona o valor "somado" no campo input
      var creditoSomado
      saldo.innerHTML ='' // limpa o valor senão fica colocando os valores lado a lado sempre que aperta o botão "Parar"
      var credito = parseInt(recebeInput) // passa o value do input para 'int'
      
      let item = document.createElement('option') // texto  'Digite um numero....
      item.text = `SALDO $ ${ creditoSomado = credito + recebeRoleta}`// só texo na tela
      //let emojVariaTitulo = document.querySelector('h1').innerHTML = ganha() + "Jogo Caça Níquel" + perde();
      item.value =  credito // dispara msg de game over caso crédito fique 'zero'
      if (creditoSomado <= 0) {
         alert("GAME OVER!")
      }
      // red:  corSection.style.backgroundColor = "#c20c0c" , #0a4fe2
      // amarela: corSection.style.backgroundColor = "#ffa500"
      inputCredito.value = creditoSomado // adiciona o valor "somado" no vampo input
      mostraCredito.appendChild(item)
      var para = clearInterval(rodandoRoleta)
      
  }
  //mostra emoji´s felizes ao ganhar crédito
  function ganha(){
    // ARRAY FONTE      
    let emoj = ["\u{1F913}","\u{1F973}","\u{1F911}","\u{1F619}","\u{1F929}", "\u{1F4B5}", "\u{1F61C}", "\u{1F91E}","\u{1F64F}","\u{2728}","\u{1F3C6}","\u{1F48E}"]//U+1F91E U+1F64F	 U+2728	U+1F3C6 U+1F48E
    let ran =  Math.floor(Math.random() * emoj.length) 
    return emoj[ran] 
       
}//fim ganha

// mostra emoji´s tristes ao perder crédito
function perde(){
    // ARRAY FONTE      
    let emoj = ["\u{1F92E}","\u{1F630}","\u{1F62D}","\u{1F623}","\u{1F97A}","\u{1F4B8}","\u{1F621}","\u{1F631}","\u{1F624}","\u{1F92C}","\u{1F480}","\u{1F4A9}"]// U+1F631  U+1F624 U+1F92C	 U+1F480 U+1F4A9
    let ran =  Math.floor(Math.random() * emoj.length) 
    return emoj[ran] 
  
}//fim perde



