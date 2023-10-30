import Image from "next/image"
import { Button } from "./ui/button"

export const SectionHero = () => {
    return (
        <div className="section-hero">
            <div className="section-content">
                <p>Welcome to Samdaph.ai</p>
                <h1><span>BROWSE </span>OUR POPULAR CHARACTERS HERE</h1>
                <Button className="browse">Browse New</Button>
            </div>
            
        </div>
    )
}