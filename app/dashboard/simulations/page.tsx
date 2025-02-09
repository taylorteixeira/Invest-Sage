"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function SimulationsPage() {
  const [initialValue, setInitialValue] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [years, setYears] = useState([10]);
  const [returnRate, setReturnRate] = useState([8]);

  const calculateProjection = () => {
    const data = [];
    let currentValue = initialValue;
    
    for (let i = 0; i <= years[0]; i++) {
      data.push({
        year: i,
        value: Math.round(currentValue),
      });
      currentValue = (currentValue + monthlyContribution * 12) * (1 + returnRate[0] / 100);
    }
    
    return data;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Simulação de Investimentos</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Parâmetros</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Valor Inicial (R$)</Label>
              <Input
                type="number"
                value={initialValue}
                onChange={(e) => setInitialValue(Number(e.target.value))}
                min={0}
              />
            </div>

            <div className="space-y-2">
              <Label>Aporte Mensal (R$)</Label>
              <Input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                min={0}
              />
            </div>

            <div className="space-y-2">
              <Label>Período (anos): {years[0]}</Label>
              <Slider
                value={years}
                onValueChange={setYears}
                min={1}
                max={30}
                step={1}
              />
            </div>

            <div className="space-y-2">
              <Label>Taxa de Retorno (%): {returnRate[0]}%</Label>
              <Slider
                value={returnRate}
                onValueChange={setReturnRate}
                min={0}
                max={20}
                step={0.5}
              />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Projeção</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={calculateProjection()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`R$ ${value.toLocaleString()}`, "Valor"]}
                  labelFormatter={(label) => `Ano ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Valor final projetado: R$ {calculateProjection().slice(-1)[0].value.toLocaleString()}
          </div>
        </Card>
      </div>
    </div>
  );
}