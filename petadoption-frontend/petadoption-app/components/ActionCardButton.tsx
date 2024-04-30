'use client'
import React from 'react'
import Link from 'next/link'

interface ActionCardButtonProps {
    path: string;
    actionCard: JSX.Element;
}

const ActionCardButton: React.FC<ActionCardButtonProps> = ({ path, actionCard }) => {
    return (
        <Link href={path} style={{textDecoration: 'none'}}>
                {actionCard}
        </Link>
    );
};

export default ActionCardButton