# Homework Tracker

Track students' homework submissions throughout their course.

When a user logs in, they should be able to choose which "portal," or role, to log in as (Instructor, Student, Producer).

### Instructor Portal

An instructor may log in and view the homework submissions of every student in their current course.

They should be able to see a list of "Ungraded" homework and "Graded" homework.

They should be able to mark ungraded homework as Complete, Incomplete, or Unsatisfactory.

An instructor should be able to view a list of all student data, as well as a list of students whose completion rates are low and they need to talk to.

An instructor should be able to create Homework Takeaway markdowns for each assignment. They should be able to view, edit, and delete existing Takeaways.

These markdowns should be automatically available on Github as gists.

### Student Portal

A student may log in, submit a link to their homework assignments, and view their homework submissions.

A student should be able to view grades for all their homework. If a homework assignment has not been graded, they should see their grade displayed as "Grade Pending."

If a student's "Unsatisfactory" percentage rises above 20%, the front page should display a notification that they need to contact their instructional team for help with a link to send an email to their instructor. In addition, they should recieve an email with the same notification.

A student can view a list of homework gists that their instructors have created. Additionally, they may view the content of individual homework gists on the site along with a link to the gist on GitHub.

If a Takeaways gist has been created for an assignment, they student should recieve an email notification alerting them.

Students should be able to see all of the courses/cohorts they are in.

### The Producer Portal

A course producer may run several WDIs.  When they log into the Producer Portal they should be able to see a list of the cohorts they're producing.

A producer should be able to view the homework completion records for each cohort (each student's number of complete, incomplete, and satisfactory assignments, along with percentages for each) and a list of any students whose unsatisfactory rate is above 20%.

### The Signup process

When an instructor creates a new cohort through the app, each student should receive an email with a link back to the app for them to either sign up or login. (If they've already taken a class at GA, they should be able to log in with the same account).
