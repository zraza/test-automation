Feature: User Signup

Background:
Given I am on "/" page
  And I click link "Sign up"

 Scenario: Username is NOT available
  When I enter "Username" as "photobox"
  Then I should see "errored" icon for "Username"
  And I should see error "Username is already taken" for "Username"

Scenario: Username is available
  When I enter "Username" as "photoboxxxxxx"
  Then I should see "successful" icon for "Username"
  And I should NOT see error "Username is already taken" for "Username"