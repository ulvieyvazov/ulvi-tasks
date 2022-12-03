function Car(model, year, company, owner) {
    this.model = model
    this.year = year
    this.company = company
    this.owner = owner
    this.drive = () => {
        console.log(`${owner} is driving ${model}.`);
    }
}
const car = new Car('M8', '2021', 'BMW', 'ulvi')
console.log(car);

car.drive()

