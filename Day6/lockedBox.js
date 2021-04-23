const box  = {
    locked: true,
    unlock() {this.locked = false;},
    lock() {this.locked = true;},
    _content:[],
    setContent(list){
        for(let i=0; i<list.length;i++) {
            this._content[i] = list[i];
        }
    },
    get content() {
        if(this.locked) throw new Error("Locked!");
        return this._content;
    }

};

let key = box.unlock();

function withBoxUnlocked(key){
key();
let names = ['Ghost',  'Alien', 'Destructor'];
box.setContent(names);
let res = box.content;
console.log(res);
}

withBoxUnlocked(box.unlock);
