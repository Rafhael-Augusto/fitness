import { Card, CardContent } from "@/components/ui/card";

export function Stopwatch() {
  return (
    <Card className="mt-8">
      <CardContent className="flex justify-center mb-32">
        <span className="text-2xl font-bold">00:00</span>
      </CardContent>
    </Card>
  );
}
