import Image from "next/image";

import { GalleryTab } from "@/components/gallery/gallery-tab";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";

import { IImage as ImageType } from "@/types";

interface GalleryProps {
    images: ImageType[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <Tabs defaultValue={images[0].id}>
            {images.map((image) => (
                <TabsContent
                    key={image.id}
                    value={image.id}
                    className="aspect-square w-full m-0"
                >
                    <Card className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                        <CardContent className="space-y-2">
                            <Image
                                src={image.url}
                                alt="Product image"
                                className="object-contain object-center"
                                fill
                            />
                        </CardContent>
                    </Card>
                </TabsContent>
            ))}
            <TabsList className="grid w-full h-full grid-cols-6 gap-4">
                {images.map((image) => (
                    <GalleryTab key={image.id} image={image} />
                ))}
            </TabsList>
        </Tabs>
    );
};
