"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { Gallery } from "./gallery";
import { Info } from "./info";

export const PreviewModal: React.FC = () => {
    const { isOpen, onOpen, onClose, data: product } = usePreviewModal();

    if (!product) {
        return null;
    }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (open) {
                    onOpen(product);
                } else {
                    onClose();
                }
            }}
        >
            <DialogContent className="sm:max-w-screen-md lg:max-w-screen-lg overflow-y-auto max-h-[90vh] rounded-md">
                <div className="grid grid-cols-1 w-full items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                        <Gallery images={product.images} />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                        <Info product={product} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
