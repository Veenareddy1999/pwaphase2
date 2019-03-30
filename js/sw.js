this.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('mycache')
    .then(function(e){
      e.addAll([

      ])
    })
  )

})
// fetch events
this.addEventListener('fetch',function(event){
  event.respondWith(
    caches.open('mycache')
    .then(function(e){
      return cache.match(event.request)
      .then(function(response){
        return response || return fetch(event.request)
        .then(function(response){
          cache.put(event.request,response.clone());
          return response;
        })
      })
    })
  )
})
