import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export function Tag ({ size = 'm', children, color = 'ghost', href, ...props }: TagProps) {
	return (
		<div className={cn(styles['tag'], styles[size], styles[color])}
			{...props}
		>
			{href ? <a href={href}>{children}</a>
				: <>{children}</>}

		</div>
	);
}