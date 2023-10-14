"use client";

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { IColor, ISize } from "@/types";

interface FilterProps {
    data: (ISize | IColor)[];
    name: string;
    valueKey: string;
}

export const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const handleClick = (id: string) => {
        const current = queryString.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id,
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = queryString.stringifyUrl(
            {
                url: window.location.href,
                query,
            },
            { skipNull: true }
        );

        router.push(url);
    };

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold">{name}</h3>

            <Separator className="my-4" />

            <div className="flex flex-wrap gap-4">
                {data.map((item) => (
                    <Button
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        variant={
                            selectedValue === item.id ? "default" : "outline"
                        }
                        className="rounded-full"
                    >
                        {item.name}
                    </Button>
                ))}
            </div>
        </div>
    );
};
