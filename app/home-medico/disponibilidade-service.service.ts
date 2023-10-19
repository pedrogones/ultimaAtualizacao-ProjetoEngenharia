import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadeService {
  private disponibilidadeSubject = new BehaviorSubject<string[]>([]);
  disponibilidade$ = this.disponibilidadeSubject.asObservable();
  constructor() {}

}
