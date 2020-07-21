## Technical questions

1. What architectures or patterns are you using currently or have worked on recently?

   Flux architecture.

2. What do you think of them and would you want to implement it again?

   Flux architecture: I think it is good to keep one data flow direction (store, actions, views) because
   it keeps the code declarative and easy to maintain and test. I like how Redux implement this architecture,
   separating actions and reducers makinh your application clean, scalable an easy to test.

3. What version control system do you use or prefer?

   I use Git all my career so it would be my preference. I can't compare with other ones.

4. What is your favorite language feature and can you give a short snippet on how you use it?

   I like a lot destructuring, I think it is very useful to get property values from objects an arrays:

```
  const [isActive, setActive] = useState(false);
```

5. What future or current technology do you look forward to the most or want to use and why?

   I like a lot GraphQL. I think nowadays, with microservice architechtures, get data from the clinets is
   becoming more and more complex. I find GraphQL very interesting technology to solve a lot of problems coming from that like
   underfetching and overfething + it gives a lot of independence to the clients (web, mobile app, etc).

6. How would you find a production bug/performance issue? Have you done this before?

   I usually connected the clients with services as Sentry for bugs so it's easier and faster
   to find the issue. For perfomance, React has a performance dev tool that you can use to find, for example,
   useless re-renders that can affect the performance.

7. How would you improve the application (bug fixes, security, performance, etc.)?

   I would like to add more tests, especially to the hooks which contains the logic. The park action is getting
   always the first door from a garage so I would like to add a button where the user could select the door to park.
