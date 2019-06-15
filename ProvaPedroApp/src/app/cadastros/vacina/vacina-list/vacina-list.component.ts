import { Component, OnInit, ViewChild } from '@angular/core';
import { VacinaService } from './../../vacina.service';
import { Vacina } from '../model/vacina';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { DialogComponent } from '../../../shared/dialog/dialog.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vacina-list',
  templateUrl: './vacina-list.component.html',
  styleUrls: ['./vacina-list.component.css']
})
export class VacinaListComponent implements OnInit {

  public displayedColumns = ['actionsColumn','idvacina', 'animal', 'dtVacina',
   'peso', 'dosagem', 'aplicador', 'descMedicamento'];
  private dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private vacinaService: VacinaService, 
              private router: Router,
              private dialog: MatDialog, 
              private datePipe: DatePipe) {}

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.vacinaService.listAll()
      .subscribe(response => {
        if (response != null) {
          this.dataSource = new MatTableDataSource<Vacina>(response);
          this.dataSource.paginator = this.paginator;          
          this.dataSource.sort = this.sort;
        }
      },
        error => {
        }
      )
  }

  callUpdate(id: number){
    this.router.navigate(['../vacina-edit/'+id]);
  }

  callNew(){
    this.router.navigate(['../vacina']);
  }

  deleteConfirmation(id: number) { 
    let dialogRef = this.dialog.open(DialogComponent, {      
      panelClass: 'custom-dialog',      
      data: 'Confirmar exclusão do registro ?',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(isConfirm => {
        if(isConfirm)
          this.remove(id);    
    }); 
  }

  remove(id : number) {    
    this.vacinaService.remove(id).subscribe(data => {    
      if (data != null)
        this.listAll();
    });
  }

}
