export default class List{
    constructor(){
        this.start=null;
        this.length=0;
    }

    add(base){
        if(this.start===null){
            this.start=base;
            base.next=this.start;
            base.previous=this.start;
            console.log("agregado nuevo");
            this.length++;
        } else {
            let last=this.start.previous;
            base.next=this.start;
            base.previous=last;
            last.next=base;
            this.start.previous=base;
            console.log("agregado despues de nuevo");
            this.length++;
        }

    }

    delete(base){
        let del;
        let last;
        let next;

        if(!this.start){
            return null;
        } else if(this.start.getName() === base && this.length===1) {
            del=this.start;
            this.start=null;
            del.next=null;
            del.previous=null;
            this.length--;
            return del;
        } else if(this.start.getName() === base){
            del= this.start;
            last= del.previous;
            next=del.next;
            this.start=next;
            this.start.previous=last;
            last.next=this.start;
            del.previous=null;
            del.next=null;
            this.length--;
            return del;
        } else{
            let prev=this.start;
            let curr=this.start.next;
            while(curr !== this.start){
                if(curr.getName() === base && curr.next === this.start){
                    del=curr;
                    next=del.next;
                    prev.next=next;
                    next.previous=prev;
                    del.next=null;
                    del.previous=null;
                    this.length--;
                    return del;
                } else if(curr.getName() === base){
                    del=curr;
                    next=del.next;
                    prev.next=next;
                    next.previous=prev;
                    del.next=null;
                    del.previous=null;
                    this.length--;
                    return del;
                } else{
                    prev.curr;
                    curr.curr.next;
                }
            }

            return null;

        }
    }

    list(){
        let txt='';
        let base=this.start;

        if(!base){
            txt= 'No hay ninguna base registrada.';
            return txt;
        } else{
            do{
                txt += base.info() + '\n' + '------------------------------';
                base=base.next;
            }while(base != this.start);
        }
        return txt;
    }

    createCard(base, hour, minutes) {
        let card = '';   
        let minHour = 0;
        let find = this._search(base);

        if(!find) {
            return null;;
        } else {
            while(minutes >= 0) {
                card += find.cardInfo(this._getHour(hour, minHour), minutes) + '\n' + '------------------------------';               
                minHour += find.next.getMinutes();
                minutes -= find.next.getMinutes();
                find = find.next;
            }
            return card;
        }   
    }

    _search(nameBase) {
        let base = this.start;

        if(!base) {
            return null;
        }

        do {
            if(base.getName() === nameBase) {
                return base;
            } else {
                base = base.next;
            }
        } while(base !== this.start);
        return null;  
    }

    _getHour(hour, minutes) {
        let hourToMinutes = ((hour * 60) + minutes)/60;
        let totalHours = Math.trunc(hourToMinutes);
        let lessMinutes = Math.round((hourToMinutes - totalHours)*60);

        if(lessMinutes < 10) {
            return `${totalHours}:0${lessMinutes}`;
        } else {
            return `${totalHours}:${lessMinutes}`;
        }   
    }
    
}