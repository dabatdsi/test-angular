import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from '../model/employes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

  

  
})

export class HomeComponent implements OnInit {
  id: number=1;
  employes: Employes=new Employes();


  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  gestionEmp(id:number){
    this.router.navigate(['header']);
  }

}
