"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart as LineChartIcon, BarChart as BarChartIcon, PieChart as PieChartIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockData = [
  { date: "2024-01", value: 4000 },
  { date: "2024-02", value: 3000 },
  { date: "2024-03", value: 5000 },
  { date: "2024-04", value: 2780 },
  { date: "2024-05", value: 1890 },
  { date: "2024-06", value: 2390 },
];

export default function AnalysisPage() {
  const [selectedAsset, setSelectedAsset] = useState("PETR4");
  const [timeframe, setTimeframe] = useState("1M");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Análise Avançada</h1>
        <div className="flex gap-4">
          <Select value={selectedAsset} onValueChange={setSelectedAsset}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione um ativo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PETR4">PETR4</SelectItem>
              <SelectItem value="VALE3">VALE3</SelectItem>
              <SelectItem value="ITUB4">ITUB4</SelectItem>
            </SelectContent>
          </Select>
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1D">1 Dia</SelectItem>
              <SelectItem value="1W">1 Semana</SelectItem>
              <SelectItem value="1M">1 Mês</SelectItem>
              <SelectItem value="1Y">1 Ano</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="price" className="space-y-4">
        <TabsList>
          <TabsTrigger value="price" className="flex items-center gap-2">
            <LineChartIcon className="h-4 w-4" />
            Preço
          </TabsTrigger>
          <TabsTrigger value="volume" className="flex items-center gap-2">
            <BarChartIcon className="h-4 w-4" />
            Volume
          </TabsTrigger>
          <TabsTrigger value="indicators" className="flex items-center gap-2">
            <PieChartIcon className="h-4 w-4" />
            Indicadores
          </TabsTrigger>
        </TabsList>

        <TabsContent value="price">
          <Card className="p-6">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="volume">
          <Card className="p-6">
            <div className="h-[400px] flex items-center justify-center text-muted-foreground">
              Dados de volume em desenvolvimento
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="indicators">
          <Card className="p-6">
            <div className="h-[400px] flex items-center justify-center text-muted-foreground">
              Indicadores técnicos em desenvolvimento
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}