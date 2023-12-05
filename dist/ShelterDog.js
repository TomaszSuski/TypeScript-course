import Dog from "./Dog";
export default class ShelterDog extends Dog {
    shelter;
    constructor(name, breed, age, shelter) {
        super(name, breed, age);
        this.shelter = shelter;
    }
}
//# sourceMappingURL=ShelterDog.js.map