# Quiz Builder

Create and share quizzes for class.

### The Instructor Dashboard

When an instructor logs in they should have a dashboard that has a link to create a new quiz and corresponding answer key, lists quizzes and answer keys they've created, and any notifications about quizzes students have taken.

And instructor should be able to grade individual students' completed quizzes. Partial credit should be allowed.

An instructor should be able to view individual student's progress, as well as a summary of the cohort's performance as a whole.

### Quiz and Answer Key Creation

An instructor can log in and create a new quiz for a class. Quizzes may have multiple choice or short free-form, typed-out answers. The questions may be formatted in Markdown to allow code snippets. Each question should have a corresponding answer key. 

An instructor may browse quizzes created by other instructors and assign them to their class.

### The Student Portal

When a student logs in they should be able to view an index of their old quizzes based on date or score and see their overall progress.

### Quiz Taking

If a quiz has been assigned for that day, a student can go directly to it by visiting `/quiz`.

If a quiz hasn't been assigned for that day, `/quiz` should say so.

A student should not be able to take a quiz from a previous day. It should show up as a 0 or incomplete.

### Quiz Grading

Quizes should be automatically graded upon submission to the server based on the answer key provided by the instructor.

When a student's quiz has been graded, they should recieve an email with the results.

### The Signup process

When an instructor creates a new cohort through the app, each student should receive an email with a link back to the app for them to either sign up or login. (If they've already taken a class at GA, they should be able to log in with the same account).
