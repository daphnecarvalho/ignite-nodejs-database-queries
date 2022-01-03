# Desafio: Database Queries

Instructions: [Notion - Rocketseat](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45)

## Tests

+ Repositories
  - ✓ [UsersRepository] should be able to find user with games list by user's ID
  - ✓ [UsersRepository] should be able to list users ordered by first name
  - ✓ [UsersRepository] should be able to find user by full name
  - ✓ [GamesRepository] should be able find a game by entire or partial given title
  - ✓ [GamesRepository] should be able to get the total count of games
  - ✓ [GamesRepository] should be able to list users who have given game id

<p>
Test Suites: 1 total
</p>
<p>
Tests: 6 total
</p>

## Project commands
### Prepare project  
```bash
  # Install dependencies
  yarn install    

  # Docker - Create container
  docker run --name ignite-challenge-database-queries -e POSTGRES_DB=queries_challenge -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
### Run project
```bash
  # Docker - Start container
  docker start ignite-challenge-database-queries

  # Docker - Stop container
  docker stop ignite-challenge-database-queries
```
### Run tests
```bash
  # Run test
  yarn test    
```