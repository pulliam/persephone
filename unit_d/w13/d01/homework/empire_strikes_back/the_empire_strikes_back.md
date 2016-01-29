# The Empire Strikes Back

![](http://vignette2.wikia.nocookie.net/starwars/images/2/2f/Counsel_of_the_Sith_TCG_by_Villeneuve.png/revision/latest?cb=20131013180704)

## What is thy bidding, my master?

The Emperor commands you to convert all your relational databases into MongoDB.
You hesitate. You're not sure why it's better or even necessary.

> I wonder if your feelings on this matter are clear, Lord Vader?

You briefly wonder if force lightning can be transfered via hologram and quickly decide it's better to defer to his infinite wisdom.

> As you wish.

## Tie Squadron CRUD App

![](http://vignette3.wikia.nocookie.net/starwars/images/b/b2/Death_star_trench.png/revision/latest?cb=20130310063345)

Rewrite your Tie Fighter Squadron App from last week to use MongoDB instead of JSON files. Don't be tempted to reuse your old code; love of your old code will make you weak. **IMPORTANT: No need to use AJAX.**

> Soon SQL will be crushed and young Skywalker will be one of us.

### Setup Notes:

#### Routes:
|VERB|Path|Description|
|----|----|-----------|
|GET| `/`                       |Welcome page for the Tie Squadron Database. Has a link to `/squadrons`|
|GET| `/squadrons`                      |Renders a list of squadrons|
|GET| `/:squadron/pilots`               |Renders a list of pilots in that squadron|
|GET| `/:squadron/pilots/:callSign`         |Renders pilot details|
|GET| `/:squadron/pilots/new`           |Renders pilot form|
|POST| `/:squadron/pilots`              | Creates a new pilot and redirects to the show page|
|GET| `/:squadron/pilots/:callSign/edit`    |Renders prefilled pilot form|
|PATCH| `/:squadron/pilots/:callSign`       | Updates the existing pilot and redirects to the show page|
|DELETE| `/:squadron/pilots/:callSign`      | Destroys that pilot and redirects to their squadron page|

#### Database:

In this database setup, we'll want **one collection**: **squadrons**.
Each squadron will hold an array of its pilots.

**Document Attributes:**
> Squadron
> 
> - name
> - pilots
>     - name
>     - callSign
>     - squadronName

**Seed**
Seed the database with two or more squadrons.
Examples:

- Black Squadron
- Cloak Squadron
- Dagger Squadron
- Emperor's Shield
- Emperor's Sword
- Shadow Squadron
- Scythe Squadron

You can also use the black_squadron.json file seed black squadron pilots into the database.


## Remember

One step at a time. Write one route at a time and verify that it works before you move on.

#### Method Override

Method Override **should** be passed via query_parameter:
`myurl.com/?_method=DELETE`

Try that methodoverride pattern if you've been having trouble sending it as part of the request body. The hidden input pattern has been deprecated and removed.

Read more about current patterns for method override here: [https://github.com/expressjs/method-override](https://github.com/expressjs/method-override)

## Bonus

- Add routes to CRUD squadrons, as opposed to pilots.
- What happens if I add a pilot from a Squadron that isn't in the **squadrons** collection? Does it matter?

## Now,

![](http://overmental.com/wp-content/uploads/2015/07/Death-Star-fire.png)

> Witness the power of this fully armed and operational database. Fire at will, commander.
