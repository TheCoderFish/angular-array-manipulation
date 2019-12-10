import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map, mergeMap, take, tap, toArray } from "rxjs/operators";
import { User } from "./user.model";


@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  public users$: Observable<any[]>;

  private _baseUrl: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this._baseUrl = "https://jsonplaceholder.typicode.com";

    this.users$ = this.http.get<User[]>(`${this._baseUrl}/users`).pipe(
      tap((input) => console.log('Input', input)),
      // convert User[] to User
      mergeMap((asIs: User[]) => asIs),
      //Manipulate , Restructure , Filter Object Properties
      map((user: User) => ({
        //Pick the properties you want
        id: user.id,
        username: user.username,
        //Restructure according to your needs
        personal_info: {
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
        // Manipulate , Format , Reduce Logic in Template
        address: `Street : ${user.address.street}, City : ${user.address.city}`
      })),
      // limit the number of entries
      take(5),
      // convert back to User[] , use a different model since we have added properties
      toArray(),
      tap((output) => console.log('Output', output)),
    );
  }
}
