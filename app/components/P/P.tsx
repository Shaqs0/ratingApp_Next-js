import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export function P ({ size = 'm', children, className }: PProps) {
	return (
		<p
			className={cn(styles.text, className, styles[size])}>
			{children}
		</p>
	);
}