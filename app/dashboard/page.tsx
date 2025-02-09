"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Card } from "@/components/ui/card";
import { LineChart, TrendingUp, Brain } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      }
    };

    checkUser();
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push('/dashboard/analysis')}>
          <LineChart className="h-12 w-12 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Análises</h2>
          <p className="text-muted-foreground">
            Análise detalhada de ativos e indicadores de mercado
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push('/dashboard/predictions')}>
          <Brain className="h-12 w-12 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Previsões</h2>
          <p className="text-muted-foreground">
            Previsões baseadas em IA para tendências de mercado
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push('/dashboard/simulations')}>
          <TrendingUp className="h-12 w-12 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Simulações</h2>
          <p className="text-muted-foreground">
            Simule diferentes cenários de investimento
          </p>
        </Card>
      </div>
    </div>
  );
}