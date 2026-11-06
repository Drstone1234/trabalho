import os

from flask import Flask, abort, render_template, send_from_directory
from jinja2 import ChoiceLoader, FileSystemLoader

BASE = os.path.dirname(os.path.abspath(__file__))

# static_folder=None: a rota /static é definida abaixo, para funcionar
# tanto com as pastas templates/ e static/ quanto com tudo solto na raiz.
app = Flask(__name__, static_folder=None, template_folder=None)

# Procura o index.html em templates/ e, se não achar, na própria raiz
app.jinja_loader = ChoiceLoader(
    [
        FileSystemLoader(os.path.join(BASE, "templates")),
        FileSystemLoader(BASE),
    ]
)

PERMITIDOS = (".css", ".js")


@app.route("/static/<path:filename>", endpoint="static")
def arquivos_estaticos(filename):
    if not filename.endswith(PERMITIDOS):
        abort(404)
    pasta_static = os.path.join(BASE, "static")
    if os.path.isfile(os.path.join(pasta_static, filename)):
        return send_from_directory(pasta_static, filename)
    if os.path.isfile(os.path.join(BASE, filename)):
        return send_from_directory(BASE, filename)
    abort(404)


@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    # host 0.0.0.0 é necessário para o CodeSandbox expor o preview
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
