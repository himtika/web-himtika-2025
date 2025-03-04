import SongfessCard from "@/src/components/SongfessCard";
import SongfessHero from "@/src/components/SongfessHero";
import SongfessSlideshow from "@/src/components/SongfessSlideshow";
import Image from "next/image";

export default function Home() {
  return (
      <>
        <SongfessHero />
        <SongfessCard />
        <SongfessSlideshow />
      </>
    );
}
