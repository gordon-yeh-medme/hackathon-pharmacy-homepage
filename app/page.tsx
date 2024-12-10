import { StickyBottomBar } from "@/app/components/StickyBottomBar";
import { PharmacyInfo } from "@/app/components/PharmacyInfo";
import { fetchPharmacyData } from "@/app/lib/fetchData";
import PharmacyHours from "@/app/components/PharmacyHours";
import ServiceHighlights from "./components/ServiceHighlights";

export default async function Home() {
  const pharmacyData = await fetchPharmacyData();

  return (
    <main>
      <StickyBottomBar pharmacyName="Your Pharmacy Name" />
      <PharmacyInfo
        address={pharmacyData.address}
        phone={pharmacyData.phone}
        fax={pharmacyData.fax}
        email={pharmacyData.email}
        coordinates={pharmacyData.coordinates}
      />
      <PharmacyHours hours={pharmacyData.hours} />
      <ServiceHighlights services={pharmacyData.services} />
    </main>
  );
}
