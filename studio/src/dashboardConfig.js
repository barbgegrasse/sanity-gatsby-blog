export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e5150c7fa14ebabb1c9161a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1jyvuokh',
                  apiId: '5fcbb0a0-417f-47c3-a00d-f8ada6343265'
                },
                {
                  buildHookId: '5e5150c7f91fc635466cbdaa',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7pq4a7j9',
                  apiId: 'bda7d8e4-4f56-4a35-867a-b533077de31c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barbgegrasse/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7pq4a7j9.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
