

Source: 

Tutorial:  https://spring.io/guides/tutorials/react-and-spring-data-rest/
H2 JDBC URL : jdbc:h2:mem:testdb as detailed in http://www.springboottutorial.com/spring-boot-and-h2-in-memory-database

Tools

H2 Database

Changes Made:
1. In the Employee.java, removed @Data annotation which is tied to Lombok and replaced with setters/getters/toString().
2. Lombok appeared to be causing issue at runtime with no data showing in the UI.

Execution
URL
1. http://localhost:8080/ - componentDidMount will invoke and render /api/employees
2. To call the service api
    - http://localhost:8080/api/employees

H2 Database  (Edit Records)
1. To connect to H2 Database and edit/update records
          - http://localhost:8080/h2-console
          - use JDBC URL of jdbc:h2:mem:testdb
          - no password needed

Postman - GET and POST additional records
POST: 
URL : http://localhost:8080/api/employees 
Headers: 
      Key: Content-Type
      Value: application/json
      Body: 
	      {"firstName": "Bilbo", 
	       "lastName": "Baggins", 
	       "description": "burglar"
	      }
