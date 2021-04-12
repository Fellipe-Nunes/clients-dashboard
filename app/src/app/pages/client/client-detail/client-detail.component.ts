import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { ClientService } from 'src/app/services/client.service';

@Component({
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('inputSearch', {static: false}) inputSearch: ElementRef;

  public loading: boolean = true;
  public client: any = {};
  public totals: any = {};
  public enterprises: any[] = [];


  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    const id = +this.route.snapshot.paramMap.get('_id');

    this.getClinet(id);
    this.getTotals(id);
    this.getEnterprises(id);
  }

  ngAfterViewInit(): void {
    
    const id = +this.route.snapshot.paramMap.get('_id');

    fromEvent(this.inputSearch.nativeElement, 'keyup')
            .pipe(
              filter(Boolean),
              debounceTime(600),
              distinctUntilChanged(),
              tap(
                () => {
                  const value = this.inputSearch.nativeElement.value;
                  this.loading = true;
                  if(value && value.replace(/ +/, '')){
                    this.getEnterprisesByName(id, this.inputSearch.nativeElement.value.trim())
                  }
                  else{
                    this.getEnterprises(id);
                  }
                }
              )
            )
            .subscribe();
  }

  private getClinet(id: number){
    this.clientService.getById(id)
        .subscribe(
          response => {
            this.client = response
            this.loading = false;
          },
          error => {
            console.log(error)
            this.loading = false;
          }
        )
  }

  private getTotals(id: number){
    this.clientService.getTotalsByCompany(id)
        .subscribe(
          response => this.totals = response,
          error => console.log(error)
        )
  }

  private getEnterprises(id: number){
    this.clientService.getEnterprisesByCompany(id)
        .subscribe(
          response => {
            this.enterprises = response
            this.loading = false;
          },
          error => {
            console.log(error)
            this.loading = false;
          }
        )
  }

  private getEnterprisesByName(id: number, name: string){
    this.clientService.getEnterprisesCompanyByName(id, name)
                                      .subscribe(
                                        response => {
                                          this.enterprises = response;
                                          this.loading = false;
                                        },
                                        error => {
                                          console.log(error),
                                          this.loading = false;
                                        }  
                                      );
  }

}
