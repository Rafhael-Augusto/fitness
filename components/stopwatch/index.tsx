import { Card, CardContent } from "@/components/ui/card";

export function Stopwatch() {
  return (
    <Card>
      <CardContent className="flex justify-center">
        <span className="text-2xl font-bold">00:00</span>
      </CardContent>
    </Card>
  );
}
