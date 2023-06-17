# Sortable

This project involves building a web page to organize data about superheroes. The goal is to create a platform to gather information and organize it in a user-friendly manner. The provided data can be found in the "all.json" file.

Chek out : [link](https://tursynkhan.github.io/sortable/)<br>
Key features of the web page include:

1. Fetching the Data:
   - Use the JavaScript `fetch` function to retrieve the superhero data from a specified URL.
   - Parse the JSON response using the `response.json()` method.
   - Implement a `loadData` function to handle the fetched data.

2. Displaying the Data:
   - Utilize a `<table>` element to present the relevant superhero information.
   - Display the superhero's icon as an image (retrieved from the `.images.xs` field).
   - Show the superhero's name, full name, powerstats (each entry), race, gender, height, weight, place of birth, and alignment.
   - Implement pagination to display the data in multiple pages.
   - Use a `<select>` input to allow the user to choose the page size (10, 20, 50, 100, or all results), with 20 as the default option.

3. Search Functionality:
   - Enable users to filter information by searching for specific superhero names.
   - Implement an interactive search feature that updates the results dynamically as the user types.
   - Filter and display only the superheroes that match the search query.

4. Sorting the Data:
   - Allow users to sort the table by any column in ascending or descending order.
   - Initially, sort the rows by the column name in ascending order.
   - On the first click of a column heading, sort the rows by the data in that column in ascending order.
   - Subsequent clicks on a column heading toggle between ascending and descending order.
   - Handle sorting of both numerical and string columns appropriately, considering numerical values represented as strings.
   - Ensure that missing values are always sorted last, regardless of the sorting order.

These steps provide an overview of the project requirements. To implement the functionality, you will need to write JavaScript code to fetch and process the data, handle user interactions, and dynamically update the UI. HTML and CSS will be needed to structure and style the web page accordingly.

