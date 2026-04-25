import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  data: {
    label: string;
    description: string;
  };
};

export function CardItem({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="underline">{data.label}</CardTitle>
      </CardHeader>

      <CardContent>{data.description}</CardContent>
    </Card>
  );
}
