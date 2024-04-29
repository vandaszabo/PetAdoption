import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <>
    <div className="wrapper">
      <div className="left"></div>
      <div className="right">
      <h1>Find. <strong>Adopt</strong>. Love.</h1>
      <GetStarted/>
      </div>
    </div>
    <div className="advert">
      <div className="advert-image"></div>
      <p>Pawfect Pet Guarantee</p>
    </div>
    </>
  );
}
