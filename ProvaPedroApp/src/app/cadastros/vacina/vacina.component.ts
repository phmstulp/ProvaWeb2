import { Component, OnInit } from '@angular/core';
import { Vacina } from './model/vacina';
import { VacinaService } from './../vacina.service';
import { ActivatedRoute, Router,  } from '@angular/router';
import { Animal } from './model/animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-vacina',
  templateUrl: './vacina.component.html',
  styleUrls: ['./vacina.component.css']
})
export class VacinaComponent implements OnInit {
  vacina: Vacina;
  edit : boolean;
  animalList: Array<Animal>;

  constructor(private vacinaService: VacinaService, 
    private animalService: AnimalService,
    private activeRoute: ActivatedRoute, 
    public router: Router//, 
    //public spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.vacina = new Vacina();
    this.getAnimalList();
    this.activeRoute.params.subscribe(param => {
      if (param.id != undefined){//verificar se e edição
        this.getById(param.id);
        this.edit = true;
      }        
    });
  }

  getById(id :number){
    this.vacinaService.getById(id).subscribe(sucesso => {
      if (sucesso) 
        this.vacina = sucesso;
    }, error => {
      console.log(error);
    });
  }

  salvar(){
    //this.spinner.show();
    if (!this.edit){
      this.vacinaService.save(this.vacina).subscribe(sucesso => {
        if (sucesso) {
          //this.spinner.hide();
          this.back();
        }
      },
      error => {
        console.log("Erro");
        //this.spinner.hide();
      });
    }else {
      this.vacinaService.update(this.vacina).subscribe(sucesso => {
        if (sucesso){
          //this.spinner.hide();
          this.back();
        }           
      },
      error => {
        console.log("Erro");
        //this.spinner.hide();
      });
    }
  }

  back() {
    this.router.navigate(['../vacina-list']);
  }

  getAnimalList() {
    this.animalService.listAll().subscribe(sucesso => {
      if (sucesso) 
        this.animalList = sucesso;
    }, error => {
      console.log(error);
    });
  }

}
