import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Paciente } from '../pacientes/paciente';
import { PacienteService } from '../pacienteService';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-lista-de-pacientes',
  templateUrl: './lista-de-pacientes.component.html',
  styleUrls: ['./lista-de-pacientes.component.scss']
})
export class ListaDePacientesComponent implements OnInit{

  constructor(private elementRef: ElementRef, private sharedService: SharedService, private pacienteService: PacienteService) {
    // ...
  }
  private menu!: MatMenuTrigger
  pacientes = [
    { nome: "Pedro Targino Gomes", idade: 30, sexo: "Masculino" },
    { nome: "Arthur Vieira", idade: 25, sexo: "Masculino" },
    { nome: "João Victor", idade: 28, sexo: "Masculino" },
    { nome: 'Cássio Vittori', idade: 35, sexo: "Masculino" }
  ];
  ngOnInit(): void {
     this.pacientes =this.sharedService.getPacientes();
     console.log(this.pacientes)
  }





  adicionar() {
    // Obtenha os valores dos campos de entrada
    const nomeInput = document.getElementById('nome') as HTMLInputElement;
    const idadeInput = document.getElementById('lIdade') as HTMLInputElement;
    const sexoInput = document.getElementById('lSexo') as HTMLInputElement;

    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const sexo = sexoInput.value;

    // Adicione uma nova linha à tabela
    const tabela = this.elementRef.nativeElement.querySelector('#tabela');
    const newRow = tabela.insertRow(tabela.rows.length);

    // Insira os valores nos campos da nova linha
    const cell1 = newRow.insertCell(0);
    cell1.classList.add('table-cell');
    const cell2 = newRow.insertCell(1);
    cell2.classList.add('table-cell');
    const cell3 = newRow.insertCell(2);
    cell3.classList.add('table-cell');
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = nome;
    cell2.innerHTML = idade;
    cell3.innerHTML = sexo;

    // Adicione um botão "Remover" na quarta coluna
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => {
      // Adicione aqui a lógica para remover a linha quando o botão "Remover" for clicado
      tabela.deleteRow(newRow.rowIndex);
    });
    cell4.appendChild(removeButton);

    // Feche o modal
    this.fecharModal();
  }

  removerPaciente(paciente: any) {
    // Encontre o índice do paciente no array de pacientes
    const index = this.pacientes.indexOf(paciente);

    if (index !== -1) {
      // Remove o paciente do array de pacientes
      this.pacientes.splice(index, 1);
    }
  }
  adicionarPaciente() {
    const modal = this.elementRef.nativeElement.querySelector('#modal');
    modal.style.display = 'block';
  }

  fecharModal() {
    const modal = this.elementRef.nativeElement.querySelector('#modal');
    modal.style.display = 'none';
  }

}

