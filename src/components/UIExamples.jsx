import React from 'react';
import styled from 'styled-components';
import PearlButton from './ui/PearlButton';
import FeatureCard from './ui/FeatureCard';
import GlowingCard from './ui/GlowingCard';

const UIExamples = () => {
  const researchPlans = [
    {
      title: "Basic Research",
      description: "Perfect for individual researchers or small projects",
      features: [
        "Up to 10 tasks",
        "Basic task tracking",
        "Task categorization",
        "Email reminders"
      ],
      buttonText: "Start Free"
    },
    {
      title: "Professional Research",
      description: "Ideal for academic researchers and research teams",
      features: [
        "Unlimited tasks",
        "Advanced progress tracking",
        "Team collaboration",
        "Custom categories",
        "Priority management"
      ],
      buttonText: "Upgrade Now"
    },
    {
      title: "Enterprise Research",
      description: "Built for large-scale research organizations",
      features: [
        "Unlimited tasks and teams",
        "Advanced analytics dashboard",
        "Custom integrations",
        "Dedicated support",
        "Research workflow templates"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <Container>
      <Section>
        <SectionTitle>Pearl Buttons</SectionTitle>
        <ButtonsContainer>
          <PearlButton>Add New Task</PearlButton>
          <PearlButton className="medium">Start Research</PearlButton>
          <PearlButton className="small">Export Data</PearlButton>
        </ButtonsContainer>
      </Section>

      <Section>
        <SectionTitle>Feature Cards</SectionTitle>
        <CardsContainer>
          {researchPlans.map((plan, index) => (
            <FeatureCard
              key={index}
              title={plan.title}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
            />
          ))}
        </CardsContainer>
      </Section>

      <Section>
        <SectionTitle>Combined UI</SectionTitle>
        <GlowingCard title="Research Task Tracker Pro" width="100%">
          <p className="card-body mb-6">
            Upgrade to our professional plan and unlock powerful features to enhance your research workflow.
          </p>
          <PearlButton className="small">Upgrade Now</PearlButton>
        </GlowingCard>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color);
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export default UIExamples; 