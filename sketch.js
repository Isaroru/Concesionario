let img;
let imgc;
let imgm;
let imgcmarcas;
let imgcAdquiridos;
let imgMAdquiridos;
let logic;
let font;
let displayCarros;
let displayMotos;
let marcas = false;

function preload() { 
  img = loadImage('sources/Pantalla0.png');
  imgc = loadImage('sources/pantallac.png');
  imgm = loadImage('sources/pantallam.png');
  imgcmarcas = loadImage('sources/pantallac-marcas.png');
  imgcAdquiridos = loadImage('sources/pantallac-adquiridos.png');
  imgMAdquiridos = loadImage('sources/pantallam-adquiridos.png');
  font = loadFont('sources/Biotif-Regular.ttf');
}

function setup() {
  createCanvas(1400, 700);
  pantalla = 0;
  
  logic = new Logic(this);
}

function draw() {
  background(255);
  switch (pantalla) {
		case 0:
      image(img,0,0);
		break;
    case 1:
      image(imgc,0,0);
      logic.pintarCarros();
      textFont(font);
      fill(84,84,84);
      textSize(30);
      
      switch (displayCarros) {
        case 0:
          logic.detallesPos0();
          break;
        case 1:
          logic.detallesPos1();
          break;
        case 2:
          logic.detallesPos2();
          break;
        case 3:
          logic.detallesPos3();
          break;
        case 4:
          logic.detallesPos4();
          break;
      
        default:
          text("No info", 930,290);
          break;
      }

		break;
    case 2:
      image(imgm,0,0);
      logic.pintarMotos();
      textFont(font);
      fill(84,84,84);
      textSize(30);
      
      switch (displayMotos) {
        case 0:
          logic.detallesMPos0();
          break;
        case 1:
          logic.detallesMPos1();
          break;
        case 2:
          logic.detallesMPos2();
          break;
        case 3:
          logic.detallesMPos3();
          break;
        case 4:
          logic.detallesMPos4();
          break;
      
        default:
          text("No info", 930,290);
          break;
      }
		break;
    case 3:
      if (marcas = true) {
      image(imgcmarcas,0,0);
      logic.pintarCarros();
      textFont(font);
      fill(84,84,84);
      textSize(30);
      switch (displayCarros) {
        case 0:
          logic.detallesPos0();
          break;
        case 1:
          logic.detallesPos1();
          break;
        case 2:
          logic.detallesPos2();
          break;
        case 3:
          logic.detallesPos3();
          break;
        case 4:
          logic.detallesPos4();
          break;
      
        default:
          text("No info", 930,290);
          break;
      }
    }
      if (marcas = false) {
        pantalla=1;
      }
      
    break;
    case 4:
      image(imgcAdquiridos,0,0);
      logic.pintarCAgregados();
      break;
    case 5:
      image(imgMAdquiridos,0,0);
      logic.agregarMoto(displayMotos);
      break;
  }
}

function mousePressed() {

  console.log("X= "+mouseX);
  console.log("Y= "+mouseY);
  switch (pantalla) {
    case 0:
      if (mouseX>158 && mouseY >397 && mouseX<260 && mouseY<433) {
        pantalla = 1;
      }
      if (mouseX>287 && mouseY >397 && mouseX<397 && mouseY<433) {
        pantalla = 2;
      }
    break;
    case 1:
      if (mouseX>40 && mouseY >34 && mouseX<68 && mouseY<62) {
        pantalla = 0;
      }
      if (mouseX>383 && mouseY >26 && mouseX<514 && mouseY<72) {
        //MARCAS
        pantalla=3;
      }
      if (mouseX>571 && mouseY >26 && mouseX<701 && mouseY<72) {
        //PRECIO
        logic.ordenarPrecioCar();
      }
      if (mouseX>743 && mouseY >26 && mouseX<871 && mouseY<72) {
        //NO PSJ
        logic.ordenarNumPasajerosCar();
      }
      if (mouseX>922 && mouseY >26 && mouseX<1095 && mouseY<72) {
        //CILINDRAJE
        logic.ordenarCilindrajeCar();
      }
      if (mouseX>1149 && mouseY >26 && mouseX<1346 && mouseY<72) {
        //ADQUIRIDOS
        pantalla = 4;
      }
      if (mouseX>1081 && mouseY >603 && mouseX<1270 && mouseY<660) {
        //ADQUIRIR
        logic.click=true;
      }
      //pintar info CARROS
      if (mouseX>48 && mouseY >112 && mouseX<258 && mouseY<205){
        displayCarros = 0;
      }
      if (mouseX>320 && mouseY >112 && mouseX<528 && mouseY<205){
        displayCarros = 1;
      }
      if (mouseX>590 && mouseY >112 && mouseX<801 && mouseY<205){
        displayCarros = 2;
      }
      if (mouseX>859 && mouseY >112 && mouseX<1074 && mouseY<205){
        displayCarros = 3;
      }
      if (mouseX>1132 && mouseY >112 && mouseX<1339 && mouseY<205){
        displayCarros = 4;
      }

    break;

    case 2:
      if (mouseX>40 && mouseY >34 && mouseX<68 && mouseY<62) {
        pantalla = 0;
      }
      if (mouseX>571 && mouseY >26 && mouseX<701 && mouseY<72) {
        //PRECIO
        logic.ordenarPrecioMot();
      }
      if (mouseX>743 && mouseY >26 && mouseX<871 && mouseY<72) {
        //N° PSJ
        logic.ordenarNumPasajerosMot();
      }
      if (mouseX>922 && mouseY >26 && mouseX<1095 && mouseY<72) {
        //CILINDRAJE
        logic.ordenarCilindrajeMot();
      }
      if (mouseX>1149 && mouseY >26 && mouseX<1346 && mouseY<72) {
        //ADQUIRIDOS
        pantalla = 5;
      }
      if (mouseX>1081 && mouseY >603 && mouseX<1270 && mouseY<660) {
        //ADQUIRIR
        logic.agregarMoto(displayMotos);
      }

      //pintar info MOTOS
      if (mouseX>48 && mouseY >112 && mouseX<258 && mouseY<205){
        displayMotos = 0;
      }
      if (mouseX>320 && mouseY >112 && mouseX<528 && mouseY<205){
        displayMotos = 1;
      }
      if (mouseX>590 && mouseY >112 && mouseX<801 && mouseY<205){
        displayMotos = 2;
      }
      if (mouseX>859 && mouseY >112 && mouseX<1074 && mouseY<205){
        displayMotos = 3;
      }
      if (mouseX>1132 && mouseY >112 && mouseX<1339 && mouseY<205){
        displayMotos = 4;
      }
      break;

    case 3:
        if (mouseX>40 && mouseY >34 && mouseX<68 && mouseY<62) {
          pantalla = 0;
        }
        if (mouseX>383 && mouseY >26 && mouseX<514 && mouseY<72) {
          //MARCAS
          pantalla = 1;
        }
        //pintar info
        if (mouseX>48 && mouseY >112 && mouseX<258 && mouseY<205){
          displayCarros = 0;
        }
        if (mouseX>320 && mouseY >112 && mouseX<528 && mouseY<205){
          displayCarros = 1;
        }
        if (mouseX>590 && mouseY >112 && mouseX<801 && mouseY<205){
          displayCarros = 2;
        }
        if (mouseX>859 && mouseY >112 && mouseX<1074 && mouseY<205){
          displayCarros = 3;
        }
        if (mouseX>1132 && mouseY >112 && mouseX<1339 && mouseY<205){
          displayCarros = 4;
        }
      break;
      case 4:
        if (mouseX>40 && mouseY >34 && mouseX<68 && mouseY<62) {
          pantalla = 1;
        }
        if (logic.click) {
          
          logic.agregarCarro(displayCarros);
        }else{
          mouseReleased()
        }
      break;
      case 5:
        if (mouseX>40 && mouseY >34 && mouseX<68 && mouseY<62) {
          pantalla = 2;
        }
      break;
  }

  
  function mouseReleased() {
    logic.click=false;
  }

}