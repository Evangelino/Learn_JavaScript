

export class Category {
    constructor(code, name){
        this.code = code;
        this.name = name;
    }
    getCategories(){
        return this.name + " sold by:"; 
    }   

}