import { PharmacyInfo } from "@/app/components/PharmacyInfo";
import { fetchPharmacyData } from "@/app/lib/fetchData";
import PharmacyHours from "@/app/components/PharmacyHours";
import ServiceHighlights from "./components/ServiceHighlights";
import { PharmacyServices } from "@/app/components/PharmacyServices";
import { AboutUs } from "@/app/components/AboutUs";
import { Header } from "@/app/components/Header";
import Footer from "./components/Footer";
// import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { HeroBanner } from "./components/HeroBanner";
import { PharmacistTeam } from "./components/PharmacistTeam";

export default async function Home() {
  const pharmacyData = await fetchPharmacyData();

  return (
    <>
      {/* {pharmacyData.announcement && (
        <AnnouncementBanner data={pharmacyData.announcement} />
      )} */}
      <Header
        pharmacyName={pharmacyData.pharmacyMainInfo.name}
        className="sticky top-0 z-50"
      />
      <main>
        {pharmacyData.announcement && (
          <HeroBanner data={pharmacyData.announcement} />
        )}
        <PharmacyInfo
          address={pharmacyData.pharmacyMainInfo.address}
          phone={pharmacyData.pharmacyMainInfo.phone}
          fax={pharmacyData.pharmacyMainInfo.fax}
          email={pharmacyData.pharmacyMainInfo.email}
          coordinates={pharmacyData.pharmacyMainInfo.coordinates}
          spokenLanguages={pharmacyData.accessibility.spokenLanguages}
          isWheelchairAccessible={
            pharmacyData.accessibility.isWheelchairAccessible
          }
          acceptsWalkIns={pharmacyData.accessibility.acceptsWalkIns}
        />
        <PharmacyHours hours={pharmacyData.hours} />
        <ServiceHighlights services={pharmacyData.highlightedServices} />
        <PharmacyServices services={pharmacyData.services} />
        <AboutUs data={pharmacyData.aboutUs} />
        {pharmacyData.pharmacists && pharmacyData.pharmacists.length > 0 && (
          <PharmacistTeam pharmacists={pharmacyData.pharmacists} />
        )}
        <Footer />
      </main>
    </>
  );
}
