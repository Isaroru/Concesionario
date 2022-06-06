class Logic {
    constructor (app){
        this.app = app;
        this.onixImg = this.app.loadImage("sources/chevrolet-onix2.png");
        this.onixDet = this.app.loadImage("sources/onix-azul.png");
        this.onix = new Carro(2021, "r3", "Chevrolet", 1600, 4, 1, 50, "manual", 1.6, "corriente",this.onixImg,this.onixDet);
        

        this.sedanImg = this.app.loadImage("sources/carro-sedan2.png");
        this.sedanDet = this.app.loadImage("sources/sedan-mazda.png");
        this.sedan = new Carro(2021, "r4", "Mazda", 1400, 4, 1, 70, "manual", 1.2, "corriente",this.sedanImg,this.sedanDet);
        

        this.sanderoImg = this.app.loadImage("sources/sandero2-azul.png");
        this.sanderoDet = this.app.loadImage("sources/renault-sandero.png");
        this.sandero = new Carro(2022, "r2", "Renault", 1200, 4, 1, 40, "automático", 1.8, "extra",this.sanderoImg, this.sanderoDet);
        

        this.versaImg = this.app.loadImage("sources/nuevo-Versa2.png");
        this.versaDet = this.app.loadImage("sources/NISSAN-VERSA.png");
        this.versa = new Carro(2022, "r5", "Nissan", 1300, 4, 1, 60, "manual", 1.4, "corriente",this.versaImg, this.versaDet);
        

        this.coupeImg = this.app.loadImage("sources/clase-c-coupe2.png");
        this.coupeDet = this.app.loadImage("sources/coupe-mercedes.png");
        this.coupe = new Carro(2020, "r2", "Mercedes", 1200, 2, 1, 80, "automático", 1.6, "extra",this.coupeImg,this.coupeDet);
        

        this.arrayCarros = [this.onix,this.sedan,this.sandero,this.versa,this.coupe];


        this.aktImg = this.app.loadImage("sources/akt-CR4.png");
        this.aktDet = this.app.loadImage("sources/akt-CR4-2g.png");
        this.akt = new Moto(2021, "t3", "Akt", 140, 4, 1, 59, "manual", 1.6, "corriente",this.aktImg,this.aktDet);
        

        this.susukiImg = this.app.loadImage("sources/susuki-gris.png");
        this.susukiDet = this.app.loadImage("sources/susuki2.png");
        this.susuki = new Moto(2020,"t4","Susuki",124,1,1.5,30,"automático",1,"corriente",this.susukiImg,this.susukiDet);

        this.yamahaImg = this.app.loadImage("sources/yamaha-ybrz.png");
        this.yamahaDet = this.app.loadImage("sources/ybrz2.png");
        this.yamaha = new Moto(2022, "t1", "Yamaha", 186, 4, 1, 40, "manual", 1.8, "extra",this.yamahaImg,this.yamahaDet);

        this.hondaImg = this.app.loadImage("sources/honda-roja.png");
        this.hondaDet = this.app.loadImage("sources/honda-2.png");
        this.honda = new Moto(2022, "t5", "Honda", 120, 4, 1, 60, "manual", 1.4, "corriente",this.hondaImg,this.hondaDet);

        this.ducatiImg = this.app.loadImage("sources/ducati.png");
        this.ducatiDet = this.app.loadImage("sources/ducati-roja2.png");
        this.ducati = new Moto(2020, "t2", "Ducati", 300, 4, 1, 60, "automático", 1.6, "extra",this.ducatiImg,this.ducatiDet);

        this.arrayMotos = [this.akt,this.susuki,this.yamaha,this.honda,this.ducati];

        this.arrayAgregados = [];
        this.arrayMAgregados = [];

        this.click = false;

    
    }
    
    
    detallesPos0(){
      text(this.arrayCarros[0].detalles(),930,290);
      this.app.image(this.arrayCarros[0].imagenDet,100,280);
    }
    detallesPos1(){
      text(this.arrayCarros[1].detalles(),930,290);
      this.app.image(this.arrayCarros[1].imagenDet,100,300);
    } 
    detallesPos2(){
      text(this.arrayCarros[2].detalles(),930,290);
      this.app.image(this.arrayCarros[2].imagenDet,100,280);
    } 
    detallesPos3(){
      text(this.arrayCarros[3].detalles(),930,290);
      this.app.image(this.arrayCarros[3].imagenDet,100,290);
    } 
    detallesPos4(){
      text(this.arrayCarros[4].detalles(),910,290);
      this.app.image(this.arrayCarros[4].imagenDet,100,290);
    } 
    //motos
    detallesMPos0(){
      text(this.arrayMotos[0].detalles(),930,290);
      this.app.image(this.arrayMotos[0].imagenDet,100,280);
    }
    detallesMPos1(){
      text(this.arrayMotos[1].detalles(),930,290);
      this.app.image(this.arrayMotos[1].imagenDet,100,300);
    } 
    detallesMPos2(){
      text(this.arrayMotos[2].detalles(),930,290);
      this.app.image(this.arrayMotos[2].imagenDet,100,280);
    } 
    detallesMPos3(){
      text(this.arrayMotos[3].detalles(),930,290);
      this.app.image(this.arrayMotos[3].imagenDet,100,290);
    } 
    detallesMPos4(){
      text(this.arrayMotos[4].detalles(),910,290);
      this.app.image(this.arrayMotos[4].imagenDet,100,290);
    } 

    
    pintarCarros(){
        for (let i = 0; i < this.arrayCarros.length; i++) {
            this.app.image(this.arrayCarros[i].imagen, 46 + 275 * i, 125);            
        }

    }

    pintarMotos(){
        for (let i = 0; i < this.arrayMotos.length; i++) {
            this.app.image(this.arrayMotos[i].imagen, 60 + 275 * i, 113);            
        }
    }

    ordenarNumPasajerosCar(){
        for (let i = 0; i < this.arrayCarros.length; i++) {
            for (let j = 0; j < this.arrayCarros.length; j++) {
              if (this.arrayCarros[i] !== this.arrayCarros[j]) {
                if (this.arrayCarros[i].numPasajeros > this.arrayCarros[j].numPasajeros) {
                  let actual = this.arrayCarros[i];
                  this.arrayCarros[i] = this.arrayCarros[j];
                  this.arrayCarros[j] = actual;
                }
              }
            }
          }
    }

    ordenarNumPasajerosMot(){
      for (let i = 0; i < this.arrayMotos.length; i++) {
        for (let j = 0; j < this.arrayMotos.length; j++) {
          if (this.arrayMotos[i] !== this.arrayMotos[j]) {
            if (this.arrayMotos[i].numPasajeros > this.arrayMotos[j].numPasajeros) {
              let actual = this.arrayMotos[i];
              this.arrayMotos[i] = this.arrayMotos[j];
              this.arrayMotos[j] = actual;
            }
          }
        }
      }        
    }
    ordenarCilindrajeCar(){
      for (let i = 0; i < this.arrayCarros.length; i++) {
            for (let j = 0; j < this.arrayCarros.length; j++) {
              if (this.arrayCarros[i] !== this.arrayCarros[j]) {
                if (this.arrayCarros[i].cilindraje > this.arrayCarros[j].cilindraje) {
                  let actual = this.arrayCarros[i];
                  this.arrayCarros[i] = this.arrayCarros[j];
                  this.arrayCarros[j] = actual;
                }
              }
            }
          }
    }
    ordenarCilindrajeMot(){
      for (let i = 0; i < this.arrayMotos.length; i++) {
        for (let j = 0; j < this.arrayMotos.length; j++) {
          if (this.arrayMotos[i] !== this.arrayMotos[j]) {
            if (this.arrayMotos[i].cilindraje > this.arrayMotos[j].cilindraje) {
              let actual = this.arrayMotos[i];
              this.arrayMotos[i] = this.arrayMotos[j];
              this.arrayMotos[j] = actual;
            }
          }
        }
      } 
        
    }
    ordenarPrecioCar(){
      for (let i = 0; i < this.arrayCarros.length; i++) {
        for (let j = 0; j < this.arrayCarros.length; j++) {
          if (this.arrayCarros[i] !== this.arrayCarros[j]) {
            if (this.arrayCarros[i].promImpuestos > this.arrayCarros[j].promImpuestos) {
              let actual = this.arrayCarros[i];
              this.arrayCarros[i] = this.arrayCarros[j];
              this.arrayCarros[j] = actual;
            }
          }
        }
      }
    }
    ordenarPrecioMot(){
      for (let i = 0; i < this.arrayMotos.length; i++) {
        for (let j = 0; j < this.arrayMotos.length; j++) {
          if (this.arrayMotos[i] !== this.arrayMotos[j]) {
            if (this.arrayMotos[i].promImpuestos > this.arrayMotos[j].promImpuestos) {
              let actual = this.arrayMotos[i];
              this.arrayMotos[i] = this.arrayMotos[j];
              this.arrayMotos[j] = actual;
            }
          }
        }
      } 
    }

    pintarCAgregados(){
      for (let i = 0; i < this.arrayAgregados.length; i++) {
        this.app.image(this.arrayAgregados[i].imagen, 46 + 275 * i, 125);            
      }
    }

    pintarMAgregados(){
      for (let i = 0; i < this.arrayMAgregados.length; i++) {
        this.app.image(this.arrayMAgregados[i].imagen, 46 + 275 * i, 125);            
      }
    }

    agregarCarro(param){
      if (this.click) {
        this.arrayAgregados.push(this.arrayCarros[param]);
        console.log(this.arrayAgregados);
        this.app.text(this.arrayAgregados,910,290);
      }
    }

    agregarMoto(param){
      this.arrayMAgregados.push(this.arrayMotos[param]);
      console.log(this.arrayMAgregados);
      this.pintarMAgregados();
      this.app.text(this.arrayMAgregados,910,290);
    }

}
