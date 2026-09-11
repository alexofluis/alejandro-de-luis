import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import CVSection from "@/components/CVSection";
import Footer from "@/components/Footer";
import StickyMobileHeader from "@/components/StickyMobileHeader";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <LoadingScreen>
      <main className="w-full mx-auto px-8">
        <StickyMobileHeader />
        <Header />
        <ProjectList />
        <CVSection />
        <Footer />
      </main>
    </LoadingScreen>
  );
}
