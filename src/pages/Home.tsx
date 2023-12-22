import BaseLayout from "../layout/BaseLayout.tsx";
import HomeBanner from "../components/home/Banner.tsx";

export default function Home () {
    return (
        <BaseLayout>
            <div className="flex items-center justify-center min-h-full">
                <HomeBanner />
            </div>
        </BaseLayout>
    )
}