import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { SignInForm } from "@/components/auth/sign-in";

export default function SignInPage() {
  return (
    <section className="px-4 mt-24 h-screen md:flex flex-col items-center">
      <Card className="md:w-md lg:w-lg h-auto ">
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
