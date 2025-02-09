"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, TrendingUp, Brain, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Investimentos Inteligentes com IA
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Tome decisões de investimento mais inteligentes com análises preditivas alimentadas por IA e dados em tempo real.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">
                Comece Gratuitamente <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <LineChart className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Análise Avançada</h3>
            <p className="text-muted-foreground">
              Gráficos dinâmicos e análises técnicas em tempo real para suas decisões.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Brain className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">IA Preditiva</h3>
            <p className="text-muted-foreground">
              Previsões de mercado baseadas em IA usando tecnologia Gemini.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <TrendingUp className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Simulação</h3>
            <p className="text-muted-foreground">
              Simule diferentes cenários de investimento antes de tomar decisões.
            </p>
          </Card>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Planos</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Básico</h3>
              <div className="text-3xl font-bold mb-4">Grátis</div>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li>Análises básicas</li>
                <li>1 simulação por dia</li>
                <li>Dados com delay de 15min</li>
              </ul>
              <Button className="w-full" variant="outline">Começar</Button>
            </div>
          </Card>
          <Card className="p-6 border-primary">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-4">R$49/mês</div>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li>Análises avançadas</li>
                <li>Simulações ilimitadas</li>
                <li>Dados em tempo real</li>
                <li>Previsões da IA</li>
              </ul>
              <Button className="w-full">Assinar Pro</Button>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">Personalizado</div>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li>API dedicada</li>
                <li>Suporte 24/7</li>
                <li>Análises personalizadas</li>
                <li>Treinamento da equipe</li>
              </ul>
              <Button className="w-full" variant="outline">Contate-nos</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}