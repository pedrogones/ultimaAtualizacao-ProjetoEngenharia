import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  mostrarInicio = true;
  mostrarBeneficios = false;
  mostrarDepoimentos = false;

  @ViewChild('menuButton')
  menuButton!: MatMenuTrigger;
  constructor(private sharedService: SharedService){

  }

  ngOnInit(): void {

  }

  redirectCadastro(){
    this.sharedService.redirectCadastro();
  }

  redirectHome(){
    this.sharedService.redirectHome();
  }
  redirectMedici(){
    this.sharedService.redirectVerMedico();
  }
  redirectLogin(){
    this.sharedService.redirectLogin();
  }
  toggleMenu() {
   // this.sharedService.toggleMenu();// Abre o menu ao clicar no ícone do menu
   this.menuButton.openMenu(); // Abre o menu ao clicar no ícone do menu
  }
  //mostrar card
  mostrarDialog = false;
  ifTrue = false
  redirectProntuario(){
   this.sharedService.redirectProntuario();
  }
  redirectCadastroMedico(){
    this.sharedService.redirectCadastroMedico()
  }


}
