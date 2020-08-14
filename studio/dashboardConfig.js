export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f36d0b81d1820c920139b35',
                  title: 'Sanity Studio',
                  name: 'product-landing-pages-studio',
                  apiId: '5be50eb5-a6aa-4063-94da-19c6f0ca9287'
                },
                {
                  buildHookId: '5f36d0b81d1820e29f139ab6',
                  title: 'Landing pages Website',
                  name: 'product-landing-pages',
                  apiId: '0c52662d-44e2-49db-a948-c7f7c289617b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codehustlers/product-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://product-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
