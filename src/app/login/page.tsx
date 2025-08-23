
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, LogIn, ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/landing/footer';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Credenciais fixas
    const validUsername = 'futuroUniversitario';
    const validPassword = '#Aprovado2024!';

    if (username === validUsername && password === validPassword) {
      // Salva o estado de autenticação no localStorage para persistir na sessão
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/curso');
    } else {
      setError('Usuário ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground non-selectable">
        <header className="container mx-auto px-4 flex justify-center items-center h-16 sm:h-20">
             <Button 
                asChild 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10 hover:text-primary transition-all w-full sm:w-auto text-sm h-10 sm:h-10 px-3 sm:px-4"
             >
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Voltar para o site</span>
                </Link>
            </Button>
        </header>
        <main className="flex-grow flex items-center justify-center p-4">
             <div className="w-full max-w-md mx-auto">
                <Card className="bg-zinc-900/50 border-primary/20 shadow-2xl shadow-primary/10">
                    <CardHeader className="text-center">
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">Área de Membros</CardTitle>
                    <CardDescription className="text-muted-foreground pt-2">Sua jornada rumo à aprovação começa aqui.</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4">
                        {error && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Erro de Acesso</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                        )}
                        <div className="space-y-2">
                        <Label htmlFor="username">Usuário</Label>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Digite seu usuário enviado por e-mail"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="bg-background/70 border-border"
                        />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-background/70 border-border"
                        />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold animate-pulse-cta">
                            <LogIn className="mr-2 h-5 w-5" />
                            Entrar
                        </Button>
                    </CardFooter>
                    </form>
                </Card>
            </div>
        </main>
      <Footer />
    </div>
  );
}
