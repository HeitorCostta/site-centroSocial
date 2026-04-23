import Esporte from "../../public/images/Ariel.jpeg"
import Danca from "../../public/images/Danca.jpeg"
import Canto from "../../public/images/Camile.jpeg"
import Culinaria from "../../public/images/Culinaria.jpeg"
import Informatica from "../../public/images/Heitor.jpg"
import KungFu from "../../public/images/Carlos.jpeg"
import Historia from "../../public/images/Aline.jpeg"
import Artesanato from "../../public/images/Paula.jpeg"
// ===== AREAS =====
export const AREAS = [
  {
    icon: "📚",
    color: "#EEF4FB",
    title: "Educação",
    desc: "Oferecendo acesso à educação de qualidade para todos.",
  },
  {
    icon: "💼",
    color: "#FFF8EE",
    title: "Trabalho e Renda",
    desc: "Criando oportunidades para uma renda sustentável.",
  },
  {
    icon: "❤️",
    color: "#FEF0F0",
    title: "Saúde",
    desc: "Levando atendimento de saúde a comunidades carentes.",
  },
  {
    icon: "🏗️",
    color: "#EDFBF4",
    title: "Infraestrutura",
    desc: "Construindo estruturas essenciais para uma vida melhor.",
  },
];

// ===== PROJECTS =====
export const PROJECTS = [
  {
    tag: "Esporte",
    title: "Esporte e Disciplina",
    desc: "Atividades esportivas que promovem saúde, trabalho em equipe e disciplina para as crianças.",
    image: Esporte,
  },
  {
    tag: "Dança",
    title: "Expressão Corporal",
    desc: "Aulas de dança que desenvolvem coordenação, autoestima e expressão artística.",
    image: Danca,
  },
  {
    tag: "Informática",
    title: "Inclusão Digital",
    desc: "Ensino de informática básica preparando jovens para o futuro digital.",
    image: Informatica,
  },
  {
    tag: "Canto",
    title: "Música e Voz",
    desc: "Aulas de canto que incentivam talento, confiança e expressão musical.",
    image: Canto,
  },
  {
    tag: "Culinária",
    title: "Oficina de Culinária",
    desc: "Ensino de receitas e práticas culinárias incentivando autonomia e criatividade.",
    image: Culinaria,
  },
  {
    tag: "Histórias",
    title: "Contação de Histórias",
    desc: "Momentos de leitura e imaginação que estimulam o aprendizado e a criatividade.",
    image: Historia,
  },
  {
    tag: "Artesanato",
    title: "Criatividade Manual",
    desc: "Atividades de artesanato que desenvolvem habilidades motoras e criatividade.",
    image: Artesanato,
  },
  {
    tag: "Kung Fu",
    title: "Disciplina e Respeito",
    desc: "Aulas de artes marciais que fortalecem corpo, mente e valores.",
    image: KungFu,
  },
];

// ===== FOOTER =====
export const FOOTER_LINKS = {
  programs: ["Educação", "Trabalho", "Saúde", "Infraestrutura"],
  organization: ["Sobre", "Equipe", "Parceiros", "Contato"],
};

export const SOCIAL_ICONS = ["𝕏", "f", "in", "📷"];

export const NAV_LINKS = [
  { label: "Sobre", href: "#about" },
  { label: "Programas", href: "#areas" },
  { label: "Projetos", href: "#projects" },
  { label: "Notícias", href: "#news" },
];