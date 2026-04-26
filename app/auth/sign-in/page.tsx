import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { SignInForm } from "@/components/auth/sign-in";

export default function SignInPage() {
  return (
    <section className="items-center px-4 mt-24 h-screen">
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
