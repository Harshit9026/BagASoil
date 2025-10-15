import { useState } from 'react';
import { Leaf, TrendingDown, Trees, Droplets, Calculator } from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: string) => void;
}

export default function SustainabilityPage({ onNavigate }: SustainabilityPageProps) {
  const [monthlyBags, setMonthlyBags] = useState(1000);
  const [bagWeight, setBagWeight] = useState(10);

  const calculateImpact = () => {
    const plasticSavedKg = (monthlyBags * bagWeight) / 1000;
    const annualPlasticKg = plasticSavedKg * 12;
    const carbonOffset = annualPlasticKg * 2.5;
    const treesEquivalent = Math.round(carbonOffset / 21);
    const waterSaved = annualPlasticKg * 17;

    return {
      monthlyPlastic: plasticSavedKg.toFixed(2),
      annualPlastic: annualPlasticKg.toFixed(2),
      carbonOffset: carbonOffset.toFixed(2),
      trees: treesEquivalent,
      water: waterSaved.toFixed(2),
    };
  };

  const impact = calculateImpact();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Commitment to Sustainability
          </h1>
          <p className="text-lg text-green-50 max-w-2xl mx-auto">
            Every bag makes a difference. See the environmental impact of choosing biodegradable packaging.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Biodegradable Matters
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Traditional Plastic Problem
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Takes 500-1000 years to decompose
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Releases toxic chemicals into soil and water
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Harms wildlife and marine ecosystems
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Contributes to microplastic pollution
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Biodegradable Solution
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Decomposes in 3-6 months in composting conditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Made from plant-based renewable materials
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    No toxic residue or microplastics
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Certified compostable and eco-friendly
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg p-8 shadow-sm sticky top-4">
              <div className="flex items-center mb-6">
                <Calculator className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Impact Calculator
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Calculate your potential environmental impact by switching to biodegradable bags
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly bag usage
                  </label>
                  <input
                    type="number"
                    value={monthlyBags}
                    onChange={(e) => setMonthlyBags(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average bag weight (grams)
                  </label>
                  <input
                    type="number"
                    value={bagWeight}
                    onChange={(e) => setBagWeight(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Your Annual Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Plastic waste saved</span>
                    <span className="text-2xl font-bold">{impact.annualPlastic} kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Carbon offset</span>
                    <span className="text-2xl font-bold">{impact.carbonOffset} kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Equivalent trees</span>
                    <span className="text-2xl font-bold">{impact.trees}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Water saved</span>
                    <span className="text-2xl font-bold">{impact.water} L</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
              >
                Start Making a Difference
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Understanding Biodegradation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Material',
                desc: 'Made from plant-based starches and natural polymers',
              },
              {
                step: '2',
                title: 'Usage',
                desc: 'Functions like traditional plastic with same durability',
              },
              {
                step: '3',
                title: 'Disposal',
                desc: 'Can be composted with organic waste',
              },
              {
                step: '4',
                title: 'Decomposition',
                desc: 'Breaks down into water, CO₂, and biomass in 3-6 months',
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Compostable Certified',
                desc: 'Meets EN 13432 and ASTM D6400 standards',
              },
              {
                icon: TrendingDown,
                title: 'Carbon Neutral',
                desc: 'Offset production emissions through verified projects',
              },
              {
                icon: Trees,
                title: 'Renewable Materials',
                desc: '100% plant-based raw materials from sustainable sources',
              },
            ].map((cert, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-sm">
                  <cert.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
