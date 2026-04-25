import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  data: {
    title: string;
    description: string;
    imgUrl: string;
  };
};

export function StepItemCard({ data }: Props) {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="md:text-lg">{data.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <Image alt={data.title} src={data.imgUrl} height={500} width={500} />

        <p className="md:text-base">{data.description}</p>
      </CardContent>
    </Card>
  );
}
