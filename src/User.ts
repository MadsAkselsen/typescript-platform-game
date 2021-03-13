import * as faker from 'faker';
import { Mappable } from './CustomMap';

// 'implements' sets aup a requirement that User must satisfy Mappable.
// this is not neccesary. It just makes debugging typescript easier.
// To test this try and remove one of the properties
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
