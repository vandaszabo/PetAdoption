import ActionCard from "@/components/ActionCard";
import petShopImage from '../public/pet-shop.png';
import petOwner from '../public/owner.png';
import petsAllowed from '../public/pets-allowed.png';
import ActionCardBtn from "@/components/ActionCardBtn";
import GetStartedBtn from "@/components/GetStartedBtn";

export default function Home() {
    return (
        <main>
            <div className="wrapper">
                <div className="left"></div>
                <div className="right">
                    <h1>Find. <strong>Adopt</strong>. Love.</h1>
                    <GetStartedBtn />
                </div>
            </div>
            <div className="advert">
                <div className="advert-image"></div>
                <span>Pawfect Pet Guarantee</span>
            </div>
            <div className='action-wrapper'>
                <ActionCardBtn path="/contact" actionCard={ <ActionCard text={'non-profit animal shelter'} image={petShopImage} />} />
                <ActionCardBtn path="/pets" actionCard={<ActionCard text={'search by type, breed, location and more!'} image={petOwner} />} />
                <ActionCardBtn path="/" actionCard={ <ActionCard text={'news & updates on newest pets'} image={petsAllowed} />} />
            </div>
        </main>
    );
}
