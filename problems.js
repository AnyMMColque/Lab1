class cadena1{
    constructor(cad){
        this.cad= cad;
    } 
}
class CadenaMan{
    constructor(){
        this.listcad=[]
    }
    addProducts(cadena){
        this.listcad.push(cadena);
    }
    showCadena(){
        return this.listcad;
    }
/*PROBLEMA 1
Dada una matriz de cadenas, devuelve otra matriz que contiene todas sus cadenas más largas.*/
    longCadenaT(cadena){
        var valor1="";
        var mayor=this.longCadena(cadena);
        var pos=this.posmayorCadena(cadena);
        var vector = [];
        var posi = 0;
        for(var y=0; y<cadena.length;y++){
            valor1=cadena[y];
            if((valor1.length == mayor.length))
            {
                vector [posi] = cadena[y]; 
                posi ++;
            }
        }
        return vector;
    }
//Funciones
    longCadena(cadena){
        var str=cadena;
        var long=0;
        var result= null;
        str.forEach(function(str) {
            if(long< str.length){
                long=str.length;
                result=str;
            }    
        });
        return result;
    }
    posmayorCadena(cadena){
        var valor0=this.longCadena(cadena);
        for(var y=0; y<cadena.length;y++){
            var valor2=cadena[y];
            if(valor2.length==valor0.length){
                return y;
            }
        }
    }
}
export{cadena1,CadenaMan}
