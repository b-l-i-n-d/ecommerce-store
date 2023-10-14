import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IColor, ISize } from "@/types";
import { Option } from "lucide-react";
import { Filter } from "./filter";

interface MobileFilterProps {
    sizes: ISize[];
    colors: IColor[];
}

export const MobileFilter: React.FC<MobileFilterProps> = ({
    sizes,
    colors,
}) => {
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="rounded-full">
                        <Option className="w-5 h-5 mr-2" />
                        Filters
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Selects filters</SheetTitle>
                    </SheetHeader>

                    <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                    <Filter valueKey="colorId" name="Colors" data={colors} />
                </SheetContent>
            </Sheet>
        </div>
    );
};
