### Gatsby 5 bug reproduction

GraphQL queries that sort using a field implemented as a resolver have caching issues.

1. Start dev server `npm run develop`, open URL at `http://localhost:8000/`
2. Notice that the videos are listed in the order defined in the `./content/videos-order.json` file

![](images/1.png)

3. Edit the `videos-order.json` file to change the order. The `order` resolver returns the correct updated integer, yet the GraphQL query still sorts using the previous sorting order.

![](images/2.png)

4. Stop the dev server, run `npm run clean`, start dev server.
5. The sort order will follow the `videos-order.json` order again as expected.

![](images/3.png)
