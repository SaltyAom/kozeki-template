export interface DoroProps {
    /**
     * dororong
     */
    variant?: 'small' | 'medium'
}

export function Doro({ variant = 'medium' }: DoroProps) {
    return (
        <img
            className={variant === 'small' ? 'w-24' : 'w-48'}
            src="https://cdn.shopify.com/s/files/1/0445/3357/9943/files/goddess-of-victory-nikke-doro-dorothy-complete-figure-good-smile-arts-shanghai-figurine-yattajapan.jpg"
            alt="Doro character figure"
        />
    )
}
