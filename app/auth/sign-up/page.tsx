import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { SignUpForm } from "@/components/auth/sign-up";

export default function SignUpPage() {
  return (
    <section className="items-center px-4 mt-24 h-screen">
      <Card className="">
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
