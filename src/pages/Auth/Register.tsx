import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUp(email, password, { full_name: name });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Berhasil mendaftar",
        description: "Silakan periksa email Anda untuk konfirmasi akun.",
      });
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center font-exo">Daftar EduShop</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="font-exo">Nama Lengkap</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Nama Lengkap" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                className="font-exo"
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-exo">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="font-exo"
              />
            </div>
            <div>
              <Label htmlFor="password" className="font-exo">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="font-exo"
              />
            </div>
            <Button type="submit" className="w-full mt-2 font-exo" disabled={loading}>
              {loading ? "Mendaftar..." : "Daftar"}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm font-exo">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
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