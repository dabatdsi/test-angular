import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterConfigurationFeature, Router } from '@angular/router';
import { Employes } from 'src/app/model/employes';
import { EmployesService } from 'src/app/service/employes.service';

@Component({
  selector: 'app-employes-details',
  templateUrl: './employes-details.component.html',
  styleUrls: ['./employes-details.component.css']
})
export class EmployesDetailsComponent implements OnInit {
  id: number=1;
  employes: Employes=new Employes();

  constructor( private route: ActivatedRoute , private employesService: EmployesService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employes = new Employes();
    this.employesService.getEmployesById(this.id).subscribe(data =>{
      this.employes=data;
      

    });
  }
  retourEmployes(id:number){
    this.router.navigate(['employes']);

  }

}
