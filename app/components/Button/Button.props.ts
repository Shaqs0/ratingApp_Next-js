import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'rigth' | 'down' | 'left' | 'none';
}

