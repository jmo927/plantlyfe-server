# PlantLyfe

This is the server-side code of the PlantLyfe Plant Watering Scheduler. 
The client-side code can be found [here](https://github.com/jmo927/plantlyfe-client).

## Technologies Used
- Node.js.  JavaScript runtime.  
- Express.js.  Server middleware, routing, etc.
- MongoDB / Mongoose.  Database management.
- [Heroku](https://plantlyfe-server.herokuapp.com/api/plants)*.  Hosting.

*Note that Heroku's load times can be slow when loaded for the first time.  Thank you for your patience. 

## Acceptance Criteria

### Assumptions

- We do not water our plants on a weekend. Work-life balance is important, and we shouldn't be in
the office on a weekend.
- Our plants are reasonably tolerant and will still be happy if they are watered a day before or after
the day they should be watered.
- Watering an individual plant takes no time at all so you don't have to worry about how many
plants can be watered in a particular day.
- The scheduling should start from next Monday and last for 12 weeks.
- All plants will be watered on the first day of the schedule (next Monday).
- We recognize that when to water a plant is heavily dependent on other factors such as soil,
weather, humidity, etc. You can assume that we know exactly when to water these specific plants.
- You have been provided a JSON file which contains data for our plants.

### Acceptance Criteria

- The user can view which plant(s) to water on which date(s).
- The schedule covers the next 12 weeks starting next Monday.
- No plants are watered on Saturdays or Sundays.
- Each plant is watered on its desired schedule or as close as possible, taking into account weekends.
