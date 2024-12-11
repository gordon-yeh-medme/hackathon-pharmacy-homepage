import { PharmacyInfo } from "@/app/components/PharmacyInfo";
import { fetchPharmacyData } from "@/app/lib/fetchData";
import PharmacyHours from "@/app/components/PharmacyHours";
import ServiceHighlights from "./components/ServiceHighlights";
import { PharmacyServices } from "@/app/components/PharmacyServices";
import { AboutUs } from "@/app/components/AboutUs";
import { Header } from "@/app/components/Header";
import Footer from "./components/Footer";
import { AnnouncementBanner } from "./components/AnnouncementBanner";

export default async function Home() {
  const pharmacyData = await fetchPharmacyData();
  console.log(JSON.stringify(pharmacyData));

  return (
    <>
      {pharmacyData.announcement && (
        <AnnouncementBanner data={pharmacyData.announcement} />
      )}
      <Header pharmacyName={pharmacyData.name} className="sticky top-0 z-50" />
      <main>
        <PharmacyInfo
          address={pharmacyData.address}
          phone={pharmacyData.phone}
          fax={pharmacyData.fax}
          email={pharmacyData.email}
          coordinates={pharmacyData.coordinates}
          spokenLanguages={pharmacyData.spokenLanguages}
          isWheelchairAccessible={pharmacyData.isWheelchairAccessible}
          acceptsWalkIns={pharmacyData.acceptsWalkIns}
        />
        <PharmacyHours hours={pharmacyData.hours} />
        <ServiceHighlights services={pharmacyData.highlightedServices} />
        <PharmacyServices services={pharmacyData.services} />
        <AboutUs data={pharmacyData.aboutUs} />
        <Footer />
      </main>
    </>
  );
}
