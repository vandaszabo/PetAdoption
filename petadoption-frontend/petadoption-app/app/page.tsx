import ActionCard from "@/components/ActionCard";
import GetStarted from "@/components/GetStarted";
import petShopImage from '../public/pet-shop.png';
import petOwner from '../public/owner.png';
import petsAllowed from '../public/pets-allowed.png';


export default function Home() {
    return (
        <main>
            <div className="wrapper">
                <div className="left"></div>
                <div className="right">
                    <h1>Find. <strong>Adopt</strong>. Love.</h1>
                    <GetStarted />
                </div>
            </div>
            <div className="advert">
                <div className="advert-image"></div>
                <span>Pawfect Pet Guarantee</span>
            </div>
            <div className='action-wrapper'>
                <ActionCard text={'non-profit animal shelter'} image={petShopImage} />
                <ActionCard text={'search by type, breed, location and more!'} image={petOwner} />
                <ActionCard text={'news & updates on newest pets'} image={petsAllowed} />
            </div>
        </main>
    );
}
