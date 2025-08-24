import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Daftar EduShop</h2>
          <form className="space-y-5">
            <div>
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input id="name" type="text" placeholder="Nama Lengkap" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Password" required />
            </div>
            <Button type="submit" className="w-full mt-2">Daftar</Button>
          </form>
          <div className="mt-6 text-center text-sm">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Masuk
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default RegisterPage;