$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('subjectiveWeek2Q1\ReGiS.feature');
formatter.feature({
  "line": 1,
  "name": "Registrations",
  "description": "",
  "id": "registrations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Performing the user registration",
  "description": "",
  "id": "registrations;performing-the-user-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User in the registration form",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters required data",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 7
    },
    {
      "cells": [
        "FirstName",
        "Khizar"
      ],
      "line": 8
    },
    {
      "cells": [
        "LastName",
        "Hussain"
      ],
      "line": 9
    },
    {
      "cells": [
        "phone",
        "923709410"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "kjdfanf@gmail.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "Address",
        "jayaram St"
      ],
      "line": 12
    },
    {
      "cells": [
        "City",
        "vellore"
      ],
      "line": 13
    },
    {
      "cells": [
        "State",
        "tamiml nadu"
      ],
      "line": 14
    },
    {
      "cells": [
        "pin",
        "632012"
      ],
      "line": 15
    },
    {
      "cells": [
        "country",
        "INDIA"
      ],
      "line": 16
    },
    {
      "cells": [
        "userName",
        "khizarhussain"
      ],
      "line": 17
    },
    {
      "cells": [
        "password",
        "password@0205"
      ],
      "line": 18
    },
    {
      "cells": [
        "confirmPassword",
        "password@0205"
      ],
      "line": 19
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Registration should be success",
  "keyword": "Then "
});
formatter.match({
  "location": "Registraions.User_in_the_registration_form()"
});
formatter.result({
  "duration": 5133483100,
  "status": "passed"
});
formatter.match({
  "location": "Registraions.Data_entering(DataTable)"
});
formatter.result({
  "duration": 4890391500,
  "status": "passed"
});
formatter.match({
  "location": "Registraions.Successful_Regis()"
});
formatter.result({
  "duration": 723169900,
  "status": "passed"
});
});