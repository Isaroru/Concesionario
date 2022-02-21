class Carro extends Vehiculo{
    constructor(modelo, serie, marca, cilindraje, numPasajeros,garantia, promImpuestos, cajaCambios, consumGasolina, gasolina,imagen,imagenDet){
        super(modelo, serie, marca, cilindraje, numPasajeros,garantia, promImpuestos, cajaCambios, consumGasolina, gasolina,imagen,imagenDet);
    }
    detalles(){
        return 'Marca: ' + this.marca + ' Modelo: ' + this.modelo + '\nSerie: ' + this.serie + ' N° Pasajeros: ' + this.numPasajeros 
        + '\nCilindraje: ' + this.cilindraje + '\nCaja de cambios: ' + this.cajaCambios + '\nTipo de gasolina: ' + this.gasolina + '\nConsumo: ' + this.consumGasolina +
        '\nGarantía: ' + this.garantia + '\nPromedio impuestos: ' + this.promImpuestos;
    }
}