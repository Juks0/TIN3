class SimRacingEquipment {
    constructor(brand, model) {
        this._brand = brand;
        this._model = model;
    }

    get brand() {
        return this._brand;
    }

    set brand(newBrand) {
        if (newBrand.length > 0) {
            this._brand = newBrand;
        } else {
            console.error("Brand cannot be empty.");
        }
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        if (newModel.length > 0) {
            this._model = newModel;
        } else {
            console.error("Model cannot be empty.");
        }
    }

    describe() {
        return `This simracing equipment is a ${this.brand} ${this.model}.`;
    }
}