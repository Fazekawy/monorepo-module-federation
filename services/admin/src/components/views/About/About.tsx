import { useState } from "react";

const About = () => {

	const [value, setValue] = useState<number>(0);

	return (
		<div>
			About

			<div className="">
				Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Наш это вершину всемогущая своего там речью бросил букв решила заголовок курсивных, все, осталось составитель путь если семь текст свое.
				Вдали о обеспечивает решила наш свой, большого от всех прямо путь там ipsum заглавных что текста продолжил! Дороге предложения безорфографичный океана безопасную коварных города. Осталось, он но! Снова до встретил но.
				Над живет выйти дал встретил маленькая диких обеспечивает залетают дороге власти свой. Пор предупредила пустился алфавит они всемогущая щеке, жаренные вскоре, рукопись дороге свой ipsum несколько вопрос рекламных гор? Однажды!
				Коварных о, текстов, букв, инициал языкового вопроса дал грустный там ведущими моей своего продолжил заманивший дороге! Рекламных города семантика взгляд. Несколько пояс эта коварных текст! Океана страну маленькая встретил рот.
				Собрал домах толку, необходимыми взгляд пунктуация мир скатился. Пор океана всеми грамматики большой предложения единственное. Гор себя там страну злых осталось ее раз родного, путь океана? Своего правилами свое курсивных.
				Даже лучше ipsum пустился прямо, всеми большой пояс заголовок маленький скатился, решила предупреждал толку послушавшись заманивший составитель продолжил на берегу все встретил от всех коварный. Домах оксмокс заглавных приставка города, даже ipsum?
				Ipsum рукописи языком переписали, имеет ты алфавит гор возвращайся продолжил последний агентство над. Безопасную рыбными меня вскоре переписали но от всех родного ее города. Безорфографичный, назад текст живет проектах вдали даль!
				Заманивший меня, ему даже своих деревни не власти возвращайся. Заголовок большого первую ее, не lorem путь напоивший составитель имени, буквоград от всех несколько приставка сих безопасную рыбными большой снова обеспечивает диких.
				Запятой, запятых своих вершину заголовок, пунктуация эта живет знаках, страна диких пустился если. Вопрос домах страну родного щеке. Пояс, буквоград рот! Великий агентство большого точках его если, продолжил рукописи щеке!
				Дороге продолжил рот наш парадигматическая они? Имеет ее, бросил вскоре там семь напоивший свой переулка? Он ему ты текстов агентство на берегу все, заглавных, прямо снова до одна сих знаках эта.
			</div>

			<h2>Count: {value}</h2>
			<h4><button onClick={() => setValue(state => state + 1)}>change count</button></h4>
		</div>
	)
};


export default About

