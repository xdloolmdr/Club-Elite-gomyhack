import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Card, CardContent } from "@/components/card";


const EliteClubLanding = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Card className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-lg">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-6">EliteClub</h1>
          <p className="text-center mb-4">Welcome to EliteClub, your ultimate football team dashboard.</p>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <Input type="email" className="w-full" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Password</label>
              <Input type="password" className="w-full" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EliteClubLanding;
