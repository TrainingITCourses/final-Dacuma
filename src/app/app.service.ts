import { map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  launches: any;

  constructor(public http: HttpClient) { }

  public getStatuses(): Observable<any> {
    return this.http.get('assets/launchstatus.json')
      .pipe(
        map((res: any) => res.types)
      );
  }

  public getLaunches(): Observable<any> {
    if (this.launches) { return of(this.launches); }

    return this.http.get('assets/launchlibrary.json').pipe(
      map((items: any) => {
        const result = items.launches;
        this.launches = result.map(r => this.resLaunches(r));
        return this.launches;
      }, error => console.error(error)),
    );
  }

  public getLaunchById(id): Observable<any> {

    return this.getLaunches()
      .pipe(
        map((res: any) => res.filter(launch => Number(launch.id) === Number(id))[0])
      );
  }

  resLaunches(item) {
    return {
      'id': item.id,
      'name': item.name,
      'status': item.status,
      'isostart': item.isostart,
      'image': item.rocket.imageURL ? item.rocket.imageURL :
                item.rocket.image ? item.rocket.image : 'https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png',
      'failreason': item.failreason
    };
  }

}
