import * as faker from 'faker';
import { Mappable } from './CustomMap';

// 'implements' sets aup a requirement that User must satisfy Mappable.
// this is not neccesary. It just makes debugging typescript easier.
// To test this try and remove one of the properties
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div>
              <h1>${this.companyName}</h1>
              <h3>${this.companyName}</h3>
            </div>`;
  }
}
