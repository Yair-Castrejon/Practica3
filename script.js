class Personaje{
    constructor(nombre, forma, posicion){
        this.nombre=nombre;
        this.forma=forma;
        this.posicion=posicion;
    }

    obtDetalles() {
        document.getElementById('infoP').innerHTML= "<h1>Data: " + this.nombre+" "+this.forma+" "+this.posicion+"!</h1>";
    }
    
}

class Ave extends Personaje{
    constructor(habilidad, masa, nombre, forma, posicion){
        super(nombre, forma, posicion);
        this.habilidad=habilidad;
        this.masa=masa;
    }
    obtDetalles(){
        super.obtDetalles();
    }
    volar(){
        alert("Not yet implemented <3");
    }
}

class Pig extends Personaje{
    constructor(fortaleza, puntos, nombre, forma, posicion){
        super(nombre, forma, posicion);
        this.fortaleza=fortaleza;
        this.puntos=puntos;
    }
    obtDetalles(){
        super.obtDetalles();
    }
    Morir(){
        alert("Piggy dieded <3");
    }
}


 let hpH = new Ave("Duplicar",100,"Juancho","Gordo",100);
 let hpH2 = new Ave("Duplicar",100,"Pancho","Alto",200);
 let hpH3 = new Ave("Duplicar",100,"Fancho","Pajaro",300);
 let hpE = new Pig(100,100,"Mar","Chaparro",-100);
 let hpE2 = new Pig(100,100,"Zar","Ojon",-200);
 let hpE3 = new Pig(100,100,"Par","Cerdo",-300);


 function attackH(){
     hpH.volar();
     hpH.obtDetalles();
}
function attackE(){
    hpE.Morir();
    hpE.obtDetalles();
}


// function attackH(){
//     if(hpH.life>0){
//         var direccion= document.getElementById('liE');
//         hpE.life-=20;
//         if(hpE.life<=0){
//             hpE.life =0;
//             direccion.innerHTML="<H1> 0 %</H1>";
//         } 
//         direccion.innerHTML="<H1>"+ hpE.life +"%</H1>";
        
//     }
//     if(hpE.life==0) win();
// }
// function attackE(){
//     if(hpE.life>0){
//         var direccion= document.getElementById('liH');
//         hpH.life-=20;
//         if(hpH.life<=0){
//             direccion.innerHTML="<H1> 0 %</H1>";
//         } 
//         direccion.innerHTML="<H1>"+ hpH.life +"%</H1>";
        
//     }
//     if(hpH.life==0) win();
// }

// function win(){
//     if(hpH.life==0){
//         var direccion= document.getElementById('liH');
//         direccion.innerHTML="<H1> 0 %</H1>";
//         setTimeout(function(){
//             alert('Enemy wins!');
//             window.location.reload(false);
//         }, 2000);
//     }
//     if(hpE.life==0){
//         var direccion= document.getElementById('liE');
//         direccion.innerHTML="<H1> 0 %</H1>";
//         setTimeout(function(){
//             alert('Hero wins!');
//             window.location.reload(false);
//         }, 50);
//     }
// }