/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['installation', 'configuration'],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      // collapsed: true,
      items: [
        // 'guides/events',
        // 'guides/services',

        {
          type: 'category',
          collapsed: true,
          label: 'Events',
          items: [
            'guides/events/introduction',
            'guides/events/adding-events',
            'guides/events/adding-schemas',
            'guides/events/events-adding-openapi',
            'guides/events/adding-examples',
            'guides/events/adding-event-owners',
            'guides/events/consumers-and-producers',
            'guides/events/versioning',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          label: 'Services',
          items: [
            'guides/services/introduction',
            'guides/services/adding-service',
            'guides/services/producers-consumers',
            'guides/services/adding-service-openapi',
            'guides/services/adding-service-asyncapi',
            'guides/services/adding-service-owners',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          label: 'Domains',
          items: ['guides/domains/introduction', 'guides/domains/adding-domains', 'guides/domains/adding-domain-owners'],
        },
        'guides/customise',
        {
          type: 'category',
          collapsed: true,
          label: 'MDX Components',
          items: [
            'guides/components/components-overview',
            'guides/components/components-events',
            'guides/components/components-services',
            'guides/components/components-domains',
          ],
        },
        'guides/deployment',
        'guides/upgrading',
      ],
    },
  ],
  api: [
    {
      type: 'autogenerated',
      dirName: 'api',
    },
  ],
  community: [
    'support',
    {
      type: 'autogenerated',
      dirName: 'community',
    },
  ],
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
