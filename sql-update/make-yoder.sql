   update "actors"
      set "firstName" = 'Baby',
          "lastName" = 'Yoda'
    where "actorId" = 24
returning *;
