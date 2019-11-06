This is my real stab at Full Stack design using the most overused React idea ever, notes.

I formed a Django backend for models, authorizations, and API links. I also created a custom user app since it was a good practice to get into, allowing me to branch out further if I had to expand and grow the backend.

On the front I continued with React and started my first run into Redux (Which I know is probably overkill, but I wanted the practice), Router and using components from other areas. I used the Material-Kit-React by Creative Tim for a ton of my styling and the Framer Motion library for some quick animations on buttons and drawer pulled from Material-UI. I really wanted to use MUI-Datatables but they do not allow varying column widths for my notes side.

This app will allow you to create an account, and stores your personal notes on in a SQLite Database. It will also hold your login over refreshes and window closes for a time.

Deployed at : www.notez.karlkeisel.com
