import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/`);
  }

  getById(id: number) :Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getByName(name: string) :Observable<any>{
    return this.http.get(`${this.apiUrl}/name/${name}`);
  }

  getGeneralTotals() :Observable<any>{
    return this.http.get(`${this.apiUrl}/totals`);
  }

  getTotalsByCompany(id: number) :Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}/totals`);
  }

  getEnterprisesByCompany(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/enterprise`);
  }

  getEnterprisesCompanyByName(id: number, name: string) :Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}/enterprise/name/${name}`);
  }

}