import type { CollectionConfig } from 'payload'

export const Partners: CollectionConfig = {
  slug: 'partners',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom du partenaire',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Institution publique', value: 'Institution publique' },
        { label: 'Organisation internationale', value: 'Organisation internationale' },
        { label: 'Entreprise', value: 'Entreprise' },
        { label: 'Association', value: 'Association' },
        { label: 'Institution financière', value: 'Institution financière' },
        { label: 'Éducation', value: 'Éducation' },
      ],
      required: true,
      label: 'Catégorie',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Logo',
    },
    {
      name: 'website',
      type: 'text',
      label: 'Site web (optionnel)',
    },
    {
      name: 'order',
      type: 'number',
      label: "Ordre d'affichage",
      defaultValue: 0,
    },
  ],
}
