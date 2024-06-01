'use client'
import React from 'react'
import Link from 'next/link'

interface ActionCardButtonProps {
    path: string;
    actionCard: JSX.Element;
}

const ActionCardBtn: React.FC<ActionCardButtonProps> = ({ path, actionCard }) => {
    return (
        <Link href={path} style={{textDecoration: 'none'}}>
                {actionCard}
        </Link>
    );
};

export default ActionCardBtn