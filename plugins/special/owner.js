exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'Ova Network',
         website: 'https://yandex.com',
         email: 'admin@ova.my.id'
      })
   },
   error: false,
   cache: true,
   location: __filename
}