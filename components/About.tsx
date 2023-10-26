import Link from "next/link";

const paragraphs = [
  "Eu sou Matheus, tenho 20 anos e moro atualmente em São Paulo. Nas horas livres gosto de desenhar, fazer academia, jogar videogames.",
  "Minha história com tecnologia começa desde pequeno. Com 5 anos eu já abria computadores pra arrumar peças, fazer formatação nos computadores em Windows, devido ao meu pai e meu irmão mais velho me ensinar; então tudo isso fez eu ter bastante proximidade com tecnologia.",
  "Conheci o UX/UI Design em 2021 e me apaixonei de primeira pela área, porque juntou tudo que eu gosto; tecnologia, desenho e conversar com pessoas. Depois disso fiquei um ano inteiro estudando a área e a importância dela para o mercado de trabalho e isso aflorou mais meu interesse pelo UX e todo background por trás que existe.",
  "Em 2022, no mês de outubro comecei a fazer um curso de User Experience & User Interface e estou até hoje estudando e aprimorando minhas habilidades como UX Designer para criar experiências e soluções para todos!",
];

export function About() {
  return (
    <section className="w-full p-4">
      <hr className="border-gray-600 my-4 mx-auto max-w-[90%]" />
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-[648px] h-auto flex flex-col items-center md:items-start md:justify-center p-4 md:p-0">
          <h2 className="text-4xl md:text-5xl font-semibold text-white text-center md:text-left mb-4 md:mb-8">
            “Se um usuário tem um problema, então nós temos um problema” - Steve
            Jobs
          </h2>
          <Link
            href="/about"
            className="uppercase text-white font-bold border-4 border-[#00FFBD] px-8 md:px-[56px] py-4 md:py-[16px] inline-block mx-auto"
          >
            Curriculo
          </Link>
        </div>

        <div className="w-full md:w-[40%] mt-8 md:mt-0">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-white text-lg md:text-xl font-medium my-4 md:my-6 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <hr className="border-gray-600 my-4 mx-auto max-w-[90%]" />
    </section>
  );
}
