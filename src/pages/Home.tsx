import BaseLayout from "../layout/BaseLayout.tsx";
import HomeBanner from "../components/home/Banner.tsx";
import HomeCollaboration from "../components/home/Collaboration.tsx";

export default function Home () {
    return (
        <BaseLayout>
            <div className="flex items-center justify-center flex-col min-h-full">
                <HomeBanner />
                <HomeCollaboration />
            </div>
        </BaseLayout>
    )
}