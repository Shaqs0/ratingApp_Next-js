
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './layout.module.css';

export default function AboutLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header}/>
			<div>
				<Sidebar className={styles.sidebar}/>
				<div className={styles.body}>
					{children}
				</div>
			</div>
			<Footer className={styles.footer}/>
		</div>
	);
}
