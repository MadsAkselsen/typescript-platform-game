import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// this won't run using nodemon because the google library is imported
// in the index.html and therefore runs before everything else.
// the google library therefore doesnt exist to nodemon.
// A possible fix is to instead npm install the library
// and then import it in in the CustomMap.ts file
export function googleMapsProject() {
  const user = new User();
  const company = new Company();
  const customMap = new CustomMap('map');

  customMap.addMarker(user);
  customMap.addMarker(company);
}
