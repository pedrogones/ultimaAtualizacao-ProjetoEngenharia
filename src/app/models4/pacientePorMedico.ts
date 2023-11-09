export interface PacientesDoMedico {
  idPaciente: number;
  nomePaciente: string;
  dataNascPaciente: string;
  cpf: string;
  sexo: string;
  exames: any[] | null; // Dependendo do tipo real dos exames, você pode ajustar o tipo aqui
}
