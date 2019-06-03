from flask import Flask, render_template
import requests

def create_app():
    app = Flask(__name__, static_folder='../static/dist', template_folder='../static/templates')

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.errorhandler(404)
    def page_not_found(e):
        return render_template('error.html'), 404

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
