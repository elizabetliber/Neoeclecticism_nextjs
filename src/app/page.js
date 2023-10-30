import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import LinkBlocks from "@/app/components/LinkBlocks";
import SocialMedia from "@/app/components/SocialMedia";

export default function Home() {
    return (

        <main className="flex min-h-screen flex-col bg-[#121212]">
            <container className="container mx-auto px-12 py-14 sm-">
                <Header/>
                <Hero/>
                <LinkBlocks/>
                <SocialMedia/>
            </container>
        </main>
    )
}
