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
                  buildHookId: '5e365e5e2dc1111359ba4618',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vjrtk1jj',
                  apiId: '959ca39e-fc5f-4b11-ae13-7d48b56835e9'
                },
                {
                  buildHookId: '5e365e5ec43c80001cae7308',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uiug7rni',
                  apiId: 'bee768b3-976d-4739-967b-d432b843a9e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xxdesmus/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uiug7rni.netlify.com', category: 'apps' }
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
