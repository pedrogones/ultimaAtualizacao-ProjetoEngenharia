import { SharedService } from './../shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.scss']
})
export class ProntuarioComponent {

  constructor(private sharedService : SharedService){}

  redirectPerfilMedico(){
    this.sharedService.redirectHomeMedico()
  }

}
