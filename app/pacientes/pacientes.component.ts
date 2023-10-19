import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Paciente } from './paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  @Input() courses : Paciente[]=[];
  @Output() add = new EventEmitter(true);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);
  readonly displayedColumns = ['_id', 'name', 'usuario', 'idade', 'alergico', 'contato', 'infoadd'];

  private readonly API = '/api/paciente';
  private pacienteSubscription!: Subscription;
  str: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    // Fazer a requisição para a API
    this.pacienteSubscription = this.http.get<Paciente>(this.API).subscribe(
      (data) => {
        // Atribuir os dados da requisição à propriedade `str`
        this.str = data;
        console.log(this.str); // Adicione esta linha para verificar os dados
      },
      (error) => {
        console.error('Erro ao buscar os dados do paciente', error);
      }
    );
  }
  ngOnDestroy() {
    if (this.pacienteSubscription) {
      this.pacienteSubscription.unsubscribe();
    }
  }

}
