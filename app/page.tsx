import { Button, Htag, P } from './components';



export default function Home() {
	return (
		<div>
			<Htag tag="h1">Текст</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost'>Кнопка</Button>
			<P size='m'>АУЕ</P>
		</div>
	);
}
