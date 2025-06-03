'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { PropertyAgent } from '@/types/property';
import { Property } from '@/types/property';
import { getProperties } from '@/lib/api/properties';
import PropertiesGrid from '@/components/properties/properties-grid';
import Loading from '@/components/ui/loading';

export default function AgentPage({ params }: { params: { id: string } }) {
  const { t } = useTranslation();
  const [agent, setAgent] = useState<PropertyAgent | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, we would fetch agent data from an API
        const mockAgent: PropertyAgent = {
          id: params.id,
          name: 'Jennifer Walker',
          email: 'jennifer@luxestate.com',
          phone: '+1 (310) 555-1234',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
        };
        setAgent(mockAgent);

        // Fetch properties listed by this agent
        const agentProperties = await getProperties({ agentId: params.id });
        setProperties(agentProperties);
      } catch (error) {
        console.error('Error fetching agent data:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return <Loading />;
  }

  if (!agent) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <CardTitle className="text-2xl">{agent.name}</CardTitle>
              <p className="text-muted-foreground">Real Estate Agent</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {agent.phone}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {agent.email}
            </Button>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-6">{t('agent.listedProperties')}</h2>
      <PropertiesGrid properties={properties} />
    </div>
  );
}