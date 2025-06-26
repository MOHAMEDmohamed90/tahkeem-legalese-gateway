
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toolsData } from '../constants';

interface ToolsStepProps {
  title: string;
}

export const ToolsStep: React.FC<ToolsStepProps> = ({ title }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center arabic-text">{title}</h3>
      <div className="grid gap-4">
        {toolsData.map((tool, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <tool.icon className={`w-6 h-6 ${tool.color}`} />
                <CardTitle className="arabic-text">{tool.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground arabic-text">
                {tool.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
