export interface IUpdateDevDTO {
  id: string;
  nome: string;
  sexo: "M" | "F";
  idade: number;
  hobby: string;
  datanascimento: Date;
}
