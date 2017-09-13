import { Observable } from 'rxjs/Observable';
import { Passenger } from '../entities/passenger';

export abstract class AbstractPassengerService {
  abstract find(name: string, firstName: string): Observable<Passenger[]>;
}
