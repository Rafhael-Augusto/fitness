import { SignInForm } from "@/components/auth/sign-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <section className="items-center px-4 mt-24">
      <Card className="">
        <CardHeader>
          <CardTitle>Fazer login</CardTitle>
        </CardHeader>

        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </section>
  );
}
