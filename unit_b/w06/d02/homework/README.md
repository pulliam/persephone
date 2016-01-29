# Happy Turkey Day!

![turkeyturkeyturkey](./img/turkey.png)

We hope you have a wonderful holiday break and enjoy spending it with friends/family/lonely programmers! In addition to consuming food and seeing family over the next few days, you'll be practicing what you've learned over the past week by completing two labs (below). These labs  focus on using **Sinatra** and **SQL** to *serve up content* to our users and *persist data* that they give us. Sweet! 

You'll also be doing some **reading** on important conceptual ideas you'll be working with on your return. These readings will give you a look at the **why** and **how** of the tools you will be using for the rest of the course (and likely your career) - it's a good idea to know what problems they are meant to solve and how they approached them.

Your instructors will not be readily available to answer questions on Slack during the break - we encourage you to embrace this less-structured exploration time to break out on your own, find awesome resources, and share them with your compatriots! 

## Assignments

Work through the following two assignments one at a time, moving on to the next only after you've completed the MVP (Minimum Viable Product - in this case, everything before the bonus). 

- Make sure you psuedocode, model your data, and make a plan of attack before you start coding! As always, you need to know **where you're going** before you hit the gas and start driving.
- Complete both projects **before you tackle the bonuses** for either. Once you've got both working, ***THEN AND ONLY THEN***, worry about the bonuses!

#### [Phil's Phabulous Phruit Pharm](./fruit_farm.md)

#### [Sung's Sassy Sweets Shoppe](./sweets_shop.md)

## Readings

### RESTFUL ROUTING

Guiding Questions:

- What is REST?
- What is the purpose of RESTFUL paths?
- Are RESTFUL paths required on web servers?

Readings:

- REST: [According to Wiki](https://en.wikipedia.org/wiki/Representational_state_transfer)
- REST CHART:

| HTTP VERB | Route | View | Purpose |URL Path Ex.|
|:---------:|:-----:|:----:|:-------:|:----------:|
| GET       | /resources          | Index| Show each|        http://api.example.com/resources/    |
| GET       | /resources/new      | New  | Show form|        http://api.example.com/resources/new |
| POST      | /resources          | --   | Create one|       http://api.example.com/resources/    |
| GET       | /resources/:id      | Show | Show one|         http://api.example.com/resources/1   |
| GET       | /resources/:id/edit | Edit  | Show form|        http://api.example.com/resources/1   |
| PATCH/PUT | /resources/:id      |  --| Updates one|  http://api.example.com/resources/1   |
| DELETE    | /resources/:id      |  --| Deletes one|      http://api.example.com/resources/1   |

### Method Override

Guiding Questions:

- What HTTP Verbs or Methods are allowed in HTML Forms?
- Why?
- How can we get around this limitation?

Readings:

Methods allowed in HTML Forms: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP#HTTP_Requests_Methods_in_HTML_Forms)

- Why other methods aren't allowed: [Stackoverflow Answer](http://programmers.stackexchange.com/questions/114156/why-are-there-are-no-put-and-delete-methods-on-html-forms/211790#211790)

In Sinatra: [Sinatra Docs](http://www.sinatrarb.com/configuration.html#methodoverride---enabledisable-the-post-method-hack)


### SQL Joins

Guiding Questions:

- What does a JOIN do?
- Why are JOINs useful?
- If you made a venn diagram,
    - which areas would an INNER JOIN cover?
    - LEFT OUTER JOIN?
    - RIGHT OUTER JOIN?

Readings:

- [SQL Joins](http://www.halfgaar.net/sql-joins-are-easy)

### More Readingz:

#### [Introduction to Foreign Keys](http://gregheo.com/blog/foreign-keys-intro/)

#### [Foreign Keys in SQLite3](https://www.sqlite.org/foreignkeys.html#fk_basics)

#### [Database Normalization](https://w3.cs.jmu.edu/mayfiecs/cs474_12sp/notes/normposter.jpg)

This poster explains, in detail with examples, the five rules of data normalization. These rules will help you understand how to set up and design your databases. If nothing else, pay close attention to the first three rules! 

#### [Sublime Text 3 Guide](https://github.com/ga-students/wdi-persephone/tree/master/guides/sublime_text_3.md)

Link to a Sublime Text 3 Guide in your `guides/` folder. Cheatsheets, shortcuts, docs, and more!
