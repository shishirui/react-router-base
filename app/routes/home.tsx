import { Layout } from "../components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Home as HomeIcon } from "lucide-react";

export function meta() {
  return [
    { title: "Home - React App" },
    { name: "description", content: "React application home page" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <HomeIcon className="h-16 w-16 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Home</h1>
          <p className="text-lg text-muted-foreground max-w-md">
            This is a simple React application framework example
          </p>
        </div>
      </div>
    </Layout>
  );
}
