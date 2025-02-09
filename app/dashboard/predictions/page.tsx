"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PredictionsPage() {
  const [asset, setAsset] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);
    // Simulação de análise
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">IA Preditiva</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <TrendingUp className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="font-semibold">Tendência de Alta</h3>
              <p className="text-sm text-muted-foreground">PETR4, VALE3</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <TrendingDown className="h-8 w-8 text-red-500" />
            <div>
              <h3 className="font-semibold">Tendência de Baixa</h3>
              <p className="text-sm text-muted-foreground">ITUB4</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <div>
              <h3 className="font-semibold">Monitoramento</h3>
              <p className="text-sm text-muted-foreground">BBDC4, ABEV3</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Análise Preditiva</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Select value={asset} onValueChange={setAsset}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um ativo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PETR4">PETR4</SelectItem>
                  <SelectItem value="VALE3">VALE3</SelectItem>
                  <SelectItem value="ITUB4">ITUB4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              onClick={handleAnalyze} 
              disabled={!asset || loading}
              className="w-full"
            >
              {loading ? (
                "Analisando..."
              ) : (
                <>
                  <Brain className="mr-2 h-4 w-4" />
                  Analisar
                </>
              )}
            </Button>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Resultado da Análise</h3>
            <p className="text-sm text-muted-foreground">
              Selecione um ativo para ver a análise preditiva
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}