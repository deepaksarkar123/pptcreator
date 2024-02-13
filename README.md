1. Install Python
Ensure that Python is installed on the Windows machine. They can download and install it from python.org.

2. Set Up a Virtual Environment (Optional but Recommended)
It's a good practice to use a virtual environment for Python projects to manage dependencies. They can set up a virtual environment by opening the Command Prompt and running:


python -m venv venv
This command creates a virtual environment named venv. To activate it, they should run:

.\venv\Scripts\activate

3. Install Required Libraries
Your application requires Flask and python-pptx. With the virtual environment activated (or without it, if they choose not to use one), they need to install these libraries using pip:

pip install Flask python-pptx urllib3

4. Adjust the File Path
The file paths in your script (/Users/deepaksarkar/Documents/pptascode/catalyst.pptx and /Users/deepaksarkar/Documents/pptascode/populated_presentation.pptx) are specific to macOS. Windows uses a different file path format. They need to change these paths to match Windows file system format, like C:\Users\Username\Documents\pptascode\catalyst.pptx.

5. Run the Application
Once everything is set up, they can run the application by navigating to the directory containing your script in the Command Prompt and running:

python <script_name>.py (python server.py)
Replace <script_name> with the name of your Python script file.

6. Accessing the Flask Application
After starting the Flask application, it will be accessible in a web browser at http://127.0.0.1:5000/. Since your application seems to be designed to receive POST requests to /api/data, they will need to use a tool like Postman or a curl command to send a request to http://127.0.0.1:5000/api/data.

Important Note: If they encounter any permission issues while saving the PowerPoint file on Windows, they should ensure that the specified output directory exists and that they have write permissions for it. Also, adjusting the script to account for Windows file paths and ensuring all dependencies are correctly installed are critical steps for the successful execution of the script.
