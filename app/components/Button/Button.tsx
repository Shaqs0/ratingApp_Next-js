import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export function Button ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps) {
	return (
		<button className={cn(styles.button, {
			[styles.primary]: appearance == 'primary',
			[styles.ghost]: appearance == 'ghost',
		})}>
			{children}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down',
				[styles.left]: arrow == 'left',
				[styles.right]: arrow == 'rigth'
			})}>
				<img src='/arrow.svg'></img>
			</span>}
		</button>
	);
}