import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-prontuario-medico',
  templateUrl: './prontuario-cadastrado.component.html',
  styleUrls: ['./prontuario-cadastrado.component.scss']
})
export class ProntuarioCadastradoComponent  {

  constructor(private sharedService: SharedService){
  }
  //campos do prontuário:
  nomePaciente!:string;
  idadePaciente!:string
  contatoPaciente!:string;
  rgPaciente!:string;
  doencasPaciente!:string
  alergiaPaciente!:string;
  historicoPaciente!:string
  sexo!:string
  options: string[] = ['Feminino', 'Masculino',  'Não Informar'];
  myControl = new FormControl('');
  filteredOptions!: string[];
  

  filter(inputElement: HTMLInputElement): void {
    const filterValue = inputElement.value.toLowerCase();
    this.sexo = inputElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }
  redirectHomeMedico(){
    this.sharedService.redirectHomeMedico()
  }
  enviar(){
    // aqui tu pode pegar as info e jogar no database
  console.log(this.nomePaciente)
  console.log(this.idadePaciente)
  console.log(this.contatoPaciente)
  console.log(this.sexo)
  console.log(this.rgPaciente)
  console.log(this.doencasPaciente)
  console.log(this.alergiaPaciente)
  console.log(this.historicoPaciente)
  }

}
