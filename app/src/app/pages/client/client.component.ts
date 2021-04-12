import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, tap } from "rxjs/operators";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit, AfterViewInit {
  
  @ViewChild('inputSearch', {static: false}) inputSearch: ElementRef;

  public loading: boolean = true;
  public clients: any[] = [];
  public totals: any = {};

  constructor(
    private clientService: ClientService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.getClients();
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
                    this.getClientsByName(this.inputSearch.nativeElement.value.trim())
                  }
                  else{
                    this.getClients();
                  }
                }
              )
            )
            .subscribe();
  }

  public openClient(client: any){
    this.router.navigateByUrl(`client/${client._id}`)
  }

  private getClients(){
    this.clientService.getAll()
    .subscribe(
      response => {
        this.clients = response
        this.loading = false;
      },
      error => {
        console.log(error)
        this.loading = false;
      }
    );
  }

  private getTotals(){
    this.clientService.getGeneralTotals()
        .subscribe(
          response => this.totals = response,
          error => console.log(error)
        );
  }

  private getClientsByName(name: string){
    this.clientService.getByName(name)
                      .subscribe(
                        response => {
                          this.clients = response;
                          this.loading = false;
                        },
                        error => {
                          console.log(error),
                          this.loading = false;
                        }  
                      );
  }
}