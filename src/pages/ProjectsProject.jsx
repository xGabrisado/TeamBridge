import ProjetosProjeto from "../components/Projeto/ProjetosProjeto";

export default function ProjectsProjectPage() {
  return <ProjetosProjeto />;
}

export async function loader({ params }) {
  console.log(params);
  return "this";
}
