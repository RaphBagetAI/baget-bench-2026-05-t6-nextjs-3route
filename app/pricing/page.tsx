import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$15',
    description: 'Ideal for individual developers and small teams.',
    features: [
      'Basic deployment automation',
      '5 team members',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$50',
    description: 'Perfect for growing teams needing advanced features.',
    features: [
      'Unlimited deployments',
      '20 team members',
      'Priority email support',
      'Deployment analytics',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations.',
    features: [
      'Unlimited deployments & users',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom integrations',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-4xl font-heading font-extrabold text-center mb-8">
        Pricing Plans
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="glass-card p-8 flex flex-col rounded-lg border border-gray-200"
          >
            <h2 className="font-heading text-2xl font-bold mb-3">
              {tier.name}
            </h2>
            <p className="text-lg font-semibold mb-4">{tier.price}</p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {tier.description}
            </p>

            <ul className="mb-6 list-disc list-inside space-y-1">
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <button
              className="btn-gradient px-6 py-3 mt-auto font-semibold rounded-lg hover:brightness-110 transition"
              onClick={() => alert(`Selected ${tier.name} plan`)}
            >
              Choose {tier.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
