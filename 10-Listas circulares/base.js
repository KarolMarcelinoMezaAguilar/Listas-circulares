export default class Base{
    constructor(name, minutes){
        this.name=name;
        this.minutes=minutes;
        this.next=null;
        this.previous=null;
    }

    getName(){
        return this.name;
    }

    getMinutes(){
        return this.minutes;
    }

    delInfo() {
        return `<div>
                    <p>Nombre: "${this.getName()}"</p>                    
                    <p>Minutos: ${this.getMinutes()}</p>                                  
                </div>`;
    }

    info() {
        return `<div>
                    <p>Nombre: "${this.getName()}"</p>                    
                    <p>Minutos laborales: ${this.getMinutes()}</p>
                    <p>Anterior: ${this.previous.getName()}</p>
                    <p>Siguiente: ${this.next.getName()}</p>                    
                </div>`;
    }

    cardInfo(hour, minutes) {
        return `<div>
                    <p>Base actual: ${this.getName()}</p>
                    <p>Hora de llegada: ${hour}</p>
                    <p>Minutos restantes: ${minutes}</p>                                 
                </div>`;
    }
}