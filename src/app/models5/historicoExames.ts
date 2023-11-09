export interface HistoricoExames {
  [x: string]: any;
  nome: string;
  url: string;
  type: string | null;
  size: number;
  paciente: any; // Aqui você pode definir uma interface para "paciente" se necessário
  nomePaciente: string | null;
  idPaciente: number | null;
  pacienteDTO: {
    idPaciente: number;
    nomePaciente: string;
    dataNascPaciente: string | null;
    cpf: string | null;
    sexo: string | null;
    endereco: string | null;
    telCttEmergencia: string | null;
    nomeCttEmergencia: string | null;
    contatoPaciente: string | null;
    exames: any[]; // Aqui você pode definir uma interface para "exames" se necessário
  };
  medico: any; // Aqui você pode definir uma interface para "medico" se necessário
  medicoDTO: any; // Aqui você pode definir uma interface para "medicoDTO" se necessário
}
