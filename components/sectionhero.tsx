import Image from "next/image"
import { Button } from "./ui/button"

export const SectionHero = () => {
    return (
        <div className="section-hero">
            <div className="section-content">
                <p className="title-hero">SAMDAPH.<span>AI</span></p>
                <h1><span>PARCOUREZ </span>NOS PERSONNAGES POPULAIRES ICI</h1>
                <p className="description">Bienvenue sur Samdaph.ai ! Créez votre propre avatar virtuel et échangez avec d'autres utilisateurs grâce à l'intelligence artificielle de ChatGPT. Personnalisez votre expérience et plongez dans des conversations passionnantes avec des avatars uniques. Samdaph.ai vous offre un monde virtuel où l'imagination rencontre la technologie. Rejoignez-nous dès aujourd'hui !</p>
                <button className="browse">Parcourir Nouveau</button>
            </div>
            
        </div>
    )
}