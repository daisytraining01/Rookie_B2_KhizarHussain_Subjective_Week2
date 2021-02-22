Feature: Registrations

Scenario: Performing the user registration
Given User in the registration form
When User enters required data

| Fields  	| Values |
| FirstName | Khizar |
| LastName  | Hussain |
| phone 	| 923709410 |
| email  	| kjdfanf@gmail.com |
| Address   | jayaram St |
| City 		| vellore |
| State		| tamiml nadu |
| pin 		| 632012 |
| country	| INDIA |
| userName	| khizarhussain |
| password	| password@0205 |
| confirmPassword| password@0205 |

Then Registration should be success