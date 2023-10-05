class AstraGroup {
	constructor(countryOrigin) {
		this.countryOrigin = countryOrigin;
	}

	decisionMaking() {
		return `by board of directors that located in ${this.countryOrigin}`;
	}
}

class UnitedTractor extends AstraGroup {
	constructor(countryOrigin, regionSales) {
		super(countryOrigin);
		this.regionSales = regionSales;
	}

	endYearMeeting() {
		console.log(super.decisionMaking());
		return `after BOD meeting we will share the profits in form of devidend`;
	}

	// overriding method
	decisionMaking() {
		console.log(super.decisionMaking());
		return `we meet in every 6 months ${this.regionSales}`;
	}
}

class HondaMotorIndonesia extends AstraGroup {
	constructor(countryOrigin, regionSales) {
		super(countryOrigin);
		this.regionSales = regionSales;
	}

	endYearMeeting() {
		console.log(super.decisionMaking());
		return `after BOD meeting we will share the profits in form of devidend per 6 month`;
	}
}

class KomantsuManufactureIndonesia extends UnitedTractor {
	constructor(countryOfOrigin, regionSales, specialties) {
		super(countryOrigin, regionSales);
		this.specialties = specialties;
	}

	earningMeeting() {
		console.log(super.decisionMaking);
		console.log(super.endYearMeeting);
		return `the performance of ${this.specialties} is very good year.`;
	}
}

// let UT = new UnitedTractor("Indonesia", "SEA");
// console.log(UT.endYearMeeting());

let utOverrading = new UnitedTractor("Indonesia", "SEA");
console.log(utOverrading.decisionMaking());


let HMI = new HondaMotorIndonesia("Indonesia", "SEA");
console.log(HMI.endYearMeeting());
