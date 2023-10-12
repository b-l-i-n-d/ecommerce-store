import { TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import { Image as ImageType } from "@/types";

interface GalleryTabProps {
    image: ImageType;
}

export const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
    return (
        <TabsTrigger
            value={image.id}
            className="relative flex aspect-square items-center justify-center rounded-md"
        >
            <div className="h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                <Image
                    src={image.url}
                    alt="Product image"
                    fill
                    className="object-cover object-center rounded-md p-2"
                />
            </div>
        </TabsTrigger>
    );
};
