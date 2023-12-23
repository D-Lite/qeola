import BaseLayout from "../layout/BaseLayout.tsx";
import HomeBanner from "../components/home/Banner.tsx";
import HomeCollaboration from "../components/home/Collaboration.tsx";
import HomeFeatures from "../components/home/Features.tsx";
import HomeTeams from "../components/home/Teams.tsx";

export default function Home () {
    return (
        <BaseLayout>
            <div className="flex items-center justify-center flex-col min-h-full">
                <HomeBanner />
                <HomeCollaboration />
                <HomeTeams />
                <HomeFeatures />
            </div>
        </BaseLayout>
    )
}