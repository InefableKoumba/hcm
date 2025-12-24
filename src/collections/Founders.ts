import type { CollectionConfig } from 'payload'

export const Founders: CollectionConfig = {
  slug: 'founders',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom complet',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Fonction / Rôle',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Photo',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biographie (optionnel)',
    },
    {
      name: 'order',
      type: 'number',
      label: "Ordre d'affichage",
      defaultValue: 0,
    },
  ],
}
