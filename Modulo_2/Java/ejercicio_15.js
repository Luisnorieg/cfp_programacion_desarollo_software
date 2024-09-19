class Group{
    val=[];
    
    add(value){
        if(!this.has(value)){
            this.val.push(value)
        }
    }
    
    delete(value){
        this.val= this.val.filter(v => v !== value);
    }

    has(value){
        return this.val.includes(value)
    }
    static from(collection) {
        let group = new Group;
        for (let value of collection) {
          group.add(value);
        }
        return group;
    }
}
let group = Group.from([10, 20]);
console.log(group.has(10, 20, 40));

console.log(group.has(30));

group.add(20);
group.delete(20);
console.log(group.has(20));