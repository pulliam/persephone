# Little Black Book, Part II

![](http://farm4.static.flickr.com/3474/3255821552_67cea08661.jpg)


Create a Ruby Command Line CRUD Application using SQLITE3 called `little_black_book.rb`.

##### Technologies:

- Bash
- Ruby
    - `ARGV`
    - `String#split`
    - `sqlite3` gem
- SQLITE3
    - `schema.sql`
    - `paramours.db`


##### SQLITE3 GEM GUIDE:

Please use the following guide to refresh yourself on how to setup your project using the `sqlite3` gem.

[SQLITE3 Ruby Gem Guide](https://gist.github.com/phlco/60f6002292f73bc80943)

##### Application Details:

The Little Black Book holds a record of the user's paramours including:
- `first_name`
- `last_name`
- `birth_year`
- `sex`
- `number`
- `email`
- `is_married`

It persists its data using SQLITE so that the user never loses track of their paramours.

The Little Black Book has the following command paths:

- `post /entries/create`
- `get /entries`
- `get /entries/:id`
- `patch /entries/:id`
- `delete /entries/:id`

#### EXAMPLES:

(Use the examples commands to double check your work)

CREATE:

```bash
ruby little_black_book.rb post /entries/create first_name=Suzi&last_name=Q&sex=female&number=2156098248&email=suzi.q@gmail.com&is_married=false
```
> Creates a new entry and prints out that entry as confirmation.

```bash
id: 1
first_name: Suzi
last_name: Q
birth_year: unknown
sex: female
number: 2156098248
email: suzi.q@gmail.com
is_married: false
```

CREATE: (Example Two)

```bash
ruby little_black_book.rb post /entries/create first_name=Brad&last_name=P&sex=male&number=8002125858&email=brad.p63@fantasy.com@gmail.com&is_married=true&birth_year=1963
```
> Creates a new entry and prints out that entry as confirmation.

```bash
id: 2
first_name: Brad
last_name: P
birth_year: 1963
sex: male
number: 8002125858
email: brad.p63@fantasy.com
is_married: true
```

READ:

```bash
ruby little_black_book.rb get /entries
```
> Prints all entries in the little black book.
> One entry per line.

```bash
id: 1
first_name: Suzi
last_name: Q
birth_year: unknown
sex: female
number: 2156098248
email: suzi.q@gmail.com
is_married: false

id: 2
first_name: Brad
last_name: P
birth_year: 1963
sex: male
number: 8002125858
email: brad.p63@fantasy.com
is_married: true
```

```bash
ruby little_black_book.rb get /entries/1
```
> Prints the entry in the little black book with a matching `id`.

```bash
id: 1
first_name: Suzi
last_name: Q
birth_year: unknown
sex: female
number: 2156098248
email: suzi.q@gmail.com
is_married: false
```

UPDATE:

```bash
ruby little_black_book.rb patch /entries/1 number=21269842484
```
> Updates the number attribute of the entry with `id` of 1.
> Prints out the updated result.

```bash
id: 1
first_name: Suzi
last_name: Q
birth_year: unknown
sex: female
number: 21269842484
email: suzi.q@gmail.com
is_married: false
```

DELETE:

```bash
ruby little_black_book.rb delete /entries/1
```
> Deletes the entry with an `id` of 1.

```bash
DELETED:
id: 1
first_name: Suzi
last_name: Q
birth_year: unknown
sex: female
number: 21269842484
email: suzi.q@gmail.com
is_married: false
```

## Bonus Part 1:

Print out an error message if the entry or entries are not found or the command could not be completed for any reason.

## Bonus Part 2:

Accept extra query parameters.

```bash
ruby little_black_book.rb get /entries?sex=male
```

Allow the user to filter the entries by any of the attributes like 'sex'

