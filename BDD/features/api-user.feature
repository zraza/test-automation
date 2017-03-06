Feature: User Endpoint

Scenario Outline: API returns correct full name
 When I make a GET request to "<Path>"
 	Then The response property "name" should be "<User Name>"

  Examples:
  | Path            | User Name    |
  | /users/photobox | PhotoBox     |
  | /users/zraza    | Zeeshan Raza |

Scenario: API returns error for non-existing user
 When I make a GET request to "user/photoboxxxxx"
 	Then The response property "message" should be "Not Found"

