import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}  

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/enterprise`);
  }

  getByName(name: string) :Observable<any>{
    return this.http.get(`${this.apiUrl}/enterprise/name/${name}`);
  }

  getEnterprisesByCompany(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/enterprise`);
  }

  getGeneralTotals() :Observable<any>{
    return this.http.get(`${this.apiUrl}/totals`);
  }
}
