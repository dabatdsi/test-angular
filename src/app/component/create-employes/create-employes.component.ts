import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from '../../model/employes';
import { EmployesService } from '../../service/employes.service';

@Component({
  selector: 'app-create-employes',
  templateUrl: './create-employes.component.html',
  styleUrls: ['./create-employes.component.css']
})
export class CreateEmployesComponent implements OnInit {
  employes : Employes = new Employes();

  constructor(private employesService : EmployesService ,
     private router: Router ) { }

  ngOnInit(): void {
  }
  ///ajouter un employes
  saveEmployes(){
    this.employesService.createEmployes(this.employes).subscribe(data =>{
      console.log(data);
      this.goToEmployesList();
    },
    error => console.log(error));
  }
  /// redirection vers la liste des employes
  goToEmployesList(){
    this.router.navigate(['/employes']);
   

  }

  onSubmit(){
    console.log(this.employes);
    this.saveEmployes()
    
  }

}
