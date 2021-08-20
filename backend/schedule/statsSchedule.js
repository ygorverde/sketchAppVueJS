const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('*/1 * * * *', async function () {
        const usersCount = await app.db('users').count('id').first() // Dados POSTGRES
        const categoriesCount = await app.db('categories').count('id').first() // Dados POSTGRES
        const articlesCount = await app.db('articles').count('id').first() // Dados POSTGRES

        const { Stat } = app.api.stats // Modelo

        const lastStat = await Stat.findOne({}, {},
            { sort: { 'createdAt': -1 } })

            const stat = new Stat({
                users: usersCount.count,
                categories: categoriesCount.count,
                articles: articlesCount.count,
                createdAt: new Date()
            })

            const changeUsers = !lastStat || stat.users !== lastStat.users
            const changeCategories = !lastStat || stat.categories !== lastStat.categories
            const changeArticles = !lastStat || stat.articles !== lastStat.articles

            if(changeUsers || changeCategories || changeArticles) {
                stat.save().then(() => console.log('[Stats] Estatísticas atualizadas!'))
            }
    })
}