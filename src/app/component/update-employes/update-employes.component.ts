import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employes } from '../../model/employes';
import { EmployesService } from '../../service/employes.service';

@Component({
  selector: 'app-update-employes',
  templateUrl: './update-employes.component.html',
  styleUrls: ['./update-employes.component.css']
})
export class UpdateEmployesComponent implements OnInit {

  id: number=1 ;
  employes: Employes = new Employes();

  constructor( private employesService: EmployesService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.id= this.route.snapshot.params['id'];
    this.employesService.getEmployesById(this.id).subscribe(data =>{
         console.log(data)
        this.employes = data;
        }, error => console.log(error));
  }

  /*  updateEmployes() {
    this.employesService.updateEmployes(this.id,this.employes)
    .subscribe(data =>{
      console.log(data)
      // this.employes=new Employes();
      this.goToEmployesList();
    },error => console.log(error));

  }   */

   onSubmit(){
    this.employesService.updateEmployes(this.id, this.employes).subscribe(data =>{
      this.goToEmployesList();
    },error => console.log(error));
    
  } 
  goToEmployesList(){
    this.router.navigate(['/employes']);



}


}