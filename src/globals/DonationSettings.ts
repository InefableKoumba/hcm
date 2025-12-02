import type { GlobalConfig } from 'payload'

export const DonationSettings: GlobalConfig = {
  slug: 'donation-settings',
  label: 'Paramètres de don',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'suggestedAmounts',
      type: 'array',
      label: 'Montants suggérés',
      fields: [
        {
          name: 'amount',
          type: 'number',
          required: true,
          label: 'Montant (FCFA)',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Libellé',
        },
      ],
      defaultValue: [
        { amount: 10000, label: '10 000 FCFA' },
        { amount: 25000, label: '25 000 FCFA' },
        { amount: 50000, label: '50 000 FCFA' },
        { amount: 100000, label: '100 000 FCFA' },
        { amount: 250000, label: '250 000 FCFA' },
      ],
    },
    {
      name: 'minimumAmount',
      type: 'number',
      defaultValue: 1000,
      label: 'Montant minimum (FCFA)',
    },
    {
      name: 'paymentMethods',
      type: 'array',
      label: 'Méthodes de paiement',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nom',
        },
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Activé',
        },
      ],
      defaultValue: [
        { name: 'Mobile Money (MoMo)', enabled: true },
        { name: 'Carte bancaire', enabled: true },
      ],
    },
    {
      name: 'donationMessage',
      type: 'textarea',
      label: 'Message de confirmation',
      defaultValue:
        'Merci pour votre don ! Votre générosité contribue à améliorer la mobilité des personnes en situation de handicap au Congo.',
    },
  ],
}
