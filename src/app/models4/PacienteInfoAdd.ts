export interface PacienteInfoAdd {
  idPaciente: {
    idPaciente: number;
  };
  doencasAnteriores: string;
  doencasCronicas: string;
  alergias: string;
  cirurgiasAnteriores: string;
  medicacoesAtuais: string;
  medicacoesAnteriores: string;
}
