  select "categories"."name" as "category",
          count("filmCategory"."filmId") as "totalFilms"
    from "categories"
    join "filmCategory" using ("categoryId")
    join "castMembers" using ("filmId")
    join "actors" using ("actorId")
   where "actors"."actorId" = 178
group by "category";
