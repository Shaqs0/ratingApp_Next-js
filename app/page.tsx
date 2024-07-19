import { Button, Htag, P, Tag } from './components';



export default function Home() {
	return (
		<div>
			<Htag tag="h1">Текст</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost'>Кнопка</Button>
			<P size='m'>АУЕ</P>
			<Tag size='m' color='red'>F</Tag>
			<Tag size='m' color='ghost'>F</Tag>
		</div>
	);
}
