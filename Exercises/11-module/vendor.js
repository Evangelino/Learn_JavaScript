

export class Vendor{
    constructor(id, name, contactNumber){
        this.id = id;
        this.name = name;
        this.contactNumber = contactNumber;
    }

    getVendor(){
        return this.name + " (" + this.contactNumber + ")";
    }
}
