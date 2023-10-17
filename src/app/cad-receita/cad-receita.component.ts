import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cad-receita',
  templateUrl: './cad-receita.component.html',
  styleUrls: ['./cad-receita.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule, MatIconModule],
})

export class CadReceitaComponent {

  constructor(private sharedService : SharedService){}
  value = 'Limpar';

  redirectPerfilMedico(){
    this.sharedService.redirectHomeMedico()
  }

}
