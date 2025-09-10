import type IReceita from "@/interface/IReceita";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>('https://raw.githubusercontent.com/giolacerda/receitas-json/main/receitas.json');
}