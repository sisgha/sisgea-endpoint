import { EnderecoInput } from "@ladesa-ro/especificacao";
import * as yup from "yup";

export const GetEnderecoInputSchema = () => {
  return yup
    .mixed<EnderecoInput>()
    .test(() => {
      console.warn("GetEnderecoInputSchema");
      return true;
    })
    .required()
    .nonNullable();
};
