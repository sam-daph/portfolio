import Image from "next/image"
import { Button } from "./ui/button"

export const SectionHero = () => {
    return (
        <div className="section-hero">
            <div className="section-content">
                <p>Bienvenue sur Samdaph.ai</p>
                <h1><span>PARCOUREZ </span>NOS PERSONNAGES POPULAIRES ICI</h1>
                <Button className="browse">Parcourir Nouveau</Button>
            </div>
            
        </div>
    )
}