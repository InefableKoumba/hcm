import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Paramètres du site',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Informations générales',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              required: true,
              defaultValue: 'HandiMobilité Congo',
              label: 'Nom du site',
            },
            {
              name: 'siteDescription',
              type: 'textarea',
              required: true,
              label: 'Description du site',
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo',
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'email',
              type: 'email',
              required: true,
              label: 'Email de contact',
            },
            {
              name: 'phone',
              type: 'text',
              label: 'Téléphone',
            },
            {
              name: 'address',
              type: 'textarea',
              label: 'Adresse',
            },
            {
              name: 'mapCoordinates',
              type: 'group',
              fields: [
                {
                  name: 'latitude',
                  type: 'number',
                  label: 'Latitude',
                },
                {
                  name: 'longitude',
                  type: 'number',
                  label: 'Longitude',
                },
              ],
              label: 'Coordonnées de la carte',
            },
          ],
        },
        {
          label: 'Réseaux sociaux',
          fields: [
            {
              name: 'socialMedia',
              type: 'array',
              label: 'Réseaux sociaux',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  options: [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'YouTube', value: 'youtube' },
                  ],
                  required: true,
                  label: 'Plateforme',
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  label: 'URL',
                },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              label: 'Titre SEO',
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Description SEO',
            },
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Image Open Graph',
            },
          ],
        },
      ],
    },
  ],
}
