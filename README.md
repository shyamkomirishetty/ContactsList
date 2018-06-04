## Contacts Information
This is a simple contacts information application that allows the user(s) to add/edit/delete/view the contacts. Please note that the data does NOT persist. On every page reload the data entered will be LOST. It is NOT connected to a database. Also, by default 3 users are added to the contacts list. These users will be available when the application is launched or reloaded.

This is a server side rendered application built using Node, React and Redux on Docker.

### Code Structure

All the source code is in the `src` folder. This folder consists of the server side code in the `server` folder and the UI code in the `UI` folder. All the unit tests are available is the `test` folder. The UI/Contacts folder mainly has the following:

* `actions`: includes all the Redux actions.
* `components`: include the source code of all React JSX components with their respective CSS files.
* `reducers`: includes all the Redux reducers.

### Development

In order to run the App locally, Docker needs to be [installed](https://docs.docker.com/install/). Once the installation is complete, open your Terminal(Mac) or its Windows equivalent and navigate to the project folder. Type the following commands:
```bash
docker-compose build
```
This may take a few minutes. Once it is complete, run the following command.
```bash
docker-compose up
```
After the server starts, open your browser and go to [http://localhost:3000](http://localhost:3000)

### Website

The application is hosted on Heroku and can be accessed here:

[https://mysterious-meadow-85017.herokuapp.com](https://mysterious-meadow-85017.herokuapp.com)
