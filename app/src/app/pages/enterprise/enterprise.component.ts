import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, tap } from "rxjs/operators";
import { EnterpriseService } from "src/app/services/enterprise.service";

@Component({
  templateUrl: "./enterprise.component.html",
  styleUrls: ["./enterprise.component.scss"],
})
export class EnterpriseComponent implements OnInit, AfterViewInit {
  
  @ViewChild('inputSearch', {static: false}) inputSearch: ElementRef;

  public loading: boolean = true;
  public enterprises: any[] = [];
  public totals: any = {};

  constructor(private enterpriseService: EnterpriseService) {}

  ngOnInit(): void {
    this.getEnterprises();
    this.getTotals();    
  }

  ngAfterViewInit(): void {
    
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
                    this.getEnterprisesByName(this.inputSearch.nativeElement.value.trim())
                  }
                  else{
                    this.getEnterprises();
                  }
                }
              )
            )
            .subscribe();
  }

  private getEnterprises(){
    this.enterpriseService.getAll()
    .subscribe(
      response => {
        this.enterprises = response
        this.loading = false;
      },
      error => {
        console.log(error)
        this.loading = false;
      }
    );
  }

  private getTotals(){
    this.enterpriseService.getGeneralTotals()
        .subscribe(
          response => this.totals = response,
          error => console.log(error)
        );
  }

  private getEnterprisesByName(name: string){
    this.enterpriseService.getByName(name)
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