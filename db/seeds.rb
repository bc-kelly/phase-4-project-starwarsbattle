# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Deleting old data..."

Character.destroy_all
Planet.destroy_all
Battle.destroy_all


puts "🌱 Creating characters..."
Character.create(name: "Darth Vader", image: "https://i.insider.com/55c22f7f371d2211008bd06a?width=1200&format=jpeg", movie: "Star Wars: Episode III - Revenge of the Sith", weapons: "Lightening, Light Saber, the Force")
Character.create(name: "Luke Skywalker", image: "https://i.inews.co.uk/content/uploads/2018/05/Luke-Reurn-Of-The-Jedi.jpg", movie: "Star Wars: Episode VI – Return of the Jedi", weapons: "Lightening, Light Saber, the Force" )
Character.create(name: "Princess Leia", image: "https://www.abc.net.au/news/image/2294380-3x4-700x933.jpg", movie: "Star Wars: Episode V – The Empire Strikes Back", weapons: "Lightening, Light Saber, the Force")
Character.create(name: "Anakin Skywalker", image: "https://images.immediate.co.uk/production/volatile/sites/3/2020/08/Episode_II_Hayden_Christensen7-d0d9eeb.jpg?quality=45&resize=768,574", movie: "Star Wars: Episode II – Attack of the Clones", weapons: "Lightening, Light Saber, the Force")
Character.create(name: "Obi-Wan Kenobi", image: "https://redefined.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/03/29155931/kenobiattack_lucasfilmmsdb.jpg", movie: "Star Wars: Episode II – Attack of the Clones", weapons: "Lightening, Light Saber, the Force" )
Character.create(name: "Yoda", image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png", movie: "Star Wars: Episode V – The Empire Strikes Back", weapons: "Lightening, Light Saber, the Force")
Character.create(name: "Baby Yoda", image: "https://www.giantfreakinrobot.com/wp-content/uploads/2020/11/baby-yoda-900x506.jpg", movie: "The Mandalorian", weapons: "Lightening, Light Saber, the Force")
Character.create(name: "Chewbacca", image: "https://i.insider.com/568ad5e7e6183e263a8b65fc?width=700", movie: "Star Wars: Episode VII – The Force Awakens", weapons: "Lightening, Light Saber, the Force")
Character.create(name: "Stormtrooper", image: "https://upload.wikimedia.org/wikipedia/en/5/51/Stormtrooper_%28Star_Wars%29.png", movie: "Star Wars: A New Hope", weapons: "Lightening, Light Saber, the Force")
Character.create(name: "Darth Sidious", image: "https://upload.wikimedia.org/wikipedia/en/8/8f/Emperor_RotJ.png", movie: "The Empire Strikes Back", weapons: "Lightening, Light Saber, the Force")


puts "🌱 Creating planets..."
Planet.create(name: "Death Star", image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Death_star1.png")
Planet.create(name: "Forest Moon of Endor", image: "https://upload.wikimedia.org/wikipedia/en/d/d4/PlanetEndor.jpg")
Planet.create(name: "Alderaan", image: "https://upload.wikimedia.org/wikipedia/en/6/60/Alderaan250ppx.PNG")
Planet.create(name: "Hoth", image: "https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg")
Planet.create(name: "Dagobah", image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Dagobah.jpg")


puts "🌱 Making battles..." 
10.times {Battle.create(name: Faker::Movies::StarWars.unique.call_sign, planet: Planet.all.sample, character: Character.all.sample)}

puts "Done seeding!" 
