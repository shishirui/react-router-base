import { Layout } from "../components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Info, Code, Palette } from "lucide-react";

export function meta() {
  return [
    { title: "About Us - React App" },
    { name: "description", content: "Learn about our project and tech stack" },
  ];
}

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Info className="h-16 w-16 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
          <p className="text-lg text-muted-foreground">
            This is a React application framework example project
          </p>
        </div>

        {/* Tech Stack */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Tech Stack
            </CardTitle>
            <CardDescription>
              Core technologies used in the project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React 18</Badge>
              <Badge variant="secondary">React Router 7</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Vite</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
              <Badge variant="secondary">Lucide Icons</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Features
            </CardTitle>
            <CardDescription>
              Main features of the framework
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Routing System</h4>
                <p className="text-sm text-muted-foreground">Modern routing based on React Router 7</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Responsive Design</h4>
                <p className="text-sm text-muted-foreground">Adapts to various screen sizes</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Component Library</h4>
                <p className="text-sm text-muted-foreground">Component system based on shadcn/ui</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Type Safety</h4>
                <p className="text-sm text-muted-foreground">Complete TypeScript support</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 团队结构部分已删除 */}
      </div>
    </Layout>
  );
}
