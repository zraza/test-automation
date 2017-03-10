Feature: User Signup

 Scenario: User Signup Screenshare
  When I am on "http://localhost:3000/story-block-1" page
  Then Full page screen should match the "Git_Hub_Sign_Up_Page" page

Scenario: User Signup header
  When I am on "/join" page
  And Element ".setup-header" should match the "Git_Hub_Home_Page" element
