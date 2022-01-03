  ## Project commands

  ### Prepare project  
  ```bash
    # Install dependencies
    yarn install    

    # Docker - Create containers
    docker-compose up

    # Run migrations
    yarn typeorm migration:run 
  ```

  ### Run project
  ```bash
    # Docker - Start containers
    docker-compose start

    # Docker - Stop containers
    docker-compose stop
  ```

  ### Run tests
  ```bash
    # Run test
    yarn test    
  ```

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