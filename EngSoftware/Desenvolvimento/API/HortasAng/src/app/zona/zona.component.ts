import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { ZonaService } from '../zona.service';  
import { Zona } from '../zona';  

@Component({
  selector: 'app-zona',
  templateUrl: './zona.component.html',
  styleUrls: ['./zona.component.css']
})
export class ZonaComponent implements OnInit {
  dataSaved = false;  
  zonaForm: any;  
  allZonas!: Observable<Zona[]>;  
  zonaIdUpdate = -1;  
  message = "";  
  constructor(private formbulider: FormBuilder, private zonaService:ZonaService) { }

  ngOnInit() {
      this.zonaForm = this.formbulider.group({  
      Descrição: ["", [Validators.required]]
    });  
    this.loadAllZonas(); 
    //this.zonaService.list().subscribe((zonas: Zona[]) => {
      // (4) Store
      //this.allZonas = zonas; 
  }
  loadAllZonas() {  
    this.allZonas = this.zonaService.GetZonas();  
  } 
  onFormSubmit() {  
    this.dataSaved = false;  
    const zona = this.zonaForm.value;  
    this.createZona(zona);  
    this.zonaForm.reset();  
  } 
  createZona(zona: Zona) {  
    if (this.zonaIdUpdate == -1) {  
      this.zonaService.PutZona(zona).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = 'Registo guardado com sucesso';  
          this.loadAllZonas();  
          this.zonaIdUpdate = -1;  
          this.zonaForm.reset();  
        }  
      );  
    } else {  
        zona.Id = this.zonaIdUpdate;  
        this.zonaService.updateZona(this.zonaIdUpdate,zona).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'Registo atualizado com sucesso';  
        this.loadAllZonas();  
        this.zonaIdUpdate = -1;  
        this.zonaForm.reset();  
      });  
    }  
  }  
  loadZonaToEdit(zonaid: number) {  
    this.zonaService.getZonaById(zonaid).subscribe(zona=> {  
      this.message = "";  
      this.dataSaved = false;  
      this.zonaIdUpdate = zona.Id;  
      this.zonaForm.controls['Descricao'].setValue(zona.Descricao); 
    });    
  }  
  deleteZona(zonaid: number) {  
    if (confirm("Deseja realmente deletar este zona ?")) {   
      this.zonaService.deleteZonaById(zonaid).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'Registo eliminado com sucesso';  
        this.loadAllZonas();  
        this.zonaIdUpdate = -1;  
        this.zonaForm.reset();  
      });  
    }  
  }  
  resetForm() {  
    this.zonaForm.reset();  
    this.message = "";  
    this.dataSaved = false;  
  } 

}
