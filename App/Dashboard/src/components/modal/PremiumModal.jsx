import React, { useState } from 'react';
import Modal from './Modal';
import { MdCheckCircle, MdClose } from 'react-icons/md';
import { useToast } from '../toast/ToastContext';

const PremiumModal = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState('annual');
  const toast = useToast();

  const plans = [
    {
      id: 'monthly',
      name: 'Mensuel',
      price: '9.99',
      period: 'mois',
      badge: null,
    },
    {
      id: 'annual',
      name: 'Annuel',
      price: '89.99',
      period: 'an',
      badge: 'Économisez 25%',
      popular: true,
    },
  ];

  const features = [
    'Habitudes illimitées',
    'Statistiques avancées',
    'Capture vocale illimitée',
    'Export de données (CSV, PDF)',
    'Thèmes personnalisés',
    'Support prioritaire 24/7',
    'Rappels intelligents',
    'Analyses IA personnalisées',
    'Synchronisation multi-appareils',
    'Backup automatique cloud',
  ];

  const handleSubscribe = () => {
    toast.success(`Redirection vers le paiement ${plans.find(p => p.id === selectedPlan)?.name}...`);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Passez à FocusFly Premium"
      size="xl"
    >
      <div className="space-y-6">
        {/* Plans */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative rounded-xl border-2 p-6 text-left transition-all ${
                selectedPlan === plan.id
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20'
                  : 'border-gray-200 hover:border-brand-300 dark:border-white/10 dark:hover:border-brand-700'
              }`}
            >
              {/* Badge Popular */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Selected Indicator */}
              {selectedPlan === plan.id && (
                <div className="absolute right-4 top-4">
                  <MdCheckCircle className="h-6 w-6 text-brand-500" />
                </div>
              )}

              {/* Plan Name */}
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                {plan.name}
              </h4>

              {/* Price */}
              <div className="mt-3">
                <span className="text-4xl font-bold text-navy-700 dark:text-white">
                  {plan.price}€
                </span>
                <span className="text-lg text-gray-600">/{plan.period}</span>
              </div>

              {/* Monthly Equivalent for Annual */}
              {plan.id === 'annual' && (
                <p className="mt-2 text-sm text-gray-600">
                  Soit 7.49€/mois
                </p>
              )}
            </button>
          ))}
        </div>

        {/* Features List */}
        <div>
          <h5 className="mb-4 text-lg font-bold text-navy-700 dark:text-white">
            Fonctionnalités Premium
          </h5>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <MdCheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-sm text-navy-700 dark:text-white">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-4 dark:border-white/10">
          <button
            onClick={onClose}
            className="rounded-lg px-6 py-2 font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
          >
            Peut-être plus tard
          </button>
          <button
            onClick={handleSubscribe}
            className="rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-3 font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40"
          >
            Choisir {plans.find(p => p.id === selectedPlan)?.name}
          </button>
        </div>

        {/* Guarantee */}
        <p className="text-center text-xs text-gray-500">
          Garantie satisfait ou remboursé 30 jours · Annulation à tout moment
        </p>
      </div>
    </Modal>
  );
};

export default PremiumModal;
