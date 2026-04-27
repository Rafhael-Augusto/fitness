import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { SignUpForm } from "@/components/auth/sign-up";

export default function SignUpPage() {
  return (
    <section className="px-4 mt-24 h-screen md:flex flex-col items-center">
      <Card className="md:w-md lg:w-lg">
        <CardHeader>
          <CardTitle>Registrar nova conta</CardTitle>
        </CardHeader>

        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </section>
  );
}
