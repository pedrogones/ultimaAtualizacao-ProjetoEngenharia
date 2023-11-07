export interface ReceitasMedicas {
  nome: string;
  url: string;
  type: string | null;
  size: number;
  paciente: any | null;
  nomePaciente: string | null;
  idPaciente: number | null;
  pacienteDTO: {
    idPaciente: number;
    nomePaciente: string;
    dataNascPaciente: string | null;
    cpf: string | null;
    sexo: string | null;
    exames: any[] | null;
  } | null;
  medico: any | null;
  medicoDTO: {
    idMedico: number;
    nomeMedico: string;
    especialidadeMedico: string;
    contatoMedico: string;
  };
}
