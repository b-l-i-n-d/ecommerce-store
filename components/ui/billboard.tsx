import { IBilboard } from "@/types";

interface BillboardProps {
    data: IBilboard;
}

export const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div
                className="aspect-square md:aspect-[2.4/1] rounded-xl overflow-hidden relative"
                style={{
                    backgroundImage: `url(${data?.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-xs sm:max-w-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white p-4 border backdrop-blur-md rounded-xl">
                        {data?.label}
                    </div>
                </div>
            </div>
        </div>
    );
};
