export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ec83ac3658d70ea395098d1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g9k5nkw5',
                  apiId: '4b5b3481-f9bf-454e-ab8d-237a447370a9'
                },
                {
                  buildHookId: '5ec83ac454eebc0847a9304f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-i1uvkemn',
                  apiId: 'f2914c93-243a-4ae2-a3be-25752d3593ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flaturtha/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-i1uvkemn.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
