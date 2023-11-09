export interface PacienteByMedico {
  idPaciente: number;
  nomePaciente: string;
  dataNascPaciente: string;
  cpf: string;
  sexo: string;
  endereco: any | null;
  telCttEmergencia: any | null;
  nomeCttEmergencia: any | null;
  contatoPaciente: any | null;
  exames: any[] | null;
}
