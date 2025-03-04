import Image from "next/image";
import PodcastHero from "@/src/components/PodcastHero";
import GetKnowPodcast from "@/src/components/GetKnowPodcast";
import BannerPodcast from "@/src/components/BannerPodcast";

export default function Home() {
  return (
    <>
      <PodcastHero />
      <GetKnowPodcast />
      <BannerPodcast />
    </>
  );
}
